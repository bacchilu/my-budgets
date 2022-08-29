!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequirebb14;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequirebb14=s),s.register("2nacn",(function(t,n){var r,i,o;e(t.exports,"Fragment",(function(){return r}),(function(e){return r=e})),e(t.exports,"jsx",(function(){return i}),(function(e){return i=e})),e(t.exports,"jsxs",(function(){return o}),(function(e){return o=e}));var a=s("jE8J5"),u=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,h=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,i={},s=null,o=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:u,type:e,key:s,ref:o,props:i,_owner:h.current}}r=l,i=f,o=f})),s.register("jE8J5",(function(e,t){"use strict";e.exports=s("gxKzV")})),s.register("gxKzV",(function(t,n){var r,i,s,o,a,u,l,c,h,d,f,p,m,g,y,v,b,w,E,k,S,_,T,I,C,N,x,A,D,R,O,L,P,M,F;e(t.exports,"Children",(function(){return r}),(function(e){return r=e})),e(t.exports,"Component",(function(){return i}),(function(e){return i=e})),e(t.exports,"Fragment",(function(){return s}),(function(e){return s=e})),e(t.exports,"Profiler",(function(){return o}),(function(e){return o=e})),e(t.exports,"PureComponent",(function(){return a}),(function(e){return a=e})),e(t.exports,"StrictMode",(function(){return u}),(function(e){return u=e})),e(t.exports,"Suspense",(function(){return l}),(function(e){return l=e})),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return c}),(function(e){return c=e})),e(t.exports,"cloneElement",(function(){return h}),(function(e){return h=e})),e(t.exports,"createContext",(function(){return d}),(function(e){return d=e})),e(t.exports,"createElement",(function(){return f}),(function(e){return f=e})),e(t.exports,"createFactory",(function(){return p}),(function(e){return p=e})),e(t.exports,"createRef",(function(){return m}),(function(e){return m=e})),e(t.exports,"forwardRef",(function(){return g}),(function(e){return g=e})),e(t.exports,"isValidElement",(function(){return y}),(function(e){return y=e})),e(t.exports,"lazy",(function(){return v}),(function(e){return v=e})),e(t.exports,"memo",(function(){return b}),(function(e){return b=e})),e(t.exports,"startTransition",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_act",(function(){return E}),(function(e){return E=e})),e(t.exports,"useCallback",(function(){return k}),(function(e){return k=e})),e(t.exports,"useContext",(function(){return S}),(function(e){return S=e})),e(t.exports,"useDebugValue",(function(){return _}),(function(e){return _=e})),e(t.exports,"useDeferredValue",(function(){return T}),(function(e){return T=e})),e(t.exports,"useEffect",(function(){return I}),(function(e){return I=e})),e(t.exports,"useId",(function(){return C}),(function(e){return C=e})),e(t.exports,"useImperativeHandle",(function(){return N}),(function(e){return N=e})),e(t.exports,"useInsertionEffect",(function(){return x}),(function(e){return x=e})),e(t.exports,"useLayoutEffect",(function(){return A}),(function(e){return A=e})),e(t.exports,"useMemo",(function(){return D}),(function(e){return D=e})),e(t.exports,"useReducer",(function(){return R}),(function(e){return R=e})),e(t.exports,"useRef",(function(){return O}),(function(e){return O=e})),e(t.exports,"useState",(function(){return L}),(function(e){return L=e})),e(t.exports,"useSyncExternalStore",(function(){return P}),(function(e){return P=e})),e(t.exports,"useTransition",(function(){return M}),(function(e){return M=e})),e(t.exports,"version",(function(){return F}),(function(e){return F=e}));var U=Symbol.for("react.element"),V=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),q=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator;var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,J={};function Z(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,Y(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ie=Object.prototype.hasOwnProperty,se={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)ie.call(t,r)&&!oe.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:U,type:e,key:s,ref:o,props:i,_owner:se.current}}function ue(e){return"object"==typeof e&&null!==e&&e.$$typeof===U}var le=/\/+/g;function ce(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function he(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case U:case V:o=!0}}if(o)return i=i(o=e),e=""===r?"."+ce(o,0):r,re(i)?(n="",null!=e&&(n=e.replace(le,"$&/")+"/"),he(i,t,n,"",(function(e){return e}))):null!=i&&(ue(i)&&(i=function(e,t){return{$$typeof:U,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(le,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=""===r?".":r+":",re(e))for(var a=0;a<e.length;a++){var u=r+ce(s=e[a],a);o+=he(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Q&&e[Q]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),a=0;!(s=e.next()).done;)o+=he(s=s.value,t,n,u=r+ce(s,a++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function de(e,t,n){if(null==e)return e;var r=[],i=0;return he(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function fe(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var pe={current:null},me={transition:null};r={map:de,forEach:function(e,t,n){de(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return de(e,(function(){t++})),t},toArray:function(e){return de(e,(function(e){return e}))||[]},only:function(e){if(!ue(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,s=j,o=B,a=te,u=z,l=K,c={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:me,ReactCurrentOwner:se},h=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y({},e.props),i=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=se.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)ie.call(t,u)&&!oe.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==a?a[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:U,type:e.type,key:i,ref:s,props:r,_owner:o}},d=function(e){return(e={$$typeof:q,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:$,_context:e},e.Consumer=e},f=ae,p=function(e){var t=ae.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:H,render:e}},y=ue,v=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:fe}},b=function(e,t){return{$$typeof:W,type:e,compare:void 0===t?null:t}},w=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},E=function(){throw Error("act(...) is not supported in production builds of React.")},k=function(e,t){return pe.current.useCallback(e,t)},S=function(e){return pe.current.useContext(e)},_=function(){},T=function(e){return pe.current.useDeferredValue(e)},I=function(e,t){return pe.current.useEffect(e,t)},C=function(){return pe.current.useId()},N=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)},x=function(e,t){return pe.current.useInsertionEffect(e,t)},A=function(e,t){return pe.current.useLayoutEffect(e,t)},D=function(e,t){return pe.current.useMemo(e,t)},R=function(e,t,n){return pe.current.useReducer(e,t,n)},O=function(e){return pe.current.useRef(e)},L=function(e){return pe.current.useState(e)},P=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)},M=function(){return pe.current.useTransition()},F="18.2.0"})),s.register("2wM5b",(function(t,n){var r,i,o,a,u,l,c,h,d,f,p,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return r}),(function(e){return r=e})),e(t.exports,"createPortal",(function(){return i}),(function(e){return i=e})),e(t.exports,"createRoot",(function(){return o}),(function(e){return o=e})),e(t.exports,"findDOMNode",(function(){return a}),(function(e){return a=e})),e(t.exports,"flushSync",(function(){return u}),(function(e){return u=e})),e(t.exports,"hydrate",(function(){return l}),(function(e){return l=e})),e(t.exports,"hydrateRoot",(function(){return c}),(function(e){return c=e})),e(t.exports,"render",(function(){return h}),(function(e){return h=e})),e(t.exports,"unmountComponentAtNode",(function(){return d}),(function(e){return d=e})),e(t.exports,"unstable_batchedUpdates",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_renderSubtreeIntoContainer",(function(){return p}),(function(e){return p=e})),e(t.exports,"version",(function(){return m}),(function(e){return m=e}));var g=s("jE8J5"),y=s("hnwcm");function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,w={};function E(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(w[e]=t,e=0;e<t.length;e++)b.add(t[e])}var S=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),_=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},C={};function N(e,t,n,r,i,s,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){x[e]=new N(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];x[t]=new N(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){x[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){x[e]=new N(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){x[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){x[e]=new N(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){x[e]=new N(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){x[e]=new N(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){x[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)}));var A=/[\-:]([a-z])/g;function D(e){return e[1].toUpperCase()}function R(e,t,n,r){var i=x.hasOwnProperty(t)?x[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!_.call(C,e)||!_.call(I,e)&&(T.test(e)?C[e]=!0:(I[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(A,D);x[t]=new N(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(A,D);x[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(A,D);x[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){x[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)})),x.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){x[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)}));var O=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),j=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),H=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var K=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var W=Symbol.iterator;function G(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=W&&e[W]||e["@@iterator"])?e:null}var Q,X=Object.assign;function Y(e){if(void 0===Q)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var J=!1;function Z(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),s=r.stack.split("\n"),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(1!==o||1!==a)do{if(o--,0>--a||i[o]!==s[a]){var u="\n"+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=o&&0<=a);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Y(e):""}function ee(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case P:return"Portal";case U:return"Profiler";case F:return"StrictMode";case B:return"Suspense";case $:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case V:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case q:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case H:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function se(e){e._valueTracker||(e._valueTracker=function(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function oe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ae(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ue(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function le(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ce(e,t){null!=(t=t.checked)&&R(e,"checked",t,!1)}function he(e,t){ce(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?fe(e,t.type,n):t.hasOwnProperty("defaultValue")&&fe(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function de(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function fe(e,t,n){"number"===t&&ae(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pe=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(v(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ye(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(v(92));if(pe(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ve(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function be(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function we(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ee(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?we(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ke,Se,_e=(Se=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ke=ke||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return Se(e,t)}))}:Se);function Te(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];function Ne(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Ie.hasOwnProperty(e)&&Ie[e]?(""+t).trim():t+"px"}function xe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Ne(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Ie).forEach((function(e){Ce.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ie[t]=Ie[e]}))}));var Ae=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function De(e,t){if(t){if(Ae[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(v(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(v(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(v(62))}}function Re(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=null;function Le(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Pe=null,Me=null,Fe=null;function Ue(e){if(e=Ri(e)){if("function"!=typeof Pe)throw Error(v(280));var t=e.stateNode;t&&(t=Li(t),Pe(e.stateNode,e.type,t))}}function Ve(e){Me?Fe?Fe.push(e):Fe=[e]:Me=e}function je(){if(Me){var e=Me,t=Fe;if(Fe=Me=null,Ue(e),t)for(e=0;e<t.length;e++)Ue(t[e])}}function ze(e,t){return e(t)}function Be(){}var $e=!1;function qe(e,t,n){if($e)return e(t,n);$e=!0;try{return ze(e,t,n)}finally{$e=!1,(null!==Me||null!==Fe)&&(Be(),je())}}function He(e,t){var n=e.stateNode;if(null===n)return null;var r=Li(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(v(231,t,typeof n));return n}var Ke=!1;if(S)try{var We={};Object.defineProperty(We,"passive",{get:function(){Ke=!0}}),window.addEventListener("test",We,We),window.removeEventListener("test",We,We)}catch(Se){Ke=!1}function Ge(e,t,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var Qe=!1,Xe=null,Ye=!1,Je=null,Ze={onError:function(e){Qe=!0,Xe=e}};function et(e,t,n,r,i,s,o,a,u){Qe=!1,Xe=null,Ge.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(v(188))}function it(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rt(i),e;if(s===r)return rt(i),t;s=s.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(3!==n.tag)throw Error(v(188));return n.stateNode.current===n?e:t}(e))?st(e):null}function st(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=st(e);if(null!==t)return t;e=e.sibling}return null}var ot=y.unstable_scheduleCallback,at=y.unstable_cancelCallback,ut=y.unstable_shouldYield,lt=y.unstable_requestPaint,ct=y.unstable_now,ht=y.unstable_getCurrentPriorityLevel,dt=y.unstable_ImmediatePriority,ft=y.unstable_UserBlockingPriority,pt=y.unstable_NormalPriority,mt=y.unstable_LowPriority,gt=y.unstable_IdlePriority,yt=null,vt=null;var bt=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(wt(e)/Et|0)|0},wt=Math.log,Et=Math.LN2;var kt=64,St=4194304;function _t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=268435455&n;if(0!==o){var a=o&~i;0!==a?r=_t(a):0!==(s&=o)&&(r=_t(s))}else 0!==(o=n&~i)?r=_t(o):0!==s&&(r=_t(s));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&0!=(4194240&s)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-bt(t)),r|=e[n],t&=~i;return r}function It(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ct(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Nt(){var e=kt;return 0==(4194240&(kt<<=1))&&(kt=64),e}function xt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function At(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-bt(t)]=n}function Dt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Rt=0;function Ot(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var Lt,Pt,Mt,Ft,Ut,Vt=!1,jt=[],zt=null,Bt=null,$t=null,qt=new Map,Ht=new Map,Kt=[],Wt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gt(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":qt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(t.pointerId)}}function Qt(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=Ri(t))&&Pt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Xt(e){var t=Di(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void Ut(e.priority,(function(){Mt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=ln(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Ri(n))&&Pt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Oe=r,n.target.dispatchEvent(r),Oe=null,t.shift()}return!0}function Jt(e,t,n){Yt(e)&&n.delete(t)}function Zt(){Vt=!1,null!==zt&&Yt(zt)&&(zt=null),null!==Bt&&Yt(Bt)&&(Bt=null),null!==$t&&Yt($t)&&($t=null),qt.forEach(Jt),Ht.forEach(Jt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,Vt||(Vt=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<jt.length){en(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&en(zt,e),null!==Bt&&en(Bt,e),null!==$t&&en($t,e),qt.forEach(t),Ht.forEach(t),n=0;n<Kt.length;n++)(r=Kt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&null===(n=Kt[0]).blockedOn;)Xt(n),null===n.blockedOn&&Kt.shift()}var nn=O.ReactCurrentBatchConfig,rn=!0;function sn(e,t,n,r){var i=Rt,s=nn.transition;nn.transition=null;try{Rt=1,an(e,t,n,r)}finally{Rt=i,nn.transition=s}}function on(e,t,n,r){var i=Rt,s=nn.transition;nn.transition=null;try{Rt=4,an(e,t,n,r)}finally{Rt=i,nn.transition=s}}function an(e,t,n,r){if(rn){var i=ln(e,t,n,r);if(null===i)ri(e,t,r,un,n),Gt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return zt=Qt(zt,e,t,n,r,i),!0;case"dragenter":return Bt=Qt(Bt,e,t,n,r,i),!0;case"mouseover":return $t=Qt($t,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return qt.set(s,Qt(qt.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ht.set(s,Qt(Ht.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Gt(e,r),4&t&&-1<Wt.indexOf(e)){for(;null!==i;){var s=Ri(i);if(null!==s&&Lt(s),null===(s=ln(e,t,n,r))&&ri(e,t,r,un,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else ri(e,t,r,null,n)}}var un=null;function ln(e,t,n,r){if(un=null,null!==(e=Di(e=Le(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return un=e,null}function cn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ht()){case dt:return 1;case ft:return 4;case pt:case mt:return 16;case gt:return 536870912;default:return 16}default:return 16}}var hn=null,dn=null,fn=null;function pn(){if(fn)return fn;var e,t,n=dn,r=n.length,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[s-t];t++);return fn=i.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function yn(){return!1}function vn(e){function t(t,n,r,i,s){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?gn:yn,this.isPropagationStopped=yn,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var bn,wn,En,kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=vn(kn),_n=X({},kn,{view:0,detail:0}),Tn=vn(_n),In=X({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&"mousemove"===e.type?(bn=e.screenX-En.screenX,wn=e.screenY-En.screenY):wn=bn=0,En=e),bn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Cn=vn(In),Nn=vn(X({},In,{dataTransfer:0})),xn=vn(X({},_n,{relatedTarget:0})),An=vn(X({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Dn=X({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rn=vn(Dn),On=vn(X({},kn,{data:0})),Ln={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Mn[e])&&!!t[e]}function Un(){return Fn}var Vn=X({},_n,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Pn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jn=vn(Vn),zn=vn(X({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Bn=vn(X({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),$n=vn(X({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),qn=X({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hn=vn(qn),Kn=[9,13,27,32],Wn=S&&"CompositionEvent"in window,Gn=null;S&&"documentMode"in document&&(Gn=document.documentMode);var Qn=S&&"TextEvent"in window&&!Gn,Xn=S&&(!Wn||Gn&&8<Gn&&11>=Gn),Yn=String.fromCharCode(32),Jn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==Kn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function ir(e,t,n,r){Ve(r),0<(t=si(t,"onChange")).length&&(n=new Sn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,or=null;function ar(e){Yr(e,0)}function ur(e){if(oe(Oi(e)))return e}function lr(e,t){if("change"===e)return t}var cr=!1;if(S){var hr;if(S){var dr="oninput"in document;if(!dr){var fr=document.createElement("div");fr.setAttribute("oninput","return;"),dr="function"==typeof fr.oninput}hr=dr}else hr=!1;cr=hr&&(!document.documentMode||9<document.documentMode)}function pr(){sr&&(sr.detachEvent("onpropertychange",mr),or=sr=null)}function mr(e){if("value"===e.propertyName&&ur(or)){var t=[];ir(t,or,e,Le(e)),qe(ar,t)}}function gr(e,t,n){"focusin"===e?(pr(),or=n,(sr=t).attachEvent("onpropertychange",mr)):"focusout"===e&&pr()}function yr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return ur(or)}function vr(e,t){if("click"===e)return ur(t)}function br(e,t){if("input"===e||"change"===e)return ur(t)}var wr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function Er(e,t){if(wr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sr(e,t){var n,r=kr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=kr(r)}}function _r(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?_r(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Tr(){for(var e=window,t=ae();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=ae((e=t.contentWindow).document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Cr(e){var t=Tr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_r(n.ownerDocument.documentElement,n)){if(null!==r&&Ir(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Sr(n,s);var o=Sr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nr=S&&"documentMode"in document&&11>=document.documentMode,xr=null,Ar=null,Dr=null,Rr=!1;function Or(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Rr||null==xr||xr!==ae(r)||("selectionStart"in(r=xr)&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Dr&&Er(Dr,r)||(Dr=r,0<(r=si(Ar,"onSelect")).length&&(t=new Sn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xr)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:Lr("Animation","AnimationEnd"),animationiteration:Lr("Animation","AnimationIteration"),animationstart:Lr("Animation","AnimationStart"),transitionend:Lr("Transition","TransitionEnd")},Mr={},Fr={};function Ur(e){if(Mr[e])return Mr[e];if(!Pr[e])return e;var t,n=Pr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Fr)return Mr[e]=n[t];return e}S&&(Fr=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);var Vr=Ur("animationend"),jr=Ur("animationiteration"),zr=Ur("animationstart"),Br=Ur("transitionend"),$r=new Map,qr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(e,t){$r.set(e,t),E(t,[e])}for(var Kr=0;Kr<qr.length;Kr++){var Wr=qr[Kr];Hr(Wr.toLowerCase(),"on"+(Wr[0].toUpperCase()+Wr.slice(1)))}Hr(Vr,"onAnimationEnd"),Hr(jr,"onAnimationIteration"),Hr(zr,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(Br,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function Xr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,o,a,u){if(et.apply(this,arguments),Qe){if(!Qe)throw Error(v(198));var l=Xe;Qe=!1,Xe=null,Ye||(Ye=!0,Je=l)}}(r,t,void 0,e),e.currentTarget=null}function Yr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Xr(i,a,l),s=u}else for(o=0;o<r.length;o++){if(u=(a=r[o]).instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Xr(i,a,l),s=u}}}if(Ye)throw e=Je,Ye=!1,Je=null,e}function Jr(e,t){var n=t[Ni];void 0===n&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(ni(t,e,2,!1),n.add(r))}function Zr(e,t,n){var r=0;t&&(r|=4),ni(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[ei]){e[ei]=!0,b.forEach((function(t){"selectionchange"!==t&&(Qr.has(t)||Zr(t,!1,e),Zr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ei]||(t[ei]=!0,Zr("selectionchange",!1,t))}}function ni(e,t,n,r){switch(cn(t)){case 1:var i=sn;break;case 4:i=on;break;default:i=an}n=i.bind(null,t,n,e),i=void 0,!Ke||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,i){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var u=o.tag;if((3===u||4===u)&&((u=o.stateNode.containerInfo)===i||8===u.nodeType&&u.parentNode===i))return;o=o.return}for(;null!==a;){if(null===(o=Di(a)))return;if(5===(u=o.tag)||6===u){r=s=o;continue e}a=a.parentNode}}r=r.return}qe((function(){var r=s,i=Le(n),o=[];e:{var a=$r.get(e);if(void 0!==a){var u=Sn,l=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":u=jn;break;case"focusin":l="focus",u=xn;break;case"focusout":l="blur",u=xn;break;case"beforeblur":case"afterblur":u=xn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=Nn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=Bn;break;case Vr:case jr:case zr:u=An;break;case Br:u=$n;break;case"scroll":u=Tn;break;case"wheel":u=Hn;break;case"copy":case"cut":case"paste":u=Rn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=zn}var c=0!=(4&t),h=!c&&"scroll"===e,d=c?null!==a?a+"Capture":null:a;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=He(p,d))&&c.push(ii(p,m,f)))),h)break;p=p.return}0<c.length&&(a=new u(a,l,null,n,i),o.push({event:a,listeners:c}))}}if(0==(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===Oe||!(l=n.relatedTarget||n.fromElement)||!Di(l)&&!l[Ci])&&(u||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,u?(u=r,null!==(l=(l=n.relatedTarget||n.toElement)?Di(l):null)&&(l!==(h=tt(l))||5!==l.tag&&6!==l.tag)&&(l=null)):(u=null,l=r),u!==l)){if(c=Cn,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=zn,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==u?a:Oi(u),f=null==l?a:Oi(l),(a=new c(m,p+"leave",u,n,i)).target=h,a.relatedTarget=f,m=null,Di(i)===r&&((c=new c(d,p+"enter",l,n,i)).target=f,c.relatedTarget=h,m=c),h=m,u&&l)e:{for(d=l,p=0,f=c=u;f;f=oi(f))p++;for(f=0,m=d;m;m=oi(m))f++;for(;0<p-f;)c=oi(c),p--;for(;0<f-p;)d=oi(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=oi(c),d=oi(d)}c=null}else c=null;null!==u&&ai(o,a,u,c,!1),null!==l&&null!==h&&ai(o,h,l,c,!0)}if("select"===(u=(a=r?Oi(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===u&&"file"===a.type)var g=lr;else if(rr(a))if(cr)g=br;else{g=yr;var y=gr}else(u=a.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=vr);switch(g&&(g=g(e,r))?ir(o,g,n,i):(y&&y(e,a,r),"focusout"===e&&(y=a._wrapperState)&&y.controlled&&"number"===a.type&&fe(a,"number",a.value)),y=r?Oi(r):window,e){case"focusin":(rr(y)||"true"===y.contentEditable)&&(xr=y,Ar=r,Dr=null);break;case"focusout":Dr=Ar=xr=null;break;case"mousedown":Rr=!0;break;case"contextmenu":case"mouseup":case"dragend":Rr=!1,Or(o,n,i);break;case"selectionchange":if(Nr)break;case"keydown":case"keyup":Or(o,n,i)}var v;if(Wn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else tr?Zn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Xn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==b?"onCompositionEnd"===b&&tr&&(v=pn()):(dn="value"in(hn=i)?hn.value:hn.textContent,tr=!0)),0<(y=si(r,b)).length&&(b=new On(b,e,null,n,i),o.push({event:b,listeners:y}),v?b.data=v:null!==(v=er(n))&&(b.data=v))),(v=Qn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Jn=!0,Yn);case"textInput":return(e=t.data)===Yn&&Jn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!Wn&&Zn(e,t)?(e=pn(),fn=dn=hn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=si(r,"onBeforeInput")).length&&(i=new On("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=v))}Yr(o,t)}))}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function si(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=He(e,n))&&r.unshift(ii(e,s,i)),null!=(s=He(e,t))&&r.push(ii(e,s,i))),e=e.return}return r}function oi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function ai(e,t,n,r,i){for(var s=t._reactName,o=[];null!==n&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(null!==u&&u===r)break;5===a.tag&&null!==l&&(a=l,i?null!=(u=He(n,s))&&o.unshift(ii(n,u,a)):i||null!=(u=He(n,s))&&o.push(ii(n,u,a))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var ui=/\r\n?/g,li=/\u0000|\uFFFD/g;function ci(e){return("string"==typeof e?e:""+e).replace(ui,"\n").replace(li,"")}function hi(e,t,n){if(t=ci(t),ci(e)!==t&&n)throw Error(v(425))}function di(){}var fi=null,pi=null;function mi(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var gi="function"==typeof setTimeout?setTimeout:void 0,yi="function"==typeof clearTimeout?clearTimeout:void 0,vi="function"==typeof Promise?Promise:void 0,bi="function"==typeof queueMicrotask?queueMicrotask:void 0!==vi?function(e){return vi.resolve(null).then(e).catch(wi)}:gi;function wi(e){setTimeout((function(){throw e}))}function Ei(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);tn(t)}function ki(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function Si(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var _i=Math.random().toString(36).slice(2),Ti="__reactFiber$"+_i,Ii="__reactProps$"+_i,Ci="__reactContainer$"+_i,Ni="__reactEvents$"+_i,xi="__reactListeners$"+_i,Ai="__reactHandles$"+_i;function Di(e){var t=e[Ti];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ci]||n[Ti]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Si(e);null!==e;){if(n=e[Ti])return n;e=Si(e)}return t}n=(e=n).parentNode}return null}function Ri(e){return!(e=e[Ti]||e[Ci])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Oi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(v(33))}function Li(e){return e[Ii]||null}var Pi=[],Mi=-1;function Fi(e){return{current:e}}function Ui(e){0>Mi||(e.current=Pi[Mi],Pi[Mi]=null,Mi--)}function Vi(e,t){Mi++,Pi[Mi]=e.current,e.current=t}var ji={},zi=Fi(ji),Bi=Fi(!1),$i=ji;function qi(e,t){var n=e.type.contextTypes;if(!n)return ji;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Hi(e){return null!=(e=e.childContextTypes)}function Ki(){Ui(Bi),Ui(zi)}function Wi(e,t,n){if(zi.current!==ji)throw Error(v(168));Vi(zi,t),Vi(Bi,n)}function Gi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(v(108,ne(e)||"Unknown",i));return X({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ji,$i=zi.current,Vi(zi,e),Vi(Bi,Bi.current),!0}function Xi(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=Gi(e,t,$i),r.__reactInternalMemoizedMergedChildContext=e,Ui(Bi),Ui(zi),Vi(zi,e)):Ui(Bi),Vi(Bi,n)}var Yi=null,Ji=!1,Zi=!1;function es(e){null===Yi?Yi=[e]:Yi.push(e)}function ts(){if(!Zi&&null!==Yi){Zi=!0;var e=0,t=Rt;try{var n=Yi;for(Rt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Yi=null,Ji=!1}catch(t){throw null!==Yi&&(Yi=Yi.slice(e+1)),ot(dt,ts),t}finally{Rt=t,Zi=!1}}return null}var ns=[],rs=0,is=null,ss=0,os=[],as=0,us=null,ls=1,cs="";function hs(e,t){ns[rs++]=ss,ns[rs++]=is,is=e,ss=t}function ds(e,t,n){os[as++]=ls,os[as++]=cs,os[as++]=us,us=e;var r=ls;e=cs;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ls=1<<32-bt(t)+i|n<<i|r,cs=s+e}else ls=1<<s|n<<i|r,cs=e}function fs(e){null!==e.return&&(hs(e,1),ds(e,1,0))}function ps(e){for(;e===is;)is=ns[--rs],ns[rs]=null,ss=ns[--rs],ns[rs]=null;for(;e===us;)us=os[--as],os[as]=null,cs=os[--as],os[as]=null,ls=os[--as],os[as]=null}var ms=null,gs=null,ys=!1,vs=null;function bs(e,t){var n=ql(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ws(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ms=e,gs=ki(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ms=e,gs=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==us?{id:ls,overflow:cs}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=ql(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ms=e,gs=null,!0);default:return!1}}function Es(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function ks(e){if(ys){var t=gs;if(t){var n=t;if(!ws(e,t)){if(Es(e))throw Error(v(418));t=ki(n.nextSibling);var r=ms;t&&ws(e,t)?bs(r,n):(e.flags=-4097&e.flags|2,ys=!1,ms=e)}}else{if(Es(e))throw Error(v(418));e.flags=-4097&e.flags|2,ys=!1,ms=e}}}function Ss(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ms=e}function _s(e){if(e!==ms)return!1;if(!ys)return Ss(e),ys=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!mi(e.type,e.memoizedProps)),t&&(t=gs)){if(Es(e))throw Ts(),Error(v(418));for(;t;)bs(e,t),t=ki(t.nextSibling)}if(Ss(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){gs=ki(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}gs=null}}else gs=ms?ki(e.stateNode.nextSibling):null;return!0}function Ts(){for(var e=gs;e;)e=ki(e.nextSibling)}function Is(){gs=ms=null,ys=!1}function Cs(e){null===vs?vs=[e]:vs.push(e)}var Ns=O.ReactCurrentBatchConfig;function xs(e,t){if(e&&e.defaultProps){for(var n in t=X({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var As=Fi(null),Ds=null,Rs=null,Os=null;function Ls(){Os=Rs=Ds=null}function Ps(e){var t=As.current;Ui(As),e._currentValue=t}function Ms(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fs(e,t){Ds=e,Os=Rs=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Oa=!0),e.firstContext=null)}function Us(e){var t=e._currentValue;if(Os!==e)if(e={context:e,memoizedValue:t,next:null},null===Rs){if(null===Ds)throw Error(v(308));Rs=e,Ds.dependencies={lanes:0,firstContext:e}}else Rs=Rs.next=e;return t}var Vs=null;function js(e){null===Vs?Vs=[e]:Vs.push(e)}function zs(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,js(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bs(e,r)}function Bs(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var $s=!1;function qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ks(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ws(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&zu)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bs(e,n)}return null===(i=r.interleaved)?(t.next=t,js(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bs(e,n)}function Gs(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Dt(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=o:s=s.next=o,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xs(e,t,n,r){var i=e.updateQueue;$s=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var u=a,l=u.next;u.next=null,null===o?s=l:o.next=l,o=u;var c=e.alternate;null!==c&&((a=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===a?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(null!==s){var h=i.baseState;for(o=0,c=l=u=null,a=s;;){var d=a.lane,f=a.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=X({},h,d);break e;case 2:$s=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===c?(l=c=f,u=h):c=c.next=f,o|=d;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(d=a).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);Qu|=o,e.lanes=o,e.memoizedState=h}}function Ys(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(v(191,i));i.call(r)}}}var Js=(new g.Component).refs;function Zs(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:X({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fl(),i=pl(e),s=Ks(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=Ws(e,s,i))&&(ml(t,e,i,r),Gs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fl(),i=pl(e),s=Ks(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=Ws(e,s,i))&&(ml(t,e,i,r),Gs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fl(),r=pl(e),i=Ks(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Ws(e,i,r))&&(ml(t,e,r,n),Gs(t,e,r))}};function to(e,t,n,r,i,s,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,o):!t.prototype||!t.prototype.isPureReactComponent||(!Er(n,r)||!Er(i,s))}function no(e,t,n){var r=!1,i=ji,s=t.contextType;return"object"==typeof s&&null!==s?s=Us(s):(i=Hi(t)?$i:zi.current,s=(r=null!=(r=t.contextTypes))?qi(e,i):ji),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ro(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function io(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Js,qs(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=Us(s):(s=Hi(t)?$i:zi.current,i.context=qi(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(Zs(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&eo.enqueueReplaceState(i,i.state,null),Xs(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function so(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:(t=function(e){var t=i.refs;t===Js&&(t=i.refs={}),null===e?delete t[s]:t[s]=e},t._stringRef=s,t)}if("string"!=typeof e)throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ao(e){return(0,e._init)(e._payload)}function uo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Kl(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Xl(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var s=n.type;return s===M?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===H&&ao(s)===t.type)?((r=i(t,n.props)).ref=so(e,t,n),r.return=e,r):((r=Wl(n.type,n.key,n.props,null,e.mode,r)).ref=so(e,t,n),r.return=e,r)}function l(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Yl(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Gl(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Xl(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case L:return(n=Wl(t.type,t.key,t.props,null,e.mode,n)).ref=so(e,null,t),n.return=e,n;case P:return(t=Yl(t,e.mode,n)).return=e,t;case H:return h(e,(0,t._init)(t._payload),n)}if(pe(t)||G(t))return(t=Gl(t,e.mode,n,null)).return=e,t;oo(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case L:return n.key===i?u(e,t,n,r):null;case P:return n.key===i?l(e,t,n,r):null;case H:return d(e,t,(i=n._init)(n._payload),r)}if(pe(n)||G(n))return null!==i?null:c(e,t,n,r,null);oo(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case L:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case P:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case H:return f(e,t,n,(0,r._init)(r._payload),i)}if(pe(r)||G(r))return c(t,e=e.get(n)||null,r,i,null);oo(t,r)}return null}function p(i,o,a,u){for(var l=null,c=null,p=o,m=o=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,a[m],u);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),o=s(y,o,m),null===c?l=y:c.sibling=y,c=y,p=g}if(m===a.length)return n(i,p),ys&&hs(i,m),l;if(null===p){for(;m<a.length;m++)null!==(p=h(i,a[m],u))&&(o=s(p,o,m),null===c?l=p:c.sibling=p,c=p);return ys&&hs(i,m),l}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],u))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=s(g,o,m),null===c?l=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),ys&&hs(i,m),l}function m(i,o,a,u){var l=G(a);if("function"!=typeof l)throw Error(v(150));if(null==(a=l.call(a)))throw Error(v(151));for(var c=l=null,p=o,m=o=0,g=null,y=a.next();null!==p&&!y.done;m++,y=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var b=d(i,p,y.value,u);if(null===b){null===p&&(p=g);break}e&&p&&null===b.alternate&&t(i,p),o=s(b,o,m),null===c?l=b:c.sibling=b,c=b,p=g}if(y.done)return n(i,p),ys&&hs(i,m),l;if(null===p){for(;!y.done;m++,y=a.next())null!==(y=h(i,y.value,u))&&(o=s(y,o,m),null===c?l=y:c.sibling=y,c=y);return ys&&hs(i,m),l}for(p=r(i,p);!y.done;m++,y=a.next())null!==(y=f(p,i,m,y.value,u))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),o=s(y,o,m),null===c?l=y:c.sibling=y,c=y);return e&&p.forEach((function(e){return t(i,e)})),ys&&hs(i,m),l}return function e(r,s,a,u){if("object"==typeof a&&null!==a&&a.type===M&&null===a.key&&(a=a.props.children),"object"==typeof a&&null!==a){switch(a.$$typeof){case L:e:{for(var l=a.key,c=s;null!==c;){if(c.key===l){if((l=a.type)===M){if(7===c.tag){n(r,c.sibling),(s=i(c,a.props.children)).return=r,r=s;break e}}else if(c.elementType===l||"object"==typeof l&&null!==l&&l.$$typeof===H&&ao(l)===c.type){n(r,c.sibling),(s=i(c,a.props)).ref=so(r,c,a),s.return=r,r=s;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===M?((s=Gl(a.props.children,r.mode,u,a.key)).return=r,r=s):((u=Wl(a.type,a.key,a.props,null,r.mode,u)).ref=so(r,s,a),u.return=r,r=u)}return o(r);case P:e:{for(c=a.key;null!==s;){if(s.key===c){if(4===s.tag&&s.stateNode.containerInfo===a.containerInfo&&s.stateNode.implementation===a.implementation){n(r,s.sibling),(s=i(s,a.children||[])).return=r,r=s;break e}n(r,s);break}t(r,s),s=s.sibling}(s=Yl(a,r.mode,u)).return=r,r=s}return o(r);case H:return e(r,s,(c=a._init)(a._payload),u)}if(pe(a))return p(r,s,a,u);if(G(a))return m(r,s,a,u);oo(r,a)}return"string"==typeof a&&""!==a||"number"==typeof a?(a=""+a,null!==s&&6===s.tag?(n(r,s.sibling),(s=i(s,a)).return=r,r=s):(n(r,s),(s=Xl(a,r.mode,u)).return=r,r=s),o(r)):n(r,s)}}var lo=uo(!0),co=uo(!1),ho={},fo=Fi(ho),po=Fi(ho),mo=Fi(ho);function go(e){if(e===ho)throw Error(v(174));return e}function yo(e,t){switch(Vi(mo,t),Vi(po,e),Vi(fo,ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ee(null,"");break;default:t=Ee(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ui(fo),Vi(fo,t)}function vo(){Ui(fo),Ui(po),Ui(mo)}function bo(e){go(mo.current);var t=go(fo.current),n=Ee(t,e.type);t!==n&&(Vi(po,e),Vi(fo,n))}function wo(e){po.current===e&&(Ui(fo),Ui(po))}var Eo=Fi(0);function ko(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var So=[];function _o(){for(var e=0;e<So.length;e++)So[e]._workInProgressVersionPrimary=null;So.length=0}var To=O.ReactCurrentDispatcher,Io=O.ReactCurrentBatchConfig,Co=0,No=null,xo=null,Ao=null,Do=!1,Ro=!1,Oo=0,Lo=0;function Po(){throw Error(v(321))}function Mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function Fo(e,t,n,r,i,s){if(Co=s,No=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=null===e||null===e.memoizedState?wa:Ea,e=n(r,i),Ro){s=0;do{if(Ro=!1,Oo=0,25<=s)throw Error(v(301));s+=1,Ao=xo=null,t.updateQueue=null,To.current=ka,e=n(r,i)}while(Ro)}if(To.current=ba,t=null!==xo&&null!==xo.next,Co=0,Ao=xo=No=null,Do=!1,t)throw Error(v(300));return e}function Uo(){var e=0!==Oo;return Oo=0,e}function Vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Ao?No.memoizedState=Ao=e:Ao=Ao.next=e,Ao}function jo(){if(null===xo){var e=No.alternate;e=null!==e?e.memoizedState:null}else e=xo.next;var t=null===Ao?No.memoizedState:Ao.next;if(null!==t)Ao=t,xo=e;else{if(null===e)throw Error(v(310));e={memoizedState:(xo=e).memoizedState,baseState:xo.baseState,baseQueue:xo.baseQueue,queue:xo.queue,next:null},null===Ao?No.memoizedState=Ao=e:Ao=Ao.next=e}return Ao}function zo(e,t){return"function"==typeof t?t(e):t}function Bo(e){var t=jo(),n=t.queue;if(null===n)throw Error(v(311));n.lastRenderedReducer=e;var r=xo,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((Co&c)===c)null!==u&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};null===u?(a=u=h,o=r):u=u.next=h,No.lanes|=c,Qu|=c}l=l.next}while(null!==l&&l!==s);null===u?o=r:u.next=a,wr(r,t.memoizedState)||(Oa=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,No.lanes|=s,Qu|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $o(e){var t=jo(),n=t.queue;if(null===n)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{s=e(s,o.action),o=o.next}while(o!==i);wr(s,t.memoizedState)||(Oa=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function qo(){}function Ho(e,t){var n=No,r=jo(),i=t(),s=!wr(r.memoizedState,i);if(s&&(r.memoizedState=i,Oa=!0),r=r.queue,ra(Go.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==Ao&&1&Ao.memoizedState.tag){if(n.flags|=2048,Jo(9,Wo.bind(null,n,r,i,t),void 0,null),null===Bu)throw Error(v(349));0!=(30&Co)||Ko(n,t,i)}return i}function Ko(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=No.updateQueue)?(t={lastEffect:null,stores:null},No.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Qo(t)&&Xo(e)}function Go(e,t,n){return n((function(){Qo(t)&&Xo(e)}))}function Qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch(e){return!0}}function Xo(e){var t=Bs(e,1);null!==t&&ml(t,e,1,-1)}function Yo(e){var t=Vo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t.queue=e,e=e.dispatch=ma.bind(null,No,e),[t.memoizedState,e]}function Jo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=No.updateQueue)?(t={lastEffect:null,stores:null},No.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zo(){return jo().memoizedState}function ea(e,t,n,r){var i=Vo();No.flags|=e,i.memoizedState=Jo(1|t,n,void 0,void 0===r?null:r)}function ta(e,t,n,r){var i=jo();r=void 0===r?null:r;var s=void 0;if(null!==xo){var o=xo.memoizedState;if(s=o.destroy,null!==r&&Mo(r,o.deps))return void(i.memoizedState=Jo(t,n,s,r))}No.flags|=e,i.memoizedState=Jo(1|t,n,s,r)}function na(e,t){return ea(8390656,8,e,t)}function ra(e,t){return ta(2048,8,e,t)}function ia(e,t){return ta(4,2,e,t)}function sa(e,t){return ta(4,4,e,t)}function oa(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function aa(e,t,n){return n=null!=n?n.concat([e]):null,ta(4,4,oa.bind(null,t,e),n)}function ua(){}function la(e,t){var n=jo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ca(e,t){var n=jo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ha(e,t,n){return 0==(21&Co)?(e.baseState&&(e.baseState=!1,Oa=!0),e.memoizedState=n):(wr(n,t)||(n=Nt(),No.lanes|=n,Qu|=n,e.baseState=!0),t)}function da(e,t){var n=Rt;Rt=0!==n&&4>n?n:4,e(!0);var r=Io.transition;Io.transition={};try{e(!1),t()}finally{Rt=n,Io.transition=r}}function fa(){return jo().memoizedState}function pa(e,t,n){var r=pl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ga(e))ya(t,n);else if(null!==(n=zs(e,t,n,r))){ml(n,e,r,fl()),va(n,t,r)}}function ma(e,t,n){var r=pl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ga(e))ya(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wr(a,o)){var u=t.interleaved;return null===u?(i.next=i,js(t)):(i.next=u.next,u.next=i),void(t.interleaved=i)}}catch(e){}null!==(n=zs(e,t,i,r))&&(ml(n,e,r,i=fl()),va(n,t,r))}}function ga(e){var t=e.alternate;return e===No||null!==t&&t===No}function ya(e,t){Ro=Do=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function va(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Dt(e,n)}}var ba={readContext:Us,useCallback:Po,useContext:Po,useEffect:Po,useImperativeHandle:Po,useInsertionEffect:Po,useLayoutEffect:Po,useMemo:Po,useReducer:Po,useRef:Po,useState:Po,useDebugValue:Po,useDeferredValue:Po,useTransition:Po,useMutableSource:Po,useSyncExternalStore:Po,useId:Po,unstable_isNewReconciler:!1},wa={readContext:Us,useCallback:function(e,t){return Vo().memoizedState=[e,void 0===t?null:t],e},useContext:Us,useEffect:na,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ea(4194308,4,oa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var n=Vo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pa.bind(null,No,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Vo().memoizedState=e},useState:Yo,useDebugValue:ua,useDeferredValue:function(e){return Vo().memoizedState=e},useTransition:function(){var e=Yo(!1),t=e[0];return e=da.bind(null,e[1]),Vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=No,i=Vo();if(ys){if(void 0===n)throw Error(v(407));n=n()}else{if(n=t(),null===Bu)throw Error(v(349));0!=(30&Co)||Ko(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,na(Go.bind(null,r,s,e),[e]),r.flags|=2048,Jo(9,Wo.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Vo(),t=Bu.identifierPrefix;if(ys){var n=cs;t=":"+t+"R"+(n=(ls&~(1<<32-bt(ls)-1)).toString(32)+n),0<(n=Oo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=Lo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ea={readContext:Us,useCallback:la,useContext:Us,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:sa,useMemo:ca,useReducer:Bo,useRef:Zo,useState:function(){return Bo(zo)},useDebugValue:ua,useDeferredValue:function(e){return ha(jo(),xo.memoizedState,e)},useTransition:function(){return[Bo(zo)[0],jo().memoizedState]},useMutableSource:qo,useSyncExternalStore:Ho,useId:fa,unstable_isNewReconciler:!1},ka={readContext:Us,useCallback:la,useContext:Us,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:sa,useMemo:ca,useReducer:$o,useRef:Zo,useState:function(){return $o(zo)},useDebugValue:ua,useDeferredValue:function(e){var t=jo();return null===xo?t.memoizedState=e:ha(t,xo.memoizedState,e)},useTransition:function(){return[$o(zo)[0],jo().memoizedState]},useMutableSource:qo,useSyncExternalStore:Ho,useId:fa,unstable_isNewReconciler:!1};function Sa(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function _a(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function Ta(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var Ia="function"==typeof WeakMap?WeakMap:Map;function Ca(e,t,n){(n=Ks(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,il=r),Ta(0,t)},n}function Na(e,t,n){(n=Ks(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ta(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){Ta(0,t),"function"!=typeof r&&(null===sl?sl=new Set([this]):sl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function xa(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Ia;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ul.bind(null,e,t,n),t.then(e,e))}function Aa(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Da(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ks(-1,1)).tag=2,Ws(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ra=O.ReactCurrentOwner,Oa=!1;function La(e,t,n,r){t.child=null===e?co(t,null,n,r):lo(t,e.child,n,r)}function Pa(e,t,n,r,i){n=n.render;var s=t.ref;return Fs(t,i),r=Fo(e,t,n,r,s,i),n=Uo(),null===e||Oa?(ys&&n&&fs(t),t.flags|=1,La(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ru(e,t,i))}function Ma(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Hl(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Wl(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Fa(e,t,s,r,i))}if(s=e.child,0==(e.lanes&i)){var o=s.memoizedProps;if((n=null!==(n=n.compare)?n:Er)(o,r)&&e.ref===t.ref)return ru(e,t,i)}return t.flags|=1,(e=Kl(s,r)).ref=t.ref,e.return=t,t.child=e}function Fa(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(Er(s,r)&&e.ref===t.ref){if(Oa=!1,t.pendingProps=r=s,0==(e.lanes&i))return t.lanes=e.lanes,ru(e,t,i);0!=(131072&e.flags)&&(Oa=!0)}}return ja(e,t,n,r,i)}function Ua(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vi(Ku,Hu),Hu|=n;else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Vi(Ku,Hu),Hu|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,Vi(Ku,Hu),Hu|=r}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,Vi(Ku,Hu),Hu|=r;return La(e,t,i,n),t.child}function Va(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ja(e,t,n,r,i){var s=Hi(n)?$i:zi.current;return s=qi(t,s),Fs(t,i),n=Fo(e,t,n,r,s,i),r=Uo(),null===e||Oa?(ys&&r&&fs(t),t.flags|=1,La(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ru(e,t,i))}function za(e,t,n,r,i){if(Hi(n)){var s=!0;Qi(t)}else s=!1;if(Fs(t,i),null===t.stateNode)nu(e,t),no(t,n,r),io(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,l=n.contextType;"object"==typeof l&&null!==l?l=Us(l):l=qi(t,l=Hi(n)?$i:zi.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;h||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==r||u!==l)&&ro(t,o,r,l),$s=!1;var d=t.memoizedState;o.state=d,Xs(t,r,o,i),u=t.memoizedState,a!==r||d!==u||Bi.current||$s?("function"==typeof c&&(Zs(t,n,c,r),u=t.memoizedState),(a=$s||to(t,n,a,r,d,u,l))?(h||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Hs(e,t),a=t.memoizedProps,l=t.type===t.elementType?a:xs(t.type,a),o.props=l,h=t.pendingProps,d=o.context,"object"==typeof(u=n.contextType)&&null!==u?u=Us(u):u=qi(t,u=Hi(n)?$i:zi.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==h||d!==u)&&ro(t,o,r,u),$s=!1,d=t.memoizedState,o.state=d,Xs(t,r,o,i);var p=t.memoizedState;a!==h||d!==p||Bi.current||$s?("function"==typeof f&&(Zs(t,n,f,r),p=t.memoizedState),(l=$s||to(t,n,l,r,d,p,u)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,u),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,u)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=u,r=l):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Ba(e,t,n,r,s,i)}function Ba(e,t,n,r,i,s){Va(e,t);var o=0!=(128&t.flags);if(!r&&!o)return i&&Xi(t,n,!1),ru(e,t,s);r=t.stateNode,Ra.current=t;var a=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=lo(t,e.child,null,s),t.child=lo(t,null,a,s)):La(e,t,a,s),t.memoizedState=r.state,i&&Xi(t,n,!0),t.child}function $a(e){var t=e.stateNode;t.pendingContext?Wi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Wi(0,t.context,!1),yo(e,t.containerInfo)}function qa(e,t,n,r,i){return Is(),Cs(i),t.flags|=256,La(e,t,n,r),t.child}var Ha,Ka,Wa,Ga={dehydrated:null,treeContext:null,retryLane:0};function Qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xa(e,t,n){var r,i=t.pendingProps,s=Eo.current,o=!1,a=0!=(128&t.flags);if((r=a)||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Vi(Eo,1&s),null===e)return ks(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:"hidden",children:a},0==(1&i)&&null!==o?(o.childLanes=0,o.pendingProps=a):o=Ql(a,i,0,null),e=Gl(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Qa(n),t.memoizedState=Ga,e):Ya(t,a));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,o){if(n)return 256&t.flags?(t.flags&=-257,Ja(e,t,o,r=_a(Error(v(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ql({mode:"visible",children:r.children},i,0,null),(s=Gl(s,i,o,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,0!=(1&t.mode)&&lo(t,e.child,null,o),t.child.memoizedState=Qa(o),t.memoizedState=Ga,s);if(0==(1&t.mode))return Ja(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var a=r.dgst;return r=a,Ja(e,t,o,r=_a(s=Error(v(419)),r,void 0))}if(a=0!=(o&e.childLanes),Oa||a){if(null!==(r=Bu)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|o))?0:i)&&i!==s.retryLane&&(s.retryLane=i,Bs(e,i),ml(r,e,i,-1))}return Nl(),Ja(e,t,o,r=_a(Error(v(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=jl.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,gs=ki(i.nextSibling),ms=t,ys=!0,vs=null,null!==e&&(os[as++]=ls,os[as++]=cs,os[as++]=us,ls=e.id,cs=e.overflow,us=t),(t=Ya(t,r.children)).flags|=4096,t)}(e,t,a,i,r,s,n);if(o){o=i.fallback,a=t.mode,r=(s=e.child).sibling;var u={mode:"hidden",children:i.children};return 0==(1&a)&&t.child!==s?((i=t.child).childLanes=0,i.pendingProps=u,t.deletions=null):(i=Kl(s,u)).subtreeFlags=14680064&s.subtreeFlags,null!==r?o=Kl(r,o):(o=Gl(o,a,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,a=null===(a=e.child.memoizedState)?Qa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ga,i}return e=(o=e.child).sibling,i=Kl(o,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ya(e,t){return(t=Ql({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ja(e,t,n,r){return null!==r&&Cs(r),lo(t,e.child,null,n),(e=Ya(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Za(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ms(e.return,t,n)}function eu(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tu(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(La(e,t,r.children,n),0!=(2&(r=Eo.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Za(e,n,t);else if(19===e.tag)Za(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Vi(Eo,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ko(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),eu(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ko(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}eu(t,!0,n,null,s);break;case"together":eu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nu(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ru(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Qu|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(v(153));if(null!==t.child){for(n=Kl(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Kl(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function iu(e,t){if(!ys)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function su(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ou(e,t,n){var r=t.pendingProps;switch(ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return su(t),null;case 1:case 17:return Hi(t.type)&&Ki(),su(t),null;case 3:return r=t.stateNode,vo(),Ui(Bi),Ui(zi),_o(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(_s(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==vs&&(bl(vs),vs=null))),su(t),null;case 5:wo(t);var i=go(mo.current);if(n=t.type,null!==e&&null!=t.stateNode)Ka(e,t,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(v(166));return su(t),null}if(e=go(fo.current),_s(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ti]=t,r[Ii]=s,e=0!=(1&t.mode),n){case"dialog":Jr("cancel",r),Jr("close",r);break;case"iframe":case"object":case"embed":Jr("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)Jr(Gr[i],r);break;case"source":Jr("error",r);break;case"img":case"image":case"link":Jr("error",r),Jr("load",r);break;case"details":Jr("toggle",r);break;case"input":le(r,s),Jr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Jr("invalid",r);break;case"textarea":ye(r,s),Jr("invalid",r)}for(var o in De(n,s),i=null,s)if(s.hasOwnProperty(o)){var a=s[o];"children"===o?"string"==typeof a?r.textContent!==a&&(!0!==s.suppressHydrationWarning&&hi(r.textContent,a,e),i=["children",a]):"number"==typeof a&&r.textContent!==""+a&&(!0!==s.suppressHydrationWarning&&hi(r.textContent,a,e),i=["children",""+a]):w.hasOwnProperty(o)&&null!=a&&"onScroll"===o&&Jr("scroll",r)}switch(n){case"input":se(r),de(r,s,!0);break;case"textarea":se(r),be(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=di)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=we(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ti]=t,e[Ii]=r,Ha(e,t),t.stateNode=e;e:{switch(o=Re(n,r),n){case"dialog":Jr("cancel",e),Jr("close",e),i=r;break;case"iframe":case"object":case"embed":Jr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)Jr(Gr[i],e);i=r;break;case"source":Jr("error",e),i=r;break;case"img":case"image":case"link":Jr("error",e),Jr("load",e),i=r;break;case"details":Jr("toggle",e),i=r;break;case"input":le(e,r),i=ue(e,r),Jr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),Jr("invalid",e);break;case"textarea":ye(e,r),i=ge(e,r),Jr("invalid",e)}for(s in De(n,i),a=i)if(a.hasOwnProperty(s)){var u=a[s];"style"===s?xe(e,u):"dangerouslySetInnerHTML"===s?null!=(u=u?u.__html:void 0)&&_e(e,u):"children"===s?"string"==typeof u?("textarea"!==n||""!==u)&&Te(e,u):"number"==typeof u&&Te(e,""+u):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(w.hasOwnProperty(s)?null!=u&&"onScroll"===s&&Jr("scroll",e):null!=u&&R(e,s,u,o))}switch(n){case"input":se(e),de(e,r,!1);break;case"textarea":se(e),be(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?me(e,!!r.multiple,s,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return su(t),null;case 6:if(e&&null!=t.stateNode)Wa(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(v(166));if(n=go(mo.current),go(fo.current),_s(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ti]=t,(s=r.nodeValue!==n)&&null!==(e=ms))switch(e.tag){case 3:hi(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&hi(r.nodeValue,n,0!=(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Ti]=t,t.stateNode=r}return su(t),null;case 13:if(Ui(Eo),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ys&&null!==gs&&0!=(1&t.mode)&&0==(128&t.flags))Ts(),Is(),t.flags|=98560,s=!1;else if(s=_s(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(v(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(v(317));s[Ti]=t}else Is(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;su(t),s=!1}else null!==vs&&(bl(vs),vs=null),s=!0;if(!s)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&Eo.current)?0===Wu&&(Wu=3):Nl())),null!==t.updateQueue&&(t.flags|=4),su(t),null);case 4:return vo(),null===e&&ti(t.stateNode.containerInfo),su(t),null;case 10:return Ps(t.type._context),su(t),null;case 19:if(Ui(Eo),null===(s=t.memoizedState))return su(t),null;if(r=0!=(128&t.flags),null===(o=s.rendering))if(r)iu(s,!1);else{if(0!==Wu||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=ko(e))){for(t.flags|=128,iu(s,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(o=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Vi(Eo,1&Eo.current|2),t.child}e=e.sibling}null!==s.tail&&ct()>tl&&(t.flags|=128,r=!0,iu(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ko(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),iu(s,!0),null===s.tail&&"hidden"===s.tailMode&&!o.alternate&&!ys)return su(t),null}else 2*ct()-s.renderingStartTime>tl&&1073741824!==n&&(t.flags|=128,r=!0,iu(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=s.last)?n.sibling=o:t.child=o,s.last=o)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ct(),t.sibling=null,n=Eo.current,Vi(Eo,r?1&n|2:1&n),t):(su(t),null);case 22:case 23:return _l(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Hu)&&(su(t),6&t.subtreeFlags&&(t.flags|=8192)):su(t),null;case 24:case 25:return null}throw Error(v(156,t.tag))}function au(e,t){switch(ps(t),t.tag){case 1:return Hi(t.type)&&Ki(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return vo(),Ui(Bi),Ui(zi),_o(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return wo(t),null;case 13:if(Ui(Eo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(v(340));Is()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ui(Eo),null;case 4:return vo(),null;case 10:return Ps(t.type._context),null;case 22:case 23:return _l(),null;default:return null}}Ha=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ka=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,go(fo.current);var s,o=null;switch(n){case"input":i=ue(e,i),r=ue(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=ge(e,i),r=ge(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=di)}for(l in De(n,r),n=null,i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&null!=i[l])if("style"===l){var a=i[l];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(w.hasOwnProperty(l)?o||(o=[]):(o=o||[]).push(l,null));for(l in r){var u=r[l];if(a=null!=i?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(null!=u||null!=a))if("style"===l)if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(l,n)),n=u;else"dangerouslySetInnerHTML"===l?(u=u?u.__html:void 0,a=a?a.__html:void 0,null!=u&&a!==u&&(o=o||[]).push(l,u)):"children"===l?"string"!=typeof u&&"number"!=typeof u||(o=o||[]).push(l,""+u):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(w.hasOwnProperty(l)?(null!=u&&"onScroll"===l&&Jr("scroll",e),o||a===u||(o=[])):(o=o||[]).push(l,u))}n&&(o=o||[]).push("style",n);var l=o;(t.updateQueue=l)&&(t.flags|=4)}},Wa=function(e,t,n,r){n!==r&&(t.flags|=4)};var uu=!1,lu=!1,cu="function"==typeof WeakSet?WeakSet:Set,hu=null;function du(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Fl(e,t,n)}else n.current=null}function fu(e,t,n){try{n()}catch(n){Fl(e,t,n)}}var pu=!1;function mu(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&fu(t,n,s)}i=i.next}while(i!==r)}}function gu(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yu(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function vu(e){var t=e.alternate;null!==t&&(e.alternate=null,vu(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Ti],delete t[Ii],delete t[Ni],delete t[xi],delete t[Ai])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bu(e){return 5===e.tag||3===e.tag||4===e.tag}function wu(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Eu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=di));else if(4!==r&&null!==(e=e.child))for(Eu(e,t,n),e=e.sibling;null!==e;)Eu(e,t,n),e=e.sibling}function ku(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(ku(e,t,n),e=e.sibling;null!==e;)ku(e,t,n),e=e.sibling}var Su=null,_u=!1;function Tu(e,t,n){for(n=n.child;null!==n;)Iu(e,t,n),n=n.sibling}function Iu(e,t,n){if(vt&&"function"==typeof vt.onCommitFiberUnmount)try{vt.onCommitFiberUnmount(yt,n)}catch(e){}switch(n.tag){case 5:lu||du(n,t);case 6:var r=Su,i=_u;Su=null,Tu(e,t,n),_u=i,null!==(Su=r)&&(_u?(e=Su,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):Su.removeChild(n.stateNode));break;case 18:null!==Su&&(_u?(e=Su,n=n.stateNode,8===e.nodeType?Ei(e.parentNode,n):1===e.nodeType&&Ei(e,n),tn(e)):Ei(Su,n.stateNode));break;case 4:r=Su,i=_u,Su=n.stateNode.containerInfo,_u=!0,Tu(e,t,n),Su=r,_u=i;break;case 0:case 11:case 14:case 15:if(!lu&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,void 0!==o&&(0!=(2&s)||0!=(4&s))&&fu(n,t,o),i=i.next}while(i!==r)}Tu(e,t,n);break;case 1:if(!lu&&(du(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Fl(n,t,e)}Tu(e,t,n);break;case 21:Tu(e,t,n);break;case 22:1&n.mode?(lu=(r=lu)||null!==n.memoizedState,Tu(e,t,n),lu=r):Tu(e,t,n);break;default:Tu(e,t,n)}}function Cu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new cu),t.forEach((function(t){var r=zl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Nu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;null!==a;){switch(a.tag){case 5:Su=a.stateNode,_u=!1;break e;case 3:case 4:Su=a.stateNode.containerInfo,_u=!0;break e}a=a.return}if(null===Su)throw Error(v(160));Iu(s,o,i),Su=null,_u=!1;var u=i.alternate;null!==u&&(u.return=null),i.return=null}catch(e){Fl(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)xu(t,e),t=t.sibling}function xu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nu(t,e),Au(e),4&r){try{mu(3,e,e.return),gu(3,e)}catch(t){Fl(e,e.return,t)}try{mu(5,e,e.return)}catch(t){Fl(e,e.return,t)}}break;case 1:Nu(t,e),Au(e),512&r&&null!==n&&du(n,n.return);break;case 5:if(Nu(t,e),Au(e),512&r&&null!==n&&du(n,n.return),32&e.flags){var i=e.stateNode;try{Te(i,"")}catch(t){Fl(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,o=null!==n?n.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===a&&"radio"===s.type&&null!=s.name&&ce(i,s),Re(a,o);var l=Re(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];"style"===c?xe(i,h):"dangerouslySetInnerHTML"===c?_e(i,h):"children"===c?Te(i,h):R(i,c,h,l)}switch(a){case"input":he(i,s);break;case"textarea":ve(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?me(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?me(i,!!s.multiple,s.defaultValue,!0):me(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ii]=s}catch(t){Fl(e,e.return,t)}}break;case 6:if(Nu(t,e),Au(e),4&r){if(null===e.stateNode)throw Error(v(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(t){Fl(e,e.return,t)}}break;case 3:if(Nu(t,e),Au(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){Fl(e,e.return,t)}break;case 4:default:Nu(t,e),Au(e);break;case 13:Nu(t,e),Au(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(el=ct())),4&r&&Cu(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(lu=(l=lu)||c,Nu(t,e),lu=l):Nu(t,e),Au(e),8192&r){if(l=null!==e.memoizedState,(e.stateNode.isHidden=l)&&!c&&0!=(1&e.mode))for(hu=e,c=e.child;null!==c;){for(h=hu=c;null!==hu;){switch(f=(d=hu).child,d.tag){case 0:case 11:case 14:case 15:mu(4,d,d.return);break;case 1:du(d,d.return);var p=d.stateNode;if("function"==typeof p.componentWillUnmount){r=d,n=d.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(e){Fl(r,n,e)}}break;case 5:du(d,d.return);break;case 22:if(null!==d.memoizedState){Lu(h);continue}}null!==f?(f.return=d,hu=f):Lu(h)}c=c.sibling}e:for(c=null,h=e;;){if(5===h.tag){if(null===c){c=h;try{i=h.stateNode,l?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(a=h.stateNode,o=null!=(u=h.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,a.style.display=Ne("display",o))}catch(t){Fl(e,e.return,t)}}}else if(6===h.tag){if(null===c)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(t){Fl(e,e.return,t)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nu(t,e),Au(e),4&r&&Cu(e);case 21:}}function Au(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(bu(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(Te(i,""),r.flags&=-33),ku(e,wu(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;Eu(e,wu(e),s);break;default:throw Error(v(161))}}catch(t){Fl(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Du(e,t,n){hu=e,Ru(e,t,n)}function Ru(e,t,n){for(var r=0!=(1&e.mode);null!==hu;){var i=hu,s=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||uu;if(!o){var a=i.alternate,u=null!==a&&null!==a.memoizedState||lu;a=uu;var l=lu;if(uu=o,(lu=u)&&!l)for(hu=i;null!==hu;)u=(o=hu).child,22===o.tag&&null!==o.memoizedState?Pu(i):null!==u?(u.return=o,hu=u):Pu(i);for(;null!==s;)hu=s,Ru(s,t,n),s=s.sibling;hu=i,uu=a,lu=l}Ou(e)}else 0!=(8772&i.subtreeFlags)&&null!==s?(s.return=i,hu=s):Ou(e)}}function Ou(e){for(;null!==hu;){var t=hu;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:lu||gu(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!lu)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xs(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Ys(t,s,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ys(t,o,n)}break;case 5:var a=t.stateNode;if(null===n&&4&t.flags){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var l=t.alternate;if(null!==l){var c=l.memoizedState;if(null!==c){var h=c.dehydrated;null!==h&&tn(h)}}}break;default:throw Error(v(163))}lu||512&t.flags&&yu(t)}catch(e){Fl(t,t.return,e)}}if(t===e){hu=null;break}if(null!==(n=t.sibling)){n.return=t.return,hu=n;break}hu=t.return}}function Lu(e){for(;null!==hu;){var t=hu;if(t===e){hu=null;break}var n=t.sibling;if(null!==n){n.return=t.return,hu=n;break}hu=t.return}}function Pu(e){for(;null!==hu;){var t=hu;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gu(4,t)}catch(e){Fl(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){Fl(t,i,e)}}var s=t.return;try{yu(t)}catch(e){Fl(t,s,e)}break;case 5:var o=t.return;try{yu(t)}catch(e){Fl(t,o,e)}}}catch(e){Fl(t,t.return,e)}if(t===e){hu=null;break}var a=t.sibling;if(null!==a){a.return=t.return,hu=a;break}hu=t.return}}var Mu,Fu=Math.ceil,Uu=O.ReactCurrentDispatcher,Vu=O.ReactCurrentOwner,ju=O.ReactCurrentBatchConfig,zu=0,Bu=null,$u=null,qu=0,Hu=0,Ku=Fi(0),Wu=0,Gu=null,Qu=0,Xu=0,Yu=0,Ju=null,Zu=null,el=0,tl=1/0,nl=null,rl=!1,il=null,sl=null,ol=!1,al=null,ul=0,ll=0,cl=null,hl=-1,dl=0;function fl(){return 0!=(6&zu)?ct():-1!==hl?hl:hl=ct()}function pl(e){return 0==(1&e.mode)?1:0!=(2&zu)&&0!==qu?qu&-qu:null!==Ns.transition?(0===dl&&(dl=Nt()),dl):0!==(e=Rt)?e:e=void 0===(e=window.event)?16:cn(e.type)}function ml(e,t,n,r){if(50<ll)throw ll=0,cl=null,Error(v(185));At(e,n,r),0!=(2&zu)&&e===Bu||(e===Bu&&(0==(2&zu)&&(Xu|=n),4===Wu&&wl(e,qu)),gl(e,r),1===n&&0===zu&&0==(1&t.mode)&&(tl=ct()+500,Ji&&ts()))}function gl(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-bt(s),a=1<<o,u=i[o];-1===u?0!=(a&n)&&0==(a&r)||(i[o]=It(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}}(e,t);var r=Tt(e,e===Bu?qu:0);if(0===r)null!==n&&at(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&at(n),1===t)0===e.tag?function(e){Ji=!0,es(e)}(El.bind(null,e)):es(El.bind(null,e)),bi((function(){0==(6&zu)&&ts()})),n=null;else{switch(Ot(r)){case 1:n=dt;break;case 4:n=ft;break;case 16:default:n=pt;break;case 536870912:n=gt}n=Bl(n,yl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yl(e,t){if(hl=-1,dl=0,0!=(6&zu))throw Error(v(327));var n=e.callbackNode;if(Pl()&&e.callbackNode!==n)return null;var r=Tt(e,e===Bu?qu:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=xl(e,r);else{t=r;var i=zu;zu|=2;var s=Cl();for(Bu===e&&qu===t||(nl=null,tl=ct()+500,Tl(e,t));;)try{Dl();break}catch(t){Il(e,t)}Ls(),Uu.current=s,zu=i,null!==$u?t=0:(Bu=null,qu=0,t=Wu)}if(0!==t){if(2===t&&(0!==(i=Ct(e))&&(r=i,t=vl(e,i))),1===t)throw n=Gu,Tl(e,0),wl(e,r),gl(e,ct()),n;if(6===t)wl(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wr(s(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=xl(e,r))&&(0!==(s=Ct(e))&&(r=s,t=vl(e,s))),1===t))throw n=Gu,Tl(e,0),wl(e,r),gl(e,ct()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:case 5:Ll(e,Zu,nl);break;case 3:if(wl(e,r),(130023424&r)===r&&10<(t=el+500-ct())){if(0!==Tt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){fl(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gi(Ll.bind(null,e,Zu,nl),t);break}Ll(e,Zu,nl);break;case 4:if(wl(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,(o=t[o])>i&&(i=o),r&=~s}if(r=i,10<(r=(120>(r=ct()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fu(r/1960))-r)){e.timeoutHandle=gi(Ll.bind(null,e,Zu,nl),r);break}Ll(e,Zu,nl);break;default:throw Error(v(329))}}}return gl(e,ct()),e.callbackNode===n?yl.bind(null,e):null}function vl(e,t){var n=Ju;return e.current.memoizedState.isDehydrated&&(Tl(e,t).flags|=256),2!==(e=xl(e,t))&&(t=Zu,Zu=n,null!==t&&bl(t)),e}function bl(e){null===Zu?Zu=e:Zu.push.apply(Zu,e)}function wl(e,t){for(t&=~Yu,t&=~Xu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function El(e){if(0!=(6&zu))throw Error(v(327));Pl();var t=Tt(e,0);if(0==(1&t))return gl(e,ct()),null;var n=xl(e,t);if(0!==e.tag&&2===n){var r=Ct(e);0!==r&&(t=r,n=vl(e,r))}if(1===n)throw n=Gu,Tl(e,0),wl(e,t),gl(e,ct()),n;if(6===n)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ll(e,Zu,nl),gl(e,ct()),null}function kl(e,t){var n=zu;zu|=1;try{return e(t)}finally{0===(zu=n)&&(tl=ct()+500,Ji&&ts())}}function Sl(e){null!==al&&0===al.tag&&0==(6&zu)&&Pl();var t=zu;zu|=1;var n=ju.transition,r=Rt;try{if(ju.transition=null,Rt=1,e)return e()}finally{Rt=r,ju.transition=n,0==(6&(zu=t))&&ts()}}function _l(){Hu=Ku.current,Ui(Ku)}function Tl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,yi(n)),null!==$u)for(n=$u.return;null!==n;){var r=n;switch(ps(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ki();break;case 3:vo(),Ui(Bi),Ui(zi),_o();break;case 5:wo(r);break;case 4:vo();break;case 13:case 19:Ui(Eo);break;case 10:Ps(r.type._context);break;case 22:case 23:_l()}n=n.return}if(Bu=e,$u=e=Kl(e.current,null),qu=Hu=t,Wu=0,Gu=null,Yu=Xu=Qu=0,Zu=Ju=null,null!==Vs){for(t=0;t<Vs.length;t++)if(null!==(r=(n=Vs[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var o=s.next;s.next=i,r.next=o}n.pending=r}Vs=null}return e}function Il(e,t){for(;;){var n=$u;try{if(Ls(),To.current=ba,Do){for(var r=No.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Do=!1}if(Co=0,Ao=xo=No=null,Ro=!1,Oo=0,Vu.current=null,null===n||null===n.return){Wu=1,Gu=t,$u=null;break}e:{var s=e,o=n.return,a=n,u=t;if(t=qu,a.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var l=u,c=a,h=c.tag;if(0==(1&c.mode)&&(0===h||11===h||15===h)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Aa(o);if(null!==f){f.flags&=-257,Da(f,o,a,0,t),1&f.mode&&xa(s,l,t),u=l;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(u),t.updateQueue=m}else p.add(u);break e}if(0==(1&t)){xa(s,l,t),Nl();break e}u=Error(v(426))}else if(ys&&1&a.mode){var g=Aa(o);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),Da(g,o,a,0,t),Cs(Sa(u,a));break e}}s=u=Sa(u,a),4!==Wu&&(Wu=2),null===Ju?Ju=[s]:Ju.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Qs(s,Ca(0,u,t));break e;case 1:a=u;var y=s.type,b=s.stateNode;if(0==(128&s.flags)&&("function"==typeof y.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===sl||!sl.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t,Qs(s,Na(s,a,t));break e}}s=s.return}while(null!==s)}Ol(n)}catch(e){t=e,$u===n&&null!==n&&($u=n=n.return);continue}break}}function Cl(){var e=Uu.current;return Uu.current=ba,null===e?ba:e}function Nl(){0!==Wu&&3!==Wu&&2!==Wu||(Wu=4),null===Bu||0==(268435455&Qu)&&0==(268435455&Xu)||wl(Bu,qu)}function xl(e,t){var n=zu;zu|=2;var r=Cl();for(Bu===e&&qu===t||(nl=null,Tl(e,t));;)try{Al();break}catch(t){Il(e,t)}if(Ls(),zu=n,Uu.current=r,null!==$u)throw Error(v(261));return Bu=null,qu=0,Wu}function Al(){for(;null!==$u;)Rl($u)}function Dl(){for(;null!==$u&&!ut();)Rl($u)}function Rl(e){var t=Mu(e.alternate,e,Hu);e.memoizedProps=e.pendingProps,null===t?Ol(e):$u=t,Vu.current=null}function Ol(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=ou(n,t,Hu)))return void($u=n)}else{if(null!==(n=au(n,t)))return n.flags&=32767,void($u=n);if(null===e)return Wu=6,void($u=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void($u=t);$u=t=e}while(null!==t);0===Wu&&(Wu=5)}function Ll(e,t,n){var r=Rt,i=ju.transition;try{ju.transition=null,Rt=1,function(e,t,n,r){do{Pl()}while(null!==al);if(0!=(6&zu))throw Error(v(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===Bu&&($u=Bu=null,qu=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||ol||(ol=!0,Bl(pt,(function(){return Pl(),null}))),s=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||s){s=ju.transition,ju.transition=null;var o=Rt;Rt=1;var a=zu;zu|=4,Vu.current=null,function(e,t){if(fi=rn,Ir(e=Tr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(e){n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(a=o+i),h!==s||0!==r&&3!==h.nodeType||(u=o+r),3===h.nodeType&&(o+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===a||-1===u?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(pi={focusedElem:e,selectionRange:n},rn=!1,hu=t;null!==hu;)if(e=(t=hu).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,hu=e;else for(;null!==hu;){t=hu;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:xs(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(v(163))}}catch(e){Fl(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,hu=e;break}hu=t.return}p=pu,pu=!1}(e,n),xu(n,e),Cr(pi),rn=!!fi,pi=fi=null,e.current=n,Du(n,e,i),lt(),zu=a,Rt=o,ju.transition=s}else e.current=n;if(ol&&(ol=!1,al=e,ul=i),0===(s=e.pendingLanes)&&(sl=null),function(e){if(vt&&"function"==typeof vt.onCommitFiberRoot)try{vt.onCommitFiberRoot(yt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),gl(e,ct()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rl)throw rl=!1,e=il,il=null,e;0!=(1&ul)&&0!==e.tag&&Pl(),0!=(1&(s=e.pendingLanes))?e===cl?ll++:(ll=0,cl=e):ll=0,ts()}(e,t,n,r)}finally{ju.transition=i,Rt=r}return null}function Pl(){if(null!==al){var e=Ot(ul),t=ju.transition,n=Rt;try{if(ju.transition=null,Rt=16>e?16:e,null===al)var r=!1;else{if(e=al,al=null,ul=0,0!=(6&zu))throw Error(v(331));var i=zu;for(zu|=4,hu=e.current;null!==hu;){var s=hu,o=s.child;if(0!=(16&hu.flags)){var a=s.deletions;if(null!==a){for(var u=0;u<a.length;u++){var l=a[u];for(hu=l;null!==hu;){var c=hu;switch(c.tag){case 0:case 11:case 15:mu(8,c,s)}var h=c.child;if(null!==h)h.return=c,hu=h;else for(;null!==hu;){var d=(c=hu).sibling,f=c.return;if(vu(c),c===l){hu=null;break}if(null!==d){d.return=f,hu=d;break}hu=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}hu=s}}if(0!=(2064&s.subtreeFlags)&&null!==o)o.return=s,hu=o;else e:for(;null!==hu;){if(0!=(2048&(s=hu).flags))switch(s.tag){case 0:case 11:case 15:mu(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,hu=y;break e}hu=s.return}}var b=e.current;for(hu=b;null!==hu;){var w=(o=hu).child;if(0!=(2064&o.subtreeFlags)&&null!==w)w.return=o,hu=w;else e:for(o=b;null!==hu;){if(0!=(2048&(a=hu).flags))try{switch(a.tag){case 0:case 11:case 15:gu(9,a)}}catch(e){Fl(a,a.return,e)}if(a===o){hu=null;break e}var E=a.sibling;if(null!==E){E.return=a.return,hu=E;break e}hu=a.return}}if(zu=i,ts(),vt&&"function"==typeof vt.onPostCommitFiberRoot)try{vt.onPostCommitFiberRoot(yt,e)}catch(e){}r=!0}return r}finally{Rt=n,ju.transition=t}}return!1}function Ml(e,t,n){e=Ws(e,t=Ca(0,t=Sa(n,t),1),1),t=fl(),null!==e&&(At(e,1,t),gl(e,t))}function Fl(e,t,n){if(3===e.tag)Ml(e,e,n);else for(;null!==t;){if(3===t.tag){Ml(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===sl||!sl.has(r))){t=Ws(t,e=Na(t,e=Sa(n,e),1),1),e=fl(),null!==t&&(At(t,1,e),gl(t,e));break}}t=t.return}}function Ul(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=fl(),e.pingedLanes|=e.suspendedLanes&n,Bu===e&&(qu&n)===n&&(4===Wu||3===Wu&&(130023424&qu)===qu&&500>ct()-el?Tl(e,0):Yu|=n),gl(e,t)}function Vl(e,t){0===t&&(0==(1&e.mode)?t=1:(t=St,0==(130023424&(St<<=1))&&(St=4194304)));var n=fl();null!==(e=Bs(e,t))&&(At(e,t,n),gl(e,n))}function jl(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Vl(e,n)}function zl(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}null!==r&&r.delete(t),Vl(e,n)}function Bl(e,t){return ot(e,t)}function $l(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ql(e,t,n,r){return new $l(e,t,n,r)}function Hl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Kl(e,t){var n=e.alternate;return null===n?((n=ql(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wl(e,t,n,r,i,s){var o=2;if(r=e,"function"==typeof e)Hl(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case M:return Gl(n.children,i,s,t);case F:o=8,i|=8;break;case U:return(e=ql(12,n,t,2|i)).elementType=U,e.lanes=s,e;case B:return(e=ql(13,n,t,i)).elementType=B,e.lanes=s,e;case $:return(e=ql(19,n,t,i)).elementType=$,e.lanes=s,e;case K:return Ql(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case V:o=10;break e;case j:o=9;break e;case z:o=11;break e;case q:o=14;break e;case H:o=16,r=null;break e}throw Error(v(130,null==e?e:typeof e,""))}return(t=ql(o,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Gl(e,t,n,r){return(e=ql(7,e,r,t)).lanes=n,e}function Ql(e,t,n,r){return(e=ql(22,e,r,t)).elementType=K,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return(e=ql(6,e,null,t)).lanes=n,e}function Yl(e,t,n){return(t=ql(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jl(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xt(0),this.expirationTimes=xt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zl(e,t,n,r,i,s,o,a,u){return e=new Jl(e,t,n,a,u),1===t?(t=1,!0===s&&(t|=8)):t=0,s=ql(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qs(s),e}function ec(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:P,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function tc(e){if(!e)return ji;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Hi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(v(171))}if(1===e.tag){var n=e.type;if(Hi(n))return Gi(e,n,t)}return t}function nc(e,t,n,r,i,s,o,a,u){return(e=Zl(n,r,!0,e,0,s,0,a,u)).context=tc(null),n=e.current,(s=Ks(r=fl(),i=pl(n))).callback=null!=t?t:null,Ws(n,s,i),e.current.lanes=i,At(e,i,r),gl(e,r),e}function rc(e,t,n,r){var i=t.current,s=fl(),o=pl(i);return n=tc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ks(s,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ws(i,t,o))&&(ml(e,i,o,s),Gs(e,i,o)),o}function ic(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function sc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function oc(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}Mu=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Bi.current)Oa=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Oa=!1,function(e,t,n){switch(t.tag){case 3:$a(t),Is();break;case 5:bo(t);break;case 1:Hi(t.type)&&Qi(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Vi(As,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Vi(Eo,1&Eo.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Xa(e,t,n):(Vi(Eo,1&Eo.current),null!==(e=ru(e,t,n))?e.sibling:null);Vi(Eo,1&Eo.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return tu(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Vi(Eo,Eo.current),r)break;return null;case 22:case 23:return t.lanes=0,Ua(e,t,n)}return ru(e,t,n)}(e,t,n);Oa=0!=(131072&e.flags)}else Oa=!1,ys&&0!=(1048576&t.flags)&&ds(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;nu(e,t),e=t.pendingProps;var i=qi(t,zi.current);Fs(t,n),i=Fo(null,t,r,e,i,n);var s=Uo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Hi(r)?(s=!0,Qi(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,qs(t),i.updater=eo,t.stateNode=i,i._reactInternals=t,io(t,r,e,n),t=Ba(null,t,r,!0,s,n)):(t.tag=0,ys&&s&&fs(t),La(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(nu(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Hl(e)?1:0;if(null!=e){if((e=e.$$typeof)===z)return 11;if(e===q)return 14}return 2}(r),e=xs(r,e),i){case 0:t=ja(null,t,r,e,n);break e;case 1:t=za(null,t,r,e,n);break e;case 11:t=Pa(null,t,r,e,n);break e;case 14:t=Ma(null,t,r,xs(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,ja(e,t,r,i=t.elementType===r?i:xs(r,i),n);case 1:return r=t.type,i=t.pendingProps,za(e,t,r,i=t.elementType===r?i:xs(r,i),n);case 3:e:{if($a(t),null===e)throw Error(v(387));r=t.pendingProps,i=(s=t.memoizedState).element,Hs(e,t),Xs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=qa(e,t,r,n,i=Sa(Error(v(423)),t));break e}if(r!==i){t=qa(e,t,r,n,i=Sa(Error(v(424)),t));break e}for(gs=ki(t.stateNode.containerInfo.firstChild),ms=t,ys=!0,vs=null,n=co(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Is(),r===i){t=ru(e,t,n);break e}La(e,t,r,n)}t=t.child}return t;case 5:return bo(t),null===e&&ks(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,o=i.children,mi(r,i)?o=null:null!==s&&mi(r,s)&&(t.flags|=32),Va(e,t),La(e,t,o,n),t.child;case 6:return null===e&&ks(t),null;case 13:return Xa(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=lo(t,null,r,n):La(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Pa(e,t,r,i=t.elementType===r?i:xs(r,i),n);case 7:return La(e,t,t.pendingProps,n),t.child;case 8:case 12:return La(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Vi(As,r._currentValue),r._currentValue=o,null!==s)if(wr(s.value,o)){if(s.children===i.children&&!Bi.current){t=ru(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var a=s.dependencies;if(null!==a){o=s.child;for(var u=a.firstContext;null!==u;){if(u.context===r){if(1===s.tag){(u=Ks(-1,n&-n)).tag=2;var l=s.updateQueue;if(null!==l){var c=(l=l.shared).pending;null===c?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,null!==(u=s.alternate)&&(u.lanes|=n),Ms(s.return,n,t),a.lanes|=n;break}u=u.next}}else if(10===s.tag)o=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(o=s.return))throw Error(v(341));o.lanes|=n,null!==(a=o.alternate)&&(a.lanes|=n),Ms(o,n,t),o=s.sibling}else o=s.child;if(null!==o)o.return=s;else for(o=s;null!==o;){if(o===t){o=null;break}if(null!==(s=o.sibling)){s.return=o.return,o=s;break}o=o.return}s=o}La(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fs(t,n),r=r(i=Us(i)),t.flags|=1,La(e,t,r,n),t.child;case 14:return i=xs(r=t.type,t.pendingProps),Ma(e,t,r,i=xs(r.type,i),n);case 15:return Fa(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xs(r,i),nu(e,t),t.tag=1,Hi(r)?(e=!0,Qi(t)):e=!1,Fs(t,n),no(t,r,i),io(t,r,i,n),Ba(null,t,r,!0,e,n);case 19:return tu(e,t,n);case 22:return Ua(e,t,n)}throw Error(v(156,t.tag))};var ac="function"==typeof reportError?reportError:function(e){console.error(e)};function uc(e){this._internalRoot=e}function lc(e){this._internalRoot=e}function cc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function hc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function dc(){}function fc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if("function"==typeof i){var a=i;i=function(){var e=ic(o);a.call(e)}}rc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=ic(o);s.call(e)}}var o=nc(t,r,e,0,null,!1,0,"",dc);return e._reactRootContainer=o,e[Ci]=o.current,ti(8===e.nodeType?e.parentNode:e),Sl(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var a=r;r=function(){var e=ic(u);a.call(e)}}var u=Zl(e,0,!1,null,0,!1,0,"",dc);return e._reactRootContainer=u,e[Ci]=u.current,ti(8===e.nodeType?e.parentNode:e),Sl((function(){rc(t,u,n,r)})),u}(n,t,e,i,r);return ic(o)}lc.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(v(409));rc(e,t,null,null)},lc.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Sl((function(){rc(null,e,null,null)})),t[Ci]=null}},lc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&0!==t&&t<Kt[n].priority;n++);Kt.splice(n,0,e),0===n&&Xt(e)}},Lt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_t(t.pendingLanes);0!==n&&(Dt(t,1|n),gl(t,ct()),0==(6&zu)&&(tl=ct()+500,ts()))}break;case 13:Sl((function(){var t=Bs(e,1);if(null!==t){var n=fl();ml(t,e,1,n)}})),oc(e,1)}},Pt=function(e){if(13===e.tag){var t=Bs(e,134217728);if(null!==t)ml(t,e,134217728,fl());oc(e,134217728)}},Mt=function(e){if(13===e.tag){var t=pl(e),n=Bs(e,t);if(null!==n)ml(n,e,t,fl());oc(e,t)}},Ft=function(){return Rt},Ut=function(e,t){var n=Rt;try{return Rt=e,t()}finally{Rt=n}},Pe=function(e,t,n){switch(t){case"input":if(he(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Li(r);if(!i)throw Error(v(90));oe(r),he(r,i)}}}break;case"textarea":ve(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},ze=kl,Be=Sl;var pc={usingClientEntryPoint:!1,Events:[Ri,Oi,Li,Ve,je,kl]},mc={findFiberByHostInstance:Di,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gc={bundleType:mc.bundleType,version:mc.version,rendererPackageName:mc.rendererPackageName,rendererConfig:mc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=it(e))?null:e.stateNode},findFiberByHostInstance:mc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{yt=yc.inject(gc),vt=yc}catch(e){}}r=pc,i=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!cc(t))throw Error(v(200));return ec(e,t,null,n)},o=function(e,t){if(!cc(e))throw Error(v(299));var n=!1,r="",i=ac;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Zl(e,1,!1,null,0,n,0,r,i),e[Ci]=t.current,ti(8===e.nodeType?e.parentNode:e),new uc(t)},a=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(v(188));throw e=Object.keys(e).join(","),Error(v(268,e))}return e=null===(e=it(t))?null:e.stateNode},u=function(e){return Sl(e)},l=function(e,t,n){if(!hc(t))throw Error(v(200));return fc(null,e,t,!0,n)},c=function(e,t,n){if(!cc(e))throw Error(v(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",o=ac;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=nc(t,null,e,1,null!=n?n:null,i,0,s,o),e[Ci]=t.current,ti(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new lc(t)},h=function(e,t,n){if(!hc(t))throw Error(v(200));return fc(null,e,t,!1,n)},d=function(e){if(!hc(e))throw Error(v(40));return!!e._reactRootContainer&&(Sl((function(){fc(null,null,e,!1,(function(){e._reactRootContainer=null,e[Ci]=null}))})),!0)},f=kl,p=function(e,t,n,r){if(!hc(n))throw Error(v(200));if(null==e||void 0===e._reactInternals)throw Error(v(38));return fc(e,t,n,!1,r)},m="18.2.0-next-9e3b772b8-20220608"})),s.register("hnwcm",(function(e,t){"use strict";e.exports=s("7yTEO")})),s.register("7yTEO",(function(t,n){var r,i,s,o,a,u,l,c,h,d,f,p,m,g,y,v,b,w,E;function k(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<T(i,t)))break e;e[r]=t,e[n]=i,n=r}}function S(e){return 0===e.length?null:e[0]}function _(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,s=i>>>1;r<s;){var o=2*(r+1)-1,a=e[o],u=o+1,l=e[u];if(0>T(a,n))u<i&&0>T(l,a)?(e[r]=l,e[u]=n,r=u):(e[r]=a,e[o]=n,r=o);else{if(!(u<i&&0>T(l,n)))break e;e[r]=l,e[u]=n,r=u}}}return t}function T(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(function(){return r}),(function(e){return r=e})),e(t.exports,"unstable_IdlePriority",(function(){return i}),(function(e){return i=e})),e(t.exports,"unstable_ImmediatePriority",(function(){return s}),(function(e){return s=e})),e(t.exports,"unstable_LowPriority",(function(){return o}),(function(e){return o=e})),e(t.exports,"unstable_NormalPriority",(function(){return a}),(function(e){return a=e})),e(t.exports,"unstable_Profiling",(function(){return u}),(function(e){return u=e})),e(t.exports,"unstable_UserBlockingPriority",(function(){return l}),(function(e){return l=e})),e(t.exports,"unstable_cancelCallback",(function(){return c}),(function(e){return c=e})),e(t.exports,"unstable_continueExecution",(function(){return h}),(function(e){return h=e})),e(t.exports,"unstable_forceFrameRate",(function(){return d}),(function(e){return d=e})),e(t.exports,"unstable_getCurrentPriorityLevel",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_getFirstCallbackNode",(function(){return p}),(function(e){return p=e})),e(t.exports,"unstable_next",(function(){return m}),(function(e){return m=e})),e(t.exports,"unstable_pauseExecution",(function(){return g}),(function(e){return g=e})),e(t.exports,"unstable_requestPaint",(function(){return y}),(function(e){return y=e})),e(t.exports,"unstable_runWithPriority",(function(){return v}),(function(e){return v=e})),e(t.exports,"unstable_scheduleCallback",(function(){return b}),(function(e){return b=e})),e(t.exports,"unstable_shouldYield",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_wrapCallback",(function(){return E}),(function(e){return E=e})),"object"==typeof performance&&"function"==typeof performance.now){var I=performance;r=function(){return I.now()}}else{var C=Date,N=C.now();r=function(){return C.now()-N}}var x=[],A=[],D=1,R=null,O=3,L=!1,P=!1,M=!1,F="function"==typeof setTimeout?setTimeout:null,U="function"==typeof clearTimeout?clearTimeout:null,V="undefined"!=typeof setImmediate?setImmediate:null;function j(e){for(var t=S(A);null!==t;){if(null===t.callback)_(A);else{if(!(t.startTime<=e))break;_(A),t.sortIndex=t.expirationTime,k(x,t)}t=S(A)}}function z(e){if(M=!1,j(e),!P)if(null!==S(x))P=!0,Z(B);else{var t=S(A);null!==t&&ee(z,t.startTime-e)}}function B(e,t){P=!1,M&&(M=!1,U(K),K=-1),L=!0;var n=O;try{for(j(t),R=S(x);null!==R&&(!(R.expirationTime>t)||e&&!Q());){var i=R.callback;if("function"==typeof i){R.callback=null,O=R.priorityLevel;var s=i(R.expirationTime<=t);t=r(),"function"==typeof s?R.callback=s:R===S(x)&&_(x),j(t)}else _(x);R=S(x)}if(null!==R)var o=!0;else{var a=S(A);null!==a&&ee(z,a.startTime-t),o=!1}return o}finally{R=null,O=n,L=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var $,q=!1,H=null,K=-1,W=5,G=-1;function Q(){return!(r()-G<W)}function X(){if(null!==H){var e=r();G=e;var t=!0;try{t=H(!0,e)}finally{t?$():(q=!1,H=null)}}else q=!1}if("function"==typeof V)$=function(){V(X)};else if("undefined"!=typeof MessageChannel){var Y=new MessageChannel,J=Y.port2;Y.port1.onmessage=X,$=function(){J.postMessage(null)}}else $=function(){F(X,0)};function Z(e){H=e,q||(q=!0,$())}function ee(e,t){K=F((function(){e(r())}),t)}i=5,s=1,o=4,a=3,u=null,l=2,c=function(e){e.callback=null},h=function(){P||L||(P=!0,Z(B))},d=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<e?Math.floor(1e3/e):5},f=function(){return O},p=function(){return S(x)},m=function(e){switch(O){case 1:case 2:case 3:var t=3;break;default:t=O}var n=O;O=t;try{return e()}finally{O=n}},g=function(){},y=function(){},v=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=O;O=e;try{return t()}finally{O=n}},b=function(e,t,n){var i=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?i+n:i:n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:D++,callback:t,priorityLevel:e,startTime:n,expirationTime:s=n+s,sortIndex:-1},n>i?(e.sortIndex=n,k(A,e),null===S(x)&&e===S(A)&&(M?(U(K),K=-1):M=!0,ee(z,n-i))):(e.sortIndex=s,k(x,e),P||L||(P=!0,Z(B))),e},w=Q,E=function(e){var t=O;return function(){var n=O;O=t;try{return e.apply(this,arguments)}finally{O=n}}}}));var o;o=s("2nacn");var a,u,l=s("jE8J5");!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),a=(u=s("2wM5b")).createRoot,u.hydrateRoot;l=s("jE8J5");
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
 */const c=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,u=a?e[t+2]:0,l=i>>2,c=(3&i)<<4|o>>4;let h=(15&o)<<2|u>>6,d=63&u;a||(d=64,s||(h=64)),r.push(n[l],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const u=i<<2|s>>4;if(r.push(u),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},d=function(e){return function(e){const t=c(e);return h.encodeByteArray(t,!0)}(e).replace(/\./g,"")},f=function(e){try{return h.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class p{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
function m(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function g(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function y(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function v(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function b(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return"object"==typeof indexedDB}class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(S,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new E(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const S=/\{\$([^}]+)}/g;
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
 */function _(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function T(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(I(n)&&I(s)){if(!T(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function I(e){return null!==e&&"object"==typeof e}
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
function C(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function N(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function x(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function A(e,t){const n=new D(e,t);return n.subscribe.bind(n)}class D{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=R),void 0===r.error&&(r.error=R),void 0===r.complete&&(r.complete=R);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function R(){}
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
function O(e){return e&&e._delegate?e._delegate:e}class L{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
 */const P="[DEFAULT]";
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
 */class M{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new p;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:P})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===P?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:P:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class F{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new M(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const U=[];var V,j;(j=V||(V={}))[j.DEBUG=0]="DEBUG",j[j.VERBOSE=1]="VERBOSE",j[j.INFO=2]="INFO",j[j.WARN=3]="WARN",j[j.ERROR=4]="ERROR",j[j.SILENT=5]="SILENT";const z={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},B=V.INFO,$={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},q=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=$[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class H{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?z[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}constructor(e){this.name=e,this._logLevel=B,this._logHandler=q,this._userLogHandler=null,U.push(this)}}let K,W;const G=new WeakMap,Q=new WeakMap,X=new WeakMap,Y=new WeakMap,J=new WeakMap;let Z={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Q.get(e);if("objectStoreNames"===t)return e.objectStoreNames||X.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ne(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ee(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(W||(W=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(re(this),t),ne(G.get(this))}:function(...t){return ne(e.apply(re(this),t))}:function(t,...n){const r=e.call(re(this),t,...n);return X.set(r,t.sort?t.sort():[t]),ne(r)}}function te(e){return"function"==typeof e?ee(e):(e instanceof IDBTransaction&&function(e){if(Q.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Q.set(e,t)}(e),t=e,(K||(K=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Z):e);var t}function ne(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ne(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&G.set(t,e)})).catch((()=>{})),J.set(t,e),t}(e);if(Y.has(e))return Y.get(e);const t=te(e);return t!==e&&(Y.set(e,t),J.set(t,e)),t}const re=e=>J.get(e);function ie(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=ne(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(ne(o.result),e.oldVersion,e.newVersion,ne(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const se=["get","getKey","getAll","getAllKeys","count"],oe=["put","add","delete","clear"],ae=new Map;function ue(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ae.get(t))return ae.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=oe.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!se.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return ae.set(t,s),s}Z=(e=>({...e,get:(t,n,r)=>ue(t,n)||e.get(t,n,r),has:(t,n)=>!!ue(t,n)||e.has(t,n)}))(Z);
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
class le{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const ce="@firebase/app",he="0.7.31",de=new H("@firebase/app"),fe="[DEFAULT]",pe={[ce]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},me=new Map,ge=new Map;function ye(e,t){try{e.container.addComponent(t)}catch(n){de.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ve(e){const t=e.name;if(ge.has(t))return de.debug(`There were multiple attempts to register component ${t}.`),!1;ge.set(t,e);for(const t of me.values())ye(t,e);return!0}function be(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const we=new k("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Ee{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new L("app",(()=>this),"PUBLIC"))}}
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
 */const ke="9.9.3";function Se(e="[DEFAULT]"){const t=me.get(e);if(!t)throw we.create("no-app",{appName:e});return t}function _e(e,t,n){var r;let i=null!==(r=pe[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void de.warn(e.join(" "))}ve(new L(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
const Te="firebase-heartbeat-store";let Ie=null;function Ce(){return Ie||(Ie=ie("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Te)}}).catch((e=>{throw we.create("idb-open",{originalErrorMessage:e.message})}))),Ie}async function Ne(e,t){var n;try{const n=(await Ce()).transaction(Te,"readwrite"),r=n.objectStore(Te);return await r.put(t,xe(e)),n.done}catch(e){if(e instanceof E)de.warn(e.message);else{const t=we.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});de.warn(t.message)}}}function xe(e){return`${e.name}!${e.options.appId}`}
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
 */class Ae{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=De();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=De(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Oe(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Oe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=d(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Re(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function De(){return(new Date).toISOString().substring(0,10)}class Re{async runIndexedDBEnvironmentCheck(){return!!w()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await Ce()).transaction(Te).objectStore(Te).get(xe(e))}catch(e){if(e instanceof E)de.warn(e.message);else{const n=we.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});de.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Oe(e){return d(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Le;Le="",ve(new L("platform-logger",(e=>new le(e)),"PRIVATE")),ve(new L("heartbeat",(e=>new Ae(e)),"PRIVATE")),_e(ce,he,Le),_e(ce,he,"esm2017"),_e("fire-js","");
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
_e("firebase","9.9.3","app");function Pe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Me(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fe=Me,Ue=new k("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ve=new H("@firebase/auth");function je(e,...t){Ve.logLevel<=V.ERROR&&Ve.error(`Auth (9.9.3): ${e}`,...t)}
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
 */function ze(e,...t){throw He(e,...t)}function Be(e,...t){return He(e,...t)}function $e(e,t,n){const r=Object.assign(Object.assign({},Fe()),{[t]:n});return new k("auth","Firebase",r).create(t,{appName:e.name})}function qe(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&ze(e,"argument-error"),$e(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function He(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ue.create(e,...t)}function Ke(e,t,...n){if(!e)throw He(t,...n)}function We(e){const t="INTERNAL ASSERTION FAILED: "+e;throw je(t),new Error(t)}function Ge(e,t){e||We(t)}
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
 */const Qe=new Map;function Xe(e){Ge(e instanceof Function,"Expected a class definition");let t=Qe.get(e);return t?(Ge(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Qe.set(e,t),t)}
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
function Ye(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Je(){return"http:"===Ze()||"https:"===Ze()}function Ze(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class et{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Je()||y()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,Ge(t>e,"Short delay should be less than long delay!"),this.isMobile=g()||v()}}
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
 */function tt(e,t){Ge(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class nt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void We("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void We("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void We("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const rt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},it=new et(3e4,6e4);
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
 */function st(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ot(e,t,n,r,i={}){return at(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=C(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),nt.fetch()(lt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function at(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},rt),t);try{const t=new ct(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw ht(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ht(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ht(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ht(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw $e(e,a,o);ze(e,a)}}catch(t){if(t instanceof E)throw t;ze(e,"network-request-failed")}}async function ut(e,t,n,r,i={}){const s=await ot(e,t,n,r,i);return"mfaPendingCredential"in s&&ze(e,"multi-factor-auth-required",{_serverResponse:s}),s}function lt(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?tt(e.config,i):`${e.config.apiScheme}://${i}`}class ct{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Be(this.auth,"network-request-failed"))),it.get())}))}}function ht(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Be(e,t,r);return i.customData._tokenResponse=n,i}
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
function dt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function ft(e){return 1e3*Number(e)}function pt(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return je("JWT malformed, contained fewer than 3 sections"),null;try{const e=f(r);return e?JSON.parse(e):(je("Failed to decode base64 JWT payload"),null)}catch(e){return je("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
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
async function mt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof E&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class gt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class yt{_initializeTime(){this.lastSignInTime=dt(this.lastLoginAt),this.creationTime=dt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function vt(e){var t;const n=e.auth,r=await e.getIdToken(),i=await mt(e,async function(e,t){return ot(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Ke(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Pe(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(u=e.providerData,l=o,[...u.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var u,l;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!c&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new yt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class bt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ke(e.idToken,"internal-error"),Ke(void 0!==e.idToken,"internal-error"),Ke(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=pt(e);return Ke(t,"internal-error"),Ke(void 0!==t.exp,"internal-error"),Ke(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ke(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await at(e,{},(async()=>{const n=C({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=lt(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",nt.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new bt;return n&&(Ke("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Ke("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Ke("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bt,this.toJSON())}_performRefresh(){return We("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function wt(e,t){Ke("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Et{async getIdToken(e){const t=await mt(this,this.stsTokenManager.getToken(this.auth,e));return Ke(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=O(e),r=await n.getIdToken(t),i=pt(r);Ke(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:dt(ft(i.auth_time)),issuedAtTime:dt(ft(i.iat)),expirationTime:dt(ft(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=O(e);await vt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await vt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mt(this,async function(e,t){return ot(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,u,l;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(u=t.createdAt)&&void 0!==u?u:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:k}=t;Ke(v&&k,e,"internal-error");const S=bt.fromJSON(this.name,k);Ke("string"==typeof v,e,"internal-error"),wt(c,e.name),wt(h,e.name),Ke("boolean"==typeof b,e,"internal-error"),Ke("boolean"==typeof w,e,"internal-error"),wt(d,e.name),wt(f,e.name),wt(p,e.name),wt(m,e.name),wt(g,e.name),wt(y,e.name);const _=new Et({uid:v,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new bt;r.updateFromServerResponse(t);const i=new Et({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await vt(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Pe(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yt(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */class kt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}kt.type="NONE";const St=kt;
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
 */function _t(e,t,n){return`firebase:${e}:${t}:${n}`}class Tt{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Tt(Xe(St),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Xe(St);const s=_t(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Et._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Tt(i,e,n)):new Tt(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=_t(this.userKey,r.apiKey,i),this.fullPersistenceKey=_t("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function It(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(At(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ct(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Rt(t))return"Blackberry";if(Ot(t))return"Webos";if(Nt(t))return"Safari";if((t.includes("chrome/")||xt(t))&&!t.includes("edge/"))return"Chrome";if(Dt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ct(e=m()){return/firefox\//i.test(e)}function Nt(e=m()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function xt(e=m()){return/crios\//i.test(e)}function At(e=m()){return/iemobile/i.test(e)}function Dt(e=m()){return/android/i.test(e)}function Rt(e=m()){return/blackberry/i.test(e)}function Ot(e=m()){return/webos/i.test(e)}function Lt(e=m()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Pt(e=m()){return Lt(e)||Dt(e)||Ot(e)||Rt(e)||/windows phone/i.test(e)||At(e)}
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
function Mt(e,t=[]){let n;switch(e){case"Browser":n=It(m());break;case"Worker":n=`${It(m())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.3/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class Ft{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Ut{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xe(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Tt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await vt(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?O(e):null;return t&&Ke(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Xe(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new k("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xe(e)||this._popupRedirectResolver;Ke(t,this,"argument-error"),this.redirectPersistenceManager=await Tt.create(this,[Xe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Ke(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jt(this),this.idTokenSubscription=new jt(this),this.beforeStateQueue=new Ft(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ue,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Vt(e){return O(e)}class jt{get next(){return Ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=A((e=>this.observer=e))}}
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
class zt{toJSON(){return We("not implemented")}_getIdTokenResponse(e){return We("not implemented")}_linkToIdToken(e,t){return We("not implemented")}_getReauthenticationResolver(e){return We("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function Bt(e,t){return ot(e,"POST","/v1/accounts:update",t)}
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
class $t extends zt{static _fromEmailAndPassword(e,t){return new $t(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new $t(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithPassword",st(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithEmailLink",st(e,t))}(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Bt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithEmailLink",st(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
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
 */async function qt(e,t){return ut(e,"POST","/v1/accounts:signInWithIdp",st(e,t))}
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
 */class Ht extends zt{static _fromParams(e){const t=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Pe(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Ht(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return qt(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,qt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=C(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Kt={USER_NOT_FOUND:"user-not-found"};
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
class Wt extends zt{static _fromVerification(e,t){return new Wt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Wt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithPhoneNumber",st(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ut(e,"POST","/v1/accounts:signInWithPhoneNumber",st(e,t));if(n.temporaryProof)throw ht(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithPhoneNumber",st(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Kt)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Wt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class Gt{static parseLink(e){const t=function(e){const t=N(x(e)).link,n=t?N(x(t)).deep_link_id:null,r=N(x(e)).deep_link_id;return(r?N(x(r)).link:null)||r||n||t||e}(e);try{return new Gt(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=N(x(e)),u=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Ke(u&&l&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class Qt{static credential(e,t){return $t._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Gt.parseLink(t);return Ke(n,"argument-error"),$t._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Qt.PROVIDER_ID}}Qt.PROVIDER_ID="password",Qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Xt{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Yt extends Xt{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class Jt extends Yt{static credential(e){return Ht._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Jt.PROVIDER_ID="facebook.com";
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
class Zt extends Yt{static credential(e,t){return Ht._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Zt.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Zt.GOOGLE_SIGN_IN_METHOD="google.com",Zt.PROVIDER_ID="google.com";
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
class en extends Yt{static credential(e){return Ht._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}en.GITHUB_SIGN_IN_METHOD="github.com",en.PROVIDER_ID="github.com";
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
class tn extends Yt{static credential(e,t){return Ht._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return tn.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}tn.TWITTER_SIGN_IN_METHOD="twitter.com",tn.PROVIDER_ID="twitter.com";
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
class nn{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Et._fromIdTokenResponse(e,n,r),s=rn(n);return new nn({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=rn(n);return new nn({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function rn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class sn extends E{static _fromErrorAndOperation(e,t,n,r){return new sn(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,sn.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function on(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw sn._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function an(e,t,n=!1){const r=await mt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nn._forOperation(e,"link",r)}
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
async function un(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await mt(e,on(i,s,t,e),n);Ke(r.idToken,i,"internal-error");const o=pt(r.idToken);Ke(o,i,"internal-error");const{sub:a}=o;return Ke(e.uid===a,i,"user-mismatch"),nn._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&ze(i,"user-mismatch"),e}}
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
 */async function ln(e,t,n=!1){const r="signIn",i=await on(e,r,t),s=await nn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function cn(e,t,n,r){return O(e).onAuthStateChanged(t,n,r)}function hn(e){return O(e).signOut()}new WeakMap;const dn="__sak";
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
 */class fn{_isAvailable(){try{return this.storage?(this.storage.setItem(dn,"1"),this.storage.removeItem(dn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class pn extends fn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);b()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=m();return Nt(e)||Lt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Pt(),this._shouldAllowMigration=!0}}pn.type="LOCAL";const mn=pn;
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
 */class gn extends fn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}gn.type="SESSION";const yn=gn;
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
class vn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new vn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function bn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */vn.receivers=[];class wn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const u=bn("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function En(){return window}
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
function kn(){return void 0!==En().WorkerGlobalScope&&"function"==typeof En().importScripts}
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
const Sn="firebaseLocalStorageDb",_n="firebaseLocalStorage",Tn="fbase_key";class In{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Cn(e,t){return e.transaction([_n],t?"readwrite":"readonly").objectStore(_n)}function Nn(){const e=indexedDB.open(Sn,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(_n,{keyPath:Tn})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(_n)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Sn);return new In(e).toPromise()}(),t(await Nn()))}))}))}async function xn(e,t,n){const r=Cn(e,!0).put({[Tn]:t,value:n});return new In(r).toPromise()}function An(e,t){const n=Cn(e,!0).delete(t);return new In(n).toPromise()}class Dn{async _openDb(){return this.db||(this.db=await Nn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vn._getInstance(kn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new wn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nn();return await xn(e,dn,"1"),await An(e,dn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>xn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Cn(e,!1).get(t),r=await new In(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>An(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Cn(e,!1).getAll();return new In(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Dn.type="LOCAL";const Rn=Dn;
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
 */function On(e){return new Promise(((t,n)=>{const r=document.createElement("script");
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
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Be("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Ln(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Ln("rcb"),new et(3e4,6e4);
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
const Pn="recaptcha";async function Mn(e,t,n){var r;const i=await n.verify();try{let s;if(Ke("string"==typeof i,e,"argument-error"),Ke(n.type===Pn,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Ke("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return ot(e,"POST","/v2/accounts/mfaEnrollment:start",st(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Ke("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Ke(n,e,"missing-multi-factor-info");const o=await function(e,t){return ot(e,"POST","/v2/accounts/mfaSignIn:start",st(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ot(e,"POST","/v1/accounts:sendVerificationCode",st(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class Fn{verifyPhoneNumber(e,t){return Mn(this.auth,e,O(t))}static credential(e,t){return Wt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Fn.credentialFromTaggedObject(t)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Wt._fromTokenResponse(t,n):null}constructor(e){this.providerId=Fn.PROVIDER_ID,this.auth=Vt(e)}}
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
function Un(e,t){return t?Xe(t):(Ke(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Fn.PROVIDER_ID="phone",Fn.PHONE_SIGN_IN_METHOD="phone";class Vn extends zt{_getIdTokenResponse(e){return qt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function jn(e){return ln(e.auth,new Vn(e),e.bypassAuthState)}function zn(e){const{auth:t,user:n}=e;return Ke(n,t,"internal-error"),un(n,new Vn(e),e.bypassAuthState)}async function Bn(e){const{auth:t,user:n}=e;return Ke(n,t,"internal-error"),an(n,new Vn(e),e.bypassAuthState)}
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
 */class $n{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jn;case"linkViaPopup":case"linkViaRedirect":return Bn;case"reauthViaPopup":case"reauthViaRedirect":return zn;default:ze(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const qn=new et(2e3,1e4);class Hn extends $n{async executeNotNull(){const e=await this.execute();return Ke(e,this.auth,"internal-error"),e}async onExecution(){Ge(1===this.filter.length,"Popup operations only handle one event");const e=bn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Be(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,qn.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}}Hn.currentPopupAction=null;
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
const Kn=new Map;class Wn extends $n{async execute(){let e=Kn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Yn(t),r=Xn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Kn.set(this.auth._key(),e)}return this.bypassAuthState||Kn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function Gn(e,t){return Xn(e)._set(Yn(t),"true")}function Qn(e,t){Kn.set(e._key(),t)}function Xn(e){return Xe(e._redirectPersistence)}function Yn(e){return _t("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Jn(e,t,n){return async function(e,t,n){const r=Vt(e);qe(e,t,Xt);const i=Un(r,n);return await Gn(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}async function Zn(e,t,n=!1){const r=Vt(e),i=Un(r,t),s=new Wn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class er{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nr(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!nr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Be(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tr(e))}saveEventToCache(e){this.cachedEventUids.add(tr(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function tr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function nr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const rr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ir=/^https?/;async function sr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ot(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(or(e))return}catch(e){}ze(e,"unauthorized-domain")}function or(e){const t=Ye(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ir.test(n))return!1;if(rr.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const ar=new et(3e4,6e4);function ur(){const e=En().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let lr=null;function cr(e){return lr=lr||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){ur(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ur(),n(Be(e,"network-request-failed"))},timeout:ar.get()})}if(null===(i=null===(r=En().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=En().gapi)||void 0===s?void 0:s.load)){const t=Ln("iframefcb");return En()[t]=()=>{gapi.load?o():n(Be(e,"network-request-failed"))},On(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw lr=null,e}))}(e),lr}
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
 */const hr=new et(5e3,15e3),dr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pr(e){const t=e.config;Ke(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?tt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:ke},i=fr.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${C(r).slice(1)}`}
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
const mr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class gr{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function yr(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},mr),{width:r.toString(),height:i.toString(),top:s,left:o}),l=m().toLowerCase();n&&(a=xt(l)?"_blank":n),Ct(l)&&(t=t||"http://localhost",u.scrollbars="yes");const c=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=m()){var t;return Lt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new gr(null);const h=window.open(t||"",a,c);Ke(h,e,"popup-blocked");try{h.focus()}catch(e){}return new gr(h)}const vr="emulator/auth/handler";function br(e,t,n,r,i,s){Ke(e.config.authDomain,e,"auth-domain-config-required"),Ke(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ke,eventId:i};if(t instanceof Xt){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Yt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?tt(e,vr):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${C(a).slice(1)}`}const wr="webStorageSupport";const Er=class{async _openPopup(e,t,n,r){var i;Ge(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return yr(e,br(e,t,n,Ye(),r),bn())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=br(e,t,n,Ye(),r),En().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ge(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await cr(e),n=En().gapi;return Ke(n,e,"internal-error"),t.open({where:document.body,url:pr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Be(e,"network-request-failed"),s=En().setTimeout((()=>{r(i)}),hr.get());function o(){En().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new er(e);return t.register("authEvent",(t=>{Ke(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wr,{type:wr},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),ze(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pt()||Nt()||Lt()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yn,this._completeRedirectFn=Zn,this._overrideRedirectResult=Qn}};var kr,Sr="@firebase/auth",_r="0.20.5";
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
class Tr{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
function Ir(e=Se()){const t=be(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=be(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(T(n.getOptions(),null!=t?t:{}))return e;ze(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Er,persistence:[Rn,mn,yn]})}kr="Browser",ve(new L("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{Ke(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Ke(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:kr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mt(kr)},o=new Ut(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xe);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ve(new L("auth-internal",(e=>(e=>new Tr(e))(Vt(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),_e(Sr,_r,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(kr)),_e(Sr,_r,"esm2017");var Cr,Nr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},xr={},Ar=Ar||{},Dr=Nr||self;function Rr(){}function Or(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Lr(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Pr="closure_uid_"+(1e9*Math.random()>>>0),Mr=0;function Fr(e,t,n){return e.call.apply(e.bind,arguments)}function Ur(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Vr(e,t,n){return(Vr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Fr:Ur).apply(null,arguments)}function jr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function zr(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Br(){this.s=this.s,this.o=this.o}var $r={};Br.prototype.s=!1,Br.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Pr)&&e[Pr]||(e[Pr]=++Mr)}(this);delete $r[e]}},Br.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Hr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function Kr(e){return Array.prototype.concat.apply([],arguments)}function Wr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Gr(e){return/^[\s\xa0]*$/.test(e)}var Qr,Xr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Yr(e,t){return-1!=e.indexOf(t)}function Jr(e,t){return e<t?-1:e>t?1:0}e:{var Zr=Dr.navigator;if(Zr){var ei=Zr.userAgent;if(ei){Qr=ei;break e}}Qr=""}function ti(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ni(e){const t={};for(const n in e)t[n]=e[n];return t}var ri="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ii(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<ri.length;t++)n=ri[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function si(e){return si[" "](e),e}si[" "]=Rr;var oi,ai,ui=Yr(Qr,"Opera"),li=Yr(Qr,"Trident")||Yr(Qr,"MSIE"),ci=Yr(Qr,"Edge"),hi=ci||li,di=Yr(Qr,"Gecko")&&!(Yr(Qr.toLowerCase(),"webkit")&&!Yr(Qr,"Edge"))&&!(Yr(Qr,"Trident")||Yr(Qr,"MSIE"))&&!Yr(Qr,"Edge"),fi=Yr(Qr.toLowerCase(),"webkit")&&!Yr(Qr,"Edge");function pi(){var e=Dr.document;return e?e.documentMode:void 0}e:{var mi="",gi=(ai=Qr,di?/rv:([^\);]+)(\)|;)/.exec(ai):ci?/Edge\/([\d\.]+)/.exec(ai):li?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ai):fi?/WebKit\/(\S+)/.exec(ai):ui?/(?:Version)[ \/]?(\S+)/.exec(ai):void 0);if(gi&&(mi=gi?gi[1]:""),li){var yi=pi();if(null!=yi&&yi>parseFloat(mi)){oi=String(yi);break e}}oi=mi}var vi,bi={};function wi(){return function(e){var t=bi;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Xr(String(oi)).split("."),n=Xr("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Jr(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Jr(0==i[2].length,0==s[2].length)||Jr(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(Dr.document&&li){var Ei=pi();vi=Ei||(parseInt(oi,10)||void 0)}else vi=void 0;var ki=vi,Si=function(){if(!Dr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Dr.addEventListener("test",Rr,t),Dr.removeEventListener("test",Rr,t)}catch(e){}return e}();function _i(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Ti(e,t){if(_i.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(di){e:{try{si(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ii[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ti.Z.h.call(this)}}_i.prototype.h=function(){this.defaultPrevented=!0},zr(Ti,_i);var Ii={2:"touch",3:"pen",4:"mouse"};Ti.prototype.h=function(){Ti.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ci="closure_listenable_"+(1e6*Math.random()|0),Ni=0;function xi(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++Ni,this.ca=this.fa=!1}function Ai(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Di(e){this.src=e,this.g={},this.h=0}function Ri(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=qr(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ai(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Oi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}Di.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Oi(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new xi(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var Li="closure_lm_"+(1e6*Math.random()|0),Pi={};function Mi(e,t,n,r,i){if(r&&r.once)return Ui(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Mi(e,t[s],n,r,i);return null}return n=Hi(n),e&&e[Ci]?e.N(t,n,Lr(r)?!!r.capture:!!r,i):Fi(e,t,n,!1,r,i)}function Fi(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Lr(i)?!!i.capture:!!i,a=$i(e);if(a||(e[Li]=a=new Di(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Bi;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Si||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(zi(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ui(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ui(e,t[s],n,r,i);return null}return n=Hi(n),e&&e[Ci]?e.O(t,n,Lr(r)?!!r.capture:!!r,i):Fi(e,t,n,!0,r,i)}function Vi(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Vi(e,t[s],n,r,i);else r=Lr(r)?!!r.capture:!!r,n=Hi(n),e&&e[Ci]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Oi(s=e.g[t],n,r,i))&&(Ai(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=$i(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Oi(t,n,r,i)),(n=-1<e?t[e]:null)&&ji(n))}function ji(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Ci])Ri(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(zi(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=$i(t))?(Ri(n,e),0==n.h&&(n.src=null,t[Li]=null)):Ai(e)}}}function zi(e){return e in Pi?Pi[e]:Pi[e]="on"+e}function Bi(e,t){if(e.ca)e=!0;else{t=new Ti(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&ji(e),e=n.call(r,t)}return e}function $i(e){return(e=e[Li])instanceof Di?e:null}var qi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hi(e){return"function"==typeof e?e:(e[qi]||(e[qi]=function(t){return e.handleEvent(t)}),e[qi])}function Ki(){Br.call(this),this.i=new Di(this),this.P=this,this.I=null}function Wi(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new _i(t,e);else if(t instanceof _i)t.target=t.target||e;else{var i=t;ii(t=new _i(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Gi(o,r,!0,t)&&i}if(i=Gi(o=t.g=e,r,!0,t)&&i,i=Gi(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=Gi(o=t.g=n[s],r,!1,t)&&i}function Gi(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Ri(e.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}zr(Ki,Br),Ki.prototype[Ci]=!0,Ki.prototype.removeEventListener=function(e,t,n,r){Vi(this,e,t,n,r)},Ki.prototype.M=function(){if(Ki.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ai(n[r]);delete t.g[e],t.h--}}this.I=null},Ki.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ki.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Qi=Dr.JSON.stringify;function Xi(){var e=rs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Yi,Ji=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new Zi),(e=>e.reset()));class Zi{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function es(e){Dr.setTimeout((()=>{throw e}),0)}function ts(e,t){Yi||function(){var e=Dr.Promise.resolve(void 0);Yi=function(){e.then(is)}}(),ns||(Yi(),ns=!0),rs.add(e,t)}var ns=!1,rs=new class{add(e,t){const n=Ji.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function is(){for(var e;e=Xi();){try{e.h.call(e.g)}catch(e){es(e)}var t=Ji;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ns=!1}function ss(e,t){Ki.call(this),this.h=e||1,this.g=t||Dr,this.j=Vr(this.kb,this),this.l=Date.now()}function os(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function as(e,t,n){if("function"==typeof e)n&&(e=Vr(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Vr(e.handleEvent,e)}return 2147483647<Number(t)?-1:Dr.setTimeout(e,t||0)}function us(e){e.g=as((()=>{e.g=null,e.i&&(e.i=!1,us(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}zr(ss,Ki),(Cr=ss.prototype).da=!1,Cr.S=null,Cr.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Wi(this,"tick"),this.da&&(os(this),this.start()))}},Cr.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Cr.M=function(){ss.Z.M.call(this),os(this),delete this.g};class ls extends Br{l(e){this.h=arguments,this.g?this.i=!0:us(this)}M(){super.M(),this.g&&(Dr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function cs(e){Br.call(this),this.h=e,this.g={}}zr(cs,Br);var hs=[];function ds(e,t,n,r){Array.isArray(n)||(n&&(hs[0]=n.toString()),n=hs);for(var i=0;i<n.length;i++){var s=Mi(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function fs(e){ti(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ji(e)}),e),e.g={}}function ps(){this.g=!0}function ms(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Qi(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}cs.prototype.M=function(){cs.Z.M.call(this),fs(this)},cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ps.prototype.Aa=function(){this.g=!1},ps.prototype.info=function(){};var gs={},ys=null;function vs(){return ys=ys||new Ki}function bs(e){_i.call(this,gs.Ma,e)}function ws(e){const t=vs();Wi(t,new bs(t,e))}function Es(e,t){_i.call(this,gs.STAT_EVENT,e),this.stat=t}function ks(e){const t=vs();Wi(t,new Es(t,e))}function Ss(e,t){_i.call(this,gs.Na,e),this.size=t}function _s(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Dr.setTimeout((function(){e()}),t)}gs.Ma="serverreachability",zr(bs,_i),gs.STAT_EVENT="statevent",zr(Es,_i),gs.Na="timingevent",zr(Ss,_i);var Ts={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Is={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Cs(){}function Ns(e){return e.h||(e.h=e.i())}function xs(){}Cs.prototype.h=null;var As,Ds={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Rs(){_i.call(this,"d")}function Os(){_i.call(this,"c")}function Ls(){}function Ps(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new cs(this),this.P=Fs,e=hi?125:void 0,this.W=new ss(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ms}function Ms(){this.i=null,this.g="",this.h=!1}zr(Rs,_i),zr(Os,_i),zr(Ls,Cs),Ls.prototype.g=function(){return new XMLHttpRequest},Ls.prototype.i=function(){return{}},As=new Ls;var Fs=45e3,Us={},Vs={};function js(e,t,n){e.K=1,e.v=lo(ro(t)),e.s=n,e.U=!0,zs(e,null)}function zs(e,t){e.F=Date.now(),Hs(e),e.A=ro(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),So(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Ms,e.g=Sa(e.l,n?t:null,!e.s),0<e.O&&(e.L=new ls(Vr(e.Ia,e,e.g),e.O)),ds(e.V,e.g,"readystatechange",e.gb),t=e.H?ni(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ws(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+l+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Bs(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function $s(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=qs(e,n),r==Vs){4==t&&(e.o=4,ks(14),i=!1),ms(e.j,e.m,null,"[Incomplete Response]");break}if(r==Us){e.o=4,ks(15),ms(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}ms(e.j,e.m,r,null),Xs(e,r)}Bs(e)&&r!=Vs&&r!=Us&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ks(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ma(t),t.L=!0,ks(11))):(ms(e.j,e.m,n,"[Invalid Chunked Response]"),Qs(e),Gs(e))}function qs(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Vs:(n=Number(t.substring(n,r)),isNaN(n)?Us:(r+=1)+n>t.length?Vs:(t=t.substr(r,n),e.C=r+n,t))}function Hs(e){e.Y=Date.now()+e.P,Ks(e,e.P)}function Ks(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=_s(Vr(e.eb,e),t)}function Ws(e){e.B&&(Dr.clearTimeout(e.B),e.B=null)}function Gs(e){0==e.l.G||e.I||va(e.l,e)}function Qs(e){Ws(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,os(e.W),fs(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Xs(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||xo(n.i,e)))if(n.I=e.N,!e.J&&xo(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ya(n),oa(n)}pa(n),ks(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=_s(Vr(n.ab,n),6e3));if(1>=No(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else wa(n,11)}else if((e.J||n.g==e)&&ya(n),!Gr(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const c=l[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(Yr(e,"spdy")||Yr(e,"quic")||Yr(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Ao(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,uo(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=ka(r,r.H?r.la:null,r.W),o.J){Do(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Ws(a),Hs(a)),r.g=o}else fa(r);0<n.l.length&&la(n)}else"stop"!=l[0]&&"close"!=l[0]||wa(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?wa(n,7):sa(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}ws(4)}catch(e){}}function Ys(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Or(e)||"string"==typeof e)Hr(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Or(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Or(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Js(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Js)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Zs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];eo(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)eo(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function eo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Cr=Ps.prototype).setTimeout=function(e){this.P=e},Cr.gb=function(e){e=e.target;const t=this.L;t&&3==ea(e)?t.l():this.Ia(e)},Cr.Ia=function(e){try{if(e==this.g)e:{const c=ea(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>c)&&(3!=c||hi||this.g&&(this.h.h||this.g.ga()||ta(this.g)))){this.I||4!=c||7==t||ws(8==t||0>=h?3:2),Ws(this);var n=this.g.ba();this.N=n;t:if(Bs(this)){var r=ta(this.g);e="";var i=r.length,s=4==ea(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Qs(this),Gs(this);var o="";break t}this.h.i=new Dr.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gr(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ks(12),Qs(this),Gs(this);break e}ms(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xs(this,n)}this.U?($s(this,c,o),hi&&this.i&&3==c&&(ds(this.V,this.W,"tick",this.fb),this.W.start())):(ms(this.j,this.m,o,null),Xs(this,o)),4==c&&Qs(this),this.i&&!this.I&&(4==c?va(this.l,this):(this.i=!1,Hs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ks(12)):(this.o=0,ks(13)),Qs(this),Gs(this)}}}catch(e){}},Cr.fb=function(){if(this.g){var e=ea(this.g),t=this.g.ga();this.C<t.length&&(Ws(this),$s(this,e,t),this.i&&4!=e&&Hs(this))}},Cr.cancel=function(){this.I=!0,Qs(this)},Cr.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(ws(3),ks(17)),Qs(this),this.o=2,Gs(this)):Ks(this,this.Y-e)},(Cr=Js.prototype).R=function(){Zs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Cr.T=function(){return Zs(this),this.g.concat()},Cr.get=function(e,t){return eo(this.h,e)?this.h[e]:t},Cr.set=function(e,t){eo(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Cr.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var to=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function no(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof no){this.g=void 0!==t?t:e.g,io(this,e.j),this.s=e.s,so(this,e.i),oo(this,e.m),this.l=e.l,t=e.h;var n=new bo;n.i=t.i,t.g&&(n.g=new Js(t.g),n.h=t.h),ao(this,n),this.o=e.o}else e&&(n=String(e).match(to))?(this.g=!!t,io(this,n[1]||"",!0),this.s=co(n[2]||""),so(this,n[3]||"",!0),oo(this,n[4]),this.l=co(n[5]||"",!0),ao(this,n[6]||"",!0),this.o=co(n[7]||"")):(this.g=!!t,this.h=new bo(null,this.g))}function ro(e){return new no(e)}function io(e,t,n){e.j=n?co(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function so(e,t,n){e.i=n?co(t,!0):t}function oo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ao(e,t,n){t instanceof bo?(e.h=t,function(e,t){t&&!e.j&&(wo(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Eo(this,t),So(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=ho(t,yo)),e.h=new bo(t,e.g))}function uo(e,t,n){e.h.set(t,n)}function lo(e){return uo(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function co(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ho(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,fo),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fo(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}no.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ho(t,po,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ho(t,po,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(ho(n,"/"==n.charAt(0)?go:mo,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ho(n,vo)),e.join("")};var po=/[#\/\?@]/g,mo=/[#\?:]/g,go=/[#\?]/g,yo=/[#\?@]/g,vo=/#/g;function bo(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wo(e){e.g||(e.g=new Js,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Eo(e,t){wo(e),t=_o(e,t),eo(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,eo((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Zs(e)))}function ko(e,t){return wo(e),t=_o(e,t),eo(e.g.h,t)}function So(e,t,n){Eo(e,t),0<n.length&&(e.i=null,e.g.set(_o(e,t),Wr(n)),e.h+=n.length)}function _o(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Cr=bo.prototype).add=function(e,t){wo(this),this.i=null,e=_o(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Cr.forEach=function(e,t){wo(this),this.g.forEach((function(n,r){Hr(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Cr.T=function(){wo(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},Cr.R=function(e){wo(this);var t=[];if("string"==typeof e)ko(this,e)&&(t=Kr(t,this.g.get(_o(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Kr(t,e[n])}return t},Cr.set=function(e,t){return wo(this),this.i=null,ko(this,e=_o(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Cr.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Cr.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};function To(e){this.l=e||Io,Dr.PerformanceNavigationTiming?e=0<(e=Dr.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Dr.g&&Dr.g.Ea&&Dr.g.Ea()&&Dr.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Io=10;function Co(e){return!!e.h||!!e.g&&e.g.size>=e.j}function No(e){return e.h?1:e.g?e.g.size:0}function xo(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ao(e,t){e.g?e.g.add(t):e.h=t}function Do(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ro(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Wr(e.i)}function Oo(){}function Lo(){this.g=new Oo}function Po(e,t,n){const r=n||"";try{Ys(e,(function(e,n){let i=e;Lr(e)&&(i=Qi(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Mo(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function Fo(e){this.l=e.$b||null,this.j=e.ib||!1}function Uo(e,t){Ki.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Vo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}To.prototype.cancel=function(){if(this.i=Ro(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Oo.prototype.stringify=function(e){return Dr.JSON.stringify(e,void 0)},Oo.prototype.parse=function(e){return Dr.JSON.parse(e,void 0)},zr(Fo,Cs),Fo.prototype.g=function(){return new Uo(this.l,this.j)},Fo.prototype.i=function(e){return function(){return e}}({}),zr(Uo,Ki);var Vo=0;function jo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function zo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Bo(e)}function Bo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Cr=Uo.prototype).open=function(e,t){if(this.readyState!=Vo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Bo(this)},Cr.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Dr).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Cr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,zo(this)),this.readyState=Vo},Cr.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Bo(this)),this.g&&(this.readyState=3,Bo(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Dr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Cr.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?zo(this):Bo(this),3==this.readyState&&jo(this)}},Cr.Ua=function(e){this.g&&(this.response=this.responseText=e,zo(this))},Cr.Ta=function(e){this.g&&(this.response=e,zo(this))},Cr.ha=function(){this.g&&zo(this)},Cr.setRequestHeader=function(e,t){this.v.append(e,t)},Cr.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Cr.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Uo.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var $o=Dr.JSON.parse;function qo(e){Ki.call(this),this.headers=new Js,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ho,this.K=this.L=!1}zr(qo,Ki);var Ho="",Ko=/^https?$/i,Wo=["POST","PUT"];function Go(e){return"content-type"==e.toLowerCase()}function Qo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Xo(e),Jo(e)}function Xo(e){e.D||(e.D=!0,Wi(e,"complete"),Wi(e,"error"))}function Yo(e){if(e.h&&void 0!==Ar&&(!e.C[1]||4!=ea(e)||2!=e.ba()))if(e.v&&4==ea(e))as(e.Fa,0,e);else if(Wi(e,"readystatechange"),4==ea(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(to)[1]||null;if(!i&&Dr.self&&Dr.self.location){var s=Dr.self.location.protocol;i=s.substr(0,s.length-1)}r=!Ko.test(i?i.toLowerCase():"")}n=r}if(n)Wi(e,"complete"),Wi(e,"success");else{e.m=6;try{var o=2<ea(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Xo(e)}}finally{Jo(e)}}}function Jo(e,t){if(e.g){Zo(e);const n=e.g,r=e.C[0]?Rr:null;e.g=null,e.C=null,t||Wi(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Zo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Dr.clearTimeout(e.A),e.A=null)}function ea(e){return e.g?e.g.readyState:0}function ta(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ho:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function na(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return ti(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):uo(e,t,n))}function ra(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ia(e){this.za=0,this.l=[],this.h=new ps,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ra("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ra("baseRetryDelayMs",5e3,e),this.$a=ra("retryDelaySeedMs",1e4,e),this.Ya=ra("forwardChannelMaxRetries",2,e),this.ra=ra("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new To(e&&e.concurrentRequestLimit),this.Ca=new Lo,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function sa(e){if(aa(e),3==e.G){var t=e.V++,n=ro(e.F);uo(n,"SID",e.J),uo(n,"RID",t),uo(n,"TYPE","terminate"),ha(e,n),(t=new Ps(e,e.h,t,void 0)).K=2,t.v=lo(ro(n)),n=!1,Dr.navigator&&Dr.navigator.sendBeacon&&(n=Dr.navigator.sendBeacon(t.v.toString(),"")),!n&&Dr.Image&&((new Image).src=t.v,n=!0),n||(t.g=Sa(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Hs(t)}Ea(e)}function oa(e){e.g&&(ma(e),e.g.cancel(),e.g=null)}function aa(e){oa(e),e.u&&(Dr.clearTimeout(e.u),e.u=null),ya(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Dr.clearTimeout(e.m),e.m=null)}function ua(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&la(e)}function la(e){Co(e.i)||e.m||(e.m=!0,ts(e.Ha,e),e.C=0)}function ca(e,t){var n;n=t?t.m:e.V++;const r=ro(e.F);uo(r,"SID",e.J),uo(r,"RID",n),uo(r,"AID",e.U),ha(e,r),e.o&&e.s&&na(r,e.o,e.s),n=new Ps(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=da(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Ao(e.i,n),js(n,r,t)}function ha(e,t){e.j&&Ys({},(function(e,n){uo(t,n,e)}))}function da(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Vr(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Po(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function fa(e){e.g||e.u||(e.Y=1,ts(e.Ga,e),e.A=0)}function pa(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=_s(Vr(e.Ga,e),ba(e,e.A)),e.A++,!0)}function ma(e){null!=e.B&&(Dr.clearTimeout(e.B),e.B=null)}function ga(e){e.g=new Ps(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=ro(e.oa);uo(t,"RID","rpc"),uo(t,"SID",e.J),uo(t,"CI",e.N?"0":"1"),uo(t,"AID",e.U),ha(e,t),uo(t,"TYPE","xmlhttp"),e.o&&e.s&&na(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=lo(ro(t)),n.s=null,n.U=!0,zs(n,e)}function ya(e){null!=e.v&&(Dr.clearTimeout(e.v),e.v=null)}function va(e,t){var n=null;if(e.g==t){ya(e),ma(e),e.g=null;var r=2}else{if(!xo(e.i,t))return;n=t.D,Do(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;Wi(r=vs(),new Ss(r,n,t,i)),la(e)}else fa(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(No(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=_s(Vr(e.Ha,e,t),ba(e,e.C)),e.C++,0)))}(e,t)||2==r&&pa(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:wa(e,5);break;case 4:wa(e,10);break;case 3:wa(e,6);break;default:wa(e,2)}}function ba(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function wa(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Vr(e.jb,e);n||(n=new no("//www.google.com/images/cleardot.gif"),Dr.location&&"http"==Dr.location.protocol||io(n,"https"),lo(n)),function(e,t){const n=new ps;if(Dr.Image){const r=new Image;r.onload=jr(Mo,n,r,"TestLoadImage: loaded",!0,t),r.onerror=jr(Mo,n,r,"TestLoadImage: error",!1,t),r.onabort=jr(Mo,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=jr(Mo,n,r,"TestLoadImage: timeout",!1,t),Dr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else ks(2);e.G=0,e.j&&e.j.va(t),Ea(e),aa(e)}function Ea(e){e.G=0,e.I=-1,e.j&&(0==Ro(e.i).length&&0==e.l.length||(e.i.i.length=0,Wr(e.l),e.l.length=0),e.j.ua())}function ka(e,t,n){let r=function(e){return e instanceof no?ro(e):new no(e,void 0)}(n);if(""!=r.i)t&&so(r,t+"."+r.i),oo(r,r.m);else{const e=Dr.location;r=function(e,t,n,r){var i=new no(null,void 0);return e&&io(i,e),t&&so(i,t),n&&oo(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&ti(e.aa,(function(e,t){uo(r,t,e)})),t=e.D,n=e.sa,t&&n&&uo(r,t,n),uo(r,"VER",e.ma),ha(e,r),r}function Sa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new qo(new Fo({ib:!0})):new qo(e.qa)).L=e.H,t}function _a(){}function Ta(){if(li&&!(10<=Number(ki)))throw Error("Environmental error: no available transport.")}function Ia(e,t){Ki.call(this),this.g=new ia(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Gr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Gr(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new xa(this)}function Ca(e){Rs.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Na(){Os.call(this),this.status=1}function xa(e){this.g=e}(Cr=qo.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():As.g(),this.C=this.u?Ns(this.u):Ns(As),this.g.onreadystatechange=Vr(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Qo(this,e)}e=n||"";const i=new Js(this.headers);r&&Ys(r,(function(e,t){i.set(t,e)})),r=function(e){e:{var t=Go;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=Dr.FormData&&e instanceof Dr.FormData,!(0<=qr(Wo,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zo(this),0<this.B&&((this.K=function(e){return li&&wi()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Vr(this.pa,this)):this.A=as(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Qo(this,e)}},Cr.pa=function(){void 0!==Ar&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Wi(this,"timeout"),this.abort(8))},Cr.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Wi(this,"complete"),Wi(this,"abort"),Jo(this))},Cr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jo(this,!0)),qo.Z.M.call(this)},Cr.Fa=function(){this.s||(this.F||this.v||this.l?Yo(this):this.cb())},Cr.cb=function(){Yo(this)},Cr.ba=function(){try{return 2<ea(this)?this.g.status:-1}catch(e){return-1}},Cr.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Cr.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),$o(t)}},Cr.Da=function(){return this.m},Cr.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Cr=ia.prototype).ma=8,Cr.G=1,Cr.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Cr.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ps(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=ni(s),ii(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=da(this,i,t),uo(n=ro(this.F),"RID",e),uo(n,"CVER",22),this.D&&uo(n,"X-HTTP-Session-Id",this.D),ha(this,n),this.o&&s&&na(n,this.o,s),Ao(this.i,i),this.Ra&&uo(n,"TYPE","init"),this.ja?(uo(n,"$req",t),uo(n,"SID","null"),i.$=!0,js(i,n,null)):js(i,n,t),this.G=2}}else 3==this.G&&(e?ca(this,e):0==this.l.length||Co(this.i)||ca(this))},Cr.Ga=function(){if(this.u=null,ga(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=_s(Vr(this.bb,this),e)}},Cr.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ks(10),oa(this),ga(this))},Cr.ab=function(){null!=this.v&&(this.v=null,oa(this),pa(this),ks(19))},Cr.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ks(2)):(this.h.info("Failed to ping google.com"),ks(1))},(Cr=_a.prototype).xa=function(){},Cr.wa=function(){},Cr.va=function(){},Cr.ua=function(){},Cr.Oa=function(){},Ta.prototype.g=function(e,t){return new Ia(e,t)},zr(Ia,Ki),Ia.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),ts(Vr(e.hb,e,t))),ks(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=ka(e,null,e.W),la(e)},Ia.prototype.close=function(){sa(this.g)},Ia.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,ua(this.g,t)}else this.v?((t={}).__data__=Qi(e),ua(this.g,t)):ua(this.g,e)},Ia.prototype.M=function(){this.g.j=null,delete this.j,sa(this.g),delete this.g,Ia.Z.M.call(this)},zr(Ca,Rs),zr(Na,Os),zr(xa,_a),xa.prototype.xa=function(){Wi(this.g,"a")},xa.prototype.wa=function(e){Wi(this.g,new Ca(e))},xa.prototype.va=function(e){Wi(this.g,new Na(e))},xa.prototype.ua=function(){Wi(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,Ia.prototype.send=Ia.prototype.u,Ia.prototype.open=Ia.prototype.m,Ia.prototype.close=Ia.prototype.close,Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Is.COMPLETE="complete",xs.EventType=Ds,Ds.OPEN="a",Ds.CLOSE="b",Ds.ERROR="c",Ds.MESSAGE="d",Ki.prototype.listen=Ki.prototype.N,qo.prototype.listenOnce=qo.prototype.O,qo.prototype.getLastError=qo.prototype.La,qo.prototype.getLastErrorCode=qo.prototype.Da,qo.prototype.getStatus=qo.prototype.ba,qo.prototype.getResponseJson=qo.prototype.Qa,qo.prototype.getResponseText=qo.prototype.ga,qo.prototype.send=qo.prototype.ea;var Aa,Da,Ra=xr.createWebChannelTransport=function(){return new Ta},Oa=xr.getStatEventTarget=function(){return vs()},La=xr.ErrorCode=Ts,Pa=xr.EventType=Is,Ma=xr.Event=gs,Fa=xr.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ua=xr.FetchXmlHttpFactory=Fo,Va=xr.WebChannel=xs,ja=xr.XhrIo=qo,za={};function Ba(){throw new Error("setTimeout has not been defined")}function $a(){throw new Error("clearTimeout has not been defined")}function qa(e){if(Aa===setTimeout)return setTimeout(e,0);if((Aa===Ba||!Aa)&&setTimeout)return Aa=setTimeout,setTimeout(e,0);try{return Aa(e,0)}catch(t){try{return Aa.call(null,e,0)}catch(t){return Aa.call(this,e,0)}}}!function(){try{Aa="function"==typeof setTimeout?setTimeout:Ba}catch(e){Aa=Ba}try{Da="function"==typeof clearTimeout?clearTimeout:$a}catch(e){Da=$a}}();var Ha,Ka=[],Wa=!1,Ga=-1;function Qa(){Wa&&Ha&&(Wa=!1,Ha.length?Ka=Ha.concat(Ka):Ga=-1,Ka.length&&Xa())}function Xa(){if(!Wa){var e=qa(Qa);Wa=!0;for(var t=Ka.length;t;){for(Ha=Ka,Ka=[];++Ga<t;)Ha&&Ha[Ga].run();Ga=-1,t=Ka.length}Ha=null,Wa=!1,function(e){if(Da===clearTimeout)return clearTimeout(e);if((Da===$a||!Da)&&clearTimeout)return Da=clearTimeout,clearTimeout(e);try{Da(e)}catch(t){try{return Da.call(null,e)}catch(t){return Da.call(this,e)}}}(e)}}function Ya(e,t){this.fun=e,this.array=t}function Ja(){}za.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Ka.push(new Ya(e,t)),1!==Ka.length||Wa||qa(Xa)},Ya.prototype.run=function(){this.fun.apply(null,this.array)},za.title="browser",za.browser=!0,za.env={},za.argv=[],za.version="",za.versions={},za.on=Ja,za.addListener=Ja,za.once=Ja,za.off=Ja,za.removeListener=Ja,za.removeAllListeners=Ja,za.emit=Ja,za.prependListener=Ja,za.prependOnceListener=Ja,za.listeners=function(e){return[]},za.binding=function(e){throw new Error("process.binding is not supported")},za.cwd=function(){return"/"},za.chdir=function(e){throw new Error("process.chdir is not supported")},za.umask=function(){return 0};const Za="@firebase/firestore";
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
 */class eu{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}eu.UNAUTHENTICATED=new eu(null),eu.GOOGLE_CREDENTIALS=new eu("google-credentials-uid"),eu.FIRST_PARTY=new eu("first-party-uid"),eu.MOCK_USER=new eu("mock-user");
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
let tu="9.9.2";
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
 */const nu=new H("@firebase/firestore");function ru(){return nu.logLevel}function iu(e,...t){if(nu.logLevel<=V.DEBUG){const n=t.map(au);nu.debug(`Firestore (${tu}): ${e}`,...n)}}function su(e,...t){if(nu.logLevel<=V.ERROR){const n=t.map(au);nu.error(`Firestore (${tu}): ${e}`,...n)}}function ou(e,...t){if(nu.logLevel<=V.WARN){const n=t.map(au);nu.warn(`Firestore (${tu}): ${e}`,...n)}}function au(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function uu(e="Unexpected state"){const t=`FIRESTORE (${tu}) INTERNAL ASSERTION FAILED: `+e;throw su(t),new Error(t)}function lu(e,t){e||uu()}function cu(e,t){return e}
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
 */const hu={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class du extends E{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class fu{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class pu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(eu.UNAUTHENTICATED)))}shutdown(){}}class gu{start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new fu;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fu,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{iu("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(iu("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fu)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(iu("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(lu("string"==typeof t.accessToken),new pu(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return lu(null===e||"string"==typeof e),new eu(e)}constructor(e){this.t=e,this.currentUser=eu.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class yu{constructor(e,t,n){this.type="FirstParty",this.user=eu.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class vu{getToken(){return Promise.resolve(new yu(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(eu.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class bu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wu{start(e,t){const n=e=>{null!=e.error&&iu("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,iu("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{iu("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):iu("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(lu("string"==typeof e.token),this.p=e.token,new bu(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
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
function Eu(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class ku{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Eu(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Su(e,t){return e<t?-1:e>t?1:0}function _u(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class Tu{static now(){return Tu.fromMillis(Date.now())}static fromDate(e){return Tu.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Tu(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Su(this.nanoseconds,e.nanoseconds):Su(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new du(hu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new du(hu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new du(hu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new du(hu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
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
 */class Iu{static fromTimestamp(e){return new Iu(e)}static min(){return new Iu(new Tu(0,0))}static max(){return new Iu(new Tu(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
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
 */class Cu{get length(){return this.len}isEqual(e){return 0===Cu.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Cu?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&uu(),void 0===n?n=e.length-t:n>e.length-t&&uu(),this.segments=e,this.offset=t,this.len=n}}class Nu extends Cu{construct(e,t,n){return new Nu(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new du(hu.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Nu(t)}static emptyPath(){return new Nu([])}}const xu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Au extends Cu{construct(e,t,n){return new Au(e,t,n)}static isValidIdentifier(e){return xu.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Au.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Au(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new du(hu.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new du(hu.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new du(hu.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new du(hu.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Au(t)}static emptyPath(){return new Au([])}}
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
 */class Du{static fromPath(e){return new Du(Nu.fromString(e))}static fromName(e){return new Du(Nu.fromString(e).popFirst(5))}static empty(){return new Du(Nu.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Nu.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Nu.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Du(new Nu(e.slice()))}constructor(e){this.path=e}}
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
 */class Ru{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ru.UNKNOWN_ID=-1;function Ou(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Iu.fromTimestamp(1e9===r?new Tu(n+1,0):new Tu(n,r));return new Pu(i,Du.empty(),t)}function Lu(e){return new Pu(e.readTime,e.key,-1)}class Pu{static min(){return new Pu(Iu.min(),Du.empty(),-1)}static max(){return new Pu(Iu.max(),Du.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function Mu(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Du.comparator(e.documentKey,t.documentKey),0!==n?n:Su(e.largestBatchId,t.largestBatchId))}
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
 */const Fu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uu{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
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
 */async function Vu(e){if(e.code!==hu.FAILED_PRECONDITION||e.message!==Fu)throw e;iu("LocalStore","Unexpectedly lost primary lease")}
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
 */class ju{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&uu(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ju(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ju?t:ju.resolve(t)}catch(e){return ju.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ju.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ju.reject(t)}static resolve(e){return new ju(((t,n)=>{t(e)}))}static reject(e){return new ju(((t,n)=>{n(e)}))}static waitFor(e){return new ju(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=ju.resolve(!1);for(const n of e)t=t.next((e=>e?ju.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new ju(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;t(e[u]).next((e=>{s[u]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new ju(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
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
 */function zu(e){return"IndexedDbTransactionError"===e.name}
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
class Bu{it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.it(e),this.rt=e=>t.writeSequenceNumber(e))}}
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
 */function $u(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function qu(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Hu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */Bu.ot=-1;class Ku{insert(e,t){return new Ku(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Gu.BLACK,null,null))}remove(e){return new Ku(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gu.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wu(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||Gu.EMPTY}}class Wu{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class Gu{copy(e,t,n,r,i){return new Gu(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Gu.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Gu.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw uu();if(this.right.isRed())throw uu();const e=this.left.check();if(e!==this.right.check())throw uu();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Gu.RED,this.left=null!=r?r:Gu.EMPTY,this.right=null!=i?i:Gu.EMPTY,this.size=this.left.size+1+this.right.size}}Gu.EMPTY=null,Gu.RED=!0,Gu.BLACK=!1,Gu.EMPTY=new class{get key(){throw uu()}get value(){throw uu()}get color(){throw uu()}get left(){throw uu()}get right(){throw uu()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Gu(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class Qu{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xu(this.data.getIterator())}getIteratorFrom(e){return new Xu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Qu))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Qu(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new Ku(this.comparator)}}class Xu{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
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
class Yu{static empty(){return new Yu([])}unionWith(e){let t=new Qu(Au.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Yu(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _u(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(Au.comparator)}}
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
class Ju{static fromBase64String(e){const t=atob(e);return new Ju(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ju(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Su(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}Ju.EMPTY_BYTE_STRING=new Ju("");const Zu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function el(e){if(lu(!!e),"string"==typeof e){let t=0;const n=Zu.exec(e);if(lu(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tl(e.seconds),nanos:tl(e.nanos)}}function tl(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function nl(e){return"string"==typeof e?Ju.fromBase64String(e):Ju.fromUint8Array(e)}
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
 */function rl(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function il(e){const t=e.mapValue.fields.__previous_value__;return rl(t)?il(t):t}function sl(e){const t=el(e.mapValue.fields.__local_write_time__.timestampValue);return new Tu(t.seconds,t.nanos)}
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
 */class ol{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class al{static empty(){return new al("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
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
 */function ul(e){return null==e}function ll(e){return 0===e&&1/e==-1/0}function cl(e){return"number"==typeof e&&Number.isInteger(e)&&!ll(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */const hl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dl(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rl(e)?4:Il(e)?9007199254740991:10:uu()}function fl(e,t){if(e===t)return!0;const n=dl(e);if(n!==dl(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return sl(e).isEqual(sl(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=el(e.timestampValue),r=el(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return nl(e.bytesValue).isEqual(nl(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return tl(e.geoPointValue.latitude)===tl(t.geoPointValue.latitude)&&tl(e.geoPointValue.longitude)===tl(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return tl(e.integerValue)===tl(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=tl(e.doubleValue),r=tl(t.doubleValue);return n===r?ll(n)===ll(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return _u(e.arrayValue.values||[],t.arrayValue.values||[],fl);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if($u(n)!==$u(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!fl(n[e],r[e])))return!1;return!0}(e,t);default:return uu()}}function pl(e,t){return void 0!==(e.values||[]).find((e=>fl(e,t)))}function ml(e,t){if(e===t)return 0;const n=dl(e),r=dl(t);if(n!==r)return Su(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Su(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=tl(e.integerValue||e.doubleValue),r=tl(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return gl(e.timestampValue,t.timestampValue);case 4:return gl(sl(e),sl(t));case 5:return Su(e.stringValue,t.stringValue);case 6:return function(e,t){const n=nl(e),r=nl(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Su(n[e],r[e]);if(0!==t)return t}return Su(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Su(tl(e.latitude),tl(t.latitude));return 0!==n?n:Su(tl(e.longitude),tl(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=ml(n[e],r[e]);if(t)return t}return Su(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===hl.mapValue&&t===hl.mapValue)return 0;if(e===hl.mapValue)return 1;if(t===hl.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Su(r[e],s[e]);if(0!==t)return t;const o=ml(n[r[e]],i[s[e]]);if(0!==o)return o}return Su(r.length,s.length)}(e.mapValue,t.mapValue);default:throw uu()}}function gl(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Su(e,t);const n=el(e),r=el(t),i=Su(n.seconds,r.seconds);return 0!==i?i:Su(n.nanos,r.nanos)}function yl(e){return vl(e)}function vl(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=el(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?nl(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Du.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=vl(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${vl(e.fields[i])}`;return n+"}"}(e.mapValue):uu()}function bl(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function wl(e){return!!e&&"integerValue"in e}function El(e){return!!e&&"arrayValue"in e}function kl(e){return!!e&&"nullValue"in e}function Sl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _l(e){return!!e&&"mapValue"in e}function Tl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return qu(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Tl(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Tl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Il(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Cl{static empty(){return new Cl({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!_l(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tl(t)}setAll(e){let t=Au.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Tl(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());_l(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fl(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];_l(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){qu(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Cl(Tl(this.value))}constructor(e){this.value=e}}function Nl(e){const t=[];return qu(e.fields,((e,n)=>{const r=new Au([e]);if(_l(n)){const e=Nl(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Yu(t)
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
 */}class xl{static newInvalidDocument(e){return new xl(e,0,Iu.min(),Iu.min(),Cl.empty(),0)}static newFoundDocument(e,t,n){return new xl(e,1,t,Iu.min(),n,0)}static newNoDocument(e,t){return new xl(e,2,t,Iu.min(),Cl.empty(),0)}static newUnknownDocument(e,t){return new xl(e,3,t,Iu.min(),Cl.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cl.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Iu.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof xl&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xl(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}}
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
 */class Al{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ut=null}}function Dl(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Al(e,t,n,r,i,s,o)}function Rl(e){const t=cu(e);if(null===t.ut){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{var t;return(t=e).field.canonicalString()+t.op.toString()+yl(t.value)})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ul(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>yl(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>yl(e))).join(",")),t.ut=e}return t.ut}function Ol(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Kl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!fl(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Gl(e.startAt,t.startAt)&&Gl(e.endAt,t.endAt)}function Ll(e){return Du.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Pl extends class{}{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.ct(e,t,n):new Ml(e,t,n):"array-contains"===t?new jl(e,n):"in"===t?new zl(e,n):"not-in"===t?new Bl(e,n):"array-contains-any"===t?new $l(e,n):new Pl(e,t,n)}static ct(e,t,n){return"in"===t?new Fl(e,n):new Ul(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.at(ml(t,this.value)):null!==t&&dl(this.value)===dl(t)&&this.at(ml(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return uu()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class Ml extends Pl{matches(e){const t=Du.comparator(e.key,this.key);return this.at(t)}constructor(e,t,n){super(e,t,n),this.key=Du.fromName(n.referenceValue)}}class Fl extends Pl{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=Vl("in",t)}}class Ul extends Pl{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=Vl("not-in",t)}}function Vl(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Du.fromName(e.referenceValue)))}class jl extends Pl{matches(e){const t=e.data.field(this.field);return El(t)&&pl(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class zl extends Pl{matches(e){const t=e.data.field(this.field);return null!==t&&pl(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class Bl extends Pl{matches(e){if(pl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!pl(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class $l extends Pl{matches(e){const t=e.data.field(this.field);return!(!El(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>pl(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}class ql{constructor(e,t){this.position=e,this.inclusive=t}}class Hl{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Wl(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Du.comparator(Du.fromName(o.referenceValue),n.key):ml(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Gl(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fl(e.position[n],t.position[n]))return!1;return!0}
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
 */class Ql{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Xl(e,t,n,r,i,s,o,a){return new Ql(e,t,n,r,i,s,o,a)}function Yl(e){return new Ql(e)}function Jl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Zl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ec(e){for(const t of e.filters)if(t.ht())return t.field;return null}function tc(e){return null!==e.collectionGroup}function nc(e){const t=cu(e);if(null===t.lt){t.lt=[];const e=ec(t),n=Zl(t);if(null!==e&&null===n)e.isKeyField()||t.lt.push(new Hl(e)),t.lt.push(new Hl(Au.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.lt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Hl(Au.keyField(),e))}}}return t.lt}function rc(e){const t=cu(e);if(!t.ft)if("F"===t.limitType)t.ft=Dl(t.path,t.collectionGroup,nc(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of nc(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Hl(n.field,t))}const n=t.endAt?new ql(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ql(t.startAt.position,t.startAt.inclusive):null;t.ft=Dl(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.ft}function ic(e,t,n){return new Ql(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function sc(e,t){return Ol(rc(e),rc(t))&&e.limitType===t.limitType}function oc(e){return`${Rl(rc(e))}|lt:${e.limitType}`}function ac(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{var t;return`${(t=e).field.canonicalString()} ${t.op} ${yl(t.value)}`})).join(", ")}]`),ul(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>yl(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>yl(e))).join(",")),`Target(${t})`}(rc(e))}; limitType=${e.limitType})`}function uc(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Du.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Wl(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,nc(e),t))&&!(e.endAt&&!function(e,t,n){const r=Wl(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,nc(e),t))}(e,t)}function lc(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function cc(e){return(t,n)=>{let r=!1;for(const i of nc(e)){const e=hc(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function hc(e,t,n){const r=e.field.isKeyField()?Du.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ml(r,i):uu()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return uu()}}
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
 */function dc(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ll(t)?"-0":t}}function fc(e){return{integerValue:""+e}}function pc(e,t){return cl(t)?fc(t):dc(e,t)}
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
 */class mc{constructor(){this._=void 0}}function gc(e,t,n){return e instanceof bc?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof wc?Ec(e,t):e instanceof kc?Sc(e,t):function(e,t){const n=vc(e,t),r=Tc(n)+Tc(e._t);return wl(n)&&wl(e._t)?fc(r):dc(e.wt,r)}(e,t)}function yc(e,t,n){return e instanceof wc?Ec(e,t):e instanceof kc?Sc(e,t):n}function vc(e,t){var n;return e instanceof _c?wl(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class bc extends mc{}class wc extends mc{constructor(e){super(),this.elements=e}}function Ec(e,t){const n=Ic(t);for(const t of e.elements)n.some((e=>fl(e,t)))||n.push(t);return{arrayValue:{values:n}}}class kc extends mc{constructor(e){super(),this.elements=e}}function Sc(e,t){let n=Ic(t);for(const t of e.elements)n=n.filter((e=>!fl(e,t)));return{arrayValue:{values:n}}}class _c extends mc{constructor(e,t){super(),this.wt=e,this._t=t}}function Tc(e){return tl(e.integerValue||e.doubleValue)}function Ic(e){return El(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class Cc{constructor(e,t){this.version=e,this.transformResults=t}}class Nc{static none(){return new Nc}static exists(e){return new Nc(void 0,e)}static updateTime(e){return new Nc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function xc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ac{}function Dc(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new zc(e.key,Nc.none()):new Mc(e.key,e.data,Nc.none());{const n=e.data,r=Cl.empty();let i=new Qu(Au.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Fc(e.key,r,new Yu(i.toArray()),Nc.none())}}function Rc(e,t,n){e instanceof Mc?function(e,t,n){const r=e.value.clone(),i=Vc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Fc?function(e,t,n){if(!xc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Vc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Uc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Oc(e,t,n,r){return e instanceof Mc?function(e,t,n,r){if(!xc(e.precondition,t))return n;const i=e.value.clone(),s=jc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Fc?function(e,t,n,r){if(!xc(e.precondition,t))return n;const i=jc(e.fieldTransforms,r,t),s=t.data;return s.setAll(Uc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return xc(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Lc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=vc(r.transform,e||null);null!=i&&(null===n&&(n=Cl.empty()),n.set(r.field,i))}return n||null}function Pc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&_u(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof wc&&t instanceof wc||e instanceof kc&&t instanceof kc?_u(e.elements,t.elements,fl):e instanceof _c&&t instanceof _c?fl(e._t,t._t):e instanceof bc&&t instanceof bc}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Mc extends Ac{getFieldMask(){return null}constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Fc extends Ac{getFieldMask(){return this.fieldMask}constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Uc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Vc(e,t,n){const r=new Map;lu(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,yc(o,a,n[i]))}return r}function jc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,gc(e,s,t))}return r}class zc extends Ac{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Bc extends Ac{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */class $c{constructor(e){this.count=e}}
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
 */var qc,Hc;function Kc(e){switch(e){default:return uu();case hu.CANCELLED:case hu.UNKNOWN:case hu.DEADLINE_EXCEEDED:case hu.RESOURCE_EXHAUSTED:case hu.INTERNAL:case hu.UNAVAILABLE:case hu.UNAUTHENTICATED:return!1;case hu.INVALID_ARGUMENT:case hu.NOT_FOUND:case hu.ALREADY_EXISTS:case hu.PERMISSION_DENIED:case hu.FAILED_PRECONDITION:case hu.ABORTED:case hu.OUT_OF_RANGE:case hu.UNIMPLEMENTED:case hu.DATA_LOSS:return!0}}function Wc(e){if(void 0===e)return su("GRPC error has no .code"),hu.UNKNOWN;switch(e){case qc.OK:return hu.OK;case qc.CANCELLED:return hu.CANCELLED;case qc.UNKNOWN:return hu.UNKNOWN;case qc.DEADLINE_EXCEEDED:return hu.DEADLINE_EXCEEDED;case qc.RESOURCE_EXHAUSTED:return hu.RESOURCE_EXHAUSTED;case qc.INTERNAL:return hu.INTERNAL;case qc.UNAVAILABLE:return hu.UNAVAILABLE;case qc.UNAUTHENTICATED:return hu.UNAUTHENTICATED;case qc.INVALID_ARGUMENT:return hu.INVALID_ARGUMENT;case qc.NOT_FOUND:return hu.NOT_FOUND;case qc.ALREADY_EXISTS:return hu.ALREADY_EXISTS;case qc.PERMISSION_DENIED:return hu.PERMISSION_DENIED;case qc.FAILED_PRECONDITION:return hu.FAILED_PRECONDITION;case qc.ABORTED:return hu.ABORTED;case qc.OUT_OF_RANGE:return hu.OUT_OF_RANGE;case qc.UNIMPLEMENTED:return hu.UNIMPLEMENTED;case qc.DATA_LOSS:return hu.DATA_LOSS;default:return uu()}}(Hc=qc||(qc={}))[Hc.OK=0]="OK",Hc[Hc.CANCELLED=1]="CANCELLED",Hc[Hc.UNKNOWN=2]="UNKNOWN",Hc[Hc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Hc[Hc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Hc[Hc.NOT_FOUND=5]="NOT_FOUND",Hc[Hc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Hc[Hc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Hc[Hc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Hc[Hc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Hc[Hc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Hc[Hc.ABORTED=10]="ABORTED",Hc[Hc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Hc[Hc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Hc[Hc.INTERNAL=13]="INTERNAL",Hc[Hc.UNAVAILABLE=14]="UNAVAILABLE",Hc[Hc.DATA_LOSS=15]="DATA_LOSS";
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
class Gc{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){qu(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Hu(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
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
 */const Qc=new Ku(Du.comparator);function Xc(){return Qc}const Yc=new Ku(Du.comparator);function Jc(...e){let t=Yc;for(const n of e)t=t.insert(n.key,n);return t}function Zc(e){let t=Yc;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function eh(){return nh()}function th(){return nh()}function nh(){return new Gc((e=>e.toString()),((e,t)=>e.isEqual(t)))}const rh=new Ku(Du.comparator),ih=new Qu(Du.comparator);function sh(...e){let t=ih;for(const n of e)t=t.add(n);return t}const oh=new Qu(Su);function ah(){return oh}
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
 */class uh{static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,lh.createSynthesizedTargetChangeForCurrentChange(e,t)),new uh(Iu.min(),n,ah(),Xc(),sh())}constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class lh{static createSynthesizedTargetChangeForCurrentChange(e,t){return new lh(Ju.EMPTY_BYTE_STRING,t,sh(),sh(),sh())}constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
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
 */class ch{constructor(e,t,n,r){this.gt=e,this.removedTargetIds=t,this.key=n,this.yt=r}}class hh{constructor(e,t){this.targetId=e,this.It=t}}class dh{constructor(e,t,n=Ju.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class fh{get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=sh(),t=sh(),n=sh();return this.Et.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:uu()}})),new lh(this.At,this.Rt,e,t,n)}Dt(){this.bt=!1,this.Et=gh()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}constructor(){this.Tt=0,this.Et=gh(),this.At=Ju.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}}class ph{Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,(t=>{const n=this.Qt(t);switch(e.state){case 0:this.jt(t)&&n.Vt(e.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(e.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(n.Mt(),n.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),n.Vt(e.resumeToken));break;default:uu()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach(((e,n)=>{this.jt(n)&&t(n)}))}zt(e){const t=e.targetId,n=e.It.count,r=this.Ht(t);if(r){const e=r.target;if(Ll(e))if(0===n){const n=new Du(e.path);this.Kt(t,n,xl.newNoDocument(n,Iu.min()))}else lu(1===n);else this.Jt(t)!==n&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach(((n,r)=>{const i=this.Ht(r);if(i){if(n.current&&Ll(i.target)){const t=new Du(i.target.path);null!==this.$t.get(t)||this.Xt(r,t)||this.Kt(r,t,xl.newNoDocument(t,e))}n.vt&&(t.set(r,n.St()),n.Dt())}}));let n=sh();this.Bt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ht(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.$t.forEach(((t,n)=>n.setReadTime(e)));const r=new uh(e,t,this.Lt,this.$t,n);return this.$t=Xc(),this.Bt=mh(),this.Lt=new Qu(Su),r}qt(e,t){if(!this.jt(e))return;const n=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,n),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,n){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,t)?r.Ct(t,1):r.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),n&&(this.$t=this.$t.insert(t,n))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new fh,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new Qu(Su),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=null!==this.Ht(e);return t||iu("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new fh),this.Ot.getRemoteKeysForTarget(e).forEach((t=>{this.Kt(e,t,null)}))}Xt(e,t){return this.Ot.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Xc(),this.Bt=mh(),this.Lt=new Qu(Su)}}function mh(){return new Ku(Du.comparator)}function gh(){return new Ku(Du.comparator)}
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
 */const yh={asc:"ASCENDING",desc:"DESCENDING"},vh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class bh{constructor(e,t){this.databaseId=e,this.dt=t}}function wh(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Eh(e,t){return e.dt?t.toBase64():t.toUint8Array()}function kh(e,t){return wh(e,t.toTimestamp())}function Sh(e){return lu(!!e),Iu.fromTimestamp(function(e){const t=el(e);return new Tu(t.seconds,t.nanos)}(e))}function _h(e,t){return function(e){return new Nu(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Th(e){const t=Nu.fromString(e);return lu(Hh(t)),t}function Ih(e,t){return _h(e.databaseId,t.path)}function Ch(e,t){const n=Th(t);if(n.get(1)!==e.databaseId.projectId)throw new du(hu.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new du(hu.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Du(Dh(n))}function Nh(e,t){return _h(e.databaseId,t)}function xh(e){const t=Th(e);return 4===t.length?Nu.emptyPath():Dh(t)}function Ah(e){return new Nu(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Dh(e){return lu(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Rh(e,t,n){return{name:Ih(e,t),fields:n.value.mapValue.fields}}function Oh(e,t){let n;if(t instanceof Mc)n={update:Rh(e,t.key,t.value)};else if(t instanceof zc)n={delete:Ih(e,t.key)};else if(t instanceof Fc)n={update:Rh(e,t.key,t.data),updateMask:qh(t.fieldMask)};else{if(!(t instanceof Bc))return uu();n={verify:Ih(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof bc)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof wc)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof kc)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof _c)return{fieldPath:t.field.canonicalString(),increment:n._t};throw uu()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:kh(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:uu()}(e,t.precondition)),n}function Lh(e,t){return{documents:[Nh(e,t.path)]}}function Ph(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Nh(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Nh(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Sl(e.value))return{unaryFilter:{field:jh(e.field),op:"IS_NAN"}};if(kl(e.value))return{unaryFilter:{field:jh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Sl(e.value))return{unaryFilter:{field:jh(e.field),op:"IS_NOT_NAN"}};if(kl(e.value))return{unaryFilter:{field:jh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jh(e.field),op:Vh(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:jh(e.field),direction:Uh(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.dt||ul(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Mh(e){let t=xh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){lu(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Fh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Hl(zh(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ul(t)?null:t}(n.limit));let u=null;n.startAt&&(u=function(e){const t=!!e.before,n=e.values||[];return new ql(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new ql(n,t)}(n.endAt)),Xl(t,i,o,s,a,"F",u,l)}function Fh(e){return e?void 0!==e.unaryFilter?[$h(e)]:void 0!==e.fieldFilter?[Bh(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Fh(e))).reduce(((e,t)=>e.concat(t))):uu():[]}function Uh(e){return yh[e]}function Vh(e){return vh[e]}function jh(e){return{fieldPath:e.canonicalString()}}function zh(e){return Au.fromServerFormat(e.fieldPath)}function Bh(e){return Pl.create(zh(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return uu()}}(e.fieldFilter.op),e.fieldFilter.value)}function $h(e){switch(e.unaryFilter.op){case"IS_NAN":const t=zh(e.unaryFilter.field);return Pl.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=zh(e.unaryFilter.field);return Pl.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=zh(e.unaryFilter.field);return Pl.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=zh(e.unaryFilter.field);return Pl.create(i,"!=",{nullValue:"NULL_VALUE"});default:return uu()}}function qh(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Hh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */const Kh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Wh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Gh=Wh;
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
class Qh{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Rc(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Oc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Oc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=th();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Dc(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Iu.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),sh())}isEqual(e){return this.batchId===e.batchId&&_u(this.mutations,e.mutations,((e,t)=>Pc(e,t)))&&_u(this.baseMutations,e.baseMutations,((e,t)=>Pc(e,t)))}constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}}class Xh{static from(e,t,n){lu(e.mutations.length===n.length);let r=rh;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Xh(e,t,n,r)}constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}}
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
 */class Yh{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
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
 */class Jh{withSequenceNumber(e){return new Jh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Jh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Jh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}constructor(e,t,n,r,i=Iu.min(),s=Iu.min(),o=Ju.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
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
 */class Zh{constructor(e){this.ne=e}}function ed(e){const t=Mh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ic(t,t.limit,"L"):t}
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
 */class td{re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(tl(e.integerValue));else if("doubleValue"in e){const n=tl(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),ll(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ce(t,20),"string"==typeof n?t.he(n):(t.he(`${n.seconds||""}`),t.ae(n.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(nl(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ce(t,45),t.ae(n.latitude||0),t.ae(n.longitude||0)}else"mapValue"in e?Il(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):uu()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const n=e.fields||{};this.ce(t,55);for(const e of Object.keys(n))this.le(e,t),this.oe(n[e],t)}me(e,t){const n=e.values||[];this.ce(t,50);for(const e of n)this.oe(e,t)}_e(e,t){this.ce(t,37),Du.fromName(e).path.forEach((e=>{this.ce(t,60),this.ge(e,t)}))}ce(e,t){e.ae(t)}fe(e){e.ae(2)}constructor(){}}td.ye=new td;
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
class nd{addToCollectionParentIndex(e,t){return this.ze.add(t),ju.resolve()}getCollectionParents(e,t){return ju.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return ju.resolve()}deleteFieldIndex(e,t){return ju.resolve()}getDocumentsMatchingTarget(e,t){return ju.resolve(null)}getIndexType(e,t){return ju.resolve(0)}getFieldIndexes(e,t){return ju.resolve([])}getNextCollectionGroupToUpdate(e){return ju.resolve(null)}getMinOffset(e,t){return ju.resolve(Pu.min())}getMinOffsetFromCollectionGroup(e,t){return ju.resolve(Pu.min())}updateCollectionGroup(e,t,n){return ju.resolve()}updateIndexEntries(e,t){return ju.resolve()}constructor(){this.ze=new rd}}class rd{add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Qu(Nu.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Qu(Nu.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class id{static withCacheSize(e){return new id(e,id.DEFAULT_COLLECTION_PERCENTILE,id.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
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
 */id.DEFAULT_COLLECTION_PERCENTILE=10,id.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,id.DEFAULT=new id(41943040,id.DEFAULT_COLLECTION_PERCENTILE,id.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),id.DISABLED=new id(-1,0,0);
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
class sd{next(){return this.En+=2,this.En}static An(){return new sd(0)}static Rn(){return new sd(-1)}constructor(e){this.En=e}}
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
class od{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xl.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ju.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new Gc((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
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
class ad{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class ud{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&Oc(n.mutation,e,Yu.empty(),Tu.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,sh()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=sh()){const r=eh();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Jc();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=eh();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,sh())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Xc();const s=nh(),o=nh();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Fc)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),Oc(o.mutation,t,o.mutation.getFieldMask(),Tu.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new ad(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=nh();let r=new Ku(((e,t)=>e-t)),i=sh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Yu.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||sh()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,l=th();u.forEach((e=>{if(!i.has(e)){const r=Dc(t.get(e),n.get(e));null!==r&&l.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,l))}return ju.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Du.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):ju.resolve(eh());let o=-1,a=i;return s.next((t=>ju.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?ju.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,sh()))).next((e=>({batchId:o,changes:Zc(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Du(t)).next((e=>{let t=Jc();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Jc();return this.indexManager.getCollectionParents(e,r).next((s=>ju.forEach(s,(s=>{const o=function(e,t){return new Ql(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,xl.newInvalidDocument(n)))}));let n=Jc();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&Oc(s.mutation,i,Yu.empty(),Tu.now()),uc(t,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):ju.resolve(xl.newInvalidDocument(t))}constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}}
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
 */class ld{getBundleMetadata(e,t){return ju.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var n;return this.Jn.set(t.id,{id:(n=t).id,version:n.version,createTime:Sh(n.createTime)}),ju.resolve()}getNamedQuery(e,t){return ju.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(e){return{name:e.name,query:ed(e.bundledQuery),readTime:Sh(e.readTime)}}(t)),ju.resolve()}constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}}
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
 */class cd{getOverlay(e,t){return ju.resolve(this.overlays.get(t))}getOverlays(e,t){const n=eh();return ju.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ie(e,t,r)})),ju.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Xn.delete(n)),ju.resolve()}getOverlaysForCollection(e,t,n){const r=eh(),i=t.length+1,s=new Du(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ju.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ku(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=eh(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=eh(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return ju.resolve(o)}ie(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Yh(t,n));let i=this.Xn.get(t);void 0===i&&(i=sh(),this.Xn.set(t,i)),this.Xn.set(t,i.add(n.key))}constructor(){this.overlays=new Ku(Du.comparator),this.Xn=new Map}}
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
 */class hd{isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new dd(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new dd(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new Du(new Nu([])),n=new dd(t,e),r=new dd(t,e+1),i=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),i.push(e.key)})),i}cs(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new Du(new Nu([])),n=new dd(t,e),r=new dd(t,e+1);let i=sh();return this.es.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new dd(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.Zn=new Qu(dd.ts),this.es=new Qu(dd.ns)}}class dd{static ts(e,t){return Du.comparator(e.key,t.key)||Su(e.ls,t.ls)}static ns(e,t){return Su(e.ls,t.ls)||Du.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.ls=t}}
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
 */class fd{checkEmpty(e){return ju.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Qh(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.ds=this.ds.add(new dd(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ju.resolve(s)}lookupMutationBatch(e,t){return ju.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ws(n),i=r<0?0:r;return ju.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ju.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(e){return ju.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new dd(t,0),r=new dd(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(e=>{const t=this._s(e.ls);i.push(t)})),ju.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Qu(Su);return t.forEach((e=>{const t=new dd(e,0),r=new dd(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),ju.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Du.isDocumentKey(i)||(i=i.child(""));const s=new dd(new Du(i),0);let o=new Qu(Su);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),s),ju.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){lu(0===this.ys(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return ju.forEach(t.mutations,(r=>{const i=new dd(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}In(e){}containsKey(e,t){const n=new dd(t,0),r=this.ds.firstAfterOrEqual(n);return ju.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ju.resolve()}ys(e,t){return this.ws(e)}ws(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new Qu(dd.ts)}}
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
 */class pd{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ps(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ju.resolve(n?n.document.mutableCopy():xl.newInvalidDocument(t))}getEntries(e,t){let n=Xc();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():xl.newInvalidDocument(e))})),ju.resolve(n)}getAllFromCollection(e,t,n){let r=Xc();const i=new Du(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Mu(Lu(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return ju.resolve(r)}getAllFromCollectionGroup(e,t,n,r){uu()}Is(e,t){return ju.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new md(this)}getSize(e){return ju.resolve(this.size)}constructor(e){this.ps=e,this.docs=new Ku(Du.comparator),this.size=0}}class md extends od{applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.zn.addEntry(e,r)):this.zn.removeEntry(n)})),ju.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}constructor(e){super(),this.zn=e}}
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
 */class gd{forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),ju.resolve()}getLastRemoteSnapshotVersion(e){return ju.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ju.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),ju.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Es&&(this.Es=t),ju.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new sd(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,ju.resolve()}updateTargetData(e,t){return this.vn(t),ju.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,ju.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),ju.waitFor(i).next((()=>r))}getTargetCount(e){return ju.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return ju.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),ju.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),ju.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),ju.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return ju.resolve(n)}containsKey(e,t){return ju.resolve(this.As.containsKey(t))}constructor(e){this.persistence=e,this.Ts=new Gc((e=>Rl(e)),Ol),this.lastRemoteSnapshotVersion=Iu.min(),this.highestTargetId=0,this.Es=0,this.As=new hd,this.targetCount=0,this.Rs=sd.An()}}
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
 */class yd{start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.bs[e.toKey()];return n||(n=new fd(t,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,n){iu("MemoryPersistence","Starting transaction:",e);const r=new vd(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((e=>this.referenceDelegate.xs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ns(e,t){return ju.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.bs={},this.overlays={},this.Ps=new Bu(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new gd(this),this.indexManager=new nd,this.remoteDocumentCache=function(e){return new pd(e)}((e=>this.referenceDelegate.Ss(e))),this.wt=new Zh(t),this.Ds=new ld(this.wt)}}class vd extends Uu{constructor(e){super(),this.currentSequenceNumber=e}}class bd{static Os(e){return new bd(e)}get Fs(){if(this.Ms)return this.Ms;throw uu()}addReference(e,t,n){return this.ks.addReference(n,t),this.Fs.delete(n.toString()),ju.resolve()}removeReference(e,t,n){return this.ks.removeReference(n,t),this.Fs.add(n.toString()),ju.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),ju.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach((e=>this.Fs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Fs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Cs(){this.Ms=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ju.forEach(this.Fs,(n=>{const r=Du.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r,Iu.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.Fs.delete(t.toString()):this.Fs.add(t.toString())}))}Ss(e){return 0}$s(e,t){return ju.or([()=>ju.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}constructor(e){this.persistence=e,this.ks=new hd,this.Ms=null}}
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
class wd{static Vi(e,t){let n=sh(),r=sh();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new wd(e,t.fromCache,n,r)}constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pi=n,this.vi=r}}
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
 */class Ed{initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ci(e,t).next((i=>i||this.xi(e,t,r,n))).next((n=>n||this.Ni(e,t)))}Ci(e,t){if(Jl(t))return ju.resolve(null);let n=rc(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=ic(t,null,"F"),n=rc(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=sh(...r);return this.Di.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ki(t,r);return this.Mi(t,s,i,n.readTime)?this.Ci(e,ic(t,null,"F")):this.Oi(e,s,t,n)}))))})))))}xi(e,t,n,r){return Jl(t)||r.isEqual(Iu.min())?this.Ni(e,t):this.Di.getDocuments(e,n).next((i=>{const s=this.ki(t,i);return this.Mi(t,s,n,r)?this.Ni(e,t):(ru()<=V.DEBUG&&iu("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ac(t)),this.Oi(e,s,t,Ou(r,-1)))}))}ki(e,t){let n=new Qu(cc(e));return t.forEach(((t,r)=>{uc(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,t){return ru()<=V.DEBUG&&iu("QueryEngine","Using full collection scan to execute query:",ac(t)),this.Di.getDocumentsMatchingQuery(e,t,Pu.min())}Oi(e,t,n,r){return this.Di.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.Si=!1}}
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
 */class kd{qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ud(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$i)))}constructor(e,t,n,r){this.persistence=e,this.Fi=t,this.wt=r,this.$i=new Ku(Su),this.Bi=new Gc((e=>Rl(e)),Ol),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(n)}}function Sd(e,t,n,r){return new kd(e,t,n,r)}async function _d(e,t){const n=cu(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=sh();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ki:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Td(e){const t=cu(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Vs.getLastRemoteSnapshotVersion(e)))}function Id(e,t,n){let r=sh(),i=sh();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Xc();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Iu.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):iu("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Gi:r,Qi:i}}))}function Cd(e,t){const n=cu(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Nd(e,t){const n=cu(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Vs.getTargetData(e,t).next((i=>i?(r=i,ju.resolve(r)):n.Vs.allocateTargetId(e).next((i=>(r=new Jh(t,i,0,e.currentSequenceNumber),n.Vs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.$i.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(e.targetId,e),n.Bi.set(t,e.targetId)),e}))}async function xd(e,t,n){const r=cu(e),i=r.$i.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!zu(e))throw e;iu("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.$i=r.$i.remove(t),r.Bi.delete(i.target)}function Ad(e,t,n){const r=cu(e);let i=Iu.min(),s=sh();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=cu(e),i=r.Bi.get(n);return void 0!==i?ju.resolve(r.$i.get(i)):r.Vs.getTargetData(t,n)}(r,e,rc(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Fi.getDocumentsMatchingQuery(e,t,n?i:Iu.min(),n?s:sh()))).next((e=>(Dd(r,lc(t),e),{documents:e,ji:s})))))}function Dd(e,t,n){let r=Iu.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Li.set(t,r)}class Rd{Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=ah()}}class Od{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Rd,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Fr=new Rd,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class Ld{Br(e){}shutdown(){}}
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
 */class Pd{Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){iu("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){iu("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}}
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
 */const Md={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Fd{zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}constructor(e){this.jr=e.jr,this.Wr=e.Wr}}
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
 */class Ud extends class{ro(e,t,n,r,i){const s=this.oo(e,t);iu("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.co(e,s,o,n).then((e=>(iu("RestConnection","Received: ",e),e)),(t=>{throw ou("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ao(e,t,n,r,i,s){return this.ro(e,t,n,r,i)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+tu,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=Md[e];return`${this.so}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{co(e,t,n,r){return new Promise(((i,s)=>{const o=new ja;o.listenOnce(Pa.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case La.NO_ERROR:const t=o.getResponseJson();iu("Connection","XHR received:",JSON.stringify(t)),i(t);break;case La.TIMEOUT:iu("Connection",'RPC "'+e+'" timed out'),s(new du(hu.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const n=o.getStatus();if(iu("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(hu).indexOf(t)>=0?t:hu.UNKNOWN}(e.status);s(new du(t,e.message))}else s(new du(hu.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new du(hu.UNAVAILABLE,"Connection failed."));break;default:uu()}}finally{iu("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Ra(),s=Oa(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ua({})),this.uo(o.initMessageHeaders,t,n),g()||v()||m().indexOf("Electron/")>=0||b()||m().indexOf("MSAppHost/")>=0||y()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");iu("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,c=!1;const h=new Fd({jr:e=>{c?iu("Connection","Not sending because WebChannel is closed:",e):(l||(iu("Connection","Opening WebChannel transport."),u.open(),l=!0),iu("Connection","WebChannel sending:",e),u.send(e))},Wr:()=>u.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(u,Va.EventType.OPEN,(()=>{c||iu("Connection","WebChannel transport opened.")})),d(u,Va.EventType.CLOSE,(()=>{c||(c=!0,iu("Connection","WebChannel transport closed"),h.eo())})),d(u,Va.EventType.ERROR,(e=>{c||(c=!0,ou("Connection","WebChannel transport errored:",e),h.eo(new du(hu.UNAVAILABLE,"The operation could not be completed")))})),d(u,Va.EventType.MESSAGE,(e=>{var t;if(!c){const n=e.data[0];lu(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){iu("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=qc[e];if(void 0!==t)return Wc(t)}(e),n=i.message;void 0===t&&(t=hu.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),c=!0,h.eo(new du(t,n)),u.close()}else iu("Connection","WebChannel received:",n),h.no(n)}})),d(s,Ma.STAT_EVENT,(e=>{e.stat===Fa.PROXY?iu("Connection","Detected buffering proxy"):e.stat===Fa.NOPROXY&&iu("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}}
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
 */function Vd(){return"undefined"!=typeof document?document:null}
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
 */function jd(e){return new bh(e,!0)}class zd{reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-n);r>0&&iu("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}constructor(e,t,n=1e3,r=1.5,i=6e4){this.js=e,this.timerId=t,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}}
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
 */class Bd{Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===hu.RESOURCE_EXHAUSTED?(su(t.toString()),su("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===hu.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new du(hu.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return iu("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget((()=>this.Po===e?t():(iu("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,r,i,s,o,a){this.js=e,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new zd(e,t)}}class $d extends Bd{Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:uu()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.dt?(lu(void 0===t||"string"==typeof t),Ju.fromBase64String(t||"")):(lu(void 0===t||t instanceof Uint8Array),Ju.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?hu.UNKNOWN:Wc(e.code);return new du(t,e.message||"")}(o);n=new dh(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ch(e,r.document.name),s=Sh(r.document.updateTime),o=new Cl({mapValue:{fields:r.document.fields}}),a=xl.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ch(u,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ch(e,r.document),s=r.readTime?Sh(r.readTime):Iu.min(),o=xl.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ch([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ch(e,r.document),s=r.removedTargetIds||[];n=new ch([],s,i,null)}else{if(!("filter"in t))return uu();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new $c(r),s=e.targetId;n=new hh(s,i)}}return n}(this.wt,e),n=function(e){if(!("targetChange"in e))return Iu.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Iu.min():t.readTime?Sh(t.readTime):Iu.min()}(e);return this.listener.Go(t,n)}Qo(e){const t={};t.database=Ah(this.wt),t.addTarget=function(e,t){let n;const r=t.target;return n=Ll(r)?{documents:Lh(e,r)}:{query:Ph(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Eh(e,t.resumeToken):t.snapshotVersion.compareTo(Iu.min())>0&&(n.readTime=wh(e,t.snapshotVersion.toTimestamp())),n}(this.wt,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return uu()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,e);n&&(t.labels=n),this.Oo(t)}jo(e){const t={};t.database=Ah(this.wt),t.removeTarget=e,this.Oo(t)}constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.wt=i}}class qd extends Bd{get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(lu(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=function(e,t){return e&&e.length>0?(lu(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Sh(e.updateTime):Sh(t);return n.isEqual(Iu.min())&&(n=Sh(t)),new Cc(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Sh(e.commitTime);return this.listener.Jo(n,t)}return lu(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Ah(this.wt),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Oh(this.wt,e)))};this.Oo(t)}constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.wt=i,this.Wo=!1}}
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
 */class Hd extends class{}{tu(){if(this.Zo)throw new du(hu.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===hu.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new du(hu.UNKNOWN,e.toString())}))}ao(e,t,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===hu.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new du(hu.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.wt=r,this.Zo=!1}}class Kd{iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(su(t),this.su=!1):iu("OnlineStateTracker",t)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}}
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
 */class Wd{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((e=>{n.enqueueAndForget((async()=>{nf(this)&&(iu("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=cu(e);t.lu.add(4),await Qd(t),t._u.set("Unknown"),t.lu.delete(4),await Gd(t)}(this))}))})),this._u=new Kd(n,r)}}async function Gd(e){if(nf(e))for(const t of e.fu)await t(!0)}async function Qd(e){for(const t of e.fu)await t(!1)}function Xd(e,t){const n=cu(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),tf(n)?ef(n):Ef(n).Co()&&Jd(n,t))}function Yd(e,t){const n=cu(e),r=Ef(n);n.hu.delete(t),r.Co()&&Zd(n,t),0===n.hu.size&&(r.Co()?r.ko():nf(n)&&n._u.set("Unknown"))}function Jd(e,t){e.wu.Nt(t.targetId),Ef(e).Qo(t)}function Zd(e,t){e.wu.Nt(t),Ef(e).jo(t)}function ef(e){e.wu=new ph({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),Ef(e).start(),e._u.iu()}function tf(e){return nf(e)&&!Ef(e).Do()&&e.hu.size>0}function nf(e){return 0===cu(e).lu.size}function rf(e){e.wu=void 0}async function sf(e){e.hu.forEach(((t,n)=>{Jd(e,t)}))}async function of(e,t){rf(e),tf(e)?(e._u.uu(t),ef(e)):e._u.set("Unknown")}async function af(e,t,n){if(e._u.set("Online"),t instanceof dh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.hu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.hu.delete(r),e.wu.removeTarget(r))}(e,t)}catch(n){iu("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await uf(e,n)}else if(t instanceof ch?e.wu.Ut(t):t instanceof hh?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(Iu.min()))try{const t=await Td(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.Yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.hu.get(r);i&&e.hu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(Ju.EMPTY_BYTE_STRING,n.snapshotVersion)),Zd(e,t);const r=new Jh(n.target,t,1,n.sequenceNumber);Jd(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){iu("RemoteStore","Failed to raise snapshot:",t),await uf(e,t)}}async function uf(e,t,n){if(!zu(t))throw t;e.lu.add(1),await Qd(e),e._u.set("Offline"),n||(n=()=>Td(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{iu("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Gd(e)}))}function lf(e,t){return t().catch((n=>uf(e,n,t)))}async function cf(e){const t=cu(e),n=kf(t);let r=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;hf(t);)try{const e=await Cd(t.localStore,r);if(null===e){0===t.au.length&&n.ko();break}r=e.batchId,df(t,e)}catch(e){await uf(t,e)}ff(t)&&pf(t)}function hf(e){return nf(e)&&e.au.length<10}function df(e,t){e.au.push(t);const n=kf(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function ff(e){return nf(e)&&!kf(e).Do()&&e.au.length>0}function pf(e){kf(e).start()}async function mf(e){kf(e).Xo()}async function gf(e){const t=kf(e);for(const n of e.au)t.Ho(n.mutations)}async function yf(e,t,n){const r=e.au.shift(),i=Xh.from(r,t,n);await lf(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await cf(e)}async function vf(e,t){t&&kf(e).zo&&await async function(e,t){if(Kc(n=t.code)&&n!==hu.ABORTED){const n=e.au.shift();kf(e).No(),await lf(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await cf(e)}var n}(e,t),ff(e)&&pf(e)}async function bf(e,t){const n=cu(e);n.asyncQueue.verifyOperationInProgress(),iu("RemoteStore","RemoteStore received new credentials");const r=nf(n);n.lu.add(3),await Qd(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Gd(n)}async function wf(e,t){const n=cu(e);t?(n.lu.delete(2),await Gd(n)):t||(n.lu.add(2),await Qd(n),n._u.set("Unknown"))}function Ef(e){return e.mu||(e.mu=function(e,t,n){const r=cu(e);return r.tu(),new $d(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(e.datastore,e.asyncQueue,{zr:sf.bind(null,e),Jr:of.bind(null,e),Go:af.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),tf(e)?ef(e):e._u.set("Unknown")):(await e.mu.stop(),rf(e))}))),e.mu}function kf(e){return e.gu||(e.gu=function(e,t,n){const r=cu(e);return r.tu(),new qd(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(e.datastore,e.asyncQueue,{zr:mf.bind(null,e),Jr:vf.bind(null,e),Yo:gf.bind(null,e),Jo:yf.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await cf(e)):(await e.gu.stop(),e.au.length>0&&(iu("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))}))),e.gu
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
 */}class Sf{static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Sf(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new du(hu.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new fu,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function _f(e,t){if(su("AsyncQueue",`${t}: ${e}`),zu(e))return new du(hu.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Tf{static emptySet(e){return new Tf(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tf))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Tf;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Du.comparator(t.key,n.key):(e,t)=>Du.comparator(e.key,t.key),this.keyedMap=Jc(),this.sortedSet=new Ku(this.comparator)}}
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
 */class If{track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):uu():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.yu=new Ku(Du.comparator)}}class Cf{static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Cf(e,t,Tf.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}}
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
 */class Nf{constructor(){this.Iu=void 0,this.listeners=[]}}class xf{constructor(){this.queries=new Gc((e=>oc(e)),sc),this.onlineState="Unknown",this.Tu=new Set}}async function Af(e,t){const n=cu(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Nf),i)try{s.Iu=await n.onListen(r)}catch(e){const n=_f(e,`Initialization of query '${ac(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Eu(n.onlineState),s.Iu&&t.Au(s.Iu)&&Lf(n)}async function Df(e,t){const n=cu(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Rf(e,t){const n=cu(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.Au(e)&&(r=!0);i.Iu=e}}r&&Lf(n)}function Of(e,t,n){const r=cu(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Lf(e){e.Tu.forEach((e=>{e.next()}))}class Pf{Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Cf(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.Du&&n||e.docs.isEmpty()&&"Offline"!==t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=Cf.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}}
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
class Mf{constructor(e){this.key=e}}class Ff{constructor(e){this.key=e}}class Uf{get qu(){return this.Fu}Ku(e,t){const n=t?t.Gu:new If,r=t?t.Uu:this.Uu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),c=uc(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;l&&c?l.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Qu(l,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Lu(c,a)>0||u&&this.Lu(c,u)<0)&&(o=!0)):!l&&c?(n.track({type:0,doc:c}),f=!0):l&&!c&&(n.track({type:1,doc:l}),f=!0,(a||u)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Uu:s,Gu:n,Mi:o,mutatedKeys:i}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return uu()}};return n(e)-n(t)}(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const s=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new Cf(this.query,e.Uu,r,i,e.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new If,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=sh(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new Ff(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new Mf(n))})),t}Ju(e){this.Fu=e.ji,this.Bu=sh();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Cf.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=sh(),this.mutatedKeys=sh(),this.Lu=cc(e),this.Uu=new Tf(this.Lu)}}class Vf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class jf{constructor(e){this.key=e,this.Xu=!1}}class zf{get isPrimaryClient(){return!0===this.ac}constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new Gc((e=>oc(e)),sc),this.ec=new Map,this.nc=new Set,this.sc=new Ku(Du.comparator),this.ic=new Map,this.rc=new hd,this.oc={},this.uc=new Map,this.cc=sd.Rn(),this.onlineState="Unknown",this.ac=void 0}}async function Bf(e,t){const n=op(e);let r,i;const s=n.tc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const e=await Nd(n.localStore,rc(t));n.isPrimaryClient&&Xd(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await $f(n,t,r,"current"===s)}return i}async function $f(e,t,n,r){e.hc=(t,n,r)=>async function(e,t,n,r){let i=t.view.Ku(n);i.Mi&&(i=await Ad(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ku(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return ep(e,t.targetId,o.zu),o.snapshot}(e,t,n,r);const i=await Ad(e.localStore,t,!0),s=new Uf(t,i.ji),o=s.Ku(i.documents),a=lh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),u=s.applyChanges(o,e.isPrimaryClient,a);ep(e,n,u.zu);const l=new Vf(t,n,s);return e.tc.set(t,l),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),u.snapshot}async function qf(e,t){const n=cu(e),r=n.tc.get(t),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter((e=>!sc(e,t)))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xd(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Yd(n.remoteStore,r.targetId),Jf(n,r.targetId)})).catch(Vu)):(Jf(n,r.targetId),await xd(n.localStore,r.targetId,!0))}async function Hf(e,t){const n=cu(e);try{const e=await function(e,t){const n=cu(e),r=t.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];t.targetChanges.forEach(((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.Vs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(e,s.addedDocuments,a))));let l=u.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?l=l.withResumeToken(Ju.EMPTY_BYTE_STRING,Iu.min()).withLastLimboFreeSnapshotVersion(Iu.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,r)),i=i.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(u,l,s)&&o.push(n.Vs.updateTargetData(e,l))}));let a=Xc(),u=sh();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Id(e,s,t.documentUpdates).next((e=>{a=e.Gi,u=e.Qi}))),!r.isEqual(Iu.min())){const t=n.Vs.getLastRemoteSnapshotVersion(e).next((t=>n.Vs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return ju.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,u))).next((()=>a))})).then((e=>(n.$i=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ic.get(t);r&&(lu(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Xu=!0:e.modifiedDocuments.size>0?lu(r.Xu):e.removedDocuments.size>0&&(lu(r.Xu),r.Xu=!1))})),await rp(n,e,t)}catch(e){await Vu(e)}}function Kf(e,t,n){const r=cu(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.tc.forEach(((n,r)=>{const i=r.view.Eu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=cu(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Eu(t)&&(r=!0)})),r&&Lf(n)}(r.eventManager,t),e.length&&r.Zu.Go(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Wf(e,t,n){const r=cu(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ic.get(t),s=i&&i.key;if(s){let e=new Ku(Du.comparator);e=e.insert(s,xl.newNoDocument(s,Iu.min()));const n=sh().add(s),i=new uh(Iu.min(),new Map,new Qu(Su),e,n);await Hf(r,i),r.sc=r.sc.remove(s),r.ic.delete(t),np(r)}else await xd(r.localStore,t,!1).then((()=>Jf(r,t,n))).catch(Vu)}async function Gf(e,t){const n=cu(e),r=t.batch.batchId;try{const e=await function(e,t){const n=cu(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=ju.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);lu(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=sh();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Yf(n,r,null),Xf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await rp(n,e)}catch(e){await Vu(e)}}async function Qf(e,t,n){const r=cu(e);try{const e=await function(e,t){const n=cu(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(lu(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Yf(r,t,n),Xf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await rp(r,e)}catch(e){await Vu(e)}}function Xf(e,t){(e.uc.get(t)||[]).forEach((e=>{e.resolve()})),e.uc.delete(t)}function Yf(e,t,n){const r=cu(e);let i=r.oc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.oc[r.currentUser.toKey()]=i}}function Jf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ec.get(t))e.tc.delete(r),n&&e.Zu.lc(r,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach((t=>{e.rc.containsKey(t)||Zf(e,t)}))}function Zf(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);null!==n&&(Yd(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),np(e))}function ep(e,t,n){for(const r of n)r instanceof Mf?(e.rc.addReference(r.key,t),tp(e,r)):r instanceof Ff?(iu("SyncEngine","Document no longer in limbo: "+r.key),e.rc.removeReference(r.key,t),e.rc.containsKey(r.key)||Zf(e,r.key)):uu()}function tp(e,t){const n=t.key,r=n.path.canonicalString();e.sc.get(n)||e.nc.has(r)||(iu("SyncEngine","New document in limbo: "+n),e.nc.add(r),np(e))}function np(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new Du(Nu.fromString(t)),r=e.cc.next();e.ic.set(r,new jf(n)),e.sc=e.sc.insert(n,r),Xd(e.remoteStore,new Jh(rc(Yl(n.path)),r,2,Bu.ot))}}async function rp(e,t,n){const r=cu(e),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((e,a)=>{o.push(r.hc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=wd.Vi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Zu.Go(i),await async function(e,t){const n=cu(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ju.forEach(t,(t=>ju.forEach(t.Pi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ju.forEach(t.vi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!zu(e))throw e;iu("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,i)}}}(r.localStore,s))}async function ip(e,t){const n=cu(e);if(!n.currentUser.isEqual(t)){iu("SyncEngine","User change. New user:",t.toKey());const e=await _d(n.localStore,t);n.currentUser=t,function(e,t){e.uc.forEach((e=>{e.forEach((e=>{e.reject(new du(hu.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.uc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await rp(n,e.Ki)}}function sp(e,t){const n=cu(e),r=n.ic.get(t);if(r&&r.Xu)return sh().add(r.key);{let e=sh();const r=n.ec.get(t);if(!r)return e;for(const t of r){const r=n.tc.get(t);e=e.unionWith(r.view.qu)}return e}}function op(e){const t=cu(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Hf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Wf.bind(null,t),t.Zu.Go=Rf.bind(null,t.eventManager),t.Zu.lc=Of.bind(null,t.eventManager),t}function ap(e){const t=cu(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Gf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qf.bind(null,t),t}class up{async initialize(e){this.wt=jd(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return Sd(this.persistence,new Ed,e.initialUser,this.wt)}_c(e){return new yd(bd.Os,this.wt)}dc(e){return new Od}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class lp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Kf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ip.bind(null,this.syncEngine),await wf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new xf}createDatastore(e){const t=jd(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ud(r));var r;return function(e,t,n,r){return new Hd(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Kf(this.syncEngine,e,0),s=Pd.V()?new Pd:new Ld,new Wd(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new zf(e,t,n,r,i,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=cu(e);iu("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await Qd(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
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
class cp{next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):su("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
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
class hp{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new du(hu.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fu;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=_f(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=eu.UNAUTHENTICATED,this.clientId=ku.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{iu("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(iu("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function dp(e,t){e.asyncQueue.verifyOperationInProgress(),iu("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await _d(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function fp(e,t){e.asyncQueue.verifyOperationInProgress();const n=await pp(e);iu("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>bf(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>bf(t.remoteStore,n))),e.onlineComponents=t}async function pp(e){return e.offlineComponents||(iu("FirestoreClient","Using default OfflineComponentProvider"),await dp(e,new up)),e.offlineComponents}async function mp(e){return e.onlineComponents||(iu("FirestoreClient","Using default OnlineComponentProvider"),await fp(e,new lp)),e.onlineComponents}function gp(e){return mp(e).then((e=>e.syncEngine))}async function yp(e){const t=await mp(e),n=t.eventManager;return n.onListen=Bf.bind(null,t.syncEngine),n.onUnlisten=qf.bind(null,t.syncEngine),n}function vp(e,t,n={}){const r=new fu;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new cp({next:n=>{t.enqueueAndForget((()=>Df(e,o))),n.fromCache&&"server"===r.source?i.reject(new du(hu.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Pf(n,s,{includeMetadataChanges:!0,Du:!0});return Af(e,o)}(await yp(e),e.asyncQueue,t,n,r))),r.promise}const bp=new Map;
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
 */function wp(e,t,n){if(!n)throw new du(hu.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ep(e){if(!Du.isDocumentKey(e))throw new du(hu.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function kp(e){if(Du.isDocumentKey(e))throw new du(hu.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Sp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":uu()}function _p(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new du(hu.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sp(e);throw new du(hu.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class Tp{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new du(hu.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new du(hu.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new du(hu.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
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
 */class Ip{get app(){if(!this._app)throw new du(hu.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new du(hu.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tp(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new mu;switch(e.type){case"gapi":const t=e.client;return lu(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new vu(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new du(hu.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=bp.get(e);t&&(iu("ComponentProvider","Removing Datastore"),bp.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tp({}),this._settingsFrozen=!1,e instanceof al?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new du(hu.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(e.options.projectId)}(e))}}
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
class Cp{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Cp(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class Np{withConverter(e){return new Np(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class xp extends Np{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Cp(this.firestore,null,new Du(e))}withConverter(e){return new xp(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,Yl(n)),this._path=n,this.type="collection"}}function Ap(e,t,...n){if(e=O(e),wp("collection","path",t),e instanceof Ip){const r=Nu.fromString(t,...n);return kp(r),new xp(e,null,r)}{if(!(e instanceof Cp||e instanceof xp))throw new du(hu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Nu.fromString(t,...n));return kp(r),new xp(e.firestore,null,r)}}function Dp(e,t,...n){if(e=O(e),1===arguments.length&&(t=ku.I()),wp("doc","path",t),e instanceof Ip){const r=Nu.fromString(t,...n);return Ep(r),new Cp(e,null,new Du(r))}{if(!(e instanceof Cp||e instanceof xp))throw new du(hu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Nu.fromString(t,...n));return Ep(r),new Cp(e.firestore,e instanceof xp?e.converter:null,new Du(r))}}
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
class Rp{get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=Vd();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise((()=>{}));const t=new fu;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Oc.push(e),this.jc())))}async jc(){if(0!==this.Oc.length){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!zu(e))throw e;iu("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io((()=>this.jc()))}}Qc(e){const t=this.Mc.then((()=>(this.Lc=!0,e().catch((e=>{this.Bc=e,this.Lc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw su("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Lc=!1,e))))));return this.Mc=t,t}enqueueAfterDelay(e,t,n){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const r=Sf.createAndSchedule(this,e,t,n,(e=>this.Wc(e)));return this.$c.push(r),r}Gc(){this.Bc&&uu()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Mc,await e}while(e!==this.Mc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new zd(this,"async_queue_retry"),this.Kc=()=>{const e=Vd();e&&iu("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=Vd();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Kc)}}class Op extends Ip{_terminate(){return this._firestoreClient||Mp(this),this._firestoreClient.terminate()}constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Rp,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}}function Lp(e=Se()){return be(e,"firestore").getImmediate()}function Pp(e){return e._firestoreClient||Mp(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Mp(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new ol(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new hp(e._authCredentials,e._appCheckCredentials,e._queue,r)}
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
class Fp{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new du(hu.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Au(e)}}
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
class Up{static fromBase64String(e){try{return new Up(Ju.fromBase64String(e))}catch(e){throw new du(hu.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Up(Ju.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
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
 */class Vp{constructor(e){this._methodName=e}}
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
 */class jp{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Su(this._lat,e._lat)||Su(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new du(hu.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new du(hu.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
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
 */const zp=/^__.*__$/;class Bp{toMutation(e,t){return null!==this.fieldMask?new Fc(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mc(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function $p(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw uu()}}class qp{get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new qp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.sa(e),r}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return nm(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(0===e.length)throw this.oa("Document fields must not be empty");if($p(this.Zc)&&zp.test(e))throw this.oa('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.wt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class Hp{aa(e,t,n,r=!1){return new qp({Zc:e,methodName:t,ca:n,path:Au.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=n||jd(e)}}function Kp(e){const t=e._freezeSettings(),n=jd(e._databaseId);return new Hp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Wp(e,t,n,r,i,s={}){const o=e.aa(s.merge||s.mergeFields?2:0,t,n,i);Jp("Data must be an object, but it was:",o,r);const a=Xp(r,o);let u,l;if(s.merge)u=new Yu(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Zp(t,r,n);if(!o.contains(i))throw new du(hu.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);rm(e,i)||e.push(i)}u=new Yu(e),l=o.fieldTransforms.filter((e=>u.covers(e.field)))}else u=null,l=o.fieldTransforms;return new Bp(new Cl(a),u,l)}function Gp(e,t,n,r=!1){return Qp(n,e.aa(r?4:3,t))}function Qp(e,t){if(Yp(e=O(e)))return Jp("Unsupported field value:",t,e),Xp(e,t);if(e instanceof Vp)return function(e,t){if(!$p(t.Zc))throw t.oa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.oa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&4!==t.Zc)throw t.oa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Qp(i,t.ra(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=O(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return pc(t.wt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Tu.fromDate(e);return{timestampValue:wh(t.wt,n)}}if(e instanceof Tu){const n=new Tu(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:wh(t.wt,n)}}if(e instanceof jp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Up)return{bytesValue:Eh(t.wt,e._byteString)};if(e instanceof Cp){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_h(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.oa(`Unsupported field value: ${Sp(e)}`)}(e,t)}function Xp(e,t){const n={};return Hu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qu(e,((e,r)=>{const i=Qp(r,t.ea(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Yp(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Tu||e instanceof jp||e instanceof Up||e instanceof Cp||e instanceof Vp)}function Jp(e,t,n){if(!Yp(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Sp(n);throw"an object"===r?t.oa(e+" a custom object"):t.oa(e+" "+r)}}function Zp(e,t,n){if((t=O(t))instanceof Fp)return t._internalPath;if("string"==typeof t)return tm(e,t);throw nm("Field path arguments must be of type string or ",e,!1,void 0,n)}const em=new RegExp("[~\\*/\\[\\]]");function tm(e,t,n){if(t.search(em)>=0)throw nm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Fp(...t.split("."))._internalPath}catch(r){throw nm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function nm(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new du(hu.INVALID_ARGUMENT,a+e+u)}function rm(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class im{get id(){return this._key.path.lastSegment()}get ref(){return new Cp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new sm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(om("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}}class sm extends im{data(){return super.data()}}function om(e,t){return"string"==typeof t?tm(e,t):t instanceof Fp?t._internalPath:t._delegate._internalPath}
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
 */class am{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class um extends im{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(om("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}}class lm extends um{data(e={}){return super.data(e)}}class cm{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new lm(this._firestore,this._userDataWriter,n.key,n,new am(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new du(hu.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new lm(e._firestore,e._userDataWriter,n.doc.key,n.doc,new am(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new lm(e._firestore,e._userDataWriter,t.doc.key,t.doc,new am(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:hm(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new am(r.hasPendingWrites,r.fromCache),this.query=n}}function hm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return uu()}}
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
function dm(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new du(hu.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fm{}function pm(e,...t){for(const n of t)e=n._apply(e);return e}class mm extends fm{_apply(e){const t=Kp(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new du(hu.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){wm(o,s);const t=[];for(const n of o)t.push(bm(r,e,n));a={arrayValue:{values:t}}}else a=bm(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||wm(o,s),a=Gp(n,"where",o,"in"===s||"not-in"===s);const u=Pl.create(i,s,a);return function(e,t){if(t.ht()){const n=ec(e);if(null!==n&&!n.isEqual(t.field))throw new du(hu.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Zl(e);null!==r&&Em(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new du(hu.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new du(hu.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,u),u}(e._query,0,t,e.firestore._databaseId,this.fa,this.da,this._a);return new Np(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Ql(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}constructor(e,t,n){super(),this.fa=e,this.da=t,this._a=n,this.type="where"}}function gm(e,t,n){const r=t,i=om("where",e);return new mm(i,r,n)}class ym extends fm{_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new du(hu.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new du(hu.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Hl(t,n);return function(e,t){if(null===Zl(e)){const n=ec(e);null!==n&&Em(e,n,t.field)}}(e,r),r}(e._query,this.fa,this.wa);return new Np(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ql(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}constructor(e,t){super(),this.fa=e,this.wa=t,this.type="orderBy"}}function vm(e,t="asc"){const n=t,r=om("orderBy",e);return new ym(r,n)}function bm(e,t,n){if("string"==typeof(n=O(n))){if(""===n)throw new du(hu.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tc(t)&&-1!==n.indexOf("/"))throw new du(hu.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Nu.fromString(n));if(!Du.isDocumentKey(r))throw new du(hu.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bl(e,new Du(r))}if(n instanceof Cp)return bl(e,n._key);throw new du(hu.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sp(n)}.`)}function wm(e,t){if(!Array.isArray(e)||0===e.length)throw new du(hu.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new du(hu.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Em(e,t,n){if(!n.isEqual(t))throw new du(hu.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
class km{convertValue(e,t="none"){switch(dl(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tl(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nl(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw uu()}}convertObject(e,t){const n={};return qu(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new jp(tl(e.latitude),tl(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=il(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const t=el(e);return new Tu(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Nu.fromString(e);lu(Hh(n));const r=new al(n.get(1),n.get(3)),i=new Du(n.popFirst(5));return r.isEqual(t)||su(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function Sm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class _m extends km{convertBytes(e){return new Up(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Cp(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function Tm(e){e=_p(e,Np);const t=_p(e.firestore,Op),n=Pp(t),r=new _m(t);return dm(e._query),vp(n,e._query).then((n=>new cm(t,r,e,n)))}function Im(e,t,n){e=_p(e,Cp);const r=_p(e.firestore,Op),i=Sm(e.converter,t,n);return Nm(r,[Wp(Kp(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Nc.none())])}function Cm(e,t){const n=_p(e.firestore,Op),r=Dp(e),i=Sm(e.converter,t);return Nm(n,[Wp(Kp(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Nc.exists(!1))]).then((()=>r))}function Nm(e,t){return function(e,t){const n=new fu;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=ap(e);try{const e=await function(e,t){const n=cu(e),r=Tu.now(),i=t.reduce(((e,t)=>e.add(t.key)),sh());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Xc(),u=sh();return n.Ui.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(u=u.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Lc(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Fc(e.key,t,Nl(t.value.mapValue),Nc.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,u);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Zc(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.oc[e.currentUser.toKey()];r||(r=new Ku(Su)),r=r.insert(t,n),e.oc[e.currentUser.toKey()]=r}(r,e.batchId,n),await rp(r,e.changes),await cf(r.remoteStore)}catch(e){const t=_f(e,"Failed to persist write");n.reject(t)}}(await gp(e),t,n))),n.promise}(Pp(e),t)}!function(e,t=!0){!function(e){tu=e}(ke),ve(new L("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Op(r,new gu(e.getProvider("auth-internal")),new wu(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),_e(Za,"3.4.14",e),_e(Za,"3.4.14","esm2017")}();const xm=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:fe,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw we.create("bad-app-name",{appName:String(r)});const i=me.get(r);if(i){if(T(e,i.options)&&T(n,i.config))return i;throw we.create("duplicate-app",{appName:r})}const s=new F(r);for(const e of ge.values())s.addComponent(e);const o=new Ee(e,n,s);return me.set(r,o),o}({apiKey:"AIzaSyBvHCpKNrfKfc2AZZLP8D0K1AGlUFcX1aE",authDomain:"test-budget-38b21.firebaseapp.com",databaseURL:"https://test-budget-38b21.firebaseio.com",projectId:"test-budget-38b21",storageBucket:"test-budget-38b21.appspot.com",messagingSenderId:"1067130269246",appId:"1:1067130269246:web:504d76c1afc05bcbf12b6f"}),Am=function(e){const t=Ir(e);return{signIn:async function(){const e=new Zt;e.setCustomParameters({prompt:"select_account"});try{const n=(await Jn(t,e)).user;console.log(n.displayName,n.email,n.photoURL)}catch(e){const t=e.code,n=e.message;console.log(t,n)}},signOut:function(){hn(t)},onAuthStateChanged:function(e){return cn(t,e)}}}(xm),Dm=Am.signIn,Rm=Am.signOut,Om=Am.onAuthStateChanged,Lm=function(e){const t=Lp(e);return{getBudgets:async function(e){const n=pm(Ap(t,"budgets"),gm("uid","==",e.uid),vm("createdAt"));return(await Tm(n)).docs.map((function(e){return{id:e.id,...e.data()}}))},updateBudget:async function(e,n,r){const i=Ap(t,"budgets");return await Im(Dp(i,e),{amount:n,weekly_amount:r},{merge:!0})},createBudget:async function(e,n,r){const i=await Cm(Ap(t,"budgets"),{amount:0,createdAt:new Date,name:n,uid:e.uid,weekly_amount:0,weekly_budget:r});console.log("Document written with ID: ",i.id)}}}(xm),Pm=Lm.getBudgets,Mm=Lm.updateBudget,Fm=Lm.createBudget,Um=function(e){return new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR"}).format(e)},Vm=function(){const[e,n]=t(l).useState(void 0);return t(l).useEffect((function(){return Om(n)}),[]),e},jm=function({user:e}){return null!==e?(0,o.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(e){e.preventDefault(),Rm()},children:[(0,o.jsx)("i",{className:"bi bi-box-arrow-in-left"})," ",(0,o.jsx)("em",{children:e.displayName})]}):(0,o.jsx)("button",{className:"btn btn-outline-success",onClick:function(e){e.preventDefault(),Dm()},children:(0,o.jsx)("i",{className:"bi bi-box-arrow-in-right"})})},zm=function(e){return(0,o.jsx)("div",{className:"mt-5 d-flex justify-content-center",children:(0,o.jsx)("div",{style:{width:"3rem",height:"3rem"},className:"spinner-border",role:"status",children:(0,o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},Bm=function(e){return(0,o.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)("span",{className:"navbar-brand",children:"My Budgets"}),(0,o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,o.jsx)("span",{className:"navbar-toggler-icon"})}),(0,o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[(0,o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"}),(0,o.jsx)("form",{className:"d-flex",children:(0,o.jsx)(jm,{user:null})})]})]})})};l=s("jE8J5"),l=s("jE8J5");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function $m(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))}function qm(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}var Hm,Km=function(){},Wm=Km(),Gm=Object,Qm=function(e){return e===Wm},Xm=function(e){return"function"==typeof e},Ym=function(e,t){return Gm.assign({},e,t)},Jm="undefined",Zm=function(){return typeof window!=Jm},eg=new WeakMap,tg=0,ng=function(e){var t,n,r=typeof e,i=e&&e.constructor,s=i==Date;if(Gm(e)!==e||s||i==RegExp)t=s?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=eg.get(e))return t;if(t=++tg+"~",eg.set(e,t),i==Array){for(t="@",n=0;n<e.length;n++)t+=ng(e[n])+",";eg.set(e,t)}if(i==Gm){t="#";for(var o=Gm.keys(e).sort();!Qm(n=o.pop());)Qm(e[n])||(t+=n+":"+ng(e[n])+",");eg.set(e,t)}}return t},rg=!0,ig=Zm(),sg=typeof document!=Jm,og=ig&&window.addEventListener?window.addEventListener.bind(window):Km,ag=sg?document.addEventListener.bind(document):Km,ug=ig&&window.removeEventListener?window.removeEventListener.bind(window):Km,lg=sg?document.removeEventListener.bind(document):Km,cg={isOnline:function(){return rg},isVisible:function(){var e=sg&&document.visibilityState;return Qm(e)||"hidden"!==e}},hg={initFocus:function(e){return ag("visibilitychange",e),og("focus",e),function(){lg("visibilitychange",e),ug("focus",e)}},initReconnect:function(e){var t=function(){rg=!0,e()},n=function(){rg=!1};return og("online",t),og("offline",n),function(){ug("online",t),ug("offline",n)}}},dg=!Zm()||"Deno"in window,fg=function(e){return Zm()&&typeof window.requestAnimationFrame!=Jm?window.requestAnimationFrame(e):setTimeout(e,1)},pg=dg?l.useEffect:l.useLayoutEffect,mg="undefined"!=typeof navigator&&navigator.connection,gg=!dg&&mg&&(["slow-2g","2g"].includes(mg.effectiveType)||mg.saveData),yg=function(e){if(Xm(e))try{e=e()}catch(t){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?ng(e):"",t,e?"$swr$"+e:""]},vg=new WeakMap,bg=function(e,t,n,r,i,s,o){void 0===o&&(o=!0);var a=vg.get(e),u=a[0],l=a[1],c=a[3],h=u[t],d=l[t];if(o&&d)for(var f=0;f<d.length;++f)d[f](n,r,i);return s&&(delete c[t],h&&h[0])?h[0](2).then((function(){return e.get(t)})):e.get(t)},wg=0,Eg=function(){return++wg},kg=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return $m(void 0,void 0,void 0,(function(){var t,n,r,i,s,o,a,u,l,c,h,d,f,p,m,g,y,v,b,w,E;return qm(this,(function(k){switch(k.label){case 0:if(t=e[0],n=e[1],r=e[2],i=e[3],o=!!Qm((s="boolean"==typeof i?{revalidate:i}:i||{}).populateCache)||s.populateCache,a=!1!==s.revalidate,u=!1!==s.rollbackOnError,l=s.optimisticData,c=yg(n),h=c[0],d=c[2],!h)return[2];if(f=vg.get(t),p=f[2],e.length<3)return[2,bg(t,h,t.get(h),Wm,Wm,a,!0)];if(m=r,y=Eg(),p[h]=[y,0],v=!Qm(l),b=t.get(h),v&&(w=Xm(l)?l(b):l,t.set(h,w),bg(t,h,w)),Xm(m))try{m=m(t.get(h))}catch(e){g=e}return m&&Xm(m.then)?[4,m.catch((function(e){g=e}))]:[3,2];case 1:if(m=k.sent(),y!==p[h][0]){if(g)throw g;return[2,m]}g&&v&&u&&(o=!0,m=b,t.set(h,b)),k.label=2;case 2:return o&&(g||(Xm(o)&&(m=o(m,b)),t.set(h,m)),t.set(d,Ym(t.get(d),{error:g}))),p[h][1]=Eg(),[4,bg(t,h,m,g,Wm,a,!!o)];case 3:if(E=k.sent(),g)throw g;return[2,o?E:m]}}))}))},Sg=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},_g=function(e,t){if(!vg.has(e)){var n=Ym(hg,t),r={},i=kg.bind(Wm,e),s=Km;if(vg.set(e,[r,{},{},{},i]),!dg){var o=n.initFocus(setTimeout.bind(Wm,Sg.bind(Wm,r,0))),a=n.initReconnect(setTimeout.bind(Wm,Sg.bind(Wm,r,1)));s=function(){o&&o(),a&&a(),vg.delete(e)}}return[e,i,s]}return[e,vg.get(e)[4]]},Tg=_g(new Map),Ig=Tg[0],Cg=Tg[1],Ng=Ym({onLoadingSlow:Km,onSuccess:Km,onError:Km,onErrorRetry:function(e,t,n,r,i){var s=n.errorRetryCount,o=i.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;!Qm(s)&&o>s||setTimeout(r,a,i)},onDiscarded:Km,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:gg?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:gg?5e3:3e3,compare:function(e,t){return ng(e)==ng(t)},isPaused:function(){return!1},cache:Ig,mutate:Cg,fallback:{}},cg),xg=function(e,t){var n=Ym(e,t);if(t){var r=e.use,i=e.fallback,s=t.use,o=t.fallback;r&&s&&(n.use=r.concat(s)),i&&o&&(n.fallback=Ym(i,o))}return n},Ag=(0,l.createContext)({}),Dg=function(e){return Xm(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},Rg=function(){return Ym(Ng,(0,l.useContext)(Ag))},Og=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},Lg={dedupe:!0},Pg=(Gm.defineProperty((function(e){var t=e.value,n=xg((0,l.useContext)(Ag),t),r=t&&t.provider,i=(0,l.useState)((function(){return r?_g(r(n.cache||Ig),t):Wm}))[0];return i&&(n.cache=i[0],n.mutate=i[1]),pg((function(){return i?i[2]:Wm}),[]),(0,l.createElement)(Ag.Provider,Ym(e,{value:n}))}),"default",{value:Ng}),Hm=function(e,t,n){var r=n.cache,i=n.compare,s=n.fallbackData,o=n.suspense,a=n.revalidateOnMount,u=n.refreshInterval,c=n.refreshWhenHidden,h=n.refreshWhenOffline,d=vg.get(r),f=d[0],p=d[1],m=d[2],g=d[3],y=yg(e),v=y[0],b=y[1],w=y[2],E=(0,l.useRef)(!1),k=(0,l.useRef)(!1),S=(0,l.useRef)(v),_=(0,l.useRef)(t),T=(0,l.useRef)(n),I=function(){return T.current},C=function(){return I().isVisible()&&I().isOnline()},N=function(e){return r.set(w,Ym(r.get(w),e))},x=r.get(v),A=Qm(s)?n.fallback[v]:s,D=Qm(x)?A:x,R=r.get(w)||{},O=R.error,L=!E.current,P=function(){return L&&!Qm(a)?a:!I().isPaused()&&(o?!Qm(D)&&n.revalidateIfStale:Qm(D)||n.revalidateIfStale)},M=!(!v||!t)&&(!!R.isValidating||L&&P()),F=function(e,t){var n=(0,l.useState)({})[1],r=(0,l.useRef)(e),i=(0,l.useRef)({data:!1,error:!1,isValidating:!1}),s=(0,l.useCallback)((function(e){var s=!1,o=r.current;for(var a in e){var u=a;o[u]!==e[u]&&(o[u]=e[u],i.current[u]&&(s=!0))}s&&!t.current&&n({})}),[]);return pg((function(){r.current=e})),[r,i.current,s]}({data:D,error:O,isValidating:M},k),U=F[0],V=F[1],j=F[2],z=(0,l.useCallback)((function(e){return $m(void 0,void 0,void 0,(function(){var t,s,o,a,u,l,c,h,d,f,p,y,w;return qm(this,(function(T){switch(T.label){case 0:if(t=_.current,!v||!t||k.current||I().isPaused())return[2,!1];a=!0,u=e||{},l=!g[v]||!u.dedupe,c=function(){return!k.current&&v===S.current&&E.current},h=function(){var e=g[v];e&&e[1]===o&&delete g[v]},d={isValidating:!1},f=function(){N({isValidating:!1}),c()&&j(d)},N({isValidating:!0}),j({isValidating:!0}),T.label=1;case 1:return T.trys.push([1,3,,4]),l&&(bg(r,v,U.current.data,U.current.error,!0),n.loadingTimeout&&!r.get(v)&&setTimeout((function(){a&&c()&&I().onLoadingSlow(v,n)}),n.loadingTimeout),g[v]=[t.apply(void 0,b),Eg()]),w=g[v],s=w[0],o=w[1],[4,s];case 2:return s=T.sent(),l&&setTimeout(h,n.dedupingInterval),g[v]&&g[v][1]===o?(N({error:Wm}),d.error=Wm,p=m[v],!Qm(p)&&(o<=p[0]||o<=p[1]||0===p[1])?(f(),l&&c()&&I().onDiscarded(v),[2,!1]):(i(U.current.data,s)?d.data=U.current.data:d.data=s,i(r.get(v),s)||r.set(v,s),l&&c()&&I().onSuccess(s,v,n),[3,4])):(l&&c()&&I().onDiscarded(v),[2,!1]);case 3:return y=T.sent(),h(),I().isPaused()||(N({error:y}),d.error=y,l&&c()&&(I().onError(y,v,n),("boolean"==typeof n.shouldRetryOnError&&n.shouldRetryOnError||Xm(n.shouldRetryOnError)&&n.shouldRetryOnError(y))&&C()&&I().onErrorRetry(y,v,n,z,{retryCount:(u.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return a=!1,f(),c()&&l&&bg(r,v,d.data,d.error,!1),[2,!0]}}))}))}),[v]),B=(0,l.useCallback)(kg.bind(Wm,r,(function(){return S.current})),[]);if(pg((function(){_.current=t,T.current=n})),pg((function(){if(v){var e=v!==S.current,t=z.bind(Wm,Lg),n=0,r=Og(v,p,(function(e,t,n){j(Ym({error:t,isValidating:n},i(U.current.data,e)?Wm:{data:e}))})),s=Og(v,f,(function(e){if(0==e){var r=Date.now();I().revalidateOnFocus&&r>n&&C()&&(n=r+I().focusThrottleInterval,t())}else if(1==e)I().revalidateOnReconnect&&C()&&t();else if(2==e)return z()}));return k.current=!1,S.current=v,E.current=!0,e&&j({data:D,error:O,isValidating:M}),P()&&(Qm(D)||dg?t():fg(t)),function(){k.current=!0,r(),s()}}}),[v,z]),pg((function(){var e;function t(){var t=Xm(u)?u(D):u;t&&-1!==e&&(e=setTimeout(n,t))}function n(){U.current.error||!c&&!I().isVisible()||!h&&!I().isOnline()?t():z(Lg).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[u,c,h,z]),(0,l.useDebugValue)(D),o&&Qm(D)&&v)throw _.current=t,T.current=n,k.current=!1,Qm(O)?z(Lg):O;return{mutate:B,get data(){return V.data=!0,D},get error(){return V.error=!0,O},get isValidating(){return V.isValidating=!0,M}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Rg(),r=Dg(e),i=r[0],s=r[1],o=r[2],a=xg(n,o),u=Hm,l=a.use;if(l)for(var c=l.length;c-- >0;)u=l[c](u);return u(i,s||a.fetcher,a)});const Mg=function(e){const{data:t,error:n,isValidating:r,mutate:i}=Pg(["budgets",e.uid],(function(e,t){return console.assert("budgets"===e),Pm({uid:t})}));return{data:t,error:n,isValidating:r,Methods:{spend:async function(e,n){i(t.map((function(t){return e.id===t.id?{...e,amount:e.amount-n,weekly_amount:e.weekly_amount+n}:t})),!1),await Mm(e.id,e.amount-n,e.weekly_amount+n),i()},recharge:async function(e){i((function(t){return t.map((function(t){return e.id===t.id?{...e,amount:e.amount+e.weekly_budget,weekly_amount:0}:t}))}),!1),await Mm(e.id,e.amount+e.weekly_budget,0),i()},create:async function(n){i([...t,{amount:0,id:"temporary_id",name:`${n.name} (${n.description})`,weekly_amount:0,weekly_budget:n.budget}],!1),await Fm(e,`${n.name} (${n.description})`,n.budget),i()}}}};l=s("jE8J5"),l=s("jE8J5");const Fg=document.body.appendChild(document.createElement("div")),Ug=function({opened:e,setOpened:n,children:r}){const[i,s]=t(l).useState(!1),a=t(l).useRef(null),c=t(l).useRef(null);return t(l).useEffect((function(){c.current=new bootstrap.Modal(a.current),a.current.addEventListener("hidden.bs.modal",(function(e){s(!1),n(!1)})),a.current.addEventListener("shown.bs.modal",(function(){s(!0)}))}),[]),t(l).useEffect((function(){e?c.current.show():(s(!1),c.current.hide())}),[e]),t(u).createPortal((0,o.jsx)("div",{ref:a,className:"modal fade",tabIndex:"-1","aria-hidden":"true",children:(0,o.jsx)("div",{className:"modal-dialog",children:(0,o.jsx)("div",{className:"modal-content",children:i?r:null})})}),Fg)};l=s("jE8J5");const Vg=function({setOpened:e,budget:n,action:r}){const i=t(l).useRef(null);t(l).useEffect((function(){i.current.focus()}),[]);const[s,a]=t(l).useState("");return(0,o.jsxs)(t(l).Fragment,{children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)("h5",{className:"modal-title",children:n.name}),(0,o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r(parseFloat(s)),e(!1)},children:[(0,o.jsxs)("div",{className:"modal-body",children:[(0,o.jsxs)("div",{className:"form-floating",children:[(0,o.jsx)("input",{ref:i,id:"floatingInput",type:"number",className:"form-control",value:s,step:"0.01",onChange:function(e){a(e.target.value)},placeholder:"3.14",required:!0}),(0,o.jsx)("label",{htmlFor:"floatingInput",children:"Quanto hai speso?"})]}),(0,o.jsxs)("small",{className:"form-text text-muted",children:["Il tuo budget è ",Um(n.amount)]})]}),(0,o.jsx)("div",{className:"modal-footer",children:(0,o.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Sure!"})})]})]})},jg=function({budget:e,spend:n}){const[r,i]=t(l).useState(!1);return(0,o.jsxs)("div",{className:"col-sm-6",children:[(0,o.jsx)(Ug,{opened:r,setOpened:i,children:(0,o.jsx)(Vg,{setOpened:i,budget:e,action:n})}),(0,o.jsxs)("div",{className:"card border-secondary m-2",children:[(0,o.jsxs)("div",{className:"card-header",children:[(0,o.jsx)("span",{children:e.name}),(0,o.jsx)("span",{className:"float-end",children:(0,o.jsxs)("form",{className:"row row-cols-auto align-items-center",children:[(0,o.jsx)("small",{children:Um(e.weekly_budget)}),(0,o.jsxs)("div",{className:"dropdown",children:[(0,o.jsx)("button",{className:"btn btn-sm btn-outline-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,o.jsx)("i",{className:"bi bi-gear"})}),(0,o.jsxs)("div",{className:"dropdown-menu dropdown-menu-end",children:[(0,o.jsx)("button",{className:"dropdown-item",onClick:function(e){e.preventDefault()},children:"Details"}),(0,o.jsx)("button",{className:"dropdown-item",onClick:function(e){e.preventDefault()},children:"Move"})]})]})]})})]}),(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("p",{className:"mb-0",children:(0,o.jsx)("span",{className:"card-subtitle mb-2 text-muted",children:Um(e.weekly_amount)})}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{className:"fs-5",children:(0,o.jsx)("em",{children:Um(e.amount)})}),(0,o.jsxs)("button",{className:"btn btn-outline-primary float-end",onClick:function(){i(!0)},children:[(0,o.jsx)("i",{className:"bi bi-currency-euro"})," Add Cost"]})]})]})]})]},e.id)};s("jE8J5");const zg=function({user:e}){const{isValidating:t}=Mg(e);return t?(0,o.jsx)("div",{className:"spinner-border",style:{position:"fixed",bottom:"1em",right:"1em"},role:"status",children:(0,o.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):null};l=s("jE8J5");s("jE8J5");const Bg=function({opened:e,setOpened:t,action:n}){return(0,o.jsxs)(Ug,{opened:e,setOpened:t,children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)("h5",{className:"modal-title",children:"Recharge All"}),(0,o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,o.jsx)("div",{className:"modal-body",children:"Sicuro di voler ricaricare tutti i budget?"}),(0,o.jsx)("div",{className:"modal-footer",style:{display:"block"},children:(0,o.jsx)("button",{className:"btn btn-outline-danger float-end",onClick:function(){n(),t(!1)},children:"Ok"})})]})};l=s("jE8J5");const $g=function({action:e}){const n=t(l).useRef(null);t(l).useEffect((function(){n.current.focus()}),[]);const[r,i]=t(l).useState(""),[s,a]=t(l).useState(""),[u,c]=t(l).useState(""),h=function(e){if("budget"===e.target.name)c(parseFloat(e.target.value));else{(0,{name:i,description:a}[e.target.name])(e.target.value)}};return(0,o.jsxs)(t(l).Fragment,{children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)("h5",{className:"modal-title",children:"New Budget"}),(0,o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:r,description:s,budget:u})},children:[(0,o.jsxs)("div",{className:"modal-body",children:[(0,o.jsxs)("div",{className:"form-floating mb-3",children:[(0,o.jsx)("input",{ref:n,className:"form-control",name:"name",placeholder:" ",value:r,onChange:h,required:!0}),(0,o.jsx)("label",{children:"Name"})]}),(0,o.jsxs)("div",{className:"form-floating mb-3",children:[(0,o.jsx)("textarea",{className:"form-control",name:"description",rows:"3",placeholder:" ",style:{height:"100px"},value:s,onChange:h}),(0,o.jsx)("label",{children:"Description"})]}),(0,o.jsxs)("div",{className:"form-floating mb-3",children:[(0,o.jsx)("input",{type:"number",min:"0.01",step:"0.01",className:"form-control",value:u,onChange:h,name:"budget",placeholder:" ",required:!0}),(0,o.jsx)("label",{children:"Budget"})]})]}),(0,o.jsx)("div",{className:"modal-footer",style:{display:"block"},children:(0,o.jsx)("button",{type:"submit",className:"btn btn-outline-danger float-end",children:"Ok"})})]})]})},qg=function({opened:e,setOpened:t,action:n}){return(0,o.jsx)(Ug,{opened:e,setOpened:t,children:(0,o.jsx)($g,{action:function(e){n(e),t(!1)}})})},Hg=function({user:e,budgets:n,Methods:r}){const[i,s]=t(l).useState(!1),[a,u]=t(l).useState(!1),c=n.reduce((function(e,t){return e+t.weekly_budget}),0);return(0,o.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:[(0,o.jsx)(Bg,{opened:i,setOpened:s,action:function(){n.forEach((function(e){r.recharge(e)}))}}),(0,o.jsx)(qg,{opened:a,setOpened:u,action:function(e){r.create(e)}}),(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsxs)("span",{className:"navbar-brand",children:["My Budgets ",(0,o.jsx)("sub",{children:Um(c)})]}),(0,o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,o.jsx)("span",{className:"navbar-toggler-icon"})}),(0,o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[(0,o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)("a",{className:"nav-link",href:"#",onClick:function(e){e.preventDefault(),s(!0)},children:"Recharge all"})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)("a",{className:"nav-link",href:"#",onClick:function(e){e.preventDefault(),u(!0)},children:"New budget"})})]}),(0,o.jsx)("form",{className:"d-flex",children:(0,o.jsx)(jm,{user:e})})]})]})]})},Kg=function({user:e,error:n}){return(0,o.jsxs)(t(l).Fragment,{children:[(0,o.jsx)(Bm,{user:e}),(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{style:{marginTop:"10px"},className:"alert alert-danger",role:"alert",children:[(0,o.jsx)("p",{children:"Errore nel caricamento dei budget!"}),(0,o.jsx)("hr",{}),(0,o.jsx)("p",{children:(0,o.jsx)("em",{children:n.message})})]})})]})},Wg=function({user:e}){const{data:n,error:r,Methods:i}=Mg(e);if(void 0!==r)return(0,o.jsx)(Kg,{user:e,error:r});if(void 0===n)return(0,o.jsx)(zm,{});const s=n.map((function(e){return(0,o.jsx)(jg,{budget:e,spend:function(t){i.spend(e,t)}},e.id)}));return(0,o.jsxs)(t(l).Fragment,{children:[(0,o.jsx)(Hg,{user:e,budgets:n,Methods:i}),(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:s})}),(0,o.jsx)(zg,{user:e})]})},Gg=function(){return(0,o.jsxs)(t(l).Fragment,{children:[(0,o.jsx)(Bm,{}),(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{style:{marginTop:"10px"},className:"alert alert-danger",role:"alert",children:[(0,o.jsx)("p",{children:"Please authenticate!"}),(0,o.jsxs)("p",{children:["You need to"," ",(0,o.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),Dm()},children:"authenticate"})," ","with a Google Account to use this app."]})]})})]})},Qg=function(){const e=Vm();return void 0===e?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(zm,{}),(0,o.jsx)("p",{className:"mt-5 d-flex justify-content-center lead",children:"Alla gente non piace essere criticata"})]}):null===e?(0,o.jsx)(Gg,{}):(0,o.jsx)(Wg,{user:e})};a(document.getElementById("app")).render((0,o.jsx)(Qg,{}))}();