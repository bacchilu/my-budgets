!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequirebb14;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequirebb14=s),s.register("2nacn",(function(t,n){
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o;e(t.exports,"Fragment",(function(){return r}),(function(e){return r=e})),e(t.exports,"jsx",(function(){return i}),(function(e){return i=e})),e(t.exports,"jsxs",(function(){return o}),(function(e){return o=e}));var a=s("jE8J5"),l=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,h=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,i={},s=null,o=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:l,type:e,key:s,ref:o,props:i,_owner:h.current}}r=u,i=f,o=f})),s.register("jE8J5",(function(e,t){"use strict";e.exports=s("gxKzV")})),s.register("gxKzV",(function(t,n){
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,s,o,a,l,u,c,h,d,f,p,m,g,y,v,b,w,E,k,_,S,T,I,C,N,x,A,R,D,O,L,P,M,F;e(t.exports,"Children",(function(){return r}),(function(e){return r=e})),e(t.exports,"Component",(function(){return i}),(function(e){return i=e})),e(t.exports,"Fragment",(function(){return s}),(function(e){return s=e})),e(t.exports,"Profiler",(function(){return o}),(function(e){return o=e})),e(t.exports,"PureComponent",(function(){return a}),(function(e){return a=e})),e(t.exports,"StrictMode",(function(){return l}),(function(e){return l=e})),e(t.exports,"Suspense",(function(){return u}),(function(e){return u=e})),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return c}),(function(e){return c=e})),e(t.exports,"cloneElement",(function(){return h}),(function(e){return h=e})),e(t.exports,"createContext",(function(){return d}),(function(e){return d=e})),e(t.exports,"createElement",(function(){return f}),(function(e){return f=e})),e(t.exports,"createFactory",(function(){return p}),(function(e){return p=e})),e(t.exports,"createRef",(function(){return m}),(function(e){return m=e})),e(t.exports,"forwardRef",(function(){return g}),(function(e){return g=e})),e(t.exports,"isValidElement",(function(){return y}),(function(e){return y=e})),e(t.exports,"lazy",(function(){return v}),(function(e){return v=e})),e(t.exports,"memo",(function(){return b}),(function(e){return b=e})),e(t.exports,"startTransition",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_act",(function(){return E}),(function(e){return E=e})),e(t.exports,"useCallback",(function(){return k}),(function(e){return k=e})),e(t.exports,"useContext",(function(){return _}),(function(e){return _=e})),e(t.exports,"useDebugValue",(function(){return S}),(function(e){return S=e})),e(t.exports,"useDeferredValue",(function(){return T}),(function(e){return T=e})),e(t.exports,"useEffect",(function(){return I}),(function(e){return I=e})),e(t.exports,"useId",(function(){return C}),(function(e){return C=e})),e(t.exports,"useImperativeHandle",(function(){return N}),(function(e){return N=e})),e(t.exports,"useInsertionEffect",(function(){return x}),(function(e){return x=e})),e(t.exports,"useLayoutEffect",(function(){return A}),(function(e){return A=e})),e(t.exports,"useMemo",(function(){return R}),(function(e){return R=e})),e(t.exports,"useReducer",(function(){return D}),(function(e){return D=e})),e(t.exports,"useRef",(function(){return O}),(function(e){return O=e})),e(t.exports,"useState",(function(){return L}),(function(e){return L=e})),e(t.exports,"useSyncExternalStore",(function(){return P}),(function(e){return P=e})),e(t.exports,"useTransition",(function(){return M}),(function(e){return M=e})),e(t.exports,"version",(function(){return F}),(function(e){return F=e}));var U=Symbol.for("react.element"),V=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),q=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator;var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function Z(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||J}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||J}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,Y(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ie=Object.prototype.hasOwnProperty,se={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)ie.call(t,r)&&!oe.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:U,type:e,key:s,ref:o,props:i,_owner:se.current}}function le(e){return"object"==typeof e&&null!==e&&e.$$typeof===U}var ue=/\/+/g;function ce(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function he(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case U:case V:o=!0}}if(o)return i=i(o=e),e=""===r?"."+ce(o,0):r,re(i)?(n="",null!=e&&(n=e.replace(ue,"$&/")+"/"),he(i,t,n,"",(function(e){return e}))):null!=i&&(le(i)&&(i=function(e,t){return{$$typeof:U,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ue,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=""===r?".":r+":",re(e))for(var a=0;a<e.length;a++){var l=r+ce(s=e[a],a);o+=he(s,t,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Q&&e[Q]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(s=e.next()).done;)o+=he(s=s.value,t,n,l=r+ce(s,a++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function de(e,t,n){if(null==e)return e;var r=[],i=0;return he(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function fe(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var pe={current:null},me={transition:null};r={map:de,forEach:function(e,t,n){de(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return de(e,(function(){t++})),t},toArray:function(e){return de(e,(function(e){return e}))||[]},only:function(e){if(!le(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,s=j,o=B,a=te,l=z,u=K,c={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:me,ReactCurrentOwner:se},h=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y({},e.props),i=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=se.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ie.call(t,l)&&!oe.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:U,type:e.type,key:i,ref:s,props:r,_owner:o}},d=function(e){return(e={$$typeof:q,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:$,_context:e},e.Consumer=e},f=ae,p=function(e){var t=ae.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:H,render:e}},y=le,v=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:fe}},b=function(e,t){return{$$typeof:W,type:e,compare:void 0===t?null:t}},w=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},E=function(){throw Error("act(...) is not supported in production builds of React.")},k=function(e,t){return pe.current.useCallback(e,t)},_=function(e){return pe.current.useContext(e)},S=function(){},T=function(e){return pe.current.useDeferredValue(e)},I=function(e,t){return pe.current.useEffect(e,t)},C=function(){return pe.current.useId()},N=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)},x=function(e,t){return pe.current.useInsertionEffect(e,t)},A=function(e,t){return pe.current.useLayoutEffect(e,t)},R=function(e,t){return pe.current.useMemo(e,t)},D=function(e,t,n){return pe.current.useReducer(e,t,n)},O=function(e){return pe.current.useRef(e)},L=function(e){return pe.current.useState(e)},P=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)},M=function(){return pe.current.useTransition()},F="18.2.0"})),s.register("2wM5b",(function(t,n){
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o,a,l,u,c,h,d,f,p,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return r}),(function(e){return r=e})),e(t.exports,"createPortal",(function(){return i}),(function(e){return i=e})),e(t.exports,"createRoot",(function(){return o}),(function(e){return o=e})),e(t.exports,"findDOMNode",(function(){return a}),(function(e){return a=e})),e(t.exports,"flushSync",(function(){return l}),(function(e){return l=e})),e(t.exports,"hydrate",(function(){return u}),(function(e){return u=e})),e(t.exports,"hydrateRoot",(function(){return c}),(function(e){return c=e})),e(t.exports,"render",(function(){return h}),(function(e){return h=e})),e(t.exports,"unmountComponentAtNode",(function(){return d}),(function(e){return d=e})),e(t.exports,"unstable_batchedUpdates",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_renderSubtreeIntoContainer",(function(){return p}),(function(e){return p=e})),e(t.exports,"version",(function(){return m}),(function(e){return m=e}));var g=s("jE8J5"),y=s("hnwcm");function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,w={};function E(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(w[e]=t,e=0;e<t.length;e++)b.add(t[e])}var _=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),S=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},C={};function N(e,t,n,r,i,s,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){x[e]=new N(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];x[t]=new N(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){x[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){x[e]=new N(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){x[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){x[e]=new N(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){x[e]=new N(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){x[e]=new N(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){x[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)}));var A=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}function D(e,t,n,r){var i=x.hasOwnProperty(t)?x[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!S.call(C,e)||!S.call(I,e)&&(T.test(e)?C[e]=!0:(I[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(A,R);x[t]=new N(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(A,R);x[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(A,R);x[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){x[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)})),x.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){x[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)}));var O=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),j=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),H=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var K=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var W=Symbol.iterator;function G(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=W&&e[W]||e["@@iterator"])?e:null}var Q,J=Object.assign;function Y(e){if(void 0===Q)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var X=!1;function Z(e,t){if(!e||X)return"";X=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),s=r.stack.split("\n"),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(1!==o||1!==a)do{if(o--,0>--a||i[o]!==s[a]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=a);break}}}finally{X=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Y(e):""}function ee(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case P:return"Portal";case U:return"Profiler";case F:return"StrictMode";case B:return"Suspense";case $:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case V:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case q:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case H:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function se(e){e._valueTracker||(e._valueTracker=function(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function oe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ae(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function le(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ue(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ce(e,t){null!=(t=t.checked)&&D(e,"checked",t,!1)}function he(e,t){ce(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?fe(e,t.type,n):t.hasOwnProperty("defaultValue")&&fe(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function de(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function fe(e,t,n){"number"===t&&ae(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pe=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(v(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ye(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(v(92));if(pe(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ve(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function be(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function we(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ee(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?we(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ke,_e,Se=(_e=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ke=ke||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return _e(e,t)}))}:_e);function Te(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];function Ne(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Ie.hasOwnProperty(e)&&Ie[e]?(""+t).trim():t+"px"}function xe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Ne(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Ie).forEach((function(e){Ce.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ie[t]=Ie[e]}))}));var Ae=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(e,t){if(t){if(Ae[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(v(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(v(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(v(62))}}function De(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=null;function Le(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Pe=null,Me=null,Fe=null;function Ue(e){if(e=Di(e)){if("function"!=typeof Pe)throw Error(v(280));var t=e.stateNode;t&&(t=Li(t),Pe(e.stateNode,e.type,t))}}function Ve(e){Me?Fe?Fe.push(e):Fe=[e]:Me=e}function je(){if(Me){var e=Me,t=Fe;if(Fe=Me=null,Ue(e),t)for(e=0;e<t.length;e++)Ue(t[e])}}function ze(e,t){return e(t)}function Be(){}var $e=!1;function qe(e,t,n){if($e)return e(t,n);$e=!0;try{return ze(e,t,n)}finally{$e=!1,(null!==Me||null!==Fe)&&(Be(),je())}}function He(e,t){var n=e.stateNode;if(null===n)return null;var r=Li(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(v(231,t,typeof n));return n}var Ke=!1;if(_)try{var We={};Object.defineProperty(We,"passive",{get:function(){Ke=!0}}),window.addEventListener("test",We,We),window.removeEventListener("test",We,We)}catch(_e){Ke=!1}function Ge(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var Qe=!1,Je=null,Ye=!1,Xe=null,Ze={onError:function(e){Qe=!0,Je=e}};function et(e,t,n,r,i,s,o,a,l){Qe=!1,Je=null,Ge.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(v(188))}function it(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rt(i),e;if(s===r)return rt(i),t;s=s.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(3!==n.tag)throw Error(v(188));return n.stateNode.current===n?e:t}(e))?st(e):null}function st(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=st(e);if(null!==t)return t;e=e.sibling}return null}var ot=y.unstable_scheduleCallback,at=y.unstable_cancelCallback,lt=y.unstable_shouldYield,ut=y.unstable_requestPaint,ct=y.unstable_now,ht=y.unstable_getCurrentPriorityLevel,dt=y.unstable_ImmediatePriority,ft=y.unstable_UserBlockingPriority,pt=y.unstable_NormalPriority,mt=y.unstable_LowPriority,gt=y.unstable_IdlePriority,yt=null,vt=null;var bt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(wt(e)/Et|0)|0},wt=Math.log,Et=Math.LN2;var kt=64,_t=4194304;function St(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=268435455&n;if(0!==o){var a=o&~i;0!==a?r=St(a):0!==(s&=o)&&(r=St(s))}else 0!==(o=n&~i)?r=St(o):0!==s&&(r=St(s));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&0!=(4194240&s)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-bt(t)),r|=e[n],t&=~i;return r}function It(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ct(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Nt(){var e=kt;return 0==(4194240&(kt<<=1))&&(kt=64),e}function xt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function At(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-bt(t)]=n}function Rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Dt=0;function Ot(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var Lt,Pt,Mt,Ft,Ut,Vt=!1,jt=[],zt=null,Bt=null,$t=null,qt=new Map,Ht=new Map,Kt=[],Wt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gt(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":qt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(t.pointerId)}}function Qt(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=Di(t))&&Pt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Jt(e){var t=Ri(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void Ut(e.priority,(function(){Mt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=un(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Di(n))&&Pt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Oe=r,n.target.dispatchEvent(r),Oe=null,t.shift()}return!0}function Xt(e,t,n){Yt(e)&&n.delete(t)}function Zt(){Vt=!1,null!==zt&&Yt(zt)&&(zt=null),null!==Bt&&Yt(Bt)&&(Bt=null),null!==$t&&Yt($t)&&($t=null),qt.forEach(Xt),Ht.forEach(Xt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,Vt||(Vt=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<jt.length){en(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&en(zt,e),null!==Bt&&en(Bt,e),null!==$t&&en($t,e),qt.forEach(t),Ht.forEach(t),n=0;n<Kt.length;n++)(r=Kt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&null===(n=Kt[0]).blockedOn;)Jt(n),null===n.blockedOn&&Kt.shift()}var nn=O.ReactCurrentBatchConfig,rn=!0;function sn(e,t,n,r){var i=Dt,s=nn.transition;nn.transition=null;try{Dt=1,an(e,t,n,r)}finally{Dt=i,nn.transition=s}}function on(e,t,n,r){var i=Dt,s=nn.transition;nn.transition=null;try{Dt=4,an(e,t,n,r)}finally{Dt=i,nn.transition=s}}function an(e,t,n,r){if(rn){var i=un(e,t,n,r);if(null===i)ri(e,t,r,ln,n),Gt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return zt=Qt(zt,e,t,n,r,i),!0;case"dragenter":return Bt=Qt(Bt,e,t,n,r,i),!0;case"mouseover":return $t=Qt($t,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return qt.set(s,Qt(qt.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ht.set(s,Qt(Ht.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Gt(e,r),4&t&&-1<Wt.indexOf(e)){for(;null!==i;){var s=Di(i);if(null!==s&&Lt(s),null===(s=un(e,t,n,r))&&ri(e,t,r,ln,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else ri(e,t,r,null,n)}}var ln=null;function un(e,t,n,r){if(ln=null,null!==(e=Ri(e=Le(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function cn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ht()){case dt:return 1;case ft:return 4;case pt:case mt:return 16;case gt:return 536870912;default:return 16}default:return 16}}var hn=null,dn=null,fn=null;function pn(){if(fn)return fn;var e,t,n=dn,r=n.length,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[s-t];t++);return fn=i.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function yn(){return!1}function vn(e){function t(t,n,r,i,s){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?gn:yn,this.isPropagationStopped=yn,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var bn,wn,En,kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=vn(kn),Sn=J({},kn,{view:0,detail:0}),Tn=vn(Sn),In=J({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&"mousemove"===e.type?(bn=e.screenX-En.screenX,wn=e.screenY-En.screenY):wn=bn=0,En=e),bn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Cn=vn(In),Nn=vn(J({},In,{dataTransfer:0})),xn=vn(J({},Sn,{relatedTarget:0})),An=vn(J({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=J({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dn=vn(Rn),On=vn(J({},kn,{data:0})),Ln={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Mn[e])&&!!t[e]}function Un(){return Fn}var Vn=J({},Sn,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Pn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jn=vn(Vn),zn=vn(J({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Bn=vn(J({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),$n=vn(J({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),qn=J({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hn=vn(qn),Kn=[9,13,27,32],Wn=_&&"CompositionEvent"in window,Gn=null;_&&"documentMode"in document&&(Gn=document.documentMode);var Qn=_&&"TextEvent"in window&&!Gn,Jn=_&&(!Wn||Gn&&8<Gn&&11>=Gn),Yn=String.fromCharCode(32),Xn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==Kn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function ir(e,t,n,r){Ve(r),0<(t=si(t,"onChange")).length&&(n=new _n("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,or=null;function ar(e){Yr(e,0)}function lr(e){if(oe(Oi(e)))return e}function ur(e,t){if("change"===e)return t}var cr=!1;if(_){var hr;if(_){var dr="oninput"in document;if(!dr){var fr=document.createElement("div");fr.setAttribute("oninput","return;"),dr="function"==typeof fr.oninput}hr=dr}else hr=!1;cr=hr&&(!document.documentMode||9<document.documentMode)}function pr(){sr&&(sr.detachEvent("onpropertychange",mr),or=sr=null)}function mr(e){if("value"===e.propertyName&&lr(or)){var t=[];ir(t,or,e,Le(e)),qe(ar,t)}}function gr(e,t,n){"focusin"===e?(pr(),or=n,(sr=t).attachEvent("onpropertychange",mr)):"focusout"===e&&pr()}function yr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return lr(or)}function vr(e,t){if("click"===e)return lr(t)}function br(e,t){if("input"===e||"change"===e)return lr(t)}var wr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function Er(e,t){if(wr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!S.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _r(e,t){var n,r=kr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=kr(r)}}function Sr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Sr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Tr(){for(var e=window,t=ae();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=ae((e=t.contentWindow).document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Cr(e){var t=Tr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sr(n.ownerDocument.documentElement,n)){if(null!==r&&Ir(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=_r(n,s);var o=_r(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nr=_&&"documentMode"in document&&11>=document.documentMode,xr=null,Ar=null,Rr=null,Dr=!1;function Or(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Dr||null==xr||xr!==ae(r)||("selectionStart"in(r=xr)&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Rr&&Er(Rr,r)||(Rr=r,0<(r=si(Ar,"onSelect")).length&&(t=new _n("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xr)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},Mr={},Fr={};function Ur(e){if(Mr[e])return Mr[e];if(!Pr[e])return e;var t,n=Pr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Fr)return Mr[e]=n[t];return e}_&&(Fr=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);var Vr=Ur("animationend"),jr=Ur("animationiteration"),zr=Ur("animationstart"),Br=Ur("transitionend"),$r=new Map,qr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(e,t){$r.set(e,t),E(t,[e])}for(var Kr=0;Kr<qr.length;Kr++){var Wr=qr[Kr];Hr(Wr.toLowerCase(),"on"+(Wr[0].toUpperCase()+Wr.slice(1)))}Hr(Vr,"onAnimationEnd"),Hr(jr,"onAnimationIteration"),Hr(zr,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(Br,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function Jr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,o,a,l){if(et.apply(this,arguments),Qe){if(!Qe)throw Error(v(198));var u=Je;Qe=!1,Je=null,Ye||(Ye=!0,Xe=u)}}(r,t,void 0,e),e.currentTarget=null}function Yr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Jr(i,a,u),s=l}else for(o=0;o<r.length;o++){if(l=(a=r[o]).instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Jr(i,a,u),s=l}}}if(Ye)throw e=Xe,Ye=!1,Xe=null,e}function Xr(e,t){var n=t[Ni];void 0===n&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(ni(t,e,2,!1),n.add(r))}function Zr(e,t,n){var r=0;t&&(r|=4),ni(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[ei]){e[ei]=!0,b.forEach((function(t){"selectionchange"!==t&&(Qr.has(t)||Zr(t,!1,e),Zr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ei]||(t[ei]=!0,Zr("selectionchange",!1,t))}}function ni(e,t,n,r){switch(cn(t)){case 1:var i=sn;break;case 4:i=on;break;default:i=an}n=i.bind(null,t,n,e),i=void 0,!Ke||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,i){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==a;){if(null===(o=Ri(a)))return;if(5===(l=o.tag)||6===l){r=s=o;continue e}a=a.parentNode}}r=r.return}qe((function(){var r=s,i=Le(n),o=[];e:{var a=$r.get(e);if(void 0!==a){var l=_n,u=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":l=jn;break;case"focusin":u="focus",l=xn;break;case"focusout":u="blur",l=xn;break;case"beforeblur":case"afterblur":l=xn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=Nn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Bn;break;case Vr:case jr:case zr:l=An;break;case Br:l=$n;break;case"scroll":l=Tn;break;case"wheel":l=Hn;break;case"copy":case"cut":case"paste":l=Dn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=zn}var c=0!=(4&t),h=!c&&"scroll"===e,d=c?null!==a?a+"Capture":null:a;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=He(p,d))&&c.push(ii(p,m,f)))),h)break;p=p.return}0<c.length&&(a=new l(a,u,null,n,i),o.push({event:a,listeners:c}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===Oe||!(u=n.relatedTarget||n.fromElement)||!Ri(u)&&!u[Ci])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ri(u):null)&&(u!==(h=tt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=Cn,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=zn,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?a:Oi(l),f=null==u?a:Oi(u),(a=new c(m,p+"leave",l,n,i)).target=h,a.relatedTarget=f,m=null,Ri(i)===r&&((c=new c(d,p+"enter",u,n,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(d=u,p=0,f=c=l;f;f=oi(f))p++;for(f=0,m=d;m;m=oi(m))f++;for(;0<p-f;)c=oi(c),p--;for(;0<f-p;)d=oi(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=oi(c),d=oi(d)}c=null}else c=null;null!==l&&ai(o,a,l,c,!1),null!==u&&null!==h&&ai(o,h,u,c,!0)}if("select"===(l=(a=r?Oi(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=ur;else if(rr(a))if(cr)g=br;else{g=yr;var y=gr}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=vr);switch(g&&(g=g(e,r))?ir(o,g,n,i):(y&&y(e,a,r),"focusout"===e&&(y=a._wrapperState)&&y.controlled&&"number"===a.type&&fe(a,"number",a.value)),y=r?Oi(r):window,e){case"focusin":(rr(y)||"true"===y.contentEditable)&&(xr=y,Ar=r,Rr=null);break;case"focusout":Rr=Ar=xr=null;break;case"mousedown":Dr=!0;break;case"contextmenu":case"mouseup":case"dragend":Dr=!1,Or(o,n,i);break;case"selectionchange":if(Nr)break;case"keydown":case"keyup":Or(o,n,i)}var v;if(Wn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else tr?Zn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Jn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==b?"onCompositionEnd"===b&&tr&&(v=pn()):(dn="value"in(hn=i)?hn.value:hn.textContent,tr=!0)),0<(y=si(r,b)).length&&(b=new On(b,e,null,n,i),o.push({event:b,listeners:y}),v?b.data=v:null!==(v=er(n))&&(b.data=v))),(v=Qn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Xn=!0,Yn);case"textInput":return(e=t.data)===Yn&&Xn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!Wn&&Zn(e,t)?(e=pn(),fn=dn=hn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=si(r,"onBeforeInput")).length&&(i=new On("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=v))}Yr(o,t)}))}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function si(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=He(e,n))&&r.unshift(ii(e,s,i)),null!=(s=He(e,t))&&r.push(ii(e,s,i))),e=e.return}return r}function oi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function ai(e,t,n,r,i){for(var s=t._reactName,o=[];null!==n&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==u&&(a=u,i?null!=(l=He(n,s))&&o.unshift(ii(n,l,a)):i||null!=(l=He(n,s))&&o.push(ii(n,l,a))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var li=/\r\n?/g,ui=/\u0000|\uFFFD/g;function ci(e){return("string"==typeof e?e:""+e).replace(li,"\n").replace(ui,"")}function hi(e,t,n){if(t=ci(t),ci(e)!==t&&n)throw Error(v(425))}function di(){}var fi=null,pi=null;function mi(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var gi="function"==typeof setTimeout?setTimeout:void 0,yi="function"==typeof clearTimeout?clearTimeout:void 0,vi="function"==typeof Promise?Promise:void 0,bi="function"==typeof queueMicrotask?queueMicrotask:void 0!==vi?function(e){return vi.resolve(null).then(e).catch(wi)}:gi;function wi(e){setTimeout((function(){throw e}))}function Ei(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);tn(t)}function ki(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function _i(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Si=Math.random().toString(36).slice(2),Ti="__reactFiber$"+Si,Ii="__reactProps$"+Si,Ci="__reactContainer$"+Si,Ni="__reactEvents$"+Si,xi="__reactListeners$"+Si,Ai="__reactHandles$"+Si;function Ri(e){var t=e[Ti];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ci]||n[Ti]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=_i(e);null!==e;){if(n=e[Ti])return n;e=_i(e)}return t}n=(e=n).parentNode}return null}function Di(e){return!(e=e[Ti]||e[Ci])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Oi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(v(33))}function Li(e){return e[Ii]||null}var Pi=[],Mi=-1;function Fi(e){return{current:e}}function Ui(e){0>Mi||(e.current=Pi[Mi],Pi[Mi]=null,Mi--)}function Vi(e,t){Mi++,Pi[Mi]=e.current,e.current=t}var ji={},zi=Fi(ji),Bi=Fi(!1),$i=ji;function qi(e,t){var n=e.type.contextTypes;if(!n)return ji;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Hi(e){return null!=(e=e.childContextTypes)}function Ki(){Ui(Bi),Ui(zi)}function Wi(e,t,n){if(zi.current!==ji)throw Error(v(168));Vi(zi,t),Vi(Bi,n)}function Gi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(v(108,ne(e)||"Unknown",i));return J({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ji,$i=zi.current,Vi(zi,e),Vi(Bi,Bi.current),!0}function Ji(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=Gi(e,t,$i),r.__reactInternalMemoizedMergedChildContext=e,Ui(Bi),Ui(zi),Vi(zi,e)):Ui(Bi),Vi(Bi,n)}var Yi=null,Xi=!1,Zi=!1;function es(e){null===Yi?Yi=[e]:Yi.push(e)}function ts(){if(!Zi&&null!==Yi){Zi=!0;var e=0,t=Dt;try{var n=Yi;for(Dt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Yi=null,Xi=!1}catch(t){throw null!==Yi&&(Yi=Yi.slice(e+1)),ot(dt,ts),t}finally{Dt=t,Zi=!1}}return null}var ns=[],rs=0,is=null,ss=0,os=[],as=0,ls=null,us=1,cs="";function hs(e,t){ns[rs++]=ss,ns[rs++]=is,is=e,ss=t}function ds(e,t,n){os[as++]=us,os[as++]=cs,os[as++]=ls,ls=e;var r=us;e=cs;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,us=1<<32-bt(t)+i|n<<i|r,cs=s+e}else us=1<<s|n<<i|r,cs=e}function fs(e){null!==e.return&&(hs(e,1),ds(e,1,0))}function ps(e){for(;e===is;)is=ns[--rs],ns[rs]=null,ss=ns[--rs],ns[rs]=null;for(;e===ls;)ls=os[--as],os[as]=null,cs=os[--as],os[as]=null,us=os[--as],os[as]=null}var ms=null,gs=null,ys=!1,vs=null;function bs(e,t){var n=Hu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ws(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ms=e,gs=ki(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ms=e,gs=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==ls?{id:us,overflow:cs}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Hu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ms=e,gs=null,!0);default:return!1}}function Es(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function ks(e){if(ys){var t=gs;if(t){var n=t;if(!ws(e,t)){if(Es(e))throw Error(v(418));t=ki(n.nextSibling);var r=ms;t&&ws(e,t)?bs(r,n):(e.flags=-4097&e.flags|2,ys=!1,ms=e)}}else{if(Es(e))throw Error(v(418));e.flags=-4097&e.flags|2,ys=!1,ms=e}}}function _s(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ms=e}function Ss(e){if(e!==ms)return!1;if(!ys)return _s(e),ys=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!mi(e.type,e.memoizedProps)),t&&(t=gs)){if(Es(e))throw Ts(),Error(v(418));for(;t;)bs(e,t),t=ki(t.nextSibling)}if(_s(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){gs=ki(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}gs=null}}else gs=ms?ki(e.stateNode.nextSibling):null;return!0}function Ts(){for(var e=gs;e;)e=ki(e.nextSibling)}function Is(){gs=ms=null,ys=!1}function Cs(e){null===vs?vs=[e]:vs.push(e)}var Ns=O.ReactCurrentBatchConfig;function xs(e,t){if(e&&e.defaultProps){for(var n in t=J({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var As=Fi(null),Rs=null,Ds=null,Os=null;function Ls(){Os=Ds=Rs=null}function Ps(e){var t=As.current;Ui(As),e._currentValue=t}function Ms(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fs(e,t){Rs=e,Os=Ds=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Oa=!0),e.firstContext=null)}function Us(e){var t=e._currentValue;if(Os!==e)if(e={context:e,memoizedValue:t,next:null},null===Ds){if(null===Rs)throw Error(v(308));Ds=e,Rs.dependencies={lanes:0,firstContext:e}}else Ds=Ds.next=e;return t}var Vs=null;function js(e){null===Vs?Vs=[e]:Vs.push(e)}function zs(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,js(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bs(e,r)}function Bs(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var $s=!1;function qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ks(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ws(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&Bl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bs(e,n)}return null===(i=r.interleaved)?(t.next=t,js(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bs(e,n)}function Gs(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=o:s=s.next=o,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Js(e,t,n,r){var i=e.updateQueue;$s=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,u=l.next;l.next=null,null===o?s=u:o.next=u,o=l;var c=e.alternate;null!==c&&((a=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===a?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(o=0,c=u=l=null,a=s;;){var d=a.lane,f=a.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=J({},h,d);break e;case 2:$s=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,o|=d;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(d=a).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);Jl|=o,e.lanes=o,e.memoizedState=h}}function Ys(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(v(191,i));i.call(r)}}}var Xs=(new g.Component).refs;function Zs(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:J({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=mu(e),s=Ks(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=Ws(e,s,i))&&(gu(t,e,i,r),Gs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=mu(e),s=Ks(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=Ws(e,s,i))&&(gu(t,e,i,r),Gs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=mu(e),i=Ks(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Ws(e,i,r))&&(gu(t,e,r,n),Gs(t,e,r))}};function to(e,t,n,r,i,s,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,o):!t.prototype||!t.prototype.isPureReactComponent||(!Er(n,r)||!Er(i,s))}function no(e,t,n){var r=!1,i=ji,s=t.contextType;return"object"==typeof s&&null!==s?s=Us(s):(i=Hi(t)?$i:zi.current,s=(r=null!=(r=t.contextTypes))?qi(e,i):ji),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ro(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function io(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Xs,qs(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=Us(s):(s=Hi(t)?$i:zi.current,i.context=qi(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(Zs(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&eo.enqueueReplaceState(i,i.state,null),Js(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function so(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:(t=function(e){var t=i.refs;t===Xs&&(t=i.refs={}),null===e?delete t[s]:t[s]=e},t._stringRef=s,t)}if("string"!=typeof e)throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ao(e){return(0,e._init)(e._payload)}function lo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Wu(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Yu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===M?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===H&&ao(s)===t.type)?((r=i(t,n.props)).ref=so(e,t,n),r.return=e,r):((r=Gu(n.type,n.key,n.props,null,e.mode,r)).ref=so(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Xu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Qu(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Yu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case L:return(n=Gu(t.type,t.key,t.props,null,e.mode,n)).ref=so(e,null,t),n.return=e,n;case P:return(t=Xu(t,e.mode,n)).return=e,t;case H:return h(e,(0,t._init)(t._payload),n)}if(pe(t)||G(t))return(t=Qu(t,e.mode,n,null)).return=e,t;oo(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case L:return n.key===i?l(e,t,n,r):null;case P:return n.key===i?u(e,t,n,r):null;case H:return d(e,t,(i=n._init)(n._payload),r)}if(pe(n)||G(n))return null!==i?null:c(e,t,n,r,null);oo(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case L:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case P:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case H:return f(e,t,n,(0,r._init)(r._payload),i)}if(pe(r)||G(r))return c(t,e=e.get(n)||null,r,i,null);oo(t,r)}return null}function p(i,o,a,l){for(var u=null,c=null,p=o,m=o=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,a[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),o=s(y,o,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===a.length)return n(i,p),ys&&hs(i,m),u;if(null===p){for(;m<a.length;m++)null!==(p=h(i,a[m],l))&&(o=s(p,o,m),null===c?u=p:c.sibling=p,c=p);return ys&&hs(i,m),u}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=s(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),ys&&hs(i,m),u}function m(i,o,a,l){var u=G(a);if("function"!=typeof u)throw Error(v(150));if(null==(a=u.call(a)))throw Error(v(151));for(var c=u=null,p=o,m=o=0,g=null,y=a.next();null!==p&&!y.done;m++,y=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var b=d(i,p,y.value,l);if(null===b){null===p&&(p=g);break}e&&p&&null===b.alternate&&t(i,p),o=s(b,o,m),null===c?u=b:c.sibling=b,c=b,p=g}if(y.done)return n(i,p),ys&&hs(i,m),u;if(null===p){for(;!y.done;m++,y=a.next())null!==(y=h(i,y.value,l))&&(o=s(y,o,m),null===c?u=y:c.sibling=y,c=y);return ys&&hs(i,m),u}for(p=r(i,p);!y.done;m++,y=a.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),o=s(y,o,m),null===c?u=y:c.sibling=y,c=y);return e&&p.forEach((function(e){return t(i,e)})),ys&&hs(i,m),u}return function e(r,s,a,l){if("object"==typeof a&&null!==a&&a.type===M&&null===a.key&&(a=a.props.children),"object"==typeof a&&null!==a){switch(a.$$typeof){case L:e:{for(var u=a.key,c=s;null!==c;){if(c.key===u){if((u=a.type)===M){if(7===c.tag){n(r,c.sibling),(s=i(c,a.props.children)).return=r,r=s;break e}}else if(c.elementType===u||"object"==typeof u&&null!==u&&u.$$typeof===H&&ao(u)===c.type){n(r,c.sibling),(s=i(c,a.props)).ref=so(r,c,a),s.return=r,r=s;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===M?((s=Qu(a.props.children,r.mode,l,a.key)).return=r,r=s):((l=Gu(a.type,a.key,a.props,null,r.mode,l)).ref=so(r,s,a),l.return=r,r=l)}return o(r);case P:e:{for(c=a.key;null!==s;){if(s.key===c){if(4===s.tag&&s.stateNode.containerInfo===a.containerInfo&&s.stateNode.implementation===a.implementation){n(r,s.sibling),(s=i(s,a.children||[])).return=r,r=s;break e}n(r,s);break}t(r,s),s=s.sibling}(s=Xu(a,r.mode,l)).return=r,r=s}return o(r);case H:return e(r,s,(c=a._init)(a._payload),l)}if(pe(a))return p(r,s,a,l);if(G(a))return m(r,s,a,l);oo(r,a)}return"string"==typeof a&&""!==a||"number"==typeof a?(a=""+a,null!==s&&6===s.tag?(n(r,s.sibling),(s=i(s,a)).return=r,r=s):(n(r,s),(s=Yu(a,r.mode,l)).return=r,r=s),o(r)):n(r,s)}}var uo=lo(!0),co=lo(!1),ho={},fo=Fi(ho),po=Fi(ho),mo=Fi(ho);function go(e){if(e===ho)throw Error(v(174));return e}function yo(e,t){switch(Vi(mo,t),Vi(po,e),Vi(fo,ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ee(null,"");break;default:t=Ee(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ui(fo),Vi(fo,t)}function vo(){Ui(fo),Ui(po),Ui(mo)}function bo(e){go(mo.current);var t=go(fo.current),n=Ee(t,e.type);t!==n&&(Vi(po,e),Vi(fo,n))}function wo(e){po.current===e&&(Ui(fo),Ui(po))}var Eo=Fi(0);function ko(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=[];function So(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var To=O.ReactCurrentDispatcher,Io=O.ReactCurrentBatchConfig,Co=0,No=null,xo=null,Ao=null,Ro=!1,Do=!1,Oo=0,Lo=0;function Po(){throw Error(v(321))}function Mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function Fo(e,t,n,r,i,s){if(Co=s,No=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=null===e||null===e.memoizedState?wa:Ea,e=n(r,i),Do){s=0;do{if(Do=!1,Oo=0,25<=s)throw Error(v(301));s+=1,Ao=xo=null,t.updateQueue=null,To.current=ka,e=n(r,i)}while(Do)}if(To.current=ba,t=null!==xo&&null!==xo.next,Co=0,Ao=xo=No=null,Ro=!1,t)throw Error(v(300));return e}function Uo(){var e=0!==Oo;return Oo=0,e}function Vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Ao?No.memoizedState=Ao=e:Ao=Ao.next=e,Ao}function jo(){if(null===xo){var e=No.alternate;e=null!==e?e.memoizedState:null}else e=xo.next;var t=null===Ao?No.memoizedState:Ao.next;if(null!==t)Ao=t,xo=e;else{if(null===e)throw Error(v(310));e={memoizedState:(xo=e).memoizedState,baseState:xo.baseState,baseQueue:xo.baseQueue,queue:xo.queue,next:null},null===Ao?No.memoizedState=Ao=e:Ao=Ao.next=e}return Ao}function zo(e,t){return"function"==typeof t?t(e):t}function Bo(e){var t=jo(),n=t.queue;if(null===n)throw Error(v(311));n.lastRenderedReducer=e;var r=xo,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Co&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(a=l=h,o=r):l=l.next=h,No.lanes|=c,Jl|=c}u=u.next}while(null!==u&&u!==s);null===l?o=r:l.next=a,wr(r,t.memoizedState)||(Oa=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,No.lanes|=s,Jl|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $o(e){var t=jo(),n=t.queue;if(null===n)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{s=e(s,o.action),o=o.next}while(o!==i);wr(s,t.memoizedState)||(Oa=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function qo(){}function Ho(e,t){var n=No,r=jo(),i=t(),s=!wr(r.memoizedState,i);if(s&&(r.memoizedState=i,Oa=!0),r=r.queue,ra(Go.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==Ao&&1&Ao.memoizedState.tag){if(n.flags|=2048,Xo(9,Wo.bind(null,n,r,i,t),void 0,null),null===$l)throw Error(v(349));0!=(30&Co)||Ko(n,t,i)}return i}function Ko(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=No.updateQueue)?(t={lastEffect:null,stores:null},No.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Qo(t)&&Jo(e)}function Go(e,t,n){return n((function(){Qo(t)&&Jo(e)}))}function Qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch(e){return!0}}function Jo(e){var t=Bs(e,1);null!==t&&gu(t,e,1,-1)}function Yo(e){var t=Vo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t.queue=e,e=e.dispatch=ma.bind(null,No,e),[t.memoizedState,e]}function Xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=No.updateQueue)?(t={lastEffect:null,stores:null},No.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zo(){return jo().memoizedState}function ea(e,t,n,r){var i=Vo();No.flags|=e,i.memoizedState=Xo(1|t,n,void 0,void 0===r?null:r)}function ta(e,t,n,r){var i=jo();r=void 0===r?null:r;var s=void 0;if(null!==xo){var o=xo.memoizedState;if(s=o.destroy,null!==r&&Mo(r,o.deps))return void(i.memoizedState=Xo(t,n,s,r))}No.flags|=e,i.memoizedState=Xo(1|t,n,s,r)}function na(e,t){return ea(8390656,8,e,t)}function ra(e,t){return ta(2048,8,e,t)}function ia(e,t){return ta(4,2,e,t)}function sa(e,t){return ta(4,4,e,t)}function oa(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function aa(e,t,n){return n=null!=n?n.concat([e]):null,ta(4,4,oa.bind(null,t,e),n)}function la(){}function ua(e,t){var n=jo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ca(e,t){var n=jo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ha(e,t,n){return 0==(21&Co)?(e.baseState&&(e.baseState=!1,Oa=!0),e.memoizedState=n):(wr(n,t)||(n=Nt(),No.lanes|=n,Jl|=n,e.baseState=!0),t)}function da(e,t){var n=Dt;Dt=0!==n&&4>n?n:4,e(!0);var r=Io.transition;Io.transition={};try{e(!1),t()}finally{Dt=n,Io.transition=r}}function fa(){return jo().memoizedState}function pa(e,t,n){var r=mu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ga(e))ya(t,n);else if(null!==(n=zs(e,t,n,r))){gu(n,e,r,pu()),va(n,t,r)}}function ma(e,t,n){var r=mu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ga(e))ya(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wr(a,o)){var l=t.interleaved;return null===l?(i.next=i,js(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(e){}null!==(n=zs(e,t,i,r))&&(gu(n,e,r,i=pu()),va(n,t,r))}}function ga(e){var t=e.alternate;return e===No||null!==t&&t===No}function ya(e,t){Do=Ro=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function va(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}var ba={readContext:Us,useCallback:Po,useContext:Po,useEffect:Po,useImperativeHandle:Po,useInsertionEffect:Po,useLayoutEffect:Po,useMemo:Po,useReducer:Po,useRef:Po,useState:Po,useDebugValue:Po,useDeferredValue:Po,useTransition:Po,useMutableSource:Po,useSyncExternalStore:Po,useId:Po,unstable_isNewReconciler:!1},wa={readContext:Us,useCallback:function(e,t){return Vo().memoizedState=[e,void 0===t?null:t],e},useContext:Us,useEffect:na,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ea(4194308,4,oa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var n=Vo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pa.bind(null,No,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Vo().memoizedState=e},useState:Yo,useDebugValue:la,useDeferredValue:function(e){return Vo().memoizedState=e},useTransition:function(){var e=Yo(!1),t=e[0];return e=da.bind(null,e[1]),Vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=No,i=Vo();if(ys){if(void 0===n)throw Error(v(407));n=n()}else{if(n=t(),null===$l)throw Error(v(349));0!=(30&Co)||Ko(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,na(Go.bind(null,r,s,e),[e]),r.flags|=2048,Xo(9,Wo.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Vo(),t=$l.identifierPrefix;if(ys){var n=cs;t=":"+t+"R"+(n=(us&~(1<<32-bt(us)-1)).toString(32)+n),0<(n=Oo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=Lo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ea={readContext:Us,useCallback:ua,useContext:Us,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:sa,useMemo:ca,useReducer:Bo,useRef:Zo,useState:function(){return Bo(zo)},useDebugValue:la,useDeferredValue:function(e){return ha(jo(),xo.memoizedState,e)},useTransition:function(){return[Bo(zo)[0],jo().memoizedState]},useMutableSource:qo,useSyncExternalStore:Ho,useId:fa,unstable_isNewReconciler:!1},ka={readContext:Us,useCallback:ua,useContext:Us,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:sa,useMemo:ca,useReducer:$o,useRef:Zo,useState:function(){return $o(zo)},useDebugValue:la,useDeferredValue:function(e){var t=jo();return null===xo?t.memoizedState=e:ha(t,xo.memoizedState,e)},useTransition:function(){return[$o(zo)[0],jo().memoizedState]},useMutableSource:qo,useSyncExternalStore:Ho,useId:fa,unstable_isNewReconciler:!1};function _a(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function Sa(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function Ta(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var Ia="function"==typeof WeakMap?WeakMap:Map;function Ca(e,t,n){(n=Ks(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){iu||(iu=!0,su=r),Ta(0,t)},n}function Na(e,t,n){(n=Ks(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ta(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){Ta(0,t),"function"!=typeof r&&(null===ou?ou=new Set([this]):ou.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function xa(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Ia;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vu.bind(null,e,t,n),t.then(e,e))}function Aa(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Ra(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ks(-1,1)).tag=2,Ws(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Da=O.ReactCurrentOwner,Oa=!1;function La(e,t,n,r){t.child=null===e?co(t,null,n,r):uo(t,e.child,n,r)}function Pa(e,t,n,r,i){n=n.render;var s=t.ref;return Fs(t,i),r=Fo(e,t,n,r,s,i),n=Uo(),null===e||Oa?(ys&&n&&fs(t),t.flags|=1,La(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function Ma(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Ku(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Gu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Fa(e,t,s,r,i))}if(s=e.child,0==(e.lanes&i)){var o=s.memoizedProps;if((n=null!==(n=n.compare)?n:Er)(o,r)&&e.ref===t.ref)return il(e,t,i)}return t.flags|=1,(e=Wu(s,r)).ref=t.ref,e.return=t,t.child=e}function Fa(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(Er(s,r)&&e.ref===t.ref){if(Oa=!1,t.pendingProps=r=s,0==(e.lanes&i))return t.lanes=e.lanes,il(e,t,i);0!=(131072&e.flags)&&(Oa=!0)}}return ja(e,t,n,r,i)}function Ua(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vi(Wl,Kl),Kl|=n;else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Vi(Wl,Kl),Kl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,Vi(Wl,Kl),Kl|=r}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,Vi(Wl,Kl),Kl|=r;return La(e,t,i,n),t.child}function Va(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ja(e,t,n,r,i){var s=Hi(n)?$i:zi.current;return s=qi(t,s),Fs(t,i),n=Fo(e,t,n,r,s,i),r=Uo(),null===e||Oa?(ys&&r&&fs(t),t.flags|=1,La(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function za(e,t,n,r,i){if(Hi(n)){var s=!0;Qi(t)}else s=!1;if(Fs(t,i),null===t.stateNode)rl(e,t),no(t,n,r),io(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=Us(u):u=qi(t,u=Hi(n)?$i:zi.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;h||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==r||l!==u)&&ro(t,o,r,u),$s=!1;var d=t.memoizedState;o.state=d,Js(t,r,o,i),l=t.memoizedState,a!==r||d!==l||Bi.current||$s?("function"==typeof c&&(Zs(t,n,c,r),l=t.memoizedState),(a=$s||to(t,n,a,r,d,l,u))?(h||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Hs(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:xs(t.type,a),o.props=u,h=t.pendingProps,d=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=Us(l):l=qi(t,l=Hi(n)?$i:zi.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==h||d!==l)&&ro(t,o,r,l),$s=!1,d=t.memoizedState,o.state=d,Js(t,r,o,i);var p=t.memoizedState;a!==h||d!==p||Bi.current||$s?("function"==typeof f&&(Zs(t,n,f,r),p=t.memoizedState),(u=$s||to(t,n,u,r,d,p,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Ba(e,t,n,r,s,i)}function Ba(e,t,n,r,i,s){Va(e,t);var o=0!=(128&t.flags);if(!r&&!o)return i&&Ji(t,n,!1),il(e,t,s);r=t.stateNode,Da.current=t;var a=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=uo(t,e.child,null,s),t.child=uo(t,null,a,s)):La(e,t,a,s),t.memoizedState=r.state,i&&Ji(t,n,!0),t.child}function $a(e){var t=e.stateNode;t.pendingContext?Wi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Wi(0,t.context,!1),yo(e,t.containerInfo)}function qa(e,t,n,r,i){return Is(),Cs(i),t.flags|=256,La(e,t,n,r),t.child}var Ha,Ka,Wa,Ga,Qa={dehydrated:null,treeContext:null,retryLane:0};function Ja(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ya(e,t,n){var r,i=t.pendingProps,s=Eo.current,o=!1,a=0!=(128&t.flags);if((r=a)||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Vi(Eo,1&s),null===e)return ks(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:"hidden",children:a},0==(1&i)&&null!==o?(o.childLanes=0,o.pendingProps=a):o=Ju(a,i,0,null),e=Qu(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ja(n),t.memoizedState=Qa,e):Xa(t,a));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,o){if(n)return 256&t.flags?(t.flags&=-257,Za(e,t,o,r=Sa(Error(v(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ju({mode:"visible",children:r.children},i,0,null),(s=Qu(s,i,o,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,0!=(1&t.mode)&&uo(t,e.child,null,o),t.child.memoizedState=Ja(o),t.memoizedState=Qa,s);if(0==(1&t.mode))return Za(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var a=r.dgst;return r=a,Za(e,t,o,r=Sa(s=Error(v(419)),r,void 0))}if(a=0!=(o&e.childLanes),Oa||a){if(null!==(r=$l)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|o))?0:i)&&i!==s.retryLane&&(s.retryLane=i,Bs(e,i),gu(r,e,i,-1))}return xu(),Za(e,t,o,r=Sa(Error(v(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=zu.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,gs=ki(i.nextSibling),ms=t,ys=!0,vs=null,null!==e&&(os[as++]=us,os[as++]=cs,os[as++]=ls,us=e.id,cs=e.overflow,ls=t),t=Xa(t,r.children),t.flags|=4096,t)}(e,t,a,i,r,s,n);if(o){o=i.fallback,a=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&a)&&t.child!==s?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=Wu(s,l)).subtreeFlags=14680064&s.subtreeFlags,null!==r?o=Wu(r,o):(o=Qu(o,a,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,a=null===(a=e.child.memoizedState)?Ja(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Qa,i}return e=(o=e.child).sibling,i=Wu(o,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Xa(e,t){return(t=Ju({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Za(e,t,n,r){return null!==r&&Cs(r),uo(t,e.child,null,n),(e=Xa(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function el(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ms(e.return,t,n)}function tl(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nl(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(La(e,t,r.children,n),0!=(2&(r=Eo.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&el(e,n,t);else if(19===e.tag)el(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Vi(Eo,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ko(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ko(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tl(t,!0,n,null,s);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function il(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Jl|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(v(153));if(null!==t.child){for(n=Wu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Wu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function sl(e,t){if(!ys)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ol(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function al(e,t,n){var r=t.pendingProps;switch(ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ol(t),null;case 1:case 17:return Hi(t.type)&&Ki(),ol(t),null;case 3:return r=t.stateNode,vo(),Ui(Bi),Ui(zi),So(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Ss(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==vs&&(wu(vs),vs=null))),Ka(e,t),ol(t),null;case 5:wo(t);var i=go(mo.current);if(n=t.type,null!==e&&null!=t.stateNode)Wa(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(v(166));return ol(t),null}if(e=go(fo.current),Ss(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ti]=t,r[Ii]=s,e=0!=(1&t.mode),n){case"dialog":Xr("cancel",r),Xr("close",r);break;case"iframe":case"object":case"embed":Xr("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)Xr(Gr[i],r);break;case"source":Xr("error",r);break;case"img":case"image":case"link":Xr("error",r),Xr("load",r);break;case"details":Xr("toggle",r);break;case"input":ue(r,s),Xr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Xr("invalid",r);break;case"textarea":ye(r,s),Xr("invalid",r)}for(var o in Re(n,s),i=null,s)if(s.hasOwnProperty(o)){var a=s[o];"children"===o?"string"==typeof a?r.textContent!==a&&(!0!==s.suppressHydrationWarning&&hi(r.textContent,a,e),i=["children",a]):"number"==typeof a&&r.textContent!==""+a&&(!0!==s.suppressHydrationWarning&&hi(r.textContent,a,e),i=["children",""+a]):w.hasOwnProperty(o)&&null!=a&&"onScroll"===o&&Xr("scroll",r)}switch(n){case"input":se(r),de(r,s,!0);break;case"textarea":se(r),be(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=di)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=we(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ti]=t,e[Ii]=r,Ha(e,t,!1,!1),t.stateNode=e;e:{switch(o=De(n,r),n){case"dialog":Xr("cancel",e),Xr("close",e),i=r;break;case"iframe":case"object":case"embed":Xr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)Xr(Gr[i],e);i=r;break;case"source":Xr("error",e),i=r;break;case"img":case"image":case"link":Xr("error",e),Xr("load",e),i=r;break;case"details":Xr("toggle",e),i=r;break;case"input":ue(e,r),i=le(e,r),Xr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),Xr("invalid",e);break;case"textarea":ye(e,r),i=ge(e,r),Xr("invalid",e)}for(s in Re(n,i),a=i)if(a.hasOwnProperty(s)){var l=a[s];"style"===s?xe(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&Se(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&Te(e,l):"number"==typeof l&&Te(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(w.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Xr("scroll",e):null!=l&&D(e,s,l,o))}switch(n){case"input":se(e),de(e,r,!1);break;case"textarea":se(e),be(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?me(e,!!r.multiple,s,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ol(t),null;case 6:if(e&&null!=t.stateNode)Ga(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(v(166));if(n=go(mo.current),go(fo.current),Ss(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ti]=t,(s=r.nodeValue!==n)&&null!==(e=ms))switch(e.tag){case 3:hi(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&hi(r.nodeValue,n,0!=(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Ti]=t,t.stateNode=r}return ol(t),null;case 13:if(Ui(Eo),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ys&&null!==gs&&0!=(1&t.mode)&&0==(128&t.flags))Ts(),Is(),t.flags|=98560,s=!1;else if(s=Ss(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(v(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(v(317));s[Ti]=t}else Is(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ol(t),s=!1}else null!==vs&&(wu(vs),vs=null),s=!0;if(!s)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&Eo.current)?0===Gl&&(Gl=3):xu())),null!==t.updateQueue&&(t.flags|=4),ol(t),null);case 4:return vo(),Ka(e,t),null===e&&ti(t.stateNode.containerInfo),ol(t),null;case 10:return Ps(t.type._context),ol(t),null;case 19:if(Ui(Eo),null===(s=t.memoizedState))return ol(t),null;if(r=0!=(128&t.flags),null===(o=s.rendering))if(r)sl(s,!1);else{if(0!==Gl||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=ko(e))){for(t.flags|=128,sl(s,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(o=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Vi(Eo,1&Eo.current|2),t.child}e=e.sibling}null!==s.tail&&ct()>nu&&(t.flags|=128,r=!0,sl(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ko(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),sl(s,!0),null===s.tail&&"hidden"===s.tailMode&&!o.alternate&&!ys)return ol(t),null}else 2*ct()-s.renderingStartTime>nu&&1073741824!==n&&(t.flags|=128,r=!0,sl(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=s.last)?n.sibling=o:t.child=o,s.last=o)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ct(),t.sibling=null,n=Eo.current,Vi(Eo,r?1&n|2:1&n),t):(ol(t),null);case 22:case 23:return Tu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Kl)&&(ol(t),6&t.subtreeFlags&&(t.flags|=8192)):ol(t),null;case 24:case 25:return null}throw Error(v(156,t.tag))}function ll(e,t){switch(ps(t),t.tag){case 1:return Hi(t.type)&&Ki(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return vo(),Ui(Bi),Ui(zi),So(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return wo(t),null;case 13:if(Ui(Eo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(v(340));Is()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ui(Eo),null;case 4:return vo(),null;case 10:return Ps(t.type._context),null;case 22:case 23:return Tu(),null;default:return null}}Ha=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ka=function(){},Wa=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,go(fo.current);var s,o=null;switch(n){case"input":i=le(e,i),r=le(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=ge(e,i),r=ge(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=di)}for(u in Re(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(w.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(null!=l||null!=a))if("style"===u)if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,a=a?a.__html:void 0,null!=l&&a!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(w.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Xr("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Ga=function(e,t,n,r){n!==r&&(t.flags|=4)};var ul=!1,cl=!1,hl="function"==typeof WeakSet?WeakSet:Set,dl=null;function fl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}function pl(e,t,n){try{n()}catch(n){Uu(e,t,n)}}var ml=!1;function gl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&pl(t,n,s)}i=i.next}while(i!==r)}}function yl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function bl(e){var t=e.alternate;null!==t&&(e.alternate=null,bl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Ti],delete t[Ii],delete t[Ni],delete t[xi],delete t[Ai])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wl(e){return 5===e.tag||3===e.tag||4===e.tag}function El(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||wl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function kl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=di));else if(4!==r&&null!==(e=e.child))for(kl(e,t,n),e=e.sibling;null!==e;)kl(e,t,n),e=e.sibling}function _l(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(_l(e,t,n),e=e.sibling;null!==e;)_l(e,t,n),e=e.sibling}var Sl=null,Tl=!1;function Il(e,t,n){for(n=n.child;null!==n;)Cl(e,t,n),n=n.sibling}function Cl(e,t,n){if(vt&&"function"==typeof vt.onCommitFiberUnmount)try{vt.onCommitFiberUnmount(yt,n)}catch(e){}switch(n.tag){case 5:cl||fl(n,t);case 6:var r=Sl,i=Tl;Sl=null,Il(e,t,n),Tl=i,null!==(Sl=r)&&(Tl?(e=Sl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):Sl.removeChild(n.stateNode));break;case 18:null!==Sl&&(Tl?(e=Sl,n=n.stateNode,8===e.nodeType?Ei(e.parentNode,n):1===e.nodeType&&Ei(e,n),tn(e)):Ei(Sl,n.stateNode));break;case 4:r=Sl,i=Tl,Sl=n.stateNode.containerInfo,Tl=!0,Il(e,t,n),Sl=r,Tl=i;break;case 0:case 11:case 14:case 15:if(!cl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,void 0!==o&&(0!=(2&s)||0!=(4&s))&&pl(n,t,o),i=i.next}while(i!==r)}Il(e,t,n);break;case 1:if(!cl&&(fl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Uu(n,t,e)}Il(e,t,n);break;case 21:Il(e,t,n);break;case 22:1&n.mode?(cl=(r=cl)||null!==n.memoizedState,Il(e,t,n),cl=r):Il(e,t,n);break;default:Il(e,t,n)}}function Nl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new hl),t.forEach((function(t){var r=Bu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function xl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;null!==a;){switch(a.tag){case 5:Sl=a.stateNode,Tl=!1;break e;case 3:case 4:Sl=a.stateNode.containerInfo,Tl=!0;break e}a=a.return}if(null===Sl)throw Error(v(160));Cl(s,o,i),Sl=null,Tl=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(e){Uu(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Al(t,e),t=t.sibling}function Al(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xl(t,e),Rl(e),4&r){try{gl(3,e,e.return),yl(3,e)}catch(t){Uu(e,e.return,t)}try{gl(5,e,e.return)}catch(t){Uu(e,e.return,t)}}break;case 1:xl(t,e),Rl(e),512&r&&null!==n&&fl(n,n.return);break;case 5:if(xl(t,e),Rl(e),512&r&&null!==n&&fl(n,n.return),32&e.flags){var i=e.stateNode;try{Te(i,"")}catch(t){Uu(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,o=null!==n?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===a&&"radio"===s.type&&null!=s.name&&ce(i,s),De(a,o);var u=De(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];"style"===c?xe(i,h):"dangerouslySetInnerHTML"===c?Se(i,h):"children"===c?Te(i,h):D(i,c,h,u)}switch(a){case"input":he(i,s);break;case"textarea":ve(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?me(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?me(i,!!s.multiple,s.defaultValue,!0):me(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ii]=s}catch(t){Uu(e,e.return,t)}}break;case 6:if(xl(t,e),Rl(e),4&r){if(null===e.stateNode)throw Error(v(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(t){Uu(e,e.return,t)}}break;case 3:if(xl(t,e),Rl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){Uu(e,e.return,t)}break;case 4:default:xl(t,e),Rl(e);break;case 13:xl(t,e),Rl(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(tu=ct())),4&r&&Nl(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(cl=(u=cl)||c,xl(t,e),cl=u):xl(t,e),Rl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(dl=e,c=e.child;null!==c;){for(h=dl=c;null!==dl;){switch(f=(d=dl).child,d.tag){case 0:case 11:case 14:case 15:gl(4,d,d.return);break;case 1:fl(d,d.return);var p=d.stateNode;if("function"==typeof p.componentWillUnmount){r=d,n=d.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(e){Uu(r,n,e)}}break;case 5:fl(d,d.return);break;case 22:if(null!==d.memoizedState){Pl(h);continue}}null!==f?(f.return=d,dl=f):Pl(h)}c=c.sibling}e:for(c=null,h=e;;){if(5===h.tag){if(null===c){c=h;try{i=h.stateNode,u?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(a=h.stateNode,o=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ne("display",o))}catch(t){Uu(e,e.return,t)}}}else if(6===h.tag){if(null===c)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(t){Uu(e,e.return,t)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xl(t,e),Rl(e),4&r&&Nl(e);case 21:}}function Rl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(wl(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(Te(i,""),r.flags&=-33),_l(e,El(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;kl(e,El(e),s);break;default:throw Error(v(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Dl(e,t,n){dl=e,Ol(e,t,n)}function Ol(e,t,n){for(var r=0!=(1&e.mode);null!==dl;){var i=dl,s=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||ul;if(!o){var a=i.alternate,l=null!==a&&null!==a.memoizedState||cl;a=ul;var u=cl;if(ul=o,(cl=l)&&!u)for(dl=i;null!==dl;)l=(o=dl).child,22===o.tag&&null!==o.memoizedState?Ml(i):null!==l?(l.return=o,dl=l):Ml(i);for(;null!==s;)dl=s,Ol(s,t,n),s=s.sibling;dl=i,ul=a,cl=u}Ll(e)}else 0!=(8772&i.subtreeFlags)&&null!==s?(s.return=i,dl=s):Ll(e)}}function Ll(e){for(;null!==dl;){var t=dl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:cl||yl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!cl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xs(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Ys(t,s,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ys(t,o,n)}break;case 5:var a=t.stateNode;if(null===n&&4&t.flags){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var h=c.dehydrated;null!==h&&tn(h)}}}break;default:throw Error(v(163))}cl||512&t.flags&&vl(t)}catch(e){Uu(t,t.return,e)}}if(t===e){dl=null;break}if(null!==(n=t.sibling)){n.return=t.return,dl=n;break}dl=t.return}}function Pl(e){for(;null!==dl;){var t=dl;if(t===e){dl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,dl=n;break}dl=t.return}}function Ml(e){for(;null!==dl;){var t=dl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yl(4,t)}catch(e){Uu(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){Uu(t,i,e)}}var s=t.return;try{vl(t)}catch(e){Uu(t,s,e)}break;case 5:var o=t.return;try{vl(t)}catch(e){Uu(t,o,e)}}}catch(e){Uu(t,t.return,e)}if(t===e){dl=null;break}var a=t.sibling;if(null!==a){a.return=t.return,dl=a;break}dl=t.return}}var Fl,Ul=Math.ceil,Vl=O.ReactCurrentDispatcher,jl=O.ReactCurrentOwner,zl=O.ReactCurrentBatchConfig,Bl=0,$l=null,ql=null,Hl=0,Kl=0,Wl=Fi(0),Gl=0,Ql=null,Jl=0,Yl=0,Xl=0,Zl=null,eu=null,tu=0,nu=1/0,ru=null,iu=!1,su=null,ou=null,au=!1,lu=null,uu=0,cu=0,hu=null,du=-1,fu=0;function pu(){return 0!=(6&Bl)?ct():-1!==du?du:du=ct()}function mu(e){return 0==(1&e.mode)?1:0!=(2&Bl)&&0!==Hl?Hl&-Hl:null!==Ns.transition?(0===fu&&(fu=Nt()),fu):0!==(e=Dt)?e:e=void 0===(e=window.event)?16:cn(e.type)}function gu(e,t,n,r){if(50<cu)throw cu=0,hu=null,Error(v(185));At(e,n,r),0!=(2&Bl)&&e===$l||(e===$l&&(0==(2&Bl)&&(Yl|=n),4===Gl&&Eu(e,Hl)),yu(e,r),1===n&&0===Bl&&0==(1&t.mode)&&(nu=ct()+500,Xi&&ts()))}function yu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-bt(s),a=1<<o,l=i[o];-1===l?0!=(a&n)&&0==(a&r)||(i[o]=It(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}(e,t);var r=Tt(e,e===$l?Hl:0);if(0===r)null!==n&&at(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&at(n),1===t)0===e.tag?function(e){Xi=!0,es(e)}(ku.bind(null,e)):es(ku.bind(null,e)),bi((function(){0==(6&Bl)&&ts()})),n=null;else{switch(Ot(r)){case 1:n=dt;break;case 4:n=ft;break;case 16:default:n=pt;break;case 536870912:n=gt}n=$u(n,vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vu(e,t){if(du=-1,fu=0,0!=(6&Bl))throw Error(v(327));var n=e.callbackNode;if(Mu()&&e.callbackNode!==n)return null;var r=Tt(e,e===$l?Hl:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=Au(e,r);else{t=r;var i=Bl;Bl|=2;var s=Nu();for($l===e&&Hl===t||(ru=null,nu=ct()+500,Iu(e,t));;)try{Du();break}catch(t){Cu(e,t)}Ls(),Vl.current=s,Bl=i,null!==ql?t=0:($l=null,Hl=0,t=Gl)}if(0!==t){if(2===t&&(0!==(i=Ct(e))&&(r=i,t=bu(e,i))),1===t)throw n=Ql,Iu(e,0),Eu(e,r),yu(e,ct()),n;if(6===t)Eu(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wr(s(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=Au(e,r))&&(0!==(s=Ct(e))&&(r=s,t=bu(e,s))),1===t))throw n=Ql,Iu(e,0),Eu(e,r),yu(e,ct()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:case 5:Pu(e,eu,ru);break;case 3:if(Eu(e,r),(130023424&r)===r&&10<(t=tu+500-ct())){if(0!==Tt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){pu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gi(Pu.bind(null,e,eu,ru),t);break}Pu(e,eu,ru);break;case 4:if(Eu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,(o=t[o])>i&&(i=o),r&=~s}if(r=i,10<(r=(120>(r=ct()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ul(r/1960))-r)){e.timeoutHandle=gi(Pu.bind(null,e,eu,ru),r);break}Pu(e,eu,ru);break;default:throw Error(v(329))}}}return yu(e,ct()),e.callbackNode===n?vu.bind(null,e):null}function bu(e,t){var n=Zl;return e.current.memoizedState.isDehydrated&&(Iu(e,t).flags|=256),2!==(e=Au(e,t))&&(t=eu,eu=n,null!==t&&wu(t)),e}function wu(e){null===eu?eu=e:eu.push.apply(eu,e)}function Eu(e,t){for(t&=~Xl,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function ku(e){if(0!=(6&Bl))throw Error(v(327));Mu();var t=Tt(e,0);if(0==(1&t))return yu(e,ct()),null;var n=Au(e,t);if(0!==e.tag&&2===n){var r=Ct(e);0!==r&&(t=r,n=bu(e,r))}if(1===n)throw n=Ql,Iu(e,0),Eu(e,t),yu(e,ct()),n;if(6===n)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pu(e,eu,ru),yu(e,ct()),null}function _u(e,t){var n=Bl;Bl|=1;try{return e(t)}finally{0===(Bl=n)&&(nu=ct()+500,Xi&&ts())}}function Su(e){null!==lu&&0===lu.tag&&0==(6&Bl)&&Mu();var t=Bl;Bl|=1;var n=zl.transition,r=Dt;try{if(zl.transition=null,Dt=1,e)return e()}finally{Dt=r,zl.transition=n,0==(6&(Bl=t))&&ts()}}function Tu(){Kl=Wl.current,Ui(Wl)}function Iu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,yi(n)),null!==ql)for(n=ql.return;null!==n;){var r=n;switch(ps(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ki();break;case 3:vo(),Ui(Bi),Ui(zi),So();break;case 5:wo(r);break;case 4:vo();break;case 13:case 19:Ui(Eo);break;case 10:Ps(r.type._context);break;case 22:case 23:Tu()}n=n.return}if($l=e,ql=e=Wu(e.current,null),Hl=Kl=t,Gl=0,Ql=null,Xl=Yl=Jl=0,eu=Zl=null,null!==Vs){for(t=0;t<Vs.length;t++)if(null!==(r=(n=Vs[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var o=s.next;s.next=i,r.next=o}n.pending=r}Vs=null}return e}function Cu(e,t){for(;;){var n=ql;try{if(Ls(),To.current=ba,Ro){for(var r=No.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Ro=!1}if(Co=0,Ao=xo=No=null,Do=!1,Oo=0,jl.current=null,null===n||null===n.return){Gl=1,Ql=t,ql=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Hl,a.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=a,h=c.tag;if(0==(1&c.mode)&&(0===h||11===h||15===h)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Aa(o);if(null!==f){f.flags&=-257,Ra(f,o,a,0,t),1&f.mode&&xa(s,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(0==(1&t)){xa(s,u,t),xu();break e}l=Error(v(426))}else if(ys&&1&a.mode){var g=Aa(o);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),Ra(g,o,a,0,t),Cs(_a(l,a));break e}}s=l=_a(l,a),4!==Gl&&(Gl=2),null===Zl?Zl=[s]:Zl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Qs(s,Ca(0,l,t));break e;case 1:a=l;var y=s.type,b=s.stateNode;if(0==(128&s.flags)&&("function"==typeof y.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===ou||!ou.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t,Qs(s,Na(s,a,t));break e}}s=s.return}while(null!==s)}Lu(n)}catch(e){t=e,ql===n&&null!==n&&(ql=n=n.return);continue}break}}function Nu(){var e=Vl.current;return Vl.current=ba,null===e?ba:e}function xu(){0!==Gl&&3!==Gl&&2!==Gl||(Gl=4),null===$l||0==(268435455&Jl)&&0==(268435455&Yl)||Eu($l,Hl)}function Au(e,t){var n=Bl;Bl|=2;var r=Nu();for($l===e&&Hl===t||(ru=null,Iu(e,t));;)try{Ru();break}catch(t){Cu(e,t)}if(Ls(),Bl=n,Vl.current=r,null!==ql)throw Error(v(261));return $l=null,Hl=0,Gl}function Ru(){for(;null!==ql;)Ou(ql)}function Du(){for(;null!==ql&&!lt();)Ou(ql)}function Ou(e){var t=Fl(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,null===t?Lu(e):ql=t,jl.current=null}function Lu(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=al(n,t,Kl)))return void(ql=n)}else{if(null!==(n=ll(n,t)))return n.flags&=32767,void(ql=n);if(null===e)return Gl=6,void(ql=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(ql=t);ql=t=e}while(null!==t);0===Gl&&(Gl=5)}function Pu(e,t,n){var r=Dt,i=zl.transition;try{zl.transition=null,Dt=1,function(e,t,n,r){do{Mu()}while(null!==lu);if(0!=(6&Bl))throw Error(v(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===$l&&(ql=$l=null,Hl=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||au||(au=!0,$u(pt,(function(){return Mu(),null}))),s=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||s){s=zl.transition,zl.transition=null;var o=Dt;Dt=1;var a=Bl;Bl|=4,jl.current=null,function(e,t){if(fi=rn,Ir(e=Tr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(e){n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(a=o+i),h!==s||0!==r&&3!==h.nodeType||(l=o+r),3===h.nodeType&&(o+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===a||-1===l?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pi={focusedElem:e,selectionRange:n},rn=!1,dl=t;null!==dl;)if(e=(t=dl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,dl=e;else for(;null!==dl;){t=dl;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:xs(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(v(163))}}catch(e){Uu(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,dl=e;break}dl=t.return}p=ml,ml=!1}(e,n),Al(n,e),Cr(pi),rn=!!fi,pi=fi=null,e.current=n,Dl(n,e,i),ut(),Bl=a,Dt=o,zl.transition=s}else e.current=n;if(au&&(au=!1,lu=e,uu=i),s=e.pendingLanes,0===s&&(ou=null),function(e){if(vt&&"function"==typeof vt.onCommitFiberRoot)try{vt.onCommitFiberRoot(yt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),yu(e,ct()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(iu)throw iu=!1,e=su,su=null,e;0!=(1&uu)&&0!==e.tag&&Mu(),s=e.pendingLanes,0!=(1&s)?e===hu?cu++:(cu=0,hu=e):cu=0,ts()}(e,t,n,r)}finally{zl.transition=i,Dt=r}return null}function Mu(){if(null!==lu){var e=Ot(uu),t=zl.transition,n=Dt;try{if(zl.transition=null,Dt=16>e?16:e,null===lu)var r=!1;else{if(e=lu,lu=null,uu=0,0!=(6&Bl))throw Error(v(331));var i=Bl;for(Bl|=4,dl=e.current;null!==dl;){var s=dl,o=s.child;if(0!=(16&dl.flags)){var a=s.deletions;if(null!==a){for(var l=0;l<a.length;l++){var u=a[l];for(dl=u;null!==dl;){var c=dl;switch(c.tag){case 0:case 11:case 15:gl(8,c,s)}var h=c.child;if(null!==h)h.return=c,dl=h;else for(;null!==dl;){var d=(c=dl).sibling,f=c.return;if(bl(c),c===u){dl=null;break}if(null!==d){d.return=f,dl=d;break}dl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}dl=s}}if(0!=(2064&s.subtreeFlags)&&null!==o)o.return=s,dl=o;else e:for(;null!==dl;){if(0!=(2048&(s=dl).flags))switch(s.tag){case 0:case 11:case 15:gl(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,dl=y;break e}dl=s.return}}var b=e.current;for(dl=b;null!==dl;){var w=(o=dl).child;if(0!=(2064&o.subtreeFlags)&&null!==w)w.return=o,dl=w;else e:for(o=b;null!==dl;){if(0!=(2048&(a=dl).flags))try{switch(a.tag){case 0:case 11:case 15:yl(9,a)}}catch(e){Uu(a,a.return,e)}if(a===o){dl=null;break e}var E=a.sibling;if(null!==E){E.return=a.return,dl=E;break e}dl=a.return}}if(Bl=i,ts(),vt&&"function"==typeof vt.onPostCommitFiberRoot)try{vt.onPostCommitFiberRoot(yt,e)}catch(e){}r=!0}return r}finally{Dt=n,zl.transition=t}}return!1}function Fu(e,t,n){e=Ws(e,t=Ca(0,t=_a(n,t),1),1),t=pu(),null!==e&&(At(e,1,t),yu(e,t))}function Uu(e,t,n){if(3===e.tag)Fu(e,e,n);else for(;null!==t;){if(3===t.tag){Fu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===ou||!ou.has(r))){t=Ws(t,e=Na(t,e=_a(n,e),1),1),e=pu(),null!==t&&(At(t,1,e),yu(t,e));break}}t=t.return}}function Vu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=pu(),e.pingedLanes|=e.suspendedLanes&n,$l===e&&(Hl&n)===n&&(4===Gl||3===Gl&&(130023424&Hl)===Hl&&500>ct()-tu?Iu(e,0):Xl|=n),yu(e,t)}function ju(e,t){0===t&&(0==(1&e.mode)?t=1:(t=_t,0==(130023424&(_t<<=1))&&(_t=4194304)));var n=pu();null!==(e=Bs(e,t))&&(At(e,t,n),yu(e,n))}function zu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),ju(e,n)}function Bu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}null!==r&&r.delete(t),ju(e,n)}function $u(e,t){return ot(e,t)}function qu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hu(e,t,n,r){return new qu(e,t,n,r)}function Ku(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Wu(e,t){var n=e.alternate;return null===n?((n=Hu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gu(e,t,n,r,i,s){var o=2;if(r=e,"function"==typeof e)Ku(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case M:return Qu(n.children,i,s,t);case F:o=8,i|=8;break;case U:return(e=Hu(12,n,t,2|i)).elementType=U,e.lanes=s,e;case B:return(e=Hu(13,n,t,i)).elementType=B,e.lanes=s,e;case $:return(e=Hu(19,n,t,i)).elementType=$,e.lanes=s,e;case K:return Ju(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case V:o=10;break e;case j:o=9;break e;case z:o=11;break e;case q:o=14;break e;case H:o=16,r=null;break e}throw Error(v(130,null==e?e:typeof e,""))}return(t=Hu(o,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Qu(e,t,n,r){return(e=Hu(7,e,r,t)).lanes=n,e}function Ju(e,t,n,r){return(e=Hu(22,e,r,t)).elementType=K,e.lanes=n,e.stateNode={isHidden:!1},e}function Yu(e,t,n){return(e=Hu(6,e,null,t)).lanes=n,e}function Xu(e,t,n){return(t=Hu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xt(0),this.expirationTimes=xt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ec(e,t,n,r,i,s,o,a,l){return e=new Zu(e,t,n,a,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=Hu(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qs(s),e}function tc(e){if(!e)return ji;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Hi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(v(171))}if(1===e.tag){var n=e.type;if(Hi(n))return Gi(e,n,t)}return t}function nc(e,t,n,r,i,s,o,a,l){return(e=ec(n,r,!0,e,0,s,0,a,l)).context=tc(null),n=e.current,(s=Ks(r=pu(),i=mu(n))).callback=null!=t?t:null,Ws(n,s,i),e.current.lanes=i,At(e,i,r),yu(e,r),e}function rc(e,t,n,r){var i=t.current,s=pu(),o=mu(i);return n=tc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ks(s,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ws(i,t,o))&&(gu(e,i,o,s),Gs(e,i,o)),o}function ic(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function sc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function oc(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}Fl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Bi.current)Oa=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Oa=!1,function(e,t,n){switch(t.tag){case 3:$a(t),Is();break;case 5:bo(t);break;case 1:Hi(t.type)&&Qi(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Vi(As,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Vi(Eo,1&Eo.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Ya(e,t,n):(Vi(Eo,1&Eo.current),null!==(e=il(e,t,n))?e.sibling:null);Vi(Eo,1&Eo.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return nl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Vi(Eo,Eo.current),r)break;return null;case 22:case 23:return t.lanes=0,Ua(e,t,n)}return il(e,t,n)}(e,t,n);Oa=0!=(131072&e.flags)}else Oa=!1,ys&&0!=(1048576&t.flags)&&ds(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var i=qi(t,zi.current);Fs(t,n),i=Fo(null,t,r,e,i,n);var s=Uo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Hi(r)?(s=!0,Qi(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,qs(t),i.updater=eo,t.stateNode=i,i._reactInternals=t,io(t,r,e,n),t=Ba(null,t,r,!0,s,n)):(t.tag=0,ys&&s&&fs(t),La(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Ku(e)?1:0;if(null!=e){if((e=e.$$typeof)===z)return 11;if(e===q)return 14}return 2}(r),e=xs(r,e),i){case 0:t=ja(null,t,r,e,n);break e;case 1:t=za(null,t,r,e,n);break e;case 11:t=Pa(null,t,r,e,n);break e;case 14:t=Ma(null,t,r,xs(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,ja(e,t,r,i=t.elementType===r?i:xs(r,i),n);case 1:return r=t.type,i=t.pendingProps,za(e,t,r,i=t.elementType===r?i:xs(r,i),n);case 3:e:{if($a(t),null===e)throw Error(v(387));r=t.pendingProps,i=(s=t.memoizedState).element,Hs(e,t),Js(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=qa(e,t,r,n,i=_a(Error(v(423)),t));break e}if(r!==i){t=qa(e,t,r,n,i=_a(Error(v(424)),t));break e}for(gs=ki(t.stateNode.containerInfo.firstChild),ms=t,ys=!0,vs=null,n=co(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Is(),r===i){t=il(e,t,n);break e}La(e,t,r,n)}t=t.child}return t;case 5:return bo(t),null===e&&ks(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,o=i.children,mi(r,i)?o=null:null!==s&&mi(r,s)&&(t.flags|=32),Va(e,t),La(e,t,o,n),t.child;case 6:return null===e&&ks(t),null;case 13:return Ya(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=uo(t,null,r,n):La(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Pa(e,t,r,i=t.elementType===r?i:xs(r,i),n);case 7:return La(e,t,t.pendingProps,n),t.child;case 8:case 12:return La(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Vi(As,r._currentValue),r._currentValue=o,null!==s)if(wr(s.value,o)){if(s.children===i.children&&!Bi.current){t=il(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var a=s.dependencies;if(null!==a){o=s.child;for(var l=a.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=Ks(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ms(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(10===s.tag)o=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(o=s.return))throw Error(v(341));o.lanes|=n,null!==(a=o.alternate)&&(a.lanes|=n),Ms(o,n,t),o=s.sibling}else o=s.child;if(null!==o)o.return=s;else for(o=s;null!==o;){if(o===t){o=null;break}if(null!==(s=o.sibling)){s.return=o.return,o=s;break}o=o.return}s=o}La(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fs(t,n),r=r(i=Us(i)),t.flags|=1,La(e,t,r,n),t.child;case 14:return i=xs(r=t.type,t.pendingProps),Ma(e,t,r,i=xs(r.type,i),n);case 15:return Fa(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xs(r,i),rl(e,t),t.tag=1,Hi(r)?(e=!0,Qi(t)):e=!1,Fs(t,n),no(t,r,i),io(t,r,i,n),Ba(null,t,r,!0,e,n);case 19:return nl(e,t,n);case 22:return Ua(e,t,n)}throw Error(v(156,t.tag))};var ac="function"==typeof reportError?reportError:function(e){console.error(e)};function lc(e){this._internalRoot=e}function uc(e){this._internalRoot=e}function cc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function hc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function dc(){}function fc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if("function"==typeof i){var a=i;i=function(){var e=ic(o);a.call(e)}}rc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=ic(o);s.call(e)}}var o=nc(t,r,e,0,null,!1,0,"",dc);return e._reactRootContainer=o,e[Ci]=o.current,ti(8===e.nodeType?e.parentNode:e),Su(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var a=r;r=function(){var e=ic(l);a.call(e)}}var l=ec(e,0,!1,null,0,!1,0,"",dc);return e._reactRootContainer=l,e[Ci]=l.current,ti(8===e.nodeType?e.parentNode:e),Su((function(){rc(t,l,n,r)})),l}(n,t,e,i,r);return ic(o)}uc.prototype.render=lc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(v(409));rc(e,t,null,null)},uc.prototype.unmount=lc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Su((function(){rc(null,e,null,null)})),t[Ci]=null}},uc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&0!==t&&t<Kt[n].priority;n++);Kt.splice(n,0,e),0===n&&Jt(e)}},Lt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=St(t.pendingLanes);0!==n&&(Rt(t,1|n),yu(t,ct()),0==(6&Bl)&&(nu=ct()+500,ts()))}break;case 13:Su((function(){var t=Bs(e,1);if(null!==t){var n=pu();gu(t,e,1,n)}})),oc(e,1)}},Pt=function(e){if(13===e.tag){var t=Bs(e,134217728);if(null!==t)gu(t,e,134217728,pu());oc(e,134217728)}},Mt=function(e){if(13===e.tag){var t=mu(e),n=Bs(e,t);if(null!==n)gu(n,e,t,pu());oc(e,t)}},Ft=function(){return Dt},Ut=function(e,t){var n=Dt;try{return Dt=e,t()}finally{Dt=n}},Pe=function(e,t,n){switch(t){case"input":if(he(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Li(r);if(!i)throw Error(v(90));oe(r),he(r,i)}}}break;case"textarea":ve(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},ze=_u,Be=Su;var pc={usingClientEntryPoint:!1,Events:[Di,Oi,Li,Ve,je,_u]},mc={findFiberByHostInstance:Ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gc={bundleType:mc.bundleType,version:mc.version,rendererPackageName:mc.rendererPackageName,rendererConfig:mc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=it(e))?null:e.stateNode},findFiberByHostInstance:mc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{yt=yc.inject(gc),vt=yc}catch(_e){}}r=pc,i=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!cc(t))throw Error(v(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:P,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},o=function(e,t){if(!cc(e))throw Error(v(299));var n=!1,r="",i=ac;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=ec(e,1,!1,null,0,n,0,r,i),e[Ci]=t.current,ti(8===e.nodeType?e.parentNode:e),new lc(t)},a=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(v(188));throw e=Object.keys(e).join(","),Error(v(268,e))}return e=null===(e=it(t))?null:e.stateNode},l=function(e){return Su(e)},u=function(e,t,n){if(!hc(t))throw Error(v(200));return fc(null,e,t,!0,n)},c=function(e,t,n){if(!cc(e))throw Error(v(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",o=ac;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=nc(t,null,e,1,null!=n?n:null,i,0,s,o),e[Ci]=t.current,ti(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new uc(t)},h=function(e,t,n){if(!hc(t))throw Error(v(200));return fc(null,e,t,!1,n)},d=function(e){if(!hc(e))throw Error(v(40));return!!e._reactRootContainer&&(Su((function(){fc(null,null,e,!1,(function(){e._reactRootContainer=null,e[Ci]=null}))})),!0)},f=_u,p=function(e,t,n,r){if(!hc(n))throw Error(v(200));if(null==e||void 0===e._reactInternals)throw Error(v(38));return fc(e,t,n,!1,r)},m="18.2.0-next-9e3b772b8-20220608"})),s.register("hnwcm",(function(e,t){"use strict";e.exports=s("7yTEO")})),s.register("7yTEO",(function(t,n){
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,s,o,a,l,u,c,h,d,f,p,m,g,y,v,b,w,E;function k(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<T(i,t)))break e;e[r]=t,e[n]=i,n=r}}function _(e){return 0===e.length?null:e[0]}function S(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,s=i>>>1;r<s;){var o=2*(r+1)-1,a=e[o],l=o+1,u=e[l];if(0>T(a,n))l<i&&0>T(u,a)?(e[r]=u,e[l]=n,r=l):(e[r]=a,e[o]=n,r=o);else{if(!(l<i&&0>T(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}function T(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(function(){return r}),(function(e){return r=e})),e(t.exports,"unstable_IdlePriority",(function(){return i}),(function(e){return i=e})),e(t.exports,"unstable_ImmediatePriority",(function(){return s}),(function(e){return s=e})),e(t.exports,"unstable_LowPriority",(function(){return o}),(function(e){return o=e})),e(t.exports,"unstable_NormalPriority",(function(){return a}),(function(e){return a=e})),e(t.exports,"unstable_Profiling",(function(){return l}),(function(e){return l=e})),e(t.exports,"unstable_UserBlockingPriority",(function(){return u}),(function(e){return u=e})),e(t.exports,"unstable_cancelCallback",(function(){return c}),(function(e){return c=e})),e(t.exports,"unstable_continueExecution",(function(){return h}),(function(e){return h=e})),e(t.exports,"unstable_forceFrameRate",(function(){return d}),(function(e){return d=e})),e(t.exports,"unstable_getCurrentPriorityLevel",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_getFirstCallbackNode",(function(){return p}),(function(e){return p=e})),e(t.exports,"unstable_next",(function(){return m}),(function(e){return m=e})),e(t.exports,"unstable_pauseExecution",(function(){return g}),(function(e){return g=e})),e(t.exports,"unstable_requestPaint",(function(){return y}),(function(e){return y=e})),e(t.exports,"unstable_runWithPriority",(function(){return v}),(function(e){return v=e})),e(t.exports,"unstable_scheduleCallback",(function(){return b}),(function(e){return b=e})),e(t.exports,"unstable_shouldYield",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_wrapCallback",(function(){return E}),(function(e){return E=e})),"object"==typeof performance&&"function"==typeof performance.now){var I=performance;r=function(){return I.now()}}else{var C=Date,N=C.now();r=function(){return C.now()-N}}var x=[],A=[],R=1,D=null,O=3,L=!1,P=!1,M=!1,F="function"==typeof setTimeout?setTimeout:null,U="function"==typeof clearTimeout?clearTimeout:null,V="undefined"!=typeof setImmediate?setImmediate:null;function j(e){for(var t=_(A);null!==t;){if(null===t.callback)S(A);else{if(!(t.startTime<=e))break;S(A),t.sortIndex=t.expirationTime,k(x,t)}t=_(A)}}function z(e){if(M=!1,j(e),!P)if(null!==_(x))P=!0,Z(B);else{var t=_(A);null!==t&&ee(z,t.startTime-e)}}function B(e,t){P=!1,M&&(M=!1,U(K),K=-1),L=!0;var n=O;try{for(j(t),D=_(x);null!==D&&(!(D.expirationTime>t)||e&&!Q());){var i=D.callback;if("function"==typeof i){D.callback=null,O=D.priorityLevel;var s=i(D.expirationTime<=t);t=r(),"function"==typeof s?D.callback=s:D===_(x)&&S(x),j(t)}else S(x);D=_(x)}if(null!==D)var o=!0;else{var a=_(A);null!==a&&ee(z,a.startTime-t),o=!1}return o}finally{D=null,O=n,L=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var $,q=!1,H=null,K=-1,W=5,G=-1;function Q(){return!(r()-G<W)}function J(){if(null!==H){var e=r();G=e;var t=!0;try{t=H(!0,e)}finally{t?$():(q=!1,H=null)}}else q=!1}if("function"==typeof V)$=function(){V(J)};else if("undefined"!=typeof MessageChannel){var Y=new MessageChannel,X=Y.port2;Y.port1.onmessage=J,$=function(){X.postMessage(null)}}else $=function(){F(J,0)};function Z(e){H=e,q||(q=!0,$())}function ee(e,t){K=F((function(){e(r())}),t)}i=5,s=1,o=4,a=3,l=null,u=2,c=function(e){e.callback=null},h=function(){P||L||(P=!0,Z(B))},d=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<e?Math.floor(1e3/e):5},f=function(){return O},p=function(){return _(x)},m=function(e){switch(O){case 1:case 2:case 3:var t=3;break;default:t=O}var n=O;O=t;try{return e()}finally{O=n}},g=function(){},y=function(){},v=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=O;O=e;try{return t()}finally{O=n}},b=function(e,t,n){var i=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?i+n:i:n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:R++,callback:t,priorityLevel:e,startTime:n,expirationTime:s=n+s,sortIndex:-1},n>i?(e.sortIndex=n,k(A,e),null===_(x)&&e===_(A)&&(M?(U(K),K=-1):M=!0,ee(z,n-i))):(e.sortIndex=s,k(x,e),P||L||(P=!0,Z(B))),e},w=Q,E=function(e){var t=O;return function(){var n=O;O=t;try{return e.apply(this,arguments)}finally{O=n}}}})),s.register("ljK6O",(function(t,n){
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r;e(t.exports,"useSyncExternalStore",(function(){return r}),(function(e){return r=e}));var i=s("jE8J5");var o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useState,l=i.useEffect,u=i.useLayoutEffect,c=i.useDebugValue;function h(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return u((function(){i.value=n,i.getSnapshot=t,h(i)&&s({inst:i})}),[e,n,t]),l((function(){return h(i)&&s({inst:i}),e((function(){h(i)&&s({inst:i})}))}),[e]),c(n),n};r=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:d}));var o;o=s("2nacn");var a,l,u=s("jE8J5");!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),a=(l=s("2wM5b")).createRoot,l.hydrateRoot;var c;u=s("jE8J5"),u=s("jE8J5");c=s("ljK6O");u=s("jE8J5");const h=new WeakMap,d={},f={},p=()=>{},m=p(),g=Object,y=e=>e===m,v=e=>"function"==typeof e,b=(e,t)=>({...e,...t}),w="undefined",E=typeof window!=w,k=typeof document!=w,_=(e,t)=>{const n=h.get(e);return[()=>e.get(t)||d,r=>{if(!y(t)){const i=e.get(t);t in f||(f[t]=i),n[5](t,b(i,r),i||d)}},n[6],()=>!y(t)&&t in f?f[t]:e.get(t)||d]},S=new WeakMap;let T=0;const I=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let i,s;if(g(e)!==e||r||n==RegExp)i=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(i=S.get(e),i)return i;if(i=++T+"~",S.set(e,i),n==Array){for(i="@",s=0;s<e.length;s++)i+=I(e[s])+",";S.set(e,i)}if(n==g){i="#";const t=g.keys(e).sort();for(;!y(s=t.pop());)y(e[s])||(i+=s+":"+I(e[s])+",");S.set(e,i)}}return i};let C=!0;const[N,x]=E&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[p,p],A={isOnline:()=>C,isVisible:()=>{const e=k&&document.visibilityState;return y(e)||"hidden"!==e}},R={initFocus:e=>(k&&document.addEventListener("visibilitychange",e),N("focus",e),()=>{k&&document.removeEventListener("visibilitychange",e),x("focus",e)}),initReconnect:e=>{const t=()=>{C=!0,e()},n=()=>{C=!1};return N("online",t),N("offline",n),()=>{x("online",t),x("offline",n)}}},D=!t(u).useId,O=!E||"Deno"in window,L=e=>E&&typeof window.requestAnimationFrame!=w?window.requestAnimationFrame(e):setTimeout(e,1),P=O?u.useEffect:u.useLayoutEffect,M="undefined"!=typeof navigator&&navigator.connection,F=!O&&M&&(["slow-2g","2g"].includes(M.effectiveType)||M.saveData),U=e=>{if(v(e))try{e=e()}catch(t){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?I(e):"",t]};let V=0;const j=()=>++V;var z={__proto__:null,FOCUS_EVENT:0,RECONNECT_EVENT:1,MUTATE_EVENT:2,ERROR_REVALIDATE_EVENT:3};async function B(...e){const[t,n,r,i]=e,s=b({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{});let o=s.populateCache;const a=s.rollbackOnError;let l=s.optimisticData;const u=!1!==s.revalidate,c=s.throwOnError;if(v(n)){const e=n,r=[],i=t.keys();for(let n=i.next();!n.done;n=i.next()){const i=n.value;!/^\$(inf|sub)\$/.test(i)&&e(t.get(i)._k)&&r.push(i)}return Promise.all(r.map(d))}return d(n);async function d(n){const[i]=U(n);if(!i)return;const[s,d]=_(t,i),[f,p,g]=h.get(t),b=f[i],w=()=>u&&(delete g[i],b&&b[0])?b[0](2).then((()=>s().data)):s().data;if(e.length<3)return w();let E,k=r;const S=j();p[i]=[S,0];const T=!y(l),I=s(),C=I.data,N=I._c,x=y(N)?C:N;if(T&&(l=v(l)?l(x):l,d({data:l,_c:x})),v(k))try{k=k(x)}catch(e){E=e}if(k&&v(k.then)){if(k=await k.catch((e=>{E=e})),S!==p[i][0]){if(E)throw E;return k}E&&T&&(e=>"function"==typeof a?a(e):!1!==a)(E)&&(o=!0,k=x,d({data:k,_c:m}))}o&&(E||(v(o)&&(k=o(k,x)),d({data:k,_c:m}))),p[i][1]=j();const A=await w();if(d({_c:m}),!E)return o?A:k;if(c)throw E}}const $=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},q=(e,t)=>{if(!h.has(e)){const n=b(R,t),r={},i=B.bind(m,e);let s=p;const o={},a=(e,t)=>{const n=o[e]||[];return o[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},l=(t,n,r)=>{e.set(t,n);const i=o[t];if(i)for(const e of i)e(n,r)},u=()=>{if(!h.has(e)&&(h.set(e,[r,{},{},{},i,l,a]),!O)){const t=n.initFocus(setTimeout.bind(m,$.bind(m,r,0))),i=n.initReconnect(setTimeout.bind(m,$.bind(m,r,1)));s=()=>{t&&t(),i&&i(),h.delete(e)}}};return u(),[e,i,u,s]}return[e,h.get(e)[4]]},[H,K]=q(new Map),W=b({onLoadingSlow:p,onSuccess:p,onError:p,onErrorRetry:(e,t,n,r,i)=>{const s=n.errorRetryCount,o=i.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;!y(s)&&o>s||setTimeout(r,a,i)},onDiscarded:p,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:F?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:F?5e3:3e3,compare:(e,t)=>I(e)==I(t),isPaused:()=>!1,cache:H,mutate:K,fallback:{}},A),G=(e,t)=>{const n=b(e,t);if(t){const{use:r,fallback:i}=e,{use:s,fallback:o}=t;r&&s&&(n.use=r.concat(s)),i&&o&&(n.fallback=b(i,o))}return n},Q=(0,u.createContext)({}),J=E&&window.__SWR_DEVTOOLS_USE__,Y=J?window.__SWR_DEVTOOLS_USE__:[],X=e=>v(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],Z=Y.concat((e=>(t,n,r)=>e(t,n&&((...e)=>{const r=U(t)[0],[,,,i]=h.get(H),s=i[r];return s?(delete i[r],s):n(...e)}),r)));J&&(window.__SWR_DEVTOOLS_REACT__=t(u));const ee={dedupe:!0};g.defineProperty((e=>{const{value:t}=e,n=(0,u.useContext)(Q),r=v(t),i=(0,u.useMemo)((()=>r?t(n):t),[r,n,t]),s=(0,u.useMemo)((()=>r?i:G(n,i)),[r,n,i]),o=i&&i.provider,a=(0,u.useRef)(m);o&&!a.current&&(a.current=q(o(s.cache||H),i));const l=a.current;return l&&(s.cache=l[0],s.mutate=l[1]),P((()=>{if(l)return l[2]&&l[2](),l[3]}),[]),(0,u.createElement)(Q.Provider,b(e,{value:s}))}),"defaultValue",{value:W});var te,ne,re,ie,se=(te=(e,t,n)=>{const{cache:r,compare:i,suspense:s,fallbackData:o,revalidateOnMount:a,revalidateIfStale:l,refreshInterval:d,refreshWhenHidden:f,refreshWhenOffline:p,keepPreviousData:g}=n,[w,E,k]=h.get(r),[S,T]=U(e),I=(0,u.useRef)(!1),C=(0,u.useRef)(!1),N=(0,u.useRef)(S),x=(0,u.useRef)(t),A=(0,u.useRef)(n),R=()=>A.current,M=()=>R().isVisible()&&R().isOnline(),[F,V,$,q]=_(r,S),H=(0,u.useRef)({}).current,K=y(o)?n.fallback[S]:o,W=(e,t)=>{let n=!0;for(const r in H){const s=r;"data"===s?i(t[s],e[s])||y(e[s])&&i(t[s],re)||(n=!1):t[s]!==e[s]&&(n=!1)}return n},G=(0,u.useMemo)((()=>{const e=!!S&&!!t&&(y(a)?!R().isPaused()&&!s&&(!!y(l)||l):a),n=t=>{const n=b(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=F(),i=q(),o=n(r),u=r===i?o:n(i);let c=o;return[()=>{const e=n(F());return W(e,c)?c:c=e},()=>u]}),[r,S]),Q=(0,c.useSyncExternalStore)((0,u.useCallback)((e=>$(S,((t,n)=>{W(n,t)||e()}))),[r,S]),G[0],G[1]),J=!I.current,Y=w[S]&&w[S].length>0,X=Q.data,Z=y(X)?K:X,te=Q.error,ne=(0,u.useRef)(Z),re=g?y(X)?ne.current:X:Z,ie=!(Y&&!y(te))&&(J&&!y(a)?a:!R().isPaused()&&(s?!y(Z)&&l:y(Z)||l)),se=!!(S&&t&&J&&ie),oe=y(Q.isValidating)?se:Q.isValidating,ae=y(Q.isLoading)?se:Q.isLoading,le=(0,u.useCallback)((async e=>{const t=x.current;if(!S||!t||C.current||R().isPaused())return!1;let r,s,o=!0;const a=e||{},l=!k[S]||!a.dedupe,u=()=>D?!C.current&&S===N.current&&I.current:S===N.current,c={isValidating:!1,isLoading:!1},h=()=>{V(c)},d=()=>{const e=k[S];e&&e[1]===s&&delete k[S]},f={isValidating:!0};y(F().data)&&(f.isLoading=!0);try{if(l&&(V(f),n.loadingTimeout&&y(F().data)&&setTimeout((()=>{o&&u()&&R().onLoadingSlow(S,n)}),n.loadingTimeout),k[S]=[t(T),j()]),[r,s]=k[S],r=await r,l&&setTimeout(d,n.dedupingInterval),!k[S]||k[S][1]!==s)return l&&u()&&R().onDiscarded(S),!1;c.error=m;const e=E[S];if(!y(e)&&(s<=e[0]||s<=e[1]||0===e[1]))return h(),l&&u()&&R().onDiscarded(S),!1;const a=F().data;c.data=i(a,r)?a:r,l&&u()&&R().onSuccess(r,S,n)}catch(e){d();const t=R(),{shouldRetryOnError:n}=t;t.isPaused()||(c.error=e,l&&u()&&(t.onError(e,S,t),(!0===n||v(n)&&n(e))&&M()&&t.onErrorRetry(e,S,t,(e=>{const t=w[S];t&&t[0]&&t[0](z.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(a.retryCount||0)+1,dedupe:!0})))}return o=!1,h(),!0}),[S,r]),ue=(0,u.useCallback)(((...e)=>B(r,N.current,...e)),[]);if(P((()=>{x.current=t,A.current=n,y(X)||(ne.current=X)})),P((()=>{if(!S)return;const e=le.bind(m,ee);let t=0;const n=((e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}})(S,w,((n,r={})=>{if(n==z.FOCUS_EVENT){const n=Date.now();R().revalidateOnFocus&&n>t&&M()&&(t=n+R().focusThrottleInterval,e())}else if(n==z.RECONNECT_EVENT)R().revalidateOnReconnect&&M()&&e();else{if(n==z.MUTATE_EVENT)return le();if(n==z.ERROR_REVALIDATE_EVENT)return le(r)}}));return C.current=!1,N.current=S,I.current=!0,V({_k:T}),ie&&(y(Z)||O?e():L(e)),()=>{C.current=!0,n()}}),[S]),P((()=>{let e;function t(){const t=v(d)?d(Z):d;t&&-1!==e&&(e=setTimeout(n,t))}function n(){F().error||!f&&!R().isVisible()||!p&&!R().isOnline()?t():le(ee).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[d,f,p,S]),(0,u.useDebugValue)(re),s&&y(Z)&&S){if(!D&&O)throw new Error("Fallback data is required when using suspense in SSR.");throw x.current=t,A.current=n,C.current=!1,y(te)?le(ee):te}return{mutate:ue,get data(){return H.data=!0,re},get error(){return H.error=!0,te},get isValidating(){return H.isValidating=!0,oe},get isLoading(){return H.isLoading=!0,ae}}},function(...e){const t=b(W,(0,u.useContext)(Q)),[n,r,i]=X(e),s=G(t,i);let o=te;const{use:a}=s,l=(a||[]).concat(Z);for(let e=l.length;e--;)o=l[e](o);return o(n,r||s.fetcher||null,s)}),oe=ne={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){throw new Error("setTimeout has not been defined")}function le(){throw new Error("clearTimeout has not been defined")}function ue(e){if(re===setTimeout)return setTimeout(e,0);if((re===ae||!re)&&setTimeout)return re=setTimeout,setTimeout(e,0);try{return re(e,0)}catch(t){try{return re.call(null,e,0)}catch(t){return re.call(this,e,0)}}}!function(){try{re="function"==typeof setTimeout?setTimeout:ae}catch(e){re=ae}try{ie="function"==typeof clearTimeout?clearTimeout:le}catch(e){ie=le}}();var ce,he=[],de=!1,fe=-1;function pe(){de&&ce&&(de=!1,ce.length?he=ce.concat(he):fe=-1,he.length&&me())}function me(){if(!de){var e=ue(pe);de=!0;for(var t=he.length;t;){for(ce=he,he=[];++fe<t;)ce&&ce[fe].run();fe=-1,t=he.length}ce=null,de=!1,function(e){if(ie===clearTimeout)return clearTimeout(e);if((ie===le||!ie)&&clearTimeout)return ie=clearTimeout,clearTimeout(e);try{return ie(e)}catch(t){try{return ie.call(null,e)}catch(t){return ie.call(this,e)}}}(e)}}function ge(e,t){this.fun=e,this.array=t}function ye(){}oe.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];he.push(new ge(e,t)),1!==he.length||de||ue(me)},ge.prototype.run=function(){this.fun.apply(null,this.array)},oe.title="browser",oe.browser=!0,oe.env={},oe.argv=[],oe.version="",oe.versions={},oe.on=ye,oe.addListener=ye,oe.once=ye,oe.off=ye,oe.removeListener=ye,oe.removeAllListeners=ye,oe.emit=ye,oe.prependListener=ye,oe.prependOnceListener=ye,oe.listeners=function(e){return[]},oe.binding=function(e){throw new Error("process.binding is not supported")},oe.cwd=function(){return"/"},oe.chdir=function(e){throw new Error("process.chdir is not supported")},oe.umask=function(){return 0};const ve=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},be={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ve(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new we;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ee=function(e){return function(e){const t=ve(e);return be.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ke=function(e){try{return be.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Se=()=>{try{return _e()||(()=>{if(void 0===ne||void 0===ne.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&ke(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Te=e=>{var t,n;return null===(n=null===(t=Se())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Ie=e=>{const t=Te(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ce=()=>{var e;return null===(e=Se())||void 0===e?void 0:e.config},Ne=e=>{var t;return null===(t=Se())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ee(JSON.stringify({alg:"none",type:"JWT"})),Ee(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function De(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Oe(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Le(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Pe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Me.prototype.create)}}class Me{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Fe,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Pe(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Fe=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ve(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(je(n)&&je(s)){if(!Ve(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function je(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ze(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Be(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function $e(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e,t){const n=new He(e,t);return n.subscribe.bind(n)}class He{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ke),void 0===r.error&&(r.error=Ke),void 0===r.complete&&(r.complete=Ke);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Ke(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e){return e&&e._delegate?e._delegate:e}class Ge{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new xe;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Qe})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=Qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Qe){return this.instances.has(e)}getOptions(e=Qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Qe?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=Qe){return this.component?this.component.multipleInstances?e:Qe:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Ye{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Je(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=[];var Ze,et;(et=Ze||(Ze={}))[et.DEBUG=0]="DEBUG",et[et.VERBOSE=1]="VERBOSE",et[et.INFO=2]="INFO",et[et.WARN=3]="WARN",et[et.ERROR=4]="ERROR",et[et.SILENT=5]="SILENT";const tt={debug:Ze.DEBUG,verbose:Ze.VERBOSE,info:Ze.INFO,warn:Ze.WARN,error:Ze.ERROR,silent:Ze.SILENT},nt=Ze.INFO,rt={[Ze.DEBUG]:"log",[Ze.VERBOSE]:"log",[Ze.INFO]:"info",[Ze.WARN]:"warn",[Ze.ERROR]:"error"},it=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=rt[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class st{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?tt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ze.DEBUG,...e),this._logHandler(this,Ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ze.VERBOSE,...e),this._logHandler(this,Ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ze.INFO,...e),this._logHandler(this,Ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ze.WARN,...e),this._logHandler(this,Ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ze.ERROR,...e),this._logHandler(this,Ze.ERROR,...e)}constructor(e){this.name=e,this._logLevel=nt,this._logHandler=it,this._userLogHandler=null,Xe.push(this)}}const ot=(e,t)=>t.some((t=>e instanceof t));let at,lt;const ut=new WeakMap,ct=new WeakMap,ht=new WeakMap,dt=new WeakMap,ft=new WeakMap;let pt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ct.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ht.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function mt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(lt||(lt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(vt(this),t),yt(ut.get(this))}:function(...t){return yt(e.apply(vt(this),t))}:function(t,...n){const r=e.call(vt(this),t,...n);return ht.set(r,t.sort?t.sort():[t]),yt(r)}}function gt(e){return"function"==typeof e?mt(e):(e instanceof IDBTransaction&&function(e){if(ct.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));ct.set(e,t)}(e),ot(e,at||(at=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,pt):e)}function yt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(yt(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&ut.set(t,e)})).catch((()=>{})),ft.set(t,e),t}(e);if(dt.has(e))return dt.get(e);const t=gt(e);return t!==e&&(dt.set(e,t),ft.set(t,e)),t}const vt=e=>ft.get(e);function bt(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=yt(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(yt(o.result),e.oldVersion,e.newVersion,yt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const wt=["get","getKey","getAll","getAllKeys","count"],Et=["put","add","delete","clear"],kt=new Map;function _t(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(kt.get(t))return kt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Et.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!wt.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return kt.set(t,s),s}pt=(e=>({...e,get:(t,n,r)=>_t(t,n)||e.get(t,n,r),has:(t,n)=>!!_t(t,n)||e.has(t,n)}))(pt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Tt="@firebase/app",It="0.9.7",Ct=new st("@firebase/app"),Nt="[DEFAULT]",xt={[Tt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},At=new Map,Rt=new Map;function Dt(e,t){try{e.container.addComponent(t)}catch(n){Ct.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ot(e){const t=e.name;if(Rt.has(t))return Ct.debug(`There were multiple attempts to register component ${t}.`),!1;Rt.set(t,e);for(const t of At.values())Dt(t,e);return!0}function Lt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pt=new Me("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ge("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="9.19.1";function Ut(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Nt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Pt.create("bad-app-name",{appName:String(i)});if(n||(n=Ce()),!n)throw Pt.create("no-options");const s=At.get(i);if(s){if(Ve(n,s.options)&&Ve(r,s.config))return s;throw Pt.create("duplicate-app",{appName:i})}const o=new Ye(i);for(const e of Rt.values())o.addComponent(e);const a=new Mt(n,r,o);return At.set(i,a),a}function Vt(e=Nt){const t=At.get(e);if(!t&&e===Nt)return Ut();if(!t)throw Pt.create("no-app",{appName:e});return t}function jt(e,t,n){var r;let i=null!==(r=xt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ct.warn(e.join(" "))}Ot(new Ge(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zt="firebase-heartbeat-database",Bt=1,$t="firebase-heartbeat-store";let qt=null;function Ht(){return qt||(qt=bt(zt,Bt,{upgrade:(e,t)=>{if(0===t)e.createObjectStore($t)}}).catch((e=>{throw Pt.create("idb-open",{originalErrorMessage:e.message})}))),qt}async function Kt(e,t){try{const n=(await Ht()).transaction($t,"readwrite"),r=n.objectStore($t);return await r.put(t,Wt(e)),n.done}catch(e){if(e instanceof Pe)Ct.warn(e.message);else{const t=Pt.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ct.warn(t.message)}}}function Wt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Qt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Qt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Yt(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Ee(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Qt(){return(new Date).toISOString().substring(0,10)}class Jt{async runIndexedDBEnvironmentCheck(){return!!Le()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Ht()).transaction($t).objectStore($t).get(Wt(e))}catch(e){if(e instanceof Pe)Ct.warn(e.message);else{const t=Pt.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ct.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Kt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Kt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Yt(e){return Ee(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt;Xt="",Ot(new Ge("platform-logger",(e=>new St(e)),"PRIVATE")),Ot(new Ge("heartbeat",(e=>new Gt(e)),"PRIVATE")),jt(Tt,It,Xt),jt(Tt,It,"esm2017"),jt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
jt("firebase","9.19.1","app");function Zt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function en(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tn=en,nn=new Me("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),rn=new st("@firebase/auth");function sn(e,...t){rn.logLevel<=Ze.ERROR&&rn.error(`Auth (${Ft}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,...t){throw cn(e,...t)}function an(e,...t){return cn(e,...t)}function ln(e,t,n){const r=Object.assign(Object.assign({},tn()),{[t]:n});return new Me("auth","Firebase",r).create(t,{appName:e.name})}function un(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&on(e,"argument-error"),ln(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cn(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return nn.create(e,...t)}function hn(e,t,...n){if(!e)throw cn(t,...n)}function dn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw sn(t),new Error(t)}function fn(e,t){e||dn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Map;function mn(e){fn(e instanceof Function,"Expected a class definition");let t=pn.get(e);return t?(fn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,pn.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function yn(){return"http:"===vn()||"https:"===vn()}function vn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(yn()||De()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{get(){return bn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,fn(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e,t){fn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Sn=new wn(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function In(e,t,n,r,i={}){return Cn(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=ze(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),kn.fetch()(xn(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Cn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},_n),t);try{const t=new An(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Rn(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Rn(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Rn(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Rn(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ln(e,a,o);on(e,a)}}catch(t){if(t instanceof Pe)throw t;on(e,"network-request-failed",{message:String(t)})}}async function Nn(e,t,n,r,i={}){const s=await In(e,t,n,r,i);return"mfaPendingCredential"in s&&on(e,"multi-factor-auth-required",{_serverResponse:s}),s}function xn(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?En(e.config,i):`${e.config.apiScheme}://${i}`}class An{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(an(this.auth,"network-request-failed"))),Sn.get())}))}}function Rn(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e){return 1e3*Number(e)}function Ln(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return sn("JWT malformed, contained fewer than 3 sections"),null;try{const e=ke(n);return e?JSON.parse(e):(sn("Failed to decode base64 JWT payload"),null)}catch(e){return sn("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pn(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Pe&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Mn{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{_initializeTime(){this.lastSignInTime=Dn(this.lastLoginAt),this.creationTime=Dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Pn(e,async function(e,t){return In(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));hn(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Zt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,u=o,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!c&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Fn(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vn{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){hn(e.idToken,"internal-error"),hn(void 0!==e.idToken,"internal-error"),hn(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ln(e);return hn(t,"internal-error"),hn(void 0!==t.exp,"internal-error"),hn(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return hn(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Cn(e,{},(async()=>{const n=ze({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=xn(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",kn.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Vn;return n&&(hn("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(hn("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(hn("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return dn("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(e,t){hn("string"==typeof e||void 0===e,"internal-error",{appName:t})}class zn{async getIdToken(e){const t=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return hn(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=We(e),r=await n.getIdToken(t),i=Ln(r);hn(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Dn(On(i.auth_time)),issuedAtTime:Dn(On(i.iat)),expirationTime:Dn(On(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=We(e);await Un(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(hn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){hn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Un(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pn(this,async function(e,t){return In(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:k}=t;hn(v&&k,e,"internal-error");const _=Vn.fromJSON(this.name,k);hn("string"==typeof v,e,"internal-error"),jn(c,e.name),jn(h,e.name),hn("boolean"==typeof b,e,"internal-error"),hn("boolean"==typeof w,e,"internal-error"),jn(d,e.name),jn(f,e.name),jn(p,e.name),jn(m,e.name),jn(g,e.name),jn(y,e.name);const S=new zn({uid:v,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new Vn;r.updateFromServerResponse(t);const i=new zn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Un(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Zt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fn(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Bn.type="NONE";const $n=Bn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e,t,n){return`firebase:${e}:${t}:${n}`}class Hn{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Hn(mn($n),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||mn($n);const s=qn(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=zn._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Hn(i,e,n)):new Hn(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=qn(this.userKey,r.apiKey,i),this.fullPersistenceKey=qn("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Jn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xn(t))return"Blackberry";if(Zn(t))return"Webos";if(Gn(t))return"Safari";if((t.includes("chrome/")||Qn(t))&&!t.includes("edge/"))return"Chrome";if(Yn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Wn(e=Re()){return/firefox\//i.test(e)}function Gn(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Qn(e=Re()){return/crios\//i.test(e)}function Jn(e=Re()){return/iemobile/i.test(e)}function Yn(e=Re()){return/android/i.test(e)}function Xn(e=Re()){return/blackberry/i.test(e)}function Zn(e=Re()){return/webos/i.test(e)}function er(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function tr(){return Oe()&&10===document.documentMode}function nr(e=Re()){return er(e)||Yn(e)||Zn(e)||Xn(e)||/windows phone/i.test(e)||Jn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rr(e,t=[]){let n;switch(e){case"Browser":n=Kn(Re());break;case"Worker":n=`${Kn(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ft}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mn(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Hn.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return hn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Un(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?We(e):null;return t&&hn(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&hn(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(mn(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Me("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mn(e)||this._popupRedirectResolver;hn(t,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[mn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return hn(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return hn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ar(this),this.idTokenSubscription=new ar(this),this.beforeStateQueue=new ir(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function or(e){return We(e)}class ar{get next(){return hn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=qe((e=>this.observer=e))}}function lr(e,t,n){const r=or(e);hn(r._canInitEmulator,r,"emulator-config-failed"),hn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=ur(t),{host:o,port:a}=function(e){const t=ur(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:cr(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:cr(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ur(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function cr(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class hr{toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,t){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(e,t){return In(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr extends hr{static _fromEmailAndPassword(e,t){return new fr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new fr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Nn(e,"POST","/v1/accounts:signInWithPassword",Tn(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Nn(e,"POST","/v1/accounts:signInWithEmailLink",Tn(e,t))}(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return dr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Nn(e,"POST","/v1/accounts:signInWithEmailLink",Tn(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(e,t){return Nn(e,"POST","/v1/accounts:signInWithIdp",Tn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends hr{static _fromParams(e){const t=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):on("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Zt(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new mr(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return pr(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,pr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pr(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ze(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr extends hr{static _fromVerification(e,t){return new yr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new yr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Nn(e,"POST","/v1/accounts:signInWithPhoneNumber",Tn(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Nn(e,"POST","/v1/accounts:signInWithPhoneNumber",Tn(e,t));if(n.temporaryProof)throw Rn(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Nn(e,"POST","/v1/accounts:signInWithPhoneNumber",Tn(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),gr)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new yr({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{static parseLink(e){const t=function(e){const t=Be($e(e)).link,n=t?Be($e(t)).deep_link_id:null,r=Be($e(e)).deep_link_id;return(r?Be($e(r)).link:null)||r||n||t||e}(e);try{return new vr(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=Be($e(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);hn(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{static credential(e,t){return fr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vr.parseLink(t);return hn(n,"argument-error"),fr._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=br.PROVIDER_ID}}br.PROVIDER_ID="password",br.EMAIL_PASSWORD_SIGN_IN_METHOD="password",br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wr{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends wr{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr extends Er{static credential(e){return mr._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com",kr.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r extends Er{static credential(e,t){return mr._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return _r.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}_r.GOOGLE_SIGN_IN_METHOD="google.com",_r.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sr extends Er{static credential(e){return mr._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Sr.GITHUB_SIGN_IN_METHOD="github.com",Sr.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr extends Er{static credential(e,t){return mr._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Tr.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com",Tr.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await zn._fromIdTokenResponse(e,n,r),s=Cr(n);return new Ir({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Cr(n);return new Ir({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Cr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr extends Pe{static _fromErrorAndOperation(e,t,n,r){return new Nr(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Nr.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function xr(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Nr._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(e,t,n=!1){const r=await Pn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ir._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rr(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Pn(e,xr(r,i,t,e),n);hn(s.idToken,r,"internal-error");const o=Ln(s.idToken);hn(o,r,"internal-error");const{sub:a}=o;return hn(e.uid===a,r,"user-mismatch"),Ir._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&on(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(e,t,n=!1){const r="signIn",i=await xr(e,r,t),s=await Ir._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}new WeakMap;const Or="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{_isAvailable(){try{return this.storage?(this.storage.setItem(Or,"1"),this.storage.removeItem(Or),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Lr{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);tr()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Re();return Gn(e)||er(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=nr(),this._shouldAllowMigration=!0}}Pr.type="LOCAL";const Mr=Pr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Lr{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Fr.type="SESSION";const Ur=Fr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Vr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jr(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vr.receivers=[];class zr{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=jr("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $r(){return void 0!==Br().WorkerGlobalScope&&"function"==typeof Br().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qr="firebaseLocalStorageDb",Hr="firebaseLocalStorage",Kr="fbase_key";class Wr{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Gr(e,t){return e.transaction([Hr],t?"readwrite":"readonly").objectStore(Hr)}function Qr(){const e=indexedDB.open(qr,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Hr,{keyPath:Kr})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Hr)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(qr);return new Wr(e).toPromise()}(),t(await Qr()))}))}))}async function Jr(e,t,n){const r=Gr(e,!0).put({[Kr]:t,value:n});return new Wr(r).toPromise()}function Yr(e,t){const n=Gr(e,!0).delete(t);return new Wr(n).toPromise()}class Xr{async _openDb(){return this.db||(this.db=await Qr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $r()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vr._getInstance($r()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new zr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qr();return await Jr(e,Or,"1"),await Yr(e,Or),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Jr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Gr(e,!1).get(t),r=await new Wr(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Yr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Gr(e,!1).getAll();return new Wr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Xr.type="LOCAL";const Zr=Xr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=an("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function ti(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ti("rcb"),new wn(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ni="recaptcha";async function ri(e,t,n){var r;const i=await n.verify();try{let s;if(hn("string"==typeof i,e,"argument-error"),hn(n.type===ni,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){hn("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return In(e,"POST","/v2/accounts/mfaEnrollment:start",Tn(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{hn("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;hn(n,e,"missing-multi-factor-info");const o=await function(e,t){return In(e,"POST","/v2/accounts/mfaSignIn:start",Tn(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return In(e,"POST","/v1/accounts:sendVerificationCode",Tn(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii{verifyPhoneNumber(e,t){return ri(this.auth,e,We(t))}static credential(e,t){return yr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ii.credentialFromTaggedObject(t)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?yr._fromTokenResponse(t,n):null}constructor(e){this.providerId=ii.PROVIDER_ID,this.auth=or(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function si(e,t){return t?mn(t):(hn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.PROVIDER_ID="phone",ii.PHONE_SIGN_IN_METHOD="phone";class oi extends hr{_getIdTokenResponse(e){return pr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function ai(e){return Dr(e.auth,new oi(e),e.bypassAuthState)}function li(e){const{auth:t,user:n}=e;return hn(n,t,"internal-error"),Rr(n,new oi(e),e.bypassAuthState)}async function ui(e){const{auth:t,user:n}=e;return hn(n,t,"internal-error"),Ar(n,new oi(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ai;case"linkViaPopup":case"linkViaRedirect":return ui;case"reauthViaPopup":case"reauthViaRedirect":return li;default:on(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new wn(2e3,1e4);class di extends ci{async executeNotNull(){const e=await this.execute();return hn(e,this.auth,"internal-error"),e}async onExecution(){fn(1===this.filter.length,"Popup operations only handle one event");const e=jr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(an(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,hi.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}}di.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fi="pendingRedirect",pi=new Map;class mi extends ci{async execute(){let e=pi.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=bi(t),r=vi(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}pi.set(this.auth._key(),e)}return this.bypassAuthState||pi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function gi(e,t){return vi(e)._set(bi(t),"true")}function yi(e,t){pi.set(e._key(),t)}function vi(e){return mn(e._redirectPersistence)}function bi(e){return qn(fi,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e,t,n){return async function(e,t,n){const r=or(e);un(e,t,wr),await r._initializationPromise;const i=si(r,n);return await gi(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}async function Ei(e,t){return await or(e)._initializationPromise,ki(e,t,!1)}async function ki(e,t,n=!1){const r=or(e),i=si(r,t),s=new mi(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class _i{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ti(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ti(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(an(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Si(e))}saveEventToCache(e){this.cachedEventUids.add(Si(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Si(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ti({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ii=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ci=/^https?/;async function Ni(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return In(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(xi(e))return}catch(e){}on(e,"unauthorized-domain")}function xi(e){const t=gn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ci.test(n))return!1;if(Ii.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new wn(3e4,6e4);function Ri(){const e=Br().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Di=null;function Oi(e){return Di=Di||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ri(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ri(),n(an(e,"network-request-failed"))},timeout:Ai.get()})}if(null===(i=null===(r=Br().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Br().gapi)||void 0===s?void 0:s.load)){const t=ti("iframefcb");return Br()[t]=()=>{gapi.load?o():n(an(e,"network-request-failed"))},ei(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Di=null,e}))}(e),Di}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new wn(5e3,15e3),Pi="__/auth/iframe",Mi="emulator/auth/iframe",Fi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ui=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vi(e){const t=e.config;hn(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?En(t,Mi):`https://${e.config.authDomain}/${Pi}`,r={apiKey:t.apiKey,appName:e.name,v:Ft},i=Ui.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ze(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ji={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class zi{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Bi(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ji),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(a=Qn(u)?"_blank":n),Wn(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Re()){var t;return er(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new zi(null);const h=window.open(t||"",a,c);hn(h,e,"popup-blocked");try{h.focus()}catch(e){}return new zi(h)}const $i="__/auth/handler",qi="emulator/auth/handler";function Hi(e,t,n,r,i,s){hn(e.config.authDomain,e,"auth-domain-config-required"),hn(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ft,eventId:i};if(t instanceof wr){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ue(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Er){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?En(e,qi):`https://${e.authDomain}/${$i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${ze(a).slice(1)}`}const Ki="webStorageSupport";const Wi=class{async _openPopup(e,t,n,r){var i;fn(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Bi(e,Hi(e,t,n,gn(),r),jr())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Hi(e,t,n,gn(),r),Br().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(fn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Oi(e),n=Br().gapi;return hn(n,e,"internal-error"),t.open({where:document.body,url:Vi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fi,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=an(e,"network-request-failed"),s=Br().setTimeout((()=>{r(i)}),Li.get());function o(){Br().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new _i(e);return t.register("authEvent",(t=>{hn(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ki,{type:Ki},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Ki];void 0!==i&&t(!!i),on(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ni(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nr()||Gn()||er()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ur,this._completeRedirectFn=ki,this._overrideRedirectResult=yi}};var Gi="@firebase/auth",Qi="0.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){hn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yi=Ne("authIdTokenMaxAge")||300;let Xi=null;function Zi(e=Vt()){const t=Lt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Lt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ve(n.getOptions(),null!=t?t:{}))return e;on(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Wi,persistence:[Zr,Mr,Ur]}),r=Ne("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Yi)return;const r=null==t?void 0:t.token;Xi!==r&&(Xi=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){We(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){We(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=Te("auth");return s&&lr(n,`http://${s}`),n}var es;es="Browser",Ot(new Ge("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{hn(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),hn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:es,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rr(es)},o=new sr(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ot(new Ge("auth-internal",(e=>(e=>new Ji(e))(or(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Gi,Qi,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(es)),jt(Gi,Qi,"esm2017");var ts,ns="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},rs={},is=is||{},ss=ns||self;function os(){}function as(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function ls(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var us="closure_uid_"+(1e9*Math.random()>>>0),cs=0;function hs(e,t,n){return e.call.apply(e.bind,arguments)}function ds(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function fs(e,t,n){return(fs=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?hs:ds).apply(null,arguments)}function ps(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ms(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function gs(){this.s=this.s,this.o=this.o}gs.prototype.s=!1,gs.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,us)&&e[us]||(e[us]=++cs))},gs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ys=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function vs(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function bs(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(as(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function ws(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ws.prototype.h=function(){this.defaultPrevented=!0};var Es=function(){if(!ss.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ss.addEventListener("test",os,t),ss.removeEventListener("test",os,t)}catch(e){}return e}();function ks(e){return/^[\s\xa0]*$/.test(e)}var _s=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ss(e,t){return e<t?-1:e>t?1:0}function Ts(){var e=ss.navigator;return e&&(e=e.userAgent)?e:""}function Is(e){return-1!=Ts().indexOf(e)}function Cs(e){return Cs[" "](e),e}Cs[" "]=os;var Ns,xs,As=Is("Opera"),Rs=Is("Trident")||Is("MSIE"),Ds=Is("Edge"),Os=Ds||Rs,Ls=Is("Gecko")&&!(-1!=Ts().toLowerCase().indexOf("webkit")&&!Is("Edge"))&&!(Is("Trident")||Is("MSIE"))&&!Is("Edge"),Ps=-1!=Ts().toLowerCase().indexOf("webkit")&&!Is("Edge");function Ms(){var e=ss.document;return e?e.documentMode:void 0}e:{var Fs="",Us=(xs=Ts(),Ls?/rv:([^\);]+)(\)|;)/.exec(xs):Ds?/Edge\/([\d\.]+)/.exec(xs):Rs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(xs):Ps?/WebKit\/(\S+)/.exec(xs):As?/(?:Version)[ \/]?(\S+)/.exec(xs):void 0);if(Us&&(Fs=Us?Us[1]:""),Rs){var Vs=Ms();if(null!=Vs&&Vs>parseFloat(Fs)){Ns=String(Vs);break e}}Ns=Fs}var js,zs={};function Bs(){return function(e){var t=zs;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=_s(String(Ns)).split("."),n=_s("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Ss(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Ss(0==i[2].length,0==s[2].length)||Ss(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(ss.document&&Rs){var $s=Ms();js=$s||(parseInt(Ns,10)||void 0)}else js=void 0;var qs=js;function Hs(e,t){if(ws.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ls){e:{try{Cs(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ks[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Hs.X.h.call(this)}}ms(Hs,ws);var Ks={2:"touch",3:"pen",4:"mouse"};Hs.prototype.h=function(){Hs.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ws="closure_listenable_"+(1e6*Math.random()|0),Gs=0;function Qs(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Gs,this.ba=this.ea=!1}function Js(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Ys(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Xs(e){const t={};for(const n in e)t[n]=e[n];return t}const Zs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eo(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Zs.length;t++)n=Zs[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function to(e){this.src=e,this.g={},this.h=0}function no(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=ys(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Js(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ro(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}to.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ro(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new Qs(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var io="closure_lm_"+(1e6*Math.random()|0),so={};function oo(e,t,n,r,i){if(r&&r.once)return lo(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)oo(e,t[s],n,r,i);return null}return n=go(n),e&&e[Ws]?e.N(t,n,ls(r)?!!r.capture:!!r,i):ao(e,t,n,!1,r,i)}function ao(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ls(i)?!!i.capture:!!i,a=po(e);if(a||(e[io]=a=new to(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=fo;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Es||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ho(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function lo(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)lo(e,t[s],n,r,i);return null}return n=go(n),e&&e[Ws]?e.O(t,n,ls(r)?!!r.capture:!!r,i):ao(e,t,n,!0,r,i)}function uo(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)uo(e,t[s],n,r,i);else r=ls(r)?!!r.capture:!!r,n=go(n),e&&e[Ws]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ro(s=e.g[t],n,r,i))&&(Js(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=po(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ro(t,n,r,i)),(n=-1<e?t[e]:null)&&co(n))}function co(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Ws])no(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ho(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=po(t))?(no(n,e),0==n.h&&(n.src=null,t[io]=null)):Js(e)}}}function ho(e){return e in so?so[e]:so[e]="on"+e}function fo(e,t){if(e.ba)e=!0;else{t=new Hs(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&co(e),e=n.call(r,t)}return e}function po(e){return(e=e[io])instanceof to?e:null}var mo="__closure_events_fn_"+(1e9*Math.random()>>>0);function go(e){return"function"==typeof e?e:(e[mo]||(e[mo]=function(t){return e.handleEvent(t)}),e[mo])}function yo(){gs.call(this),this.i=new to(this),this.P=this,this.I=null}function vo(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new ws(t,e);else if(t instanceof ws)t.target=t.target||e;else{var i=t;eo(t=new ws(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=bo(o,r,!0,t)&&i}if(i=bo(o=t.g=e,r,!0,t)&&i,i=bo(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=bo(o=t.g=n[s],r,!1,t)&&i}function bo(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&no(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}ms(yo,gs),yo.prototype[Ws]=!0,yo.prototype.removeEventListener=function(e,t,n,r){uo(this,e,t,n,r)},yo.prototype.M=function(){if(yo.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Js(n[r]);delete t.g[e],t.h--}}this.I=null},yo.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},yo.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var wo=ss.JSON.stringify;function Eo(){var e=No;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var ko,_o=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new So),(e=>e.reset()));class So{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function To(e){ss.setTimeout((()=>{throw e}),0)}function Io(e,t){ko||function(){var e=ss.Promise.resolve(void 0);ko=function(){e.then(xo)}}(),Co||(ko(),Co=!0),No.add(e,t)}var Co=!1,No=new class{add(e,t){const n=_o.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function xo(){for(var e;e=Eo();){try{e.h.call(e.g)}catch(e){To(e)}var t=_o;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Co=!1}function Ao(e,t){yo.call(this),this.h=e||1,this.g=t||ss,this.j=fs(this.lb,this),this.l=Date.now()}function Ro(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Do(e,t,n){if("function"==typeof e)n&&(e=fs(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=fs(e.handleEvent,e)}return 2147483647<Number(t)?-1:ss.setTimeout(e,t||0)}function Oo(e){e.g=Do((()=>{e.g=null,e.i&&(e.i=!1,Oo(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}ms(Ao,yo),(ts=Ao.prototype).ca=!1,ts.R=null,ts.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),vo(this,"tick"),this.ca&&(Ro(this),this.start()))}},ts.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ts.M=function(){Ao.X.M.call(this),Ro(this),delete this.g};class Lo extends gs{l(e){this.h=arguments,this.g?this.i=!0:Oo(this)}M(){super.M(),this.g&&(ss.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Po(e){gs.call(this),this.h=e,this.g={}}ms(Po,gs);var Mo=[];function Fo(e,t,n,r){Array.isArray(n)||(n&&(Mo[0]=n.toString()),n=Mo);for(var i=0;i<n.length;i++){var s=oo(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Uo(e){Ys(e.g,(function(e,t){this.g.hasOwnProperty(t)&&co(e)}),e),e.g={}}function Vo(){this.g=!0}function jo(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return wo(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Po.prototype.M=function(){Po.X.M.call(this),Uo(this)},Po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Vo.prototype.Aa=function(){this.g=!1},Vo.prototype.info=function(){};var zo={},Bo=null;function $o(){return Bo=Bo||new yo}function qo(e){ws.call(this,zo.Pa,e)}function Ho(e){const t=$o();vo(t,new qo(t))}function Ko(e,t){ws.call(this,zo.STAT_EVENT,e),this.stat=t}function Wo(e){const t=$o();vo(t,new Ko(t,e))}function Go(e,t){ws.call(this,zo.Qa,e),this.size=t}function Qo(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return ss.setTimeout((function(){e()}),t)}zo.Pa="serverreachability",ms(qo,ws),zo.STAT_EVENT="statevent",ms(Ko,ws),zo.Qa="timingevent",ms(Go,ws);var Jo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Yo={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xo(){}function Zo(e){return e.h||(e.h=e.i())}function ea(){}Xo.prototype.h=null;var ta,na={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ra(){ws.call(this,"d")}function ia(){ws.call(this,"c")}function sa(){}function oa(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Po(this),this.O=la,e=Os?125:void 0,this.T=new Ao(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new aa}function aa(){this.i=null,this.g="",this.h=!1}ms(ra,ws),ms(ia,ws),ms(sa,Xo),sa.prototype.g=function(){return new XMLHttpRequest},sa.prototype.i=function(){return{}},ta=new sa;var la=45e3,ua={},ca={};function ha(e,t,n){e.K=1,e.v=Aa(Ta(t)),e.s=n,e.P=!0,da(e,null)}function da(e,t){e.F=Date.now(),ga(e),e.A=Ta(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),$a(n.i,"t",r),e.C=0,n=e.l.H,e.h=new aa,e.g=Bl(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Lo(fs(e.La,e,e.g),e.N)),Fo(e.S,e.g,"readystatechange",e.ib),t=e.H?Xs(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Ho(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function fa(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function pa(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=ma(e,n),r==ca){4==t&&(e.o=4,Wo(14),i=!1),jo(e.j,e.m,null,"[Incomplete Response]");break}if(r==ua){e.o=4,Wo(15),jo(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}jo(e.j,e.m,r,null),Ea(e,r)}fa(e)&&r!=ca&&r!=ua&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Wo(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ll(t),t.K=!0,Wo(11))):(jo(e.j,e.m,n,"[Invalid Chunked Response]"),wa(e),ba(e))}function ma(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?ca:(n=Number(t.substring(n,r)),isNaN(n)?ua:(r+=1)+n>t.length?ca:(t=t.substr(r,n),e.C=r+n,t))}function ga(e){e.V=Date.now()+e.O,ya(e,e.O)}function ya(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Qo(fs(e.gb,e),t)}function va(e){e.B&&(ss.clearTimeout(e.B),e.B=null)}function ba(e){0==e.l.G||e.I||Fl(e.l,e)}function wa(e){va(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ro(e.T),Uo(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ea(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Qa(n.h,e)))if(!e.J&&Qa(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Ml(n),Il(n)}Ol(n),Wo(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Qo(fs(n.cb,n),6e3));if(1>=Ga(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Vl(n,11)}else if((e.J||n.g==e)&&Ml(n),!ks(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ja(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,xa(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((r=n).sa=zl(r,r.H?r.ka:null,r.V),o.J){Ya(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(va(a),ga(a)),r.g=o}else Dl(r);0<n.i.length&&Nl(n)}else"stop"!=u[0]&&"close"!=u[0]||Vl(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Vl(n,7):Tl(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Ho()}catch(e){}}function ka(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(as(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(as(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(as(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(ts=oa.prototype).setTimeout=function(e){this.O=e},ts.ib=function(e){e=e.target;const t=this.L;t&&3==bl(e)?t.l():this.La(e)},ts.La=function(e){try{if(e==this.g)e:{const c=bl(this.g);var t=this.g.Ea();this.g.aa();if(!(3>c)&&(3!=c||Os||this.g&&(this.h.h||this.g.fa()||wl(this.g)))){this.I||4!=c||7==t||Ho(),va(this);var n=this.g.aa();this.Y=n;t:if(fa(this)){var r=wl(this.g);e="";var i=r.length,s=4==bl(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){wa(this),ba(this);var o="";break t}this.h.i=new ss.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ks(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Wo(12),wa(this),ba(this);break e}jo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ea(this,n)}this.P?(pa(this,c,o),Os&&this.i&&3==c&&(Fo(this.S,this.T,"tick",this.hb),this.T.start())):(jo(this.j,this.m,o,null),Ea(this,o)),4==c&&wa(this),this.i&&!this.I&&(4==c?Fl(this.l,this):(this.i=!1,ga(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Wo(12)):(this.o=0,Wo(13)),wa(this),ba(this)}}}catch(e){}},ts.hb=function(){if(this.g){var e=bl(this.g),t=this.g.fa();this.C<t.length&&(va(this),pa(this,e,t),this.i&&4!=e&&ga(this))}},ts.cancel=function(){this.I=!0,wa(this)},ts.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Ho(),Wo(17)),wa(this),this.o=2,ba(this)):ya(this,this.V-e)};var _a=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sa(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Sa){this.h=void 0!==t?t:e.h,Ia(this,e.j),this.s=e.s,this.g=e.g,Ca(this,e.m),this.l=e.l,t=e.i;var n=new Va;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Na(this,n),this.o=e.o}else e&&(n=String(e).match(_a))?(this.h=!!t,Ia(this,n[1]||"",!0),this.s=Ra(n[2]||""),this.g=Ra(n[3]||"",!0),Ca(this,n[4]),this.l=Ra(n[5]||"",!0),Na(this,n[6]||"",!0),this.o=Ra(n[7]||"")):(this.h=!!t,this.i=new Va(null,this.h))}function Ta(e){return new Sa(e)}function Ia(e,t,n){e.j=n?Ra(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ca(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Na(e,t,n){t instanceof Va?(e.i=t,function(e,t){t&&!e.j&&(ja(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(za(this,t),$a(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Da(t,Fa)),e.i=new Va(t,e.h))}function xa(e,t,n){e.i.set(t,n)}function Aa(e){return xa(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ra(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Da(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Oa),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Oa(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Sa.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Da(t,La,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Da(t,La,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Da(n,"/"==n.charAt(0)?Ma:Pa,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Da(n,Ua)),e.join("")};var La=/[#\/\?@]/g,Pa=/[#\?:]/g,Ma=/[#\?]/g,Fa=/[#\?@]/g,Ua=/#/g;function Va(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ja(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function za(e,t){ja(e),t=qa(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ba(e,t){return ja(e),t=qa(e,t),e.g.has(t)}function $a(e,t,n){za(e,t),0<n.length&&(e.i=null,e.g.set(qa(e,t),vs(n)),e.h+=n.length)}function qa(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ts=Va.prototype).add=function(e,t){ja(this),this.i=null,e=qa(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},ts.forEach=function(e,t){ja(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},ts.oa=function(){ja(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},ts.W=function(e){ja(this);let t=[];if("string"==typeof e)Ba(this,e)&&(t=t.concat(this.g.get(qa(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},ts.set=function(e,t){return ja(this),this.i=null,Ba(this,e=qa(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ts.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},ts.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ha(e){this.l=e||Ka,ss.PerformanceNavigationTiming?e=0<(e=ss.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(ss.g&&ss.g.Ga&&ss.g.Ga()&&ss.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ka=10;function Wa(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ga(e){return e.h?1:e.g?e.g.size:0}function Qa(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ja(e,t){e.g?e.g.add(t):e.h=t}function Ya(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Xa(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return vs(e.i)}function Za(){}function el(){this.g=new Za}function tl(e,t,n){const r=n||"";try{ka(e,(function(e,n){let i=e;ls(e)&&(i=wo(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function nl(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function rl(e){this.l=e.ac||null,this.j=e.jb||!1}function il(e,t){yo.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=sl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ha.prototype.cancel=function(){if(this.i=Xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Za.prototype.stringify=function(e){return ss.JSON.stringify(e,void 0)},Za.prototype.parse=function(e){return ss.JSON.parse(e,void 0)},ms(rl,Xo),rl.prototype.g=function(){return new il(this.l,this.j)},rl.prototype.i=function(e){return function(){return e}}({}),ms(il,yo);var sl=0;function ol(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function al(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ll(e)}function ll(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ts=il.prototype).open=function(e,t){if(this.readyState!=sl)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ll(this)},ts.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||ss).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},ts.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,al(this)),this.readyState=sl},ts.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ll(this)),this.g&&(this.readyState=3,ll(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==ss.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ol(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},ts.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?al(this):ll(this),3==this.readyState&&ol(this)}},ts.Va=function(e){this.g&&(this.response=this.responseText=e,al(this))},ts.Ua=function(e){this.g&&(this.response=e,al(this))},ts.ga=function(){this.g&&al(this)},ts.setRequestHeader=function(e,t){this.v.append(e,t)},ts.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ts.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(il.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ul=ss.JSON.parse;function cl(e){yo.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hl,this.K=this.L=!1}ms(cl,yo);var hl="",dl=/^https?$/i,fl=["POST","PUT"];function pl(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ml(e),yl(e)}function ml(e){e.D||(e.D=!0,vo(e,"complete"),vo(e,"error"))}function gl(e){if(e.h&&void 0!==is&&(!e.C[1]||4!=bl(e)||2!=e.aa()))if(e.v&&4==bl(e))Do(e.Ha,0,e);else if(vo(e,"readystatechange"),4==bl(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(_a)[1]||null;if(!i&&ss.self&&ss.self.location){var s=ss.self.location.protocol;i=s.substr(0,s.length-1)}r=!dl.test(i?i.toLowerCase():"")}n=r}if(n)vo(e,"complete"),vo(e,"success");else{e.m=6;try{var o=2<bl(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",ml(e)}}finally{yl(e)}}}function yl(e,t){if(e.g){vl(e);const n=e.g,r=e.C[0]?os:null;e.g=null,e.C=null,t||vo(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function vl(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(ss.clearTimeout(e.A),e.A=null)}function bl(e){return e.g?e.g.readyState:0}function wl(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case hl:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function El(e){let t="";return Ys(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function kl(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=El(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):xa(e,t,n))}function _l(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Sl(e){this.Ca=0,this.i=[],this.j=new Vo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=_l("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=_l("baseRetryDelayMs",5e3,e),this.bb=_l("retryDelaySeedMs",1e4,e),this.$a=_l("forwardChannelMaxRetries",2,e),this.ta=_l("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Ha(e&&e.concurrentRequestLimit),this.Fa=new el,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Tl(e){if(Cl(e),3==e.G){var t=e.U++,n=Ta(e.F);xa(n,"SID",e.I),xa(n,"RID",t),xa(n,"TYPE","terminate"),Al(e,n),(t=new oa(e,e.j,t,void 0)).K=2,t.v=Aa(Ta(n)),n=!1,ss.navigator&&ss.navigator.sendBeacon&&(n=ss.navigator.sendBeacon(t.v.toString(),"")),!n&&ss.Image&&((new Image).src=t.v,n=!0),n||(t.g=Bl(t.l,null),t.g.da(t.v)),t.F=Date.now(),ga(t)}jl(e)}function Il(e){e.g&&(Ll(e),e.g.cancel(),e.g=null)}function Cl(e){Il(e),e.u&&(ss.clearTimeout(e.u),e.u=null),Ml(e),e.h.cancel(),e.m&&("number"==typeof e.m&&ss.clearTimeout(e.m),e.m=null)}function Nl(e){Wa(e.h)||e.m||(e.m=!0,Io(e.Ja,e),e.C=0)}function xl(e,t){var n;n=t?t.m:e.U++;const r=Ta(e.F);xa(r,"SID",e.I),xa(r,"RID",n),xa(r,"AID",e.T),Al(e,r),e.o&&e.s&&kl(r,e.o,e.s),n=new oa(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Rl(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Ja(e.h,n),ha(n,r,t)}function Al(e,t){e.ia&&Ys(e.ia,(function(e,n){xa(t,n,e)})),e.l&&ka({},(function(e,n){xa(t,n,e)}))}function Rl(e,t,n){n=Math.min(e.i.length,n);var r=e.l?fs(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{tl(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Dl(e){e.g||e.u||(e.Z=1,Io(e.Ia,e),e.A=0)}function Ol(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Qo(fs(e.Ia,e),Ul(e,e.A)),e.A++,!0)}function Ll(e){null!=e.B&&(ss.clearTimeout(e.B),e.B=null)}function Pl(e){e.g=new oa(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Ta(e.sa);xa(t,"RID","rpc"),xa(t,"SID",e.I),xa(t,"CI",e.L?"0":"1"),xa(t,"AID",e.T),xa(t,"TYPE","xmlhttp"),Al(e,t),e.o&&e.s&&kl(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Aa(Ta(t)),n.s=null,n.P=!0,da(n,e)}function Ml(e){null!=e.v&&(ss.clearTimeout(e.v),e.v=null)}function Fl(e,t){var n=null;if(e.g==t){Ml(e),Ll(e),e.g=null;var r=2}else{if(!Qa(e.h,t))return;n=t.D,Ya(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;vo(r=$o(),new Go(r,n)),Nl(e)}else Dl(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(Ga(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=Qo(fs(e.Ja,e,t),Ul(e,e.C)),e.C++,0)))}(e,t)||2==r&&Ol(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Vl(e,5);break;case 4:Vl(e,10);break;case 3:Vl(e,6);break;default:Vl(e,2)}}function Ul(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Vl(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=fs(e.kb,e);n||(n=new Sa("//www.google.com/images/cleardot.gif"),ss.location&&"http"==ss.location.protocol||Ia(n,"https"),Aa(n)),function(e,t){const n=new Vo;if(ss.Image){const r=new Image;r.onload=ps(nl,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ps(nl,n,r,"TestLoadImage: error",!1,t),r.onabort=ps(nl,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ps(nl,n,r,"TestLoadImage: timeout",!1,t),ss.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Wo(2);e.G=0,e.l&&e.l.va(t),jl(e),Cl(e)}function jl(e){if(e.G=0,e.la=[],e.l){const t=Xa(e.h);0==t.length&&0==e.i.length||(bs(e.la,t),bs(e.la,e.i),e.h.i.length=0,vs(e.i),e.i.length=0),e.l.ua()}}function zl(e,t,n){var r=n instanceof Sa?Ta(n):new Sa(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Ca(r,r.m);else{var i=ss.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Sa(null,void 0);r&&Ia(s,r),t&&(s.g=t),i&&Ca(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&xa(r,n,t),xa(r,"VER",e.ma),Al(e,r),r}function Bl(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new cl(new rl({jb:!0})):new cl(e.ra)).Ka(e.H),t}function $l(){}function ql(){if(Rs&&!(10<=Number(qs)))throw Error("Environmental error: no available transport.")}function Hl(e,t){yo.call(this),this.g=new Sl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ks(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ks(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Gl(this)}function Kl(e){ra.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Wl(){ia.call(this),this.status=1}function Gl(e){this.g=e}(ts=cl.prototype).Ka=function(e){this.L=e},ts.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ta.g(),this.C=this.u?Zo(this.u):Zo(ta),this.g.onreadystatechange=fs(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void pl(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=ss.FormData&&e instanceof ss.FormData,!(0<=ys(fl,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vl(this),0<this.B&&((this.K=function(e){return Rs&&Bs()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=fs(this.qa,this)):this.A=Do(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){pl(this,e)}},ts.qa=function(){void 0!==is&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vo(this,"timeout"),this.abort(8))},ts.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,vo(this,"complete"),vo(this,"abort"),yl(this))},ts.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yl(this,!0)),cl.X.M.call(this)},ts.Ha=function(){this.s||(this.F||this.v||this.l?gl(this):this.fb())},ts.fb=function(){gl(this)},ts.aa=function(){try{return 2<bl(this)?this.g.status:-1}catch(e){return-1}},ts.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},ts.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ul(t)}},ts.Ea=function(){return this.m},ts.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ts=Sl.prototype).ma=8,ts.G=1,ts.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new oa(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=Xs(s),eo(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Rl(this,i,t),xa(n=Ta(this.F),"RID",e),xa(n,"CVER",22),this.D&&xa(n,"X-HTTP-Session-Id",this.D),Al(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(El(s)))+"&"+t:this.o&&kl(n,this.o,s)),Ja(this.h,i),this.Ya&&xa(n,"TYPE","init"),this.O?(xa(n,"$req",t),xa(n,"SID","null"),i.Z=!0,ha(i,n,null)):ha(i,n,t),this.G=2}}else 3==this.G&&(e?xl(this,e):0==this.i.length||Wa(this.h)||xl(this))},ts.Ia=function(){if(this.u=null,Pl(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Qo(fs(this.eb,this),e)}},ts.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Wo(10),Il(this),Pl(this))},ts.cb=function(){null!=this.v&&(this.v=null,Il(this),Ol(this),Wo(19))},ts.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Wo(2)):(this.j.info("Failed to ping google.com"),Wo(1))},(ts=$l.prototype).xa=function(){},ts.wa=function(){},ts.va=function(){},ts.ua=function(){},ts.Ra=function(){},ql.prototype.g=function(e,t){return new Hl(e,t)},ms(Hl,yo),Hl.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Wo(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=zl(e,null,e.V),Nl(e)},Hl.prototype.close=function(){Tl(this.g)},Hl.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=wo(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&Nl(t)},Hl.prototype.M=function(){this.g.l=null,delete this.j,Tl(this.g),delete this.g,Hl.X.M.call(this)},ms(Kl,ra),ms(Wl,ia),ms(Gl,$l),Gl.prototype.xa=function(){vo(this.g,"a")},Gl.prototype.wa=function(e){vo(this.g,new Kl(e))},Gl.prototype.va=function(e){vo(this.g,new Wl)},Gl.prototype.ua=function(){vo(this.g,"b")},ql.prototype.createWebChannel=ql.prototype.g,Hl.prototype.send=Hl.prototype.u,Hl.prototype.open=Hl.prototype.m,Hl.prototype.close=Hl.prototype.close,Jo.NO_ERROR=0,Jo.TIMEOUT=8,Jo.HTTP_ERROR=6,Yo.COMPLETE="complete",ea.EventType=na,na.OPEN="a",na.CLOSE="b",na.ERROR="c",na.MESSAGE="d",yo.prototype.listen=yo.prototype.N,cl.prototype.listenOnce=cl.prototype.O,cl.prototype.getLastError=cl.prototype.Oa,cl.prototype.getLastErrorCode=cl.prototype.Ea,cl.prototype.getStatus=cl.prototype.aa,cl.prototype.getResponseJson=cl.prototype.Sa,cl.prototype.getResponseText=cl.prototype.fa,cl.prototype.send=cl.prototype.da,cl.prototype.setWithCredentials=cl.prototype.Ka;var Ql=rs.createWebChannelTransport=function(){return new ql},Jl=rs.getStatEventTarget=function(){return $o()},Yl=rs.ErrorCode=Jo,Xl=rs.EventType=Yo,Zl=rs.Event=zo,eu=rs.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},tu=rs.FetchXmlHttpFactory=rl,nu=rs.WebChannel=ea,ru=rs.XhrIo=cl;const iu="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}su.UNAUTHENTICATED=new su(null),su.GOOGLE_CREDENTIALS=new su("google-credentials-uid"),su.FIRST_PARTY=new su("first-party-uid"),su.MOCK_USER=new su("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ou="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new st("@firebase/firestore");function lu(){return au.logLevel}function uu(e,...t){if(au.logLevel<=Ze.DEBUG){const n=t.map(du);au.debug(`Firestore (${ou}): ${e}`,...n)}}function cu(e,...t){if(au.logLevel<=Ze.ERROR){const n=t.map(du);au.error(`Firestore (${ou}): ${e}`,...n)}}function hu(e,...t){if(au.logLevel<=Ze.WARN){const n=t.map(du);au.warn(`Firestore (${ou}): ${e}`,...n)}}function du(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(e="Unexpected state"){const t=`FIRESTORE (${ou}) INTERNAL ASSERTION FAILED: `+e;throw cu(t),new Error(t)}function pu(e,t){e||fu()}function mu(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class yu extends Pe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(su.UNAUTHENTICATED)))}shutdown(){}}class Eu{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class ku{start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new vu;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vu,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{uu("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(uu("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vu)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(uu("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(pu("string"==typeof t.accessToken),new bu(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pu(null===e||"string"==typeof e),new su(e)}constructor(e){this.t=e,this.currentUser=su.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class _u{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=su.FIRST_PARTY,this.g=new Map}}class Su{getToken(){return Promise.resolve(new _u(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(su.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class Tu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iu{start(e,t){const n=e=>{null!=e.error&&uu("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,uu("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{uu("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):uu("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(pu("string"==typeof e.token),this.T=e.token,new Tu(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cu(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Cu(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function xu(e,t){return e<t?-1:e>t?1:0}function Au(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ru{static now(){return Ru.fromMillis(Date.now())}static fromDate(e){return Ru.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ru(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xu(this.nanoseconds,e.nanoseconds):xu(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new yu(gu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new yu(gu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new yu(gu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new yu(gu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{static fromTimestamp(e){return new Du(e)}static min(){return new Du(new Ru(0,0))}static max(){return new Du(new Ru(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{get length(){return this.len}isEqual(e){return 0===Ou.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ou?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&fu(),void 0===n?n=e.length-t:n>e.length-t&&fu(),this.segments=e,this.offset=t,this.len=n}}class Lu extends Ou{construct(e,t,n){return new Lu(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new yu(gu.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Lu(t)}static emptyPath(){return new Lu([])}}const Pu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mu extends Ou{construct(e,t,n){return new Mu(e,t,n)}static isValidIdentifier(e){return Pu.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mu.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Mu(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new yu(gu.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new yu(gu.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new yu(gu.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new yu(gu.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mu(t)}static emptyPath(){return new Mu([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{static fromPath(e){return new Fu(Lu.fromString(e))}static fromName(e){return new Fu(Lu.fromString(e).popFirst(5))}static empty(){return new Fu(Lu.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Lu.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Lu.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Fu(new Lu(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Uu.UNKNOWN_ID=-1;function Vu(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Du.fromTimestamp(1e9===r?new Ru(n+1,0):new Ru(n,r));return new zu(i,Fu.empty(),t)}function ju(e){return new zu(e.readTime,e.key,-1)}class zu{static min(){return new zu(Du.min(),Fu.empty(),-1)}static max(){return new zu(Du.max(),Fu.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function Bu(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Fu.comparator(e.documentKey,t.documentKey),0!==n?n:xu(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qu{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hu(e){if(e.code!==gu.FAILED_PRECONDITION||e.message!==$u)throw e;uu("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fu(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ku(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ku?t:Ku.resolve(t)}catch(e){return Ku.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ku.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ku.reject(t)}static resolve(e){return new Ku(((t,n)=>{t(e)}))}static reject(e){return new Ku(((t,n)=>{n(e)}))}static waitFor(e){return new Ku(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ku.resolve(!1);for(const n of e)t=t.next((e=>e?Ku.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ku(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ku(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gu{ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}}function Qu(e){return null==e}function Ju(e){return 0===e&&1/e==-1/0}function Yu(e){return"number"==typeof e&&Number.isInteger(e)&&!Ju(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gu.ct=-1;const Xu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Zu=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ec=Zu;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function nc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{insert(e,t){return new ic(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,oc.BLACK,null,null))}remove(e){return new ic(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sc(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||oc.EMPTY}}class sc{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class oc{copy(e,t,n,r,i){return new oc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return oc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return oc.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,oc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,oc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fu();if(this.right.isRed())throw fu();const e=this.left.check();if(e!==this.right.check())throw fu();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:oc.RED,this.left=null!=r?r:oc.EMPTY,this.right=null!=i?i:oc.EMPTY,this.size=this.left.size+1+this.right.size}}oc.EMPTY=null,oc.RED=!0,oc.BLACK=!1,oc.EMPTY=new class{get key(){throw fu()}get value(){throw fu()}get color(){throw fu()}get left(){throw fu()}get right(){throw fu()}copy(e,t,n,r,i){return this}insert(e,t,n){return new oc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ac{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lc(this.data.getIterator())}getIteratorFrom(e){return new lc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ac))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ac(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new ic(this.comparator)}}class lc{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uc{static empty(){return new uc([])}unionWith(e){let t=new ac(Mu.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new uc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Au(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(Mu.comparator)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hc{static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new cc("Invalid base64 string: "+e):e}}(e);return new hc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new hc(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xu(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}hc.EMPTY_BYTE_STRING=new hc("");const dc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fc(e){if(pu(!!e),"string"==typeof e){let t=0;const n=dc.exec(e);if(pu(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:pc(e.seconds),nanos:pc(e.nanos)}}function pc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function mc(e){return"string"==typeof e?hc.fromBase64String(e):hc.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function yc(e){const t=e.mapValue.fields.__previous_value__;return gc(t)?yc(t):t}function vc(e){const t=fc(e.mapValue.fields.__local_write_time__.timestampValue);return new Ru(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class wc{static empty(){return new wc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof wc&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?gc(e)?4:Mc(e)?9007199254740991:10:fu()}function _c(e,t){if(e===t)return!0;const n=kc(e);if(n!==kc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return vc(e).isEqual(vc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=fc(e.timestampValue),r=fc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return mc(e.bytesValue).isEqual(mc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return pc(e.geoPointValue.latitude)===pc(t.geoPointValue.latitude)&&pc(e.geoPointValue.longitude)===pc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return pc(e.integerValue)===pc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=pc(e.doubleValue),r=pc(t.doubleValue);return n===r?Ju(n)===Ju(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Au(e.arrayValue.values||[],t.arrayValue.values||[],_c);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(tc(n)!==tc(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!_c(n[e],r[e])))return!1;return!0}(e,t);default:return fu()}}function Sc(e,t){return void 0!==(e.values||[]).find((e=>_c(e,t)))}function Tc(e,t){if(e===t)return 0;const n=kc(e),r=kc(t);if(n!==r)return xu(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xu(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=pc(e.integerValue||e.doubleValue),r=pc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Ic(e.timestampValue,t.timestampValue);case 4:return Ic(vc(e),vc(t));case 5:return xu(e.stringValue,t.stringValue);case 6:return function(e,t){const n=mc(e),r=mc(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=xu(n[e],r[e]);if(0!==t)return t}return xu(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=xu(pc(e.latitude),pc(t.latitude));return 0!==n?n:xu(pc(e.longitude),pc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Tc(n[e],r[e]);if(t)return t}return xu(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ec.mapValue&&t===Ec.mapValue)return 0;if(e===Ec.mapValue)return 1;if(t===Ec.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=xu(r[e],s[e]);if(0!==t)return t;const o=Tc(n[r[e]],i[s[e]]);if(0!==o)return o}return xu(r.length,s.length)}(e.mapValue,t.mapValue);default:throw fu()}}function Ic(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return xu(e,t);const n=fc(e),r=fc(t),i=xu(n.seconds,r.seconds);return 0!==i?i:xu(n.nanos,r.nanos)}function Cc(e){return Nc(e)}function Nc(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=fc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?mc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Fu.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Nc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Nc(e.fields[i])}`;return n+"}"}(e.mapValue):fu()}function xc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ac(e){return!!e&&"integerValue"in e}function Rc(e){return!!e&&"arrayValue"in e}function Dc(e){return!!e&&"nullValue"in e}function Oc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Lc(e){return!!e&&"mapValue"in e}function Pc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return nc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Pc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Pc(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Mc(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fc{static empty(){return new Fc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Lc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pc(t)}setAll(e){let t=Mu.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Pc(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Lc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _c(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Lc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){nc(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Fc(Pc(this.value))}constructor(e){this.value=e}}function Uc(e){const t=[];return nc(e.fields,((e,n)=>{const r=new Mu([e]);if(Lc(n)){const e=Uc(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new uc(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Vc{static newInvalidDocument(e){return new Vc(e,0,Du.min(),Du.min(),Du.min(),Fc.empty(),0)}static newFoundDocument(e,t,n,r){return new Vc(e,1,t,Du.min(),n,r,0)}static newNoDocument(e,t){return new Vc(e,2,t,Du.min(),Du.min(),Fc.empty(),0)}static newUnknownDocument(e,t){return new Vc(e,3,t,Du.min(),Du.min(),Fc.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Du.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Du.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Vc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.position=e,this.inclusive=t}}function zc(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Fu.comparator(Fu.fromName(o.referenceValue),n.key):Tc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Bc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!_c(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t="asc"){this.field=e,this.dir=t}}function qc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{}class Kc extends Hc{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new eh(e,t,n):"array-contains"===t?new ih(e,n):"in"===t?new sh(e,n):"not-in"===t?new oh(e,n):"array-contains-any"===t?new ah(e,n):new Kc(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new th(e,n):new nh(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Tc(t,this.value)):null!==t&&kc(this.value)===kc(t)&&this.matchesComparison(Tc(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return fu()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class Wc extends Hc{static create(e,t){return new Wc(e,t)}matches(e){return Gc(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}}function Gc(e){return"and"===e.op}function Qc(e){return Jc(e)&&Gc(e)}function Jc(e){for(const t of e.filters)if(t instanceof Wc)return!1;return!0}function Yc(e){if(e instanceof Kc)return e.field.canonicalString()+e.op.toString()+Cc(e.value);if(Qc(e))return e.filters.map((e=>Yc(e))).join(",");{const t=e.filters.map((e=>Yc(e))).join(",");return`${e.op}(${t})`}}function Xc(e,t){return e instanceof Kc?function(e,t){return t instanceof Kc&&e.op===t.op&&e.field.isEqual(t.field)&&_c(e.value,t.value)}(e,t):e instanceof Wc?function(e,t){return t instanceof Wc&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Xc(n,t.filters[r])),!0)}(e,t):void fu()}function Zc(e){return e instanceof Kc?function(e){return`${e.field.canonicalString()} ${e.op} ${Cc(e.value)}`}(e):e instanceof Wc?function(e){return e.op.toString()+" {"+e.getFilters().map(Zc).join(" ,")+"}"}(e):"Filter"}class eh extends Kc{matches(e){const t=Fu.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=Fu.fromName(n.referenceValue)}}class th extends Kc{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=rh("in",t)}}class nh extends Kc{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=rh("not-in",t)}}function rh(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Fu.fromName(e.referenceValue)))}class ih extends Kc{matches(e){const t=e.data.field(this.field);return Rc(t)&&Sc(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class sh extends Kc{matches(e){const t=e.data.field(this.field);return null!==t&&Sc(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class oh extends Kc{matches(e){if(Sc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Sc(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class ah extends Kc{matches(e){const t=e.data.field(this.field);return!(!Rc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Sc(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function uh(e,t=null,n=[],r=[],i=null,s=null,o=null){return new lh(e,t,n,r,i,s,o)}function ch(e){const t=mu(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Yc(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Qu(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Cc(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Cc(e))).join(",")),t.ft=e}return t.ft}function hh(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!qc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Xc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Bc(e.startAt,t.startAt)&&Bc(e.endAt,t.endAt)}function dh(e){return Fu.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function ph(e,t,n,r,i,s,o,a){return new fh(e,t,n,r,i,s,o,a)}function mh(e){return new fh(e)}function gh(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function yh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function vh(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function bh(e){return null!==e.collectionGroup}function wh(e){const t=mu(e);if(null===t.dt){t.dt=[];const e=vh(t),n=yh(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new $c(e)),t.dt.push(new $c(Mu.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new $c(Mu.keyField(),e))}}}return t.dt}function Eh(e){const t=mu(e);if(!t.wt)if("F"===t.limitType)t.wt=uh(t.path,t.collectionGroup,wh(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of wh(t)){const t="desc"===n.dir?"asc":"desc";e.push(new $c(n.field,t))}const n=t.endAt?new jc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jc(t.startAt.position,t.startAt.inclusive):null;t.wt=uh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function kh(e,t){t.getFirstInequalityField(),vh(e);const n=e.filters.concat([t]);return new fh(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function _h(e,t,n){return new fh(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Sh(e,t){return hh(Eh(e),Eh(t))&&e.limitType===t.limitType}function Th(e){return`${ch(Eh(e))}|lt:${e.limitType}`}function Ih(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Zc(e))).join(", ")}]`),Qu(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Cc(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Cc(e))).join(",")),`Target(${t})`}(Eh(e))}; limitType=${e.limitType})`}function Ch(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Fu.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of wh(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=zc(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,wh(e),t))&&!(e.endAt&&!function(e,t,n){const r=zc(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,wh(e),t))}(e,t)}function Nh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function xh(e){return(t,n)=>{let r=!1;for(const i of wh(e)){const e=Ah(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ah(e,t,n){const r=e.field.isKeyField()?Fu.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Tc(r,i):fu()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return fu()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){nc(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return rc(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new ic(Fu.comparator);function Oh(){return Dh}const Lh=new ic(Fu.comparator);function Ph(...e){let t=Lh;for(const n of e)t=t.insert(n.key,n);return t}function Mh(e){let t=Lh;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Fh(){return Vh()}function Uh(){return Vh()}function Vh(){return new Rh((e=>e.toString()),((e,t)=>e.isEqual(t)))}const jh=new ic(Fu.comparator),zh=new ac(Fu.comparator);function Bh(...e){let t=zh;for(const n of e)t=t.add(n);return t}const $h=new ac(xu);function qh(){return $h}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ju(t)?"-0":t}}function Kh(e){return{integerValue:""+e}}function Wh(e,t){return Yu(t)?Kh(t):Hh(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this._=void 0}}function Qh(e,t,n){return e instanceof Xh?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Zh?ed(e,t):e instanceof td?nd(e,t):function(e,t){const n=Yh(e,t),r=id(n)+id(e._t);return Ac(n)&&Ac(e._t)?Kh(r):Hh(e.serializer,r)}(e,t)}function Jh(e,t,n){return e instanceof Zh?ed(e,t):e instanceof td?nd(e,t):n}function Yh(e,t){var n;return e instanceof rd?Ac(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class Xh extends Gh{}class Zh extends Gh{constructor(e){super(),this.elements=e}}function ed(e,t){const n=sd(t);for(const t of e.elements)n.some((e=>_c(e,t)))||n.push(t);return{arrayValue:{values:n}}}class td extends Gh{constructor(e){super(),this.elements=e}}function nd(e,t){let n=sd(t);for(const t of e.elements)n=n.filter((e=>!_c(e,t)));return{arrayValue:{values:n}}}class rd extends Gh{constructor(e,t){super(),this.serializer=e,this._t=t}}function id(e){return pc(e.integerValue||e.doubleValue)}function sd(e){return Rc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t){this.version=e,this.transformResults=t}}class ad{static none(){return new ad}static exists(e){return new ad(void 0,e)}static updateTime(e){return new ad(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function ld(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ud{}function cd(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new wd(e.key,ad.none()):new md(e.key,e.data,ad.none());{const n=e.data,r=Fc.empty();let i=new ac(Mu.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new gd(e.key,r,new uc(i.toArray()),ad.none())}}function hd(e,t,n){e instanceof md?function(e,t,n){const r=e.value.clone(),i=vd(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof gd?function(e,t,n){if(!ld(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=vd(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(yd(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function dd(e,t,n,r){return e instanceof md?function(e,t,n,r){if(!ld(e.precondition,t))return n;const i=e.value.clone(),s=bd(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof gd?function(e,t,n,r){if(!ld(e.precondition,t))return n;const i=bd(e.fieldTransforms,r,t),s=t.data;return s.setAll(yd(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return ld(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function fd(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Yh(r.transform,e||null);null!=i&&(null===n&&(n=Fc.empty()),n.set(r.field,i))}return n||null}function pd(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Au(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Zh&&t instanceof Zh||e instanceof td&&t instanceof td?Au(e.elements,t.elements,_c):e instanceof rd&&t instanceof rd?_c(e._t,t._t):e instanceof Xh&&t instanceof Xh}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class md extends ud{getFieldMask(){return null}constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class gd extends ud{getFieldMask(){return this.fieldMask}constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function yd(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function vd(e,t,n){const r=new Map;pu(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Jh(o,a,n[i]))}return r}function bd(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Qh(e,s,t))}return r}class wd extends ud{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Ed extends ud{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&hd(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=dd(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=dd(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Uh();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=cd(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Du.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Bh())}isEqual(e){return this.batchId===e.batchId&&Au(this.mutations,e.mutations,((e,t)=>pd(e,t)))&&Au(this.baseMutations,e.baseMutations,((e,t)=>pd(e,t)))}constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}}class _d{static from(e,t,n){pu(e.mutations.length===n.length);let r=jh;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new _d(e,t,n,r)}constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Td{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Id,Cd;function Nd(e){switch(e){default:return fu();case gu.CANCELLED:case gu.UNKNOWN:case gu.DEADLINE_EXCEEDED:case gu.RESOURCE_EXHAUSTED:case gu.INTERNAL:case gu.UNAVAILABLE:case gu.UNAUTHENTICATED:return!1;case gu.INVALID_ARGUMENT:case gu.NOT_FOUND:case gu.ALREADY_EXISTS:case gu.PERMISSION_DENIED:case gu.FAILED_PRECONDITION:case gu.ABORTED:case gu.OUT_OF_RANGE:case gu.UNIMPLEMENTED:case gu.DATA_LOSS:return!0}}function xd(e){if(void 0===e)return cu("GRPC error has no .code"),gu.UNKNOWN;switch(e){case Id.OK:return gu.OK;case Id.CANCELLED:return gu.CANCELLED;case Id.UNKNOWN:return gu.UNKNOWN;case Id.DEADLINE_EXCEEDED:return gu.DEADLINE_EXCEEDED;case Id.RESOURCE_EXHAUSTED:return gu.RESOURCE_EXHAUSTED;case Id.INTERNAL:return gu.INTERNAL;case Id.UNAVAILABLE:return gu.UNAVAILABLE;case Id.UNAUTHENTICATED:return gu.UNAUTHENTICATED;case Id.INVALID_ARGUMENT:return gu.INVALID_ARGUMENT;case Id.NOT_FOUND:return gu.NOT_FOUND;case Id.ALREADY_EXISTS:return gu.ALREADY_EXISTS;case Id.PERMISSION_DENIED:return gu.PERMISSION_DENIED;case Id.FAILED_PRECONDITION:return gu.FAILED_PRECONDITION;case Id.ABORTED:return gu.ABORTED;case Id.OUT_OF_RANGE:return gu.OUT_OF_RANGE;case Id.UNIMPLEMENTED:return gu.UNIMPLEMENTED;case Id.DATA_LOSS:return gu.DATA_LOSS;default:return fu()}}(Cd=Id||(Id={}))[Cd.OK=0]="OK",Cd[Cd.CANCELLED=1]="CANCELLED",Cd[Cd.UNKNOWN=2]="UNKNOWN",Cd[Cd.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Cd[Cd.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Cd[Cd.NOT_FOUND=5]="NOT_FOUND",Cd[Cd.ALREADY_EXISTS=6]="ALREADY_EXISTS",Cd[Cd.PERMISSION_DENIED=7]="PERMISSION_DENIED",Cd[Cd.UNAUTHENTICATED=16]="UNAUTHENTICATED",Cd[Cd.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Cd[Cd.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Cd[Cd.ABORTED=10]="ABORTED",Cd[Cd.OUT_OF_RANGE=11]="OUT_OF_RANGE",Cd[Cd.UNIMPLEMENTED=12]="UNIMPLEMENTED",Cd[Cd.INTERNAL=13]="INTERNAL",Cd[Cd.UNAVAILABLE=14]="UNAVAILABLE",Cd[Cd.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ad{static get instance(){return Rd}static getOrCreateInstance(){return null===Rd&&(Rd=new Ad),Rd}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let Rd=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Od.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Dd(Du.min(),r,qh(),Oh(),Bh())}constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class Od{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Od(n,t,Bh(),Bh(),Bh())}constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Pd{constructor(e,t){this.targetId=e,this.Et=t}}class Md{constructor(e,t,n=hc.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Fd{get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=Bh(),t=Bh(),n=Bh();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:fu()}})),new Od(this.vt,this.bt,e,t,n)}xt(){this.Pt=!1,this.Rt=jd()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}constructor(){this.At=0,this.Rt=jd(),this.vt=hc.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}}class Ud{Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,(t=>{const n=this.jt(t);switch(e.state){case 0:this.Wt(t)&&n.Dt(e.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(n.Mt(),n.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:fu()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.Wt(n)&&t(n)}))}Jt(e){var t;const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(dh(s))if(0===r){const e=new Fu(s.path);this.Qt(n,e,Vc.newNoDocument(e,Du.min()))}else pu(1===r);else{const i=this.Zt(n);i!==r&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=Ad.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&dh(i.target)){const t=new Fu(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,Vc.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=Bh();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new Dd(e,t,this.Ut,this.Lt,n);return this.Lt=Oh(),this.qt=Vd(),this.Ut=new ac(xu),r}Gt(e,t){if(!this.Wt(e))return;const n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Fd,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new ac(xu),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=null!==this.Yt(e);return t||uu("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Fd),this.Ft.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Oh(),this.qt=Vd(),this.Ut=new ac(xu)}}function Vd(){return new ic(Fu.comparator)}function jd(){return new ic(Fu.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd={asc:"ASCENDING",desc:"DESCENDING"},Bd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$d={and:"AND",or:"OR"};class qd{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hd(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Kd(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Wd(e,t){return Hd(e,t.toTimestamp())}function Gd(e){return pu(!!e),Du.fromTimestamp(function(e){const t=fc(e);return new Ru(t.seconds,t.nanos)}(e))}function Qd(e,t){return function(e){return new Lu(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Jd(e){const t=Lu.fromString(e);return pu(yf(t)),t}function Yd(e,t){return Qd(e.databaseId,t.path)}function Xd(e,t){const n=Jd(t);if(n.get(1)!==e.databaseId.projectId)throw new yu(gu.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new yu(gu.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Fu(nf(n))}function Zd(e,t){return Qd(e.databaseId,t)}function ef(e){const t=Jd(e);return 4===t.length?Lu.emptyPath():nf(t)}function tf(e){return new Lu(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nf(e){return pu(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function rf(e,t,n){return{name:Yd(e,t),fields:n.value.mapValue.fields}}function sf(e,t){let n;if(t instanceof md)n={update:rf(e,t.key,t.value)};else if(t instanceof wd)n={delete:Yd(e,t.key)};else if(t instanceof gd)n={update:rf(e,t.key,t.data),updateMask:gf(t.fieldMask)};else{if(!(t instanceof Ed))return fu();n={verify:Yd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Xh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Zh)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof td)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof rd)return{fieldPath:t.field.canonicalString(),increment:n._t};throw fu()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Wd(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:fu()}(e,t.precondition)),n}function of(e,t){return{documents:[Zd(e,t.path)]}}function af(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Zd(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Zd(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return mf(Wc.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:ff(e.field),direction:cf(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.useProto3Json||Qu(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function lf(e){let t=ef(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pu(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=uf(e);return t instanceof Wc&&Qc(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new $c(pf(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Qu(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new jc(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new jc(n,t)}(n.endAt)),ph(t,i,o,s,a,"F",l,u)}function uf(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=pf(e.unaryFilter.field);return Kc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=pf(e.unaryFilter.field);return Kc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=pf(e.unaryFilter.field);return Kc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=pf(e.unaryFilter.field);return Kc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return fu()}}(e):void 0!==e.fieldFilter?function(e){return Kc.create(pf(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fu()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Wc.create(e.compositeFilter.filters.map((e=>uf(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return fu()}}(e.compositeFilter.op))}(e):fu()}function cf(e){return zd[e]}function hf(e){return Bd[e]}function df(e){return $d[e]}function ff(e){return{fieldPath:e.canonicalString()}}function pf(e){return Mu.fromServerFormat(e.fieldPath)}function mf(e){return e instanceof Kc?function(e){if("=="===e.op){if(Oc(e.value))return{unaryFilter:{field:ff(e.field),op:"IS_NAN"}};if(Dc(e.value))return{unaryFilter:{field:ff(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Oc(e.value))return{unaryFilter:{field:ff(e.field),op:"IS_NOT_NAN"}};if(Dc(e.value))return{unaryFilter:{field:ff(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ff(e.field),op:hf(e.op),value:e.value}}}(e):e instanceof Wc?function(e){const t=e.getFilters().map((e=>mf(e)));return 1===t.length?t[0]:{compositeFilter:{op:df(e.op),filters:t}}}(e):fu()}function gf(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function yf(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{withSequenceNumber(e){return new vf(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new vf(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vf(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}constructor(e,t,n,r,i=Du.min(),s=Du.min(),o=hc.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this.se=e}}function wf(e){const t=lf({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?_h(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(pc(e.integerValue));else if("doubleValue"in e){const n=pc(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),Ju(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(mc(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?Mc(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):fu()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const e of Object.keys(n))this.fe(e,t),this.ue(n[e],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const e of n)this.ue(e,t)}_e(e,t){this.ae(t,37),Fu.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}constructor(){}}Ef.pe=new Ef;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kf{addToCollectionParentIndex(e,t){return this.He.add(t),Ku.resolve()}getCollectionParents(e,t){return Ku.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return Ku.resolve()}deleteFieldIndex(e,t){return Ku.resolve()}getDocumentsMatchingTarget(e,t){return Ku.resolve(null)}getIndexType(e,t){return Ku.resolve(0)}getFieldIndexes(e,t){return Ku.resolve([])}getNextCollectionGroupToUpdate(e){return Ku.resolve(null)}getMinOffset(e,t){return Ku.resolve(zu.min())}getMinOffsetFromCollectionGroup(e,t){return Ku.resolve(zu.min())}updateCollectionGroup(e,t,n){return Ku.resolve()}updateIndexEntries(e,t){return Ku.resolve()}constructor(){this.He=new _f}}class _f{add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ac(Lu.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ac(Lu.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Sf{static withCacheSize(e){return new Sf(e,Sf.DEFAULT_COLLECTION_PERCENTILE,Sf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sf.DEFAULT_COLLECTION_PERCENTILE=10,Sf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sf.DEFAULT=new Sf(41943040,Sf.DEFAULT_COLLECTION_PERCENTILE,Sf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sf.DISABLED=new Sf(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tf{next(){return this.Rn+=2,this.Rn}static vn(){return new Tf(0)}static bn(){return new Tf(-1)}constructor(e){this.Rn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class If{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Vc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ku.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new Rh((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&dd(n.mutation,e,uc.empty(),Ru.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Bh()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Bh()){const r=Fh();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ph();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Fh();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Bh())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Oh();const s=Vh(),o=Vh();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof gd)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),dd(o.mutation,t,o.mutation.getFieldMask(),Ru.now())):s.set(t.key,uc.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Cf(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Vh();let r=new ic(((e,t)=>e-t)),i=Bh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||uc.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Bh()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,u=Uh();l.forEach((e=>{if(!i.has(e)){const r=cd(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ku.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Fu.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ku.resolve(Fh());let o=-1,a=i;return s.next((t=>Ku.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ku.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Bh()))).next((e=>({batchId:o,changes:Mh(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Fu(t)).next((e=>{let t=Ph();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Ph();return this.indexManager.getCollectionParents(e,r).next((s=>Ku.forEach(s,(s=>{const o=function(e,t){return new fh(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Vc.newInvalidDocument(r)))}));let n=Ph();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&dd(s.mutation,i,uc.empty(),Ru.now()),Ch(t,i)&&(n=n.insert(e,i))})),n}))}constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{getBundleMetadata(e,t){return Ku.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:Gd(n.createTime)}),Ku.resolve()}getNamedQuery(e,t){return Ku.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:wf(e.bundledQuery),readTime:Gd(e.readTime)}}(t)),Ku.resolve()}constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{getOverlay(e,t){return Ku.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Fh();return Ku.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.re(e,t,r)})),Ku.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ts.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),Ku.resolve()}getOverlaysForCollection(e,t,n){const r=Fh(),i=t.length+1,s=new Fu(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ku.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ic(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Fh(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Fh(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return Ku.resolve(o)}re(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Sd(t,n));let i=this.ts.get(t);void 0===i&&(i=Bh(),this.ts.set(t,i)),this.ts.set(t,i.add(n.key))}constructor(){this.overlays=new ic(Fu.comparator),this.ts=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{isEmpty(){return this.es.isEmpty()}addReference(e,t){const n=new Df(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new Df(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new Fu(new Lu([])),n=new Df(t,e),r=new Df(t,e+1),i=[];return this.ss.forEachInRange([n,r],(e=>{this.us(e),i.push(e.key)})),i}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new Fu(new Lu([])),n=new Df(t,e),r=new Df(t,e+1);let i=Bh();return this.ss.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Df(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.es=new ac(Df.ns),this.ss=new ac(Df.rs)}}class Df{static ns(e,t){return Fu.comparator(e.key,t.key)||xu(e.ds,t.ds)}static rs(e,t){return xu(e.ds,t.ds)||Fu.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.ds=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{checkEmpty(e){return Ku.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new kd(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this._s=this._s.add(new Df(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Ku.resolve(s)}lookupMutationBatch(e,t){return Ku.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ys(n),i=r<0?0:r;return Ku.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ku.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Ku.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Df(t,0),r=new Df(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,r],(e=>{const t=this.gs(e.ds);i.push(t)})),Ku.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ac(xu);return t.forEach((e=>{const t=new Df(e,0),r=new Df(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,r],(e=>{n=n.add(e.ds)}))})),Ku.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Fu.isDocumentKey(i)||(i=i.child(""));const s=new Df(new Fu(i),0);let o=new ac(xu);return this._s.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ds)),!0)}),s),Ku.resolve(this.ps(o))}ps(e){const t=[];return e.forEach((e=>{const n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){pu(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return Ku.forEach(t.mutations,(r=>{const i=new Df(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){const n=new Df(t,0),r=this._s.firstAfterOrEqual(n);return Ku.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ku.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new ac(Df.ns)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ku.resolve(n?n.document.mutableCopy():Vc.newInvalidDocument(t))}getEntries(e,t){let n=Oh();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Vc.newInvalidDocument(e))})),Ku.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Oh();const s=t.path,o=new Fu(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Bu(ju(o),n)<=0||(r.has(o.key)||Ch(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ku.resolve(i)}getAllFromCollectionGroup(e,t,n,r){fu()}Es(e,t){return Ku.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Pf(this)}getSize(e){return Ku.resolve(this.size)}constructor(e){this.Ts=e,this.docs=new ic(Fu.comparator),this.size=0}}class Pf extends If{applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(n)})),Ku.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}constructor(e){super(),this.Jn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),Ku.resolve()}getLastRemoteSnapshotVersion(e){return Ku.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ku.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),Ku.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),Ku.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Tf(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,Ku.resolve()}updateTargetData(e,t){return this.Sn(t),Ku.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,Ku.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.As.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ku.waitFor(i).next((()=>r))}getTargetCount(e){return Ku.resolve(this.targetCount)}getTargetData(e,t){const n=this.As.get(t)||null;return Ku.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),Ku.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ku.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),Ku.resolve()}getMatchingKeysForTargetId(e,t){const n=this.vs.fs(t);return Ku.resolve(n)}containsKey(e,t){return Ku.resolve(this.vs.containsKey(t))}constructor(e){this.persistence=e,this.As=new Rh((e=>ch(e)),hh),this.lastRemoteSnapshotVersion=Du.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Rf,this.targetCount=0,this.bs=Tf.vn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Af,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new Of(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){uu("MemoryPersistence","Starting transaction:",e);const r=new Uf(this.Vs.next());return this.referenceDelegate.Ns(),n(r).next((e=>this.referenceDelegate.ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Os(e,t){return Ku.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Gu(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Mf(this),this.indexManager=new kf,this.remoteDocumentCache=function(e){return new Lf(e)}((e=>this.referenceDelegate.Cs(e))),this.serializer=new bf(t),this.xs=new xf(this.serializer)}}class Uf extends qu{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{static Fs(e){return new Vf(e)}get Bs(){if(this.Ms)return this.Ms;throw fu()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),Ku.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),Ku.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),Ku.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ku.forEach(this.Bs,(n=>{const r=Fu.fromPath(n);return this.Ls(e,r).next((e=>{e||t.removeEntry(r,Du.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return Ku.or([()=>Ku.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}constructor(e){this.persistence=e,this.$s=new Rf,this.Ms=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jf{static Di(e,t){let n=Bh(),r=Bh();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new jf(e,t.fromCache,n,r)}constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ni(e,t).next((i=>i||this.ki(e,t,r,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if(gh(t))return Ku.resolve(null);let n=Eh(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=_h(t,null,"F"),n=Eh(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Bh(...r);return this.xi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.$i(t,r);return this.Mi(t,s,i,n.readTime)?this.Ni(e,_h(t,null,"F")):this.Fi(e,s,t,n)}))))})))))}ki(e,t,n,r){return gh(t)||r.isEqual(Du.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((i=>{const s=this.$i(t,i);return this.Mi(t,s,n,r)?this.Oi(e,t):(lu()<=Ze.DEBUG&&uu("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ih(t)),this.Fi(e,s,t,Vu(r,-1)))}))}$i(e,t){let n=new ac(xh(e));return t.forEach(((t,r)=>{Ch(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return lu()<=Ze.DEBUG&&uu("QueryEngine","Using full collection scan to execute query:",Ih(t)),this.xi.getDocumentsMatchingQuery(e,t,zu.min())}Fi(e,t,n,r){return this.xi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.Ci=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Nf(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}constructor(e,t,n,r){this.persistence=e,this.Bi=t,this.serializer=r,this.Li=new ic(xu),this.qi=new Rh((e=>ch(e)),hh),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}}function $f(e,t,n,r){return new Bf(e,t,n,r)}async function qf(e,t){const n=mu(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Gi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Bh();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Qi:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Hf(e){const t=mu(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function Kf(e,t,n){let r=Bh(),i=Bh();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Oh();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Du.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):uu("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{zi:r,ji:i}}))}function Wf(e,t){const n=mu(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Gf(e,t){const n=mu(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ds.getTargetData(e,t).next((i=>i?(r=i,Ku.resolve(r)):n.Ds.allocateTargetId(e).next((i=>(r=new vf(t,i,0,e.currentSequenceNumber),n.Ds.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Li.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function Qf(e,t,n){const r=mu(e),i=r.Li.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Wu(e))throw e;uu("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Li=r.Li.remove(t),r.qi.delete(i.target)}function Jf(e,t,n){const r=mu(e);let i=Du.min(),s=Bh();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=mu(e),i=r.qi.get(n);return void 0!==i?Ku.resolve(r.Li.get(i)):r.Ds.getTargetData(t,n)}(r,e,Eh(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Bi.getDocumentsMatchingQuery(e,t,n?i:Du.min(),n?s:Bh()))).next((e=>(Yf(r,Nh(t),e),{documents:e,Wi:s})))))}function Yf(e,t,n){let r=e.Ui.get(t)||Du.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ui.set(t,r)}class Xf{tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=qh()}}class Zf{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Xf,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Br=new Xf,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){uu("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){uu("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np=null;function rp(){return null===np?np=268435456+Math.round(2147483648*Math.random()):np++,"0x"+np.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ip={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="WebChannelConnection";class ap extends class{get uo(){return!1}co(e,t,n,r,i){const s=rp(),o=this.ao(e,t);uu("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.ho(a,r,i),this.lo(e,o,a,n).then((t=>(uu("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw hu("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}fo(e,t,n,r,i,s){return this.co(e,t,n,r,i)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ou,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=ip[e];return`${this.ro}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{lo(e,t,n,r){const i=rp();return new Promise(((s,o)=>{const a=new ru;a.setWithCredentials(!0),a.listenOnce(Xl.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Yl.NO_ERROR:const t=a.getResponseJson();uu(op,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Yl.TIMEOUT:uu(op,`RPC '${e}' ${i} timed out`),o(new yu(gu.DEADLINE_EXCEEDED,"Request time out"));break;case Yl.HTTP_ERROR:const n=a.getStatus();if(uu(op,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(gu).indexOf(t)>=0?t:gu.UNKNOWN}(t.status);o(new yu(e,t.message))}else o(new yu(gu.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new yu(gu.UNAVAILABLE,"Connection failed."));break;default:fu()}}finally{uu(op,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);uu(op,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)}))}wo(e,t,n){const r=rp(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Ql(),o=Jl(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new tu({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=i.join("");uu(op,`Creating RPC '${e}' stream ${r}: ${l}`,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new sp({Wr:t=>{h?uu(op,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(c||(uu(op,`Opening RPC '${e}' stream ${r} transport.`),u.open(),c=!0),uu(op,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Hr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,nu.EventType.OPEN,(()=>{h||uu(op,`RPC '${e}' stream ${r} transport opened.`)})),f(u,nu.EventType.CLOSE,(()=>{h||(h=!0,uu(op,`RPC '${e}' stream ${r} transport closed`),d.so())})),f(u,nu.EventType.ERROR,(t=>{h||(h=!0,hu(op,`RPC '${e}' stream ${r} transport errored:`,t),d.so(new yu(gu.UNAVAILABLE,"The operation could not be completed")))})),f(u,nu.EventType.MESSAGE,(t=>{var n;if(!h){const i=t.data[0];pu(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){uu(op,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Id[e];if(void 0!==t)return xd(t)}(t),i=o.message;void 0===n&&(n=gu.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),h=!0,d.so(new yu(n,i)),u.close()}else uu(op,`RPC '${e}' stream ${r} received:`,i),d.io(i)}})),f(o,Zl.STAT_EVENT,(t=>{t.stat===eu.PROXY?uu(op,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===eu.NOPROXY&&uu(op,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(e){return new qd(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&uu("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===gu.RESOURCE_EXHAUSTED?(cu(t.toString()),cu("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===gu.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{const e=new yu(gu.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return uu("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(uu("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,r,i,s,o,a){this.Ws=e,this.bo=n,this.Po=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new cp(e,t)}}class dp extends hp{Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:fu()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(pu(void 0===t||"string"==typeof t),hc.fromBase64String(t||"")):(pu(void 0===t||t instanceof Uint8Array),hc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?gu.UNKNOWN:xd(e.code);return new yu(t,e.message||"")}(o);n=new Md(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xd(e,r.document.name),s=Gd(r.document.updateTime),o=r.document.createTime?Gd(r.document.createTime):Du.min(),a=new Fc({mapValue:{fields:r.document.fields}}),l=Vc.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ld(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Xd(e,r.document),s=r.readTime?Gd(r.readTime):Du.min(),o=Vc.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ld([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Xd(e,r.document),s=r.removedTargetIds||[];n=new Ld([],s,i,null)}else{if(!("filter"in t))return fu();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Td(r),s=e.targetId;n=new Pd(s,i)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Du.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Du.min():t.readTime?Gd(t.readTime):Du.min()}(e);return this.listener.zo(t,n)}jo(e){const t={};t.database=tf(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;return n=dh(r)?{documents:of(e,r)}:{query:af(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Kd(e,t.resumeToken):t.snapshotVersion.compareTo(Du.min())>0&&(n.readTime=Hd(e,t.snapshotVersion.toTimestamp())),n}(this.serializer,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return fu()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=tf(this.serializer),t.removeTarget=e,this.Fo(t)}constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}}class fp extends hp{get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(pu(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=function(e,t){return e&&e.length>0?(pu(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Gd(e.updateTime):Gd(t);return n.isEqual(Du.min())&&(n=Gd(t)),new od(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Gd(e.commitTime);return this.listener.Zo(n,t)}return pu(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=tf(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>sf(this.serializer,e)))};this.Fo(t)}constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.Ho=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp extends class{}{nu(){if(this.eu)throw new yu(gu.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.co(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===gu.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new yu(gu.UNKNOWN,e.toString())}))}fo(e,t,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.fo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===gu.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new yu(gu.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.eu=!1}}class mp{ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(cu(t),this.ru=!1):uu("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((e=>{n.enqueueAndForget((async()=>{Tp(this)&&(uu("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=mu(e);t.du.add(4),await vp(t),t.mu.set("Unknown"),t.du.delete(4),await yp(t)}(this))}))})),this.mu=new mp(n,r)}}async function yp(e){if(Tp(e))for(const t of e.wu)await t(!0)}async function vp(e){for(const t of e.wu)await t(!1)}function bp(e,t){const n=mu(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Sp(n)?_p(n):$p(n).No()&&Ep(n,t))}function wp(e,t){const n=mu(e),r=$p(n);n.fu.delete(t),r.No()&&kp(n,t),0===n.fu.size&&(r.No()?r.$o():Tp(n)&&n.mu.set("Unknown"))}function Ep(e,t){e.gu.Ot(t.targetId),$p(e).jo(t)}function kp(e,t){e.gu.Ot(t),$p(e).Wo(t)}function _p(e){e.gu=new Ud({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),$p(e).start(),e.mu.ou()}function Sp(e){return Tp(e)&&!$p(e).xo()&&e.fu.size>0}function Tp(e){return 0===mu(e).du.size}function Ip(e){e.gu=void 0}async function Cp(e){e.fu.forEach(((t,n)=>{Ep(e,t)}))}async function Np(e,t){Ip(e),Sp(e)?(e.mu.au(t),_p(e)):e.mu.set("Unknown")}async function xp(e,t,n){if(e.mu.set("Online"),t instanceof Md&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.fu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.fu.delete(r),e.gu.removeTarget(r))}(e,t)}catch(n){uu("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ap(e,n)}else if(t instanceof Ld?e.gu.Kt(t):t instanceof Pd?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(Du.min()))try{const t=await Hf(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.gu.Xt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.fu.get(r);i&&e.fu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.fu.get(t);if(!n)return;e.fu.set(t,n.withResumeToken(hc.EMPTY_BYTE_STRING,n.snapshotVersion)),kp(e,t);const r=new vf(n.target,t,1,n.sequenceNumber);Ep(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){uu("RemoteStore","Failed to raise snapshot:",t),await Ap(e,t)}}async function Ap(e,t,n){if(!Wu(t))throw t;e.du.add(1),await vp(e),e.mu.set("Offline"),n||(n=()=>Hf(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{uu("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await yp(e)}))}function Rp(e,t){return t().catch((n=>Ap(e,n,t)))}async function Dp(e){const t=mu(e),n=qp(t);let r=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Op(t);)try{const e=await Wf(t.localStore,r);if(null===e){0===t.lu.length&&n.$o();break}r=e.batchId,Lp(t,e)}catch(e){await Ap(t,e)}Pp(t)&&Mp(t)}function Op(e){return Tp(e)&&e.lu.length<10}function Lp(e,t){e.lu.push(t);const n=qp(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function Pp(e){return Tp(e)&&!qp(e).xo()&&e.lu.length>0}function Mp(e){qp(e).start()}async function Fp(e){qp(e).tu()}async function Up(e){const t=qp(e);for(const n of e.lu)t.Yo(n.mutations)}async function Vp(e,t,n){const r=e.lu.shift(),i=_d.from(r,t,n);await Rp(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Dp(e)}async function jp(e,t){t&&qp(e).Jo&&await async function(e,t){if(Nd(n=t.code)&&n!==gu.ABORTED){const n=e.lu.shift();qp(e).Oo(),await Rp(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Dp(e)}var n}(e,t),Pp(e)&&Mp(e)}async function zp(e,t){const n=mu(e);n.asyncQueue.verifyOperationInProgress(),uu("RemoteStore","RemoteStore received new credentials");const r=Tp(n);n.du.add(3),await vp(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await yp(n)}async function Bp(e,t){const n=mu(e);t?(n.du.delete(2),await yp(n)):t||(n.du.add(2),await vp(n),n.mu.set("Unknown"))}function $p(e){return e.yu||(e.yu=function(e,t,n){const r=mu(e);return r.nu(),new dp(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Jr:Cp.bind(null,e),Zr:Np.bind(null,e),zo:xp.bind(null,e)}),e.wu.push((async t=>{t?(e.yu.Oo(),Sp(e)?_p(e):e.mu.set("Unknown")):(await e.yu.stop(),Ip(e))}))),e.yu}function qp(e){return e.pu||(e.pu=function(e,t,n){const r=mu(e);return r.nu(),new fp(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Jr:Fp.bind(null,e),Zr:jp.bind(null,e),Xo:Up.bind(null,e),Zo:Vp.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),await Dp(e)):(await e.pu.stop(),e.lu.length>0&&(uu("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Hp{static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Hp(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new yu(gu.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new vu,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function Kp(e,t){if(cu("AsyncQueue",`${t}: ${e}`),Wu(e))return new yu(gu.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{static emptySet(e){return new Wp(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wp))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Wp;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Fu.comparator(t.key,n.key):(e,t)=>Fu.comparator(e.key,t.key),this.keyedMap=Ph(),this.sortedSet=new ic(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{track(e){const t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):fu():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Iu=new ic(Fu.comparator)}}class Qp{static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Qp(e,t,Wp.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.Eu=void 0,this.listeners=[]}}class Yp{constructor(){this.queries=new Rh((e=>Th(e)),Sh),this.onlineState="Unknown",this.Au=new Set}}async function Xp(e,t){const n=mu(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Jp),i)try{s.Eu=await n.onListen(r)}catch(e){const n=Kp(e,`Initialization of query '${Ih(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Ru(n.onlineState),s.Eu&&t.vu(s.Eu)&&nm(n)}async function Zp(e,t){const n=mu(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function em(e,t){const n=mu(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.vu(e)&&(r=!0);i.Eu=e}}r&&nm(n)}function tm(e,t,n){const r=mu(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function nm(e){e.Au.forEach((e=>{e.next()}))}class rm{vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Qp(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.xu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=Qp.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}constructor(e,t,n){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class im{constructor(e){this.key=e}}class sm{constructor(e){this.key=e}}class om{get Qu(){return this.Lu}zu(e,t){const n=t?t.ju:new Gp,r=t?t.Gu:this.Gu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Ch(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Wu(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Ku(c,a)>0||l&&this.Ku(c,l)<0)&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Gu:s,ju:n,Mi:o,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fu()}};return n(e)-n(t)}(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const s=t?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new Qp(this.query,e.Gu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Gp,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=Bh(),this.Gu.forEach((e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))}));const t=[];return e.forEach((e=>{this.Uu.has(e)||t.push(new sm(e))})),this.Uu.forEach((n=>{e.has(n)||t.push(new im(n))})),t}Xu(e){this.Lu=e.Wi,this.Uu=Bh();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return Qp.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=Bh(),this.mutatedKeys=Bh(),this.Ku=xh(e),this.Gu=new Wp(this.Ku)}}class am{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class lm{constructor(e){this.key=e,this.ec=!1}}class um{get isPrimaryClient(){return!0===this.fc}constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Rh((e=>Th(e)),Sh),this.ic=new Map,this.rc=new Set,this.oc=new ic(Fu.comparator),this.uc=new Map,this.cc=new Rf,this.ac={},this.hc=new Map,this.lc=Tf.bn(),this.onlineState="Unknown",this.fc=void 0}}async function cm(e,t){const n=Nm(e);let r,i;const s=n.sc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const e=await Gf(n.localStore,Eh(t));n.isPrimaryClient&&bp(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await hm(n,t,r,"current"===s,e.resumeToken)}return i}async function hm(e,t,n,r,i){e.dc=(t,n,r)=>async function(e,t,n,r){let i=t.view.zu(n);i.Mi&&(i=await Jf(e.localStore,t.query,!1).then((({documents:e})=>t.view.zu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return km(e,t.targetId,o.Yu),o.snapshot}(e,t,n,r);const s=await Jf(e.localStore,t,!0),o=new om(t,s.Wi),a=o.zu(s.documents),l=Od.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);km(e,n,u.Yu);const c=new am(t,n,o);return e.sc.set(t,c),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function dm(e,t){const n=mu(e),r=n.sc.get(t),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter((e=>!Sh(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Qf(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),wp(n.remoteStore,r.targetId),wm(n,r.targetId)})).catch(Hu)):(wm(n,r.targetId),await Qf(n.localStore,r.targetId,!0))}async function fm(e,t){const n=mu(e);try{const e=await function(e,t){const n=mu(e),r=t.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const o=[];t.targetChanges.forEach(((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.Ds.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(e,s.addedDocuments,a))));let u=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(hc.EMPTY_BYTE_STRING,Du.min()).withLastLimboFreeSnapshotVersion(Du.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,u,s)&&o.push(n.Ds.updateTargetData(e,u))}));let a=Oh(),l=Bh();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Kf(e,s,t.documentUpdates).next((e=>{a=e.zi,l=e.ji}))),!r.isEqual(Du.min())){const t=n.Ds.getLastRemoteSnapshotVersion(e).next((t=>n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ku.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Li=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.uc.get(t);r&&(pu(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ec=!0:e.modifiedDocuments.size>0?pu(r.ec):e.removedDocuments.size>0&&(pu(r.ec),r.ec=!1))})),await Tm(n,e,t)}catch(e){await Hu(e)}}function pm(e,t,n){const r=mu(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.sc.forEach(((n,r)=>{const i=r.view.Ru(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=mu(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Ru(t)&&(r=!0)})),r&&nm(n)}(r.eventManager,t),e.length&&r.nc.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function mm(e,t,n){const r=mu(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.uc.get(t),s=i&&i.key;if(s){let e=new ic(Fu.comparator);e=e.insert(s,Vc.newNoDocument(s,Du.min()));const n=Bh().add(s),i=new Dd(Du.min(),new Map,new ac(xu),e,n);await fm(r,i),r.oc=r.oc.remove(s),r.uc.delete(t),Sm(r)}else await Qf(r.localStore,t,!1).then((()=>wm(r,t,n))).catch(Hu)}async function gm(e,t){const n=mu(e),r=t.batch.batchId;try{const e=await function(e,t){const n=mu(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ku.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);pu(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Bh();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);bm(n,r,null),vm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tm(n,e)}catch(e){await Hu(e)}}async function ym(e,t,n){const r=mu(e);try{const e=await function(e,t){const n=mu(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(pu(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);bm(r,t,n),vm(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Tm(r,e)}catch(n){await Hu(n)}}function vm(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function bm(e,t,n){const r=mu(e);let i=r.ac[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}function wm(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ic.get(t))e.sc.delete(r),n&&e.nc.wc(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((t=>{e.cc.containsKey(t)||Em(e,t)}))}function Em(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(wp(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Sm(e))}function km(e,t,n){for(const r of n)r instanceof im?(e.cc.addReference(r.key,t),_m(e,r)):r instanceof sm?(uu("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||Em(e,r.key)):fu()}function _m(e,t){const n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(uu("SyncEngine","New document in limbo: "+n),e.rc.add(r),Sm(e))}function Sm(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new Fu(Lu.fromString(t)),r=e.lc.next();e.uc.set(r,new lm(n)),e.oc=e.oc.insert(n,r),bp(e.remoteStore,new vf(Eh(mh(n.path)),r,2,Gu.ct))}}async function Tm(e,t,n){const r=mu(e),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach(((e,a)=>{o.push(r.dc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=jf.Di(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.nc.zo(i),await async function(e,t){const n=mu(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ku.forEach(t,(t=>Ku.forEach(t.Vi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ku.forEach(t.Si,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Wu(e))throw e;uu("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Li.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Li=n.Li.insert(t,i)}}}(r.localStore,s))}async function Im(e,t){const n=mu(e);if(!n.currentUser.isEqual(t)){uu("SyncEngine","User change. New user:",t.toKey());const e=await qf(n.localStore,t);n.currentUser=t,function(e,t){e.hc.forEach((e=>{e.forEach((e=>{e.reject(new yu(gu.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.hc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Tm(n,e.Qi)}}function Cm(e,t){const n=mu(e),r=n.uc.get(t);if(r&&r.ec)return Bh().add(r.key);{let e=Bh();const r=n.ic.get(t);if(!r)return e;for(const t of r){const r=n.sc.get(t);e=e.unionWith(r.view.Qu)}return e}}function Nm(e){const t=mu(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=fm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=mm.bind(null,t),t.nc.zo=em.bind(null,t.eventManager),t.nc.wc=tm.bind(null,t.eventManager),t}function xm(e){const t=mu(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=gm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ym.bind(null,t),t}class Am{async initialize(e){this.serializer=up(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return $f(this.persistence,new zf,e.initialUser,this.serializer)}createPersistence(e){return new Ff(Vf.Fs,this.serializer)}createSharedClientState(e){return new Zf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Rm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>pm(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Im.bind(null,this.syncEngine),await Bp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Yp}createDatastore(e){const t=up(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new ap(r));var r;return function(e,t,n,r){return new pp(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>pm(this.syncEngine,e,0),s=tp.D()?new tp:new ep,new gp(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new um(e,t,n,r,i,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=mu(e);uu("RemoteStore","RemoteStore shutting down."),t.du.add(5),await vp(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dm{next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):cu("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Om{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new yu(gu.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vu;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Kp(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=su.UNAUTHENTICATED,this.clientId=Nu.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{uu("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(uu("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function Lm(e,t){e.asyncQueue.verifyOperationInProgress(),uu("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await qf(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Pm(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Fm(e);uu("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>zp(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>zp(t.remoteStore,n))),e._onlineComponents=t}function Mm(e){return"FirebaseError"===e.name?e.code===gu.FAILED_PRECONDITION||e.code===gu.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Fm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){uu("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lm(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Mm(n))throw n;hu("Error using user provided cache. Falling back to memory cache: "+n),await Lm(e,new Am)}}else uu("FirestoreClient","Using default OfflineComponentProvider"),await Lm(e,new Am);return e._offlineComponents}async function Um(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(uu("FirestoreClient","Using user provided OnlineComponentProvider"),await Pm(e,e._uninitializedComponentsProvider._online)):(uu("FirestoreClient","Using default OnlineComponentProvider"),await Pm(e,new Rm))),e._onlineComponents}function Vm(e){return Um(e).then((e=>e.syncEngine))}async function jm(e){const t=await Um(e),n=t.eventManager;return n.onListen=cm.bind(null,t.syncEngine),n.onUnlisten=dm.bind(null,t.syncEngine),n}function zm(e,t,n={}){const r=new vu;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Dm({next:n=>{t.enqueueAndForget((()=>Zp(e,o))),n.fromCache&&"server"===r.source?i.reject(new yu(gu.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new rm(n,s,{includeMetadataChanges:!0,xu:!0});return Xp(e,o)}(await jm(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bm=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(e,t,n){if(!n)throw new yu(gu.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function qm(e){if(!Fu.isDocumentKey(e))throw new yu(gu.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Hm(e){if(Fu.isDocumentKey(e))throw new yu(gu.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Km(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":fu()}function Wm(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new yu(gu.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Km(e);throw new yu(gu.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gm{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new yu(gu.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new yu(gu.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new yu(gu.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{get app(){if(!this._app)throw new yu(gu.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new yu(gu.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gm(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new wu;switch(e.type){case"firstParty":return new Su(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new yu(gu.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Bm.get(e);t&&(uu("ComponentProvider","Removing Datastore"),Bm.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gm({}),this._settingsFrozen=!1}}function Jm(e,t,n,r={}){var i;const s=(e=Wm(e,Qm))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&hu("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=su.MOCK_USER;else{t=Ae(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new yu(gu.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new su(s)}e._authCredentials=new Eu(new bu(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zm(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ym(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class Xm{withConverter(e){return new Xm(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class Zm extends Xm{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ym(this.firestore,null,new Fu(e))}withConverter(e){return new Zm(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,mh(n)),this._path=n,this.type="collection"}}function eg(e,t,...n){if(e=We(e),$m("collection","path",t),e instanceof Qm){const r=Lu.fromString(t,...n);return Hm(r),new Zm(e,null,r)}{if(!(e instanceof Ym||e instanceof Zm))throw new yu(gu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Lu.fromString(t,...n));return Hm(r),new Zm(e.firestore,null,r)}}function tg(e,t,...n){if(e=We(e),1===arguments.length&&(t=Nu.A()),$m("doc","path",t),e instanceof Qm){const r=Lu.fromString(t,...n);return qm(r),new Ym(e,null,new Fu(r))}{if(!(e instanceof Ym||e instanceof Zm))throw new yu(gu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Lu.fromString(t,...n));return qm(r),new Ym(e.firestore,e instanceof Zm?e.converter:null,new Fu(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ng{get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=lp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new vu;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Wu(e))throw e;uu("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw cu("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const r=Hp.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(r),r}Uc(){this.Mc&&fu()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new cp(this,"async_queue_retry"),this.qc=()=>{const e=lp();e&&uu("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=lp();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}}class rg extends Qm{_terminate(){return this._firestoreClient||og(this),this._firestoreClient.terminate()}constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ng,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function ig(e,t){const n="string"==typeof e?e:t||"(default)",r=Lt("object"==typeof e?e:Vt(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=Ie("firestore");e&&Jm(r,...e)}return r}function sg(e){return e._firestoreClient||og(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function og(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new bc(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Om(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ag{static fromBase64String(e){try{return new ag(hc.fromBase64String(e))}catch(e){throw new yu(gu.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ag(hc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new yu(gu.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mu(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ug{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xu(this._lat,e._lat)||xu(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new yu(gu.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new yu(gu.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=/^__.*__$/;class dg{toMutation(e,t){return null!==this.fieldMask?new gd(e,this.data,this.fieldMask,t,this.fieldTransforms):new md(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function fg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fu()}}class pg{get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new pg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.ea(e),r}na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ig(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(fg(this.Yc)&&hg.test(e))throw this.ia('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class mg{ua(e,t,n,r=!1){return new pg({Yc:e,methodName:t,oa:n,path:Mu.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||up(e)}}function gg(e){const t=e._freezeSettings(),n=up(e._databaseId);return new mg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function yg(e,t,n,r,i,s={}){const o=e.ua(s.merge||s.mergeFields?2:0,t,n,i);kg("Data must be an object, but it was:",o,r);const a=wg(r,o);let l,u;if(s.merge)l=new uc(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=_g(t,r,n);if(!o.contains(i))throw new yu(gu.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Cg(e,i)||e.push(i)}l=new uc(e),u=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=o.fieldTransforms;return new dg(new Fc(a),l,u)}function vg(e,t,n,r=!1){return bg(n,e.ua(r?4:3,t))}function bg(e,t){if(Eg(e=We(e)))return kg("Unsupported field value:",t,e),wg(e,t);if(e instanceof ug)return function(e,t){if(!fg(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=bg(i,t.sa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=We(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Wh(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ru.fromDate(e);return{timestampValue:Hd(t.serializer,n)}}if(e instanceof Ru){const n=new Ru(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Hd(t.serializer,n)}}if(e instanceof cg)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ag)return{bytesValue:Kd(t.serializer,e._byteString)};if(e instanceof Ym){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Qd(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${Km(e)}`)}(e,t)}function wg(e,t){const n={};return rc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):nc(e,((e,r)=>{const i=bg(r,t.Xc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Eg(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ru||e instanceof cg||e instanceof ag||e instanceof Ym||e instanceof ug)}function kg(e,t,n){if(!Eg(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Km(n);throw"an object"===r?t.ia(e+" a custom object"):t.ia(e+" "+r)}}function _g(e,t,n){if((t=We(t))instanceof lg)return t._internalPath;if("string"==typeof t)return Tg(e,t);throw Ig("Field path arguments must be of type string or ",e,!1,void 0,n)}const Sg=new RegExp("[~\\*/\\[\\]]");function Tg(e,t,n){if(t.search(Sg)>=0)throw Ig(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new lg(...t.split("."))._internalPath}catch(r){throw Ig(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ig(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new yu(gu.INVALID_ARGUMENT,a+e+l)}function Cg(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{get id(){return this._key.path.lastSegment()}get ref(){return new Ym(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new xg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ag("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}}class xg extends Ng{data(){return super.data()}}function Ag(e,t){return"string"==typeof t?Tg(e,t):t instanceof lg?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new yu(gu.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dg{}class Og extends Dg{}function Lg(e,t,...n){let r=[];t instanceof Dg&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Fg)).length,n=e.filter((e=>e instanceof Pg)).length;if(t>1||t>0&&n>0)throw new yu(gu.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const t of r)e=t._apply(e);return e}class Pg extends Og{static _create(e,t,n){return new Pg(e,t,n)}_apply(e){const t=this._parse(e);return Bg(e._query,t),new Xm(e.firestore,e.converter,kh(e._query,t))}_parse(e){const t=gg(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new yu(gu.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){zg(o,s);const t=[];for(const n of o)t.push(jg(r,e,n));a={arrayValue:{values:t}}}else a=jg(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||zg(o,s),a=vg(n,"where",o,"in"===s||"not-in"===s);return Kc.create(i,s,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}}function Mg(e,t,n){const r=t,i=Ag("where",e);return Pg._create(i,r,n)}class Fg extends Dg{static _create(e,t){return new Fg(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Wc.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)Bg(n,e),n=kh(n,e)}(e._query,t),new Xm(e.firestore,e.converter,kh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(e,t){super(),this.type=e,this._queryConstraints=t}}class Ug extends Og{static _create(e,t){return new Ug(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new yu(gu.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new yu(gu.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new $c(t,n);return function(e,t){if(null===yh(e)){const n=vh(e);null!==n&&$g(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Xm(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new fh(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}}function Vg(e,t="asc"){const n=t,r=Ag("orderBy",e);return Ug._create(r,n)}function jg(e,t,n){if("string"==typeof(n=We(n))){if(""===n)throw new yu(gu.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bh(t)&&-1!==n.indexOf("/"))throw new yu(gu.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Lu.fromString(n));if(!Fu.isDocumentKey(r))throw new yu(gu.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xc(e,new Fu(r))}if(n instanceof Ym)return xc(e,n._key);throw new yu(gu.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Km(n)}.`)}function zg(e,t){if(!Array.isArray(e)||0===e.length)throw new yu(gu.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Bg(e,t){if(t.isInequality()){const n=vh(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new yu(gu.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=yh(e);null!==i&&$g(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new yu(gu.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new yu(gu.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function $g(e,t,n){if(!n.isEqual(t))throw new yu(gu.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class qg{convertValue(e,t="none"){switch(kc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw fu()}}convertObject(e,t){const n={};return nc(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new cg(pc(e.latitude),pc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=yc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(vc(e));default:return null}}convertTimestamp(e){const t=fc(e);return new Ru(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Lu.fromString(e);pu(yf(n));const r=new wc(n.get(1),n.get(3)),i=new Fu(n.popFirst(5));return r.isEqual(t)||cu(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kg{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class Wg extends Ng{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ag("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}}class Gg extends Wg{data(e={}){return super.data(e)}}class Qg{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Gg(this._firestore,this._userDataWriter,n.key,n,new Kg(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new yu(gu.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Gg(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Kg(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Gg(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Kg(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Jg(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Kg(r.hasPendingWrites,r.fromCache),this.query=n}}function Jg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fu()}}class Yg extends qg{convertBytes(e){return new ag(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ym(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function Xg(e){e=Wm(e,Xm);const t=Wm(e.firestore,rg),n=sg(t),r=new Yg(t);return Rg(e._query),zm(n,e._query).then((n=>new Qg(t,r,e,n)))}function Zg(e,t,n){e=Wm(e,Ym);const r=Wm(e.firestore,rg),i=Hg(e.converter,t,n);return ty(r,[yg(gg(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,ad.none())])}function ey(e,t){const n=Wm(e.firestore,rg),r=tg(e),i=Hg(e.converter,t);return ty(n,[yg(gg(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ad.exists(!1))]).then((()=>r))}function ty(e,t){return function(e,t){const n=new vu;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=xm(e);try{const e=await function(e,t){const n=mu(e),r=Ru.now(),i=t.reduce(((e,t)=>e.add(t.key)),Bh());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Oh(),l=Bh();return n.Ki.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=fd(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new gd(e.key,t,Uc(t.value.mapValue),ad.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Mh(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ac[e.currentUser.toKey()];r||(r=new ic(xu)),r=r.insert(t,n),e.ac[e.currentUser.toKey()]=r}(r,e.batchId,n),await Tm(r,e.changes),await Dp(r.remoteStore)}catch(e){const t=Kp(e,"Failed to persist write");n.reject(t)}}(await Vm(e),t,n))),n.promise}(sg(e),t)}!function(e,t=!0){!function(e){ou=e}(Ft),Ot(new Ge("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new rg(new ku(e.getProvider("auth-internal")),new Iu(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new yu(gu.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wc(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),jt(iu,"3.10.0",e),jt(iu,"3.10.0","esm2017")}();const ny=Ut({apiKey:"AIzaSyBvHCpKNrfKfc2AZZLP8D0K1AGlUFcX1aE",authDomain:"test-budget-38b21.firebaseapp.com",databaseURL:"https://test-budget-38b21.firebaseio.com",projectId:"test-budget-38b21",storageBucket:"test-budget-38b21.appspot.com",messagingSenderId:"1067130269246",appId:"1:1067130269246:web:504d76c1afc05bcbf12b6f"}),ry=function(e){const t=Zi(e);return{signIn:async()=>{const e=new _r;e.setCustomParameters({prompt:"select_account"});try{await wi(t,e);const n=await Ei(t);if(null!==n){const{displayName:e,email:t,photoURL:r}=n.user;return{displayName:e,email:t,photoURL:r}}}catch(e){const{code:t,message:n}=e;return console.log(t,n),null}return null},signOut:()=>t.signOut(),onAuthStateChanged:e=>t.onAuthStateChanged(e)}}(ny),iy=ry.signIn,sy=ry.signOut,oy=ry.onAuthStateChanged,ay=function(e){const t=ig(e);return{getBudgets:async function(e){const n=Lg(eg(t,"budgets"),Mg("uid","==",e.uid),Vg("createdAt"));return(await Xg(n)).docs.map((function(e){return{id:e.id,...e.data()}}))},updateBudget:async function(e,n,r){const i=eg(t,"budgets");await Zg(tg(i,e),{amount:n,weekly_amount:r},{merge:!0})},createBudget:async function(e,n,r){const i=await ey(eg(t,"budgets"),{amount:0,createdAt:new Date,name:n,uid:e.uid,weekly_amount:0,weekly_budget:r});console.log("Document written with ID: ",i.id)}}}(ny),ly=ay.getBudgets,uy=ay.updateBudget,cy=ay.createBudget,hy=function(e){const t=se(["budgets",e.uid],(()=>ly(e))),{data:n,mutate:r}=t;return{...t,Methods:{spend:async function(e,t){r(n.map((function(n){return e.id===n.id?{...e,amount:e.amount-t,weekly_amount:e.weekly_amount+t}:n})),!1),await uy(e.id,e.amount-t,e.weekly_amount+t),r()},recharge:async function(e){r((function(t){return t.map((function(t){return e.id===t.id?{...e,amount:e.amount+e.weekly_budget,weekly_amount:0}:t}))}),!1),await uy(e.id,e.amount+e.weekly_budget,0),r()},create:async function(t){r([...n,{amount:0,id:"temporary_id",name:`${t.name} (${t.description})`,weekly_amount:0,weekly_budget:t.budget}],!1),await cy(e,`${t.name} (${t.description})`,t.budget),r()}}}};u=s("jE8J5"),u=s("jE8J5");const dy=function(e){return new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR"}).format(e)},fy=function(){const[e,n]=t(u).useState(void 0);return t(u).useEffect((function(){return oy(n)}),[]),e},py=function({user:e}){return null!==e?(0,o.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(e){e.preventDefault(),sy()},children:[(0,o.jsx)("i",{className:"bi bi-box-arrow-in-left"})," ",(0,o.jsx)("em",{children:e.displayName})]}):(0,o.jsx)("button",{className:"btn btn-outline-success",onClick:function(e){e.preventDefault(),iy()},children:(0,o.jsx)("i",{className:"bi bi-box-arrow-in-right"})})},my=function(e){return(0,o.jsx)("div",{className:"mt-5 d-flex justify-content-center",children:(0,o.jsx)("div",{style:{width:"3rem",height:"3rem"},className:"spinner-border",role:"status",children:(0,o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},gy=function(e){return(0,o.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)("span",{className:"navbar-brand",children:"My Budgets"}),(0,o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,o.jsx)("span",{className:"navbar-toggler-icon"})}),(0,o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[(0,o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"}),(0,o.jsx)("form",{className:"d-flex",children:(0,o.jsx)(py,{user:null})})]})]})})};u=s("jE8J5");const yy=document.body.appendChild(document.createElement("div")),vy=function({opened:e,setOpened:n,children:r}){const[i,s]=t(u).useState(!1),a=t(u).useRef(null),c=t(u).useRef(null);return t(u).useEffect((function(){c.current=new bootstrap.Modal(a.current),a.current.addEventListener("hidden.bs.modal",(function(e){s(!1),n(!1)})),a.current.addEventListener("shown.bs.modal",(function(){s(!0)}))}),[]),t(u).useEffect((function(){e?c.current.show():(s(!1),c.current.hide())}),[e]),t(l).createPortal((0,o.jsx)("div",{ref:a,className:"modal fade",tabIndex:"-1","aria-hidden":"true",children:(0,o.jsx)("div",{className:"modal-dialog",children:(0,o.jsx)("div",{className:"modal-content",children:i?r:null})})}),yy)};u=s("jE8J5");const by=function({setOpened:e,budget:n,action:r}){const i=t(u).useRef(null);t(u).useEffect((function(){i.current.focus()}),[]);const[s,a]=t(u).useState("");return(0,o.jsxs)(t(u).Fragment,{children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)("h5",{className:"modal-title",children:n.name}),(0,o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r(parseFloat(s)),e(!1)},children:[(0,o.jsxs)("div",{className:"modal-body",children:[(0,o.jsxs)("div",{className:"form-floating",children:[(0,o.jsx)("input",{ref:i,id:"floatingInput",type:"number",className:"form-control",value:s,step:"0.01",onChange:function(e){a(e.target.value)},placeholder:"3.14",required:!0}),(0,o.jsx)("label",{htmlFor:"floatingInput",children:"Quanto hai speso?"})]}),(0,o.jsxs)("small",{className:"form-text text-muted",children:["Il tuo budget è ",dy(n.amount)]})]}),(0,o.jsx)("div",{className:"modal-footer",children:(0,o.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Sure!"})})]})]})},wy=function({budget:e,spend:n}){const[r,i]=t(u).useState(!1);return(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsx)(vy,{opened:r,setOpened:i,children:(0,o.jsx)(by,{setOpened:i,budget:e,action:n})}),(0,o.jsxs)("div",{className:"card border-secondary m-2",children:[(0,o.jsxs)("div",{className:"card-header",children:[(0,o.jsx)("span",{children:e.name}),(0,o.jsx)("span",{className:"float-end",children:(0,o.jsxs)("form",{className:"row row-cols-auto align-items-center",children:[(0,o.jsx)("small",{children:dy(e.weekly_budget)}),(0,o.jsxs)("div",{className:"dropdown",children:[(0,o.jsx)("button",{className:"btn btn-sm btn-outline-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,o.jsx)("i",{className:"bi bi-gear"})}),(0,o.jsxs)("div",{className:"dropdown-menu dropdown-menu-end",children:[(0,o.jsx)("button",{className:"dropdown-item",onClick:function(e){e.preventDefault()},children:"Details"}),(0,o.jsx)("button",{className:"dropdown-item",onClick:function(e){e.preventDefault()},children:"Move"})]})]})]})})]}),(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("p",{className:"mb-0",children:(0,o.jsx)("span",{className:"card-subtitle mb-2 text-muted",children:dy(e.weekly_amount)})}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{className:"fs-5",children:(0,o.jsx)("em",{children:dy(e.amount)})}),(0,o.jsxs)("button",{className:"btn btn-outline-primary float-end",onClick:function(){i(!0)},children:[(0,o.jsx)("i",{className:"bi bi-currency-euro"})," Add Cost"]})]})]})]})]},e.id)};s("jE8J5");const Ey=function({user:e}){const{isValidating:t}=hy(e);return t?(0,o.jsx)("div",{className:"spinner-border",style:{position:"fixed",bottom:"1em",right:"1em"},role:"status",children:(0,o.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):null};u=s("jE8J5");s("jE8J5");const ky=function({opened:e,setOpened:t,action:n}){return(0,o.jsxs)(vy,{opened:e,setOpened:t,children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)("h5",{className:"modal-title",children:"Recharge All"}),(0,o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,o.jsx)("div",{className:"modal-body",children:"Sicuro di voler ricaricare tutti i budget?"}),(0,o.jsx)("div",{className:"modal-footer",style:{display:"block"},children:(0,o.jsx)("button",{className:"btn btn-outline-danger float-end",onClick:function(){n(),t(!1)},children:"Ok"})})]})};u=s("jE8J5");const _y=function({action:e}){const n=t(u).useRef(null);t(u).useEffect((function(){n.current.focus()}),[]);const[r,i]=t(u).useState(""),[s,a]=t(u).useState(""),[l,c]=t(u).useState(""),h=function(e){if("budget"===e.target.name)c(parseFloat(e.target.value));else{(0,{name:i,description:a}[e.target.name])(e.target.value)}};return(0,o.jsxs)(t(u).Fragment,{children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)("h5",{className:"modal-title",children:"New Budget"}),(0,o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:r,description:s,budget:l})},children:[(0,o.jsxs)("div",{className:"modal-body",children:[(0,o.jsxs)("div",{className:"form-floating mb-3",children:[(0,o.jsx)("input",{ref:n,className:"form-control",name:"name",placeholder:" ",value:r,onChange:h,required:!0}),(0,o.jsx)("label",{children:"Name"})]}),(0,o.jsxs)("div",{className:"form-floating mb-3",children:[(0,o.jsx)("textarea",{className:"form-control",name:"description",rows:"3",placeholder:" ",style:{height:"100px"},value:s,onChange:h}),(0,o.jsx)("label",{children:"Description"})]}),(0,o.jsxs)("div",{className:"form-floating mb-3",children:[(0,o.jsx)("input",{type:"number",min:"0.01",step:"0.01",className:"form-control",value:l,onChange:h,name:"budget",placeholder:" ",required:!0}),(0,o.jsx)("label",{children:"Budget"})]})]}),(0,o.jsx)("div",{className:"modal-footer",style:{display:"block"},children:(0,o.jsx)("button",{type:"submit",className:"btn btn-outline-danger float-end",children:"Ok"})})]})]})},Sy=function({opened:e,setOpened:t,action:n}){return(0,o.jsx)(vy,{opened:e,setOpened:t,children:(0,o.jsx)(_y,{action:function(e){n(e),t(!1)}})})},Ty=function({user:e,budgets:n,Methods:r}){const[i,s]=t(u).useState(!1),[a,l]=t(u).useState(!1),c=n.reduce((function(e,t){return e+t.weekly_budget}),0),h=n.reduce((function(e,t){return e+t.amount}),0);return(0,o.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:[(0,o.jsx)(ky,{opened:i,setOpened:s,action:function(){n.forEach((function(e){r.recharge(e)}))}}),(0,o.jsx)(Sy,{opened:a,setOpened:l,action:function(e){r.create(e)}}),(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsxs)("span",{className:"navbar-brand",children:["My Budgets ",(0,o.jsx)("sub",{children:dy(c)})]}),(0,o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,o.jsx)("span",{className:"navbar-toggler-icon"})}),(0,o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[(0,o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)("a",{className:"nav-link",href:"#",onClick:function(e){e.preventDefault(),s(!0)},children:"Recharge all"})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)("a",{className:"nav-link",href:"#",onClick:function(e){e.preventDefault(),l(!0)},children:"New budget"})})]}),(0,o.jsx)("span",{className:"navbar-brand fst-italic",children:dy(h)}),(0,o.jsx)("form",{className:"d-flex",children:(0,o.jsx)(py,{user:e})})]})]})]})},Iy=function({user:e,error:n}){return(0,o.jsxs)(t(u).Fragment,{children:[(0,o.jsx)(gy,{user:e}),(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{style:{marginTop:"10px"},className:"alert alert-danger",role:"alert",children:[(0,o.jsx)("p",{children:"Errore nel caricamento dei budget!"}),(0,o.jsx)("hr",{}),(0,o.jsx)("p",{children:(0,o.jsx)("em",{children:n.message})})]})})]})},Cy=function({user:e}){const{data:n,error:r,Methods:i}=hy(e);if(void 0!==r)return(0,o.jsx)(Iy,{user:e,error:r});if(void 0===n)return(0,o.jsx)(my,{});const s=n.map((function(e){return(0,o.jsx)(wy,{budget:e,spend:function(t){i.spend(e,t)}},e.id)}));return(0,o.jsxs)(t(u).Fragment,{children:[(0,o.jsx)(Ty,{user:e,budgets:n,Methods:i}),(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:s})}),(0,o.jsx)(Ey,{user:e})]})};s("jE8J5");var Ny;Ny=JSON.parse('{"name":"my-budgets","version":"5.2.1","description":"My Budgets","private":true,"source":"src/index.html","browserslist":"defaults","scripts":{"update":"ncu -u","serve":"parcel -p 8000","watch":"parcel watch","build":"rm -rf dist && rm -rf docs && parcel build --no-source-maps --dist-dir docs --public-url=/my-budgets"},"author":"Luca Bacchi <bacchilu@gmail.com> (https://github.com/bacchilu)","license":"ISC","prettier":{"arrowParens":"always","bracketSpacing":false,"embeddedLanguageFormatting":"auto","htmlWhitespaceSensitivity":"css","insertPragma":false,"jsxBracketSameLine":false,"jsxSingleQuote":false,"printWidth":120,"proseWrap":"preserve","quoteProps":"as-needed","requirePragma":false,"semi":true,"singleQuote":true,"tabWidth":4,"trailingComma":"es5","useTabs":false,"vueIndentScriptAndStyle":false},"devDependencies":{"@parcel/packager-raw-url":"^2.8.3","@parcel/transformer-webmanifest":"^2.8.3","@types/react":"^18.0.33","@types/react-dom":"^18.0.11","npm-check-updates":"^16.10.7","parcel":"^2.8.3","process":"^0.11.10"},"dependencies":{"firebase":"^9.19.1","firebaseui":"^6.0.2","react":"^18.2.0","react-dom":"^18.2.0","swr":"^2.1.2"}}');const xy=function(){const e=function(){const e=[{message:"Forget about goals, focus on systems instead.",author:"James Clear",source:"Atomic Habits"},{message:"Stand up straight with your shoulders back.",author:"Jordan Peterson",source:"12 Rules for Life"},{message:"A year from now you will wish you had started today.",author:"Unknown",source:"Unknown"},{message:"If you don’t risk anything, you risk even more.",author:"Erica Jong",source:"Unknown"}];return e[Math.floor(Math.random()*e.length)]}();return(0,o.jsx)("div",{className:"mt-5 d-flex justify-content-center lead",children:(0,o.jsxs)("figure",{children:[(0,o.jsx)("blockquote",{className:"blockquote",children:(0,o.jsx)("p",{children:e.message})}),(0,o.jsxs)("figcaption",{className:"blockquote-footer",children:[e.author," in ",(0,o.jsx)("cite",{title:"Source Title",children:e.source})]})]})})},Ay=function(){return(0,o.jsxs)(t(u).Fragment,{children:[(0,o.jsx)(gy,{}),(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{style:{marginTop:"10px"},className:"alert alert-danger",role:"alert",children:[(0,o.jsx)("p",{children:"Please authenticate!"}),(0,o.jsxs)("p",{children:["You need to"," ",(0,o.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),iy()},children:"authenticate"})," ","with a Google Account to use this app."]})]})})]})},Ry=function(){const e=fy();return void 0===e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(my,{}),(0,o.jsx)(xy,{})]}):null===e?(0,o.jsx)(Ay,{}):(0,o.jsx)(Cy,{user:e})};a(document.getElementById("app")).render((0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Ry,{}),(0,o.jsx)("div",{style:{position:"fixed",bottom:"0.1rem",left:"0.1rem"},className:"font-monospace",children:(0,o.jsx)((()=>(0,o.jsx)("span",{children:Ny.version})),{})})]}))}();