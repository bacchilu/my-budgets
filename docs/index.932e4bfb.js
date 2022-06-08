function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequirebb14;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequirebb14=s),s.register("8pxar",(function(t,n){var r,i,a;e(t.exports,"Fragment",(function(){return r}),(function(e){return r=e})),e(t.exports,"jsx",(function(){return i}),(function(e){return i=e})),e(t.exports,"jsxs",(function(){return a}),(function(e){return a=e}));var o=s("6SgHj"),l=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,h=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,i={},s=null,a=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:l,type:e,key:s,ref:a,props:i,_owner:h.current}}r=u,i=f,a=f})),s.register("6SgHj",(function(e,t){e.exports=s("dn406")})),s.register("dn406",(function(t,n){var r,i,s,a,o,l,u,c,h,d,f,p,m,g,y,v,b,w,E,k,S,_,T,I,C,N,x,A,R,D,L,O,P,M,U;e(t.exports,"Children",(function(){return r}),(function(e){return r=e})),e(t.exports,"Component",(function(){return i}),(function(e){return i=e})),e(t.exports,"Fragment",(function(){return s}),(function(e){return s=e})),e(t.exports,"Profiler",(function(){return a}),(function(e){return a=e})),e(t.exports,"PureComponent",(function(){return o}),(function(e){return o=e})),e(t.exports,"StrictMode",(function(){return l}),(function(e){return l=e})),e(t.exports,"Suspense",(function(){return u}),(function(e){return u=e})),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return c}),(function(e){return c=e})),e(t.exports,"cloneElement",(function(){return h}),(function(e){return h=e})),e(t.exports,"createContext",(function(){return d}),(function(e){return d=e})),e(t.exports,"createElement",(function(){return f}),(function(e){return f=e})),e(t.exports,"createFactory",(function(){return p}),(function(e){return p=e})),e(t.exports,"createRef",(function(){return m}),(function(e){return m=e})),e(t.exports,"forwardRef",(function(){return g}),(function(e){return g=e})),e(t.exports,"isValidElement",(function(){return y}),(function(e){return y=e})),e(t.exports,"lazy",(function(){return v}),(function(e){return v=e})),e(t.exports,"memo",(function(){return b}),(function(e){return b=e})),e(t.exports,"startTransition",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_act",(function(){return E}),(function(e){return E=e})),e(t.exports,"useCallback",(function(){return k}),(function(e){return k=e})),e(t.exports,"useContext",(function(){return S}),(function(e){return S=e})),e(t.exports,"useDebugValue",(function(){return _}),(function(e){return _=e})),e(t.exports,"useDeferredValue",(function(){return T}),(function(e){return T=e})),e(t.exports,"useEffect",(function(){return I}),(function(e){return I=e})),e(t.exports,"useId",(function(){return C}),(function(e){return C=e})),e(t.exports,"useImperativeHandle",(function(){return N}),(function(e){return N=e})),e(t.exports,"useInsertionEffect",(function(){return x}),(function(e){return x=e})),e(t.exports,"useLayoutEffect",(function(){return A}),(function(e){return A=e})),e(t.exports,"useMemo",(function(){return R}),(function(e){return R=e})),e(t.exports,"useReducer",(function(){return D}),(function(e){return D=e})),e(t.exports,"useRef",(function(){return L}),(function(e){return L=e})),e(t.exports,"useState",(function(){return O}),(function(e){return O=e})),e(t.exports,"useSyncExternalStore",(function(){return P}),(function(e){return P=e})),e(t.exports,"useTransition",(function(){return M}),(function(e){return M=e})),e(t.exports,"version",(function(){return U}),(function(e){return U=e}));var F=Symbol.for("react.element"),V=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),H=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator;var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,J={};function Z(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,Y(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ie=Object.prototype.hasOwnProperty,se={current:null},ae={key:!0,ref:!0,__self:!0,__source:!0};function oe(e,t,n){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)ie.call(t,r)&&!ae.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return{$$typeof:F,type:e,key:s,ref:a,props:i,_owner:se.current}}function le(e){return"object"==typeof e&&null!==e&&e.$$typeof===F}var ue=/\/+/g;function ce(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function he(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a,o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case F:case V:o=!0}}if(o)return i=i(o=e),e=""===r?"."+ce(o,0):r,re(i)?(n="",null!=e&&(n=e.replace(ue,"$&/")+"/"),he(i,t,n,"",(function(e){return e}))):null!=i&&(le(i)&&(i=function(e,t){return{$$typeof:F,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ue,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=""===r?".":r+":",re(e))for(var l=0;l<e.length;l++){var u=r+ce(s=e[l],l);o+=he(s,t,n,u,i)}else if("function"==typeof(u=null===(a=e)||"object"!=typeof a?null:"function"==typeof(a=Q&&a[Q]||a["@@iterator"])?a:null))for(e=u.call(e),l=0;!(s=e.next()).done;)o+=he(s=s.value,t,n,u=r+ce(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function de(e,t,n){if(null==e)return e;var r=[],i=0;return he(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function fe(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var pe={current:null},me={transition:null};r={map:de,forEach:function(e,t,n){de(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return de(e,(function(){t++})),t},toArray:function(e){return de(e,(function(e){return e}))||[]},only:function(e){if(!le(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,s=j,a=B,o=te,l=z,u=K,c={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:me,ReactCurrentOwner:se},h=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=se.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)ie.call(t,l)&&!ae.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==o?o[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:F,type:e.type,key:i,ref:s,props:r,_owner:a}},d=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:q,_context:e},e.Consumer=e},f=oe,p=function(e){var t=oe.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:$,render:e}},y=le,v=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:fe}},b=function(e,t){return{$$typeof:W,type:e,compare:void 0===t?null:t}},w=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},E=function(){throw Error("act(...) is not supported in production builds of React.")},k=function(e,t){return pe.current.useCallback(e,t)},S=function(e){return pe.current.useContext(e)},_=function(){},T=function(e){return pe.current.useDeferredValue(e)},I=function(e,t){return pe.current.useEffect(e,t)},C=function(){return pe.current.useId()},N=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)},x=function(e,t){return pe.current.useInsertionEffect(e,t)},A=function(e,t){return pe.current.useLayoutEffect(e,t)},R=function(e,t){return pe.current.useMemo(e,t)},D=function(e,t,n){return pe.current.useReducer(e,t,n)},L=function(e){return pe.current.useRef(e)},O=function(e){return pe.current.useState(e)},P=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)},M=function(){return pe.current.useTransition()},U="18.1.0"})),s.register("a9mMY",(function(t,n){var r,i,a,o,l,u,c,h,d,f,p,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return r}),(function(e){return r=e})),e(t.exports,"createPortal",(function(){return i}),(function(e){return i=e})),e(t.exports,"createRoot",(function(){return a}),(function(e){return a=e})),e(t.exports,"findDOMNode",(function(){return o}),(function(e){return o=e})),e(t.exports,"flushSync",(function(){return l}),(function(e){return l=e})),e(t.exports,"hydrate",(function(){return u}),(function(e){return u=e})),e(t.exports,"hydrateRoot",(function(){return c}),(function(e){return c=e})),e(t.exports,"render",(function(){return h}),(function(e){return h=e})),e(t.exports,"unmountComponentAtNode",(function(){return d}),(function(e){return d=e})),e(t.exports,"unstable_batchedUpdates",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_renderSubtreeIntoContainer",(function(){return p}),(function(e){return p=e})),e(t.exports,"version",(function(){return m}),(function(e){return m=e}));var g=s("6SgHj"),y=s("jM0cN");function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,w={};function E(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(w[e]=t,e=0;e<t.length;e++)b.add(t[e])}var S=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),_=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},C={};function N(e,t,n,r,i,s,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){x[e]=new N(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];x[t]=new N(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){x[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){x[e]=new N(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){x[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){x[e]=new N(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){x[e]=new N(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){x[e]=new N(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){x[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)}));var A=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}function D(e,t,n,r){var i=x.hasOwnProperty(t)?x[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!_.call(C,e)||!_.call(I,e)&&(T.test(e)?C[e]=!0:(I[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(A,R);x[t]=new N(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(A,R);x[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(A,R);x[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){x[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)})),x.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){x[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)}));var L=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),P=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),j=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),$=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var K=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var W=Symbol.iterator;function G(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=W&&e[W]||e["@@iterator"])?e:null}var Q,X=Object.assign;function Y(e){if(void 0===Q)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var J=!1;function Z(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),s=r.stack.split("\n"),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(1!==a||1!==o)do{if(a--,0>--o||i[a]!==s[o]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=o);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Y(e):""}function ee(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case P:return"Portal";case F:return"Profiler";case U:return"StrictMode";case B:return"Suspense";case q:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case V:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case H:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case $:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function se(e){e._valueTracker||(e._valueTracker=function(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ae(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function oe(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function le(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ue(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ce(e,t){null!=(t=t.checked)&&D(e,"checked",t,!1)}function he(e,t){ce(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?fe(e,t.type,n):t.hasOwnProperty("defaultValue")&&fe(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function de(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function fe(e,t,n){"number"===t&&oe(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pe=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(v(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ye(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(v(92));if(pe(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ve(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function be(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function we(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ee(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?we(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ke,Se,_e=(Se=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ke=ke||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return Se(e,t)}))}:Se);function Te(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];function Ne(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Ie.hasOwnProperty(e)&&Ie[e]?(""+t).trim():t+"px"}function xe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Ne(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Ie).forEach((function(e){Ce.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ie[t]=Ie[e]}))}));var Ae=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(e,t){if(t){if(Ae[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(v(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(v(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(v(62))}}function De(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function Oe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Pe=null,Me=null,Ue=null;function Fe(e){if(e=xi(e)){if("function"!=typeof Pe)throw Error(v(280));var t=e.stateNode;t&&(t=Ri(t),Pe(e.stateNode,e.type,t))}}function Ve(e){Me?Ue?Ue.push(e):Ue=[e]:Me=e}function je(){if(Me){var e=Me,t=Ue;if(Ue=Me=null,Fe(e),t)for(e=0;e<t.length;e++)Fe(t[e])}}function ze(e,t){return e(t)}function Be(){}var qe=!1;function He(e,t,n){if(qe)return e(t,n);qe=!0;try{return ze(e,t,n)}finally{qe=!1,(null!==Me||null!==Ue)&&(Be(),je())}}function $e(e,t){var n=e.stateNode;if(null===n)return null;var r=Ri(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(v(231,t,typeof n));return n}var Ke=!1;if(S)try{var We={};Object.defineProperty(We,"passive",{get:function(){Ke=!0}}),window.addEventListener("test",We,We),window.removeEventListener("test",We,We)}catch(Se){Ke=!1}function Ge(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var Qe=!1,Xe=null,Ye=!1,Je=null,Ze={onError:function(e){Qe=!0,Xe=e}};function et(e,t,n,r,i,s,a,o,l){Qe=!1,Xe=null,Ge.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(v(188))}function it(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rt(i),e;if(s===r)return rt(i),t;s=s.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(3!==n.tag)throw Error(v(188));return n.stateNode.current===n?e:t}(e))?st(e):null}function st(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=st(e);if(null!==t)return t;e=e.sibling}return null}var at=y.unstable_scheduleCallback,ot=y.unstable_cancelCallback,lt=y.unstable_shouldYield,ut=y.unstable_requestPaint,ct=y.unstable_now,ht=y.unstable_getCurrentPriorityLevel,dt=y.unstable_ImmediatePriority,ft=y.unstable_UserBlockingPriority,pt=y.unstable_NormalPriority,mt=y.unstable_LowPriority,gt=y.unstable_IdlePriority,yt=null,vt=null;var bt=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(wt(e)/Et|0)|0},wt=Math.log,Et=Math.LN2;var kt=64,St=4194304;function _t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=268435455&n;if(0!==a){var o=a&~i;0!==o?r=_t(o):0!==(s&=a)&&(r=_t(s))}else 0!==(a=n&~i)?r=_t(a):0!==s&&(r=_t(s));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&0!=(4194240&s)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-bt(t)),r|=e[n],t&=~i;return r}function It(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ct(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Nt(){var e=kt;return 0==(4194240&(kt<<=1))&&(kt=64),e}function xt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function At(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-bt(t)]=n}function Rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Dt=0;function Lt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var Ot,Pt,Mt,Ut,Ft,Vt=!1,jt=[],zt=null,Bt=null,qt=null,Ht=new Map,$t=new Map,Kt=[],Wt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gt(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Ht.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$t.delete(t.pointerId)}}function Qt(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=xi(t))&&Pt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Xt(e){var t=Ni(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void Ft(e.priority,(function(){Mt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=un(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xi(n))&&Pt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Le=r,n.target.dispatchEvent(r),Le=null,t.shift()}return!0}function Jt(e,t,n){Yt(e)&&n.delete(t)}function Zt(){Vt=!1,null!==zt&&Yt(zt)&&(zt=null),null!==Bt&&Yt(Bt)&&(Bt=null),null!==qt&&Yt(qt)&&(qt=null),Ht.forEach(Jt),$t.forEach(Jt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,Vt||(Vt=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<jt.length){en(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&en(zt,e),null!==Bt&&en(Bt,e),null!==qt&&en(qt,e),Ht.forEach(t),$t.forEach(t),n=0;n<Kt.length;n++)(r=Kt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&null===(n=Kt[0]).blockedOn;)Xt(n),null===n.blockedOn&&Kt.shift()}var nn=L.ReactCurrentBatchConfig,rn=!0;function sn(e,t,n,r){var i=Dt,s=nn.transition;nn.transition=null;try{Dt=1,on(e,t,n,r)}finally{Dt=i,nn.transition=s}}function an(e,t,n,r){var i=Dt,s=nn.transition;nn.transition=null;try{Dt=4,on(e,t,n,r)}finally{Dt=i,nn.transition=s}}function on(e,t,n,r){if(rn){var i=un(e,t,n,r);if(null===i)ei(e,t,r,ln,n),Gt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return zt=Qt(zt,e,t,n,r,i),!0;case"dragenter":return Bt=Qt(Bt,e,t,n,r,i),!0;case"mouseover":return qt=Qt(qt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ht.set(s,Qt(Ht.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$t.set(s,Qt($t.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Gt(e,r),4&t&&-1<Wt.indexOf(e)){for(;null!==i;){var s=xi(i);if(null!==s&&Ot(s),null===(s=un(e,t,n,r))&&ei(e,t,r,ln,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else ei(e,t,r,null,n)}}var ln=null;function un(e,t,n,r){if(ln=null,null!==(e=Ni(e=Oe(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function cn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ht()){case dt:return 1;case ft:return 4;case pt:case mt:return 16;case gt:return 536870912;default:return 16}default:return 16}}var hn=null,dn=null,fn=null;function pn(){if(fn)return fn;var e,t,n=dn,r=n.length,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[s-t];t++);return fn=i.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function yn(){return!1}function vn(e){function t(t,n,r,i,s){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?gn:yn,this.isPropagationStopped=yn,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var bn,wn,En,kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=vn(kn),_n=X({},kn,{view:0,detail:0}),Tn=vn(_n),In=X({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&"mousemove"===e.type?(bn=e.screenX-En.screenX,wn=e.screenY-En.screenY):wn=bn=0,En=e),bn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Cn=vn(In),Nn=vn(X({},In,{dataTransfer:0})),xn=vn(X({},_n,{relatedTarget:0})),An=vn(X({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=vn(X({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),Dn=vn(X({},kn,{data:0})),Ln={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},On={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Pn[e])&&!!t[e]}function Un(){return Mn}var Fn=vn(X({},_n,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?On[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),Vn=vn(X({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),jn=vn(X({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),zn=vn(X({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Bn=vn(X({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=[9,13,27,32],Hn=S&&"CompositionEvent"in window,$n=null;S&&"documentMode"in document&&($n=document.documentMode);var Kn=S&&"TextEvent"in window&&!$n,Wn=S&&(!Hn||$n&&8<$n&&11>=$n),Gn=String.fromCharCode(32),Qn=!1;function Xn(e,t){switch(e){case"keyup":return-1!==qn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Jn=!1;var Zn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Zn[e.type]:"textarea"===t}function tr(e,t,n,r){Ve(r),0<(t=ni(t,"onChange")).length&&(n=new Sn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function ir(e){Gr(e,0)}function sr(e){if(ae(Ai(e)))return e}function ar(e,t){if("change"===e)return t}var or=!1;if(S){var lr;if(S){var ur="oninput"in document;if(!ur){var cr=document.createElement("div");cr.setAttribute("oninput","return;"),ur="function"==typeof cr.oninput}lr=ur}else lr=!1;or=lr&&(!document.documentMode||9<document.documentMode)}function hr(){nr&&(nr.detachEvent("onpropertychange",dr),rr=nr=null)}function dr(e){if("value"===e.propertyName&&sr(rr)){var t=[];tr(t,rr,e,Oe(e)),He(ir,t)}}function fr(e,t,n){"focusin"===e?(hr(),rr=n,(nr=t).attachEvent("onpropertychange",dr)):"focusout"===e&&hr()}function pr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return sr(rr)}function mr(e,t){if("click"===e)return sr(t)}function gr(e,t){if("input"===e||"change"===e)return sr(t)}var yr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function vr(e,t){if(yr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_.call(t,i)||!yr(e[i],t[i]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n,r=br(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=br(r)}}function Er(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Er(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function kr(){for(var e=window,t=oe();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=oe((e=t.contentWindow).document)}return t}function Sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function _r(e){var t=kr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Er(n.ownerDocument.documentElement,n)){if(null!==r&&Sr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=wr(n,s);var a=wr(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tr=S&&"documentMode"in document&&11>=document.documentMode,Ir=null,Cr=null,Nr=null,xr=!1;function Ar(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==Ir||Ir!==oe(r)||("selectionStart"in(r=Ir)&&Sr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Nr&&vr(Nr,r)||(Nr=r,0<(r=ni(Cr,"onSelect")).length&&(t=new Sn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dr={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},Lr={},Or={};function Pr(e){if(Lr[e])return Lr[e];if(!Dr[e])return e;var t,n=Dr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Or)return Lr[e]=n[t];return e}S&&(Or=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);var Mr=Pr("animationend"),Ur=Pr("animationiteration"),Fr=Pr("animationstart"),Vr=Pr("transitionend"),jr=new Map,zr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(e,t){jr.set(e,t),E(t,[e])}for(var qr=0;qr<zr.length;qr++){var Hr=zr[qr];Br(Hr.toLowerCase(),"on"+(Hr[0].toUpperCase()+Hr.slice(1)))}Br(Mr,"onAnimationEnd"),Br(Ur,"onAnimationIteration"),Br(Fr,"onAnimationStart"),Br("dblclick","onDoubleClick"),Br("focusin","onFocus"),Br("focusout","onBlur"),Br(Vr,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kr=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function Wr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,a,o,l){if(et.apply(this,arguments),Qe){if(!Qe)throw Error(v(198));var u=Xe;Qe=!1,Xe=null,Ye||(Ye=!0,Je=u)}}(r,t,void 0,e),e.currentTarget=null}function Gr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;Wr(i,o,u),s=l}else for(a=0;a<r.length;a++){if(l=(o=r[a]).instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;Wr(i,o,u),s=l}}}if(Ye)throw e=Je,Ye=!1,Je=null,e}function Qr(e,t){var n=t[Ti];void 0===n&&(n=t[Ti]=new Set);var r=e+"__bubble";n.has(r)||(Zr(t,e,2,!1),n.add(r))}function Xr(e,t,n){var r=0;t&&(r|=4),Zr(n,e,r,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Yr]){e[Yr]=!0,b.forEach((function(t){"selectionchange"!==t&&(Kr.has(t)||Xr(t,!1,e),Xr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Yr]||(t[Yr]=!0,Xr("selectionchange",!1,t))}}function Zr(e,t,n,r){switch(cn(t)){case 1:var i=sn;break;case 4:i=an;break;default:i=on}n=i.bind(null,t,n,e),i=void 0,!Ke||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ei(e,t,n,r,i){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var o=r.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==o;){if(null===(a=Ni(o)))return;if(5===(l=a.tag)||6===l){r=s=a;continue e}o=o.parentNode}}r=r.return}He((function(){var r=s,i=Oe(n),a=[];e:{var o=jr.get(e);if(void 0!==o){var l=Sn,u=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":l=Fn;break;case"focusin":u="focus",l=xn;break;case"focusout":u="blur",l=xn;break;case"beforeblur":case"afterblur":l=xn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=Nn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=jn;break;case Mr:case Ur:case Fr:l=An;break;case Vr:l=zn;break;case"scroll":l=Tn;break;case"wheel":l=Bn;break;case"copy":case"cut":case"paste":l=Rn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Vn}var c=0!=(4&t),h=!c&&"scroll"===e,d=c?null!==o?o+"Capture":null:o;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=$e(p,d))&&c.push(ti(p,m,f)))),h)break;p=p.return}0<c.length&&(o=new l(o,u,null,n,i),a.push({event:o,listeners:c}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||n===Le||!(u=n.relatedTarget||n.fromElement)||!Ni(u)&&!u[_i])&&(l||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ni(u):null)&&(u!==(h=tt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=Cn,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Vn,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?o:Ai(l),f=null==u?o:Ai(u),(o=new c(m,p+"leave",l,n,i)).target=h,o.relatedTarget=f,m=null,Ni(i)===r&&((c=new c(d,p+"enter",u,n,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(d=u,p=0,f=c=l;f;f=ri(f))p++;for(f=0,m=d;m;m=ri(m))f++;for(;0<p-f;)c=ri(c),p--;for(;0<f-p;)d=ri(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=ri(c),d=ri(d)}c=null}else c=null;null!==l&&ii(a,o,l,c,!1),null!==u&&null!==h&&ii(a,h,u,c,!0)}if("select"===(l=(o=r?Ai(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g=ar;else if(er(o))if(or)g=gr;else{g=pr;var y=fr}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(g=mr);switch(g&&(g=g(e,r))?tr(a,g,n,i):(y&&y(e,o,r),"focusout"===e&&(y=o._wrapperState)&&y.controlled&&"number"===o.type&&fe(o,"number",o.value)),y=r?Ai(r):window,e){case"focusin":(er(y)||"true"===y.contentEditable)&&(Ir=y,Cr=r,Nr=null);break;case"focusout":Nr=Cr=Ir=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,Ar(a,n,i);break;case"selectionchange":if(Tr)break;case"keydown":case"keyup":Ar(a,n,i)}var v;if(Hn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Jn?Xn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Wn&&"ko"!==n.locale&&(Jn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Jn&&(v=pn()):(dn="value"in(hn=i)?hn.value:hn.textContent,Jn=!0)),0<(y=ni(r,b)).length&&(b=new Dn(b,e,null,n,i),a.push({event:b,listeners:y}),v?b.data=v:null!==(v=Yn(n))&&(b.data=v))),(v=Kn?function(e,t){switch(e){case"compositionend":return Yn(t);case"keypress":return 32!==t.which?null:(Qn=!0,Gn);case"textInput":return(e=t.data)===Gn&&Qn?null:e;default:return null}}(e,n):function(e,t){if(Jn)return"compositionend"===e||!Hn&&Xn(e,t)?(e=pn(),fn=dn=hn=null,Jn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=ni(r,"onBeforeInput")).length&&(i=new Dn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=v))}Gr(a,t)}))}function ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ni(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=$e(e,n))&&r.unshift(ti(e,s,i)),null!=(s=$e(e,t))&&r.push(ti(e,s,i))),e=e.return}return r}function ri(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function ii(e,t,n,r,i){for(var s=t._reactName,a=[];null!==n&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(null!==l&&l===r)break;5===o.tag&&null!==u&&(o=u,i?null!=(l=$e(n,s))&&a.unshift(ti(n,l,o)):i||null!=(l=$e(n,s))&&a.push(ti(n,l,o))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var si=/\r\n?/g,ai=/\u0000|\uFFFD/g;function oi(e){return("string"==typeof e?e:""+e).replace(si,"\n").replace(ai,"")}function li(e,t,n){if(t=oi(t),oi(e)!==t&&n)throw Error(v(425))}function ui(){}var ci=null,hi=null;function di(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var fi="function"==typeof setTimeout?setTimeout:void 0,pi="function"==typeof clearTimeout?clearTimeout:void 0,mi="function"==typeof Promise?Promise:void 0,gi="function"==typeof queueMicrotask?queueMicrotask:void 0!==mi?function(e){return mi.resolve(null).then(e).catch(yi)}:fi;function yi(e){setTimeout((function(){throw e}))}function vi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);tn(t)}function bi(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function wi(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),ki="__reactFiber$"+Ei,Si="__reactProps$"+Ei,_i="__reactContainer$"+Ei,Ti="__reactEvents$"+Ei,Ii="__reactListeners$"+Ei,Ci="__reactHandles$"+Ei;function Ni(e){var t=e[ki];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_i]||n[ki]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=wi(e);null!==e;){if(n=e[ki])return n;e=wi(e)}return t}n=(e=n).parentNode}return null}function xi(e){return!(e=e[ki]||e[_i])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Ai(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(v(33))}function Ri(e){return e[Si]||null}var Di=[],Li=-1;function Oi(e){return{current:e}}function Pi(e){0>Li||(e.current=Di[Li],Di[Li]=null,Li--)}function Mi(e,t){Li++,Di[Li]=e.current,e.current=t}var Ui={},Fi=Oi(Ui),Vi=Oi(!1),ji=Ui;function zi(e,t){var n=e.type.contextTypes;if(!n)return Ui;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Bi(e){return null!=(e=e.childContextTypes)}function qi(){Pi(Vi),Pi(Fi)}function Hi(e,t,n){if(Fi.current!==Ui)throw Error(v(168));Mi(Fi,t),Mi(Vi,n)}function $i(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(v(108,ne(e)||"Unknown",i));return X({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ui,ji=Fi.current,Mi(Fi,e),Mi(Vi,Vi.current),!0}function Wi(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=$i(e,t,ji),r.__reactInternalMemoizedMergedChildContext=e,Pi(Vi),Pi(Fi),Mi(Fi,e)):Pi(Vi),Mi(Vi,n)}var Gi=null,Qi=!1,Xi=!1;function Yi(e){null===Gi?Gi=[e]:Gi.push(e)}function Ji(){if(!Xi&&null!==Gi){Xi=!0;var e=0,t=Dt;try{var n=Gi;for(Dt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Gi=null,Qi=!1}catch(t){throw null!==Gi&&(Gi=Gi.slice(e+1)),at(dt,Ji),t}finally{Dt=t,Xi=!1}}return null}var Zi=L.ReactCurrentBatchConfig;function es(e,t){if(e&&e.defaultProps){for(var n in t=X({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var ts=Oi(null),ns=null,rs=null,is=null;function ss(){is=rs=ns=null}function as(e){var t=ts.current;Pi(ts),e._currentValue=t}function os(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ls(e,t){ns=e,is=rs=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Ro=!0),e.firstContext=null)}function us(e){var t=e._currentValue;if(is!==e)if(e={context:e,memoizedValue:t,next:null},null===rs){if(null===ns)throw Error(v(308));rs=e,ns.dependencies={lanes:0,firstContext:e}}else rs=rs.next=e;return t}var cs=null,hs=!1;function ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ps(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ms(e,t){var n=e.updateQueue;null!==n&&(n=n.shared,hu(e)?(null===(e=n.interleaved)?(t.next=t,null===cs?cs=[n]:cs.push(n)):(t.next=e.next,e.next=t),n.interleaved=t):(null===(e=n.pending)?t.next=t:(t.next=e.next,e.next=t),n.pending=t))}function gs(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}function ys(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=a:s=s.next=a,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vs(e,t,n,r){var i=e.updateQueue;hs=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(null!==o){i.shared.pending=null;var l=o,u=l.next;l.next=null,null===a?s=u:a.next=u,a=l;var c=e.alternate;null!==c&&((o=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(a=0,c=u=l=null,o=s;;){var d=o.lane,f=o.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=e,m=o;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=X({},h,d);break e;case 2:hs=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,a|=d;if(null===(o=o.next)){if(null===(o=i.shared.pending))break;o=(d=o).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);ql|=a,e.lanes=a,e.memoizedState=h}}function bs(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(v(191,i));i.call(r)}}}var ws=(new g.Component).refs;function Es(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:X({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ks={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ou(),i=lu(e),s=ps(r,i);s.payload=t,null!=n&&(s.callback=n),ms(e,s),null!==(t=uu(e,i,r))&&gs(t,e,i)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ou(),i=lu(e),s=ps(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),ms(e,s),null!==(t=uu(e,i,r))&&gs(t,e,i)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ou(),r=lu(e),i=ps(n,r);i.tag=2,null!=t&&(i.callback=t),ms(e,i),null!==(t=uu(e,r,n))&&gs(t,e,r)}};function Ss(e,t,n,r,i,s,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,a):!t.prototype||!t.prototype.isPureReactComponent||(!vr(n,r)||!vr(i,s))}function _s(e,t,n){var r=!1,i=Ui,s=t.contextType;return"object"==typeof s&&null!==s?s=us(s):(i=Bi(t)?ji:Fi.current,s=(r=null!=(r=t.contextTypes))?zi(e,i):Ui),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ks,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ts(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ks.enqueueReplaceState(t,t.state,null)}function Is(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ws,ds(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=us(s):(s=Bi(t)?ji:Fi.current,i.context=zi(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(Es(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&ks.enqueueReplaceState(i,i.state,null),vs(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}var Cs=[],Ns=0,xs=null,As=0,Rs=[],Ds=0,Ls=null,Os=1,Ps="";function Ms(e,t){Cs[Ns++]=As,Cs[Ns++]=xs,xs=e,As=t}function Us(e,t,n){Rs[Ds++]=Os,Rs[Ds++]=Ps,Rs[Ds++]=Ls,Ls=e;var r=Os;e=Ps;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Os=1<<32-bt(t)+i|n<<i|r,Ps=s+e}else Os=1<<s|n<<i|r,Ps=e}function Fs(e){null!==e.return&&(Ms(e,1),Us(e,1,0))}function Vs(e){for(;e===xs;)xs=Cs[--Ns],Cs[Ns]=null,As=Cs[--Ns],Cs[Ns]=null;for(;e===Ls;)Ls=Rs[--Ds],Rs[Ds]=null,Ps=Rs[--Ds],Rs[Ds]=null,Os=Rs[--Ds],Rs[Ds]=null}var js=null,zs=null,Bs=!1,qs=null;function Hs(e,t){var n=ju(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function $s(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,js=e,zs=bi(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,js=e,zs=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ls?{id:Os,overflow:Ps}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=ju(18,null,null,0)).stateNode=t,n.return=e,e.child=n,js=e,zs=null,!0);default:return!1}}function Ks(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function Ws(e){if(Bs){var t=zs;if(t){var n=t;if(!$s(e,t)){if(Ks(e))throw Error(v(418));t=bi(n.nextSibling);var r=js;t&&$s(e,t)?Hs(r,n):(e.flags=-4097&e.flags|2,Bs=!1,js=e)}}else{if(Ks(e))throw Error(v(418));e.flags=-4097&e.flags|2,Bs=!1,js=e}}}function Gs(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;js=e}function Qs(e){if(e!==js)return!1;if(!Bs)return Gs(e),Bs=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!di(e.type,e.memoizedProps)),t&&(t=zs)){if(Ks(e)){for(e=zs;e;)e=bi(e.nextSibling);throw Error(v(418))}for(;t;)Hs(e,t),t=bi(t.nextSibling)}if(Gs(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){zs=bi(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}zs=null}}else zs=js?bi(e.stateNode.nextSibling):null;return!0}function Xs(){zs=js=null,Bs=!1}function Ys(e){null===qs?qs=[e]:qs.push(e)}function Js(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=i.refs;t===ws&&(t=i.refs={}),null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function Zs(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ea(e){return(0,e._init)(e._payload)}function ta(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Bu(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function o(e,t,n,r){return null===t||6!==t.tag?((t=Ku(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===M?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===$&&ea(s)===t.type)?((r=i(t,n.props)).ref=Js(e,t,n),r.return=e,r):((r=qu(n.type,n.key,n.props,null,e.mode,r)).ref=Js(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Wu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Hu(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Ku(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case O:return(n=qu(t.type,t.key,t.props,null,e.mode,n)).ref=Js(e,null,t),n.return=e,n;case P:return(t=Wu(t,e.mode,n)).return=e,t;case $:return h(e,(0,t._init)(t._payload),n)}if(pe(t)||G(t))return(t=Hu(t,e.mode,n,null)).return=e,t;Zs(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:o(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case O:return n.key===i?l(e,t,n,r):null;case P:return n.key===i?u(e,t,n,r):null;case $:return d(e,t,(i=n._init)(n._payload),r)}if(pe(n)||G(n))return null!==i?null:c(e,t,n,r,null);Zs(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return o(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case O:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case P:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case $:return f(e,t,n,(0,r._init)(r._payload),i)}if(pe(r)||G(r))return c(t,e=e.get(n)||null,r,i,null);Zs(t,r)}return null}return function o(l,u,c,p){if("object"==typeof c&&null!==c&&c.type===M&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case O:e:{for(var m=c.key,g=u;null!==g;){if(g.key===m){if((m=c.type)===M){if(7===g.tag){n(l,g.sibling),(u=i(g,c.props.children)).return=l,l=u;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===$&&ea(m)===g.type){n(l,g.sibling),(u=i(g,c.props)).ref=Js(l,g,c),u.return=l,l=u;break e}n(l,g);break}t(l,g),g=g.sibling}c.type===M?((u=Hu(c.props.children,l.mode,p,c.key)).return=l,l=u):((p=qu(c.type,c.key,c.props,null,l.mode,p)).ref=Js(l,u,c),p.return=l,l=p)}return a(l);case P:e:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=Wu(c,l.mode,p)).return=l,l=u}return a(l);case $:return o(l,u,(g=c._init)(c._payload),p)}if(pe(c))return function(i,a,o,l){for(var u=null,c=null,p=a,m=a=0,g=null;null!==p&&m<o.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,o[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===o.length)return n(i,p),Bs&&Ms(i,m),u;if(null===p){for(;m<o.length;m++)null!==(p=h(i,o[m],l))&&(a=s(p,a,m),null===c?u=p:c.sibling=p,c=p);return Bs&&Ms(i,m),u}for(p=r(i,p);m<o.length;m++)null!==(g=f(p,i,m,o[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),a=s(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),Bs&&Ms(i,m),u}(l,u,c,p);if(G(c))return function(i,a,o,l){var u=G(o);if("function"!=typeof u)throw Error(v(150));if(null==(o=u.call(o)))throw Error(v(151));for(var c=u=null,p=a,m=a=0,g=null,y=o.next();null!==p&&!y.done;m++,y=o.next()){p.index>m?(g=p,p=null):g=p.sibling;var b=d(i,p,y.value,l);if(null===b){null===p&&(p=g);break}e&&p&&null===b.alternate&&t(i,p),a=s(b,a,m),null===c?u=b:c.sibling=b,c=b,p=g}if(y.done)return n(i,p),Bs&&Ms(i,m),u;if(null===p){for(;!y.done;m++,y=o.next())null!==(y=h(i,y.value,l))&&(a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return Bs&&Ms(i,m),u}for(p=r(i,p);!y.done;m++,y=o.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return e&&p.forEach((function(e){return t(i,e)})),Bs&&Ms(i,m),u}(l,u,c,p);Zs(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l,l=u):(n(l,u),(u=Ku(c,l.mode,p)).return=l,l=u),a(l)):n(l,u)}}var na=ta(!0),ra=ta(!1),ia={},sa=Oi(ia),aa=Oi(ia),oa=Oi(ia);function la(e){if(e===ia)throw Error(v(174));return e}function ua(e,t){switch(Mi(oa,t),Mi(aa,e),Mi(sa,ia),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ee(null,"");break;default:t=Ee(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Pi(sa),Mi(sa,t)}function ca(){Pi(sa),Pi(aa),Pi(oa)}function ha(e){la(oa.current);var t=la(sa.current),n=Ee(t,e.type);t!==n&&(Mi(aa,e),Mi(sa,n))}function da(e){aa.current===e&&(Pi(sa),Pi(aa))}var fa=Oi(0);function pa(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=[];function ga(){for(var e=0;e<ma.length;e++)ma[e]._workInProgressVersionPrimary=null;ma.length=0}var ya=L.ReactCurrentDispatcher,va=L.ReactCurrentBatchConfig,ba=0,wa=null,Ea=null,ka=null,Sa=!1,_a=!1,Ta=0,Ia=0;function Ca(){throw Error(v(321))}function Na(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yr(e[n],t[n]))return!1;return!0}function xa(e,t,n,r,i,s){if(ba=s,wa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ya.current=null===e||null===e.memoizedState?fo:po,e=n(r,i),_a){s=0;do{if(_a=!1,Ta=0,25<=s)throw Error(v(301));s+=1,ka=Ea=null,t.updateQueue=null,ya.current=mo,e=n(r,i)}while(_a)}if(ya.current=ho,t=null!==Ea&&null!==Ea.next,ba=0,ka=Ea=wa=null,Sa=!1,t)throw Error(v(300));return e}function Aa(){var e=0!==Ta;return Ta=0,e}function Ra(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ka?wa.memoizedState=ka=e:ka=ka.next=e,ka}function Da(){if(null===Ea){var e=wa.alternate;e=null!==e?e.memoizedState:null}else e=Ea.next;var t=null===ka?wa.memoizedState:ka.next;if(null!==t)ka=t,Ea=e;else{if(null===e)throw Error(v(310));e={memoizedState:(Ea=e).memoizedState,baseState:Ea.baseState,baseQueue:Ea.baseQueue,queue:Ea.queue,next:null},null===ka?wa.memoizedState=ka=e:ka=ka.next=e}return ka}function La(e,t){return"function"==typeof t?t(e):t}function Oa(e){var t=Da(),n=t.queue;if(null===n)throw Error(v(311));n.lastRenderedReducer=e;var r=Ea,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((ba&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(o=l=h,a=r):l=l.next=h,wa.lanes|=c,ql|=c}u=u.next}while(null!==u&&u!==s);null===l?a=r:l.next=o,yr(r,t.memoizedState)||(Ro=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,wa.lanes|=s,ql|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pa(e){var t=Da(),n=t.queue;if(null===n)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{s=e(s,a.action),a=a.next}while(a!==i);yr(s,t.memoizedState)||(Ro=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ma(){}function Ua(e,t){var n=wa,r=Da(),i=t(),s=!yr(r.memoizedState,i);if(s&&(r.memoizedState=i,Ro=!0),r=r.queue,Ga(ja.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==ka&&1&ka.memoizedState.tag){if(n.flags|=2048,qa(9,Va.bind(null,n,r,i,t),void 0,null),null===Ml)throw Error(v(349));0!=(30&ba)||Fa(n,t,i)}return i}function Fa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=wa.updateQueue)?(t={lastEffect:null,stores:null},wa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Va(e,t,n,r){t.value=n,t.getSnapshot=r,za(t)&&uu(e,1,-1)}function ja(e,t,n){return n((function(){za(t)&&uu(e,1,-1)}))}function za(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yr(e,n)}catch(e){return!0}}function Ba(e){var t=Ra();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:e},t.queue=e,e=e.dispatch=ao.bind(null,wa,e),[t.memoizedState,e]}function qa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=wa.updateQueue)?(t={lastEffect:null,stores:null},wa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ha(){return Da().memoizedState}function $a(e,t,n,r){var i=Ra();wa.flags|=e,i.memoizedState=qa(1|t,n,void 0,void 0===r?null:r)}function Ka(e,t,n,r){var i=Da();r=void 0===r?null:r;var s=void 0;if(null!==Ea){var a=Ea.memoizedState;if(s=a.destroy,null!==r&&Na(r,a.deps))return void(i.memoizedState=qa(t,n,s,r))}wa.flags|=e,i.memoizedState=qa(1|t,n,s,r)}function Wa(e,t){return $a(8390656,8,e,t)}function Ga(e,t){return Ka(2048,8,e,t)}function Qa(e,t){return Ka(4,2,e,t)}function Xa(e,t){return Ka(4,4,e,t)}function Ya(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ja(e,t,n){return n=null!=n?n.concat([e]):null,Ka(4,4,Ya.bind(null,t,e),n)}function Za(){}function eo(e,t){var n=Da();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Na(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function to(e,t){var n=Da();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Na(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function no(e,t,n){return 0==(21&ba)?(e.baseState&&(e.baseState=!1,Ro=!0),e.memoizedState=n):(yr(n,t)||(n=Nt(),wa.lanes|=n,ql|=n,e.baseState=!0),t)}function ro(e,t){var n=Dt;Dt=0!==n&&4>n?n:4,e(!0);var r=va.transition;va.transition={};try{e(!1),t()}finally{Dt=n,va.transition=r}}function io(){return Da().memoizedState}function so(e,t,n){var r=lu(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oo(e)?lo(t,n):(uo(e,t,n),null!==(e=uu(e,r,n=ou()))&&co(e,t,r))}function ao(e,t,n){var r=lu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oo(e))lo(t,i);else{uo(e,t,i);var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,yr(o,a))return}catch(e){}null!==(e=uu(e,r,n=ou()))&&co(e,t,r)}}function oo(e){var t=e.alternate;return e===wa||null!==t&&t===wa}function lo(e,t){_a=Sa=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uo(e,t,n){hu(e)?(null===(e=t.interleaved)?(n.next=n,null===cs?cs=[t]:cs.push(t)):(n.next=e.next,e.next=n),t.interleaved=n):(null===(e=t.pending)?n.next=n:(n.next=e.next,e.next=n),t.pending=n)}function co(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}var ho={readContext:us,useCallback:Ca,useContext:Ca,useEffect:Ca,useImperativeHandle:Ca,useInsertionEffect:Ca,useLayoutEffect:Ca,useMemo:Ca,useReducer:Ca,useRef:Ca,useState:Ca,useDebugValue:Ca,useDeferredValue:Ca,useTransition:Ca,useMutableSource:Ca,useSyncExternalStore:Ca,useId:Ca,unstable_isNewReconciler:!1},fo={readContext:us,useCallback:function(e,t){return Ra().memoizedState=[e,void 0===t?null:t],e},useContext:us,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,$a(4194308,4,Ya.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $a(4194308,4,e,t)},useInsertionEffect:function(e,t){return $a(4,2,e,t)},useMemo:function(e,t){var n=Ra();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ra();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=so.bind(null,wa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ra().memoizedState=e},useState:Ba,useDebugValue:Za,useDeferredValue:function(e){return Ra().memoizedState=e},useTransition:function(){var e=Ba(!1),t=e[0];return e=ro.bind(null,e[1]),Ra().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=wa,i=Ra();if(Bs){if(void 0===n)throw Error(v(407));n=n()}else{if(n=t(),null===Ml)throw Error(v(349));0!=(30&ba)||Fa(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Wa(ja.bind(null,r,s,e),[e]),r.flags|=2048,qa(9,Va.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ra(),t=Ml.identifierPrefix;if(Bs){var n=Ps;t=":"+t+"R"+(n=(Os&~(1<<32-bt(Os)-1)).toString(32)+n),0<(n=Ta++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=Ia++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},po={readContext:us,useCallback:eo,useContext:us,useEffect:Ga,useImperativeHandle:Ja,useInsertionEffect:Qa,useLayoutEffect:Xa,useMemo:to,useReducer:Oa,useRef:Ha,useState:function(){return Oa(La)},useDebugValue:Za,useDeferredValue:function(e){return no(Da(),Ea.memoizedState,e)},useTransition:function(){return[Oa(La)[0],Da().memoizedState]},useMutableSource:Ma,useSyncExternalStore:Ua,useId:io,unstable_isNewReconciler:!1},mo={readContext:us,useCallback:eo,useContext:us,useEffect:Ga,useImperativeHandle:Ja,useInsertionEffect:Qa,useLayoutEffect:Xa,useMemo:to,useReducer:Pa,useRef:Ha,useState:function(){return Pa(La)},useDebugValue:Za,useDeferredValue:function(e){var t=Da();return null===Ea?t.memoizedState=e:no(t,Ea.memoizedState,e)},useTransition:function(){return[Pa(La)[0],Da().memoizedState]},useMutableSource:Ma,useSyncExternalStore:Ua,useId:io,unstable_isNewReconciler:!1};function go(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i}}function yo(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var vo,bo,wo,Eo="function"==typeof WeakMap?WeakMap:Map;function ko(e,t,n){(n=ps(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yl||(Yl=!0,Jl=r),yo(0,t)},n}function So(e,t,n){(n=ps(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yo(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){yo(0,t),"function"!=typeof r&&(null===Zl?Zl=new Set([this]):Zl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function _o(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Eo;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ou.bind(null,e,t,n),t.then(e,e))}function To(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Io(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=ps(-1,1)).tag=2,ms(n,t))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}function Co(e,t){if(!Bs)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function No(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xo(e,t,n){var r=t.pendingProps;switch(Vs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return No(t),null;case 1:case 17:return Bi(t.type)&&qi(),No(t),null;case 3:return r=t.stateNode,ca(),Pi(Vi),Pi(Fi),ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Qs(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==qs&&(mu(qs),qs=null))),No(t),null;case 5:da(t);var i=la(oa.current);if(n=t.type,null!==e&&null!=t.stateNode)bo(e,t,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(v(166));return No(t),null}if(e=la(sa.current),Qs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ki]=t,r[Si]=s,e=0!=(1&t.mode),n){case"dialog":Qr("cancel",r),Qr("close",r);break;case"iframe":case"object":case"embed":Qr("load",r);break;case"video":case"audio":for(i=0;i<$r.length;i++)Qr($r[i],r);break;case"source":Qr("error",r);break;case"img":case"image":case"link":Qr("error",r),Qr("load",r);break;case"details":Qr("toggle",r);break;case"input":ue(r,s),Qr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Qr("invalid",r);break;case"textarea":ye(r,s),Qr("invalid",r)}for(var a in Re(n,s),i=null,s)if(s.hasOwnProperty(a)){var o=s[a];"children"===a?"string"==typeof o?r.textContent!==o&&(!0!==s.suppressHydrationWarning&&li(r.textContent,o,e),i=["children",o]):"number"==typeof o&&r.textContent!==""+o&&(!0!==s.suppressHydrationWarning&&li(r.textContent,o,e),i=["children",""+o]):w.hasOwnProperty(a)&&null!=o&&"onScroll"===a&&Qr("scroll",r)}switch(n){case"input":se(r),de(r,s,!0);break;case"textarea":se(r),be(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=ui)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{a=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=we(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),"select"===n&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ki]=t,e[Si]=r,vo(e,t),t.stateNode=e;e:{switch(a=De(n,r),n){case"dialog":Qr("cancel",e),Qr("close",e),i=r;break;case"iframe":case"object":case"embed":Qr("load",e),i=r;break;case"video":case"audio":for(i=0;i<$r.length;i++)Qr($r[i],e);i=r;break;case"source":Qr("error",e),i=r;break;case"img":case"image":case"link":Qr("error",e),Qr("load",e),i=r;break;case"details":Qr("toggle",e),i=r;break;case"input":ue(e,r),i=le(e,r),Qr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),Qr("invalid",e);break;case"textarea":ye(e,r),i=ge(e,r),Qr("invalid",e)}for(s in Re(n,i),o=i)if(o.hasOwnProperty(s)){var l=o[s];"style"===s?xe(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&_e(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&Te(e,l):"number"==typeof l&&Te(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(w.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Qr("scroll",e):null!=l&&D(e,s,l,a))}switch(n){case"input":se(e),de(e,r,!1);break;case"textarea":se(e),be(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?me(e,!!r.multiple,s,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=ui)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return No(t),null;case 6:if(e&&null!=t.stateNode)wo(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(v(166));if(n=la(oa.current),la(sa.current),Qs(t)){if(r=t.stateNode,n=t.memoizedProps,r[ki]=t,(s=r.nodeValue!==n)&&null!==(e=js))switch(e.tag){case 3:li(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&li(r.nodeValue,n,0!=(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ki]=t,t.stateNode=r}return No(t),null;case 13:if(Pi(fa),r=t.memoizedState,Bs&&null!==zs&&0!=(1&t.mode)&&0==(128&t.flags)){for(r=zs;r;)r=bi(r.nextSibling);return Xs(),t.flags|=98560,t}if(null!==r&&null!==r.dehydrated){if(r=Qs(t),null===e){if(!r)throw Error(v(318));if(!(r=null!==(r=t.memoizedState)?r.dehydrated:null))throw Error(v(317));r[ki]=t}else Xs(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;return No(t),null}return null!==qs&&(mu(qs),qs=null),0!=(128&t.flags)?(t.lanes=n,t):(r=null!==r,n=!1,null===e?Qs(t):n=null!==e.memoizedState,r!==n&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&fa.current)?0===zl&&(zl=3):_u())),null!==t.updateQueue&&(t.flags|=4),No(t),null);case 4:return ca(),null===e&&Jr(t.stateNode.containerInfo),No(t),null;case 10:return as(t.type._context),No(t),null;case 19:if(Pi(fa),null===(s=t.memoizedState))return No(t),null;if(r=0!=(128&t.flags),null===(a=s.rendering))if(r)Co(s,!1);else{if(0!==zl||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=pa(e))){for(t.flags|=128,Co(s,!1),null!==(r=a.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(a=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Mi(fa,1&fa.current|2),t.child}e=e.sibling}null!==s.tail&&ct()>Ql&&(t.flags|=128,r=!0,Co(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=pa(a))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Co(s,!0),null===s.tail&&"hidden"===s.tailMode&&!a.alternate&&!Bs)return No(t),null}else 2*ct()-s.renderingStartTime>Ql&&1073741824!==n&&(t.flags|=128,r=!0,Co(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=s.last)?n.sibling=a:t.child=a,s.last=a)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ct(),t.sibling=null,n=fa.current,Mi(fa,r?1&n|2:1&n),t):(No(t),null);case 22:case 23:return wu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Vl)&&(No(t),6&t.subtreeFlags&&(t.flags|=8192)):No(t),null;case 24:case 25:return null}throw Error(v(156,t.tag))}vo=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},bo=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,la(sa.current);var s,a=null;switch(n){case"input":i=le(e,i),r=le(e,r),a=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),a=[];break;case"textarea":i=ge(e,i),r=ge(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=ui)}for(u in Re(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(w.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(o=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(null!=l||null!=o))if("style"===u)if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,o=o?o.__html:void 0,null!=l&&o!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(w.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Qr("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},wo=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ao=L.ReactCurrentOwner,Ro=!1;function Do(e,t,n,r){t.child=null===e?ra(t,null,n,r):na(t,e.child,n,r)}function Lo(e,t,n,r,i){n=n.render;var s=t.ref;return ls(t,i),r=xa(e,t,n,r,s,i),n=Aa(),null===e||Ro?(Bs&&n&&Fs(t),t.flags|=1,Do(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,el(e,t,i))}function Oo(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||zu(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=qu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Po(e,t,s,r,i))}if(s=e.child,0==(e.lanes&i)){var a=s.memoizedProps;if((n=null!==(n=n.compare)?n:vr)(a,r)&&e.ref===t.ref)return el(e,t,i)}return t.flags|=1,(e=Bu(s,r)).ref=t.ref,e.return=t,t.child=e}function Po(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(vr(s,r)&&e.ref===t.ref){if(Ro=!1,t.pendingProps=r=s,0==(e.lanes&i))return t.lanes=e.lanes,el(e,t,i);0!=(131072&e.flags)&&(Ro=!0)}}return Fo(e,t,n,r,i)}function Mo(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mi(jl,Vl),Vl|=n;else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Mi(jl,Vl),Vl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,Mi(jl,Vl),Vl|=r}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,Mi(jl,Vl),Vl|=r;return Do(e,t,i,n),t.child}function Uo(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fo(e,t,n,r,i){var s=Bi(n)?ji:Fi.current;return s=zi(t,s),ls(t,i),n=xa(e,t,n,r,s,i),r=Aa(),null===e||Ro?(Bs&&r&&Fs(t),t.flags|=1,Do(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,el(e,t,i))}function Vo(e,t,n,r,i){if(Bi(n)){var s=!0;Ki(t)}else s=!1;if(ls(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),_s(t,n,r),Is(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;"object"==typeof u&&null!==u?u=us(u):u=zi(t,u=Bi(n)?ji:Fi.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;h||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==r||l!==u)&&Ts(t,a,r,u),hs=!1;var d=t.memoizedState;a.state=d,vs(t,r,a,i),l=t.memoizedState,o!==r||d!==l||Vi.current||hs?("function"==typeof c&&(Es(t,n,c,r),l=t.memoizedState),(o=hs||Ss(t,n,o,r,d,l,u))?(h||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,fs(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:es(t.type,o),a.props=u,h=t.pendingProps,d=a.context,"object"==typeof(l=n.contextType)&&null!==l?l=us(l):l=zi(t,l=Bi(n)?ji:Fi.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==h||d!==l)&&Ts(t,a,r,l),hs=!1,d=t.memoizedState,a.state=d,vs(t,r,a,i);var p=t.memoizedState;o!==h||d!==p||Vi.current||hs?("function"==typeof f&&(Es(t,n,f,r),p=t.memoizedState),(u=hs||Ss(t,n,u,r,d,p,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return jo(e,t,n,r,s,i)}function jo(e,t,n,r,i,s){Uo(e,t);var a=0!=(128&t.flags);if(!r&&!a)return i&&Wi(t,n,!1),el(e,t,s);r=t.stateNode,Ao.current=t;var o=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=na(t,e.child,null,s),t.child=na(t,null,o,s)):Do(e,t,o,s),t.memoizedState=r.state,i&&Wi(t,n,!0),t.child}function zo(e){var t=e.stateNode;t.pendingContext?Hi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Hi(0,t.context,!1),ua(e,t.containerInfo)}function Bo(e,t,n,r,i){return Xs(),Ys(i),t.flags|=256,Do(e,t,n,r),t.child}var qo={dehydrated:null,treeContext:null,retryLane:0};function Ho(e){return{baseLanes:e,cachePool:null,transitions:null}}function $o(e,t){return{baseLanes:e.baseLanes|t,cachePool:null,transitions:e.transitions}}function Ko(e,t,n){var r,i=t.pendingProps,s=fa.current,a=!1,o=0!=(128&t.flags);if((r=o)||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Mi(fa,1&s),null===e)return Ws(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},0==(1&i)&&null!==a?(a.childLanes=0,a.pendingProps=s):a=$u(s,i,0,null),e=Hu(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ho(n),t.memoizedState=qo,e):Wo(t,s));if(null!==(s=e.memoizedState)){if(null!==(r=s.dehydrated)){if(o)return 256&t.flags?(t.flags&=-257,Xo(e,t,n,Error(v(422)))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=i.fallback,s=t.mode,i=$u({mode:"visible",children:i.children},s,0,null),(a=Hu(a,s,n,null)).flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,0!=(1&t.mode)&&na(t,e.child,null,n),t.child.memoizedState=Ho(n),t.memoizedState=qo,a);if(0==(1&t.mode))t=Xo(e,t,n,null);else if("$!"===r.data)t=Xo(e,t,n,Error(v(419)));else if(i=0!=(n&e.childLanes),Ro||i){if(null!==(i=Ml)){switch(n&-n){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(i=0!=(a&(i.suspendedLanes|n))?0:a)&&i!==s.retryLane&&(s.retryLane=i,uu(e,i,-1))}_u(),t=Xo(e,t,n,Error(v(421)))}else"$?"===r.data?(t.flags|=128,t.child=e.child,t=Mu.bind(null,e),r._reactRetry=t,t=null):(n=s.treeContext,zs=bi(r.nextSibling),js=t,Bs=!0,qs=null,null!==n&&(Rs[Ds++]=Os,Rs[Ds++]=Ps,Rs[Ds++]=Ls,Os=n.id,Ps=n.overflow,Ls=t),(t=Wo(t,t.pendingProps.children)).flags|=4096);return t}return a?(i=Qo(e,t,i.children,i.fallback,n),a=t.child,s=e.child.memoizedState,a.memoizedState=null===s?Ho(n):$o(s,n),a.childLanes=e.childLanes&~n,t.memoizedState=qo,i):(n=Go(e,t,i.children,n),t.memoizedState=null,n)}return a?(i=Qo(e,t,i.children,i.fallback,n),a=t.child,s=e.child.memoizedState,a.memoizedState=null===s?Ho(n):$o(s,n),a.childLanes=e.childLanes&~n,t.memoizedState=qo,i):(n=Go(e,t,i.children,n),t.memoizedState=null,n)}function Wo(e,t){return(t=$u({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Go(e,t,n,r){var i=e.child;return e=i.sibling,n=Bu(i,{mode:"visible",children:n}),0==(1&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n}function Qo(e,t,n,r,i){var s=t.mode,a=(e=e.child).sibling,o={mode:"hidden",children:n};return 0==(1&s)&&t.child!==e?((n=t.child).childLanes=0,n.pendingProps=o,t.deletions=null):(n=Bu(e,o)).subtreeFlags=14680064&e.subtreeFlags,null!==a?r=Bu(a,r):(r=Hu(r,s,i,null)).flags|=2,r.return=t,n.return=t,n.sibling=r,t.child=n,r}function Xo(e,t,n,r){return null!==r&&Ys(r),na(t,e.child,null,n),(e=Wo(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Yo(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),os(e.return,t,n)}function Jo(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zo(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Do(e,t,r.children,n),0!=(2&(r=fa.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Yo(e,n,t);else if(19===e.tag)Yo(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Mi(fa,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===pa(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Jo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===pa(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Jo(t,!0,n,null,s);break;case"together":Jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),ql|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(v(153));if(null!==t.child){for(n=Bu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Bu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function tl(e,t){switch(Vs(t),t.tag){case 1:return Bi(t.type)&&qi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ca(),Pi(Vi),Pi(Fi),ga(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return da(t),null;case 13:if(Pi(fa),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(v(340));Xs()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Pi(fa),null;case 4:return ca(),null;case 10:return as(t.type._context),null;case 22:case 23:return wu(),null;default:return null}}var nl=!1,rl=!1,il="function"==typeof WeakSet?WeakSet:Set,sl=null;function al(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Lu(e,t,n)}else n.current=null}function ol(e,t,n){try{n()}catch(n){Lu(e,t,n)}}var ll=!1;function ul(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&ol(t,n,s)}i=i.next}while(i!==r)}}function cl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function dl(e){var t=e.alternate;null!==t&&(e.alternate=null,dl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ki],delete t[Si],delete t[Ti],delete t[Ii],delete t[Ci])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fl(e){return 5===e.tag||3===e.tag||4===e.tag}function pl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||fl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ml(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=ui));else if(4!==r&&null!==(e=e.child))for(ml(e,t,n),e=e.sibling;null!==e;)ml(e,t,n),e=e.sibling}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}var yl=null,vl=!1;function bl(e,t,n){for(n=n.child;null!==n;)wl(e,t,n),n=n.sibling}function wl(e,t,n){if(vt&&"function"==typeof vt.onCommitFiberUnmount)try{vt.onCommitFiberUnmount(yt,n)}catch(e){}switch(n.tag){case 5:rl||al(n,t);case 6:var r=yl,i=vl;yl=null,bl(e,t,n),vl=i,null!==(yl=r)&&(vl?(e=yl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):yl.removeChild(n.stateNode));break;case 18:null!==yl&&(vl?(e=yl,n=n.stateNode,8===e.nodeType?vi(e.parentNode,n):1===e.nodeType&&vi(e,n),tn(e)):vi(yl,n.stateNode));break;case 4:r=yl,i=vl,yl=n.stateNode.containerInfo,vl=!0,bl(e,t,n),yl=r,vl=i;break;case 0:case 11:case 14:case 15:if(!rl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,void 0!==a&&(0!=(2&s)||0!=(4&s))&&ol(n,t,a),i=i.next}while(i!==r)}bl(e,t,n);break;case 1:if(!rl&&(al(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Lu(n,t,e)}bl(e,t,n);break;case 21:bl(e,t,n);break;case 22:1&n.mode?(rl=(r=rl)||null!==n.memoizedState,bl(e,t,n),rl=r):bl(e,t,n);break;default:bl(e,t,n)}}function El(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new il),t.forEach((function(t){var r=Uu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function kl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;null!==o;){switch(o.tag){case 5:yl=o.stateNode,vl=!1;break e;case 3:case 4:yl=o.stateNode.containerInfo,vl=!0;break e}o=o.return}if(null===yl)throw Error(v(160));wl(s,a,i),yl=null,vl=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(e){Lu(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Sl(t,e),t=t.sibling}function Sl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kl(t,e),_l(e),4&r){try{ul(3,e,e.return),cl(3,e)}catch(t){Lu(e,e.return,t)}try{ul(5,e,e.return)}catch(t){Lu(e,e.return,t)}}break;case 1:kl(t,e),_l(e),512&r&&null!==n&&al(n,n.return);break;case 5:if(kl(t,e),_l(e),512&r&&null!==n&&al(n,n.return),32&e.flags){var i=e.stateNode;try{Te(i,"")}catch(t){Lu(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===o&&"radio"===s.type&&null!=s.name&&ce(i,s),De(o,a);var u=De(o,s);for(a=0;a<l.length;a+=2){var c=l[a],h=l[a+1];"style"===c?xe(i,h):"dangerouslySetInnerHTML"===c?_e(i,h):"children"===c?Te(i,h):D(i,c,h,u)}switch(o){case"input":he(i,s);break;case"textarea":ve(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?me(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?me(i,!!s.multiple,s.defaultValue,!0):me(i,!!s.multiple,s.multiple?[]:"",!1))}i[Si]=s}catch(t){Lu(e,e.return,t)}}break;case 6:if(kl(t,e),_l(e),4&r){if(null===e.stateNode)throw Error(v(162));u=e.stateNode,c=e.memoizedProps;try{u.nodeValue=c}catch(t){Lu(e,e.return,t)}}break;case 3:if(kl(t,e),_l(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){Lu(e,e.return,t)}break;case 4:default:kl(t,e),_l(e);break;case 13:kl(t,e),_l(e),8192&(u=e.child).flags&&null!==u.memoizedState&&(null===u.alternate||null===u.alternate.memoizedState)&&(Gl=ct()),4&r&&El(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(rl=(c=rl)||u,kl(t,e),rl=c):kl(t,e),_l(e),8192&r){c=null!==e.memoizedState;e:for(h=null,d=e;;){if(5===d.tag){if(null===h){h=d;try{i=d.stateNode,c?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(o=d.stateNode,a=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ne("display",a))}catch(t){Lu(e,e.return,t)}}}else if(6===d.tag){if(null===h)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(t){Lu(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}if(c&&!u&&0!=(1&e.mode))for(sl=e,e=e.child;null!==e;){for(u=sl=e;null!==sl;){switch(h=(c=sl).child,c.tag){case 0:case 11:case 14:case 15:ul(4,c,c.return);break;case 1:if(al(c,c.return),"function"==typeof(s=c.stateNode).componentWillUnmount){d=c,f=c.return;try{i=d,s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(e){Lu(d,f,e)}}break;case 5:al(c,c.return);break;case 22:if(null!==c.memoizedState){Nl(u);continue}}null!==h?(h.return=c,sl=h):Nl(u)}e=e.sibling}}break;case 19:kl(t,e),_l(e),4&r&&El(e);case 21:}}function _l(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(fl(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(Te(i,""),r.flags&=-33),gl(e,pl(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;ml(e,pl(e),s);break;default:throw Error(v(161))}}catch(t){Lu(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Tl(e,t,n){sl=e,Il(e,t,n)}function Il(e,t,n){for(var r=0!=(1&e.mode);null!==sl;){var i=sl,s=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||nl;if(!a){var o=i.alternate,l=null!==o&&null!==o.memoizedState||rl;o=nl;var u=rl;if(nl=a,(rl=l)&&!u)for(sl=i;null!==sl;)l=(a=sl).child,22===a.tag&&null!==a.memoizedState?xl(i):null!==l?(l.return=a,sl=l):xl(i);for(;null!==s;)sl=s,Il(s,t,n),s=s.sibling;sl=i,nl=o,rl=u}Cl(e)}else 0!=(8772&i.subtreeFlags)&&null!==s?(s.return=i,sl=s):Cl(e)}}function Cl(e){for(;null!==sl;){var t=sl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:rl||cl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!rl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:es(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&bs(t,s,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}bs(t,a,n)}break;case 5:var o=t.stateNode;if(null===n&&4&t.flags){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var h=c.dehydrated;null!==h&&tn(h)}}}break;default:throw Error(v(163))}rl||512&t.flags&&hl(t)}catch(e){Lu(t,t.return,e)}}if(t===e){sl=null;break}if(null!==(n=t.sibling)){n.return=t.return,sl=n;break}sl=t.return}}function Nl(e){for(;null!==sl;){var t=sl;if(t===e){sl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,sl=n;break}sl=t.return}}function xl(e){for(;null!==sl;){var t=sl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(e){Lu(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){Lu(t,i,e)}}var s=t.return;try{hl(t)}catch(e){Lu(t,s,e)}break;case 5:var a=t.return;try{hl(t)}catch(e){Lu(t,a,e)}}}catch(e){Lu(t,t.return,e)}if(t===e){sl=null;break}var o=t.sibling;if(null!==o){o.return=t.return,sl=o;break}sl=t.return}}var Al,Rl=Math.ceil,Dl=L.ReactCurrentDispatcher,Ll=L.ReactCurrentOwner,Ol=L.ReactCurrentBatchConfig,Pl=0,Ml=null,Ul=null,Fl=0,Vl=0,jl=Oi(0),zl=0,Bl=null,ql=0,Hl=0,$l=0,Kl=null,Wl=null,Gl=0,Ql=1/0,Xl=null,Yl=!1,Jl=null,Zl=null,eu=!1,tu=null,nu=0,ru=0,iu=null,su=-1,au=0;function ou(){return 0!=(6&Pl)?ct():-1!==su?su:su=ct()}function lu(e){return 0==(1&e.mode)?1:0!=(2&Pl)&&0!==Fl?Fl&-Fl:null!==Zi.transition?(0===au&&(au=Nt()),au):0!==(e=Dt)?e:e=void 0===(e=window.event)?16:cn(e.type)}function uu(e,t,n){if(50<ru)throw ru=0,iu=null,Error(v(185));var r=cu(e,t);return null===r?null:(At(r,t,n),0!=(2&Pl)&&r===Ml||(r===Ml&&(0==(2&Pl)&&(Hl|=t),4===zl&&gu(r,Fl)),du(r,n),1===t&&0===Pl&&0==(1&e.mode)&&(Ql=ct()+500,Qi&&Ji())),r)}function cu(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function hu(e){return(null!==Ml||null!==cs)&&0!=(1&e.mode)&&0==(2&Pl)}function du(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-bt(s),o=1<<a,l=i[a];-1===l?0!=(o&n)&&0==(o&r)||(i[a]=It(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}(e,t);var r,i=Tt(e,e===Ml?Fl:0);if(0===i)null!==n&&ot(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(null!=n&&ot(n),1===t)0===e.tag?(r=yu.bind(null,e),Qi=!0,Yi(r)):Yi(yu.bind(null,e)),gi((function(){0===Pl&&Ji()})),n=null;else{switch(Lt(i)){case 1:n=dt;break;case 4:n=ft;break;case 16:default:n=pt;break;case 536870912:n=gt}n=Fu(n,fu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fu(e,t){if(su=-1,au=0,0!=(6&Pl))throw Error(v(327));var n=e.callbackNode;if(Ru()&&e.callbackNode!==n)return null;var r=Tt(e,e===Ml?Fl:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=Tu(e,r);else{t=r;var i=Pl;Pl|=2;var s=Su();for(Ml===e&&Fl===t||(Xl=null,Ql=ct()+500,Eu(e,t));;)try{Cu();break}catch(t){ku(e,t)}ss(),Dl.current=s,Pl=i,null!==Ul?t=0:(Ml=null,Fl=0,t=zl)}if(0!==t){if(2===t&&(0!==(i=Ct(e))&&(r=i,t=pu(e,i))),1===t)throw n=Bl,Eu(e,0),gu(e,r),du(e,ct()),n;if(6===t)gu(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yr(s(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=Tu(e,r))&&(0!==(s=Ct(e))&&(r=s,t=pu(e,s))),1===t))throw n=Bl,Eu(e,0),gu(e,r),du(e,ct()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:case 5:Au(e,Wl,Xl);break;case 3:if(gu(e,r),(130023424&r)===r&&10<(t=Gl+500-ct())){if(0!==Tt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ou(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fi(Au.bind(null,e,Wl,Xl),t);break}Au(e,Wl,Xl);break;case 4:if(gu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-bt(r);s=1<<a,(a=t[a])>i&&(i=a),r&=~s}if(r=i,10<(r=(120>(r=ct()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rl(r/1960))-r)){e.timeoutHandle=fi(Au.bind(null,e,Wl,Xl),r);break}Au(e,Wl,Xl);break;default:throw Error(v(329))}}}return du(e,ct()),e.callbackNode===n?fu.bind(null,e):null}function pu(e,t){var n=Kl;return e.current.memoizedState.isDehydrated&&(Eu(e,t).flags|=256),2!==(e=Tu(e,t))&&(t=Wl,Wl=n,null!==t&&mu(t)),e}function mu(e){null===Wl?Wl=e:Wl.push.apply(Wl,e)}function gu(e,t){for(t&=~$l,t&=~Hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function yu(e){if(0!=(6&Pl))throw Error(v(327));Ru();var t=Tt(e,0);if(0==(1&t))return du(e,ct()),null;var n=Tu(e,t);if(0!==e.tag&&2===n){var r=Ct(e);0!==r&&(t=r,n=pu(e,r))}if(1===n)throw n=Bl,Eu(e,0),gu(e,t),du(e,ct()),n;if(6===n)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Au(e,Wl,Xl),du(e,ct()),null}function vu(e,t){var n=Pl;Pl|=1;try{return e(t)}finally{0===(Pl=n)&&(Ql=ct()+500,Qi&&Ji())}}function bu(e){null!==tu&&0===tu.tag&&0==(6&Pl)&&Ru();var t=Pl;Pl|=1;var n=Ol.transition,r=Dt;try{if(Ol.transition=null,Dt=1,e)return e()}finally{Dt=r,Ol.transition=n,0==(6&(Pl=t))&&Ji()}}function wu(){Vl=jl.current,Pi(jl)}function Eu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,pi(n)),null!==Ul)for(n=Ul.return;null!==n;){var r=n;switch(Vs(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&qi();break;case 3:ca(),Pi(Vi),Pi(Fi),ga();break;case 5:da(r);break;case 4:ca();break;case 13:case 19:Pi(fa);break;case 10:as(r.type._context);break;case 22:case 23:wu()}n=n.return}if(Ml=e,Ul=e=Bu(e.current,null),Fl=Vl=t,zl=0,Bl=null,$l=Hl=ql=0,Wl=Kl=null,null!==cs){for(t=0;t<cs.length;t++)if(null!==(r=(n=cs[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var a=s.next;s.next=i,r.next=a}n.pending=r}cs=null}return e}function ku(e,t){for(;;){var n=Ul;try{if(ss(),ya.current=ho,Sa){for(var r=wa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Sa=!1}if(ba=0,ka=Ea=wa=null,_a=!1,Ta=0,Ll.current=null,null===n||null===n.return){zl=1,Bl=t,Ul=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Fl,o.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=o,h=c.tag;if(0==(1&c.mode)&&(0===h||11===h||15===h)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=To(a);if(null!==f){f.flags&=-257,Io(f,a,o,0,t),1&f.mode&&_o(s,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(0==(1&t)){_o(s,u,t),_u();break e}l=Error(v(426))}else if(Bs&&1&o.mode){var g=To(a);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),Io(g,a,o,0,t),Ys(l);break e}}s=l,4!==zl&&(zl=2),null===Kl?Kl=[s]:Kl.push(s),l=go(l,o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,ys(o,ko(0,l,t));break e;case 1:s=l;var y=o.type,b=o.stateNode;if(0==(128&o.flags)&&("function"==typeof y.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===Zl||!Zl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,ys(o,So(o,s,t));break e}}o=o.return}while(null!==o)}xu(n)}catch(e){t=e,Ul===n&&null!==n&&(Ul=n=n.return);continue}break}}function Su(){var e=Dl.current;return Dl.current=ho,null===e?ho:e}function _u(){0!==zl&&3!==zl&&2!==zl||(zl=4),null===Ml||0==(268435455&ql)&&0==(268435455&Hl)||gu(Ml,Fl)}function Tu(e,t){var n=Pl;Pl|=2;var r=Su();for(Ml===e&&Fl===t||(Xl=null,Eu(e,t));;)try{Iu();break}catch(t){ku(e,t)}if(ss(),Pl=n,Dl.current=r,null!==Ul)throw Error(v(261));return Ml=null,Fl=0,zl}function Iu(){for(;null!==Ul;)Nu(Ul)}function Cu(){for(;null!==Ul&&!lt();)Nu(Ul)}function Nu(e){var t=Al(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,null===t?xu(e):Ul=t,Ll.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=xo(n,t,Vl)))return void(Ul=n)}else{if(null!==(n=tl(n,t)))return n.flags&=32767,void(Ul=n);if(null===e)return zl=6,void(Ul=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ul=t);Ul=t=e}while(null!==t);0===zl&&(zl=5)}function Au(e,t,n){var r=Dt,i=Ol.transition;try{Ol.transition=null,Dt=1,function(e,t,n,r){do{Ru()}while(null!==tu);if(0!=(6&Pl))throw Error(v(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===Ml&&(Ul=Ml=null,Fl=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||eu||(eu=!0,Fu(pt,(function(){return Ru(),null}))),s=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||s){s=Ol.transition,Ol.transition=null;var a=Dt;Dt=1;var o=Pl;Pl|=4,Ll.current=null,function(e,t){if(ci=rn,Sr(e=kr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(e){n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(o=a+i),h!==s||0!==r&&3!==h.nodeType||(l=a+r),3===h.nodeType&&(a+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++u===i&&(o=a),d===s&&++c===r&&(l=a),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===o||-1===l?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},rn=!1,sl=t;null!==sl;)if(e=(t=sl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,sl=e;else for(;null!==sl;){t=sl;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:es(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;if(1===w.nodeType)w.textContent="";else if(9===w.nodeType){var E=w.body;null!=E&&(E.textContent="")}break;default:throw Error(v(163))}}catch(e){Lu(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,sl=e;break}sl=t.return}p=ll,ll=!1}(e,n),Sl(n,e),_r(hi),rn=!!ci,hi=ci=null,e.current=n,Tl(n,e,i),ut(),Pl=o,Dt=a,Ol.transition=s}else e.current=n;if(eu&&(eu=!1,tu=e,nu=i),0===(s=e.pendingLanes)&&(Zl=null),function(e){if(vt&&"function"==typeof vt.onCommitFiberRoot)try{vt.onCommitFiberRoot(yt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),du(e,ct()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r(t[n]);if(Yl)throw Yl=!1,e=Jl,Jl=null,e;0!=(1&nu)&&0!==e.tag&&Ru(),0!=(1&(s=e.pendingLanes))?e===iu?ru++:(ru=0,iu=e):ru=0,Ji()}(e,t,n,r)}finally{Ol.transition=i,Dt=r}return null}function Ru(){if(null!==tu){var e=Lt(nu),t=Ol.transition,n=Dt;try{if(Ol.transition=null,Dt=16>e?16:e,null===tu)var r=!1;else{if(e=tu,tu=null,nu=0,0!=(6&Pl))throw Error(v(331));var i=Pl;for(Pl|=4,sl=e.current;null!==sl;){var s=sl,a=s.child;if(0!=(16&sl.flags)){var o=s.deletions;if(null!==o){for(var l=0;l<o.length;l++){var u=o[l];for(sl=u;null!==sl;){var c=sl;switch(c.tag){case 0:case 11:case 15:ul(8,c,s)}var h=c.child;if(null!==h)h.return=c,sl=h;else for(;null!==sl;){var d=(c=sl).sibling,f=c.return;if(dl(c),c===u){sl=null;break}if(null!==d){d.return=f,sl=d;break}sl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}sl=s}}if(0!=(2064&s.subtreeFlags)&&null!==a)a.return=s,sl=a;else e:for(;null!==sl;){if(0!=(2048&(s=sl).flags))switch(s.tag){case 0:case 11:case 15:ul(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,sl=y;break e}sl=s.return}}var b=e.current;for(sl=b;null!==sl;){var w=(a=sl).child;if(0!=(2064&a.subtreeFlags)&&null!==w)w.return=a,sl=w;else e:for(a=b;null!==sl;){if(0!=(2048&(o=sl).flags))try{switch(o.tag){case 0:case 11:case 15:cl(9,o)}}catch(e){Lu(o,o.return,e)}if(o===a){sl=null;break e}var E=o.sibling;if(null!==E){E.return=o.return,sl=E;break e}sl=o.return}}if(Pl=i,Ji(),vt&&"function"==typeof vt.onPostCommitFiberRoot)try{vt.onPostCommitFiberRoot(yt,e)}catch(e){}r=!0}return r}finally{Dt=n,Ol.transition=t}}return!1}function Du(e,t,n){ms(e,t=ko(0,t=go(n,t),1)),t=ou(),null!==(e=cu(e,1))&&(At(e,1,t),du(e,t))}function Lu(e,t,n){if(3===e.tag)Du(e,e,n);else for(;null!==t;){if(3===t.tag){Du(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Zl||!Zl.has(r))){ms(t,e=So(t,e=go(n,e),1)),e=ou(),null!==(t=cu(t,1))&&(At(t,1,e),du(t,e));break}}t=t.return}}function Ou(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ou(),e.pingedLanes|=e.suspendedLanes&n,Ml===e&&(Fl&n)===n&&(4===zl||3===zl&&(130023424&Fl)===Fl&&500>ct()-Gl?Eu(e,0):$l|=n),du(e,t)}function Pu(e,t){0===t&&(0==(1&e.mode)?t=1:(t=St,0==(130023424&(St<<=1))&&(St=4194304)));var n=ou();null!==(e=cu(e,t))&&(At(e,t,n),du(e,n))}function Mu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Pu(e,n)}function Uu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}null!==r&&r.delete(t),Pu(e,n)}function Fu(e,t){return at(e,t)}function Vu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ju(e,t,n,r){return new Vu(e,t,n,r)}function zu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Bu(e,t){var n=e.alternate;return null===n?((n=ju(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qu(e,t,n,r,i,s){var a=2;if(r=e,"function"==typeof e)zu(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case M:return Hu(n.children,i,s,t);case U:a=8,i|=8;break;case F:return(e=ju(12,n,t,2|i)).elementType=F,e.lanes=s,e;case B:return(e=ju(13,n,t,i)).elementType=B,e.lanes=s,e;case q:return(e=ju(19,n,t,i)).elementType=q,e.lanes=s,e;case K:return $u(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case V:a=10;break e;case j:a=9;break e;case z:a=11;break e;case H:a=14;break e;case $:a=16,r=null;break e}throw Error(v(130,null==e?e:typeof e,""))}return(t=ju(a,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Hu(e,t,n,r){return(e=ju(7,e,r,t)).lanes=n,e}function $u(e,t,n,r){return(e=ju(22,e,r,t)).elementType=K,e.lanes=n,e.stateNode={},e}function Ku(e,t,n){return(e=ju(6,e,null,t)).lanes=n,e}function Wu(e,t,n){return(t=ju(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xt(0),this.expirationTimes=xt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qu(e,t,n,r,i,s,a,o,l){return e=new Gu(e,t,n,o,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=ju(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ds(s),e}function Xu(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:P,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Yu(e){if(!e)return Ui;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Bi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(v(171))}if(1===e.tag){var n=e.type;if(Bi(n))return $i(e,n,t)}return t}function Ju(e,t,n,r,i,s,a,o,l){return(e=Qu(n,r,!0,e,0,s,0,o,l)).context=Yu(null),n=e.current,(s=ps(r=ou(),i=lu(n))).callback=null!=t?t:null,ms(n,s),e.current.lanes=i,At(e,i,r),du(e,r),e}function Zu(e,t,n,r){var i=t.current,s=ou(),a=lu(i);return n=Yu(n),null===t.context?t.context=n:t.pendingContext=n,(t=ps(s,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),ms(i,t),null!==(e=uu(i,a,s))&&gs(e,i,a),a}function ec(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function tc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function nc(e,t){tc(e,t),(e=e.alternate)&&tc(e,t)}Al=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Vi.current)Ro=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Ro=!1,function(e,t,n){switch(t.tag){case 3:zo(t),Xs();break;case 5:ha(t);break;case 1:Bi(t.type)&&Ki(t);break;case 4:ua(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Mi(ts,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Mi(fa,1&fa.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Ko(e,t,n):(Mi(fa,1&fa.current),null!==(e=el(e,t,n))?e.sibling:null);Mi(fa,1&fa.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return Zo(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Mi(fa,fa.current),r)break;return null;case 22:case 23:return t.lanes=0,Mo(e,t,n)}return el(e,t,n)}(e,t,n);Ro=0!=(131072&e.flags)}else Ro=!1,Bs&&0!=(1048576&t.flags)&&Us(t,As,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps;var i=zi(t,Fi.current);ls(t,n),i=xa(null,t,r,e,i,n);var s=Aa();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Bi(r)?(s=!0,Ki(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,ds(t),i.updater=ks,t.stateNode=i,i._reactInternals=t,Is(t,r,e,n),t=jo(null,t,r,!0,s,n)):(t.tag=0,Bs&&s&&Fs(t),Do(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return zu(e)?1:0;if(null!=e){if((e=e.$$typeof)===z)return 11;if(e===H)return 14}return 2}(r),e=es(r,e),i){case 0:t=Fo(null,t,r,e,n);break e;case 1:t=Vo(null,t,r,e,n);break e;case 11:t=Lo(null,t,r,e,n);break e;case 14:t=Oo(null,t,r,es(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Fo(e,t,r,i=t.elementType===r?i:es(r,i),n);case 1:return r=t.type,i=t.pendingProps,Vo(e,t,r,i=t.elementType===r?i:es(r,i),n);case 3:e:{if(zo(t),null===e)throw Error(v(387));r=t.pendingProps,i=(s=t.memoizedState).element,fs(e,t),vs(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Bo(e,t,r,n,i=Error(v(423)));break e}if(r!==i){t=Bo(e,t,r,n,i=Error(v(424)));break e}for(zs=bi(t.stateNode.containerInfo.firstChild),js=t,Bs=!0,qs=null,n=ra(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Xs(),r===i){t=el(e,t,n);break e}Do(e,t,r,n)}t=t.child}return t;case 5:return ha(t),null===e&&Ws(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,di(r,i)?a=null:null!==s&&di(r,s)&&(t.flags|=32),Uo(e,t),Do(e,t,a,n),t.child;case 6:return null===e&&Ws(t),null;case 13:return Ko(e,t,n);case 4:return ua(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=na(t,null,r,n):Do(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Lo(e,t,r,i=t.elementType===r?i:es(r,i),n);case 7:return Do(e,t,t.pendingProps,n),t.child;case 8:case 12:return Do(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Mi(ts,r._currentValue),r._currentValue=a,null!==s)if(yr(s.value,a)){if(s.children===i.children&&!Vi.current){t=el(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var o=s.dependencies;if(null!==o){a=s.child;for(var l=o.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=ps(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),os(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(v(341));a.lanes|=n,null!==(o=a.alternate)&&(o.lanes|=n),os(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}Do(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ls(t,n),r=r(i=us(i)),t.flags|=1,Do(e,t,r,n),t.child;case 14:return i=es(r=t.type,t.pendingProps),Oo(e,t,r,i=es(r.type,i),n);case 15:return Po(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:es(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Bi(r)?(e=!0,Ki(t)):e=!1,ls(t,n),_s(t,r,i),Is(t,r,i,n),jo(null,t,r,!0,e,n);case 19:return Zo(e,t,n);case 22:return Mo(e,t,n)}throw Error(v(156,t.tag))};var rc="function"==typeof reportError?reportError:function(e){console.error(e)};function ic(e){this._internalRoot=e}function sc(e){this._internalRoot=e}function ac(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function oc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function lc(){}function uc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if("function"==typeof i){var o=i;i=function(){var e=ec(a);o.call(e)}}Zu(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=ec(a);s.call(e)}}var a=Ju(t,r,e,0,null,!1,0,"",lc);return e._reactRootContainer=a,e[_i]=a.current,Jr(8===e.nodeType?e.parentNode:e),bu(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var o=r;r=function(){var e=ec(l);o.call(e)}}var l=Qu(e,0,!1,null,0,!1,0,"",lc);return e._reactRootContainer=l,e[_i]=l.current,Jr(8===e.nodeType?e.parentNode:e),bu((function(){Zu(t,l,n,r)})),l}(n,t,e,i,r);return ec(a)}sc.prototype.render=ic.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(v(409));Zu(e,t,null,null)},sc.prototype.unmount=ic.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;bu((function(){Zu(null,e,null,null)})),t[_i]=null}},sc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&0!==t&&t<Kt[n].priority;n++);Kt.splice(n,0,e),0===n&&Xt(e)}},Ot=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_t(t.pendingLanes);0!==n&&(Rt(t,1|n),du(t,ct()),0==(6&Pl)&&(Ql=ct()+500,Ji()))}break;case 13:var r=ou();bu((function(){return uu(e,1,r)})),nc(e,1)}},Pt=function(e){13===e.tag&&(uu(e,134217728,ou()),nc(e,134217728))},Mt=function(e){if(13===e.tag){var t=ou(),n=lu(e);uu(e,n,t),nc(e,n)}},Ut=function(){return Dt},Ft=function(e,t){var n=Dt;try{return Dt=e,t()}finally{Dt=n}},Pe=function(e,t,n){switch(t){case"input":if(he(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ri(r);if(!i)throw Error(v(90));ae(r),he(r,i)}}}break;case"textarea":ve(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},ze=vu,Be=bu;var cc={usingClientEntryPoint:!1,Events:[xi,Ai,Ri,Ve,je,vu]},hc={findFiberByHostInstance:Ni,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},dc={bundleType:hc.bundleType,version:hc.version,rendererPackageName:hc.rendererPackageName,rendererConfig:hc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=it(e))?null:e.stateNode},findFiberByHostInstance:hc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{yt=fc.inject(dc),vt=fc}catch(Se){}}r=cc,i=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ac(t))throw Error(v(200));return Xu(e,t,null,n)},a=function(e,t){if(!ac(e))throw Error(v(299));var n=!1,r="",i=rc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Qu(e,1,!1,null,0,n,0,r,i),e[_i]=t.current,Jr(8===e.nodeType?e.parentNode:e),new ic(t)},o=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(v(188));throw e=Object.keys(e).join(","),Error(v(268,e))}return e=null===(e=it(t))?null:e.stateNode},l=function(e){return bu(e)},u=function(e,t,n){if(!oc(t))throw Error(v(200));return uc(null,e,t,!0,n)},c=function(e,t,n){if(!ac(e))throw Error(v(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",a=rc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=Ju(t,null,e,1,null!=n?n:null,i,0,s,a),e[_i]=t.current,Jr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new sc(t)},h=function(e,t,n){if(!oc(t))throw Error(v(200));return uc(null,e,t,!1,n)},d=function(e){if(!oc(e))throw Error(v(40));return!!e._reactRootContainer&&(bu((function(){uc(null,null,e,!1,(function(){e._reactRootContainer=null,e[_i]=null}))})),!0)},f=vu,p=function(e,t,n,r){if(!oc(n))throw Error(v(200));if(null==e||void 0===e._reactInternals)throw Error(v(38));return uc(e,t,n,!1,r)},m="18.1.0-next-22edb9f77-20220426"})),s.register("jM0cN",(function(e,t){e.exports=s("7ugxT")})),s.register("7ugxT",(function(t,n){var r,i,s,a,o,l,u,c,h,d,f,p,m,g,y,v,b,w,E;function k(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<T(i,t)))break e;e[r]=t,e[n]=i,n=r}}function S(e){return 0===e.length?null:e[0]}function _(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,s=i>>>1;r<s;){var a=2*(r+1)-1,o=e[a],l=a+1,u=e[l];if(0>T(o,n))l<i&&0>T(u,o)?(e[r]=u,e[l]=n,r=l):(e[r]=o,e[a]=n,r=a);else{if(!(l<i&&0>T(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}function T(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(function(){return r}),(function(e){return r=e})),e(t.exports,"unstable_IdlePriority",(function(){return i}),(function(e){return i=e})),e(t.exports,"unstable_ImmediatePriority",(function(){return s}),(function(e){return s=e})),e(t.exports,"unstable_LowPriority",(function(){return a}),(function(e){return a=e})),e(t.exports,"unstable_NormalPriority",(function(){return o}),(function(e){return o=e})),e(t.exports,"unstable_Profiling",(function(){return l}),(function(e){return l=e})),e(t.exports,"unstable_UserBlockingPriority",(function(){return u}),(function(e){return u=e})),e(t.exports,"unstable_cancelCallback",(function(){return c}),(function(e){return c=e})),e(t.exports,"unstable_continueExecution",(function(){return h}),(function(e){return h=e})),e(t.exports,"unstable_forceFrameRate",(function(){return d}),(function(e){return d=e})),e(t.exports,"unstable_getCurrentPriorityLevel",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_getFirstCallbackNode",(function(){return p}),(function(e){return p=e})),e(t.exports,"unstable_next",(function(){return m}),(function(e){return m=e})),e(t.exports,"unstable_pauseExecution",(function(){return g}),(function(e){return g=e})),e(t.exports,"unstable_requestPaint",(function(){return y}),(function(e){return y=e})),e(t.exports,"unstable_runWithPriority",(function(){return v}),(function(e){return v=e})),e(t.exports,"unstable_scheduleCallback",(function(){return b}),(function(e){return b=e})),e(t.exports,"unstable_shouldYield",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_wrapCallback",(function(){return E}),(function(e){return E=e})),"object"==typeof performance&&"function"==typeof performance.now){var I=performance;r=function(){return I.now()}}else{var C=Date,N=C.now();r=function(){return C.now()-N}}var x=[],A=[],R=1,D=null,L=3,O=!1,P=!1,M=!1,U="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,V="undefined"!=typeof setImmediate?setImmediate:null;function j(e){for(var t=S(A);null!==t;){if(null===t.callback)_(A);else{if(!(t.startTime<=e))break;_(A),t.sortIndex=t.expirationTime,k(x,t)}t=S(A)}}function z(e){if(M=!1,j(e),!P)if(null!==S(x))P=!0,Z(B);else{var t=S(A);null!==t&&ee(z,t.startTime-e)}}function B(e,t){P=!1,M&&(M=!1,F(K),K=-1),O=!0;var n=L;try{for(j(t),D=S(x);null!==D&&(!(D.expirationTime>t)||e&&!Q());){var i=D.callback;if("function"==typeof i){D.callback=null,L=D.priorityLevel;var s=i(D.expirationTime<=t);t=r(),"function"==typeof s?D.callback=s:D===S(x)&&_(x),j(t)}else _(x);D=S(x)}if(null!==D)var a=!0;else{var o=S(A);null!==o&&ee(z,o.startTime-t),a=!1}return a}finally{D=null,L=n,O=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var q,H=!1,$=null,K=-1,W=5,G=-1;function Q(){return!(r()-G<W)}function X(){if(null!==$){var e=r();G=e;var t=!0;try{t=$(!0,e)}finally{t?q():(H=!1,$=null)}}else H=!1}if("function"==typeof V)q=function(){V(X)};else if("undefined"!=typeof MessageChannel){var Y=new MessageChannel,J=Y.port2;Y.port1.onmessage=X,q=function(){J.postMessage(null)}}else q=function(){U(X,0)};function Z(e){$=e,H||(H=!0,q())}function ee(e,t){K=U((function(){e(r())}),t)}i=5,s=1,a=4,o=3,l=null,u=2,c=function(e){e.callback=null},h=function(){P||O||(P=!0,Z(B))},d=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<e?Math.floor(1e3/e):5},f=function(){return L},p=function(){return S(x)},m=function(e){switch(L){case 1:case 2:case 3:var t=3;break;default:t=L}var n=L;L=t;try{return e()}finally{L=n}},g=function(){},y=function(){},v=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=L;L=e;try{return t()}finally{L=n}},b=function(e,t,n){var i=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?i+n:i:n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:R++,callback:t,priorityLevel:e,startTime:n,expirationTime:s=n+s,sortIndex:-1},n>i?(e.sortIndex=n,k(A,e),null===S(x)&&e===S(A)&&(M?(F(K),K=-1):M=!0,ee(z,n-i))):(e.sortIndex=s,k(x,e),P||O||(P=!0,Z(B))),e},w=Q,E=function(e){var t=L;return function(){var n=L;L=t;try{return e.apply(this,arguments)}finally{L=n}}}}));var a;a=s("8pxar");var o,l,u=s("6SgHj");!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),o=(l=s("a9mMY")).createRoot,l.hydrateRoot;u=s("6SgHj");
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
 */const c=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,c=(3&i)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==o)throw Error();const l=i<<2|s>>4;if(r.push(l),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},d=function(e){return function(e){const t=c(e);return h.encodeByteArray(t,!0)}(e).replace(/\./g,"")},f=function(e){try{return h.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function m(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function g(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function y(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function v(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function b(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return"object"==typeof indexedDB}class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(S,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new E(r,a,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const S=/\{\$([^}]+)}/g;
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
 */function C(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function N(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function x(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function A(e,t){const n=new R(e,t);return n.subscribe.bind(n)}class R{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function D(){}
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
function L(e){return e&&e._delegate?e._delegate:e}class O{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class P{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new p;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class M{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new P(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const U=[];var F,V;(V=F||(F={}))[V.DEBUG=0]="DEBUG",V[V.VERBOSE=1]="VERBOSE",V[V.INFO=2]="INFO",V[V.WARN=3]="WARN",V[V.ERROR=4]="ERROR",V[V.SILENT=5]="SILENT";const j={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},z=F.INFO,B={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},q=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=B[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class H{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?j[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}constructor(e){this.name=e,this._logLevel=z,this._logHandler=q,this._userLogHandler=null,U.push(this)}}let $,K;const W=new WeakMap,G=new WeakMap,Q=new WeakMap,X=new WeakMap,Y=new WeakMap;let J={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return G.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Q.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return te(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Z(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(K||(K=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ne(this),t),te(W.get(this))}:function(...t){return te(e.apply(ne(this),t))}:function(t,...n){const r=e.call(ne(this),t,...n);return Q.set(r,t.sort?t.sort():[t]),te(r)}}function ee(e){return"function"==typeof e?Z(e):(e instanceof IDBTransaction&&function(e){if(G.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));G.set(e,t)}(e),t=e,($||($=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,J):e);var t}function te(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(te(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&W.set(t,e)})).catch((()=>{})),Y.set(t,e),t}(e);if(X.has(e))return X.get(e);const t=ee(e);return t!==e&&(X.set(e,t),Y.set(t,e)),t}const ne=e=>Y.get(e);function re(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=te(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(te(a.result),e.oldVersion,e.newVersion,te(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),o.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),o}const ie=["get","getKey","getAll","getAllKeys","count"],se=["put","add","delete","clear"],ae=new Map;function oe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ae.get(t))return ae.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=se.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!ie.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return ae.set(t,s),s}J=(e=>({...e,get:(t,n,r)=>oe(t,n)||e.get(t,n,r),has:(t,n)=>!!oe(t,n)||e.has(t,n)}))(J);
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
class le{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const ue=new H("@firebase/app"),ce={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},he=new Map,de=new Map;function fe(e,t){try{e.container.addComponent(t)}catch(n){ue.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pe(e){const t=e.name;if(de.has(t))return ue.debug(`There were multiple attempts to register component ${t}.`),!1;de.set(t,e);for(const t of he.values())fe(t,e);return!0}function me(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const ge=new k("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class ye{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new O("app",(()=>this),"PUBLIC"))}}
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
 */function ve(e="[DEFAULT]"){const t=he.get(e);if(!t)throw ge.create("no-app",{appName:e});return t}function be(e,t,n){var r;let i=null!==(r=ce[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ue.warn(e.join(" "))}pe(new O(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let we=null;function Ee(){return we||(we=re("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ge.create("storage-open",{originalErrorMessage:e.message})}))),we}async function ke(e,t){try{const n=(await Ee()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,Se(e)),n.done}catch(e){throw ge.create("storage-set",{originalErrorMessage:e.message})}}function Se(e){return`${e.name}!${e.options.appId}`}
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
 */class _e{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Te();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Te(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ce(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ce(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=d(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ie(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Te(){return(new Date).toISOString().substring(0,10)}class Ie{async runIndexedDBEnvironmentCheck(){return!!w()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Ee()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Se(e))}catch(e){throw ge.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Ce(e){return d(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Ne;Ne="",pe(new O("platform-logger",(e=>new le(e)),"PRIVATE")),pe(new O("heartbeat",(e=>new _e(e)),"PRIVATE")),be("@firebase/app","0.7.25",Ne),be("@firebase/app","0.7.25","esm2017"),be("fire-js","");
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
be("firebase","9.8.2","app");function xe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Ae(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Re=Ae,De=new k("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Le=new H("@firebase/auth");function Oe(e,...t){Le.logLevel<=F.ERROR&&Le.error(`Auth (9.8.2): ${e}`,...t)}
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
 */function Pe(e,...t){throw Ve(e,...t)}function Me(e,...t){return Ve(e,...t)}function Ue(e,t,n){const r=Object.assign(Object.assign({},Re()),{[t]:n});return new k("auth","Firebase",r).create(t,{appName:e.name})}function Fe(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Pe(e,"argument-error"),Ue(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ve(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return De.create(e,...t)}function je(e,t,...n){if(!e)throw Ve(t,...n)}function ze(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Oe(t),new Error(t)}function Be(e,t){e||ze(t)}
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
 */const qe=new Map;function He(e){Be(e instanceof Function,"Expected a class definition");let t=qe.get(e);return t?(Be(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,qe.set(e,t),t)}
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
function $e(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ke(){return"http:"===We()||"https:"===We()}function We(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class Ge{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ke()||y()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,Be(t>e,"Short delay should be less than long delay!"),this.isMobile=g()||v()}}
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
 */function Qe(e,t){Be(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Xe{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Ye={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Je=new Ge(3e4,6e4);
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
 */function Ze(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function et(e,t,n,r,i={}){return tt(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=C(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),Xe.fetch()(rt(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))}))}async function tt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ye),t);try{const t=new it(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw st(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw st(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw st(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw st(e,"user-disabled",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw Ue(e,o,a);Pe(e,o)}}catch(t){if(t instanceof E)throw t;Pe(e,"network-request-failed")}}async function nt(e,t,n,r,i={}){const s=await et(e,t,n,r,i);return"mfaPendingCredential"in s&&Pe(e,"multi-factor-auth-required",{_serverResponse:s}),s}function rt(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Qe(e.config,i):`${e.config.apiScheme}://${i}`}class it{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Me(this.auth,"network-request-failed"))),Je.get())}))}}function st(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Me(e,t,r);return i.customData._tokenResponse=n,i}
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
function at(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function ot(e){return 1e3*Number(e)}function lt(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Oe("JWT malformed, contained fewer than 3 sections"),null;try{const e=f(n);return e?JSON.parse(e):(Oe("Failed to decode base64 JWT payload"),null)}catch(e){return Oe("Caught error parsing JWT payload as JSON",e),null}}
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
async function ut(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof E&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ct{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class ht{_initializeTime(){this.lastSignInTime=at(this.lastLoginAt),this.creationTime=at(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function dt(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ut(e,async function(e,t){return et(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));je(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=xe(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=(l=e.providerData,u=a,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!c&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ht(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class ft{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){je(e.idToken,"internal-error"),je(void 0!==e.idToken,"internal-error"),je(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=lt(e);return je(t,"internal-error"),je(void 0!==t.exp,"internal-error"),je(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return je(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await tt(e,{},(async()=>{const n=C({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=rt(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xe.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ft;return n&&(je("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(je("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(je("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ft,this.toJSON())}_performRefresh(){return ze("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function pt(e,t){je("string"==typeof e||void 0===e,"internal-error",{appName:t})}class mt{async getIdToken(e){const t=await ut(this,this.stsTokenManager.getToken(this.auth,e));return je(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=L(e),r=await n.getIdToken(t),i=lt(r);je(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:at(ot(i.auth_time)),issuedAtTime:at(ot(i.iat)),expirationTime:at(ot(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=L(e);await dt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(je(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){je(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await dt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ut(this,async function(e,t){return et(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:k}=t;je(v&&k,e,"internal-error");const S=ft.fromJSON(this.name,k);je("string"==typeof v,e,"internal-error"),pt(c,e.name),pt(h,e.name),je("boolean"==typeof b,e,"internal-error"),je("boolean"==typeof w,e,"internal-error"),pt(d,e.name),pt(f,e.name),pt(p,e.name),pt(m,e.name),pt(g,e.name),pt(y,e.name);const _=new mt({uid:v,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new ft;r.updateFromServerResponse(t);const i=new mt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await dt(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=xe(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ct(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ht(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */class gt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}gt.type="NONE";const yt=gt;
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
 */function vt(e,t,n){return`firebase:${e}:${t}:${n}`}class bt{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new bt(He(yt),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||He(yt);const s=vt(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(s);if(t){const r=mt._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new bt(i,e,n)):new bt(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=vt(this.userKey,r.apiKey,i),this.fullPersistenceKey=vt("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function wt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_t(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Et(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(It(t))return"Blackberry";if(Ct(t))return"Webos";if(kt(t))return"Safari";if((t.includes("chrome/")||St(t))&&!t.includes("edge/"))return"Chrome";if(Tt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Et(e=m()){return/firefox\//i.test(e)}function kt(e=m()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function St(e=m()){return/crios\//i.test(e)}function _t(e=m()){return/iemobile/i.test(e)}function Tt(e=m()){return/android/i.test(e)}function It(e=m()){return/blackberry/i.test(e)}function Ct(e=m()){return/webos/i.test(e)}function Nt(e=m()){return/iphone|ipad|ipod/i.test(e)}function xt(e=m()){return Nt(e)||Tt(e)||Ct(e)||It(e)||/windows phone/i.test(e)||_t(e)}
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
function At(e,t=[]){let n;switch(e){case"Browser":n=wt(m());break;case"Worker":n=`${wt(m())}-${e}`;break;default:n=e}return`${n}/JsCore/9.8.2/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class Rt{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Dt{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=He(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await bt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==s||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return je(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dt(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?L(e):null;return t&&je(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&je(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(He(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new k("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&He(e)||this._popupRedirectResolver;je(t,this,"argument-error"),this.redirectPersistenceManager=await bt.create(this,[He(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return je(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return je(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=At(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ot(this),this.idTokenSubscription=new Ot(this),this.beforeStateQueue=new Rt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=De,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Lt(e){return L(e)}class Ot{get next(){return je(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=A((e=>this.observer=e))}}
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
class Pt{toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,t){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function Mt(e,t){return et(e,"POST","/v1/accounts:update",t)}
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
class Ut extends Pt{static _fromEmailAndPassword(e,t){return new Ut(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ut(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return nt(e,"POST","/v1/accounts:signInWithPassword",Ze(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return nt(e,"POST","/v1/accounts:signInWithEmailLink",Ze(e,t))}(e,{email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Mt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return nt(e,"POST","/v1/accounts:signInWithEmailLink",Ze(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
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
 */async function Ft(e,t){return nt(e,"POST","/v1/accounts:signInWithIdp",Ze(e,t))}
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
 */class Vt extends Pt{static _fromParams(e){const t=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=xe(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Vt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Ft(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ft(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ft(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=C(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const jt={USER_NOT_FOUND:"user-not-found"};
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
class zt extends Pt{static _fromVerification(e,t){return new zt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new zt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ze(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ze(e,t));if(n.temporaryProof)throw st(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return nt(e,"POST","/v1/accounts:signInWithPhoneNumber",Ze(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),jt)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new zt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class Bt{static parseLink(e){const t=function(e){const t=N(x(e)).link,n=t?N(x(t)).deep_link_id:null,r=N(x(e)).deep_link_id;return(r?N(x(r)).link:null)||r||n||t||e}(e);try{return new Bt(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,a;const o=N(x(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,u=null!==(n=o.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=o.mode)&&void 0!==r?r:null);je(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}}
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
class qt{static credential(e,t){return Ut._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Bt.parseLink(t);return je(n,"argument-error"),Ut._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=qt.PROVIDER_ID}}qt.PROVIDER_ID="password",qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ht{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class $t extends Ht{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class Kt extends $t{static credential(e){return Vt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kt.PROVIDER_ID="facebook.com";
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
class Wt extends $t{static credential(e,t){return Vt._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Wt.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Wt.GOOGLE_SIGN_IN_METHOD="google.com",Wt.PROVIDER_ID="google.com";
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
class Gt extends $t{static credential(e){return Vt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Gt.GITHUB_SIGN_IN_METHOD="github.com",Gt.PROVIDER_ID="github.com";
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
class Qt extends $t{static credential(e,t){return Vt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qt.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com",Qt.PROVIDER_ID="twitter.com";
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
class Xt{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await mt._fromIdTokenResponse(e,n,r),s=Yt(n);return new Xt({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Yt(n);return new Xt({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Yt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Jt extends E{static _fromErrorAndOperation(e,t,n,r){return new Jt(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Jt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Zt(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Jt._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function en(e,t,n=!1){const r=await ut(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Xt._forOperation(e,"link",r)}
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
async function tn(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ut(e,Zt(r,i,t,e),n);je(s.idToken,r,"internal-error");const a=lt(s.idToken);je(a,r,"internal-error");const{sub:o}=a;return je(e.uid===o,r,"user-mismatch"),Xt._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Pe(r,"user-mismatch"),e}}
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
 */async function nn(e,t,n=!1){const r="signIn",i=await Zt(e,r,t),s=await Xt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function rn(e,t,n,r){return L(e).onAuthStateChanged(t,n,r)}function sn(e){return L(e).signOut()}new WeakMap;
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
class an{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class on extends an{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);b()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=m();return kt(e)||Nt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=xt(),this._shouldAllowMigration=!0}}on.type="LOCAL";const ln=on;
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
 */class un extends an{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}un.type="SESSION";const cn=un;
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
class hn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new hn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function dn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */hn.receivers=[];class fn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((a,o)=>{const l=dn("",20);r.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function pn(){return window}
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
function mn(){return void 0!==pn().WorkerGlobalScope&&"function"==typeof pn().importScripts}class gn{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function yn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function vn(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new gn(e).toPromise()}(),t(await vn()))}))}))}async function bn(e,t,n){const r=yn(e,!0).put({fbase_key:t,value:n});return new gn(r).toPromise()}function wn(e,t){const n=yn(e,!0).delete(t);return new gn(n).toPromise()}class En{async _openDb(){return this.db||(this.db=await vn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hn._getInstance(mn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new fn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vn();return await bn(e,"__sak","1"),await wn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>bn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=yn(e,!1).get(t),r=await new gn(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>wn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=yn(e,!1).getAll();return new gn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}En.type="LOCAL";const kn=En;
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
 */function Sn(e){return new Promise(((t,n)=>{const r=document.createElement("script");
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
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Me("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function _n(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
_n("rcb"),new Ge(3e4,6e4);async function Tn(e,t,n){var r;const i=await n.verify();try{let s;if(je("string"==typeof i,e,"argument-error"),je("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){je("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return et(e,"POST","/v2/accounts/mfaEnrollment:start",Ze(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{je("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;je(n,e,"missing-multi-factor-info");const a=await function(e,t){return et(e,"POST","/v2/accounts/mfaSignIn:start",Ze(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return et(e,"POST","/v1/accounts:sendVerificationCode",Ze(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class In{verifyPhoneNumber(e,t){return Tn(this.auth,e,L(t))}static credential(e,t){return zt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return In.credentialFromTaggedObject(t)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?zt._fromTokenResponse(t,n):null}constructor(e){this.providerId=In.PROVIDER_ID,this.auth=Lt(e)}}
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
function Cn(e,t){return t?He(t):(je(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */In.PROVIDER_ID="phone",In.PHONE_SIGN_IN_METHOD="phone";class Nn extends Pt{_getIdTokenResponse(e){return Ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function xn(e){return nn(e.auth,new Nn(e),e.bypassAuthState)}function An(e){const{auth:t,user:n}=e;return je(n,t,"internal-error"),tn(n,new Nn(e),e.bypassAuthState)}async function Rn(e){const{auth:t,user:n}=e;return je(n,t,"internal-error"),en(n,new Nn(e),e.bypassAuthState)}
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
 */class Dn{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xn;case"linkViaPopup":case"linkViaRedirect":return Rn;case"reauthViaPopup":case"reauthViaRedirect":return An;default:Pe(this.auth,"internal-error")}}resolve(e){Be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Be(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const Ln=new Ge(2e3,1e4);class On extends Dn{async executeNotNull(){const e=await this.execute();return je(e,this.auth,"internal-error"),e}async onExecution(){Be(1===this.filter.length,"Popup operations only handle one event");const e=dn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Me(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ln.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}}On.currentPopupAction=null;
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
const Pn=new Map;class Mn extends Dn{async execute(){let e=Pn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=jn(t),r=Vn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Pn.set(this.auth._key(),e)}return this.bypassAuthState||Pn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function Un(e,t){return Vn(e)._set(jn(t),"true")}function Fn(e,t){Pn.set(e._key(),t)}function Vn(e){return He(e._redirectPersistence)}function jn(e){return vt("pendingRedirect",e.config.apiKey,e.name)}
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
 */function zn(e,t,n){return async function(e,t,n){const r=Lt(e);Fe(e,t,Ht);const i=Cn(r,n);return await Un(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}async function Bn(e,t,n=!1){const r=Lt(e),i=Cn(r,t),s=new Mn(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class qn{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $n(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!$n(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Me(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hn(e))}saveEventToCache(e){this.cachedEventUids.add(Hn(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Hn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function $n({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Kn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wn=/^https?/;async function Gn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return et(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Qn(e))return}catch(e){}Pe(e,"unauthorized-domain")}function Qn(e){const t=$e(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Wn.test(n))return!1;if(Kn.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Xn=new Ge(3e4,6e4);function Yn(){const e=pn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Jn=null;function Zn(e){return Jn=Jn||function(e){return new Promise(((t,n)=>{var r,i,s;function a(){Yn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Yn(),n(Me(e,"network-request-failed"))},timeout:Xn.get()})}if(null===(i=null===(r=pn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=pn().gapi)||void 0===s?void 0:s.load)){const t=_n("iframefcb");return pn()[t]=()=>{gapi.load?a():n(Me(e,"network-request-failed"))},Sn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw Jn=null,e}))}(e),Jn}
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
 */const er=new Ge(5e3,15e3),tr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rr(e){const t=e.config;je(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Qe(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.8.2"},i=nr.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${C(r).slice(1)}`}
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
const ir={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class sr{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function ar(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},ir),{width:r.toString(),height:i.toString(),top:s,left:a}),u=m().toLowerCase();n&&(o=St(u)?"_blank":n),Et(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=m()){var t;return Nt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",o),new sr(null);const h=window.open(t||"",o,c);je(h,e,"popup-blocked");try{h.focus()}catch(e){}return new sr(h)}function or(e,t,n,r,i,s){je(e.config.authDomain,e,"auth-domain-config-required"),je(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.8.2",eventId:i};if(t instanceof Ht){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",_(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof $t){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];return`${function({config:e}){return e.emulator?Qe(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${C(o).slice(1)}`}const lr=class{async _openPopup(e,t,n,r){var i;Be(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return ar(e,or(e,t,n,$e(),r),dn())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=or(e,t,n,$e(),r),pn().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Be(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Zn(e),n=pn().gapi;return je(n,e,"internal-error"),t.open({where:document.body,url:rr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Me(e,"network-request-failed"),s=pn().setTimeout((()=>{r(i)}),er.get());function a(){pn().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}(e),n=new qn(e);return t.register("authEvent",(t=>{je(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Pe(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xt()||kt()||Nt()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cn,this._completeRedirectFn=Bn,this._overrideRedirectResult=Fn}};var ur;
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
class cr{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){je(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
function hr(e=ve()){const t=me(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=me(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(T(n.getOptions(),null!=t?t:{}))return e;Pe(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:lr,persistence:[kn,ln,cn]})}ur="Browser",pe(new O("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{je(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),je(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:ur,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:At(ur)},a=new Dt(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(He);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),pe(new O("auth-internal",(e=>{const t=Lt(e.getProvider("auth").getImmediate());return new cr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),be("@firebase/auth","0.20.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ur)),be("@firebase/auth","0.20.2","esm2017");var dr,fr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},pr={},mr=mr||{},gr=fr||self;function yr(){}function vr(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function br(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var wr="closure_uid_"+(1e9*Math.random()>>>0),Er=0;function kr(e,t,n){return e.call.apply(e.bind,arguments)}function Sr(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _r(e,t,n){return(_r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?kr:Sr).apply(null,arguments)}function Tr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Ir(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Cr(){this.s=this.s,this.o=this.o}var Nr={};Cr.prototype.s=!1,Cr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,wr)&&e[wr]||(e[wr]=++Er)}(this);delete Nr[e]}},Cr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Ar=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function Rr(e){return Array.prototype.concat.apply([],arguments)}function Dr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Lr(e){return/^[\s\xa0]*$/.test(e)}var Or,Pr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Mr(e,t){return-1!=e.indexOf(t)}function Ur(e,t){return e<t?-1:e>t?1:0}e:{var Fr=gr.navigator;if(Fr){var Vr=Fr.userAgent;if(Vr){Or=Vr;break e}}Or=""}function jr(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function zr(e){const t={};for(const n in e)t[n]=e[n];return t}var Br="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qr(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Br.length;t++)n=Br[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Hr(e){return Hr[" "](e),e}Hr[" "]=yr;var $r,Kr,Wr=Mr(Or,"Opera"),Gr=Mr(Or,"Trident")||Mr(Or,"MSIE"),Qr=Mr(Or,"Edge"),Xr=Qr||Gr,Yr=Mr(Or,"Gecko")&&!(Mr(Or.toLowerCase(),"webkit")&&!Mr(Or,"Edge"))&&!(Mr(Or,"Trident")||Mr(Or,"MSIE"))&&!Mr(Or,"Edge"),Jr=Mr(Or.toLowerCase(),"webkit")&&!Mr(Or,"Edge");function Zr(){var e=gr.document;return e?e.documentMode:void 0}e:{var ei="",ti=(Kr=Or,Yr?/rv:([^\);]+)(\)|;)/.exec(Kr):Qr?/Edge\/([\d\.]+)/.exec(Kr):Gr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Kr):Jr?/WebKit\/(\S+)/.exec(Kr):Wr?/(?:Version)[ \/]?(\S+)/.exec(Kr):void 0);if(ti&&(ei=ti?ti[1]:""),Gr){var ni=Zr();if(null!=ni&&ni>parseFloat(ei)){$r=String(ni);break e}}$r=ei}var ri,ii={};function si(){return function(e){var t=ii;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Pr(String($r)).split("."),n=Pr("9").split("."),r=Math.max(t.length,n.length);for(let a=0;0==e&&a<r;a++){var i=t[a]||"",s=n[a]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Ur(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Ur(0==i[2].length,0==s[2].length)||Ur(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(gr.document&&Gr){var ai=Zr();ri=ai||(parseInt($r,10)||void 0)}else ri=void 0;var oi=ri,li=function(){if(!gr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{gr.addEventListener("test",yr,t),gr.removeEventListener("test",yr,t)}catch(e){}return e}();function ui(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ci(e,t){if(ui.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Yr){e:{try{Hr(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:hi[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ci.Z.h.call(this)}}ui.prototype.h=function(){this.defaultPrevented=!0},Ir(ci,ui);var hi={2:"touch",3:"pen",4:"mouse"};ci.prototype.h=function(){ci.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var di="closure_listenable_"+(1e6*Math.random()|0),fi=0;function pi(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++fi,this.ca=this.fa=!1}function mi(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function gi(e){this.src=e,this.g={},this.h=0}function yi(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=xr(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(mi(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function vi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}gi.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=vi(e,t,r,i);return-1<a?(t=e[a],n||(t.fa=!1)):((t=new pi(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var bi="closure_lm_"+(1e6*Math.random()|0),wi={};function Ei(e,t,n,r,i){if(r&&r.once)return Si(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ei(e,t[s],n,r,i);return null}return n=Ai(n),e&&e[di]?e.N(t,n,br(r)?!!r.capture:!!r,i):ki(e,t,n,!1,r,i)}function ki(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=br(i)?!!i.capture:!!i,o=Ni(e);if(o||(e[bi]=o=new gi(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Ci;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)li||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ii(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Si(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Si(e,t[s],n,r,i);return null}return n=Ai(n),e&&e[di]?e.O(t,n,br(r)?!!r.capture:!!r,i):ki(e,t,n,!0,r,i)}function _i(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)_i(e,t[s],n,r,i);else r=br(r)?!!r.capture:!!r,n=Ai(n),e&&e[di]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=vi(s=e.g[t],n,r,i))&&(mi(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ni(e))&&(t=e.g[t.toString()],e=-1,t&&(e=vi(t,n,r,i)),(n=-1<e?t[e]:null)&&Ti(n))}function Ti(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[di])yi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ii(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ni(t))?(yi(n,e),0==n.h&&(n.src=null,t[bi]=null)):mi(e)}}}function Ii(e){return e in wi?wi[e]:wi[e]="on"+e}function Ci(e,t){if(e.ca)e=!0;else{t=new ci(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Ti(e),e=n.call(r,t)}return e}function Ni(e){return(e=e[bi])instanceof gi?e:null}var xi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ai(e){return"function"==typeof e?e:(e[xi]||(e[xi]=function(t){return e.handleEvent(t)}),e[xi])}function Ri(){Cr.call(this),this.i=new gi(this),this.P=this,this.I=null}function Di(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new ui(t,e);else if(t instanceof ui)t.target=t.target||e;else{var i=t;qr(t=new ui(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=Li(a,r,!0,t)&&i}if(i=Li(a=t.g=e,r,!0,t)&&i,i=Li(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=Li(a=t.g=n[s],r,!1,t)&&i}function Li(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.ca&&a.capture==n){var o=a.listener,l=a.ia||a.src;a.fa&&yi(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}Ir(Ri,Cr),Ri.prototype[di]=!0,Ri.prototype.removeEventListener=function(e,t,n,r){_i(this,e,t,n,r)},Ri.prototype.M=function(){if(Ri.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mi(n[r]);delete t.g[e],t.h--}}this.I=null},Ri.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ri.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Oi=gr.JSON.stringify;function Pi(){var e=Bi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Mi,Ui=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new Fi),(e=>e.reset()));class Fi{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Vi(e){gr.setTimeout((()=>{throw e}),0)}function ji(e,t){Mi||function(){var e=gr.Promise.resolve(void 0);Mi=function(){e.then(qi)}}(),zi||(Mi(),zi=!0),Bi.add(e,t)}var zi=!1,Bi=new class{add(e,t){const n=Ui.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function qi(){for(var e;e=Pi();){try{e.h.call(e.g)}catch(e){Vi(e)}var t=Ui;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}zi=!1}function Hi(e,t){Ri.call(this),this.h=e||1,this.g=t||gr,this.j=_r(this.kb,this),this.l=Date.now()}function $i(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ki(e,t,n){if("function"==typeof e)n&&(e=_r(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_r(e.handleEvent,e)}return 2147483647<Number(t)?-1:gr.setTimeout(e,t||0)}function Wi(e){e.g=Ki((()=>{e.g=null,e.i&&(e.i=!1,Wi(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Ir(Hi,Ri),(dr=Hi.prototype).da=!1,dr.S=null,dr.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Di(this,"tick"),this.da&&($i(this),this.start()))}},dr.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},dr.M=function(){Hi.Z.M.call(this),$i(this),delete this.g};class Gi extends Cr{l(e){this.h=arguments,this.g?this.i=!0:Wi(this)}M(){super.M(),this.g&&(gr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Qi(e){Cr.call(this),this.h=e,this.g={}}Ir(Qi,Cr);var Xi=[];function Yi(e,t,n,r){Array.isArray(n)||(n&&(Xi[0]=n.toString()),n=Xi);for(var i=0;i<n.length;i++){var s=Ei(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ji(e){jr(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ti(e)}),e),e.g={}}function Zi(){this.g=!0}function es(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}return Oi(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Qi.prototype.M=function(){Qi.Z.M.call(this),Ji(this)},Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Zi.prototype.Aa=function(){this.g=!1},Zi.prototype.info=function(){};var ts={},ns=null;function rs(){return ns=ns||new Ri}function is(e){ui.call(this,ts.Ma,e)}function ss(e){const t=rs();Di(t,new is(t,e))}function as(e,t){ui.call(this,ts.STAT_EVENT,e),this.stat=t}function os(e){const t=rs();Di(t,new as(t,e))}function ls(e,t){ui.call(this,ts.Na,e),this.size=t}function us(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return gr.setTimeout((function(){e()}),t)}ts.Ma="serverreachability",Ir(is,ui),ts.STAT_EVENT="statevent",Ir(as,ui),ts.Na="timingevent",Ir(ls,ui);var cs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},hs={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ds(){}function fs(e){return e.h||(e.h=e.i())}function ps(){}ds.prototype.h=null;var ms,gs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ys(){ui.call(this,"d")}function vs(){ui.call(this,"c")}function bs(){}function ws(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Qi(this),this.P=ks,e=Xr?125:void 0,this.W=new Hi(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Es}function Es(){this.i=null,this.g="",this.h=!1}Ir(ys,ui),Ir(vs,ui),Ir(bs,ds),bs.prototype.g=function(){return new XMLHttpRequest},bs.prototype.i=function(){return{}},ms=new bs;var ks=45e3,Ss={},_s={};function Ts(e,t,n){e.K=1,e.v=Gs(Bs(t)),e.s=n,e.U=!0,Is(e,null)}function Is(e,t){e.F=Date.now(),As(e),e.A=Bs(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),oa(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Es,e.g=oo(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Gi(_r(e.Ia,e,e.g),e.O)),Yi(e.V,e.g,"readystatechange",e.gb),t=e.H?zr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ss(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Cs(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ns(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=xs(e,n),r==_s){4==t&&(e.o=4,os(14),i=!1),es(e.j,e.m,null,"[Incomplete Response]");break}if(r==Ss){e.o=4,os(15),es(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}es(e.j,e.m,r,null),Ps(e,r)}Cs(e)&&r!=_s&&r!=Ss&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,os(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Za(t),t.L=!0,os(11))):(es(e.j,e.m,n,"[Invalid Chunked Response]"),Os(e),Ls(e))}function xs(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?_s:(n=Number(t.substring(n,r)),isNaN(n)?Ss:(r+=1)+n>t.length?_s:(t=t.substr(r,n),e.C=r+n,t))}function As(e){e.Y=Date.now()+e.P,Rs(e,e.P)}function Rs(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=us(_r(e.eb,e),t)}function Ds(e){e.B&&(gr.clearTimeout(e.B),e.B=null)}function Ls(e){0==e.l.G||e.I||no(e.l,e)}function Os(e){Ds(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,$i(e.W),Ji(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ps(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||fa(n.i,e)))if(n.I=e.N,!e.J&&fa(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;to(n),Ha(n)}Ja(n),os(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=us(_r(n.ab,n),6e3));if(1>=da(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else io(n,11)}else if((e.J||n.g==e)&&to(n),!Lr(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(Mr(e,"spdy")||Mr(e,"quic")||Mr(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(pa(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Ws(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var a=e;if((r=n).oa=ao(r,r.H?r.la:null,r.W),a.J){ma(r.i,a);var o=a,l=r.K;l&&o.setTimeout(l),o.B&&(Ds(o),As(o)),r.g=a}else Ya(r);0<n.l.length&&Wa(n)}else"stop"!=u[0]&&"close"!=u[0]||io(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?io(n,7):qa(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ss(4)}catch(e){}}function Ms(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(vr(e)||"string"==typeof e)Ar(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(vr(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(vr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Us(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Us)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Fs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Vs(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)Vs(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Vs(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(dr=ws.prototype).setTimeout=function(e){this.P=e},dr.gb=function(e){e=e.target;const t=this.L;t&&3==Fa(e)?t.l():this.Ia(e)},dr.Ia=function(e){try{if(e==this.g)e:{const c=Fa(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>c)&&(3!=c||Xr||this.g&&(this.h.h||this.g.ga()||Va(this.g)))){this.I||4!=c||7==t||ss(8==t||0>=h?3:2),Ds(this);var n=this.g.ba();this.N=n;t:if(Cs(this)){var r=Va(this.g);e="";var i=r.length,s=4==Fa(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Os(this),Ls(this);var a="";break t}this.h.i=new gr.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a}))}(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lr(o)){var u=o;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,os(12),Os(this),Ls(this);break e}es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ps(this,n)}this.U?(Ns(this,c,a),Xr&&this.i&&3==c&&(Yi(this.V,this.W,"tick",this.fb),this.W.start())):(es(this.j,this.m,a,null),Ps(this,a)),4==c&&Os(this),this.i&&!this.I&&(4==c?no(this.l,this):(this.i=!1,As(this)))}else 400==n&&0<a.indexOf("Unknown SID")?(this.o=3,os(12)):(this.o=0,os(13)),Os(this),Ls(this)}}}catch(e){}},dr.fb=function(){if(this.g){var e=Fa(this.g),t=this.g.ga();this.C<t.length&&(Ds(this),Ns(this,e,t),this.i&&4!=e&&As(this))}},dr.cancel=function(){this.I=!0,Os(this)},dr.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(ss(3),os(17)),Os(this),this.o=2,Ls(this)):Rs(this,this.Y-e)},(dr=Us.prototype).R=function(){Fs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},dr.T=function(){return Fs(this),this.g.concat()},dr.get=function(e,t){return Vs(this.h,e)?this.h[e]:t},dr.set=function(e,t){Vs(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},dr.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var js=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function zs(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof zs){this.g=void 0!==t?t:e.g,qs(this,e.j),this.s=e.s,Hs(this,e.i),$s(this,e.m),this.l=e.l,t=e.h;var n=new ra;n.i=t.i,t.g&&(n.g=new Us(t.g),n.h=t.h),Ks(this,n),this.o=e.o}else e&&(n=String(e).match(js))?(this.g=!!t,qs(this,n[1]||"",!0),this.s=Qs(n[2]||""),Hs(this,n[3]||"",!0),$s(this,n[4]),this.l=Qs(n[5]||"",!0),Ks(this,n[6]||"",!0),this.o=Qs(n[7]||"")):(this.g=!!t,this.h=new ra(null,this.g))}function Bs(e){return new zs(e)}function qs(e,t,n){e.j=n?Qs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Hs(e,t,n){e.i=n?Qs(t,!0):t}function $s(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ks(e,t,n){t instanceof ra?(e.h=t,function(e,t){t&&!e.j&&(ia(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sa(this,t),oa(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Xs(t,ta)),e.h=new ra(t,e.g))}function Ws(e,t,n){e.h.set(t,n)}function Gs(e){return Ws(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Qs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Xs(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ys),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ys(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}zs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Xs(t,Js,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Xs(t,Js,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Xs(n,"/"==n.charAt(0)?ea:Zs,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Xs(n,na)),e.join("")};var Js=/[#\/\?@]/g,Zs=/[#\?:]/g,ea=/[#\?]/g,ta=/[#\?@]/g,na=/#/g;function ra(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ia(e){e.g||(e.g=new Us,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sa(e,t){ia(e),t=la(e,t),Vs(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Vs((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Fs(e)))}function aa(e,t){return ia(e),t=la(e,t),Vs(e.g.h,t)}function oa(e,t,n){sa(e,t),0<n.length&&(e.i=null,e.g.set(la(e,t),Dr(n)),e.h+=n.length)}function la(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(dr=ra.prototype).add=function(e,t){ia(this),this.i=null,e=la(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},dr.forEach=function(e,t){ia(this),this.g.forEach((function(n,r){Ar(n,(function(n){e.call(t,n,r,this)}),this)}),this)},dr.T=function(){ia(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},dr.R=function(e){ia(this);var t=[];if("string"==typeof e)aa(this,e)&&(t=Rr(t,this.g.get(la(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Rr(t,e[n])}return t},dr.set=function(e,t){return ia(this),this.i=null,aa(this,e=la(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},dr.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},dr.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var a=i;""!==r[s]&&(a+="="+encodeURIComponent(String(r[s]))),e.push(a)}}return this.i=e.join("&")};function ua(e){this.l=e||ca,gr.PerformanceNavigationTiming?e=0<(e=gr.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(gr.g&&gr.g.Ea&&gr.g.Ea()&&gr.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ca=10;function ha(e){return!!e.h||!!e.g&&e.g.size>=e.j}function da(e){return e.h?1:e.g?e.g.size:0}function fa(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function pa(e,t){e.g?e.g.add(t):e.h=t}function ma(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ga(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Dr(e.i)}function ya(){}function va(){this.g=new ya}function ba(e,t,n){const r=n||"";try{Ms(e,(function(e,n){let i=e;br(e)&&(i=Oi(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function wa(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function Ea(e){this.l=e.$b||null,this.j=e.ib||!1}function ka(e,t){Ri.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Sa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ua.prototype.cancel=function(){if(this.i=ga(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},ya.prototype.stringify=function(e){return gr.JSON.stringify(e,void 0)},ya.prototype.parse=function(e){return gr.JSON.parse(e,void 0)},Ir(Ea,ds),Ea.prototype.g=function(){return new ka(this.l,this.j)},Ea.prototype.i=function(e){return function(){return e}}({}),Ir(ka,Ri);var Sa=0;function _a(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Ta(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ia(e)}function Ia(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(dr=ka.prototype).open=function(e,t){if(this.readyState!=Sa)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ia(this)},dr.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||gr).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},dr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ta(this)),this.readyState=Sa},dr.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ia(this)),this.g&&(this.readyState=3,Ia(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==gr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_a(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},dr.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ta(this):Ia(this),3==this.readyState&&_a(this)}},dr.Ua=function(e){this.g&&(this.response=this.responseText=e,Ta(this))},dr.Ta=function(e){this.g&&(this.response=e,Ta(this))},dr.ha=function(){this.g&&Ta(this)},dr.setRequestHeader=function(e,t){this.v.append(e,t)},dr.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},dr.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ka.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ca=gr.JSON.parse;function Na(e){Ri.call(this),this.headers=new Us,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xa,this.K=this.L=!1}Ir(Na,Ri);var xa="",Aa=/^https?$/i,Ra=["POST","PUT"];function Da(e){return"content-type"==e.toLowerCase()}function La(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Oa(e),Ma(e)}function Oa(e){e.D||(e.D=!0,Di(e,"complete"),Di(e,"error"))}function Pa(e){if(e.h&&void 0!==mr&&(!e.C[1]||4!=Fa(e)||2!=e.ba()))if(e.v&&4==Fa(e))Ki(e.Fa,0,e);else if(Di(e,"readystatechange"),4==Fa(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(js)[1]||null;if(!i&&gr.self&&gr.self.location){var s=gr.self.location.protocol;i=s.substr(0,s.length-1)}r=!Aa.test(i?i.toLowerCase():"")}n=r}if(n)Di(e,"complete"),Di(e,"success");else{e.m=6;try{var a=2<Fa(e)?e.g.statusText:""}catch(e){a=""}e.j=a+" ["+e.ba()+"]",Oa(e)}}finally{Ma(e)}}}function Ma(e,t){if(e.g){Ua(e);const n=e.g,r=e.C[0]?yr:null;e.g=null,e.C=null,t||Di(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Ua(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(gr.clearTimeout(e.A),e.A=null)}function Fa(e){return e.g?e.g.readyState:0}function Va(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case xa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ja(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return jr(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Ws(e,t,n))}function za(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ba(e){this.za=0,this.l=[],this.h=new Zi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=za("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=za("baseRetryDelayMs",5e3,e),this.$a=za("retryDelaySeedMs",1e4,e),this.Ya=za("forwardChannelMaxRetries",2,e),this.ra=za("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ua(e&&e.concurrentRequestLimit),this.Ca=new va,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function qa(e){if($a(e),3==e.G){var t=e.V++,n=Bs(e.F);Ws(n,"SID",e.J),Ws(n,"RID",t),Ws(n,"TYPE","terminate"),Qa(e,n),(t=new ws(e,e.h,t,void 0)).K=2,t.v=Gs(Bs(n)),n=!1,gr.navigator&&gr.navigator.sendBeacon&&(n=gr.navigator.sendBeacon(t.v.toString(),"")),!n&&gr.Image&&((new Image).src=t.v,n=!0),n||(t.g=oo(t.l,null),t.g.ea(t.v)),t.F=Date.now(),As(t)}so(e)}function Ha(e){e.g&&(Za(e),e.g.cancel(),e.g=null)}function $a(e){Ha(e),e.u&&(gr.clearTimeout(e.u),e.u=null),to(e),e.i.cancel(),e.m&&("number"==typeof e.m&&gr.clearTimeout(e.m),e.m=null)}function Ka(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Wa(e)}function Wa(e){ha(e.i)||e.m||(e.m=!0,ji(e.Ha,e),e.C=0)}function Ga(e,t){var n;n=t?t.m:e.V++;const r=Bs(e.F);Ws(r,"SID",e.J),Ws(r,"RID",n),Ws(r,"AID",e.U),Qa(e,r),e.o&&e.s&&ja(r,e.o,e.s),n=new ws(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Xa(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),pa(e.i,n),Ts(n,r,t)}function Qa(e,t){e.j&&Ms({},(function(e,n){Ws(t,n,e)}))}function Xa(e,t,n){n=Math.min(e.l.length,n);var r=e.j?_r(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const o=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),s=!1;else try{ba(o,e,"req"+n+"_")}catch(e){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Ya(e){e.g||e.u||(e.Y=1,ji(e.Ga,e),e.A=0)}function Ja(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=us(_r(e.Ga,e),ro(e,e.A)),e.A++,!0)}function Za(e){null!=e.B&&(gr.clearTimeout(e.B),e.B=null)}function eo(e){e.g=new ws(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Bs(e.oa);Ws(t,"RID","rpc"),Ws(t,"SID",e.J),Ws(t,"CI",e.N?"0":"1"),Ws(t,"AID",e.U),Qa(e,t),Ws(t,"TYPE","xmlhttp"),e.o&&e.s&&ja(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Gs(Bs(t)),n.s=null,n.U=!0,Is(n,e)}function to(e){null!=e.v&&(gr.clearTimeout(e.v),e.v=null)}function no(e,t){var n=null;if(e.g==t){to(e),Za(e),e.g=null;var r=2}else{if(!fa(e.i,t))return;n=t.D,ma(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;Di(r=rs(),new ls(r,n,t,i)),Wa(e)}else Ya(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(da(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=us(_r(e.Ha,e,t),ro(e,e.C)),e.C++,0)))}(e,t)||2==r&&Ja(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:io(e,5);break;case 4:io(e,10);break;case 3:io(e,6);break;default:io(e,2)}}function ro(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function io(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=_r(e.jb,e);n||(n=new zs("//www.google.com/images/cleardot.gif"),gr.location&&"http"==gr.location.protocol||qs(n,"https"),Gs(n)),function(e,t){const n=new Zi;if(gr.Image){const r=new Image;r.onload=Tr(wa,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Tr(wa,n,r,"TestLoadImage: error",!1,t),r.onabort=Tr(wa,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Tr(wa,n,r,"TestLoadImage: timeout",!1,t),gr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else os(2);e.G=0,e.j&&e.j.va(t),so(e),$a(e)}function so(e){e.G=0,e.I=-1,e.j&&(0==ga(e.i).length&&0==e.l.length||(e.i.i.length=0,Dr(e.l),e.l.length=0),e.j.ua())}function ao(e,t,n){let r=function(e){return e instanceof zs?Bs(e):new zs(e,void 0)}(n);if(""!=r.i)t&&Hs(r,t+"."+r.i),$s(r,r.m);else{const e=gr.location;r=function(e,t,n,r){var i=new zs(null,void 0);return e&&qs(i,e),t&&Hs(i,t),n&&$s(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&jr(e.aa,(function(e,t){Ws(r,t,e)})),t=e.D,n=e.sa,t&&n&&Ws(r,t,n),Ws(r,"VER",e.ma),Qa(e,r),r}function oo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Na(new Ea({ib:!0})):new Na(e.qa)).L=e.H,t}function lo(){}function uo(){if(Gr&&!(10<=Number(oi)))throw Error("Environmental error: no available transport.")}function co(e,t){Ri.call(this),this.g=new Ba(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Lr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Lr(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new po(this)}function ho(e){ys.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function fo(){vs.call(this),this.status=1}function po(e){this.g=e}(dr=Na.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ms.g(),this.C=this.u?fs(this.u):fs(ms),this.g.onreadystatechange=_r(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void La(this,e)}e=n||"";const i=new Us(this.headers);r&&Ms(r,(function(e,t){i.set(t,e)})),r=function(e){e:{var t=Da;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=gr.FormData&&e instanceof gr.FormData,!(0<=xr(Ra,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ua(this),0<this.B&&((this.K=function(e){return Gr&&si()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_r(this.pa,this)):this.A=Ki(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){La(this,e)}},dr.pa=function(){void 0!==mr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Di(this,"timeout"),this.abort(8))},dr.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Di(this,"complete"),Di(this,"abort"),Ma(this))},dr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ma(this,!0)),Na.Z.M.call(this)},dr.Fa=function(){this.s||(this.F||this.v||this.l?Pa(this):this.cb())},dr.cb=function(){Pa(this)},dr.ba=function(){try{return 2<Fa(this)?this.g.status:-1}catch(e){return-1}},dr.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},dr.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ca(t)}},dr.Da=function(){return this.m},dr.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(dr=Ba.prototype).ma=8,dr.G=1,dr.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},dr.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new ws(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=zr(s),qr(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Xa(this,i,t),Ws(n=Bs(this.F),"RID",e),Ws(n,"CVER",22),this.D&&Ws(n,"X-HTTP-Session-Id",this.D),Qa(this,n),this.o&&s&&ja(n,this.o,s),pa(this.i,i),this.Ra&&Ws(n,"TYPE","init"),this.ja?(Ws(n,"$req",t),Ws(n,"SID","null"),i.$=!0,Ts(i,n,null)):Ts(i,n,t),this.G=2}}else 3==this.G&&(e?Ga(this,e):0==this.l.length||ha(this.i)||Ga(this))},dr.Ga=function(){if(this.u=null,eo(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=us(_r(this.bb,this),e)}},dr.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,os(10),Ha(this),eo(this))},dr.ab=function(){null!=this.v&&(this.v=null,Ha(this),Ja(this),os(19))},dr.jb=function(e){e?(this.h.info("Successfully pinged google.com"),os(2)):(this.h.info("Failed to ping google.com"),os(1))},(dr=lo.prototype).xa=function(){},dr.wa=function(){},dr.va=function(){},dr.ua=function(){},dr.Oa=function(){},uo.prototype.g=function(e,t){return new co(e,t)},Ir(co,Ri),co.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),ji(_r(e.hb,e,t))),os(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=ao(e,null,e.W),Wa(e)},co.prototype.close=function(){qa(this.g)},co.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Ka(this.g,t)}else this.v?((t={}).__data__=Oi(e),Ka(this.g,t)):Ka(this.g,e)},co.prototype.M=function(){this.g.j=null,delete this.j,qa(this.g),delete this.g,co.Z.M.call(this)},Ir(ho,ys),Ir(fo,vs),Ir(po,lo),po.prototype.xa=function(){Di(this.g,"a")},po.prototype.wa=function(e){Di(this.g,new ho(e))},po.prototype.va=function(e){Di(this.g,new fo(e))},po.prototype.ua=function(){Di(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,co.prototype.send=co.prototype.u,co.prototype.open=co.prototype.m,co.prototype.close=co.prototype.close,cs.NO_ERROR=0,cs.TIMEOUT=8,cs.HTTP_ERROR=6,hs.COMPLETE="complete",ps.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",Ri.prototype.listen=Ri.prototype.N,Na.prototype.listenOnce=Na.prototype.O,Na.prototype.getLastError=Na.prototype.La,Na.prototype.getLastErrorCode=Na.prototype.Da,Na.prototype.getStatus=Na.prototype.ba,Na.prototype.getResponseJson=Na.prototype.Qa,Na.prototype.getResponseText=Na.prototype.ga,Na.prototype.send=Na.prototype.ea;var mo,go,yo=pr.createWebChannelTransport=function(){return new uo},vo=pr.getStatEventTarget=function(){return rs()},bo=pr.ErrorCode=cs,wo=pr.EventType=hs,Eo=pr.Event=ts,ko=pr.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},So=pr.FetchXmlHttpFactory=Ea,_o=pr.WebChannel=ps,To=pr.XhrIo=Na,Io={};function Co(){throw new Error("setTimeout has not been defined")}function No(){throw new Error("clearTimeout has not been defined")}function xo(e){if(mo===setTimeout)return setTimeout(e,0);if((mo===Co||!mo)&&setTimeout)return mo=setTimeout,setTimeout(e,0);try{return mo(e,0)}catch(t){try{return mo.call(null,e,0)}catch(t){return mo.call(this,e,0)}}}!function(){try{mo="function"==typeof setTimeout?setTimeout:Co}catch(e){mo=Co}try{go="function"==typeof clearTimeout?clearTimeout:No}catch(e){go=No}}();var Ao,Ro=[],Do=!1,Lo=-1;function Oo(){Do&&Ao&&(Do=!1,Ao.length?Ro=Ao.concat(Ro):Lo=-1,Ro.length&&Po())}function Po(){if(!Do){var e=xo(Oo);Do=!0;for(var t=Ro.length;t;){for(Ao=Ro,Ro=[];++Lo<t;)Ao&&Ao[Lo].run();Lo=-1,t=Ro.length}Ao=null,Do=!1,function(e){if(go===clearTimeout)return clearTimeout(e);if((go===No||!go)&&clearTimeout)return go=clearTimeout,clearTimeout(e);try{go(e)}catch(t){try{return go.call(null,e)}catch(t){return go.call(this,e)}}}(e)}}function Mo(e,t){this.fun=e,this.array=t}function Uo(){}Io.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Ro.push(new Mo(e,t)),1!==Ro.length||Do||xo(Po)},Mo.prototype.run=function(){this.fun.apply(null,this.array)},Io.title="browser",Io.browser=!0,Io.env={},Io.argv=[],Io.version="",Io.versions={},Io.on=Uo,Io.addListener=Uo,Io.once=Uo,Io.off=Uo,Io.removeListener=Uo,Io.removeAllListeners=Uo,Io.emit=Uo,Io.prependListener=Uo,Io.prependOnceListener=Uo,Io.listeners=function(e){return[]},Io.binding=function(e){throw new Error("process.binding is not supported")},Io.cwd=function(){return"/"},Io.chdir=function(e){throw new Error("process.chdir is not supported")},Io.umask=function(){return 0};
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
class Fo{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}Fo.UNAUTHENTICATED=new Fo(null),Fo.GOOGLE_CREDENTIALS=new Fo("google-credentials-uid"),Fo.FIRST_PARTY=new Fo("first-party-uid"),Fo.MOCK_USER=new Fo("mock-user");
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
let Vo="9.8.0";
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
 */const jo=new H("@firebase/firestore");function zo(){return jo.logLevel}function Bo(e,...t){if(jo.logLevel<=F.DEBUG){const n=t.map($o);jo.debug(`Firestore (${Vo}): ${e}`,...n)}}function qo(e,...t){if(jo.logLevel<=F.ERROR){const n=t.map($o);jo.error(`Firestore (${Vo}): ${e}`,...n)}}function Ho(e,...t){if(jo.logLevel<=F.WARN){const n=t.map($o);jo.warn(`Firestore (${Vo}): ${e}`,...n)}}function $o(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function Ko(e="Unexpected state"){const t=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: `+e;throw qo(t),new Error(t)}function Wo(e,t){e||Ko()}function Go(e,t){return e}
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
 */const Qo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Xo extends E{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Yo{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Jo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fo.UNAUTHENTICATED)))}shutdown(){}}class el{start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Yo;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yo,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{Bo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(Bo("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yo)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Bo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Wo("string"==typeof t.accessToken),new Jo(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Wo(null===e||"string"==typeof e),new Fo(e)}constructor(e){this.t=e,this.currentUser=Fo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class tl{constructor(e,t,n){this.type="FirstParty",this.user=Fo.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class nl{getToken(){return Promise.resolve(new tl(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Fo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class rl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class il{start(e,t){const n=e=>{null!=e.error&&Bo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Bo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Bo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):Bo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Wo("string"==typeof e.token),this.p=e.token,new rl(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
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
class sl{I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}}
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
 */function al(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */sl.A=-1;class ol{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=al(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function ll(e,t){return e<t?-1:e>t?1:0}function ul(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class cl{static now(){return cl.fromMillis(Date.now())}static fromDate(e){return cl.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new cl(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ll(this.nanoseconds,e.nanoseconds):ll(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Xo(Qo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Xo(Qo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Xo(Qo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Xo(Qo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
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
 */class hl{static fromTimestamp(e){return new hl(e)}static min(){return new hl(new cl(0,0))}static max(){return new hl(new cl(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
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
 */function dl(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function fl(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function pl(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class ml{get length(){return this.len}isEqual(e){return 0===ml.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ml?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&Ko(),void 0===n?n=e.length-t:n>e.length-t&&Ko(),this.segments=e,this.offset=t,this.len=n}}class gl extends ml{construct(e,t,n){return new gl(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Xo(Qo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new gl(t)}static emptyPath(){return new gl([])}}const yl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vl extends ml{construct(e,t,n){return new vl(e,t,n)}static isValidIdentifier(e){return yl.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vl.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new vl(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Xo(Qo.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Xo(Qo.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Xo(Qo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Xo(Qo.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vl(t)}static emptyPath(){return new vl([])}}
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
 */class bl{covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ul(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(vl.comparator)}}
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
 */let wl=Symbol.iterator;
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
 */class El{static fromBase64String(e){const t=atob(e);return new El(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new El(t)}[wl](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ll(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}El.EMPTY_BYTE_STRING=new El("");const kl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sl(e){if(Wo(!!e),"string"==typeof e){let t=0;const n=kl.exec(e);if(Wo(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:_l(e.seconds),nanos:_l(e.nanos)}}function _l(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Tl(e){return"string"==typeof e?El.fromBase64String(e):El.fromUint8Array(e)}
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
 */function Il(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Cl(e){const t=e.mapValue.fields.__previous_value__;return Il(t)?Cl(t):t}function Nl(e){const t=Sl(e.mapValue.fields.__local_write_time__.timestampValue);return new cl(t.seconds,t.nanos)}
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
 */class xl{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class Al{static empty(){return new Al("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Al&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
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
 */function Rl(e){return null==e}function Dl(e){return 0===e&&1/e==-1/0}function Ll(e){return"number"==typeof e&&Number.isInteger(e)&&!Dl(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */class Ol{static fromPath(e){return new Ol(gl.fromString(e))}static fromName(e){return new Ol(gl.fromString(e).popFirst(5))}static empty(){return new Ol(gl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===gl.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return gl.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ol(new gl(e.slice()))}constructor(e){this.path=e}}
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
 */const Pl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ml(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Il(e)?4:Xl(e)?9007199254740991:10:Ko()}function Ul(e,t){if(e===t)return!0;const n=Ml(e);if(n!==Ml(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Nl(e).isEqual(Nl(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Sl(e.timestampValue),r=Sl(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Tl(e.bytesValue).isEqual(Tl(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return _l(e.geoPointValue.latitude)===_l(t.geoPointValue.latitude)&&_l(e.geoPointValue.longitude)===_l(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return _l(e.integerValue)===_l(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=_l(e.doubleValue),r=_l(t.doubleValue);return n===r?Dl(n)===Dl(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ul(e.arrayValue.values||[],t.arrayValue.values||[],Ul);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(dl(n)!==dl(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Ul(n[e],r[e])))return!1;return!0}(e,t);default:return Ko()}var r}function Fl(e,t){return void 0!==(e.values||[]).find((e=>Ul(e,t)))}function Vl(e,t){if(e===t)return 0;const n=Ml(e),r=Ml(t);if(n!==r)return ll(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ll(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=_l(e.integerValue||e.doubleValue),r=_l(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return jl(e.timestampValue,t.timestampValue);case 4:return jl(Nl(e),Nl(t));case 5:return ll(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Tl(e),r=Tl(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=ll(n[e],r[e]);if(0!==t)return t}return ll(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ll(_l(e.latitude),_l(t.latitude));return 0!==n?n:ll(_l(e.longitude),_l(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Vl(n[e],r[e]);if(t)return t}return ll(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Pl.mapValue&&t===Pl.mapValue)return 0;if(e===Pl.mapValue)return 1;if(t===Pl.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=ll(r[e],s[e]);if(0!==t)return t;const a=Vl(n[r[e]],i[s[e]]);if(0!==a)return a}return ll(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Ko()}}function jl(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ll(e,t);const n=Sl(e),r=Sl(t),i=ll(n.seconds,r.seconds);return 0!==i?i:ll(n.nanos,r.nanos)}function zl(e){return Bl(e)}function Bl(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Sl(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Tl(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ol.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Bl(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Bl(e.fields[i])}`;return n+"}"}(e.mapValue):Ko()}function ql(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Hl(e){return!!e&&"integerValue"in e}function $l(e){return!!e&&"arrayValue"in e}function Kl(e){return!!e&&"nullValue"in e}function Wl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gl(e){return!!e&&"mapValue"in e}function Ql(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return fl(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ql(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ql(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Xl(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Yl{static empty(){return new Yl({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Gl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ql(t)}setAll(e){let t=vl.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ql(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Gl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ul(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Gl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){fl(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Yl(Ql(this.value))}constructor(e){this.value=e}}function Jl(e){const t=[];return fl(e.fields,((e,n)=>{const r=new vl([e]);if(Gl(n)){const e=Jl(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new bl(t)
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
 */}class Zl{static newInvalidDocument(e){return new Zl(e,0,hl.min(),hl.min(),Yl.empty(),0)}static newFoundDocument(e,t,n){return new Zl(e,1,t,hl.min(),n,0)}static newNoDocument(e,t){return new Zl(e,2,t,hl.min(),Yl.empty(),0)}static newUnknownDocument(e,t){return new Zl(e,3,t,hl.min(),Yl.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yl.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Zl&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zl(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}}class eu{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}eu.UNKNOWN_ID=-1;function tu(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=hl.fromTimestamp(1e9===r?new cl(n+1,0):new cl(n,r));return new ru(i,Ol.empty(),t)}function nu(e){return new ru(e.readTime,e.key,-1)}class ru{static min(){return new ru(hl.min(),Ol.empty(),-1)}static max(){return new ru(hl.max(),Ol.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function iu(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ol.comparator(e.documentKey,t.documentKey),0!==n?n:ll(e.largestBatchId,t.largestBatchId))}
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
 */class su{insert(e,t){return new su(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ou.BLACK,null,null))}remove(e){return new su(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ou.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new au(this.root,e,this.comparator,!1)}getReverseIterator(){return new au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new au(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||ou.EMPTY}}class au{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class ou{copy(e,t,n,r,i){return new ou(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ou.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ou.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ou.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ou.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ko();if(this.right.isRed())throw Ko();const e=this.left.check();if(e!==this.right.check())throw Ko();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ou.RED,this.left=null!=r?r:ou.EMPTY,this.right=null!=i?i:ou.EMPTY,this.size=this.left.size+1+this.right.size}}ou.EMPTY=null,ou.RED=!0,ou.BLACK=!1,ou.EMPTY=new class{get key(){throw Ko()}get value(){throw Ko()}get color(){throw Ko()}get left(){throw Ko()}get right(){throw Ko()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ou(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class lu{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uu(this.data.getIterator())}getIteratorFrom(e){return new uu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof lu))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new lu(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new su(this.comparator)}}class uu{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
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
class cu{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.P=null}}function hu(e,t=null,n=[],r=[],i=null,s=null,a=null){return new cu(e,t,n,r,i,s,a)}function du(e){const t=Go(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{var t;return(t=e).field.canonicalString()+t.op.toString()+zl(t.value)})).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Rl(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>zl(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>zl(e))).join(",")),t.P=e}return t.P}function fu(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Iu(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ul(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Nu(e.startAt,t.startAt)&&Nu(e.endAt,t.endAt)}function pu(e){return Ol.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class mu extends class{}{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new gu(e,t,n):"array-contains"===t?new wu(e,n):"in"===t?new Eu(e,n):"not-in"===t?new ku(e,n):"array-contains-any"===t?new Su(e,n):new mu(e,t,n)}static V(e,t,n){return"in"===t?new yu(e,n):new vu(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Vl(t,this.value)):null!==t&&Ml(this.value)===Ml(t)&&this.v(Vl(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ko()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class gu extends mu{matches(e){const t=Ol.comparator(e.key,this.key);return this.v(t)}constructor(e,t,n){super(e,t,n),this.key=Ol.fromName(n.referenceValue)}}class yu extends mu{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=bu("in",t)}}class vu extends mu{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=bu("not-in",t)}}function bu(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ol.fromName(e.referenceValue)))}class wu extends mu{matches(e){const t=e.data.field(this.field);return $l(t)&&Fl(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class Eu extends mu{matches(e){const t=e.data.field(this.field);return null!==t&&Fl(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class ku extends mu{matches(e){if(Fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Fl(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class Su extends mu{matches(e){const t=e.data.field(this.field);return!(!$l(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Fl(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}class _u{constructor(e,t){this.position=e,this.inclusive=t}}class Tu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Iu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Cu(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],a=e.position[i];if(r=s.field.isKeyField()?Ol.comparator(Ol.fromName(a.referenceValue),n.key):Vl(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Nu(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ul(e.position[n],t.position[n]))return!1;return!0}
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
 */class xu{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.D=null,this.C=null,this.startAt,this.endAt}}function Au(e,t,n,r,i,s,a,o){return new xu(e,t,n,r,i,s,a,o)}function Ru(e){return new xu(e)}function Du(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Lu(e){for(const t of e.filters)if(t.S())return t.field;return null}function Ou(e){return null!==e.collectionGroup}function Pu(e){const t=Go(e);if(null===t.D){t.D=[];const e=Lu(t),n=Du(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new Tu(e)),t.D.push(new Tu(vl.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Tu(vl.keyField(),e))}}}return t.D}function Mu(e){const t=Go(e);if(!t.C)if("F"===t.limitType)t.C=hu(t.path,t.collectionGroup,Pu(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Pu(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Tu(n.field,t))}const n=t.endAt?new _u(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _u(t.startAt.position,t.startAt.inclusive):null;t.C=hu(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function Uu(e,t,n){return new xu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Fu(e,t){return fu(Mu(e),Mu(t))&&e.limitType===t.limitType}function Vu(e){return`${du(Mu(e))}|lt:${e.limitType}`}function ju(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{var t;return`${(t=e).field.canonicalString()} ${t.op} ${zl(t.value)}`})).join(", ")}]`),Rl(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>zl(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>zl(e))).join(",")),`Target(${t})`}(Mu(e))}; limitType=${e.limitType})`}function zu(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ol.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Cu(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Pu(n),r)||n.endAt&&!function(e,t,n){const r=Cu(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Pu(n),r)));var n,r}function Bu(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function qu(e){return(t,n)=>{let r=!1;for(const i of Pu(e)){const e=Hu(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Hu(e,t,n){const r=e.field.isKeyField()?Ol.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Vl(r,i):Ko()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ko()}}
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
 */function $u(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dl(t)?"-0":t}}function Ku(e){return{integerValue:""+e}}function Wu(e,t){return Ll(t)?Ku(t):$u(e,t)}
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
 */class Gu{constructor(){this._=void 0}}function Qu(e,t,n){return e instanceof Ju?Zu(e,t):e instanceof ec?tc(e,t):n}function Xu(e,t){var n,r;return e instanceof nc?Hl(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}class Yu extends Gu{}class Ju extends Gu{constructor(e){super(),this.elements=e}}function Zu(e,t){const n=ic(t);for(const t of e.elements)n.some((e=>Ul(e,t)))||n.push(t);return{arrayValue:{values:n}}}class ec extends Gu{constructor(e){super(),this.elements=e}}function tc(e,t){let n=ic(t);for(const t of e.elements)n=n.filter((e=>!Ul(e,t)));return{arrayValue:{values:n}}}class nc extends Gu{constructor(e,t){super(),this.M=e,this.k=t}}function rc(e){return _l(e.integerValue||e.doubleValue)}function ic(e){return $l(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class sc{constructor(e,t){this.version=e,this.transformResults=t}}class ac{static none(){return new ac}static exists(e){return new ac(void 0,e)}static updateTime(e){return new ac(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function oc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class lc{}function uc(e,t,n){var r;e instanceof pc?function(e,t,n){const r=e.value.clone(),i=yc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof mc?function(e,t,n){if(!oc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=yc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(gc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function cc(e,t,n){var r;e instanceof pc?function(e,t,n){if(!oc(e.precondition,t))return;const r=e.value.clone(),i=vc(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(fc(t),r).setHasLocalMutations()}(e,t,n):e instanceof mc?function(e,t,n){if(!oc(e.precondition,t))return;const r=vc(e.fieldTransforms,n,t),i=t.data;i.setAll(gc(e)),i.setAll(r),t.convertToFoundDocument(fc(t),i).setHasLocalMutations()}(e,t,n):(r=t,oc(e.precondition,r)&&r.convertToNoDocument(hl.min()))}function hc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Xu(r.transform,e||null);null!=i&&(null==n&&(n=Yl.empty()),n.set(r.field,i))}return n||null}function dc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&ul(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Ju&&r instanceof Ju||n instanceof ec&&r instanceof ec?ul(n.elements,r.elements,Ul):n instanceof nc&&r instanceof nc?Ul(n.k,r.k):n instanceof Yu&&r instanceof Yu);var n,r}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}function fc(e){return e.isFoundDocument()?e.version:hl.min()}class pc extends lc{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class mc extends lc{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function gc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function yc(e,t,n){const r=new Map;Wo(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],a=s.transform,o=t.data.field(s.field);r.set(s.field,Qu(a,o,n[i]))}return r}function vc(e,t,n){const r=new Map;for(const o of e){const e=o.transform,l=n.data.field(o.field);r.set(o.field,(s=l,a=t,(i=e)instanceof Yu?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(a,s):i instanceof Ju?Zu(i,s):i instanceof ec?tc(i,s):function(e,t){const n=Xu(e,t),r=rc(n)+rc(e.k);return Hl(n)&&Hl(e.k)?Ku(r):$u(e.M,r)}(i,s)))}var i,s,a;return r}class bc extends lc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class wc extends lc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */class Ec{constructor(e){this.count=e}}
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
 */var kc,Sc;function _c(e){switch(e){default:return Ko();case Qo.CANCELLED:case Qo.UNKNOWN:case Qo.DEADLINE_EXCEEDED:case Qo.RESOURCE_EXHAUSTED:case Qo.INTERNAL:case Qo.UNAVAILABLE:case Qo.UNAUTHENTICATED:return!1;case Qo.INVALID_ARGUMENT:case Qo.NOT_FOUND:case Qo.ALREADY_EXISTS:case Qo.PERMISSION_DENIED:case Qo.FAILED_PRECONDITION:case Qo.ABORTED:case Qo.OUT_OF_RANGE:case Qo.UNIMPLEMENTED:case Qo.DATA_LOSS:return!0}}function Tc(e){if(void 0===e)return qo("GRPC error has no .code"),Qo.UNKNOWN;switch(e){case kc.OK:return Qo.OK;case kc.CANCELLED:return Qo.CANCELLED;case kc.UNKNOWN:return Qo.UNKNOWN;case kc.DEADLINE_EXCEEDED:return Qo.DEADLINE_EXCEEDED;case kc.RESOURCE_EXHAUSTED:return Qo.RESOURCE_EXHAUSTED;case kc.INTERNAL:return Qo.INTERNAL;case kc.UNAVAILABLE:return Qo.UNAVAILABLE;case kc.UNAUTHENTICATED:return Qo.UNAUTHENTICATED;case kc.INVALID_ARGUMENT:return Qo.INVALID_ARGUMENT;case kc.NOT_FOUND:return Qo.NOT_FOUND;case kc.ALREADY_EXISTS:return Qo.ALREADY_EXISTS;case kc.PERMISSION_DENIED:return Qo.PERMISSION_DENIED;case kc.FAILED_PRECONDITION:return Qo.FAILED_PRECONDITION;case kc.ABORTED:return Qo.ABORTED;case kc.OUT_OF_RANGE:return Qo.OUT_OF_RANGE;case kc.UNIMPLEMENTED:return Qo.UNIMPLEMENTED;case kc.DATA_LOSS:return Qo.DATA_LOSS;default:return Ko()}}(Sc=kc||(kc={}))[Sc.OK=0]="OK",Sc[Sc.CANCELLED=1]="CANCELLED",Sc[Sc.UNKNOWN=2]="UNKNOWN",Sc[Sc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Sc[Sc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Sc[Sc.NOT_FOUND=5]="NOT_FOUND",Sc[Sc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Sc[Sc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Sc[Sc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Sc[Sc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Sc[Sc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Sc[Sc.ABORTED=10]="ABORTED",Sc[Sc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Sc[Sc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Sc[Sc.INTERNAL=13]="INTERNAL",Sc[Sc.UNAVAILABLE=14]="UNAVAILABLE",Sc[Sc.DATA_LOSS=15]="DATA_LOSS";
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
class Ic{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){fl(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return pl(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
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
 */const Cc=new su(Ol.comparator);function Nc(){return Cc}const xc=new su(Ol.comparator);function Ac(...e){let t=xc;for(const n of e)t=t.insert(n.key,n);return t}function Rc(){return new Ic((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Dc=new su(Ol.comparator),Lc=new lu(Ol.comparator);function Oc(...e){let t=Lc;for(const n of e)t=t.add(n);return t}const Pc=new lu(ll);function Mc(){return Pc}
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
 */class Uc{static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Fc.createSynthesizedTargetChangeForCurrentChange(e,t)),new Uc(hl.min(),n,Mc(),Nc(),Oc())}constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class Fc{static createSynthesizedTargetChangeForCurrentChange(e,t){return new Fc(El.EMPTY_BYTE_STRING,t,Oc(),Oc(),Oc())}constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
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
 */class Vc{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class jc{constructor(e,t){this.targetId=e,this.$=t}}class zc{constructor(e,t,n=El.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Bc{get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Oc(),t=Oc(),n=Oc();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ko()}})),new Fc(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=$c()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}constructor(){this.B=0,this.L=$c(),this.U=El.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}}class qc{ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Ko()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(pu(e))if(0===n){const n=new Ol(e.path);this.ct(t,n,Zl.newNoDocument(n,hl.min()))}else Wo(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&pu(i.target)){const t=new Ol(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,Zl.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}}));let n=Oc();this.rt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const r=new Uc(e,t,this.ot,this.it,n);return this.it=Nc(),this.rt=Hc(),this.ot=new lu(ll),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Bc,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new lu(ll),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||Bo("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Bc),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}constructor(e){this.nt=e,this.st=new Map,this.it=Nc(),this.rt=Hc(),this.ot=new lu(ll)}}function Hc(){return new su(Ol.comparator)}function $c(){return new su(Ol.comparator)}
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
 */const Kc={asc:"ASCENDING",desc:"DESCENDING"},Wc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Gc{constructor(e,t){this.databaseId=e,this.N=t}}function Qc(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xc(e,t){return e.N?t.toBase64():t.toUint8Array()}function Yc(e,t){return Qc(e,t.toTimestamp())}function Jc(e){return Wo(!!e),hl.fromTimestamp(function(e){const t=Sl(e);return new cl(t.seconds,t.nanos)}(e))}function Zc(e,t){return(n=e,new gl(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function eh(e){const t=gl.fromString(e);return Wo(bh(t)),t}function th(e,t){return Zc(e.databaseId,t.path)}function nh(e,t){const n=eh(t);if(n.get(1)!==e.databaseId.projectId)throw new Xo(Qo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Xo(Qo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ol(ah(n))}function rh(e,t){return Zc(e.databaseId,t)}function ih(e){const t=eh(e);return 4===t.length?gl.emptyPath():ah(t)}function sh(e){return new gl(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ah(e){return Wo(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function oh(e,t,n){return{name:th(e,t),fields:n.value.mapValue.fields}}function lh(e,t){let n;if(t instanceof pc)n={update:oh(e,t.key,t.value)};else if(t instanceof bc)n={delete:th(e,t.key)};else if(t instanceof mc)n={update:oh(e,t.key,t.data),updateMask:vh(t.fieldMask)};else{if(!(t instanceof wc))return Ko();n={verify:th(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Yu)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ju)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ec)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof nc)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Ko()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Yc(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Ko())),n;var r,i}function uh(e,t){return{documents:[rh(e,t.path)]}}function ch(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=rh(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=rh(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Wl(e.value))return{unaryFilter:{field:mh(e.field),op:"IS_NAN"}};if(Kl(e.value))return{unaryFilter:{field:mh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Wl(e.value))return{unaryFilter:{field:mh(e.field),op:"IS_NOT_NAN"}};if(Kl(e.value))return{unaryFilter:{field:mh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mh(e.field),op:ph(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:mh((t=e).field),direction:fh(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const a=(o=e,l=t.limit,o.N||Rl(l)?l:{value:l});var o,l,u;return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function hh(e){let t=ih(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Wo(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=dh(n.where));let a=[];n.orderBy&&(a=n.orderBy.map((e=>{return new Tu(gh((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,Rl(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new _u(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new _u(n,t)}(n.endAt)),Au(t,i,a,s,o,"F",l,u)}function dh(e){return e?void 0!==e.unaryFilter?[yh(e)]:void 0!==e.fieldFilter?[(t=e,mu.create(gh(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ko()}}(t.fieldFilter.op),t.fieldFilter.value))]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>dh(e))).reduce(((e,t)=>e.concat(t))):Ko():[];var t}function fh(e){return Kc[e]}function ph(e){return Wc[e]}function mh(e){return{fieldPath:e.canonicalString()}}function gh(e){return vl.fromServerFormat(e.fieldPath)}function yh(e){switch(e.unaryFilter.op){case"IS_NAN":const t=gh(e.unaryFilter.field);return mu.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=gh(e.unaryFilter.field);return mu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gh(e.unaryFilter.field);return mu.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gh(e.unaryFilter.field);return mu.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ko()}}function vh(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function bh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */const wh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Eh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],kh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
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
 */class Sh{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
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
 */class _h{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ko(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _h(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof _h?t:_h.resolve(t)}catch(e){return _h.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):_h.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):_h.reject(t)}static resolve(e){return new _h(((t,n)=>{t(e)}))}static reject(e){return new _h(((t,n)=>{n(e)}))}static waitFor(e){return new _h(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=_h.resolve(!1);for(const n of e)t=t.next((e=>e?_h.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
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
 */function Th(e){return"IndexedDbTransactionError"===e.name}
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
class Ih{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&uc(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&cc(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&cc(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(hl.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oc())}isEqual(e){return this.batchId===e.batchId&&ul(this.mutations,e.mutations,((e,t)=>dc(e,t)))&&ul(this.baseMutations,e.baseMutations,((e,t)=>dc(e,t)))}constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}}class Ch{static from(e,t,n){Wo(e.mutations.length===n.length);let r=Dc;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Ch(e,t,n,r)}constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}}
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
 */class Nh{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
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
 */class xh{withSequenceNumber(e){return new xh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new xh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new xh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}constructor(e,t,n,r,i=hl.min(),s=hl.min(),a=El.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}}
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
 */class Ah{constructor(e){this.Jt=e}}function Rh(e){const t=hh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Uu(t,t.limit,"L"):t}
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
 */class Dh{Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(_l(e.integerValue));else if("doubleValue"in e){const n=_l(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),Dl(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(Tl(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?Xl(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):Ko()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const e of Object.keys(n))this.re(e,t),this.te(n[e],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const e of n)this.te(e,t)}ae(e,t){this.ne(t,37),Ol.fromName(e).path.forEach((e=>{this.ne(t,60),this.le(e,t)}))}ne(e,t){e.se(t)}oe(e){e.se(2)}constructor(){}}Dh.fe=new Dh;
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
class Lh{addToCollectionParentIndex(e,t){return this.qe.add(t),_h.resolve()}getCollectionParents(e,t){return _h.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return _h.resolve()}deleteFieldIndex(e,t){return _h.resolve()}getDocumentsMatchingTarget(e,t){return _h.resolve(null)}getIndexType(e,t){return _h.resolve(0)}getFieldIndexes(e,t){return _h.resolve([])}getNextCollectionGroupToUpdate(e){return _h.resolve(null)}getMinOffset(e,t){return _h.resolve(ru.min())}updateCollectionGroup(e,t,n){return _h.resolve()}updateIndexEntries(e,t){return _h.resolve()}constructor(){this.qe=new Oh}}class Oh{add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new lu(gl.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new lu(gl.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class Ph{static withCacheSize(e){return new Ph(e,Ph.DEFAULT_COLLECTION_PERCENTILE,Ph.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
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
 */Ph.DEFAULT_COLLECTION_PERCENTILE=10,Ph.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ph.DEFAULT=new Ph(41943040,Ph.DEFAULT_COLLECTION_PERCENTILE,Ph.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ph.DISABLED=new Ph(-1,0,0);
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
class Mh{next(){return this.mn+=2,this.mn}static gn(){return new Mh(0)}static yn(){return new Mh(-1)}constructor(e){this.mn=e}}
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
async function Uh(e){if(e.code!==Qo.FAILED_PRECONDITION||e.message!==kh)throw e;Bo("LocalStore","Unexpectedly lost primary lease")}
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
class Fh{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zl.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?_h.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new Ic((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
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
class Vh{Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Us(e,t,n)))}Us(e,t,n){return this.ds.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}qs(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}Ks(e,t){return this.ds.getEntries(e,t).next((t=>this.Gs(e,t).next((()=>t))))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.qs(t,e)))}Qs(e,t,n){return r=t,Ol.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.js(e,t.path):Ou(t)?this.Ws(e,t,n):this.zs(e,t,n);var r}js(e,t){return this.Ls(e,new Ol(t)).next((e=>{let t=Ac();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Ws(e,t,n){const r=t.collectionGroup;let i=Ac();return this.indexManager.getCollectionParents(e,r).next((s=>_h.forEach(s,(s=>{const a=(o=t,l=s.child(r),new xu(l,null,o.explicitOrderBy.slice(),o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt));var o,l;return this.zs(e,a,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}zs(e,t,n){let r;return this.ds.getAllFromCollection(e,t.path,n).next((n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Zl.newInvalidDocument(n),r=r.insert(n,i)),cc(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((e,n)=>{zu(t,n)||(r=r.remove(e))})),r)))}constructor(e,t,n){this.ds=e,this.Bs=t,this.indexManager=n}}
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
 */class jh{static Ys(e,t){let n=Oc(),r=Oc();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new jh(e,t.fromCache,n,r)}constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hs=n,this.Js=r}}
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
 */class zh{initialize(e,t){this.Zs=e,this.indexManager=t,this.Xs=!0}Qs(e,t,n,r){return this.ti(e,t).next((i=>i||this.ei(e,t,r,n))).next((n=>n||this.ni(e,t)))}ti(e,t){return _h.resolve(null)}ei(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||r.isEqual(hl.min())?this.ni(e,t):this.Zs.Ks(e,n).next((i=>{const s=this.si(t,i);return this.ii(t,s,n,r)?this.ni(e,t):(zo()<=F.DEBUG&&Bo("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ju(t)),this.ri(e,s,t,tu(r,-1)))}))}si(e,t){let n=new lu(qu(e));return t.forEach(((t,r)=>{zu(e,r)&&(n=n.add(r))})),n}ii(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(e,t){return zo()<=F.DEBUG&&Bo("QueryEngine","Using full collection scan to execute query:",ju(t)),this.Zs.Qs(e,t,ru.min())}ri(e,t,n,r){return this.Zs.Qs(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.Xs=!1}}
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
 */class Bh{li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new Vh(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ui)))}constructor(e,t,n,r){this.persistence=e,this.oi=t,this.M=r,this.ui=new su(ll),this.ai=new Ic((e=>du(e)),fu),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(n)}}function qh(e,t,n,r){return new Bh(e,t,n,r)}async function Hh(e,t){const n=Go(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.Bs.getAllMutationBatches(e).next((i=>(r=i,n.li(t),n.Bs.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let a=Oc();for(const e of r){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.fi.Ks(e,a).next((e=>({di:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function $h(e){const t=Go(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.fs.getLastRemoteSnapshotVersion(e)))}function Kh(e,t,n){let r=Oc();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Nc();return n.forEach(((n,i)=>{const s=e.get(n);i.isNoDocument()&&i.version.isEqual(hl.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Bo("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)})),r}))}function Wh(e,t){const n=Go(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(e,t))))}function Gh(e,t){const n=Go(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.fs.getTargetData(e,t).next((i=>i?(r=i,_h.resolve(r)):n.fs.allocateTargetId(e).next((i=>(r=new xh(t,i,0,e.currentSequenceNumber),n.fs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(e.targetId,e),n.ai.set(t,e.targetId)),e}))}async function Qh(e,t,n){const r=Go(e),i=r.ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Th(e))throw e;Bo("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ui=r.ui.remove(t),r.ai.delete(i.target)}function Xh(e,t,n){const r=Go(e);let i=hl.min(),s=Oc();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Go(e),i=r.ai.get(n);return void 0!==i?_h.resolve(r.ui.get(i)):r.fs.getTargetData(t,n)}(r,e,Mu(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.oi.Qs(e,t,n?i:hl.min(),n?s:Oc()))).next((e=>(Yh(r,Bu(t),e),{documents:e,_i:s})))))}function Yh(e,t,n){let r=hl.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ci.set(t,r)}
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
class Jh{getBundleMetadata(e,t){return _h.resolve(this.yi.get(t))}saveBundleMetadata(e,t){var n;return this.yi.set(t.id,{id:(n=t).id,version:n.version,createTime:Jc(n.createTime)}),_h.resolve()}getNamedQuery(e,t){return _h.resolve(this.pi.get(t))}saveNamedQuery(e,t){return this.pi.set(t.name,{name:(n=t).name,query:Rh(n.bundledQuery),readTime:Jc(n.readTime)}),_h.resolve();var n}constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}}
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
 */class Zh{getOverlay(e,t){return _h.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Xt(e,t,r)})),_h.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ii.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ii.delete(n)),_h.resolve()}getOverlaysForCollection(e,t,n){const r=Rc(),i=t.length+1,s=new Ol(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return _h.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new su(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Rc(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=Rc(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach(((e,t)=>a.set(e,t))),!(a.size()>=r)););return _h.resolve(a)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.Ii.get(r.largestBatchId).delete(n.key);this.Ii.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Nh(t,n));let i=this.Ii.get(t);void 0===i&&(i=Oc(),this.Ii.set(t,i)),this.Ii.set(t,i.add(n.key))}constructor(){this.overlays=new su(Ol.comparator),this.Ii=new Map}}
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
 */class ed{isEmpty(){return this.Ti.isEmpty()}addReference(e,t){const n=new td(e,t);this.Ti=this.Ti.add(n),this.Ai=this.Ai.add(n)}bi(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Pi(new td(e,t))}Vi(e,t){e.forEach((e=>this.removeReference(e,t)))}vi(e){const t=new Ol(new gl([])),n=new td(t,e),r=new td(t,e+1),i=[];return this.Ai.forEachInRange([n,r],(e=>{this.Pi(e),i.push(e.key)})),i}Si(){this.Ti.forEach((e=>this.Pi(e)))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const t=new Ol(new gl([])),n=new td(t,e),r=new td(t,e+1);let i=Oc();return this.Ai.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new td(e,0),n=this.Ti.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.Ti=new lu(td.Ei),this.Ai=new lu(td.Ri)}}class td{static Ei(e,t){return Ol.comparator(e.key,t.key)||ll(e.Ci,t.Ci)}static Ri(e,t){return ll(e.Ci,t.Ci)||Ol.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.Ci=t}}
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
 */class nd{checkEmpty(e){return _h.resolve(0===this.Bs.length)}addMutationBatch(e,t,n,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const s=new Ih(i,t,n,r);this.Bs.push(s);for(const t of r)this.Ni=this.Ni.add(new td(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return _h.resolve(s)}lookupMutationBatch(e,t){return _h.resolve(this.ki(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Mi(n),i=r<0?0:r;return _h.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return _h.resolve(0===this.Bs.length?-1:this.xi-1)}getAllMutationBatches(e){return _h.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new td(t,0),r=new td(t,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([n,r],(e=>{const t=this.ki(e.Ci);i.push(t)})),_h.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new lu(ll);return t.forEach((e=>{const t=new td(e,0),r=new td(e,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([t,r],(e=>{n=n.add(e.Ci)}))})),_h.resolve(this.Oi(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ol.isDocumentKey(i)||(i=i.child(""));const s=new td(new Ol(i),0);let a=new lu(ll);return this.Ni.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Ci)),!0)}),s),_h.resolve(this.Oi(a))}Oi(e){const t=[];return e.forEach((e=>{const n=this.ki(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Wo(0===this.Fi(t.batchId,"removed")),this.Bs.shift();let n=this.Ni;return _h.forEach(t.mutations,(r=>{const i=new td(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Ni=n}))}_n(e){}containsKey(e,t){const n=new td(t,0),r=this.Ni.firstAfterOrEqual(n);return _h.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,_h.resolve()}Fi(e,t){return this.Mi(e)}Mi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}ki(e){const t=this.Mi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.xi=1,this.Ni=new lu(td.Ei)}}
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
 */class rd{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.$i(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return _h.resolve(n?n.document.mutableCopy():Zl.newInvalidDocument(t))}getEntries(e,t){let n=Nc();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Zl.newInvalidDocument(e))})),_h.resolve(n)}getAllFromCollection(e,t,n){let r=Nc();const i=new Ol(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||iu(nu(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return _h.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Ko()}Bi(e,t){return _h.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new id(this)}getSize(e){return _h.resolve(this.size)}constructor(e){this.$i=e,this.docs=new su(Ol.comparator),this.size=0}}class id extends Fh{applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(n)})),_h.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}constructor(e){super(),this.Kn=e}}
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
 */class sd{forEachTarget(e,t){return this.Li.forEach(((e,n)=>t(n))),_h.resolve()}getLastRemoteSnapshotVersion(e){return _h.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _h.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),_h.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ui&&(this.Ui=t),_h.resolve()}Tn(e){this.Li.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ki=new Mh(t),this.highestTargetId=t),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,_h.resolve()}updateTargetData(e,t){return this.Tn(t),_h.resolve()}removeTargetData(e,t){return this.Li.delete(t.target),this.qi.vi(t.targetId),this.targetCount-=1,_h.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Li.forEach(((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Li.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),_h.waitFor(i).next((()=>r))}getTargetCount(e){return _h.resolve(this.targetCount)}getTargetData(e,t){const n=this.Li.get(t)||null;return _h.resolve(n)}addMatchingKeys(e,t,n){return this.qi.bi(t,n),_h.resolve()}removeMatchingKeys(e,t,n){this.qi.Vi(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),_h.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qi.vi(t),_h.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qi.Di(t);return _h.resolve(n)}containsKey(e,t){return _h.resolve(this.qi.containsKey(t))}constructor(e){this.persistence=e,this.Li=new Ic((e=>du(e)),fu),this.lastRemoteSnapshotVersion=hl.min(),this.highestTargetId=0,this.Ui=0,this.qi=new ed,this.targetCount=0,this.Ki=Mh.gn()}}
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
 */class ad{start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Gi[e.toKey()];return n||(n=new nd(t,this.referenceDelegate),this.Gi[e.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,n){Bo("MemoryPersistence","Starting transaction:",e);const r=new od(this.es.next());return this.referenceDelegate.ji(),n(r).next((e=>this.referenceDelegate.Wi(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}zi(e,t){return _h.or(Object.values(this.Gi).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.Gi={},this.overlays={},this.es=new sl(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new sd(this),this.indexManager=new Lh,this.ds=new rd((e=>this.referenceDelegate.Qi(e))),this.M=new Ah(t),this._s=new Jh(this.M)}}class od extends Sh{constructor(e){super(),this.currentSequenceNumber=e}}class ld{static Yi(e){return new ld(e)}get Xi(){if(this.Ji)return this.Ji;throw Ko()}addReference(e,t,n){return this.Hi.addReference(n,t),this.Xi.delete(n.toString()),_h.resolve()}removeReference(e,t,n){return this.Hi.removeReference(n,t),this.Xi.add(n.toString()),_h.resolve()}markPotentiallyOrphaned(e,t){return this.Xi.add(t.toString()),_h.resolve()}removeTarget(e,t){this.Hi.vi(t.targetId).forEach((e=>this.Xi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ji(){this.Ji=new Set}Wi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _h.forEach(this.Xi,(n=>{const r=Ol.fromPath(n);return this.Zi(e,r).next((e=>{e||t.removeEntry(r,hl.min())}))})).next((()=>(this.Ji=null,t.apply(e))))}updateLimboDocument(e,t){return this.Zi(e,t).next((e=>{e?this.Xi.delete(t.toString()):this.Xi.add(t.toString())}))}Qi(e){return 0}Zi(e,t){return _h.or([()=>_h.resolve(this.Hi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zi(e,t)])}constructor(e){this.persistence=e,this.Hi=new ed,this.Ji=null}}
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
 */class ud{nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=Mc()}}class cd{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new ud,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Ur=new ud,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class hd{Kr(e){}shutdown(){}}
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
 */class dd{Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){Bo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){Bo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}}
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
 */const fd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class pd{Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}}
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
 */class md extends class{co(e,t,n,r,i){const s=this.ho(e,t);Bo("RestConnection","Sending: ",s,n);const a={};return this.lo(a,r,i),this.fo(e,s,a,n).then((e=>(Bo("RestConnection","Received: ",e),e)),(t=>{throw Ho("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,r,i){return this.co(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=fd[e];return`${this.uo}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.uo=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(e,t,n,r){return new Promise(((i,s)=>{const a=new To;a.listenOnce(wo.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case bo.NO_ERROR:const t=a.getResponseJson();Bo("Connection","XHR received:",JSON.stringify(t)),i(t);break;case bo.TIMEOUT:Bo("Connection",'RPC "'+e+'" timed out'),s(new Xo(Qo.DEADLINE_EXCEEDED,"Request time out"));break;case bo.HTTP_ERROR:const n=a.getStatus();if(Bo("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){const e=a.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Qo).indexOf(t)>=0?t:Qo.UNKNOWN}(e.status);s(new Xo(t,e.message))}else s(new Xo(Qo.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new Xo(Qo.UNAVAILABLE,"Connection failed."));break;default:Ko()}}finally{Bo("Connection",'RPC "'+e+'" completed.')}}));const o=JSON.stringify(r);a.send(t,"POST",o,n,15)}))}wo(e,t,n){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=yo(),s=vo(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new So({})),this.lo(a.initMessageHeaders,t,n),g()||v()||m().indexOf("Electron/")>=0||b()||m().indexOf("MSAppHost/")>=0||y()||(a.httpHeadersOverwriteParam="$httpHeaders");const o=r.join("");Bo("Connection","Creating WebChannel: "+o,a);const l=i.createWebChannel(o,a);let u=!1,c=!1;const h=new pd({Jr:e=>{c?Bo("Connection","Not sending because WebChannel is closed:",e):(u||(Bo("Connection","Opening WebChannel transport."),l.open(),u=!0),Bo("Connection","WebChannel sending:",e),l.send(e))},Yr:()=>l.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(l,_o.EventType.OPEN,(()=>{c||Bo("Connection","WebChannel transport opened.")})),d(l,_o.EventType.CLOSE,(()=>{c||(c=!0,Bo("Connection","WebChannel transport closed"),h.ro())})),d(l,_o.EventType.ERROR,(e=>{c||(c=!0,Ho("Connection","WebChannel transport errored:",e),h.ro(new Xo(Qo.UNAVAILABLE,"The operation could not be completed")))})),d(l,_o.EventType.MESSAGE,(e=>{var t;if(!c){const n=e.data[0];Wo(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Bo("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=kc[e];if(void 0!==t)return Tc(t)}(e),n=i.message;void 0===t&&(t=Qo.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),c=!0,h.ro(new Xo(t,n)),l.close()}else Bo("Connection","WebChannel received:",n),h.oo(n)}})),d(s,Eo.STAT_EVENT,(e=>{e.stat===ko.PROXY?Bo("Connection","Detected buffering proxy"):e.stat===ko.NOPROXY&&Bo("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.io()}),0),h}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}}
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
 */function gd(){return"undefined"!=typeof document?document:null}
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
 */function yd(e){return new Gc(e,!0)}class vd{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Bo("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(e,t,n=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
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
 */class bd{ko(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&null===this.Co&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,(()=>this.Bo())))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,t){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==e?this.No.reset():t&&t.code===Qo.RESOURCE_EXHAUSTED?(qo(t.toString()),qo("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):t&&t.code===Qo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(t)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),t=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Do===t&&this.Qo(e,n)}),(t=>{e((()=>{const e=new Xo(Qo.UNKNOWN,"Fetching auth token failed: "+t.message);return this.jo(e)}))}))}Qo(e,t){const n=this.Go(this.Do);this.stream=this.Wo(e,t),this.stream.Xr((()=>{n((()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.eo((e=>{n((()=>this.jo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(e){return Bo("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return t=>{this.Yn.enqueueAndForget((()=>this.Do===e?t():(Bo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,r,i,s,a,o){this.Yn=e,this.Vo=n,this.vo=r,this.So=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new vd(e,t)}}class wd extends bd{Wo(e,t){return this.So.wo("Listen",e,t)}onMessage(e){this.No.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Ko(),s=t.targetChange.targetIds||[],a=function(e,t){return e.N?(Wo(void 0===t||"string"==typeof t),El.fromBase64String(t||"")):(Wo(void 0===t||t instanceof Uint8Array),El.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(e){const t=void 0===e.code?Qo.UNKNOWN:Tc(e.code);return new Xo(t,e.message||"")}(o);n=new zc(i,s,a,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=nh(e,r.document.name),s=Jc(r.document.updateTime),a=new Yl({mapValue:{fields:r.document.fields}}),o=Zl.newFoundDocument(i,s,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Vc(l,u,o.key,o)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=nh(e,r.document),s=r.readTime?Jc(r.readTime):hl.min(),a=Zl.newNoDocument(i,s),o=r.removedTargetIds||[];n=new Vc([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=nh(e,r.document),s=r.removedTargetIds||[];n=new Vc([],s,i,null)}else{if(!("filter"in t))return Ko();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Ec(r),s=e.targetId;n=new jc(s,i)}}var r;return n}(this.M,e),n=function(e){if(!("targetChange"in e))return hl.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?hl.min():t.readTime?Jc(t.readTime):hl.min()}(e);return this.listener.zo(t,n)}Ho(e){const t={};t.database=sh(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=pu(r)?{documents:uh(e,r)}:{query:ch(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Xc(e,t.resumeToken):t.snapshotVersion.compareTo(hl.min())>0&&(n.readTime=Qc(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ko()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.M,e);n&&(t.labels=n),this.Lo(t)}Jo(e){const t={};t.database=sh(this.M),t.removeTarget=e,this.Lo(t)}constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.M=i}}class Ed extends bd{get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,t){return this.So.wo("Write",e,t)}onMessage(e){if(Wo(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(Wo(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?Jc(e.updateTime):Jc(t);return n.isEqual(hl.min())&&(n=Jc(t)),new sc(n,e.transformResults||[])}(e,n)))):[]),i=Jc(e.commitTime);return this.listener.tu(i,r)}var t,n;return Wo(!e.writeResults||0===e.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=sh(this.M),this.Lo(e)}Zo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>lh(this.M,e)))};this.Lo(t)}constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.M=i,this.Yo=!1}}
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
 */class kd extends class{}{iu(){if(this.su)throw new Xo(Qo.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So.co(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Qo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Xo(Qo.UNKNOWN,e.toString())}))}_o(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So._o(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Qo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Xo(Qo.UNKNOWN,e.toString())}))}terminate(){this.su=!0}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.So=n,this.M=r,this.su=!1}}class Sd{au(){0===this.ru&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}lu(e){"Online"===this.state?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,"Online"===e&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(qo(t),this.uu=!1):Bo("OnlineStateTracker",t)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}}
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
 */class _d{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr((e=>{n.enqueueAndForget((async()=>{Ld(this)&&(Bo("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Go(e);t.wu.add(4),await Id(t),t.yu.set("Unknown"),t.wu.delete(4),await Td(t)}(this))}))})),this.yu=new Sd(n,r)}}async function Td(e){if(Ld(e))for(const t of e.mu)await t(!0)}async function Id(e){for(const t of e.mu)await t(!1)}function Cd(e,t){const n=Go(e);n._u.has(t.targetId)||(n._u.set(t.targetId,t),Dd(n)?Rd(n):Yd(n).Mo()&&xd(n,t))}function Nd(e,t){const n=Go(e),r=Yd(n);n._u.delete(t),r.Mo()&&Ad(n,t),0===n._u.size&&(r.Mo()?r.$o():Ld(n)&&n.yu.set("Unknown"))}function xd(e,t){e.pu.Z(t.targetId),Yd(e).Ho(t)}function Ad(e,t){e.pu.Z(t),Yd(e).Jo(t)}function Rd(e){e.pu=new qc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e._u.get(t)||null}),Yd(e).start(),e.yu.au()}function Dd(e){return Ld(e)&&!Yd(e).ko()&&e._u.size>0}function Ld(e){return 0===Go(e).wu.size}function Od(e){e.pu=void 0}async function Pd(e){e._u.forEach(((t,n)=>{xd(e,t)}))}async function Md(e,t){Od(e),Dd(e)?(e.yu.lu(t),Rd(e)):e.yu.set("Unknown")}async function Ud(e,t,n){if(e.yu.set("Online"),t instanceof zc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e._u.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e._u.delete(r),e.pu.removeTarget(r))}(e,t)}catch(n){Bo("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Fd(e,n)}else if(t instanceof Vc?e.pu.ut(t):t instanceof jc?e.pu._t(t):e.pu.ht(t),!n.isEqual(hl.min()))try{const t=await $h(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.pu.yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e._u.get(r);i&&e._u.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e._u.get(t);if(!n)return;e._u.set(t,n.withResumeToken(El.EMPTY_BYTE_STRING,n.snapshotVersion)),Ad(e,t);const r=new xh(n.target,t,1,n.sequenceNumber);xd(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Bo("RemoteStore","Failed to raise snapshot:",t),await Fd(e,t)}}async function Fd(e,t,n){if(!Th(t))throw t;e.wu.add(1),await Id(e),e.yu.set("Offline"),n||(n=()=>$h(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Bo("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await Td(e)}))}function Vd(e,t){return t().catch((n=>Fd(e,n,t)))}async function jd(e){const t=Go(e),n=Jd(t);let r=t.du.length>0?t.du[t.du.length-1].batchId:-1;for(;zd(t);)try{const e=await Wh(t.localStore,r);if(null===e){0===t.du.length&&n.$o();break}r=e.batchId,Bd(t,e)}catch(e){await Fd(t,e)}qd(t)&&Hd(t)}function zd(e){return Ld(e)&&e.du.length<10}function Bd(e,t){e.du.push(t);const n=Jd(e);n.Mo()&&n.Xo&&n.Zo(t.mutations)}function qd(e){return Ld(e)&&!Jd(e).ko()&&e.du.length>0}function Hd(e){Jd(e).start()}async function $d(e){Jd(e).nu()}async function Kd(e){const t=Jd(e);for(const n of e.du)t.Zo(n.mutations)}async function Wd(e,t,n){const r=e.du.shift(),i=Ch.from(r,t,n);await Vd(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await jd(e)}async function Gd(e,t){t&&Jd(e).Xo&&await async function(e,t){if(_c(n=t.code)&&n!==Qo.ABORTED){const n=e.du.shift();Jd(e).Fo(),await Vd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await jd(e)}var n}(e,t),qd(e)&&Hd(e)}async function Qd(e,t){const n=Go(e);n.asyncQueue.verifyOperationInProgress(),Bo("RemoteStore","RemoteStore received new credentials");const r=Ld(n);n.wu.add(3),await Id(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.wu.delete(3),await Td(n)}async function Xd(e,t){const n=Go(e);t?(n.wu.delete(2),await Td(n)):t||(n.wu.add(2),await Id(n),n.yu.set("Unknown"))}function Yd(e){return e.Iu||(e.Iu=function(e,t,n){const r=Go(e);return r.iu(),new wd(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Xr:Pd.bind(null,e),eo:Md.bind(null,e),zo:Ud.bind(null,e)}),e.mu.push((async t=>{t?(e.Iu.Fo(),Dd(e)?Rd(e):e.yu.set("Unknown")):(await e.Iu.stop(),Od(e))}))),e.Iu}function Jd(e){return e.Tu||(e.Tu=function(e,t,n){const r=Go(e);return r.iu(),new Ed(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Xr:$d.bind(null,e),eo:Gd.bind(null,e),eu:Kd.bind(null,e),tu:Wd.bind(null,e)}),e.mu.push((async t=>{t?(e.Tu.Fo(),await jd(e)):(await e.Tu.stop(),e.du.length>0&&(Bo("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))}))),e.Tu
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
 */}class Zd{static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,a=new Zd(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Xo(Qo.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Yo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function ef(e,t){if(qo("AsyncQueue",`${t}: ${e}`),Th(e))return new Xo(Qo.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class tf{static emptySet(e){return new tf(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof tf))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new tf;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ol.comparator(t.key,n.key):(e,t)=>Ol.comparator(e.key,t.key),this.keyedMap=Ac(),this.sortedSet=new su(this.comparator)}}
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
 */class nf{track(e){const t=e.doc.key,n=this.Eu.get(t);n?0!==e.type&&3===n.type?this.Eu=this.Eu.insert(t,e):3===e.type&&1!==n.type?this.Eu=this.Eu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Eu=this.Eu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Eu=this.Eu.remove(t):1===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):Ko():this.Eu=this.Eu.insert(t,e)}Au(){const e=[];return this.Eu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Eu=new su(Ol.comparator)}}class rf{static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new rf(e,t,tf.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,r,i,s,a,o){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o}}
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
 */class sf{constructor(){this.Ru=void 0,this.listeners=[]}}class af{constructor(){this.queries=new Ic((e=>Vu(e)),Fu),this.onlineState="Unknown",this.bu=new Set}}async function of(e,t){const n=Go(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new sf),i)try{s.Ru=await n.onListen(r)}catch(e){const n=ef(e,`Initialization of query '${ju(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Pu(n.onlineState),s.Ru&&t.Vu(s.Ru)&&hf(n)}async function lf(e,t){const n=Go(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function uf(e,t){const n=Go(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.Vu(e)&&(r=!0);i.Ru=e}}r&&hf(n)}function cf(e,t,n){const r=Go(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function hf(e){e.bu.forEach((e=>{e.next()}))}class df{Vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new rf(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),t=!0):this.xu(e,this.onlineState)&&(this.Nu(e),t=!0),this.Du=e,t}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),t=!0),t}xu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.ku&&n||e.docs.isEmpty()&&"Offline"!==t)}Cu(e){if(e.docChanges.length>0)return!0;const t=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Nu(e){e=rf.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}constructor(e,t,n){this.query=e,this.vu=t,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}}
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
class ff{constructor(e){this.key=e}}class pf{constructor(e){this.key=e}}class mf{get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new nf,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1;const o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=zu(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Hu(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.Gu(c,o)>0||l&&this.Gu(c,l)<0)&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,ii:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ko()}};return n(e)-n(t)}(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],a=0===this.Ku.size&&this.current?1:0,o=a!==this.qu;return this.qu=a,0!==i.length||o?{snapshot:new rf(this.query,e.Qu,r,i,e.mutatedKeys,0===a,o,!1),Xu:s}:{Xu:s}}Pu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new nf,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.Uu=this.Uu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Uu=this.Uu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Oc(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new pf(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new ff(n))})),t}ta(e){this.Uu=e._i,this.Ku=Oc();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ea(){return rf.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu)}constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.current=!1,this.Ku=Oc(),this.mutatedKeys=Oc(),this.Gu=qu(e),this.Qu=new tf(this.Gu)}}class gf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class yf{constructor(e){this.key=e,this.na=!1}}class vf{get isPrimaryClient(){return!0===this.da}constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sa={},this.ia=new Ic((e=>Vu(e)),Fu),this.ra=new Map,this.oa=new Set,this.ua=new su(Ol.comparator),this.aa=new Map,this.ca=new ed,this.ha={},this.la=new Map,this.fa=Mh.yn(),this.onlineState="Unknown",this.da=void 0}}async function bf(e,t){const n=Uf(e);let r,i;const s=n.ia.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ea();else{const e=await Gh(n.localStore,Mu(t));n.isPrimaryClient&&Cd(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await wf(n,t,r,"current"===s)}return i}async function wf(e,t,n,r){e._a=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.ii&&(i=await Xh(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return Rf(e,t.targetId,a.Xu),a.snapshot}(e,t,n,r);const i=await Xh(e.localStore,t,!0),s=new mf(t,i._i),a=s.Wu(i.documents),o=Fc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),l=s.applyChanges(a,e.isPrimaryClient,o);Rf(e,n,l.Xu);const u=new gf(t,n,s);return e.ia.set(t,u),e.ra.has(n)?e.ra.get(n).push(t):e.ra.set(n,[t]),l.snapshot}async function Ef(e,t){const n=Go(e),r=n.ia.get(t),i=n.ra.get(r.targetId);if(i.length>1)return n.ra.set(r.targetId,i.filter((e=>!Fu(e,t)))),void n.ia.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Qh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Nd(n.remoteStore,r.targetId),xf(n,r.targetId)})).catch(Uh)):(xf(n,r.targetId),await Qh(n.localStore,r.targetId,!0))}async function kf(e,t){const n=Go(e);try{const e=await function(e,t){const n=Go(e),r=t.snapshotVersion;let i=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.hi.newChangeBuffer({trackRemovals:!0});i=n.ui;const a=[];t.targetChanges.forEach(((s,o)=>{const l=i.get(o);if(!l)return;a.push(n.fs.removeMatchingKeys(e,s.removedDocuments,o).next((()=>n.fs.addMatchingKeys(e,s.addedDocuments,o))));let u=l.withSequenceNumber(e.currentSequenceNumber);var c,h,d;t.targetMismatches.has(o)?u=u.withResumeToken(El.EMPTY_BYTE_STRING,hl.min()).withLastLimboFreeSnapshotVersion(hl.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(o,u),h=u,d=s,(0===(c=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&a.push(n.fs.updateTargetData(e,u))}));let o=Nc();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),a.push(Kh(e,s,t.documentUpdates).next((e=>{o=e}))),!r.isEqual(hl.min())){const t=n.fs.getLastRemoteSnapshotVersion(e).next((t=>n.fs.setTargetsMetadata(e,e.currentSequenceNumber,r)));a.push(t)}return _h.waitFor(a).next((()=>s.apply(e))).next((()=>n.fi.Gs(e,o))).next((()=>o))})).then((e=>(n.ui=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.aa.get(t);r&&(Wo(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.na=!0:e.modifiedDocuments.size>0?Wo(r.na):e.removedDocuments.size>0&&(Wo(r.na),r.na=!1))})),await Of(n,e,t)}catch(e){await Uh(e)}}function Sf(e,t,n){const r=Go(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ia.forEach(((n,r)=>{const i=r.view.Pu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Go(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Pu(t)&&(r=!0)})),r&&hf(n)}(r.eventManager,t),e.length&&r.sa.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function _f(e,t,n){const r=Go(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.aa.get(t),s=i&&i.key;if(s){let e=new su(Ol.comparator);e=e.insert(s,Zl.newNoDocument(s,hl.min()));const n=Oc().add(s),i=new Uc(hl.min(),new Map,new lu(ll),e,n);await kf(r,i),r.ua=r.ua.remove(s),r.aa.delete(t),Lf(r)}else await Qh(r.localStore,t,!1).then((()=>xf(r,t,n))).catch(Uh)}async function Tf(e,t){const n=Go(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Go(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let a=_h.resolve();return s.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Wo(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.Bs.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.fi.Ks(e,r)))}))}(n.localStore,t);Nf(n,r,null),Cf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Of(n,e)}catch(e){await Uh(e)}}async function If(e,t,n){const r=Go(e);try{const e=await function(e,t){const n=Go(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.Bs.lookupMutationBatch(e,t).next((t=>(Wo(null!==t),r=t.keys(),n.Bs.removeMutationBatch(e,t)))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.fi.Ks(e,r)))}))}(r.localStore,t);Nf(r,t,n),Cf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Of(r,e)}catch(e){await Uh(e)}}function Cf(e,t){(e.la.get(t)||[]).forEach((e=>{e.resolve()})),e.la.delete(t)}function Nf(e,t,n){const r=Go(e);let i=r.ha[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ha[r.currentUser.toKey()]=i}}function xf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ra.get(t))e.ia.delete(r),n&&e.sa.wa(r,n);e.ra.delete(t),e.isPrimaryClient&&e.ca.vi(t).forEach((t=>{e.ca.containsKey(t)||Af(e,t)}))}function Af(e,t){e.oa.delete(t.path.canonicalString());const n=e.ua.get(t);null!==n&&(Nd(e.remoteStore,n),e.ua=e.ua.remove(t),e.aa.delete(n),Lf(e))}function Rf(e,t,n){for(const r of n)r instanceof ff?(e.ca.addReference(r.key,t),Df(e,r)):r instanceof pf?(Bo("SyncEngine","Document no longer in limbo: "+r.key),e.ca.removeReference(r.key,t),e.ca.containsKey(r.key)||Af(e,r.key)):Ko()}function Df(e,t){const n=t.key,r=n.path.canonicalString();e.ua.get(n)||e.oa.has(r)||(Bo("SyncEngine","New document in limbo: "+n),e.oa.add(r),Lf(e))}function Lf(e){for(;e.oa.size>0&&e.ua.size<e.maxConcurrentLimboResolutions;){const t=e.oa.values().next().value;e.oa.delete(t);const n=new Ol(gl.fromString(t)),r=e.fa.next();e.aa.set(r,new yf(n)),e.ua=e.ua.insert(n,r),Cd(e.remoteStore,new xh(Mu(Ru(n.path)),r,2,sl.A))}}async function Of(e,t,n){const r=Go(e),i=[],s=[],a=[];r.ia.isEmpty()||(r.ia.forEach(((e,o)=>{a.push(r._a(o,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(o.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=jh.Ys(o.targetId,e);s.push(t)}})))})),await Promise.all(a),r.sa.zo(i),await async function(e,t){const n=Go(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>_h.forEach(t,(t=>_h.forEach(t.Hs,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>_h.forEach(t.Js,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Th(e))throw e;Bo("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.ui.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ui=n.ui.insert(t,i)}}}(r.localStore,s))}async function Pf(e,t){const n=Go(e);if(!n.currentUser.isEqual(t)){Bo("SyncEngine","User change. New user:",t.toKey());const e=await Hh(n.localStore,t);n.currentUser=t,(r=n).la.forEach((e=>{e.forEach((e=>{e.reject(new Xo(Qo.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.la.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Of(n,e.di)}var r}function Mf(e,t){const n=Go(e),r=n.aa.get(t);if(r&&r.na)return Oc().add(r.key);{let e=Oc();const r=n.ra.get(t);if(!r)return e;for(const t of r){const r=n.ia.get(t);e=e.unionWith(r.view.ju)}return e}}function Uf(e){const t=Go(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=kf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_f.bind(null,t),t.sa.zo=uf.bind(null,t.eventManager),t.sa.wa=cf.bind(null,t.eventManager),t}function Ff(e){const t=Go(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Tf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=If.bind(null,t),t}class Vf{async initialize(e){this.M=yd(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return qh(this.persistence,new zh,e.initialUser,this.M)}ya(e){return new ad(ld.Yi,this.M)}ga(e){return new cd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class jf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Sf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pf.bind(null,this.syncEngine),await Xd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new af}createDatastore(e){const t=yd(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new md(r));var r,i,s;return i=e.authCredentials,s=e.appCheckCredentials,new kd(i,s,n,t)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Sf(this.syncEngine,e,0),s=dd.vt()?new dd:new hd,new _d(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){const o=new vf(e,t,n,r,i,s);return a&&(o.da=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Go(e);Bo("RemoteStore","RemoteStore shutting down."),t.wu.add(5),await Id(t),t.gu.shutdown(),t.yu.set("Unknown")}(this.remoteStore)}}
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
class zf{next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
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
class Bf{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Xo(Qo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ef(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Fo.UNAUTHENTICATED,this.clientId=ol.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Bo("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Bo("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function qf(e,t){e.asyncQueue.verifyOperationInProgress(),Bo("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Hh(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Hf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await $f(e);Bo("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Qd(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Qd(t.remoteStore,n))),e.onlineComponents=t}async function $f(e){return e.offlineComponents||(Bo("FirestoreClient","Using default OfflineComponentProvider"),await qf(e,new Vf)),e.offlineComponents}async function Kf(e){return e.onlineComponents||(Bo("FirestoreClient","Using default OnlineComponentProvider"),await Hf(e,new jf)),e.onlineComponents}function Wf(e){return Kf(e).then((e=>e.syncEngine))}async function Gf(e){const t=await Kf(e),n=t.eventManager;return n.onListen=bf.bind(null,t.syncEngine),n.onUnlisten=Ef.bind(null,t.syncEngine),n}function Qf(e,t,n={}){const r=new Yo;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new zf({next:n=>{t.enqueueAndForget((()=>lf(e,a))),n.fromCache&&"server"===r.source?i.reject(new Xo(Qo.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new df(n,s,{includeMetadataChanges:!0,ku:!0});return of(e,a)}(await Gf(e),e.asyncQueue,t,n,r))),r.promise}const Xf=new Map;
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
 */function Yf(e,t,n){if(!n)throw new Xo(Qo.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Jf(e){if(!Ol.isDocumentKey(e))throw new Xo(Qo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Zf(e){if(Ol.isDocumentKey(e))throw new Xo(Qo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ep(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Ko()}function tp(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Xo(Qo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ep(e);throw new Xo(Qo.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class np{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Xo(Qo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Xo(Qo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Xo(Qo.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
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
 */class rp{get app(){if(!this._app)throw new Xo(Qo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Xo(Qo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new np(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Zo;switch(e.type){case"gapi":const t=e.client;return Wo(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new nl(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Xo(Qo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Xf.get(e);t&&(Bo("ComponentProvider","Removing Datastore"),Xf.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new np({}),this._settingsFrozen=!1,e instanceof Al?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Xo(Qo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Al(e.options.projectId)}(e))}}
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
class ip{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ap(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ip(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class sp{withConverter(e){return new sp(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class ap extends sp{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ip(this.firestore,null,new Ol(e))}withConverter(e){return new ap(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,Ru(n)),this._path=n,this.type="collection"}}function op(e,t,...n){if(e=L(e),Yf("collection","path",t),e instanceof rp){const r=gl.fromString(t,...n);return Zf(r),new ap(e,null,r)}{if(!(e instanceof ip||e instanceof ap))throw new Xo(Qo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gl.fromString(t,...n));return Zf(r),new ap(e.firestore,null,r)}}function lp(e,t,...n){if(e=L(e),1===arguments.length&&(t=ol.R()),Yf("doc","path",t),e instanceof rp){const r=gl.fromString(t,...n);return Jf(r),new ip(e,null,new Ol(r))}{if(!(e instanceof ip||e instanceof ap))throw new Xo(Qo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gl.fromString(t,...n));return Jf(r),new ip(e.firestore,e instanceof ap?e.converter:null,new Ol(r))}}
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
class up{get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const t=gd();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise((()=>{}));const t=new Yo;return this.Wa((()=>this.Ba&&this.Ka?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$a.push(e),this.za())))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!Th(e))throw e;Bo("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro((()=>this.za()))}}Wa(e){const t=this.Fa.then((()=>(this.qa=!0,e().catch((e=>{this.Ua=e,this.qa=!1;throw qo("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.qa=!1,e))))));return this.Fa=t,t}enqueueAfterDelay(e,t,n){this.ja(),this.Ga.indexOf(e)>-1&&(t=0);const r=Zd.createAndSchedule(this,e,t,n,(e=>this.Ha(e)));return this.La.push(r),r}ja(){this.Ua&&Ko()}verifyOperationInProgress(){}async Ja(){let e;do{e=this.Fa,await e}while(e!==this.Fa)}Ya(e){for(const t of this.La)if(t.timerId===e)return!0;return!1}Xa(e){return this.Ja().then((()=>{this.La.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.La)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Ja()}))}Za(e){this.Ga.push(e)}Ha(e){const t=this.La.indexOf(e);this.La.splice(t,1)}constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new vd(this,"async_queue_retry"),this.Qa=()=>{const e=gd();e&&Bo("AsyncQueue","Visibility state changed to "+e.visibilityState),this.No.Po()};const e=gd();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Qa)}}class cp extends rp{_terminate(){return this._firestoreClient||fp(this),this._firestoreClient.terminate()}constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new up,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}}function hp(e=ve()){return me(e,"firestore").getImmediate()}function dp(e){return e._firestoreClient||fp(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function fp(e){var t;const n=e._freezeSettings(),r=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new xl(i,s,a,(o=n).host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams));var i,s,a,o;e._firestoreClient=new Bf(e._authCredentials,e._appCheckCredentials,e._queue,r)}
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
class pp{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Xo(Qo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vl(e)}}
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
class mp{static fromBase64String(e){try{return new mp(El.fromBase64String(e))}catch(e){throw new Xo(Qo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new mp(El.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
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
 */class gp{constructor(e){this._methodName=e}}
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
 */class yp{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ll(this._lat,e._lat)||ll(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Xo(Qo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Xo(Qo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
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
 */const vp=/^__.*__$/;class bp{toMutation(e,t){return null!==this.fieldMask?new mc(e,this.data,this.fieldMask,t,this.fieldTransforms):new pc(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function wp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ko()}}class Ep{get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.rc(e),r}oc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return Lp(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(0===e.length)throw this.ac("Document fields must not be empty");if(wp(this.ec)&&vp.test(e))throw this.ac('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class kp{lc(e,t,n,r=!1){return new Ep({ec:e,methodName:t,hc:n,path:vl.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||yd(e)}}function Sp(e){const t=e._freezeSettings(),n=yd(e._databaseId);return new kp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function _p(e,t,n,r,i,s={}){const a=e.lc(s.merge||s.mergeFields?2:0,t,n,i);xp("Data must be an object, but it was:",a,r);const o=Cp(r,a);let l,u;if(s.merge)l=new bl(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Ap(t,r,n);if(!a.contains(i))throw new Xo(Qo.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Op(e,i)||e.push(i)}l=new bl(e),u=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=a.fieldTransforms;return new bp(new Yl(o),l,u)}function Tp(e,t,n,r=!1){return Ip(n,e.lc(r?4:3,t))}function Ip(e,t){if(Np(e=L(e)))return xp("Unsupported field value:",t,e),Cp(e,t);if(e instanceof gp)return function(e,t){if(!wp(t.ec))throw t.ac(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ac(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ic&&4!==t.ec)throw t.ac("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Ip(i,t.uc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=L(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Wu(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=cl.fromDate(e);return{timestampValue:Qc(t.M,n)}}if(e instanceof cl){const n=new cl(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Qc(t.M,n)}}if(e instanceof yp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof mp)return{bytesValue:Xc(t.M,e._byteString)};if(e instanceof ip){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Zc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ac(`Unsupported field value: ${ep(e)}`)}(e,t)}function Cp(e,t){const n={};return pl(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fl(e,((e,r)=>{const i=Ip(r,t.sc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Np(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof cl||e instanceof yp||e instanceof mp||e instanceof ip||e instanceof gp)}function xp(e,t,n){if(!Np(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=ep(n);throw"an object"===r?t.ac(e+" a custom object"):t.ac(e+" "+r)}var r}function Ap(e,t,n){if((t=L(t))instanceof pp)return t._internalPath;if("string"==typeof t)return Dp(e,t);throw Lp("Field path arguments must be of type string or ",e,!1,void 0,n)}const Rp=new RegExp("[~\\*/\\[\\]]");function Dp(e,t,n){if(t.search(Rp)>=0)throw Lp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new pp(...t.split("."))._internalPath}catch(r){throw Lp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Lp(e,t,n,r,i){const s=r&&!r.isEmpty(),a=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new Xo(Qo.INVALID_ARGUMENT,o+e+l)}function Op(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Pp{get id(){return this._key.path.lastSegment()}get ref(){return new ip(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Mp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Up("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}}class Mp extends Pp{data(){return super.data()}}function Up(e,t){return"string"==typeof t?Dp(e,t):t instanceof pp?t._internalPath:t._delegate._internalPath}
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
 */class Fp{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class Vp extends Pp{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new jp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Up("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}}class jp extends Vp{data(e={}){return super.data(e)}}class zp{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new jp(this._firestore,this._userDataWriter,n.key,n,new Fp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Xo(Qo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new jp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Fp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new jp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Fp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Bp(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Fp(r.hasPendingWrites,r.fromCache),this.query=n}}function Bp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ko()}}
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
function qp(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Xo(Qo.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hp{}function $p(e,...t){for(const n of t)e=n._apply(e);return e}class Kp extends Hp{_apply(e){const t=Sp(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Xo(Qo.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Yp(a,s);const t=[];for(const n of a)t.push(Xp(r,e,n));o={arrayValue:{values:t}}}else o=Xp(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Yp(a,s),o=Tp(n,"where",a,"in"===s||"not-in"===s);const l=mu.create(i,s,o);return function(e,t){if(t.S()){const n=Lu(e);if(null!==n&&!n.isEqual(t.field))throw new Xo(Qo.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Du(e);null!==r&&Jp(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Xo(Qo.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Xo(Qo.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,0,t,e.firestore._databaseId,this._c,this.wc,this.mc);return new sp(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new xu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}constructor(e,t,n){super(),this._c=e,this.wc=t,this.mc=n,this.type="where"}}function Wp(e,t,n){const r=t,i=Up("where",e);return new Kp(i,r,n)}class Gp extends Hp{_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Xo(Qo.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Xo(Qo.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Tu(t,n);return function(e,t){if(null===Du(e)){const n=Lu(e);null!==n&&Jp(e,n,t.field)}}(e,r),r}(e._query,this._c,this.gc);return new sp(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new xu(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}constructor(e,t){super(),this._c=e,this.gc=t,this.type="orderBy"}}function Qp(e,t="asc"){const n=t,r=Up("orderBy",e);return new Gp(r,n)}function Xp(e,t,n){if("string"==typeof(n=L(n))){if(""===n)throw new Xo(Qo.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ou(t)&&-1!==n.indexOf("/"))throw new Xo(Qo.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(gl.fromString(n));if(!Ol.isDocumentKey(r))throw new Xo(Qo.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ql(e,new Ol(r))}if(n instanceof ip)return ql(e,n._key);throw new Xo(Qo.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ep(n)}.`)}function Yp(e,t){if(!Array.isArray(e)||0===e.length)throw new Xo(Qo.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Xo(Qo.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Jp(e,t,n){if(!n.isEqual(t))throw new Xo(Qo.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
class Zp{convertValue(e,t="none"){switch(Ml(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _l(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tl(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ko()}}convertObject(e,t){const n={};return fl(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new yp(_l(e.latitude),_l(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Cl(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Nl(e));default:return null}}convertTimestamp(e){const t=Sl(e);return new cl(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=gl.fromString(e);Wo(bh(n));const r=new Al(n.get(1),n.get(3)),i=new Ol(n.popFirst(5));return r.isEqual(t)||qo(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function em(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class tm extends Zp{convertBytes(e){return new mp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ip(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function nm(e){e=tp(e,sp);const t=tp(e.firestore,cp),n=dp(t),r=new tm(t);return qp(e._query),Qf(n,e._query).then((n=>new zp(t,r,e,n)))}function rm(e,t,n){e=tp(e,ip);const r=tp(e.firestore,cp),i=em(e.converter,t,n);return sm(r,[_p(Sp(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,ac.none())])}function im(e,t){const n=tp(e.firestore,cp),r=lp(e),i=em(e.converter,t);return sm(n,[_p(Sp(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ac.exists(!1))]).then((()=>r))}function sm(e,t){return function(e,t){const n=new Yo;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=Ff(e);try{const e=await function(e,t){const n=Go(e),r=cl.now(),i=t.reduce(((e,t)=>e.add(t.key)),Oc());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.fi.Ks(e,i).next((i=>{s=i;const a=[];for(const e of t){const t=hc(e,s.get(e.key));null!=t&&a.push(new mc(e.key,t,Jl(t.value.mapValue),ac.exists(!0)))}return n.Bs.addMutationBatch(e,r,a,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ha[e.currentUser.toKey()];r||(r=new su(ll)),r=r.insert(t,n),e.ha[e.currentUser.toKey()]=r}(r,e.batchId,n),await Of(r,e.changes),await jd(r.remoteStore)}catch(e){const t=ef(e,"Failed to persist write");n.reject(t)}}(await Wf(e),t,n))),n.promise}(dp(e),t)}!function(e,t=!0){Vo="9.8.2",pe(new O("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new cp(r,new el(e.getProvider("auth-internal")),new il(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),be("@firebase/firestore","3.4.9",e),be("@firebase/firestore","3.4.9","esm2017")}();const am=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw ge.create("bad-app-name",{appName:String(r)});const i=he.get(r);if(i){if(T(e,i.options)&&T(n,i.config))return i;throw ge.create("duplicate-app",{appName:r})}const s=new M(r);for(const e of de.values())s.addComponent(e);const a=new ye(e,n,s);return he.set(r,a),a}({apiKey:"AIzaSyBvHCpKNrfKfc2AZZLP8D0K1AGlUFcX1aE",authDomain:"test-budget-38b21.firebaseapp.com",databaseURL:"https://test-budget-38b21.firebaseio.com",projectId:"test-budget-38b21",storageBucket:"test-budget-38b21.appspot.com",messagingSenderId:"1067130269246",appId:"1:1067130269246:web:504d76c1afc05bcbf12b6f"}),om=function(e){const t=hr(e);return{signIn:async function(){const e=new Wt;e.setCustomParameters({prompt:"select_account"});try{const n=(await zn(t,e)).user;console.log(n.displayName,n.email,n.photoURL)}catch(e){const t=e.code,n=e.message;console.log(t,n)}},signOut:function(){sn(t)},onAuthStateChanged:function(e){return rn(t,e)}}}(am),lm=om.signIn,um=om.signOut,cm=om.onAuthStateChanged,hm=function(e){const t=hp(e);return{getBudgets:async function(e){const n=$p(op(t,"budgets"),Wp("uid","==",e.uid),Qp("createdAt"));return(await nm(n)).docs.map((function(e){return{id:e.id,...e.data()}}))},updateBudget:async function(e,n,r){const i=op(t,"budgets");return await rm(lp(i,e),{amount:n,weekly_amount:r},{merge:!0})},createBudget:async function(e,n,r){const i=await im(op(t,"budgets"),{amount:0,createdAt:new Date,name:n,uid:e.uid,weekly_amount:0,weekly_budget:r});console.log("Document written with ID: ",i.id)}}}(am),dm=hm.getBudgets,fm=hm.updateBudget,pm=hm.createBudget,mm=function(e){return new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR"}).format(e)},gm=function(){const[e,n]=t(u).useState(void 0);return t(u).useEffect((function(){return cm(n)}),[]),e},ym=function({user:e}){return null!==e?(0,a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(e){e.preventDefault(),um()},children:[(0,a.jsx)("i",{className:"bi bi-box-arrow-in-left"})," ",(0,a.jsx)("em",{children:e.displayName})]}):(0,a.jsx)("button",{className:"btn btn-outline-success",onClick:function(e){e.preventDefault(),lm()},children:(0,a.jsx)("i",{className:"bi bi-box-arrow-in-right"})})},vm=function(e){return(0,a.jsx)("div",{style:{marginTop:"50px"},className:"d-flex justify-content-center",children:(0,a.jsx)("div",{style:{width:"3rem",height:"3rem"},className:"spinner-border",role:"status",children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},bm=function(e){return(0,a.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:(0,a.jsxs)("div",{className:"container-fluid",children:[(0,a.jsx)("span",{className:"navbar-brand",children:"My Budgets"}),(0,a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,a.jsx)("span",{className:"navbar-toggler-icon"})}),(0,a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[(0,a.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"}),(0,a.jsx)("form",{className:"d-flex",children:(0,a.jsx)(ym,{user:null})})]})]})})};u=s("6SgHj"),u=s("6SgHj");
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
function wm(e,t,n,r){return new(n||(n=Promise))((function(i,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function o(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,o)}l((r=r.apply(e,t||[])).next())}))}function Em(e,t){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}var km,Sm=function(){},_m=Sm(),Tm=Object,Im=function(e){return e===_m},Cm=function(e){return"function"==typeof e},Nm=function(e,t){return Tm.assign({},e,t)},xm=function(){return"undefined"!=typeof window},Am=new WeakMap,Rm=0,Dm=function(e){var t,n,r=typeof e,i=e&&e.constructor,s=i==Date;if(Tm(e)!==e||s||i==RegExp)t=s?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=Am.get(e))return t;if(t=++Rm+"~",Am.set(e,t),i==Array){for(t="@",n=0;n<e.length;n++)t+=Dm(e[n])+",";Am.set(e,t)}if(i==Tm){t="#";for(var a=Tm.keys(e).sort();!Im(n=a.pop());)Im(e[n])||(t+=n+":"+Dm(e[n])+",");Am.set(e,t)}}return t},Lm=!0,Om=xm(),Pm="undefined"!=typeof document,Mm=Om&&window.addEventListener?window.addEventListener.bind(window):Sm,Um=Pm?document.addEventListener.bind(document):Sm,Fm=Om&&window.removeEventListener?window.removeEventListener.bind(window):Sm,Vm=Pm?document.removeEventListener.bind(document):Sm,jm={isOnline:function(){return Lm},isVisible:function(){var e=Pm&&document.visibilityState;return Im(e)||"hidden"!==e}},zm={initFocus:function(e){return Um("visibilitychange",e),Mm("focus",e),function(){Vm("visibilitychange",e),Fm("focus",e)}},initReconnect:function(e){var t=function(){Lm=!0,e()},n=function(){Lm=!1};return Mm("online",t),Mm("offline",n),function(){Fm("online",t),Fm("offline",n)}}},Bm=!xm()||"Deno"in window,qm=function(e){return xm()&&void 0!==window.requestAnimationFrame?window.requestAnimationFrame(e):setTimeout(e,1)},Hm=Bm?u.useEffect:u.useLayoutEffect,$m="undefined"!=typeof navigator&&navigator.connection,Km=!Bm&&$m&&(["slow-2g","2g"].includes($m.effectiveType)||$m.saveData),Wm=function(e){if(Cm(e))try{e=e()}catch(t){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?Dm(e):"",t,e?"$swr$"+e:""]},Gm=new WeakMap,Qm=function(e,t,n,r,i,s,a){void 0===a&&(a=!0);var o=Gm.get(e),l=o[0],u=o[1],c=o[3],h=l[t],d=u[t];if(a&&d)for(var f=0;f<d.length;++f)d[f](n,r,i);return s&&(delete c[t],h&&h[0])?h[0](2).then((function(){return e.get(t)})):e.get(t)},Xm=0,Ym=function(){return++Xm},Jm=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return wm(void 0,void 0,void 0,(function(){var t,n,r,i,s,a,o,l,u,c,h,d,f,p,m,g,y,v,b,w,E;return Em(this,(function(k){switch(k.label){case 0:if(t=e[0],n=e[1],r=e[2],i=e[3],a=!!Im((s="boolean"==typeof i?{revalidate:i}:i||{}).populateCache)||s.populateCache,o=!1!==s.revalidate,l=!1!==s.rollbackOnError,u=s.optimisticData,c=Wm(n),h=c[0],d=c[2],!h)return[2];if(f=Gm.get(t),p=f[2],e.length<3)return[2,Qm(t,h,t.get(h),_m,_m,o,!0)];if(m=r,y=Ym(),p[h]=[y,0],v=!Im(u),b=t.get(h),v&&(w=Cm(u)?u(b):u,t.set(h,w),Qm(t,h,w)),Cm(m))try{m=m(t.get(h))}catch(e){g=e}return m&&Cm(m.then)?[4,m.catch((function(e){g=e}))]:[3,2];case 1:if(m=k.sent(),y!==p[h][0]){if(g)throw g;return[2,m]}g&&v&&l&&(a=!0,m=b,t.set(h,b)),k.label=2;case 2:return a&&(g||(Cm(a)&&(m=a(m,b)),t.set(h,m)),t.set(d,Nm(t.get(d),{error:g}))),p[h][1]=Ym(),[4,Qm(t,h,m,g,_m,o,!!a)];case 3:if(E=k.sent(),g)throw g;return[2,a?E:m]}}))}))},Zm=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},eg=function(e,t){if(!Gm.has(e)){var n=Nm(zm,t),r={},i=Jm.bind(_m,e),s=Sm;if(Gm.set(e,[r,{},{},{},i]),!Bm){var a=n.initFocus(setTimeout.bind(_m,Zm.bind(_m,r,0))),o=n.initReconnect(setTimeout.bind(_m,Zm.bind(_m,r,1)));s=function(){a&&a(),o&&o(),Gm.delete(e)}}return[e,i,s]}return[e,Gm.get(e)[4]]},tg=eg(new Map),ng=tg[0],rg=tg[1],ig=Nm({onLoadingSlow:Sm,onSuccess:Sm,onError:Sm,onErrorRetry:function(e,t,n,r,i){var s=n.errorRetryCount,a=i.retryCount,o=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!Im(s)&&a>s||setTimeout(r,o,i)},onDiscarded:Sm,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Km?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:Km?5e3:3e3,compare:function(e,t){return Dm(e)==Dm(t)},isPaused:function(){return!1},cache:ng,mutate:rg,fallback:{}},jm),sg=function(e,t){var n=Nm(e,t);if(t){var r=e.use,i=e.fallback,s=t.use,a=t.fallback;r&&s&&(n.use=r.concat(s)),i&&a&&(n.fallback=Nm(i,a))}return n},ag=(0,u.createContext)({}),og=function(e){return Cm(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},lg=function(){return Nm(ig,(0,u.useContext)(ag))},ug=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},cg={dedupe:!0},hg=(Tm.defineProperty((function(e){var t=e.value,n=sg((0,u.useContext)(ag),t),r=t&&t.provider,i=(0,u.useState)((function(){return r?eg(r(n.cache||ng),t):_m}))[0];return i&&(n.cache=i[0],n.mutate=i[1]),Hm((function(){return i?i[2]:_m}),[]),(0,u.createElement)(ag.Provider,Nm(e,{value:n}))}),"default",{value:ig}),km=function(e,t,n){var r=n.cache,i=n.compare,s=n.fallbackData,a=n.suspense,o=n.revalidateOnMount,l=n.refreshInterval,c=n.refreshWhenHidden,h=n.refreshWhenOffline,d=Gm.get(r),f=d[0],p=d[1],m=d[2],g=d[3],y=Wm(e),v=y[0],b=y[1],w=y[2],E=(0,u.useRef)(!1),k=(0,u.useRef)(!1),S=(0,u.useRef)(v),_=(0,u.useRef)(t),T=(0,u.useRef)(n),I=function(){return T.current},C=function(){return I().isVisible()&&I().isOnline()},N=function(e){return r.set(w,Nm(r.get(w),e))},x=r.get(v),A=Im(s)?n.fallback[v]:s,R=Im(x)?A:x,D=r.get(w)||{},L=D.error,O=!E.current,P=function(){return O&&!Im(o)?o:!I().isPaused()&&(a?!Im(R)&&n.revalidateIfStale:Im(R)||n.revalidateIfStale)},M=!(!v||!t)&&(!!D.isValidating||O&&P()),U=function(e,t){var n=(0,u.useState)({})[1],r=(0,u.useRef)(e),i=(0,u.useRef)({data:!1,error:!1,isValidating:!1}),s=(0,u.useCallback)((function(e){var s=!1,a=r.current;for(var o in e){var l=o;a[l]!==e[l]&&(a[l]=e[l],i.current[l]&&(s=!0))}s&&!t.current&&n({})}),[]);return Hm((function(){r.current=e})),[r,i.current,s]}({data:R,error:L,isValidating:M},k),F=U[0],V=U[1],j=U[2],z=(0,u.useCallback)((function(e){return wm(void 0,void 0,void 0,(function(){var t,s,a,o,l,u,c,h,d,f,p,y,w;return Em(this,(function(T){switch(T.label){case 0:if(t=_.current,!v||!t||k.current||I().isPaused())return[2,!1];o=!0,l=e||{},u=!g[v]||!l.dedupe,c=function(){return!k.current&&v===S.current&&E.current},h=function(){var e=g[v];e&&e[1]===a&&delete g[v]},d={isValidating:!1},f=function(){N({isValidating:!1}),c()&&j(d)},N({isValidating:!0}),j({isValidating:!0}),T.label=1;case 1:return T.trys.push([1,3,,4]),u&&(Qm(r,v,F.current.data,F.current.error,!0),n.loadingTimeout&&!r.get(v)&&setTimeout((function(){o&&c()&&I().onLoadingSlow(v,n)}),n.loadingTimeout),g[v]=[t.apply(void 0,b),Ym()]),w=g[v],s=w[0],a=w[1],[4,s];case 2:return s=T.sent(),u&&setTimeout(h,n.dedupingInterval),g[v]&&g[v][1]===a?(N({error:_m}),d.error=_m,p=m[v],!Im(p)&&(a<=p[0]||a<=p[1]||0===p[1])?(f(),u&&c()&&I().onDiscarded(v),[2,!1]):(i(F.current.data,s)?d.data=F.current.data:d.data=s,i(r.get(v),s)||r.set(v,s),u&&c()&&I().onSuccess(s,v,n),[3,4])):(u&&c()&&I().onDiscarded(v),[2,!1]);case 3:return y=T.sent(),h(),I().isPaused()||(N({error:y}),d.error=y,u&&c()&&(I().onError(y,v,n),("boolean"==typeof n.shouldRetryOnError&&n.shouldRetryOnError||Cm(n.shouldRetryOnError)&&n.shouldRetryOnError(y))&&C()&&I().onErrorRetry(y,v,n,z,{retryCount:(l.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return o=!1,f(),c()&&u&&Qm(r,v,d.data,d.error,!1),[2,!0]}}))}))}),[v]),B=(0,u.useCallback)(Jm.bind(_m,r,(function(){return S.current})),[]);if(Hm((function(){_.current=t,T.current=n})),Hm((function(){if(v){var e=v!==S.current,t=z.bind(_m,cg),n=0,r=ug(v,p,(function(e,t,n){j(Nm({error:t,isValidating:n},i(F.current.data,e)?_m:{data:e}))})),s=ug(v,f,(function(e){if(0==e){var r=Date.now();I().revalidateOnFocus&&r>n&&C()&&(n=r+I().focusThrottleInterval,t())}else if(1==e)I().revalidateOnReconnect&&C()&&t();else if(2==e)return z()}));return k.current=!1,S.current=v,E.current=!0,e&&j({data:R,error:L,isValidating:M}),P()&&(Im(R)||Bm?t():qm(t)),function(){k.current=!0,r(),s()}}}),[v,z]),Hm((function(){var e;function t(){var t=Cm(l)?l(R):l;t&&-1!==e&&(e=setTimeout(n,t))}function n(){F.current.error||!c&&!I().isVisible()||!h&&!I().isOnline()?t():z(cg).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[l,c,h,z]),(0,u.useDebugValue)(R),a&&Im(R)&&v)throw _.current=t,T.current=n,k.current=!1,Im(L)?z(cg):L;return{mutate:B,get data(){return V.data=!0,R},get error(){return V.error=!0,L},get isValidating(){return V.isValidating=!0,M}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=lg(),r=og(e),i=r[0],s=r[1],a=r[2],o=sg(n,a),l=km,u=o.use;if(u)for(var c=u.length;c-- >0;)l=u[c](l);return l(i,s||o.fetcher,o)});const dg=function(e){const{data:t,error:n,isValidating:r,mutate:i}=hg(["budgets",e.uid],(function(e,t){return console.assert("budgets"===e),dm({uid:t})}));return{data:t,error:n,isValidating:r,Methods:{spend:async function(e,n){i(t.map((function(t){return e.id===t.id?{...e,amount:e.amount-n,weekly_amount:e.weekly_amount+n}:t})),!1),await fm(e.id,e.amount-n,e.weekly_amount+n),i()},recharge:async function(e){i((function(t){return t.map((function(t){return e.id===t.id?{...e,amount:e.amount+e.weekly_budget,weekly_amount:0}:t}))}),!1),await fm(e.id,e.amount+e.weekly_budget,0),i()},create:async function(n){i([...t,{amount:0,id:"temporary_id",name:`${n.name} (${n.description})`,weekly_amount:0,weekly_budget:n.budget}],!1),await pm(e,`${n.name} (${n.description})`,n.budget),i()}}}};u=s("6SgHj"),u=s("6SgHj");const fg=document.body.appendChild(document.createElement("div")),pg=function({opened:e,setOpened:n,children:r}){const[i,s]=t(u).useState(!1),o=t(u).useRef(null),c=t(u).useRef(null);return t(u).useEffect((function(){c.current=new bootstrap.Modal(o.current),o.current.addEventListener("hidden.bs.modal",(function(e){s(!1),n(!1)})),o.current.addEventListener("shown.bs.modal",(function(){s(!0)}))}),[]),t(u).useEffect((function(){e?c.current.show():(s(!1),c.current.hide())}),[e]),t(l).createPortal((0,a.jsx)("div",{ref:o,className:"modal fade",tabIndex:"-1","aria-hidden":"true",children:(0,a.jsx)("div",{className:"modal-dialog",children:(0,a.jsx)("div",{className:"modal-content",children:i?r:null})})}),fg)};u=s("6SgHj");const mg=function({setOpened:e,budget:n,action:r}){const i=t(u).useRef(null);t(u).useEffect((function(){i.current.focus()}),[]);const[s,o]=t(u).useState("");return(0,a.jsxs)(t(u).Fragment,{children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsx)("h5",{className:"modal-title",children:n.name}),(0,a.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r(parseFloat(s)),e(!1)},children:[(0,a.jsxs)("div",{className:"modal-body",children:[(0,a.jsxs)("div",{className:"form-floating",children:[(0,a.jsx)("input",{ref:i,id:"floatingInput",type:"number",className:"form-control",value:s,step:"0.01",onChange:function(e){o(e.target.value)},placeholder:"3.14",required:!0}),(0,a.jsx)("label",{htmlFor:"floatingInput",children:"Quanto hai speso?"})]}),(0,a.jsxs)("small",{className:"form-text text-muted",children:["Il tuo budget è ",mm(n.amount)]})]}),(0,a.jsx)("div",{className:"modal-footer",children:(0,a.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Sure!"})})]})]})},gg=function({budget:e,spend:n}){const[r,i]=t(u).useState(!1);return(0,a.jsxs)("div",{className:"col-sm-6",children:[(0,a.jsx)(pg,{opened:r,setOpened:i,children:(0,a.jsx)(mg,{setOpened:i,budget:e,action:n})}),(0,a.jsxs)("div",{className:"card border-secondary",style:{margin:"10px"},children:[(0,a.jsxs)("div",{className:"card-header",children:[e.name," ",(0,a.jsx)("sub",{children:mm(e.weekly_budget)}),(0,a.jsx)("span",{className:"float-end",children:(0,a.jsxs)("form",{className:"row row-cols-auto align-items-center",children:[(0,a.jsx)("strong",{children:(0,a.jsx)("em",{children:mm(e.amount)})}),(0,a.jsxs)("div",{className:"dropdown",children:[(0,a.jsx)("button",{className:"btn btn-sm btn-outline-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"⚙"}),(0,a.jsxs)("div",{className:"dropdown-menu dropdown-menu-end",children:[(0,a.jsx)("button",{className:"dropdown-item",onClick:e=>{e.preventDefault()},children:"TODO"}),(0,a.jsx)("button",{className:"dropdown-item",onClick:e=>{e.preventDefault()},children:"TODO"})]})]})]})})]}),(0,a.jsx)("div",{className:"card-body",children:(0,a.jsxs)("p",{style:{marginTop:"4px"},children:[(0,a.jsx)("span",{className:"card-subtitle mb-2 text-muted",children:mm(e.weekly_amount)}),(0,a.jsx)("button",{className:"btn btn-outline-primary float-end",onClick:function(){i(!0)},children:"Add cost"})]})})]})]},e.id)};s("6SgHj");const yg=function({user:e}){const{isValidating:t}=dg(e);return t?(0,a.jsx)("div",{className:"spinner-border",style:{position:"fixed",bottom:"1em",right:"1em"},role:"status",children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):null};u=s("6SgHj");s("6SgHj");const vg=function({opened:e,setOpened:t,action:n}){return(0,a.jsxs)(pg,{opened:e,setOpened:t,children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsx)("h5",{className:"modal-title",children:"Recharge All"}),(0,a.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,a.jsx)("div",{className:"modal-body",children:"Sicuro di voler ricaricare tutti i budget?"}),(0,a.jsx)("div",{className:"modal-footer",style:{display:"block"},children:(0,a.jsx)("button",{className:"btn btn-outline-danger float-end",onClick:function(){n(),t(!1)},children:"Ok"})})]})};u=s("6SgHj");const bg=function({action:e}){const n=t(u).useRef(null);t(u).useEffect((function(){n.current.focus()}),[]);const[r,i]=t(u).useState(""),[s,o]=t(u).useState(""),[l,c]=t(u).useState(""),h=function(e){if("budget"===e.target.name)c(parseFloat(e.target.value));else{(0,{name:i,description:o}[e.target.name])(e.target.value)}};return(0,a.jsxs)(t(u).Fragment,{children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsx)("h5",{className:"modal-title",children:"New Budget"}),(0,a.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:r,description:s,budget:l})},children:[(0,a.jsxs)("div",{className:"modal-body",children:[(0,a.jsxs)("div",{className:"form-floating mb-3",children:[(0,a.jsx)("input",{ref:n,className:"form-control",name:"name",placeholder:" ",value:r,onChange:h,required:!0}),(0,a.jsx)("label",{children:"Name"})]}),(0,a.jsxs)("div",{className:"form-floating mb-3",children:[(0,a.jsx)("textarea",{className:"form-control",name:"description",rows:"3",placeholder:" ",style:{height:"100px"},value:s,onChange:h}),(0,a.jsx)("label",{children:"Description"})]}),(0,a.jsxs)("div",{className:"form-floating mb-3",children:[(0,a.jsx)("input",{type:"number",min:"0.01",step:"0.01",className:"form-control",value:l,onChange:h,name:"budget",placeholder:" ",required:!0}),(0,a.jsx)("label",{children:"Budget"})]})]}),(0,a.jsx)("div",{className:"modal-footer",style:{display:"block"},children:(0,a.jsx)("button",{type:"submit",className:"btn btn-outline-danger float-end",children:"Ok"})})]})]})},wg=function({opened:e,setOpened:t,action:n}){return(0,a.jsx)(pg,{opened:e,setOpened:t,children:(0,a.jsx)(bg,{action:function(e){n(e),t(!1)}})})},Eg=function({user:e,budgets:n,Methods:r}){const[i,s]=t(u).useState(!1),[o,l]=t(u).useState(!1),c=n.reduce((function(e,t){return e+t.weekly_budget}),0);return(0,a.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:[(0,a.jsx)(vg,{opened:i,setOpened:s,action:function(){n.forEach((function(e){r.recharge(e)}))}}),(0,a.jsx)(wg,{opened:o,setOpened:l,action:function(e){r.create(e)}}),(0,a.jsxs)("div",{className:"container-fluid",children:[(0,a.jsxs)("span",{className:"navbar-brand",children:["My Budgets ",(0,a.jsx)("sub",{children:mm(c)})]}),(0,a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,a.jsx)("span",{className:"navbar-toggler-icon"})}),(0,a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[(0,a.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("a",{className:"nav-link",href:"#",onClick:function(e){e.preventDefault(),s(!0)},children:"Recharge all"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("a",{className:"nav-link",href:"#",onClick:function(e){e.preventDefault(),l(!0)},children:"New budget"})})]}),(0,a.jsx)("form",{className:"d-flex",children:(0,a.jsx)(ym,{user:e})})]})]})]})},kg=function({user:e,error:n}){return(0,a.jsxs)(t(u).Fragment,{children:[(0,a.jsx)(bm,{user:e}),(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{style:{marginTop:"10px"},className:"alert alert-danger",role:"alert",children:[(0,a.jsx)("p",{children:"Errore nel caricamento dei budget!"}),(0,a.jsx)("hr",{}),(0,a.jsx)("p",{children:(0,a.jsx)("em",{children:n.message})})]})})]})},Sg=function({user:e}){const{data:n,error:r,Methods:i}=dg(e);if(void 0!==r)return(0,a.jsx)(kg,{user:e,error:r});if(void 0===n)return(0,a.jsx)(vm,{});const s=n.map((function(e){return(0,a.jsx)(gg,{budget:e,spend:function(t){i.spend(e,t)}},e.id)}));return(0,a.jsxs)(t(u).Fragment,{children:[(0,a.jsx)(Eg,{user:e,budgets:n,Methods:i}),(0,a.jsx)("div",{className:"container",style:{paddingTop:"1em"},children:(0,a.jsx)("div",{className:"row",children:s})}),(0,a.jsx)(yg,{user:e})]})},_g=function(){return(0,a.jsxs)(t(u).Fragment,{children:[(0,a.jsx)(bm,{}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{style:{marginTop:"10px"},className:"alert alert-danger",role:"alert",children:(0,a.jsx)("p",{children:"Please authenticate!"})}),(0,a.jsxs)("p",{children:["You need to"," ",(0,a.jsx)("a",{href:"#",onClick:function(e){e.preventDefault()},children:"authenticate"})," ","with a Google Account in order to use this app."]})]})]})},Tg=function(e){const t=gm();return void 0===t?(0,a.jsx)(vm,{}):null===t?(0,a.jsx)(_g,{}):(0,a.jsx)(Sg,{user:t})};o(document.getElementById("app")).render((0,a.jsx)(Tg,{}));