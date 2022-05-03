function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequirebb14;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequirebb14=s),s.register("8pxar",(function(t,n){var r,i,a;e(t.exports,"Fragment",(function(){return r}),(function(e){return r=e})),e(t.exports,"jsx",(function(){return i}),(function(e){return i=e})),e(t.exports,"jsxs",(function(){return a}),(function(e){return a=e}));var o=s("6SgHj"),l=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,h=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,i={},s=null,a=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:l,type:e,key:s,ref:a,props:i,_owner:h.current}}r=u,i=f,a=f})),s.register("6SgHj",(function(e,t){e.exports=s("dn406")})),s.register("dn406",(function(t,n){var r,i,s,a,o,l,u,c,h,d,f,p,m,g,y,v,b,w,E,k,S,_,T,I,C,N,x,A,R,D,O,L,P,M,U;e(t.exports,"Children",(function(){return r}),(function(e){return r=e})),e(t.exports,"Component",(function(){return i}),(function(e){return i=e})),e(t.exports,"Fragment",(function(){return s}),(function(e){return s=e})),e(t.exports,"Profiler",(function(){return a}),(function(e){return a=e})),e(t.exports,"PureComponent",(function(){return o}),(function(e){return o=e})),e(t.exports,"StrictMode",(function(){return l}),(function(e){return l=e})),e(t.exports,"Suspense",(function(){return u}),(function(e){return u=e})),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return c}),(function(e){return c=e})),e(t.exports,"cloneElement",(function(){return h}),(function(e){return h=e})),e(t.exports,"createContext",(function(){return d}),(function(e){return d=e})),e(t.exports,"createElement",(function(){return f}),(function(e){return f=e})),e(t.exports,"createFactory",(function(){return p}),(function(e){return p=e})),e(t.exports,"createRef",(function(){return m}),(function(e){return m=e})),e(t.exports,"forwardRef",(function(){return g}),(function(e){return g=e})),e(t.exports,"isValidElement",(function(){return y}),(function(e){return y=e})),e(t.exports,"lazy",(function(){return v}),(function(e){return v=e})),e(t.exports,"memo",(function(){return b}),(function(e){return b=e})),e(t.exports,"startTransition",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_act",(function(){return E}),(function(e){return E=e})),e(t.exports,"useCallback",(function(){return k}),(function(e){return k=e})),e(t.exports,"useContext",(function(){return S}),(function(e){return S=e})),e(t.exports,"useDebugValue",(function(){return _}),(function(e){return _=e})),e(t.exports,"useDeferredValue",(function(){return T}),(function(e){return T=e})),e(t.exports,"useEffect",(function(){return I}),(function(e){return I=e})),e(t.exports,"useId",(function(){return C}),(function(e){return C=e})),e(t.exports,"useImperativeHandle",(function(){return N}),(function(e){return N=e})),e(t.exports,"useInsertionEffect",(function(){return x}),(function(e){return x=e})),e(t.exports,"useLayoutEffect",(function(){return A}),(function(e){return A=e})),e(t.exports,"useMemo",(function(){return R}),(function(e){return R=e})),e(t.exports,"useReducer",(function(){return D}),(function(e){return D=e})),e(t.exports,"useRef",(function(){return O}),(function(e){return O=e})),e(t.exports,"useState",(function(){return L}),(function(e){return L=e})),e(t.exports,"useSyncExternalStore",(function(){return P}),(function(e){return P=e})),e(t.exports,"useTransition",(function(){return M}),(function(e){return M=e})),e(t.exports,"version",(function(){return U}),(function(e){return U=e}));var F=Symbol.for("react.element"),V=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),$=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator;var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,J={};function Z(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||X}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,Y(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ie=Object.prototype.hasOwnProperty,se={current:null},ae={key:!0,ref:!0,__self:!0,__source:!0};function oe(e,t,n){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)ie.call(t,r)&&!ae.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return{$$typeof:F,type:e,key:s,ref:a,props:i,_owner:se.current}}function le(e){return"object"==typeof e&&null!==e&&e.$$typeof===F}var ue=/\/+/g;function ce(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function he(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a,o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case F:case V:o=!0}}if(o)return i=i(o=e),e=""===r?"."+ce(o,0):r,re(i)?(n="",null!=e&&(n=e.replace(ue,"$&/")+"/"),he(i,t,n,"",(function(e){return e}))):null!=i&&(le(i)&&(i=function(e,t){return{$$typeof:F,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ue,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=""===r?".":r+":",re(e))for(var l=0;l<e.length;l++){var u=r+ce(s=e[l],l);o+=he(s,t,n,u,i)}else if("function"==typeof(u=null===(a=e)||"object"!=typeof a?null:"function"==typeof(a=Q&&a[Q]||a["@@iterator"])?a:null))for(e=u.call(e),l=0;!(s=e.next()).done;)o+=he(s=s.value,t,n,u=r+ce(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function de(e,t,n){if(null==e)return e;var r=[],i=0;return he(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function fe(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var pe={current:null},me={transition:null};r={map:de,forEach:function(e,t,n){de(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return de(e,(function(){t++})),t},toArray:function(e){return de(e,(function(e){return e}))||[]},only:function(e){if(!le(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,s=j,a=B,o=te,l=z,u=K,c={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:me,ReactCurrentOwner:se},h=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=se.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)ie.call(t,l)&&!ae.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==o?o[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:F,type:e.type,key:i,ref:s,props:r,_owner:a}},d=function(e){return(e={$$typeof:$,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:q,_context:e},e.Consumer=e},f=oe,p=function(e){var t=oe.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:H,render:e}},y=le,v=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:fe}},b=function(e,t){return{$$typeof:W,type:e,compare:void 0===t?null:t}},w=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},E=function(){throw Error("act(...) is not supported in production builds of React.")},k=function(e,t){return pe.current.useCallback(e,t)},S=function(e){return pe.current.useContext(e)},_=function(){},T=function(e){return pe.current.useDeferredValue(e)},I=function(e,t){return pe.current.useEffect(e,t)},C=function(){return pe.current.useId()},N=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)},x=function(e,t){return pe.current.useInsertionEffect(e,t)},A=function(e,t){return pe.current.useLayoutEffect(e,t)},R=function(e,t){return pe.current.useMemo(e,t)},D=function(e,t,n){return pe.current.useReducer(e,t,n)},O=function(e){return pe.current.useRef(e)},L=function(e){return pe.current.useState(e)},P=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)},M=function(){return pe.current.useTransition()},U="18.1.0"})),s.register("a9mMY",(function(t,n){var r,i,a,o,l,u,c,h,d,f,p,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return r}),(function(e){return r=e})),e(t.exports,"createPortal",(function(){return i}),(function(e){return i=e})),e(t.exports,"createRoot",(function(){return a}),(function(e){return a=e})),e(t.exports,"findDOMNode",(function(){return o}),(function(e){return o=e})),e(t.exports,"flushSync",(function(){return l}),(function(e){return l=e})),e(t.exports,"hydrate",(function(){return u}),(function(e){return u=e})),e(t.exports,"hydrateRoot",(function(){return c}),(function(e){return c=e})),e(t.exports,"render",(function(){return h}),(function(e){return h=e})),e(t.exports,"unmountComponentAtNode",(function(){return d}),(function(e){return d=e})),e(t.exports,"unstable_batchedUpdates",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_renderSubtreeIntoContainer",(function(){return p}),(function(e){return p=e})),e(t.exports,"version",(function(){return m}),(function(e){return m=e}));var g=s("6SgHj"),y=s("jM0cN");function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,w={};function E(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(w[e]=t,e=0;e<t.length;e++)b.add(t[e])}var S=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),_=Object.prototype.hasOwnProperty,T=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},C={};function N(e,t,n,r,i,s,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){x[e]=new N(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];x[t]=new N(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){x[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){x[e]=new N(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){x[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){x[e]=new N(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){x[e]=new N(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){x[e]=new N(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){x[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)}));var A=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}function D(e,t,n,r){var i=x.hasOwnProperty(t)?x[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!_.call(C,e)||!_.call(I,e)&&(T.test(e)?C[e]=!0:(I[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(A,R);x[t]=new N(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(A,R);x[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(A,R);x[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){x[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)})),x.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){x[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)}));var O=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),j=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),H=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var K=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var W=Symbol.iterator;function G(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=W&&e[W]||e["@@iterator"])?e:null}var Q,X=Object.assign;function Y(e){if(void 0===Q)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var J=!1;function Z(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),s=r.stack.split("\n"),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(1!==a||1!==o)do{if(a--,0>--o||i[a]!==s[o]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=o);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Y(e):""}function ee(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case P:return"Portal";case F:return"Profiler";case U:return"StrictMode";case B:return"Suspense";case q:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case V:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case $:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case H:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function se(e){e._valueTracker||(e._valueTracker=function(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ae(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function oe(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function le(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ue(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ce(e,t){null!=(t=t.checked)&&D(e,"checked",t,!1)}function he(e,t){ce(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?fe(e,t.type,n):t.hasOwnProperty("defaultValue")&&fe(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function de(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function fe(e,t,n){"number"===t&&oe(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pe=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(v(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ye(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(v(92));if(pe(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ve(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function be(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function we(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ee(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?we(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ke,Se,_e=(Se=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ke=ke||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return Se(e,t)}))}:Se);function Te(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];function Ne(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Ie.hasOwnProperty(e)&&Ie[e]?(""+t).trim():t+"px"}function xe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Ne(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Ie).forEach((function(e){Ce.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ie[t]=Ie[e]}))}));var Ae=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(e,t){if(t){if(Ae[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(v(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(v(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(v(62))}}function De(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=null;function Le(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Pe=null,Me=null,Ue=null;function Fe(e){if(e=xi(e)){if("function"!=typeof Pe)throw Error(v(280));var t=e.stateNode;t&&(t=Ri(t),Pe(e.stateNode,e.type,t))}}function Ve(e){Me?Ue?Ue.push(e):Ue=[e]:Me=e}function je(){if(Me){var e=Me,t=Ue;if(Ue=Me=null,Fe(e),t)for(e=0;e<t.length;e++)Fe(t[e])}}function ze(e,t){return e(t)}function Be(){}var qe=!1;function $e(e,t,n){if(qe)return e(t,n);qe=!0;try{return ze(e,t,n)}finally{qe=!1,(null!==Me||null!==Ue)&&(Be(),je())}}function He(e,t){var n=e.stateNode;if(null===n)return null;var r=Ri(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(v(231,t,typeof n));return n}var Ke=!1;if(S)try{var We={};Object.defineProperty(We,"passive",{get:function(){Ke=!0}}),window.addEventListener("test",We,We),window.removeEventListener("test",We,We)}catch(Se){Ke=!1}function Ge(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var Qe=!1,Xe=null,Ye=!1,Je=null,Ze={onError:function(e){Qe=!0,Xe=e}};function et(e,t,n,r,i,s,a,o,l){Qe=!1,Xe=null,Ge.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(v(188))}function it(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rt(i),e;if(s===r)return rt(i),t;s=s.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(3!==n.tag)throw Error(v(188));return n.stateNode.current===n?e:t}(e),null!==e?st(e):null}function st(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=st(e);if(null!==t)return t;e=e.sibling}return null}var at=y.unstable_scheduleCallback,ot=y.unstable_cancelCallback,lt=y.unstable_shouldYield,ut=y.unstable_requestPaint,ct=y.unstable_now,ht=y.unstable_getCurrentPriorityLevel,dt=y.unstable_ImmediatePriority,ft=y.unstable_UserBlockingPriority,pt=y.unstable_NormalPriority,mt=y.unstable_LowPriority,gt=y.unstable_IdlePriority,yt=null,vt=null;var bt=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(wt(e)/Et|0)|0},wt=Math.log,Et=Math.LN2;var kt=64,St=4194304;function _t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=268435455&n;if(0!==a){var o=a&~i;0!==o?r=_t(o):0!==(s&=a)&&(r=_t(s))}else 0!==(a=n&~i)?r=_t(a):0!==s&&(r=_t(s));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&0!=(4194240&s)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-bt(t)),r|=e[n],t&=~i;return r}function It(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ct(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Nt(){var e=kt;return 0==(4194240&(kt<<=1))&&(kt=64),e}function xt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function At(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-bt(t)]=n}function Rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Dt=0;function Ot(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var Lt,Pt,Mt,Ut,Ft,Vt=!1,jt=[],zt=null,Bt=null,qt=null,$t=new Map,Ht=new Map,Kt=[],Wt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gt(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":$t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(t.pointerId)}}function Qt(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=xi(t))&&Pt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Xt(e){var t=Ni(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void Ft(e.priority,(function(){Mt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=un(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xi(n))&&Pt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Oe=r,n.target.dispatchEvent(r),Oe=null,t.shift()}return!0}function Jt(e,t,n){Yt(e)&&n.delete(t)}function Zt(){Vt=!1,null!==zt&&Yt(zt)&&(zt=null),null!==Bt&&Yt(Bt)&&(Bt=null),null!==qt&&Yt(qt)&&(qt=null),$t.forEach(Jt),Ht.forEach(Jt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,Vt||(Vt=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<jt.length){en(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&en(zt,e),null!==Bt&&en(Bt,e),null!==qt&&en(qt,e),$t.forEach(t),Ht.forEach(t),n=0;n<Kt.length;n++)(r=Kt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&null===(n=Kt[0]).blockedOn;)Xt(n),null===n.blockedOn&&Kt.shift()}var nn=O.ReactCurrentBatchConfig,rn=!0;function sn(e,t,n,r){var i=Dt,s=nn.transition;nn.transition=null;try{Dt=1,on(e,t,n,r)}finally{Dt=i,nn.transition=s}}function an(e,t,n,r){var i=Dt,s=nn.transition;nn.transition=null;try{Dt=4,on(e,t,n,r)}finally{Dt=i,nn.transition=s}}function on(e,t,n,r){if(rn){var i=un(e,t,n,r);if(null===i)ei(e,t,r,ln,n),Gt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return zt=Qt(zt,e,t,n,r,i),!0;case"dragenter":return Bt=Qt(Bt,e,t,n,r,i),!0;case"mouseover":return qt=Qt(qt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return $t.set(s,Qt($t.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ht.set(s,Qt(Ht.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Gt(e,r),4&t&&-1<Wt.indexOf(e)){for(;null!==i;){var s=xi(i);if(null!==s&&Lt(s),null===(s=un(e,t,n,r))&&ei(e,t,r,ln,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else ei(e,t,r,null,n)}}var ln=null;function un(e,t,n,r){if(ln=null,null!==(e=Ni(e=Le(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function cn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ht()){case dt:return 1;case ft:return 4;case pt:case mt:return 16;case gt:return 536870912;default:return 16}default:return 16}}var hn=null,dn=null,fn=null;function pn(){if(fn)return fn;var e,t,n=dn,r=n.length,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[s-t];t++);return fn=i.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function yn(){return!1}function vn(e){function t(t,n,r,i,s){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?gn:yn,this.isPropagationStopped=yn,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var bn,wn,En,kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=vn(kn),_n=X({},kn,{view:0,detail:0}),Tn=vn(_n),In=X({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&"mousemove"===e.type?(bn=e.screenX-En.screenX,wn=e.screenY-En.screenY):wn=bn=0,En=e),bn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Cn=vn(In),Nn=vn(X({},In,{dataTransfer:0})),xn=vn(X({},_n,{relatedTarget:0})),An=vn(X({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=vn(X({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),Dn=vn(X({},kn,{data:0})),On={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ln={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Pn[e])&&!!t[e]}function Un(){return Mn}var Fn=vn(X({},_n,{key:function(e){if(e.key){var t=On[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Ln[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),Vn=vn(X({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),jn=vn(X({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),zn=vn(X({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Bn=vn(X({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=[9,13,27,32],$n=S&&"CompositionEvent"in window,Hn=null;S&&"documentMode"in document&&(Hn=document.documentMode);var Kn=S&&"TextEvent"in window&&!Hn,Wn=S&&(!$n||Hn&&8<Hn&&11>=Hn),Gn=String.fromCharCode(32),Qn=!1;function Xn(e,t){switch(e){case"keyup":return-1!==qn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Jn=!1;var Zn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Zn[e.type]:"textarea"===t}function tr(e,t,n,r){Ve(r),0<(t=ni(t,"onChange")).length&&(n=new Sn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function ir(e){Gr(e,0)}function sr(e){if(ae(Ai(e)))return e}function ar(e,t){if("change"===e)return t}var or=!1;if(S){var lr;if(S){var ur="oninput"in document;if(!ur){var cr=document.createElement("div");cr.setAttribute("oninput","return;"),ur="function"==typeof cr.oninput}lr=ur}else lr=!1;or=lr&&(!document.documentMode||9<document.documentMode)}function hr(){nr&&(nr.detachEvent("onpropertychange",dr),rr=nr=null)}function dr(e){if("value"===e.propertyName&&sr(rr)){var t=[];tr(t,rr,e,Le(e)),$e(ir,t)}}function fr(e,t,n){"focusin"===e?(hr(),rr=n,(nr=t).attachEvent("onpropertychange",dr)):"focusout"===e&&hr()}function pr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return sr(rr)}function mr(e,t){if("click"===e)return sr(t)}function gr(e,t){if("input"===e||"change"===e)return sr(t)}var yr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function vr(e,t){if(yr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_.call(t,i)||!yr(e[i],t[i]))return!1}return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n,r=br(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=br(r)}}function Er(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Er(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function kr(){for(var e=window,t=oe();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=oe((e=t.contentWindow).document)}return t}function Sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function _r(e){var t=kr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Er(n.ownerDocument.documentElement,n)){if(null!==r&&Sr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=wr(n,s);var a=wr(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tr=S&&"documentMode"in document&&11>=document.documentMode,Ir=null,Cr=null,Nr=null,xr=!1;function Ar(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==Ir||Ir!==oe(r)||("selectionStart"in(r=Ir)&&Sr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Nr&&vr(Nr,r)||(Nr=r,0<(r=ni(Cr,"onSelect")).length&&(t=new Sn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dr={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},Or={},Lr={};function Pr(e){if(Or[e])return Or[e];if(!Dr[e])return e;var t,n=Dr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Lr)return Or[e]=n[t];return e}S&&(Lr=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);var Mr=Pr("animationend"),Ur=Pr("animationiteration"),Fr=Pr("animationstart"),Vr=Pr("transitionend"),jr=new Map,zr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(e,t){jr.set(e,t),E(t,[e])}for(var qr=0;qr<zr.length;qr++){var $r=zr[qr];Br($r.toLowerCase(),"on"+($r[0].toUpperCase()+$r.slice(1)))}Br(Mr,"onAnimationEnd"),Br(Ur,"onAnimationIteration"),Br(Fr,"onAnimationStart"),Br("dblclick","onDoubleClick"),Br("focusin","onFocus"),Br("focusout","onBlur"),Br(Vr,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function Wr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,a,o,l){if(et.apply(this,arguments),Qe){if(!Qe)throw Error(v(198));var u=Xe;Qe=!1,Xe=null,Ye||(Ye=!0,Je=u)}}(r,t,void 0,e),e.currentTarget=null}function Gr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;Wr(i,o,u),s=l}else for(a=0;a<r.length;a++){if(l=(o=r[a]).instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;Wr(i,o,u),s=l}}}if(Ye)throw e=Je,Ye=!1,Je=null,e}function Qr(e,t){var n=t[Ti];void 0===n&&(n=t[Ti]=new Set);var r=e+"__bubble";n.has(r)||(Zr(t,e,2,!1),n.add(r))}function Xr(e,t,n){var r=0;t&&(r|=4),Zr(n,e,r,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Yr]){e[Yr]=!0,b.forEach((function(t){"selectionchange"!==t&&(Kr.has(t)||Xr(t,!1,e),Xr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Yr]||(t[Yr]=!0,Xr("selectionchange",!1,t))}}function Zr(e,t,n,r){switch(cn(t)){case 1:var i=sn;break;case 4:i=an;break;default:i=on}n=i.bind(null,t,n,e),i=void 0,!Ke||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ei(e,t,n,r,i){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var o=r.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==o;){if(null===(a=Ni(o)))return;if(5===(l=a.tag)||6===l){r=s=a;continue e}o=o.parentNode}}r=r.return}$e((function(){var r=s,i=Le(n),a=[];e:{var o=jr.get(e);if(void 0!==o){var l=Sn,u=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":l=Fn;break;case"focusin":u="focus",l=xn;break;case"focusout":u="blur",l=xn;break;case"beforeblur":case"afterblur":l=xn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=Nn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=jn;break;case Mr:case Ur:case Fr:l=An;break;case Vr:l=zn;break;case"scroll":l=Tn;break;case"wheel":l=Bn;break;case"copy":case"cut":case"paste":l=Rn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Vn}var c=0!=(4&t),h=!c&&"scroll"===e,d=c?null!==o?o+"Capture":null:o;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=He(p,d))&&c.push(ti(p,m,f)))),h)break;p=p.return}0<c.length&&(o=new l(o,u,null,n,i),a.push({event:o,listeners:c}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||n===Oe||!(u=n.relatedTarget||n.fromElement)||!Ni(u)&&!u[_i])&&(l||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ni(u):null)&&(u!==(h=tt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=Cn,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Vn,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?o:Ai(l),f=null==u?o:Ai(u),(o=new c(m,p+"leave",l,n,i)).target=h,o.relatedTarget=f,m=null,Ni(i)===r&&((c=new c(d,p+"enter",u,n,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(d=u,p=0,f=c=l;f;f=ri(f))p++;for(f=0,m=d;m;m=ri(m))f++;for(;0<p-f;)c=ri(c),p--;for(;0<f-p;)d=ri(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=ri(c),d=ri(d)}c=null}else c=null;null!==l&&ii(a,o,l,c,!1),null!==u&&null!==h&&ii(a,h,u,c,!0)}if("select"===(l=(o=r?Ai(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g=ar;else if(er(o))if(or)g=gr;else{g=pr;var y=fr}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(g=mr);switch(g&&(g=g(e,r))?tr(a,g,n,i):(y&&y(e,o,r),"focusout"===e&&(y=o._wrapperState)&&y.controlled&&"number"===o.type&&fe(o,"number",o.value)),y=r?Ai(r):window,e){case"focusin":(er(y)||"true"===y.contentEditable)&&(Ir=y,Cr=r,Nr=null);break;case"focusout":Nr=Cr=Ir=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,Ar(a,n,i);break;case"selectionchange":if(Tr)break;case"keydown":case"keyup":Ar(a,n,i)}var v;if($n)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Jn?Xn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Wn&&"ko"!==n.locale&&(Jn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Jn&&(v=pn()):(dn="value"in(hn=i)?hn.value:hn.textContent,Jn=!0)),0<(y=ni(r,b)).length&&(b=new Dn(b,e,null,n,i),a.push({event:b,listeners:y}),v?b.data=v:null!==(v=Yn(n))&&(b.data=v))),(v=Kn?function(e,t){switch(e){case"compositionend":return Yn(t);case"keypress":return 32!==t.which?null:(Qn=!0,Gn);case"textInput":return(e=t.data)===Gn&&Qn?null:e;default:return null}}(e,n):function(e,t){if(Jn)return"compositionend"===e||!$n&&Xn(e,t)?(e=pn(),fn=dn=hn=null,Jn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=ni(r,"onBeforeInput")).length&&(i=new Dn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=v))}Gr(a,t)}))}function ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ni(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=He(e,n))&&r.unshift(ti(e,s,i)),null!=(s=He(e,t))&&r.push(ti(e,s,i))),e=e.return}return r}function ri(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function ii(e,t,n,r,i){for(var s=t._reactName,a=[];null!==n&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(null!==l&&l===r)break;5===o.tag&&null!==u&&(o=u,i?null!=(l=He(n,s))&&a.unshift(ti(n,l,o)):i||null!=(l=He(n,s))&&a.push(ti(n,l,o))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var si=/\r\n?/g,ai=/\u0000|\uFFFD/g;function oi(e){return("string"==typeof e?e:""+e).replace(si,"\n").replace(ai,"")}function li(e,t,n){if(t=oi(t),oi(e)!==t&&n)throw Error(v(425))}function ui(){}var ci=null,hi=null;function di(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var fi="function"==typeof setTimeout?setTimeout:void 0,pi="function"==typeof clearTimeout?clearTimeout:void 0,mi="function"==typeof Promise?Promise:void 0,gi="function"==typeof queueMicrotask?queueMicrotask:void 0!==mi?function(e){return mi.resolve(null).then(e).catch(yi)}:fi;function yi(e){setTimeout((function(){throw e}))}function vi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);tn(t)}function bi(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function wi(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),ki="__reactFiber$"+Ei,Si="__reactProps$"+Ei,_i="__reactContainer$"+Ei,Ti="__reactEvents$"+Ei,Ii="__reactListeners$"+Ei,Ci="__reactHandles$"+Ei;function Ni(e){var t=e[ki];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_i]||n[ki]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=wi(e);null!==e;){if(n=e[ki])return n;e=wi(e)}return t}n=(e=n).parentNode}return null}function xi(e){return!(e=e[ki]||e[_i])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Ai(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(v(33))}function Ri(e){return e[Si]||null}var Di=[],Oi=-1;function Li(e){return{current:e}}function Pi(e){0>Oi||(e.current=Di[Oi],Di[Oi]=null,Oi--)}function Mi(e,t){Oi++,Di[Oi]=e.current,e.current=t}var Ui={},Fi=Li(Ui),Vi=Li(!1),ji=Ui;function zi(e,t){var n=e.type.contextTypes;if(!n)return Ui;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Bi(e){return null!=(e=e.childContextTypes)}function qi(){Pi(Vi),Pi(Fi)}function $i(e,t,n){if(Fi.current!==Ui)throw Error(v(168));Mi(Fi,t),Mi(Vi,n)}function Hi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(v(108,ne(e)||"Unknown",i));return X({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ui,ji=Fi.current,Mi(Fi,e),Mi(Vi,Vi.current),!0}function Wi(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=Hi(e,t,ji),r.__reactInternalMemoizedMergedChildContext=e,Pi(Vi),Pi(Fi),Mi(Fi,e)):Pi(Vi),Mi(Vi,n)}var Gi=null,Qi=!1,Xi=!1;function Yi(e){null===Gi?Gi=[e]:Gi.push(e)}function Ji(){if(!Xi&&null!==Gi){Xi=!0;var e=0,t=Dt;try{var n=Gi;for(Dt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Gi=null,Qi=!1}catch(t){throw null!==Gi&&(Gi=Gi.slice(e+1)),at(dt,Ji),t}finally{Dt=t,Xi=!1}}return null}var Zi=O.ReactCurrentBatchConfig;function es(e,t){if(e&&e.defaultProps){for(var n in t=X({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var ts=Li(null),ns=null,rs=null,is=null;function ss(){is=rs=ns=null}function as(e){var t=ts.current;Pi(ts),e._currentValue=t}function os(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ls(e,t){ns=e,is=rs=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Ro=!0),e.firstContext=null)}function us(e){var t=e._currentValue;if(is!==e)if(e={context:e,memoizedValue:t,next:null},null===rs){if(null===ns)throw Error(v(308));rs=e,ns.dependencies={lanes:0,firstContext:e}}else rs=rs.next=e;return t}var cs=null,hs=!1;function ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ps(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ms(e,t){var n=e.updateQueue;null!==n&&(n=n.shared,hu(e)?(null===(e=n.interleaved)?(t.next=t,null===cs?cs=[n]:cs.push(n)):(t.next=e.next,e.next=t),n.interleaved=t):(null===(e=n.pending)?t.next=t:(t.next=e.next,e.next=t),n.pending=t))}function gs(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}function ys(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=a:s=s.next=a,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vs(e,t,n,r){var i=e.updateQueue;hs=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(null!==o){i.shared.pending=null;var l=o,u=l.next;l.next=null,null===a?s=u:a.next=u,a=l;var c=e.alternate;null!==c&&((o=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(a=0,c=u=l=null,o=s;;){var d=o.lane,f=o.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=e,m=o;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=X({},h,d);break e;case 2:hs=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,a|=d;if(null===(o=o.next)){if(null===(o=i.shared.pending))break;o=(d=o).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);ql|=a,e.lanes=a,e.memoizedState=h}}function bs(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(v(191,i));i.call(r)}}}var ws=(new g.Component).refs;function Es(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:X({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ks={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ou(),i=lu(e),s=ps(r,i);s.payload=t,null!=n&&(s.callback=n),ms(e,s),null!==(t=uu(e,i,r))&&gs(t,e,i)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ou(),i=lu(e),s=ps(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),ms(e,s),null!==(t=uu(e,i,r))&&gs(t,e,i)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ou(),r=lu(e),i=ps(n,r);i.tag=2,null!=t&&(i.callback=t),ms(e,i),null!==(t=uu(e,r,n))&&gs(t,e,r)}};function Ss(e,t,n,r,i,s,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,a):!t.prototype||!t.prototype.isPureReactComponent||(!vr(n,r)||!vr(i,s))}function _s(e,t,n){var r=!1,i=Ui,s=t.contextType;return"object"==typeof s&&null!==s?s=us(s):(i=Bi(t)?ji:Fi.current,s=(r=null!=(r=t.contextTypes))?zi(e,i):Ui),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ks,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ts(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ks.enqueueReplaceState(t,t.state,null)}function Is(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ws,ds(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=us(s):(s=Bi(t)?ji:Fi.current,i.context=zi(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(Es(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&ks.enqueueReplaceState(i,i.state,null),vs(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}var Cs=[],Ns=0,xs=null,As=0,Rs=[],Ds=0,Os=null,Ls=1,Ps="";function Ms(e,t){Cs[Ns++]=As,Cs[Ns++]=xs,xs=e,As=t}function Us(e,t,n){Rs[Ds++]=Ls,Rs[Ds++]=Ps,Rs[Ds++]=Os,Os=e;var r=Ls;e=Ps;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ls=1<<32-bt(t)+i|n<<i|r,Ps=s+e}else Ls=1<<s|n<<i|r,Ps=e}function Fs(e){null!==e.return&&(Ms(e,1),Us(e,1,0))}function Vs(e){for(;e===xs;)xs=Cs[--Ns],Cs[Ns]=null,As=Cs[--Ns],Cs[Ns]=null;for(;e===Os;)Os=Rs[--Ds],Rs[Ds]=null,Ps=Rs[--Ds],Rs[Ds]=null,Ls=Rs[--Ds],Rs[Ds]=null}var js=null,zs=null,Bs=!1,qs=null;function $s(e,t){var n=ju(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function Hs(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,js=e,zs=bi(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,js=e,zs=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Os?{id:Ls,overflow:Ps}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=ju(18,null,null,0)).stateNode=t,n.return=e,e.child=n,js=e,zs=null,!0);default:return!1}}function Ks(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function Ws(e){if(Bs){var t=zs;if(t){var n=t;if(!Hs(e,t)){if(Ks(e))throw Error(v(418));t=bi(n.nextSibling);var r=js;t&&Hs(e,t)?$s(r,n):(e.flags=-4097&e.flags|2,Bs=!1,js=e)}}else{if(Ks(e))throw Error(v(418));e.flags=-4097&e.flags|2,Bs=!1,js=e}}}function Gs(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;js=e}function Qs(e){if(e!==js)return!1;if(!Bs)return Gs(e),Bs=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!di(e.type,e.memoizedProps)),t&&(t=zs)){if(Ks(e)){for(e=zs;e;)e=bi(e.nextSibling);throw Error(v(418))}for(;t;)$s(e,t),t=bi(t.nextSibling)}if(Gs(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){zs=bi(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}zs=null}}else zs=js?bi(e.stateNode.nextSibling):null;return!0}function Xs(){zs=js=null,Bs=!1}function Ys(e){null===qs?qs=[e]:qs.push(e)}function Js(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=i.refs;t===ws&&(t=i.refs={}),null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function Zs(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ea(e){return(0,e._init)(e._payload)}function ta(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Bu(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function o(e,t,n,r){return null===t||6!==t.tag?((t=Ku(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===M?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===H&&ea(s)===t.type)?((r=i(t,n.props)).ref=Js(e,t,n),r.return=e,r):((r=qu(n.type,n.key,n.props,null,e.mode,r)).ref=Js(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Wu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=$u(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Ku(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case L:return(n=qu(t.type,t.key,t.props,null,e.mode,n)).ref=Js(e,null,t),n.return=e,n;case P:return(t=Wu(t,e.mode,n)).return=e,t;case H:return h(e,(0,t._init)(t._payload),n)}if(pe(t)||G(t))return(t=$u(t,e.mode,n,null)).return=e,t;Zs(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:o(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case L:return n.key===i?l(e,t,n,r):null;case P:return n.key===i?u(e,t,n,r):null;case H:return d(e,t,(i=n._init)(n._payload),r)}if(pe(n)||G(n))return null!==i?null:c(e,t,n,r,null);Zs(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return o(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case L:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case P:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case H:return f(e,t,n,(0,r._init)(r._payload),i)}if(pe(r)||G(r))return c(t,e=e.get(n)||null,r,i,null);Zs(t,r)}return null}return function o(l,u,c,p){if("object"==typeof c&&null!==c&&c.type===M&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case L:e:{for(var m=c.key,g=u;null!==g;){if(g.key===m){if((m=c.type)===M){if(7===g.tag){n(l,g.sibling),(u=i(g,c.props.children)).return=l,l=u;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===H&&ea(m)===g.type){n(l,g.sibling),(u=i(g,c.props)).ref=Js(l,g,c),u.return=l,l=u;break e}n(l,g);break}t(l,g),g=g.sibling}c.type===M?((u=$u(c.props.children,l.mode,p,c.key)).return=l,l=u):((p=qu(c.type,c.key,c.props,null,l.mode,p)).ref=Js(l,u,c),p.return=l,l=p)}return a(l);case P:e:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=Wu(c,l.mode,p)).return=l,l=u}return a(l);case H:return o(l,u,(g=c._init)(c._payload),p)}if(pe(c))return function(i,a,o,l){for(var u=null,c=null,p=a,m=a=0,g=null;null!==p&&m<o.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,o[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===o.length)return n(i,p),Bs&&Ms(i,m),u;if(null===p){for(;m<o.length;m++)null!==(p=h(i,o[m],l))&&(a=s(p,a,m),null===c?u=p:c.sibling=p,c=p);return Bs&&Ms(i,m),u}for(p=r(i,p);m<o.length;m++)null!==(g=f(p,i,m,o[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),a=s(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),Bs&&Ms(i,m),u}(l,u,c,p);if(G(c))return function(i,a,o,l){var u=G(o);if("function"!=typeof u)throw Error(v(150));if(null==(o=u.call(o)))throw Error(v(151));for(var c=u=null,p=a,m=a=0,g=null,y=o.next();null!==p&&!y.done;m++,y=o.next()){p.index>m?(g=p,p=null):g=p.sibling;var b=d(i,p,y.value,l);if(null===b){null===p&&(p=g);break}e&&p&&null===b.alternate&&t(i,p),a=s(b,a,m),null===c?u=b:c.sibling=b,c=b,p=g}if(y.done)return n(i,p),Bs&&Ms(i,m),u;if(null===p){for(;!y.done;m++,y=o.next())null!==(y=h(i,y.value,l))&&(a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return Bs&&Ms(i,m),u}for(p=r(i,p);!y.done;m++,y=o.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return e&&p.forEach((function(e){return t(i,e)})),Bs&&Ms(i,m),u}(l,u,c,p);Zs(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l,l=u):(n(l,u),(u=Ku(c,l.mode,p)).return=l,l=u),a(l)):n(l,u)}}var na=ta(!0),ra=ta(!1),ia={},sa=Li(ia),aa=Li(ia),oa=Li(ia);function la(e){if(e===ia)throw Error(v(174));return e}function ua(e,t){switch(Mi(oa,t),Mi(aa,e),Mi(sa,ia),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ee(null,"");break;default:t=Ee(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Pi(sa),Mi(sa,t)}function ca(){Pi(sa),Pi(aa),Pi(oa)}function ha(e){la(oa.current);var t=la(sa.current),n=Ee(t,e.type);t!==n&&(Mi(aa,e),Mi(sa,n))}function da(e){aa.current===e&&(Pi(sa),Pi(aa))}var fa=Li(0);function pa(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=[];function ga(){for(var e=0;e<ma.length;e++)ma[e]._workInProgressVersionPrimary=null;ma.length=0}var ya=O.ReactCurrentDispatcher,va=O.ReactCurrentBatchConfig,ba=0,wa=null,Ea=null,ka=null,Sa=!1,_a=!1,Ta=0,Ia=0;function Ca(){throw Error(v(321))}function Na(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yr(e[n],t[n]))return!1;return!0}function xa(e,t,n,r,i,s){if(ba=s,wa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ya.current=null===e||null===e.memoizedState?fo:po,e=n(r,i),_a){s=0;do{if(_a=!1,Ta=0,25<=s)throw Error(v(301));s+=1,ka=Ea=null,t.updateQueue=null,ya.current=mo,e=n(r,i)}while(_a)}if(ya.current=ho,t=null!==Ea&&null!==Ea.next,ba=0,ka=Ea=wa=null,Sa=!1,t)throw Error(v(300));return e}function Aa(){var e=0!==Ta;return Ta=0,e}function Ra(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ka?wa.memoizedState=ka=e:ka=ka.next=e,ka}function Da(){if(null===Ea){var e=wa.alternate;e=null!==e?e.memoizedState:null}else e=Ea.next;var t=null===ka?wa.memoizedState:ka.next;if(null!==t)ka=t,Ea=e;else{if(null===e)throw Error(v(310));e={memoizedState:(Ea=e).memoizedState,baseState:Ea.baseState,baseQueue:Ea.baseQueue,queue:Ea.queue,next:null},null===ka?wa.memoizedState=ka=e:ka=ka.next=e}return ka}function Oa(e,t){return"function"==typeof t?t(e):t}function La(e){var t=Da(),n=t.queue;if(null===n)throw Error(v(311));n.lastRenderedReducer=e;var r=Ea,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((ba&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(o=l=h,a=r):l=l.next=h,wa.lanes|=c,ql|=c}u=u.next}while(null!==u&&u!==s);null===l?a=r:l.next=o,yr(r,t.memoizedState)||(Ro=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,wa.lanes|=s,ql|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pa(e){var t=Da(),n=t.queue;if(null===n)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{s=e(s,a.action),a=a.next}while(a!==i);yr(s,t.memoizedState)||(Ro=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ma(){}function Ua(e,t){var n=wa,r=Da(),i=t(),s=!yr(r.memoizedState,i);if(s&&(r.memoizedState=i,Ro=!0),r=r.queue,Ga(ja.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==ka&&1&ka.memoizedState.tag){if(n.flags|=2048,qa(9,Va.bind(null,n,r,i,t),void 0,null),null===Ml)throw Error(v(349));0!=(30&ba)||Fa(n,t,i)}return i}function Fa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=wa.updateQueue)?(t={lastEffect:null,stores:null},wa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Va(e,t,n,r){t.value=n,t.getSnapshot=r,za(t)&&uu(e,1,-1)}function ja(e,t,n){return n((function(){za(t)&&uu(e,1,-1)}))}function za(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yr(e,n)}catch(e){return!0}}function Ba(e){var t=Ra();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:e},t.queue=e,e=e.dispatch=ao.bind(null,wa,e),[t.memoizedState,e]}function qa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=wa.updateQueue)?(t={lastEffect:null,stores:null},wa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function $a(){return Da().memoizedState}function Ha(e,t,n,r){var i=Ra();wa.flags|=e,i.memoizedState=qa(1|t,n,void 0,void 0===r?null:r)}function Ka(e,t,n,r){var i=Da();r=void 0===r?null:r;var s=void 0;if(null!==Ea){var a=Ea.memoizedState;if(s=a.destroy,null!==r&&Na(r,a.deps))return void(i.memoizedState=qa(t,n,s,r))}wa.flags|=e,i.memoizedState=qa(1|t,n,s,r)}function Wa(e,t){return Ha(8390656,8,e,t)}function Ga(e,t){return Ka(2048,8,e,t)}function Qa(e,t){return Ka(4,2,e,t)}function Xa(e,t){return Ka(4,4,e,t)}function Ya(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ja(e,t,n){return n=null!=n?n.concat([e]):null,Ka(4,4,Ya.bind(null,t,e),n)}function Za(){}function eo(e,t){var n=Da();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Na(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function to(e,t){var n=Da();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Na(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function no(e,t,n){return 0==(21&ba)?(e.baseState&&(e.baseState=!1,Ro=!0),e.memoizedState=n):(yr(n,t)||(n=Nt(),wa.lanes|=n,ql|=n,e.baseState=!0),t)}function ro(e,t){var n=Dt;Dt=0!==n&&4>n?n:4,e(!0);var r=va.transition;va.transition={};try{e(!1),t()}finally{Dt=n,va.transition=r}}function io(){return Da().memoizedState}function so(e,t,n){var r=lu(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oo(e)?lo(t,n):(uo(e,t,n),null!==(e=uu(e,r,n=ou()))&&co(e,t,r))}function ao(e,t,n){var r=lu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oo(e))lo(t,i);else{uo(e,t,i);var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,yr(o,a))return}catch(e){}null!==(e=uu(e,r,n=ou()))&&co(e,t,r)}}function oo(e){var t=e.alternate;return e===wa||null!==t&&t===wa}function lo(e,t){_a=Sa=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uo(e,t,n){hu(e)?(null===(e=t.interleaved)?(n.next=n,null===cs?cs=[t]:cs.push(t)):(n.next=e.next,e.next=n),t.interleaved=n):(null===(e=t.pending)?n.next=n:(n.next=e.next,e.next=n),t.pending=n)}function co(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}var ho={readContext:us,useCallback:Ca,useContext:Ca,useEffect:Ca,useImperativeHandle:Ca,useInsertionEffect:Ca,useLayoutEffect:Ca,useMemo:Ca,useReducer:Ca,useRef:Ca,useState:Ca,useDebugValue:Ca,useDeferredValue:Ca,useTransition:Ca,useMutableSource:Ca,useSyncExternalStore:Ca,useId:Ca,unstable_isNewReconciler:!1},fo={readContext:us,useCallback:function(e,t){return Ra().memoizedState=[e,void 0===t?null:t],e},useContext:us,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Ha(4194308,4,Ya.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ha(4,2,e,t)},useMemo:function(e,t){var n=Ra();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ra();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=so.bind(null,wa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ra().memoizedState=e},useState:Ba,useDebugValue:Za,useDeferredValue:function(e){return Ra().memoizedState=e},useTransition:function(){var e=Ba(!1),t=e[0];return e=ro.bind(null,e[1]),Ra().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=wa,i=Ra();if(Bs){if(void 0===n)throw Error(v(407));n=n()}else{if(n=t(),null===Ml)throw Error(v(349));0!=(30&ba)||Fa(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Wa(ja.bind(null,r,s,e),[e]),r.flags|=2048,qa(9,Va.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ra(),t=Ml.identifierPrefix;if(Bs){var n=Ps;t=":"+t+"R"+(n=(Ls&~(1<<32-bt(Ls)-1)).toString(32)+n),0<(n=Ta++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=Ia++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},po={readContext:us,useCallback:eo,useContext:us,useEffect:Ga,useImperativeHandle:Ja,useInsertionEffect:Qa,useLayoutEffect:Xa,useMemo:to,useReducer:La,useRef:$a,useState:function(){return La(Oa)},useDebugValue:Za,useDeferredValue:function(e){return no(Da(),Ea.memoizedState,e)},useTransition:function(){return[La(Oa)[0],Da().memoizedState]},useMutableSource:Ma,useSyncExternalStore:Ua,useId:io,unstable_isNewReconciler:!1},mo={readContext:us,useCallback:eo,useContext:us,useEffect:Ga,useImperativeHandle:Ja,useInsertionEffect:Qa,useLayoutEffect:Xa,useMemo:to,useReducer:Pa,useRef:$a,useState:function(){return Pa(Oa)},useDebugValue:Za,useDeferredValue:function(e){var t=Da();return null===Ea?t.memoizedState=e:no(t,Ea.memoizedState,e)},useTransition:function(){return[Pa(Oa)[0],Da().memoizedState]},useMutableSource:Ma,useSyncExternalStore:Ua,useId:io,unstable_isNewReconciler:!1};function go(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i}}function yo(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var vo,bo,wo,Eo="function"==typeof WeakMap?WeakMap:Map;function ko(e,t,n){(n=ps(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yl||(Yl=!0,Jl=r),yo(0,t)},n}function So(e,t,n){(n=ps(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yo(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){yo(0,t),"function"!=typeof r&&(null===Zl?Zl=new Set([this]):Zl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function _o(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Eo;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Lu.bind(null,e,t,n),t.then(e,e))}function To(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Io(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=ps(-1,1)).tag=2,ms(n,t))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}function Co(e,t){if(!Bs)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function No(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xo(e,t,n){var r=t.pendingProps;switch(Vs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return No(t),null;case 1:case 17:return Bi(t.type)&&qi(),No(t),null;case 3:return r=t.stateNode,ca(),Pi(Vi),Pi(Fi),ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Qs(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==qs&&(mu(qs),qs=null))),No(t),null;case 5:da(t);var i=la(oa.current);if(n=t.type,null!==e&&null!=t.stateNode)bo(e,t,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(v(166));return No(t),null}if(e=la(sa.current),Qs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ki]=t,r[Si]=s,e=0!=(1&t.mode),n){case"dialog":Qr("cancel",r),Qr("close",r);break;case"iframe":case"object":case"embed":Qr("load",r);break;case"video":case"audio":for(i=0;i<Hr.length;i++)Qr(Hr[i],r);break;case"source":Qr("error",r);break;case"img":case"image":case"link":Qr("error",r),Qr("load",r);break;case"details":Qr("toggle",r);break;case"input":ue(r,s),Qr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Qr("invalid",r);break;case"textarea":ye(r,s),Qr("invalid",r)}for(var a in Re(n,s),i=null,s)if(s.hasOwnProperty(a)){var o=s[a];"children"===a?"string"==typeof o?r.textContent!==o&&(!0!==s.suppressHydrationWarning&&li(r.textContent,o,e),i=["children",o]):"number"==typeof o&&r.textContent!==""+o&&(!0!==s.suppressHydrationWarning&&li(r.textContent,o,e),i=["children",""+o]):w.hasOwnProperty(a)&&null!=o&&"onScroll"===a&&Qr("scroll",r)}switch(n){case"input":se(r),de(r,s,!0);break;case"textarea":se(r),be(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=ui)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{a=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=we(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),"select"===n&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ki]=t,e[Si]=r,vo(e,t),t.stateNode=e;e:{switch(a=De(n,r),n){case"dialog":Qr("cancel",e),Qr("close",e),i=r;break;case"iframe":case"object":case"embed":Qr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hr.length;i++)Qr(Hr[i],e);i=r;break;case"source":Qr("error",e),i=r;break;case"img":case"image":case"link":Qr("error",e),Qr("load",e),i=r;break;case"details":Qr("toggle",e),i=r;break;case"input":ue(e,r),i=le(e,r),Qr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),Qr("invalid",e);break;case"textarea":ye(e,r),i=ge(e,r),Qr("invalid",e)}for(s in Re(n,i),o=i)if(o.hasOwnProperty(s)){var l=o[s];"style"===s?xe(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&_e(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&Te(e,l):"number"==typeof l&&Te(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(w.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Qr("scroll",e):null!=l&&D(e,s,l,a))}switch(n){case"input":se(e),de(e,r,!1);break;case"textarea":se(e),be(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?me(e,!!r.multiple,s,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=ui)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return No(t),null;case 6:if(e&&null!=t.stateNode)wo(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(v(166));if(n=la(oa.current),la(sa.current),Qs(t)){if(r=t.stateNode,n=t.memoizedProps,r[ki]=t,(s=r.nodeValue!==n)&&null!==(e=js))switch(e.tag){case 3:li(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&li(r.nodeValue,n,0!=(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ki]=t,t.stateNode=r}return No(t),null;case 13:if(Pi(fa),r=t.memoizedState,Bs&&null!==zs&&0!=(1&t.mode)&&0==(128&t.flags)){for(r=zs;r;)r=bi(r.nextSibling);return Xs(),t.flags|=98560,t}if(null!==r&&null!==r.dehydrated){if(r=Qs(t),null===e){if(!r)throw Error(v(318));if(!(r=null!==(r=t.memoizedState)?r.dehydrated:null))throw Error(v(317));r[ki]=t}else Xs(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;return No(t),null}return null!==qs&&(mu(qs),qs=null),0!=(128&t.flags)?(t.lanes=n,t):(r=null!==r,n=!1,null===e?Qs(t):n=null!==e.memoizedState,r!==n&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&fa.current)?0===zl&&(zl=3):_u())),null!==t.updateQueue&&(t.flags|=4),No(t),null);case 4:return ca(),null===e&&Jr(t.stateNode.containerInfo),No(t),null;case 10:return as(t.type._context),No(t),null;case 19:if(Pi(fa),null===(s=t.memoizedState))return No(t),null;if(r=0!=(128&t.flags),null===(a=s.rendering))if(r)Co(s,!1);else{if(0!==zl||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=pa(e))){for(t.flags|=128,Co(s,!1),null!==(r=a.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(a=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Mi(fa,1&fa.current|2),t.child}e=e.sibling}null!==s.tail&&ct()>Ql&&(t.flags|=128,r=!0,Co(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=pa(a))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Co(s,!0),null===s.tail&&"hidden"===s.tailMode&&!a.alternate&&!Bs)return No(t),null}else 2*ct()-s.renderingStartTime>Ql&&1073741824!==n&&(t.flags|=128,r=!0,Co(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=s.last)?n.sibling=a:t.child=a,s.last=a)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ct(),t.sibling=null,n=fa.current,Mi(fa,r?1&n|2:1&n),t):(No(t),null);case 22:case 23:return wu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Vl)&&(No(t),6&t.subtreeFlags&&(t.flags|=8192)):No(t),null;case 24:case 25:return null}throw Error(v(156,t.tag))}vo=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},bo=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,la(sa.current);var s,a=null;switch(n){case"input":i=le(e,i),r=le(e,r),a=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),a=[];break;case"textarea":i=ge(e,i),r=ge(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=ui)}for(u in Re(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(w.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(o=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(null!=l||null!=o))if("style"===u)if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,o=o?o.__html:void 0,null!=l&&o!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(w.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Qr("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},wo=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ao=O.ReactCurrentOwner,Ro=!1;function Do(e,t,n,r){t.child=null===e?ra(t,null,n,r):na(t,e.child,n,r)}function Oo(e,t,n,r,i){n=n.render;var s=t.ref;return ls(t,i),r=xa(e,t,n,r,s,i),n=Aa(),null===e||Ro?(Bs&&n&&Fs(t),t.flags|=1,Do(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,el(e,t,i))}function Lo(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||zu(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=qu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Po(e,t,s,r,i))}if(s=e.child,0==(e.lanes&i)){var a=s.memoizedProps;if((n=null!==(n=n.compare)?n:vr)(a,r)&&e.ref===t.ref)return el(e,t,i)}return t.flags|=1,(e=Bu(s,r)).ref=t.ref,e.return=t,t.child=e}function Po(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(vr(s,r)&&e.ref===t.ref){if(Ro=!1,t.pendingProps=r=s,0==(e.lanes&i))return t.lanes=e.lanes,el(e,t,i);0!=(131072&e.flags)&&(Ro=!0)}}return Fo(e,t,n,r,i)}function Mo(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mi(jl,Vl),Vl|=n;else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Mi(jl,Vl),Vl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,Mi(jl,Vl),Vl|=r}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,Mi(jl,Vl),Vl|=r;return Do(e,t,i,n),t.child}function Uo(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fo(e,t,n,r,i){var s=Bi(n)?ji:Fi.current;return s=zi(t,s),ls(t,i),n=xa(e,t,n,r,s,i),r=Aa(),null===e||Ro?(Bs&&r&&Fs(t),t.flags|=1,Do(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,el(e,t,i))}function Vo(e,t,n,r,i){if(Bi(n)){var s=!0;Ki(t)}else s=!1;if(ls(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),_s(t,n,r),Is(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;"object"==typeof u&&null!==u?u=us(u):u=zi(t,u=Bi(n)?ji:Fi.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;h||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==r||l!==u)&&Ts(t,a,r,u),hs=!1;var d=t.memoizedState;a.state=d,vs(t,r,a,i),l=t.memoizedState,o!==r||d!==l||Vi.current||hs?("function"==typeof c&&(Es(t,n,c,r),l=t.memoizedState),(o=hs||Ss(t,n,o,r,d,l,u))?(h||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,fs(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:es(t.type,o),a.props=u,h=t.pendingProps,d=a.context,"object"==typeof(l=n.contextType)&&null!==l?l=us(l):l=zi(t,l=Bi(n)?ji:Fi.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==h||d!==l)&&Ts(t,a,r,l),hs=!1,d=t.memoizedState,a.state=d,vs(t,r,a,i);var p=t.memoizedState;o!==h||d!==p||Vi.current||hs?("function"==typeof f&&(Es(t,n,f,r),p=t.memoizedState),(u=hs||Ss(t,n,u,r,d,p,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return jo(e,t,n,r,s,i)}function jo(e,t,n,r,i,s){Uo(e,t);var a=0!=(128&t.flags);if(!r&&!a)return i&&Wi(t,n,!1),el(e,t,s);r=t.stateNode,Ao.current=t;var o=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=na(t,e.child,null,s),t.child=na(t,null,o,s)):Do(e,t,o,s),t.memoizedState=r.state,i&&Wi(t,n,!0),t.child}function zo(e){var t=e.stateNode;t.pendingContext?$i(0,t.pendingContext,t.pendingContext!==t.context):t.context&&$i(0,t.context,!1),ua(e,t.containerInfo)}function Bo(e,t,n,r,i){return Xs(),Ys(i),t.flags|=256,Do(e,t,n,r),t.child}var qo={dehydrated:null,treeContext:null,retryLane:0};function $o(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ho(e,t){return{baseLanes:e.baseLanes|t,cachePool:null,transitions:e.transitions}}function Ko(e,t,n){var r,i=t.pendingProps,s=fa.current,a=!1,o=0!=(128&t.flags);if((r=o)||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Mi(fa,1&s),null===e)return Ws(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},0==(1&i)&&null!==a?(a.childLanes=0,a.pendingProps=s):a=Hu(s,i,0,null),e=$u(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=$o(n),t.memoizedState=qo,e):Wo(t,s));if(null!==(s=e.memoizedState)){if(null!==(r=s.dehydrated)){if(o)return 256&t.flags?(t.flags&=-257,Xo(e,t,n,Error(v(422)))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=i.fallback,s=t.mode,i=Hu({mode:"visible",children:i.children},s,0,null),(a=$u(a,s,n,null)).flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,0!=(1&t.mode)&&na(t,e.child,null,n),t.child.memoizedState=$o(n),t.memoizedState=qo,a);if(0==(1&t.mode))t=Xo(e,t,n,null);else if("$!"===r.data)t=Xo(e,t,n,Error(v(419)));else if(i=0!=(n&e.childLanes),Ro||i){if(null!==(i=Ml)){switch(n&-n){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(i=0!=(a&(i.suspendedLanes|n))?0:a)&&i!==s.retryLane&&(s.retryLane=i,uu(e,i,-1))}_u(),t=Xo(e,t,n,Error(v(421)))}else"$?"===r.data?(t.flags|=128,t.child=e.child,t=Mu.bind(null,e),r._reactRetry=t,t=null):(n=s.treeContext,zs=bi(r.nextSibling),js=t,Bs=!0,qs=null,null!==n&&(Rs[Ds++]=Ls,Rs[Ds++]=Ps,Rs[Ds++]=Os,Ls=n.id,Ps=n.overflow,Os=t),(t=Wo(t,t.pendingProps.children)).flags|=4096);return t}return a?(i=Qo(e,t,i.children,i.fallback,n),a=t.child,s=e.child.memoizedState,a.memoizedState=null===s?$o(n):Ho(s,n),a.childLanes=e.childLanes&~n,t.memoizedState=qo,i):(n=Go(e,t,i.children,n),t.memoizedState=null,n)}return a?(i=Qo(e,t,i.children,i.fallback,n),a=t.child,s=e.child.memoizedState,a.memoizedState=null===s?$o(n):Ho(s,n),a.childLanes=e.childLanes&~n,t.memoizedState=qo,i):(n=Go(e,t,i.children,n),t.memoizedState=null,n)}function Wo(e,t){return(t=Hu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Go(e,t,n,r){var i=e.child;return e=i.sibling,n=Bu(i,{mode:"visible",children:n}),0==(1&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n}function Qo(e,t,n,r,i){var s=t.mode,a=(e=e.child).sibling,o={mode:"hidden",children:n};return 0==(1&s)&&t.child!==e?((n=t.child).childLanes=0,n.pendingProps=o,t.deletions=null):(n=Bu(e,o)).subtreeFlags=14680064&e.subtreeFlags,null!==a?r=Bu(a,r):(r=$u(r,s,i,null)).flags|=2,r.return=t,n.return=t,n.sibling=r,t.child=n,r}function Xo(e,t,n,r){return null!==r&&Ys(r),na(t,e.child,null,n),(e=Wo(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Yo(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),os(e.return,t,n)}function Jo(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zo(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Do(e,t,r.children,n),0!=(2&(r=fa.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Yo(e,n,t);else if(19===e.tag)Yo(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Mi(fa,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===pa(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Jo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===pa(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Jo(t,!0,n,null,s);break;case"together":Jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),ql|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(v(153));if(null!==t.child){for(n=Bu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Bu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function tl(e,t){switch(Vs(t),t.tag){case 1:return Bi(t.type)&&qi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ca(),Pi(Vi),Pi(Fi),ga(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return da(t),null;case 13:if(Pi(fa),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(v(340));Xs()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Pi(fa),null;case 4:return ca(),null;case 10:return as(t.type._context),null;case 22:case 23:return wu(),null;default:return null}}var nl=!1,rl=!1,il="function"==typeof WeakSet?WeakSet:Set,sl=null;function al(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Ou(e,t,n)}else n.current=null}function ol(e,t,n){try{n()}catch(n){Ou(e,t,n)}}var ll=!1;function ul(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&ol(t,n,s)}i=i.next}while(i!==r)}}function cl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function dl(e){var t=e.alternate;null!==t&&(e.alternate=null,dl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ki],delete t[Si],delete t[Ti],delete t[Ii],delete t[Ci])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fl(e){return 5===e.tag||3===e.tag||4===e.tag}function pl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||fl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ml(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=ui));else if(4!==r&&null!==(e=e.child))for(ml(e,t,n),e=e.sibling;null!==e;)ml(e,t,n),e=e.sibling}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}var yl=null,vl=!1;function bl(e,t,n){for(n=n.child;null!==n;)wl(e,t,n),n=n.sibling}function wl(e,t,n){if(vt&&"function"==typeof vt.onCommitFiberUnmount)try{vt.onCommitFiberUnmount(yt,n)}catch(e){}switch(n.tag){case 5:rl||al(n,t);case 6:var r=yl,i=vl;yl=null,bl(e,t,n),vl=i,null!==(yl=r)&&(vl?(e=yl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):yl.removeChild(n.stateNode));break;case 18:null!==yl&&(vl?(e=yl,n=n.stateNode,8===e.nodeType?vi(e.parentNode,n):1===e.nodeType&&vi(e,n),tn(e)):vi(yl,n.stateNode));break;case 4:r=yl,i=vl,yl=n.stateNode.containerInfo,vl=!0,bl(e,t,n),yl=r,vl=i;break;case 0:case 11:case 14:case 15:if(!rl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,void 0!==a&&(0!=(2&s)||0!=(4&s))&&ol(n,t,a),i=i.next}while(i!==r)}bl(e,t,n);break;case 1:if(!rl&&(al(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Ou(n,t,e)}bl(e,t,n);break;case 21:bl(e,t,n);break;case 22:1&n.mode?(rl=(r=rl)||null!==n.memoizedState,bl(e,t,n),rl=r):bl(e,t,n);break;default:bl(e,t,n)}}function El(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new il),t.forEach((function(t){var r=Uu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function kl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;null!==o;){switch(o.tag){case 5:yl=o.stateNode,vl=!1;break e;case 3:case 4:yl=o.stateNode.containerInfo,vl=!0;break e}o=o.return}if(null===yl)throw Error(v(160));wl(s,a,i),yl=null,vl=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(e){Ou(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Sl(t,e),t=t.sibling}function Sl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kl(t,e),_l(e),4&r){try{ul(3,e,e.return),cl(3,e)}catch(t){Ou(e,e.return,t)}try{ul(5,e,e.return)}catch(t){Ou(e,e.return,t)}}break;case 1:kl(t,e),_l(e),512&r&&null!==n&&al(n,n.return);break;case 5:if(kl(t,e),_l(e),512&r&&null!==n&&al(n,n.return),32&e.flags){var i=e.stateNode;try{Te(i,"")}catch(t){Ou(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===o&&"radio"===s.type&&null!=s.name&&ce(i,s),De(o,a);var u=De(o,s);for(a=0;a<l.length;a+=2){var c=l[a],h=l[a+1];"style"===c?xe(i,h):"dangerouslySetInnerHTML"===c?_e(i,h):"children"===c?Te(i,h):D(i,c,h,u)}switch(o){case"input":he(i,s);break;case"textarea":ve(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?me(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?me(i,!!s.multiple,s.defaultValue,!0):me(i,!!s.multiple,s.multiple?[]:"",!1))}i[Si]=s}catch(t){Ou(e,e.return,t)}}break;case 6:if(kl(t,e),_l(e),4&r){if(null===e.stateNode)throw Error(v(162));u=e.stateNode,c=e.memoizedProps;try{u.nodeValue=c}catch(t){Ou(e,e.return,t)}}break;case 3:if(kl(t,e),_l(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){Ou(e,e.return,t)}break;case 4:default:kl(t,e),_l(e);break;case 13:kl(t,e),_l(e),8192&(u=e.child).flags&&null!==u.memoizedState&&(null===u.alternate||null===u.alternate.memoizedState)&&(Gl=ct()),4&r&&El(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(rl=(c=rl)||u,kl(t,e),rl=c):kl(t,e),_l(e),8192&r){c=null!==e.memoizedState;e:for(h=null,d=e;;){if(5===d.tag){if(null===h){h=d;try{i=d.stateNode,c?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(o=d.stateNode,a=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ne("display",a))}catch(t){Ou(e,e.return,t)}}}else if(6===d.tag){if(null===h)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(t){Ou(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}if(c&&!u&&0!=(1&e.mode))for(sl=e,e=e.child;null!==e;){for(u=sl=e;null!==sl;){switch(h=(c=sl).child,c.tag){case 0:case 11:case 14:case 15:ul(4,c,c.return);break;case 1:if(al(c,c.return),"function"==typeof(s=c.stateNode).componentWillUnmount){d=c,f=c.return;try{i=d,s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(e){Ou(d,f,e)}}break;case 5:al(c,c.return);break;case 22:if(null!==c.memoizedState){Nl(u);continue}}null!==h?(h.return=c,sl=h):Nl(u)}e=e.sibling}}break;case 19:kl(t,e),_l(e),4&r&&El(e);case 21:}}function _l(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(fl(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(Te(i,""),r.flags&=-33),gl(e,pl(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;ml(e,pl(e),s);break;default:throw Error(v(161))}}catch(t){Ou(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Tl(e,t,n){sl=e,Il(e,t,n)}function Il(e,t,n){for(var r=0!=(1&e.mode);null!==sl;){var i=sl,s=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||nl;if(!a){var o=i.alternate,l=null!==o&&null!==o.memoizedState||rl;o=nl;var u=rl;if(nl=a,(rl=l)&&!u)for(sl=i;null!==sl;)l=(a=sl).child,22===a.tag&&null!==a.memoizedState?xl(i):null!==l?(l.return=a,sl=l):xl(i);for(;null!==s;)sl=s,Il(s,t,n),s=s.sibling;sl=i,nl=o,rl=u}Cl(e)}else 0!=(8772&i.subtreeFlags)&&null!==s?(s.return=i,sl=s):Cl(e)}}function Cl(e){for(;null!==sl;){var t=sl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:rl||cl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!rl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:es(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&bs(t,s,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}bs(t,a,n)}break;case 5:var o=t.stateNode;if(null===n&&4&t.flags){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var h=c.dehydrated;null!==h&&tn(h)}}}break;default:throw Error(v(163))}rl||512&t.flags&&hl(t)}catch(e){Ou(t,t.return,e)}}if(t===e){sl=null;break}if(null!==(n=t.sibling)){n.return=t.return,sl=n;break}sl=t.return}}function Nl(e){for(;null!==sl;){var t=sl;if(t===e){sl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,sl=n;break}sl=t.return}}function xl(e){for(;null!==sl;){var t=sl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(e){Ou(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){Ou(t,i,e)}}var s=t.return;try{hl(t)}catch(e){Ou(t,s,e)}break;case 5:var a=t.return;try{hl(t)}catch(e){Ou(t,a,e)}}}catch(e){Ou(t,t.return,e)}if(t===e){sl=null;break}var o=t.sibling;if(null!==o){o.return=t.return,sl=o;break}sl=t.return}}var Al,Rl=Math.ceil,Dl=O.ReactCurrentDispatcher,Ol=O.ReactCurrentOwner,Ll=O.ReactCurrentBatchConfig,Pl=0,Ml=null,Ul=null,Fl=0,Vl=0,jl=Li(0),zl=0,Bl=null,ql=0,$l=0,Hl=0,Kl=null,Wl=null,Gl=0,Ql=1/0,Xl=null,Yl=!1,Jl=null,Zl=null,eu=!1,tu=null,nu=0,ru=0,iu=null,su=-1,au=0;function ou(){return 0!=(6&Pl)?ct():-1!==su?su:su=ct()}function lu(e){return 0==(1&e.mode)?1:0!=(2&Pl)&&0!==Fl?Fl&-Fl:null!==Zi.transition?(0===au&&(au=Nt()),au):0!==(e=Dt)?e:e=void 0===(e=window.event)?16:cn(e.type)}function uu(e,t,n){if(50<ru)throw ru=0,iu=null,Error(v(185));var r=cu(e,t);return null===r?null:(At(r,t,n),0!=(2&Pl)&&r===Ml||(r===Ml&&(0==(2&Pl)&&($l|=t),4===zl&&gu(r,Fl)),du(r,n),1===t&&0===Pl&&0==(1&e.mode)&&(Ql=ct()+500,Qi&&Ji())),r)}function cu(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function hu(e){return(null!==Ml||null!==cs)&&0!=(1&e.mode)&&0==(2&Pl)}function du(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-bt(s),o=1<<a,l=i[a];-1===l?0!=(o&n)&&0==(o&r)||(i[a]=It(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}(e,t);var r,i=Tt(e,e===Ml?Fl:0);if(0===i)null!==n&&ot(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(null!=n&&ot(n),1===t)0===e.tag?(r=yu.bind(null,e),Qi=!0,Yi(r)):Yi(yu.bind(null,e)),gi((function(){0===Pl&&Ji()})),n=null;else{switch(Ot(i)){case 1:n=dt;break;case 4:n=ft;break;case 16:default:n=pt;break;case 536870912:n=gt}n=Fu(n,fu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fu(e,t){if(su=-1,au=0,0!=(6&Pl))throw Error(v(327));var n=e.callbackNode;if(Ru()&&e.callbackNode!==n)return null;var r=Tt(e,e===Ml?Fl:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=Tu(e,r);else{t=r;var i=Pl;Pl|=2;var s=Su();for(Ml===e&&Fl===t||(Xl=null,Ql=ct()+500,Eu(e,t));;)try{Cu();break}catch(t){ku(e,t)}ss(),Dl.current=s,Pl=i,null!==Ul?t=0:(Ml=null,Fl=0,t=zl)}if(0!==t){if(2===t&&(0!==(i=Ct(e))&&(r=i,t=pu(e,i))),1===t)throw n=Bl,Eu(e,0),gu(e,r),du(e,ct()),n;if(6===t)gu(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yr(s(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=Tu(e,r))&&(0!==(s=Ct(e))&&(r=s,t=pu(e,s))),1===t))throw n=Bl,Eu(e,0),gu(e,r),du(e,ct()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:case 5:Au(e,Wl,Xl);break;case 3:if(gu(e,r),(130023424&r)===r&&10<(t=Gl+500-ct())){if(0!==Tt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ou(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fi(Au.bind(null,e,Wl,Xl),t);break}Au(e,Wl,Xl);break;case 4:if(gu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-bt(r);s=1<<a,(a=t[a])>i&&(i=a),r&=~s}if(r=i,10<(r=(120>(r=ct()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rl(r/1960))-r)){e.timeoutHandle=fi(Au.bind(null,e,Wl,Xl),r);break}Au(e,Wl,Xl);break;default:throw Error(v(329))}}}return du(e,ct()),e.callbackNode===n?fu.bind(null,e):null}function pu(e,t){var n=Kl;return e.current.memoizedState.isDehydrated&&(Eu(e,t).flags|=256),2!==(e=Tu(e,t))&&(t=Wl,Wl=n,null!==t&&mu(t)),e}function mu(e){null===Wl?Wl=e:Wl.push.apply(Wl,e)}function gu(e,t){for(t&=~Hl,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function yu(e){if(0!=(6&Pl))throw Error(v(327));Ru();var t=Tt(e,0);if(0==(1&t))return du(e,ct()),null;var n=Tu(e,t);if(0!==e.tag&&2===n){var r=Ct(e);0!==r&&(t=r,n=pu(e,r))}if(1===n)throw n=Bl,Eu(e,0),gu(e,t),du(e,ct()),n;if(6===n)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Au(e,Wl,Xl),du(e,ct()),null}function vu(e,t){var n=Pl;Pl|=1;try{return e(t)}finally{0===(Pl=n)&&(Ql=ct()+500,Qi&&Ji())}}function bu(e){null!==tu&&0===tu.tag&&0==(6&Pl)&&Ru();var t=Pl;Pl|=1;var n=Ll.transition,r=Dt;try{if(Ll.transition=null,Dt=1,e)return e()}finally{Dt=r,Ll.transition=n,0==(6&(Pl=t))&&Ji()}}function wu(){Vl=jl.current,Pi(jl)}function Eu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,pi(n)),null!==Ul)for(n=Ul.return;null!==n;){var r=n;switch(Vs(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&qi();break;case 3:ca(),Pi(Vi),Pi(Fi),ga();break;case 5:da(r);break;case 4:ca();break;case 13:case 19:Pi(fa);break;case 10:as(r.type._context);break;case 22:case 23:wu()}n=n.return}if(Ml=e,Ul=e=Bu(e.current,null),Fl=Vl=t,zl=0,Bl=null,Hl=$l=ql=0,Wl=Kl=null,null!==cs){for(t=0;t<cs.length;t++)if(null!==(r=(n=cs[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var a=s.next;s.next=i,r.next=a}n.pending=r}cs=null}return e}function ku(e,t){for(;;){var n=Ul;try{if(ss(),ya.current=ho,Sa){for(var r=wa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Sa=!1}if(ba=0,ka=Ea=wa=null,_a=!1,Ta=0,Ol.current=null,null===n||null===n.return){zl=1,Bl=t,Ul=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Fl,o.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=o,h=c.tag;if(0==(1&c.mode)&&(0===h||11===h||15===h)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=To(a);if(null!==f){f.flags&=-257,Io(f,a,o,0,t),1&f.mode&&_o(s,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(0==(1&t)){_o(s,u,t),_u();break e}l=Error(v(426))}else if(Bs&&1&o.mode){var g=To(a);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),Io(g,a,o,0,t),Ys(l);break e}}s=l,4!==zl&&(zl=2),null===Kl?Kl=[s]:Kl.push(s),l=go(l,o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,ys(o,ko(0,l,t));break e;case 1:s=l;var y=o.type,b=o.stateNode;if(0==(128&o.flags)&&("function"==typeof y.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===Zl||!Zl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,ys(o,So(o,s,t));break e}}o=o.return}while(null!==o)}xu(n)}catch(e){t=e,Ul===n&&null!==n&&(Ul=n=n.return);continue}break}}function Su(){var e=Dl.current;return Dl.current=ho,null===e?ho:e}function _u(){0!==zl&&3!==zl&&2!==zl||(zl=4),null===Ml||0==(268435455&ql)&&0==(268435455&$l)||gu(Ml,Fl)}function Tu(e,t){var n=Pl;Pl|=2;var r=Su();for(Ml===e&&Fl===t||(Xl=null,Eu(e,t));;)try{Iu();break}catch(t){ku(e,t)}if(ss(),Pl=n,Dl.current=r,null!==Ul)throw Error(v(261));return Ml=null,Fl=0,zl}function Iu(){for(;null!==Ul;)Nu(Ul)}function Cu(){for(;null!==Ul&&!lt();)Nu(Ul)}function Nu(e){var t=Al(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,null===t?xu(e):Ul=t,Ol.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=xo(n,t,Vl)))return void(Ul=n)}else{if(null!==(n=tl(n,t)))return n.flags&=32767,void(Ul=n);if(null===e)return zl=6,void(Ul=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ul=t);Ul=t=e}while(null!==t);0===zl&&(zl=5)}function Au(e,t,n){var r=Dt,i=Ll.transition;try{Ll.transition=null,Dt=1,function(e,t,n,r){do{Ru()}while(null!==tu);if(0!=(6&Pl))throw Error(v(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===Ml&&(Ul=Ml=null,Fl=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||eu||(eu=!0,Fu(pt,(function(){return Ru(),null}))),s=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||s){s=Ll.transition,Ll.transition=null;var a=Dt;Dt=1;var o=Pl;Pl|=4,Ol.current=null,function(e,t){if(ci=rn,Sr(e=kr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(e){n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(o=a+i),h!==s||0!==r&&3!==h.nodeType||(l=a+r),3===h.nodeType&&(a+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++u===i&&(o=a),d===s&&++c===r&&(l=a),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===o||-1===l?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},rn=!1,sl=t;null!==sl;)if(e=(t=sl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,sl=e;else for(;null!==sl;){t=sl;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:es(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;if(1===w.nodeType)w.textContent="";else if(9===w.nodeType){var E=w.body;null!=E&&(E.textContent="")}break;default:throw Error(v(163))}}catch(e){Ou(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,sl=e;break}sl=t.return}p=ll,ll=!1}(e,n),Sl(n,e),_r(hi),rn=!!ci,hi=ci=null,e.current=n,Tl(n,e,i),ut(),Pl=o,Dt=a,Ll.transition=s}else e.current=n;if(eu&&(eu=!1,tu=e,nu=i),0===(s=e.pendingLanes)&&(Zl=null),function(e){if(vt&&"function"==typeof vt.onCommitFiberRoot)try{vt.onCommitFiberRoot(yt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),du(e,ct()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r(t[n]);if(Yl)throw Yl=!1,e=Jl,Jl=null,e;0!=(1&nu)&&0!==e.tag&&Ru(),0!=(1&(s=e.pendingLanes))?e===iu?ru++:(ru=0,iu=e):ru=0,Ji()}(e,t,n,r)}finally{Ll.transition=i,Dt=r}return null}function Ru(){if(null!==tu){var e=Ot(nu),t=Ll.transition,n=Dt;try{if(Ll.transition=null,Dt=16>e?16:e,null===tu)var r=!1;else{if(e=tu,tu=null,nu=0,0!=(6&Pl))throw Error(v(331));var i=Pl;for(Pl|=4,sl=e.current;null!==sl;){var s=sl,a=s.child;if(0!=(16&sl.flags)){var o=s.deletions;if(null!==o){for(var l=0;l<o.length;l++){var u=o[l];for(sl=u;null!==sl;){var c=sl;switch(c.tag){case 0:case 11:case 15:ul(8,c,s)}var h=c.child;if(null!==h)h.return=c,sl=h;else for(;null!==sl;){var d=(c=sl).sibling,f=c.return;if(dl(c),c===u){sl=null;break}if(null!==d){d.return=f,sl=d;break}sl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}sl=s}}if(0!=(2064&s.subtreeFlags)&&null!==a)a.return=s,sl=a;else e:for(;null!==sl;){if(0!=(2048&(s=sl).flags))switch(s.tag){case 0:case 11:case 15:ul(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,sl=y;break e}sl=s.return}}var b=e.current;for(sl=b;null!==sl;){var w=(a=sl).child;if(0!=(2064&a.subtreeFlags)&&null!==w)w.return=a,sl=w;else e:for(a=b;null!==sl;){if(0!=(2048&(o=sl).flags))try{switch(o.tag){case 0:case 11:case 15:cl(9,o)}}catch(e){Ou(o,o.return,e)}if(o===a){sl=null;break e}var E=o.sibling;if(null!==E){E.return=o.return,sl=E;break e}sl=o.return}}if(Pl=i,Ji(),vt&&"function"==typeof vt.onPostCommitFiberRoot)try{vt.onPostCommitFiberRoot(yt,e)}catch(e){}r=!0}return r}finally{Dt=n,Ll.transition=t}}return!1}function Du(e,t,n){ms(e,t=ko(0,t=go(n,t),1)),t=ou(),null!==(e=cu(e,1))&&(At(e,1,t),du(e,t))}function Ou(e,t,n){if(3===e.tag)Du(e,e,n);else for(;null!==t;){if(3===t.tag){Du(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Zl||!Zl.has(r))){ms(t,e=So(t,e=go(n,e),1)),e=ou(),null!==(t=cu(t,1))&&(At(t,1,e),du(t,e));break}}t=t.return}}function Lu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ou(),e.pingedLanes|=e.suspendedLanes&n,Ml===e&&(Fl&n)===n&&(4===zl||3===zl&&(130023424&Fl)===Fl&&500>ct()-Gl?Eu(e,0):Hl|=n),du(e,t)}function Pu(e,t){0===t&&(0==(1&e.mode)?t=1:(t=St,0==(130023424&(St<<=1))&&(St=4194304)));var n=ou();null!==(e=cu(e,t))&&(At(e,t,n),du(e,n))}function Mu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Pu(e,n)}function Uu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}null!==r&&r.delete(t),Pu(e,n)}function Fu(e,t){return at(e,t)}function Vu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ju(e,t,n,r){return new Vu(e,t,n,r)}function zu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Bu(e,t){var n=e.alternate;return null===n?((n=ju(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qu(e,t,n,r,i,s){var a=2;if(r=e,"function"==typeof e)zu(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case M:return $u(n.children,i,s,t);case U:a=8,i|=8;break;case F:return(e=ju(12,n,t,2|i)).elementType=F,e.lanes=s,e;case B:return(e=ju(13,n,t,i)).elementType=B,e.lanes=s,e;case q:return(e=ju(19,n,t,i)).elementType=q,e.lanes=s,e;case K:return Hu(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case V:a=10;break e;case j:a=9;break e;case z:a=11;break e;case $:a=14;break e;case H:a=16,r=null;break e}throw Error(v(130,null==e?e:typeof e,""))}return(t=ju(a,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function $u(e,t,n,r){return(e=ju(7,e,r,t)).lanes=n,e}function Hu(e,t,n,r){return(e=ju(22,e,r,t)).elementType=K,e.lanes=n,e.stateNode={},e}function Ku(e,t,n){return(e=ju(6,e,null,t)).lanes=n,e}function Wu(e,t,n){return(t=ju(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xt(0),this.expirationTimes=xt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qu(e,t,n,r,i,s,a,o,l){return e=new Gu(e,t,n,o,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=ju(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ds(s),e}function Xu(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:P,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Yu(e){if(!e)return Ui;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Bi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(v(171))}if(1===e.tag){var n=e.type;if(Bi(n))return Hi(e,n,t)}return t}function Ju(e,t,n,r,i,s,a,o,l){return(e=Qu(n,r,!0,e,0,s,0,o,l)).context=Yu(null),n=e.current,(s=ps(r=ou(),i=lu(n))).callback=null!=t?t:null,ms(n,s),e.current.lanes=i,At(e,i,r),du(e,r),e}function Zu(e,t,n,r){var i=t.current,s=ou(),a=lu(i);return n=Yu(n),null===t.context?t.context=n:t.pendingContext=n,(t=ps(s,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),ms(i,t),null!==(e=uu(i,a,s))&&gs(e,i,a),a}function ec(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function tc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function nc(e,t){tc(e,t),(e=e.alternate)&&tc(e,t)}Al=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Vi.current)Ro=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Ro=!1,function(e,t,n){switch(t.tag){case 3:zo(t),Xs();break;case 5:ha(t);break;case 1:Bi(t.type)&&Ki(t);break;case 4:ua(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Mi(ts,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Mi(fa,1&fa.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Ko(e,t,n):(Mi(fa,1&fa.current),null!==(e=el(e,t,n))?e.sibling:null);Mi(fa,1&fa.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return Zo(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Mi(fa,fa.current),r)break;return null;case 22:case 23:return t.lanes=0,Mo(e,t,n)}return el(e,t,n)}(e,t,n);Ro=0!=(131072&e.flags)}else Ro=!1,Bs&&0!=(1048576&t.flags)&&Us(t,As,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps;var i=zi(t,Fi.current);ls(t,n),i=xa(null,t,r,e,i,n);var s=Aa();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Bi(r)?(s=!0,Ki(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,ds(t),i.updater=ks,t.stateNode=i,i._reactInternals=t,Is(t,r,e,n),t=jo(null,t,r,!0,s,n)):(t.tag=0,Bs&&s&&Fs(t),Do(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return zu(e)?1:0;if(null!=e){if((e=e.$$typeof)===z)return 11;if(e===$)return 14}return 2}(r),e=es(r,e),i){case 0:t=Fo(null,t,r,e,n);break e;case 1:t=Vo(null,t,r,e,n);break e;case 11:t=Oo(null,t,r,e,n);break e;case 14:t=Lo(null,t,r,es(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Fo(e,t,r,i=t.elementType===r?i:es(r,i),n);case 1:return r=t.type,i=t.pendingProps,Vo(e,t,r,i=t.elementType===r?i:es(r,i),n);case 3:e:{if(zo(t),null===e)throw Error(v(387));r=t.pendingProps,i=(s=t.memoizedState).element,fs(e,t),vs(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Bo(e,t,r,n,i=Error(v(423)));break e}if(r!==i){t=Bo(e,t,r,n,i=Error(v(424)));break e}for(zs=bi(t.stateNode.containerInfo.firstChild),js=t,Bs=!0,qs=null,n=ra(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Xs(),r===i){t=el(e,t,n);break e}Do(e,t,r,n)}t=t.child}return t;case 5:return ha(t),null===e&&Ws(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,di(r,i)?a=null:null!==s&&di(r,s)&&(t.flags|=32),Uo(e,t),Do(e,t,a,n),t.child;case 6:return null===e&&Ws(t),null;case 13:return Ko(e,t,n);case 4:return ua(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=na(t,null,r,n):Do(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Oo(e,t,r,i=t.elementType===r?i:es(r,i),n);case 7:return Do(e,t,t.pendingProps,n),t.child;case 8:case 12:return Do(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Mi(ts,r._currentValue),r._currentValue=a,null!==s)if(yr(s.value,a)){if(s.children===i.children&&!Vi.current){t=el(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var o=s.dependencies;if(null!==o){a=s.child;for(var l=o.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=ps(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),os(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(v(341));a.lanes|=n,null!==(o=a.alternate)&&(o.lanes|=n),os(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}Do(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ls(t,n),r=r(i=us(i)),t.flags|=1,Do(e,t,r,n),t.child;case 14:return i=es(r=t.type,t.pendingProps),Lo(e,t,r,i=es(r.type,i),n);case 15:return Po(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:es(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Bi(r)?(e=!0,Ki(t)):e=!1,ls(t,n),_s(t,r,i),Is(t,r,i,n),jo(null,t,r,!0,e,n);case 19:return Zo(e,t,n);case 22:return Mo(e,t,n)}throw Error(v(156,t.tag))};var rc="function"==typeof reportError?reportError:function(e){console.error(e)};function ic(e){this._internalRoot=e}function sc(e){this._internalRoot=e}function ac(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function oc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function lc(){}function uc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if("function"==typeof i){var o=i;i=function(){var e=ec(a);o.call(e)}}Zu(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=ec(a);s.call(e)}}var a=Ju(t,r,e,0,null,!1,0,"",lc);return e._reactRootContainer=a,e[_i]=a.current,Jr(8===e.nodeType?e.parentNode:e),bu(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var o=r;r=function(){var e=ec(l);o.call(e)}}var l=Qu(e,0,!1,null,0,!1,0,"",lc);return e._reactRootContainer=l,e[_i]=l.current,Jr(8===e.nodeType?e.parentNode:e),bu((function(){Zu(t,l,n,r)})),l}(n,t,e,i,r);return ec(a)}sc.prototype.render=ic.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(v(409));Zu(e,t,null,null)},sc.prototype.unmount=ic.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;bu((function(){Zu(null,e,null,null)})),t[_i]=null}},sc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&0!==t&&t<Kt[n].priority;n++);Kt.splice(n,0,e),0===n&&Xt(e)}},Lt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_t(t.pendingLanes);0!==n&&(Rt(t,1|n),du(t,ct()),0==(6&Pl)&&(Ql=ct()+500,Ji()))}break;case 13:var r=ou();bu((function(){return uu(e,1,r)})),nc(e,1)}},Pt=function(e){13===e.tag&&(uu(e,134217728,ou()),nc(e,134217728))},Mt=function(e){if(13===e.tag){var t=ou(),n=lu(e);uu(e,n,t),nc(e,n)}},Ut=function(){return Dt},Ft=function(e,t){var n=Dt;try{return Dt=e,t()}finally{Dt=n}},Pe=function(e,t,n){switch(t){case"input":if(he(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ri(r);if(!i)throw Error(v(90));ae(r),he(r,i)}}}break;case"textarea":ve(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},ze=vu,Be=bu;var cc={usingClientEntryPoint:!1,Events:[xi,Ai,Ri,Ve,je,vu]},hc={findFiberByHostInstance:Ni,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},dc={bundleType:hc.bundleType,version:hc.version,rendererPackageName:hc.rendererPackageName,rendererConfig:hc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=it(e))?null:e.stateNode},findFiberByHostInstance:hc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{yt=fc.inject(dc),vt=fc}catch(Se){}}r=cc,i=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ac(t))throw Error(v(200));return Xu(e,t,null,n)},a=function(e,t){if(!ac(e))throw Error(v(299));var n=!1,r="",i=rc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Qu(e,1,!1,null,0,n,0,r,i),e[_i]=t.current,Jr(8===e.nodeType?e.parentNode:e),new ic(t)},o=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(v(188));throw e=Object.keys(e).join(","),Error(v(268,e))}return e=null===(e=it(t))?null:e.stateNode},l=function(e){return bu(e)},u=function(e,t,n){if(!oc(t))throw Error(v(200));return uc(null,e,t,!0,n)},c=function(e,t,n){if(!ac(e))throw Error(v(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",a=rc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=Ju(t,null,e,1,null!=n?n:null,i,0,s,a),e[_i]=t.current,Jr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new sc(t)},h=function(e,t,n){if(!oc(t))throw Error(v(200));return uc(null,e,t,!1,n)},d=function(e){if(!oc(e))throw Error(v(40));return!!e._reactRootContainer&&(bu((function(){uc(null,null,e,!1,(function(){e._reactRootContainer=null,e[_i]=null}))})),!0)},f=vu,p=function(e,t,n,r){if(!oc(n))throw Error(v(200));if(null==e||void 0===e._reactInternals)throw Error(v(38));return uc(e,t,n,!1,r)},m="18.1.0-next-22edb9f77-20220426"})),s.register("jM0cN",(function(e,t){e.exports=s("7ugxT")})),s.register("7ugxT",(function(t,n){var r,i,s,a,o,l,u,c,h,d,f,p,m,g,y,v,b,w,E;function k(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<T(i,t)))break e;e[r]=t,e[n]=i,n=r}}function S(e){return 0===e.length?null:e[0]}function _(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,s=i>>>1;r<s;){var a=2*(r+1)-1,o=e[a],l=a+1,u=e[l];if(0>T(o,n))l<i&&0>T(u,o)?(e[r]=u,e[l]=n,r=l):(e[r]=o,e[a]=n,r=a);else{if(!(l<i&&0>T(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}function T(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(function(){return r}),(function(e){return r=e})),e(t.exports,"unstable_IdlePriority",(function(){return i}),(function(e){return i=e})),e(t.exports,"unstable_ImmediatePriority",(function(){return s}),(function(e){return s=e})),e(t.exports,"unstable_LowPriority",(function(){return a}),(function(e){return a=e})),e(t.exports,"unstable_NormalPriority",(function(){return o}),(function(e){return o=e})),e(t.exports,"unstable_Profiling",(function(){return l}),(function(e){return l=e})),e(t.exports,"unstable_UserBlockingPriority",(function(){return u}),(function(e){return u=e})),e(t.exports,"unstable_cancelCallback",(function(){return c}),(function(e){return c=e})),e(t.exports,"unstable_continueExecution",(function(){return h}),(function(e){return h=e})),e(t.exports,"unstable_forceFrameRate",(function(){return d}),(function(e){return d=e})),e(t.exports,"unstable_getCurrentPriorityLevel",(function(){return f}),(function(e){return f=e})),e(t.exports,"unstable_getFirstCallbackNode",(function(){return p}),(function(e){return p=e})),e(t.exports,"unstable_next",(function(){return m}),(function(e){return m=e})),e(t.exports,"unstable_pauseExecution",(function(){return g}),(function(e){return g=e})),e(t.exports,"unstable_requestPaint",(function(){return y}),(function(e){return y=e})),e(t.exports,"unstable_runWithPriority",(function(){return v}),(function(e){return v=e})),e(t.exports,"unstable_scheduleCallback",(function(){return b}),(function(e){return b=e})),e(t.exports,"unstable_shouldYield",(function(){return w}),(function(e){return w=e})),e(t.exports,"unstable_wrapCallback",(function(){return E}),(function(e){return E=e})),"object"==typeof performance&&"function"==typeof performance.now){var I=performance;r=function(){return I.now()}}else{var C=Date,N=C.now();r=function(){return C.now()-N}}var x=[],A=[],R=1,D=null,O=3,L=!1,P=!1,M=!1,U="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,V="undefined"!=typeof setImmediate?setImmediate:null;function j(e){for(var t=S(A);null!==t;){if(null===t.callback)_(A);else{if(!(t.startTime<=e))break;_(A),t.sortIndex=t.expirationTime,k(x,t)}t=S(A)}}function z(e){if(M=!1,j(e),!P)if(null!==S(x))P=!0,Z(B);else{var t=S(A);null!==t&&ee(z,t.startTime-e)}}function B(e,t){P=!1,M&&(M=!1,F(K),K=-1),L=!0;var n=O;try{for(j(t),D=S(x);null!==D&&(!(D.expirationTime>t)||e&&!Q());){var i=D.callback;if("function"==typeof i){D.callback=null,O=D.priorityLevel;var s=i(D.expirationTime<=t);t=r(),"function"==typeof s?D.callback=s:D===S(x)&&_(x),j(t)}else _(x);D=S(x)}if(null!==D)var a=!0;else{var o=S(A);null!==o&&ee(z,o.startTime-t),a=!1}return a}finally{D=null,O=n,L=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var q,$=!1,H=null,K=-1,W=5,G=-1;function Q(){return!(r()-G<W)}function X(){if(null!==H){var e=r();G=e;var t=!0;try{t=H(!0,e)}finally{t?q():($=!1,H=null)}}else $=!1}if("function"==typeof V)q=function(){V(X)};else if("undefined"!=typeof MessageChannel){var Y=new MessageChannel,J=Y.port2;Y.port1.onmessage=X,q=function(){J.postMessage(null)}}else q=function(){U(X,0)};function Z(e){H=e,$||($=!0,q())}function ee(e,t){K=U((function(){e(r())}),t)}i=5,s=1,a=4,o=3,l=null,u=2,c=function(e){e.callback=null},h=function(){P||L||(P=!0,Z(B))},d=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<e?Math.floor(1e3/e):5},f=function(){return O},p=function(){return S(x)},m=function(e){switch(O){case 1:case 2:case 3:var t=3;break;default:t=O}var n=O;O=t;try{return e()}finally{O=n}},g=function(){},y=function(){},v=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=O;O=e;try{return t()}finally{O=n}},b=function(e,t,n){var i=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?i+n:i:n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:R++,callback:t,priorityLevel:e,startTime:n,expirationTime:s=n+s,sortIndex:-1},n>i?(e.sortIndex=n,k(A,e),null===S(x)&&e===S(A)&&(M?(F(K),K=-1):M=!0,ee(z,n-i))):(e.sortIndex=s,k(x,e),P||L||(P=!0,Z(B))),e},w=Q,E=function(e){var t=O;return function(){var n=O;O=t;try{return e.apply(this,arguments)}finally{O=n}}}}));var a;a=s("8pxar");var o,l,u=s("6SgHj");!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),o=(l=s("a9mMY")).createRoot,l.hydrateRoot;u=s("6SgHj");
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
 */function _(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(T(n)&&T(s)){if(!_(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function T(e){return null!==e&&"object"==typeof e}
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
 */function I(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function C(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function N(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class x{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=A),void 0===r.error&&(r.error=A),void 0===r.complete&&(r.complete=A);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function A(){}
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
function R(e){return e&&e._delegate?e._delegate:e}
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
 */function D(e,t){return new Promise(((n,r)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;r(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class O{transaction(e,t="readonly"){return new L(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new P(this._db.createObjectStore(e,t))}close(){this._db.close()}constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}}class L{objectStore(e){return new P(this._transaction.objectStore(e))}constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}}class P{index(e){return new M(this._store.index(e))}createIndex(e,t,n){return new M(this._store.createIndex(e,t,n))}get(e){return D(this._store.get(e),"Error reading from IndexedDB")}put(e,t){return D(this._store.put(e,t),"Error writing to IndexedDB")}delete(e){return D(this._store.delete(e),"Error deleting from IndexedDB")}clear(){return D(this._store.clear(),"Error clearing IndexedDB object store")}constructor(e){this._store=e}}class M{get(e){return D(this._index.get(e),"Error reading from IndexedDB")}constructor(e){this._index=e}}class U{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class F{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new p;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class V{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new F(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const j=[];var z;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(z||(z={}));const B={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},q=z.INFO,$={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},H=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=$[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class K{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?B[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}constructor(e){this.name=e,this._logLevel=q,this._logHandler=H,this._userLogHandler=null,j.push(this)}}
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
class W{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const G=new K("@firebase/app"),Q={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},X=new Map,Y=new Map;function J(e,t){try{e.container.addComponent(t)}catch(n){G.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Z(e){const t=e.name;if(Y.has(t))return G.debug(`There were multiple attempts to register component ${t}.`),!1;Y.set(t,e);for(const t of X.values())J(t,e);return!0}function ee(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const te=new k("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class ne{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new U("app",(()=>this),"PUBLIC"))}}
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
 */function re(e="[DEFAULT]"){const t=X.get(e);if(!t)throw te.create("no-app",{appName:e});return t}function ie(e,t,n){var r;let i=null!==(r=Q[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void G.warn(e.join(" "))}Z(new U(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let se=null;function ae(){var e,t,n;return se||(se=(e="firebase-heartbeat-database",t=1,n=(e,t)=>{0===t&&e.createObjectStore("firebase-heartbeat-store")},new Promise(((r,i)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{r(new O(e.target.result))},s.onerror=e=>{var t;i(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},s.onupgradeneeded=e=>{n(new O(s.result),e.oldVersion,e.newVersion,new L(s.transaction))}}catch(e){i(`Error opening indexedDB: ${e.message}`)}}))).catch((e=>{throw te.create("storage-open",{originalErrorMessage:e.message})}))),se}async function oe(e,t){try{const n=(await ae()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,le(e)),n.complete}catch(e){throw te.create("storage-set",{originalErrorMessage:e.message})}}function le(e){return`${e.name}!${e.options.appId}`}
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
 */class ue{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ce();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ce(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),de(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),de(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=d(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new he(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function ce(){return(new Date).toISOString().substring(0,10)}class he{async runIndexedDBEnvironmentCheck(){return!!w()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ae()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(le(e))}catch(e){throw te.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function de(e){return d(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var fe;fe="",Z(new U("platform-logger",(e=>new W(e)),"PRIVATE")),Z(new U("heartbeat",(e=>new ue(e)),"PRIVATE")),ie("@firebase/app","0.7.22",fe),ie("@firebase/app","0.7.22","esm2017"),ie("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ie("firebase","9.7.0","app");function pe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function me(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ge=me,ye=new k("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ve=new K("@firebase/auth");function be(e,...t){ve.logLevel<=z.ERROR&&ve.error(`Auth (9.7.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,...t){throw _e(e,...t)}function Ee(e,...t){return _e(e,...t)}function ke(e,t,n){const r=Object.assign(Object.assign({},ge()),{[t]:n});return new k("auth","Firebase",r).create(t,{appName:e.name})}function Se(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&we(e,"argument-error"),ke(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _e(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ye.create(e,...t)}function Te(e,t,...n){if(!e)throw _e(t,...n)}function Ie(e){const t="INTERNAL ASSERTION FAILED: "+e;throw be(t),new Error(t)}function Ce(e,t){e||Ie(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new Map;function xe(e){Ce(e instanceof Function,"Expected a class definition");let t=Ne.get(e);return t?(Ce(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ne.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function Ae(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Re(){return"http:"===De()||"https:"===De()}function De(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Oe{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Re()||y()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,Ce(t>e,"Short delay should be less than long delay!"),this.isMobile=g()||v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e,t){Ce(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ue=new Oe(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ve(e,t,n,r,i={}){return je(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=I(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),Pe.fetch()(Be(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))}))}async function je(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Me),t);try{const t=new qe(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw $e(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $e(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw $e(e,"email-already-in-use",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw ke(e,o,a);we(e,o)}}catch(t){if(t instanceof E)throw t;we(e,"network-request-failed")}}async function ze(e,t,n,r,i={}){const s=await Ve(e,t,n,r,i);return"mfaPendingCredential"in s&&we(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Be(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Le(e.config,i):`${e.config.apiScheme}://${i}`}class qe{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ee(this.auth,"network-request-failed"))),Ue.get())}))}}function $e(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ee(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function He(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){return 1e3*Number(e)}function We(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return be("JWT malformed, contained fewer than 3 sections"),null;try{const e=f(n);return e?JSON.parse(e):(be("Failed to decode base64 JWT payload"),null)}catch(e){return be("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ge(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof E&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Qe{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{_initializeTime(){this.lastSignInTime=He(this.lastLoginAt),this.creationTime=He(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function Ye(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ge(e,async function(e,t){return Ve(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Te(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=pe(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=function(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}(e.providerData,a),l=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),c=!!l&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Xe(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,h)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(void 0!==e.idToken,"internal-error"),Te(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=We(e);return Te(t,"internal-error"),Te(void 0!==t.exp,"internal-error"),Te(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Te(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await je(e,{},(async()=>{const n=I({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Be(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pe.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Je;return n&&(Te("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Te("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Te("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Je,this.toJSON())}_performRefresh(){return Ie("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e,t){Te("string"==typeof e||void 0===e,"internal-error",{appName:t})}class et{async getIdToken(e){const t=await Ge(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=R(e),r=await n.getIdToken(t),i=We(r);Te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:He(Ke(i.auth_time)),issuedAtTime:He(Ke(i.iat)),expirationTime:He(Ke(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=R(e);await Ye(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ye(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ge(this,async function(e,t){return Ve(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:k}=t;Te(v&&k,e,"internal-error");const S=Je.fromJSON(this.name,k);Te("string"==typeof v,e,"internal-error"),Ze(c,e.name),Ze(h,e.name),Te("boolean"==typeof b,e,"internal-error"),Te("boolean"==typeof w,e,"internal-error"),Ze(d,e.name),Ze(f,e.name),Ze(p,e.name),Ze(m,e.name),Ze(g,e.name),Ze(y,e.name);const _=new et({uid:v,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new Je;r.updateFromServerResponse(t);const i=new et({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Ye(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=pe(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xe(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */class tt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}tt.type="NONE";const nt=tt;
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
 */function rt(e,t,n){return`firebase:${e}:${t}:${n}`}class it{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new it(xe(nt),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||xe(nt);const s=rt(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(s);if(t){const r=et._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new it(i,e,n)):new it(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=rt(this.userKey,r.apiKey,i),this.fullPersistenceKey=rt("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ut(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(at(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ht(t))return"Blackberry";if(dt(t))return"Webos";if(ot(t))return"Safari";if((t.includes("chrome/")||lt(t))&&!t.includes("edge/"))return"Chrome";if(ct(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function at(e=m()){return/firefox\//i.test(e)}function ot(e=m()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function lt(e=m()){return/crios\//i.test(e)}function ut(e=m()){return/iemobile/i.test(e)}function ct(e=m()){return/android/i.test(e)}function ht(e=m()){return/blackberry/i.test(e)}function dt(e=m()){return/webos/i.test(e)}function ft(e=m()){return/iphone|ipad|ipod/i.test(e)}function pt(e=m()){return ft(e)||ct(e)||dt(e)||ht(e)||/windows phone/i.test(e)||ut(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(e,t=[]){let n;switch(e){case"Browser":n=st(m());break;case"Worker":n=`${st(m())}-${e}`;break;default:n=e}return`${n}/JsCore/9.7.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xe(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await it.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ye(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?R(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(xe(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new k("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xe(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await it.create(this,[xe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Te(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vt(this),this.idTokenSubscription=new vt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ye,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function yt(e){return R(e)}class vt{get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new x(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{toJSON(){return Ie("not implemented")}_getIdTokenResponse(e){return Ie("not implemented")}_linkToIdToken(e,t){return Ie("not implemented")}_getReauthenticationResolver(e){return Ie("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(e,t){return Ve(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends bt{static _fromEmailAndPassword(e,t){return new Et(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Et(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ze(e,"POST","/v1/accounts:signInWithPassword",Fe(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ze(e,"POST","/v1/accounts:signInWithEmailLink",Fe(e,t))}(e,{email:this._email,oobCode:this._password});default:we(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return wt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ze(e,"POST","/v1/accounts:signInWithEmailLink",Fe(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:we(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e,t){return ze(e,"POST","/v1/accounts:signInWithIdp",Fe(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends bt{static _fromParams(e){const t=new St(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):we("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=pe(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new St(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return kt(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,kt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=I(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends bt{static _fromVerification(e,t){return new Tt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Tt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ze(e,"POST","/v1/accounts:signInWithPhoneNumber",Fe(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ze(e,"POST","/v1/accounts:signInWithPhoneNumber",Fe(e,t));if(n.temporaryProof)throw $e(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ze(e,"POST","/v1/accounts:signInWithPhoneNumber",Fe(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),_t)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Tt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{static parseLink(e){const t=function(e){const t=C(N(e)).link,n=t?C(N(t)).deep_link_id:null,r=C(N(e)).deep_link_id;return(r?C(N(r)).link:null)||r||n||t||e}(e);try{return new It(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,a;const o=C(N(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,u=null!==(n=o.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=o.mode)&&void 0!==r?r:null);Te(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{static credential(e,t){return Et._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=It.parseLink(t);return Te(n,"argument-error"),Et._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Ct.PROVIDER_ID}}Ct.PROVIDER_ID="password",Ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class xt extends Nt{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends xt{static credential(e){return St._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com",At.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt extends xt{static credential(e,t){return St._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Rt.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Rt.GOOGLE_SIGN_IN_METHOD="google.com",Rt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt extends xt{static credential(e){return St._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Dt.GITHUB_SIGN_IN_METHOD="github.com",Dt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot extends xt{static credential(e,t){return St._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ot.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com",Ot.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await et._fromIdTokenResponse(e,n,r),s=Pt(n);return new Lt({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Pt(n);return new Lt({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Pt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Mt extends E{static _fromErrorAndOperation(e,t,n,r){return new Mt(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Mt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Ut(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Mt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e,t,n=!1){const r=await Ge(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Lt._forOperation(e,"link",r)}
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
async function Vt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ge(e,Ut(r,i,t,e),n);Te(s.idToken,r,"internal-error");const a=We(s.idToken);Te(a,r,"internal-error");const{sub:o}=a;return Te(e.uid===o,r,"user-mismatch"),Lt._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&we(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e,t,n=!1){const r="signIn",i=await Ut(e,r,t),s=await Lt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}new WeakMap;
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
class zt{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends zt{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);b()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=m();return ot(e)||ft(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=pt(),this._shouldAllowMigration=!0}}Bt.type="LOCAL";const qt=Bt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends zt{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}$t.type="SESSION";const Ht=$t;
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
class Kt{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Kt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Kt.receivers=[];class Gt{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((a,o)=>{const l=Wt("",20);r.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}
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
function Xt(){return void 0!==Qt().WorkerGlobalScope&&"function"==typeof Qt().importScripts}class Yt{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Jt(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Zt(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Yt(e).toPromise()}(),t(await Zt()))}))}))}async function en(e,t,n){const r=Jt(e,!0).put({fbase_key:t,value:n});return new Yt(r).toPromise()}function tn(e,t){const n=Jt(e,!0).delete(t);return new Yt(n).toPromise()}class nn{async _openDb(){return this.db||(this.db=await Zt()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kt._getInstance(Xt()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Gt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zt();return await en(e,"__sak","1"),await tn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>en(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Jt(e,!1).get(t),r=await new Yt(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>tn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Jt(e,!1).getAll();return new Yt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}nn.type="LOCAL";const rn=nn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ee("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function an(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
an("rcb"),new Oe(3e4,6e4);async function on(e,t,n){var r;const i=await n.verify();try{let s;if(Te("string"==typeof i,e,"argument-error"),Te("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Te("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Ve(e,"POST","/v2/accounts/mfaEnrollment:start",Fe(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Te("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Te(n,e,"missing-multi-factor-info");const a=await function(e,t){return Ve(e,"POST","/v2/accounts/mfaSignIn:start",Fe(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Ve(e,"POST","/v1/accounts:sendVerificationCode",Fe(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln{verifyPhoneNumber(e,t){return on(this.auth,e,R(t))}static credential(e,t){return Tt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ln.credentialFromTaggedObject(t)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Tt._fromTokenResponse(t,n):null}constructor(e){this.providerId=ln.PROVIDER_ID,this.auth=yt(e)}}
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
function un(e,t){return t?xe(t):(Te(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */ln.PROVIDER_ID="phone",ln.PHONE_SIGN_IN_METHOD="phone";class cn extends bt{_getIdTokenResponse(e){return kt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function hn(e){return jt(e.auth,new cn(e),e.bypassAuthState)}function dn(e){const{auth:t,user:n}=e;return Te(n,t,"internal-error"),Vt(n,new cn(e),e.bypassAuthState)}async function fn(e){const{auth:t,user:n}=e;return Te(n,t,"internal-error"),Ft(n,new cn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hn;case"linkViaPopup":case"linkViaRedirect":return fn;case"reauthViaPopup":case"reauthViaRedirect":return dn;default:we(this.auth,"internal-error")}}resolve(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Oe(2e3,1e4);class gn extends pn{async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Ce(1===this.filter.length,"Popup operations only handle one event");const e=Wt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ee(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,mn.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}}gn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=new Map;class vn extends pn{async execute(){let e=yn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=En(t),r=wn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}yn.set(this.auth._key(),e)}return this.bypassAuthState||yn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function bn(e,t){return wn(e)._set(En(t),"true")}function wn(e){return xe(e._redirectPersistence)}function En(e){return rt("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(e,t,n){return async function(e,t,n){const r=yt(e);Se(e,t,Nt);const i=un(r,n);return await bn(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}async function Sn(e,t,n=!1){const r=yt(e),i=un(r,t),s=new vn(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class _n{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return In(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!In(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ee(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tn(e))}saveEventToCache(e){this.cachedEventUids.add(Tn(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Tn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function In({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nn=/^https?/;async function xn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ve(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(An(e))return}catch(e){}we(e,"unauthorized-domain")}function An(e){const t=Ae(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Nn.test(n))return!1;if(Cn.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Rn=new Oe(3e4,6e4);function Dn(){const e=Qt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let On=null;function Ln(e){return On=On||function(e){return new Promise(((t,n)=>{var r,i,s;function a(){Dn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dn(),n(Ee(e,"network-request-failed"))},timeout:Rn.get()})}if(null===(i=null===(r=Qt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Qt().gapi)||void 0===s?void 0:s.load)){const t=an("iframefcb");return Qt()[t]=()=>{gapi.load?a():n(Ee(e,"network-request-failed"))},sn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw On=null,e}))}(e),On}
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
 */const Pn=new Oe(5e3,15e3),Mn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Un=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fn(e){const t=e.config;Te(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Le(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.7.0"},i=Un.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${I(r).slice(1)}`}
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
const Vn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class jn{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function zn(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Vn),{width:r.toString(),height:i.toString(),top:s,left:a}),u=m().toLowerCase();n&&(o=lt(u)?"_blank":n),at(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=m()){var t;return ft(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",o),new jn(null);const h=window.open(t||"",o,c);Te(h,e,"popup-blocked");try{h.focus()}catch(e){}return new jn(h)}function Bn(e,t,n,r,i,s){Te(e.config.authDomain,e,"auth-domain-config-required"),Te(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.7.0",eventId:i};if(t instanceof Nt){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof xt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];return`${function({config:e}){return e.emulator?Le(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${I(o).slice(1)}`}const qn=class{async _openPopup(e,t,n,r){var i;Ce(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return zn(e,Bn(e,t,n,Ae(),r),Wt())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Bn(e,t,n,Ae(),r),Qt().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ce(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ln(e),n=Qt().gapi;return Te(n,e,"internal-error"),t.open({where:document.body,url:Fn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ee(e,"network-request-failed"),s=Qt().setTimeout((()=>{r(i)}),Pn.get());function a(){Qt().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}(e),n=new _n(e);return t.register("authEvent",(t=>{Te(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),we(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pt()||ot()||ft()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ht,this._completeRedirectFn=Sn}};var $n;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function Kn(e=re()){const t=ee(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=ee(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(_(n.getOptions(),null!=t?t:{}))return e;we(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:qn,persistence:[rn,qt,Ht]})}$n="Browser",Z(new U("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{Te(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Te(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:$n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mt($n)},a=new gt(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xe);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Z(new U("auth-internal",(e=>{const t=yt(e.getProvider("auth").getImmediate());return new Hn(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ie("@firebase/auth","0.19.12",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}($n)),ie("@firebase/auth","0.19.12","esm2017");var Wn,Gn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},Qn={},Xn=Xn||{},Yn=Gn||self;function Jn(){}function Zn(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function er(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var tr="closure_uid_"+(1e9*Math.random()>>>0),nr=0;function rr(e,t,n){return e.call.apply(e.bind,arguments)}function ir(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function sr(e,t,n){return(sr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?rr:ir).apply(null,arguments)}function ar(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function or(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function lr(){this.s=this.s,this.o=this.o}var ur={};lr.prototype.s=!1,lr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,tr)&&e[tr]||(e[tr]=++nr)}(this);delete ur[e]}},lr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},hr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function dr(e){return Array.prototype.concat.apply([],arguments)}function fr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function pr(e){return/^[\s\xa0]*$/.test(e)}var mr,gr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function yr(e,t){return-1!=e.indexOf(t)}function vr(e,t){return e<t?-1:e>t?1:0}e:{var br=Yn.navigator;if(br){var wr=br.userAgent;if(wr){mr=wr;break e}}mr=""}function Er(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function kr(e){const t={};for(const n in e)t[n]=e[n];return t}var Sr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _r(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Sr.length;t++)n=Sr[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Tr(e){return Tr[" "](e),e}Tr[" "]=Jn;var Ir,Cr,Nr=yr(mr,"Opera"),xr=yr(mr,"Trident")||yr(mr,"MSIE"),Ar=yr(mr,"Edge"),Rr=Ar||xr,Dr=yr(mr,"Gecko")&&!(yr(mr.toLowerCase(),"webkit")&&!yr(mr,"Edge"))&&!(yr(mr,"Trident")||yr(mr,"MSIE"))&&!yr(mr,"Edge"),Or=yr(mr.toLowerCase(),"webkit")&&!yr(mr,"Edge");function Lr(){var e=Yn.document;return e?e.documentMode:void 0}e:{var Pr="",Mr=(Cr=mr,Dr?/rv:([^\);]+)(\)|;)/.exec(Cr):Ar?/Edge\/([\d\.]+)/.exec(Cr):xr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Cr):Or?/WebKit\/(\S+)/.exec(Cr):Nr?/(?:Version)[ \/]?(\S+)/.exec(Cr):void 0);if(Mr&&(Pr=Mr?Mr[1]:""),xr){var Ur=Lr();if(null!=Ur&&Ur>parseFloat(Pr)){Ir=String(Ur);break e}}Ir=Pr}var Fr,Vr={};function jr(){return function(e){var t=Vr;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=gr(String(Ir)).split("."),n=gr("9").split("."),r=Math.max(t.length,n.length);for(let a=0;0==e&&a<r;a++){var i=t[a]||"",s=n[a]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=vr(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||vr(0==i[2].length,0==s[2].length)||vr(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(Yn.document&&xr){var zr=Lr();Fr=zr||(parseInt(Ir,10)||void 0)}else Fr=void 0;var Br=Fr,qr=function(){if(!Yn.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Yn.addEventListener("test",Jn,t),Yn.removeEventListener("test",Jn,t)}catch(e){}return e}();function $r(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Hr(e,t){if($r.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Dr){e:{try{Tr(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Kr[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Hr.Z.h.call(this)}}$r.prototype.h=function(){this.defaultPrevented=!0},or(Hr,$r);var Kr={2:"touch",3:"pen",4:"mouse"};Hr.prototype.h=function(){Hr.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Wr="closure_listenable_"+(1e6*Math.random()|0),Gr=0;function Qr(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++Gr,this.ca=this.fa=!1}function Xr(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Yr(e){this.src=e,this.g={},this.h=0}function Jr(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=cr(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Xr(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Zr(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}Yr.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=Zr(e,t,r,i);return-1<a?(t=e[a],n||(t.fa=!1)):((t=new Qr(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var ei="closure_lm_"+(1e6*Math.random()|0),ti={};function ni(e,t,n,r,i){if(r&&r.once)return ii(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ni(e,t[s],n,r,i);return null}return n=hi(n),e&&e[Wr]?e.N(t,n,er(r)?!!r.capture:!!r,i):ri(e,t,n,!1,r,i)}function ri(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=er(i)?!!i.capture:!!i,o=ui(e);if(o||(e[ei]=o=new Yr(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=li;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)qr||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(oi(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ii(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ii(e,t[s],n,r,i);return null}return n=hi(n),e&&e[Wr]?e.O(t,n,er(r)?!!r.capture:!!r,i):ri(e,t,n,!0,r,i)}function si(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)si(e,t[s],n,r,i);else r=er(r)?!!r.capture:!!r,n=hi(n),e&&e[Wr]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Zr(s=e.g[t],n,r,i))&&(Xr(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ui(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Zr(t,n,r,i)),(n=-1<e?t[e]:null)&&ai(n))}function ai(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Wr])Jr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(oi(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ui(t))?(Jr(n,e),0==n.h&&(n.src=null,t[ei]=null)):Xr(e)}}}function oi(e){return e in ti?ti[e]:ti[e]="on"+e}function li(e,t){if(e.ca)e=!0;else{t=new Hr(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&ai(e),e=n.call(r,t)}return e}function ui(e){return(e=e[ei])instanceof Yr?e:null}var ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(e){return"function"==typeof e?e:(e[ci]||(e[ci]=function(t){return e.handleEvent(t)}),e[ci])}function di(){lr.call(this),this.i=new Yr(this),this.P=this,this.I=null}function fi(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new $r(t,e);else if(t instanceof $r)t.target=t.target||e;else{var i=t;_r(t=new $r(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=pi(a,r,!0,t)&&i}if(i=pi(a=t.g=e,r,!0,t)&&i,i=pi(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=pi(a=t.g=n[s],r,!1,t)&&i}function pi(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.ca&&a.capture==n){var o=a.listener,l=a.ia||a.src;a.fa&&Jr(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}or(di,lr),di.prototype[Wr]=!0,di.prototype.removeEventListener=function(e,t,n,r){si(this,e,t,n,r)},di.prototype.M=function(){if(di.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xr(n[r]);delete t.g[e],t.h--}}this.I=null},di.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},di.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var mi=Yn.JSON.stringify;function gi(){var e=Si;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var yi,vi=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new bi),(e=>e.reset()));class bi{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function wi(e){Yn.setTimeout((()=>{throw e}),0)}function Ei(e,t){yi||function(){var e=Yn.Promise.resolve(void 0);yi=function(){e.then(_i)}}(),ki||(yi(),ki=!0),Si.add(e,t)}var ki=!1,Si=new class{add(e,t){const n=vi.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function _i(){for(var e;e=gi();){try{e.h.call(e.g)}catch(e){wi(e)}var t=vi;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ki=!1}function Ti(e,t){di.call(this),this.h=e||1,this.g=t||Yn,this.j=sr(this.kb,this),this.l=Date.now()}function Ii(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ci(e,t,n){if("function"==typeof e)n&&(e=sr(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=sr(e.handleEvent,e)}return 2147483647<Number(t)?-1:Yn.setTimeout(e,t||0)}function Ni(e){e.g=Ci((()=>{e.g=null,e.i&&(e.i=!1,Ni(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}or(Ti,di),(Wn=Ti.prototype).da=!1,Wn.S=null,Wn.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),fi(this,"tick"),this.da&&(Ii(this),this.start()))}},Wn.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Wn.M=function(){Ti.Z.M.call(this),Ii(this),delete this.g};class xi extends lr{l(e){this.h=arguments,this.g?this.i=!0:Ni(this)}M(){super.M(),this.g&&(Yn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Ai(e){lr.call(this),this.h=e,this.g={}}or(Ai,lr);var Ri=[];function Di(e,t,n,r){Array.isArray(n)||(n&&(Ri[0]=n.toString()),n=Ri);for(var i=0;i<n.length;i++){var s=ni(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Oi(e){Er(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ai(e)}),e),e.g={}}function Li(){this.g=!0}function Pi(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}return mi(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Ai.prototype.M=function(){Ai.Z.M.call(this),Oi(this)},Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Li.prototype.Aa=function(){this.g=!1},Li.prototype.info=function(){};var Mi={},Ui=null;function Fi(){return Ui=Ui||new di}function Vi(e){$r.call(this,Mi.Ma,e)}function ji(e){const t=Fi();fi(t,new Vi(t,e))}function zi(e,t){$r.call(this,Mi.STAT_EVENT,e),this.stat=t}function Bi(e){const t=Fi();fi(t,new zi(t,e))}function qi(e,t){$r.call(this,Mi.Na,e),this.size=t}function $i(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Yn.setTimeout((function(){e()}),t)}Mi.Ma="serverreachability",or(Vi,$r),Mi.STAT_EVENT="statevent",or(zi,$r),Mi.Na="timingevent",or(qi,$r);var Hi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ki={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Wi(){}function Gi(e){return e.h||(e.h=e.i())}function Qi(){}Wi.prototype.h=null;var Xi,Yi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ji(){$r.call(this,"d")}function Zi(){$r.call(this,"c")}function es(){}function ts(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Ai(this),this.P=rs,e=Rr?125:void 0,this.W=new Ti(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ns}function ns(){this.i=null,this.g="",this.h=!1}or(Ji,$r),or(Zi,$r),or(es,Wi),es.prototype.g=function(){return new XMLHttpRequest},es.prototype.i=function(){return{}},Xi=new es;var rs=45e3,is={},ss={};function as(e,t,n){e.K=1,e.v=xs(Ss(t)),e.s=n,e.U=!0,os(e,null)}function os(e,t){e.F=Date.now(),hs(e),e.A=Ss(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Bs(n.h,"t",r),e.C=0,n=e.l.H,e.h=new ns,e.g=Ba(e.l,n?t:null,!e.s),0<e.O&&(e.L=new xi(sr(e.Ia,e,e.g),e.O)),Di(e.V,e.g,"readystatechange",e.gb),t=e.H?kr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ji(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function ls(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function us(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=cs(e,n),r==ss){4==t&&(e.o=4,Bi(14),i=!1),Pi(e.j,e.m,null,"[Incomplete Response]");break}if(r==is){e.o=4,Bi(15),Pi(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Pi(e.j,e.m,r,null),gs(e,r)}ls(e)&&r!=ss&&r!=is&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Bi(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),La(t),t.L=!0,Bi(11))):(Pi(e.j,e.m,n,"[Invalid Chunked Response]"),ms(e),ps(e))}function cs(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?ss:(n=Number(t.substring(n,r)),isNaN(n)?is:(r+=1)+n>t.length?ss:(t=t.substr(r,n),e.C=r+n,t))}function hs(e){e.Y=Date.now()+e.P,ds(e,e.P)}function ds(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=$i(sr(e.eb,e),t)}function fs(e){e.B&&(Yn.clearTimeout(e.B),e.B=null)}function ps(e){0==e.l.G||e.I||Ua(e.l,e)}function ms(e){fs(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ii(e.W),Oi(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function gs(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Gs(n.i,e)))if(n.I=e.N,!e.J&&Gs(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Ma(n),Ta(n)}Oa(n),Bi(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=$i(sr(n.ab,n),6e3));if(1>=Ws(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else Va(n,11)}else if((e.J||n.g==e)&&Ma(n),!pr(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(yr(e,"spdy")||yr(e,"quic")||yr(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Qs(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Ns(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var a=e;if((r=n).oa=za(r,r.H?r.la:null,r.W),a.J){Xs(r.i,a);var o=a,l=r.K;l&&o.setTimeout(l),o.B&&(fs(o),hs(o)),r.g=a}else Da(r);0<n.l.length&&Na(n)}else"stop"!=u[0]&&"close"!=u[0]||Va(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Va(n,7):_a(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ji(4)}catch(e){}}function ys(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Zn(e)||"string"==typeof e)hr(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Zn(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Zn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function vs(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof vs)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function bs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];ws(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)ws(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function ws(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Wn=ts.prototype).setTimeout=function(e){this.P=e},Wn.gb=function(e){e=e.target;const t=this.L;t&&3==ba(e)?t.l():this.Ia(e)},Wn.Ia=function(e){try{if(e==this.g)e:{const c=ba(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>c)&&(3!=c||Rr||this.g&&(this.h.h||this.g.ga()||wa(this.g)))){this.I||4!=c||7==t||ji(8==t||0>=h?3:2),fs(this);var n=this.g.ba();this.N=n;t:if(ls(this)){var r=wa(this.g);e="";var i=r.length,s=4==ba(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ms(this),ps(this);var a="";break t}this.h.i=new Yn.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a}))}(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pr(o)){var u=o;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Bi(12),ms(this),ps(this);break e}Pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gs(this,n)}this.U?(us(this,c,a),Rr&&this.i&&3==c&&(Di(this.V,this.W,"tick",this.fb),this.W.start())):(Pi(this.j,this.m,a,null),gs(this,a)),4==c&&ms(this),this.i&&!this.I&&(4==c?Ua(this.l,this):(this.i=!1,hs(this)))}else 400==n&&0<a.indexOf("Unknown SID")?(this.o=3,Bi(12)):(this.o=0,Bi(13)),ms(this),ps(this)}}}catch(e){}},Wn.fb=function(){if(this.g){var e=ba(this.g),t=this.g.ga();this.C<t.length&&(fs(this),us(this,e,t),this.i&&4!=e&&hs(this))}},Wn.cancel=function(){this.I=!0,ms(this)},Wn.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(ji(3),Bi(17)),ms(this),this.o=2,ps(this)):ds(this,this.Y-e)},(Wn=vs.prototype).R=function(){bs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Wn.T=function(){return bs(this),this.g.concat()},Wn.get=function(e,t){return ws(this.h,e)?this.h[e]:t},Wn.set=function(e,t){ws(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Wn.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Es=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ks(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof ks){this.g=void 0!==t?t:e.g,_s(this,e.j),this.s=e.s,Ts(this,e.i),Is(this,e.m),this.l=e.l,t=e.h;var n=new Fs;n.i=t.i,t.g&&(n.g=new vs(t.g),n.h=t.h),Cs(this,n),this.o=e.o}else e&&(n=String(e).match(Es))?(this.g=!!t,_s(this,n[1]||"",!0),this.s=As(n[2]||""),Ts(this,n[3]||"",!0),Is(this,n[4]),this.l=As(n[5]||"",!0),Cs(this,n[6]||"",!0),this.o=As(n[7]||"")):(this.g=!!t,this.h=new Fs(null,this.g))}function Ss(e){return new ks(e)}function _s(e,t,n){e.j=n?As(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ts(e,t,n){e.i=n?As(t,!0):t}function Is(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Cs(e,t,n){t instanceof Fs?(e.h=t,function(e,t){t&&!e.j&&(Vs(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(js(this,t),Bs(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Rs(t,Ms)),e.h=new Fs(t,e.g))}function Ns(e,t,n){e.h.set(t,n)}function xs(e){return Ns(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function As(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Rs(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ds),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ds(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ks.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Rs(t,Os,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Rs(t,Os,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Rs(n,"/"==n.charAt(0)?Ps:Ls,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Rs(n,Us)),e.join("")};var Os=/[#\/\?@]/g,Ls=/[#\?:]/g,Ps=/[#\?]/g,Ms=/[#\?@]/g,Us=/#/g;function Fs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vs(e){e.g||(e.g=new vs,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function js(e,t){Vs(e),t=qs(e,t),ws(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,ws((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&bs(e)))}function zs(e,t){return Vs(e),t=qs(e,t),ws(e.g.h,t)}function Bs(e,t,n){js(e,t),0<n.length&&(e.i=null,e.g.set(qs(e,t),fr(n)),e.h+=n.length)}function qs(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Wn=Fs.prototype).add=function(e,t){Vs(this),this.i=null,e=qs(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Wn.forEach=function(e,t){Vs(this),this.g.forEach((function(n,r){hr(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Wn.T=function(){Vs(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},Wn.R=function(e){Vs(this);var t=[];if("string"==typeof e)zs(this,e)&&(t=dr(t,this.g.get(qs(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=dr(t,e[n])}return t},Wn.set=function(e,t){return Vs(this),this.i=null,zs(this,e=qs(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Wn.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Wn.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var a=i;""!==r[s]&&(a+="="+encodeURIComponent(String(r[s]))),e.push(a)}}return this.i=e.join("&")};function $s(e){this.l=e||Hs,Yn.PerformanceNavigationTiming?e=0<(e=Yn.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Yn.g&&Yn.g.Ea&&Yn.g.Ea()&&Yn.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hs=10;function Ks(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ws(e){return e.h?1:e.g?e.g.size:0}function Gs(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Qs(e,t){e.g?e.g.add(t):e.h=t}function Xs(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ys(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return fr(e.i)}function Js(){}function Zs(){this.g=new Js}function ea(e,t,n){const r=n||"";try{ys(e,(function(e,n){let i=e;er(e)&&(i=mi(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function ta(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function na(e){this.l=e.$b||null,this.j=e.ib||!1}function ra(e,t){di.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ia,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$s.prototype.cancel=function(){if(this.i=Ys(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Js.prototype.stringify=function(e){return Yn.JSON.stringify(e,void 0)},Js.prototype.parse=function(e){return Yn.JSON.parse(e,void 0)},or(na,Wi),na.prototype.g=function(){return new ra(this.l,this.j)},na.prototype.i=function(e){return function(){return e}}({}),or(ra,di);var ia=0;function sa(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function aa(e){e.readyState=4,e.l=null,e.j=null,e.A=null,oa(e)}function oa(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Wn=ra.prototype).open=function(e,t){if(this.readyState!=ia)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,oa(this)},Wn.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Yn).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Wn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,aa(this)),this.readyState=ia},Wn.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,oa(this)),this.g&&(this.readyState=3,oa(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Yn.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sa(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Wn.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?aa(this):oa(this),3==this.readyState&&sa(this)}},Wn.Ua=function(e){this.g&&(this.response=this.responseText=e,aa(this))},Wn.Ta=function(e){this.g&&(this.response=e,aa(this))},Wn.ha=function(){this.g&&aa(this)},Wn.setRequestHeader=function(e,t){this.v.append(e,t)},Wn.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Wn.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ra.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var la=Yn.JSON.parse;function ua(e){di.call(this),this.headers=new vs,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ca,this.K=this.L=!1}or(ua,di);var ca="",ha=/^https?$/i,da=["POST","PUT"];function fa(e){return"content-type"==e.toLowerCase()}function pa(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ma(e),ya(e)}function ma(e){e.D||(e.D=!0,fi(e,"complete"),fi(e,"error"))}function ga(e){if(e.h&&void 0!==Xn&&(!e.C[1]||4!=ba(e)||2!=e.ba()))if(e.v&&4==ba(e))Ci(e.Fa,0,e);else if(fi(e,"readystatechange"),4==ba(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(Es)[1]||null;if(!i&&Yn.self&&Yn.self.location){var s=Yn.self.location.protocol;i=s.substr(0,s.length-1)}r=!ha.test(i?i.toLowerCase():"")}n=r}if(n)fi(e,"complete"),fi(e,"success");else{e.m=6;try{var a=2<ba(e)?e.g.statusText:""}catch(e){a=""}e.j=a+" ["+e.ba()+"]",ma(e)}}finally{ya(e)}}}function ya(e,t){if(e.g){va(e);const n=e.g,r=e.C[0]?Jn:null;e.g=null,e.C=null,t||fi(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function va(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Yn.clearTimeout(e.A),e.A=null)}function ba(e){return e.g?e.g.readyState:0}function wa(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ca:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ea(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return Er(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Ns(e,t,n))}function ka(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Sa(e){this.za=0,this.l=[],this.h=new Li,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ka("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ka("baseRetryDelayMs",5e3,e),this.$a=ka("retryDelaySeedMs",1e4,e),this.Ya=ka("forwardChannelMaxRetries",2,e),this.ra=ka("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new $s(e&&e.concurrentRequestLimit),this.Ca=new Zs,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function _a(e){if(Ia(e),3==e.G){var t=e.V++,n=Ss(e.F);Ns(n,"SID",e.J),Ns(n,"RID",t),Ns(n,"TYPE","terminate"),Aa(e,n),(t=new ts(e,e.h,t,void 0)).K=2,t.v=xs(Ss(n)),n=!1,Yn.navigator&&Yn.navigator.sendBeacon&&(n=Yn.navigator.sendBeacon(t.v.toString(),"")),!n&&Yn.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ba(t.l,null),t.g.ea(t.v)),t.F=Date.now(),hs(t)}ja(e)}function Ta(e){e.g&&(La(e),e.g.cancel(),e.g=null)}function Ia(e){Ta(e),e.u&&(Yn.clearTimeout(e.u),e.u=null),Ma(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Yn.clearTimeout(e.m),e.m=null)}function Ca(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Na(e)}function Na(e){Ks(e.i)||e.m||(e.m=!0,Ei(e.Ha,e),e.C=0)}function xa(e,t){var n;n=t?t.m:e.V++;const r=Ss(e.F);Ns(r,"SID",e.J),Ns(r,"RID",n),Ns(r,"AID",e.U),Aa(e,r),e.o&&e.s&&Ea(r,e.o,e.s),n=new ts(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Ra(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Qs(e.i,n),as(n,r,t)}function Aa(e,t){e.j&&ys({},(function(e,n){Ns(t,n,e)}))}function Ra(e,t,n){n=Math.min(e.l.length,n);var r=e.j?sr(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const o=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),s=!1;else try{ea(o,e,"req"+n+"_")}catch(e){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Da(e){e.g||e.u||(e.Y=1,Ei(e.Ga,e),e.A=0)}function Oa(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=$i(sr(e.Ga,e),Fa(e,e.A)),e.A++,!0)}function La(e){null!=e.B&&(Yn.clearTimeout(e.B),e.B=null)}function Pa(e){e.g=new ts(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Ss(e.oa);Ns(t,"RID","rpc"),Ns(t,"SID",e.J),Ns(t,"CI",e.N?"0":"1"),Ns(t,"AID",e.U),Aa(e,t),Ns(t,"TYPE","xmlhttp"),e.o&&e.s&&Ea(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=xs(Ss(t)),n.s=null,n.U=!0,os(n,e)}function Ma(e){null!=e.v&&(Yn.clearTimeout(e.v),e.v=null)}function Ua(e,t){var n=null;if(e.g==t){Ma(e),La(e),e.g=null;var r=2}else{if(!Gs(e.i,t))return;n=t.D,Xs(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;fi(r=Fi(),new qi(r,n,t,i)),Na(e)}else Da(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(Ws(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=$i(sr(e.Ha,e,t),Fa(e,e.C)),e.C++,0)))}(e,t)||2==r&&Oa(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Va(e,5);break;case 4:Va(e,10);break;case 3:Va(e,6);break;default:Va(e,2)}}function Fa(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Va(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=sr(e.jb,e);n||(n=new ks("//www.google.com/images/cleardot.gif"),Yn.location&&"http"==Yn.location.protocol||_s(n,"https"),xs(n)),function(e,t){const n=new Li;if(Yn.Image){const r=new Image;r.onload=ar(ta,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ar(ta,n,r,"TestLoadImage: error",!1,t),r.onabort=ar(ta,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ar(ta,n,r,"TestLoadImage: timeout",!1,t),Yn.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Bi(2);e.G=0,e.j&&e.j.va(t),ja(e),Ia(e)}function ja(e){e.G=0,e.I=-1,e.j&&(0==Ys(e.i).length&&0==e.l.length||(e.i.i.length=0,fr(e.l),e.l.length=0),e.j.ua())}function za(e,t,n){let r=function(e){return e instanceof ks?Ss(e):new ks(e,void 0)}(n);if(""!=r.i)t&&Ts(r,t+"."+r.i),Is(r,r.m);else{const e=Yn.location;r=function(e,t,n,r){var i=new ks(null,void 0);return e&&_s(i,e),t&&Ts(i,t),n&&Is(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Er(e.aa,(function(e,t){Ns(r,t,e)})),t=e.D,n=e.sa,t&&n&&Ns(r,t,n),Ns(r,"VER",e.ma),Aa(e,r),r}function Ba(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new ua(new na({ib:!0})):new ua(e.qa)).L=e.H,t}function qa(){}function $a(){if(xr&&!(10<=Number(Br)))throw Error("Environmental error: no available transport.")}function Ha(e,t){di.call(this),this.g=new Sa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!pr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!pr(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Ga(this)}function Ka(e){Ji.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Wa(){Zi.call(this),this.status=1}function Ga(e){this.g=e}(Wn=ua.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xi.g(),this.C=this.u?Gi(this.u):Gi(Xi),this.g.onreadystatechange=sr(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void pa(this,e)}e=n||"";const i=new vs(this.headers);r&&ys(r,(function(e,t){i.set(t,e)})),r=function(e){e:{var t=fa;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=Yn.FormData&&e instanceof Yn.FormData,!(0<=cr(da,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{va(this),0<this.B&&((this.K=function(e){return xr&&jr()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=sr(this.pa,this)):this.A=Ci(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){pa(this,e)}},Wn.pa=function(){void 0!==Xn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fi(this,"timeout"),this.abort(8))},Wn.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,fi(this,"complete"),fi(this,"abort"),ya(this))},Wn.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ya(this,!0)),ua.Z.M.call(this)},Wn.Fa=function(){this.s||(this.F||this.v||this.l?ga(this):this.cb())},Wn.cb=function(){ga(this)},Wn.ba=function(){try{return 2<ba(this)?this.g.status:-1}catch(e){return-1}},Wn.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Wn.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),la(t)}},Wn.Da=function(){return this.m},Wn.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Wn=Sa.prototype).ma=8,Wn.G=1,Wn.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Wn.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new ts(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=kr(s),_r(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Ra(this,i,t),Ns(n=Ss(this.F),"RID",e),Ns(n,"CVER",22),this.D&&Ns(n,"X-HTTP-Session-Id",this.D),Aa(this,n),this.o&&s&&Ea(n,this.o,s),Qs(this.i,i),this.Ra&&Ns(n,"TYPE","init"),this.ja?(Ns(n,"$req",t),Ns(n,"SID","null"),i.$=!0,as(i,n,null)):as(i,n,t),this.G=2}}else 3==this.G&&(e?xa(this,e):0==this.l.length||Ks(this.i)||xa(this))},Wn.Ga=function(){if(this.u=null,Pa(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=$i(sr(this.bb,this),e)}},Wn.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Bi(10),Ta(this),Pa(this))},Wn.ab=function(){null!=this.v&&(this.v=null,Ta(this),Oa(this),Bi(19))},Wn.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Bi(2)):(this.h.info("Failed to ping google.com"),Bi(1))},(Wn=qa.prototype).xa=function(){},Wn.wa=function(){},Wn.va=function(){},Wn.ua=function(){},Wn.Oa=function(){},$a.prototype.g=function(e,t){return new Ha(e,t)},or(Ha,di),Ha.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ei(sr(e.hb,e,t))),Bi(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=za(e,null,e.W),Na(e)},Ha.prototype.close=function(){_a(this.g)},Ha.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Ca(this.g,t)}else this.v?((t={}).__data__=mi(e),Ca(this.g,t)):Ca(this.g,e)},Ha.prototype.M=function(){this.g.j=null,delete this.j,_a(this.g),delete this.g,Ha.Z.M.call(this)},or(Ka,Ji),or(Wa,Zi),or(Ga,qa),Ga.prototype.xa=function(){fi(this.g,"a")},Ga.prototype.wa=function(e){fi(this.g,new Ka(e))},Ga.prototype.va=function(e){fi(this.g,new Wa(e))},Ga.prototype.ua=function(){fi(this.g,"b")},$a.prototype.createWebChannel=$a.prototype.g,Ha.prototype.send=Ha.prototype.u,Ha.prototype.open=Ha.prototype.m,Ha.prototype.close=Ha.prototype.close,Hi.NO_ERROR=0,Hi.TIMEOUT=8,Hi.HTTP_ERROR=6,Ki.COMPLETE="complete",Qi.EventType=Yi,Yi.OPEN="a",Yi.CLOSE="b",Yi.ERROR="c",Yi.MESSAGE="d",di.prototype.listen=di.prototype.N,ua.prototype.listenOnce=ua.prototype.O,ua.prototype.getLastError=ua.prototype.La,ua.prototype.getLastErrorCode=ua.prototype.Da,ua.prototype.getStatus=ua.prototype.ba,ua.prototype.getResponseJson=ua.prototype.Qa,ua.prototype.getResponseText=ua.prototype.ga,ua.prototype.send=ua.prototype.ea;var Qa,Xa,Ya=Qn.createWebChannelTransport=function(){return new $a},Ja=Qn.getStatEventTarget=function(){return Fi()},Za=Qn.ErrorCode=Hi,eo=Qn.EventType=Ki,to=Qn.Event=Mi,no=Qn.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ro=Qn.FetchXmlHttpFactory=na,io=Qn.WebChannel=Qi,so=Qn.XhrIo=ua,ao={};function oo(){throw new Error("setTimeout has not been defined")}function lo(){throw new Error("clearTimeout has not been defined")}function uo(e){if(Qa===setTimeout)return setTimeout(e,0);if((Qa===oo||!Qa)&&setTimeout)return Qa=setTimeout,setTimeout(e,0);try{return Qa(e,0)}catch(t){try{return Qa.call(null,e,0)}catch(t){return Qa.call(this,e,0)}}}!function(){try{Qa="function"==typeof setTimeout?setTimeout:oo}catch(e){Qa=oo}try{Xa="function"==typeof clearTimeout?clearTimeout:lo}catch(e){Xa=lo}}();var co,ho=[],fo=!1,po=-1;function mo(){fo&&co&&(fo=!1,co.length?ho=co.concat(ho):po=-1,ho.length&&go())}function go(){if(!fo){var e=uo(mo);fo=!0;for(var t=ho.length;t;){for(co=ho,ho=[];++po<t;)co&&co[po].run();po=-1,t=ho.length}co=null,fo=!1,function(e){if(Xa===clearTimeout)return clearTimeout(e);if((Xa===lo||!Xa)&&clearTimeout)return Xa=clearTimeout,clearTimeout(e);try{Xa(e)}catch(t){try{return Xa.call(null,e)}catch(t){return Xa.call(this,e)}}}(e)}}function yo(e,t){this.fun=e,this.array=t}function vo(){}ao.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];ho.push(new yo(e,t)),1!==ho.length||fo||uo(go)},yo.prototype.run=function(){this.fun.apply(null,this.array)},ao.title="browser",ao.browser=!0,ao.env={},ao.argv=[],ao.version="",ao.versions={},ao.on=vo,ao.addListener=vo,ao.once=vo,ao.off=vo,ao.removeListener=vo,ao.removeAllListeners=vo,ao.emit=vo,ao.prependListener=vo,ao.prependOnceListener=vo,ao.listeners=function(e){return[]},ao.binding=function(e){throw new Error("process.binding is not supported")},ao.cwd=function(){return"/"},ao.chdir=function(e){throw new Error("process.chdir is not supported")},ao.umask=function(){return 0};
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
class bo{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}bo.UNAUTHENTICATED=new bo(null),bo.GOOGLE_CREDENTIALS=new bo("google-credentials-uid"),bo.FIRST_PARTY=new bo("first-party-uid"),bo.MOCK_USER=new bo("mock-user");
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
let wo="9.6.11";
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
 */const Eo=new K("@firebase/firestore");function ko(){return Eo.logLevel}function So(e,...t){if(Eo.logLevel<=z.DEBUG){const n=t.map(Io);Eo.debug(`Firestore (${wo}): ${e}`,...n)}}function _o(e,...t){if(Eo.logLevel<=z.ERROR){const n=t.map(Io);Eo.error(`Firestore (${wo}): ${e}`,...n)}}function To(e,...t){if(Eo.logLevel<=z.WARN){const n=t.map(Io);Eo.warn(`Firestore (${wo}): ${e}`,...n)}}function Io(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Co(e="Unexpected state"){const t=`FIRESTORE (${wo}) INTERNAL ASSERTION FAILED: `+e;throw _o(t),new Error(t)}function No(e,t){e||Co()}function xo(e,t){return e}
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
 */const Ao={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ro extends E{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Do{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Oo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bo.UNAUTHENTICATED)))}shutdown(){}}class Po{start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Do;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Do,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{So("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(So("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Do)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(So("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(No("string"==typeof t.accessToken),new Oo(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return No(null===e||"string"==typeof e),new bo(e)}constructor(e){this.t=e,this.currentUser=bo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Mo{constructor(e,t,n){this.type="FirstParty",this.user=bo.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Uo{getToken(){return Promise.resolve(new Mo(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(bo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class Fo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vo{start(e,t){const n=e=>{null!=e.error&&So("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,So("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{So("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):So("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(No("string"==typeof e.token),this.p=e.token,new Fo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
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
class jo{I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */jo.A=-1;class Bo{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=zo(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function qo(e,t){return e<t?-1:e>t?1:0}function $o(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class Ho{static now(){return Ho.fromMillis(Date.now())}static fromDate(e){return Ho.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ho(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?qo(this.nanoseconds,e.nanoseconds):qo(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ro(Ao.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ro(Ao.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ro(Ao.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ro(Ao.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
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
 */class Ko{static fromTimestamp(e){return new Ko(e)}static min(){return new Ko(new Ho(0,0))}static max(){return new Ko(new Ho(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
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
 */function Wo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Go(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Qo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class Xo{get length(){return this.len}isEqual(e){return 0===Xo.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xo?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&Co(),void 0===n?n=e.length-t:n>e.length-t&&Co(),this.segments=e,this.offset=t,this.len=n}}class Yo extends Xo{construct(e,t,n){return new Yo(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ro(Ao.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Yo(t)}static emptyPath(){return new Yo([])}}const Jo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Zo extends Xo{construct(e,t,n){return new Zo(e,t,n)}static isValidIdentifier(e){return Jo.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zo.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Zo(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ro(Ao.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ro(Ao.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ro(Ao.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Ro(Ao.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zo(t)}static emptyPath(){return new Zo([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $o(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(Zo.comparator)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{static fromBase64String(e){const t=atob(e);return new nl(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new nl(t)}[tl](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return qo(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}nl.EMPTY_BYTE_STRING=new nl("");const rl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function il(e){if(No(!!e),"string"==typeof e){let t=0;const n=rl.exec(e);if(No(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:sl(e.seconds),nanos:sl(e.nanos)}}function sl(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function al(e){return"string"==typeof e?nl.fromBase64String(e):nl.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ll(e){const t=e.mapValue.fields.__previous_value__;return ol(t)?ll(t):t}function ul(e){const t=il(e.mapValue.fields.__local_write_time__.timestampValue);return new Ho(t.seconds,t.nanos)}
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
 */class cl{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class hl{static empty(){return new hl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof hl&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
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
 */function dl(e){return null==e}function fl(e){return 0===e&&1/e==-1/0}function pl(e){return"number"==typeof e&&Number.isInteger(e)&&!fl(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */class ml{static fromPath(e){return new ml(Yo.fromString(e))}static fromName(e){return new ml(Yo.fromString(e).popFirst(5))}static empty(){return new ml(Yo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Yo.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Yo.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ml(new Yo(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ol(e)?4:Al(e)?9:10:Co()}function yl(e,t){if(e===t)return!0;const n=gl(e);if(n!==gl(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ul(e).isEqual(ul(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=il(e.timestampValue),r=il(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,al(e.bytesValue).isEqual(al(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return sl(e.geoPointValue.latitude)===sl(t.geoPointValue.latitude)&&sl(e.geoPointValue.longitude)===sl(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return sl(e.integerValue)===sl(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=sl(e.doubleValue),r=sl(t.doubleValue);return n===r?fl(n)===fl(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return $o(e.arrayValue.values||[],t.arrayValue.values||[],yl);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Wo(n)!==Wo(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!yl(n[e],r[e])))return!1;return!0}(e,t);default:return Co()}var r}function vl(e,t){return void 0!==(e.values||[]).find((e=>yl(e,t)))}function bl(e,t){if(e===t)return 0;const n=gl(e),r=gl(t);if(n!==r)return qo(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return qo(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=sl(e.integerValue||e.doubleValue),r=sl(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return wl(e.timestampValue,t.timestampValue);case 4:return wl(ul(e),ul(t));case 5:return qo(e.stringValue,t.stringValue);case 6:return function(e,t){const n=al(e),r=al(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=qo(n[e],r[e]);if(0!==t)return t}return qo(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=qo(sl(e.latitude),sl(t.latitude));return 0!==n?n:qo(sl(e.longitude),sl(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=bl(n[e],r[e]);if(t)return t}return qo(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=qo(r[e],s[e]);if(0!==t)return t;const a=bl(n[r[e]],i[s[e]]);if(0!==a)return a}return qo(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Co()}}function wl(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return qo(e,t);const n=il(e),r=il(t),i=qo(n.seconds,r.seconds);return 0!==i?i:qo(n.nanos,r.nanos)}function El(e){return kl(e)}function kl(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=il(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?al(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ml.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=kl(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${kl(e.fields[i])}`;return n+"}"}(e.mapValue):Co()}function Sl(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function _l(e){return!!e&&"integerValue"in e}function Tl(e){return!!e&&"arrayValue"in e}function Il(e){return!!e&&"nullValue"in e}function Cl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Nl(e){return!!e&&"mapValue"in e}function xl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Go(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=xl(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Al(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Rl{static empty(){return new Rl({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Nl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xl(t)}setAll(e){let t=Zo.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=xl(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Nl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yl(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Nl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Go(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Rl(xl(this.value))}constructor(e){this.value=e}}function Dl(e){const t=[];return Go(e.fields,((e,n)=>{const r=new Zo([e]);if(Nl(n)){const e=Dl(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new el(t)
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
 */}class Ol{static newInvalidDocument(e){return new Ol(e,0,Ko.min(),Ko.min(),Rl.empty(),0)}static newFoundDocument(e,t,n){return new Ol(e,1,t,Ko.min(),n,0)}static newNoDocument(e,t){return new Ol(e,2,t,Ko.min(),Rl.empty(),0)}static newUnknownDocument(e,t){return new Ol(e,3,t,Ko.min(),Rl.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rl.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ol&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ol(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}}class Ll{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ll.UNKNOWN_ID=-1;function Pl(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ko.fromTimestamp(1e9===r?new Ho(n+1,0):new Ho(n,r));return new Ul(i,ml.empty(),t)}function Ml(e){return new Ul(e.readTime,e.key,-1)}class Ul{static min(){return new Ul(Ko.min(),ml.empty(),-1)}static max(){return new Ul(Ko.max(),ml.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function Fl(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ml.comparator(e.documentKey,t.documentKey),0!==n?n:qo(e.largestBatchId,t.largestBatchId))}
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
 */class Vl{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.P=null}}function jl(e,t=null,n=[],r=[],i=null,s=null,a=null){return new Vl(e,t,n,r,i,s,a)}function zl(e){const t=xo(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{var t;return(t=e).field.canonicalString()+t.op.toString()+El(t.value)})).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),dl(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>El(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>El(e))).join(",")),t.P=e}return t.P}function Bl(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!tu(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!yl(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ru(e.startAt,t.startAt)&&ru(e.endAt,t.endAt)}function ql(e){return ml.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class $l extends class{}{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Hl(e,t,n):"array-contains"===t?new Ql(e,n):"in"===t?new Xl(e,n):"not-in"===t?new Yl(e,n):"array-contains-any"===t?new Jl(e,n):new $l(e,t,n)}static V(e,t,n){return"in"===t?new Kl(e,n):new Wl(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(bl(t,this.value)):null!==t&&gl(this.value)===gl(t)&&this.v(bl(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Co()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class Hl extends $l{matches(e){const t=ml.comparator(e.key,this.key);return this.v(t)}constructor(e,t,n){super(e,t,n),this.key=ml.fromName(n.referenceValue)}}class Kl extends $l{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=Gl("in",t)}}class Wl extends $l{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=Gl("not-in",t)}}function Gl(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ml.fromName(e.referenceValue)))}class Ql extends $l{matches(e){const t=e.data.field(this.field);return Tl(t)&&vl(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class Xl extends $l{matches(e){const t=e.data.field(this.field);return null!==t&&vl(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class Yl extends $l{matches(e){if(vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!vl(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class Jl extends $l{matches(e){const t=e.data.field(this.field);return!(!Tl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>vl(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}class Zl{constructor(e,t){this.position=e,this.inclusive=t}}class eu{constructor(e,t="asc"){this.field=e,this.dir=t}}function tu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function nu(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],a=e.position[i];if(r=s.field.isKeyField()?ml.comparator(ml.fromName(a.referenceValue),n.key):bl(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ru(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yl(e.position[n],t.position[n]))return!1;return!0}
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
 */class iu{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.D=null,this.C=null,this.startAt,this.endAt}}function su(e,t,n,r,i,s,a,o){return new iu(e,t,n,r,i,s,a,o)}function au(e){return new iu(e)}function ou(e){return!dl(e.limit)&&"F"===e.limitType}function lu(e){return!dl(e.limit)&&"L"===e.limitType}function uu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function cu(e){for(const t of e.filters)if(t.S())return t.field;return null}function hu(e){return null!==e.collectionGroup}function du(e){const t=xo(e);if(null===t.D){t.D=[];const e=cu(t),n=uu(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new eu(e)),t.D.push(new eu(Zo.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new eu(Zo.keyField(),e))}}}return t.D}function fu(e){const t=xo(e);if(!t.C)if("F"===t.limitType)t.C=jl(t.path,t.collectionGroup,du(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of du(t)){const t="desc"===n.dir?"asc":"desc";e.push(new eu(n.field,t))}const n=t.endAt?new Zl(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new Zl(t.startAt.position,!t.startAt.inclusive):null;t.C=jl(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function pu(e,t,n){return new iu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function mu(e,t){return Bl(fu(e),fu(t))&&e.limitType===t.limitType}function gu(e){return`${zl(fu(e))}|lt:${e.limitType}`}function yu(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{var t;return`${(t=e).field.canonicalString()} ${t.op} ${El(t.value)}`})).join(", ")}]`),dl(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>El(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>El(e))).join(",")),`Target(${t})`}(fu(e))}; limitType=${e.limitType})`}function vu(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ml.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=nu(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,du(n),r)||n.endAt&&!function(e,t,n){const r=nu(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,du(n),r)));var n,r}function bu(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function wu(e){return(t,n)=>{let r=!1;for(const i of du(e)){const e=Eu(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Eu(e,t,n){const r=e.field.isKeyField()?ml.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?bl(r,i):Co()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Co()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fl(t)?"-0":t}}function Su(e){return{integerValue:""+e}}function _u(e,t){return pl(t)?Su(t):ku(e,t)}
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
 */class Tu{constructor(){this._=void 0}}function Iu(e,t,n){return e instanceof xu?Au(e,t):e instanceof Ru?Du(e,t):n}function Cu(e,t){var n,r;return e instanceof Ou?_l(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}class Nu extends Tu{}class xu extends Tu{constructor(e){super(),this.elements=e}}function Au(e,t){const n=Pu(t);for(const t of e.elements)n.some((e=>yl(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Ru extends Tu{constructor(e){super(),this.elements=e}}function Du(e,t){let n=Pu(t);for(const t of e.elements)n=n.filter((e=>!yl(e,t)));return{arrayValue:{values:n}}}class Ou extends Tu{constructor(e,t){super(),this.M=e,this.k=t}}function Lu(e){return sl(e.integerValue||e.doubleValue)}function Pu(e){return Tl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class Mu{constructor(e,t){this.version=e,this.transformResults=t}}class Uu{static none(){return new Uu}static exists(e){return new Uu(void 0,e)}static updateTime(e){return new Uu(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function Fu(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Vu{}function ju(e,t,n){var r;e instanceof Hu?function(e,t,n){const r=e.value.clone(),i=Gu(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ku?function(e,t,n){if(!Fu(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Gu(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Wu(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function zu(e,t,n){var r;e instanceof Hu?function(e,t,n){if(!Fu(e.precondition,t))return;const r=e.value.clone(),i=Qu(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument($u(t),r).setHasLocalMutations()}(e,t,n):e instanceof Ku?function(e,t,n){if(!Fu(e.precondition,t))return;const r=Qu(e.fieldTransforms,n,t),i=t.data;i.setAll(Wu(e)),i.setAll(r),t.convertToFoundDocument($u(t),i).setHasLocalMutations()}(e,t,n):(r=t,Fu(e.precondition,r)&&r.convertToNoDocument(Ko.min()))}function Bu(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Cu(r.transform,e||null);null!=i&&(null==n&&(n=Rl.empty()),n.set(r.field,i))}return n||null}function qu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&$o(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof xu&&r instanceof xu||n instanceof Ru&&r instanceof Ru?$o(n.elements,r.elements,yl):n instanceof Ou&&r instanceof Ou?yl(n.k,r.k):n instanceof Nu&&r instanceof Nu);var n,r}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}function $u(e){return e.isFoundDocument()?e.version:Ko.min()}class Hu extends Vu{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ku extends Vu{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Wu(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Gu(e,t,n){const r=new Map;No(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],a=s.transform,o=t.data.field(s.field);r.set(s.field,Iu(a,o,n[i]))}return r}function Qu(e,t,n){const r=new Map;for(const o of e){const e=o.transform,l=n.data.field(o.field);r.set(o.field,(s=l,a=t,(i=e)instanceof Nu?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(a,s):i instanceof xu?Au(i,s):i instanceof Ru?Du(i,s):function(e,t){const n=Cu(e,t),r=Lu(n)+Lu(e.k);return _l(n)&&_l(e.k)?Su(r):ku(e.M,r)}(i,s)))}var i,s,a;return r}class Xu extends Vu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Yu extends Vu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */class Ju{constructor(e){this.count=e}}
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
 */var Zu,ec;function tc(e){switch(e){default:return Co();case Ao.CANCELLED:case Ao.UNKNOWN:case Ao.DEADLINE_EXCEEDED:case Ao.RESOURCE_EXHAUSTED:case Ao.INTERNAL:case Ao.UNAVAILABLE:case Ao.UNAUTHENTICATED:return!1;case Ao.INVALID_ARGUMENT:case Ao.NOT_FOUND:case Ao.ALREADY_EXISTS:case Ao.PERMISSION_DENIED:case Ao.FAILED_PRECONDITION:case Ao.ABORTED:case Ao.OUT_OF_RANGE:case Ao.UNIMPLEMENTED:case Ao.DATA_LOSS:return!0}}function nc(e){if(void 0===e)return _o("GRPC error has no .code"),Ao.UNKNOWN;switch(e){case Zu.OK:return Ao.OK;case Zu.CANCELLED:return Ao.CANCELLED;case Zu.UNKNOWN:return Ao.UNKNOWN;case Zu.DEADLINE_EXCEEDED:return Ao.DEADLINE_EXCEEDED;case Zu.RESOURCE_EXHAUSTED:return Ao.RESOURCE_EXHAUSTED;case Zu.INTERNAL:return Ao.INTERNAL;case Zu.UNAVAILABLE:return Ao.UNAVAILABLE;case Zu.UNAUTHENTICATED:return Ao.UNAUTHENTICATED;case Zu.INVALID_ARGUMENT:return Ao.INVALID_ARGUMENT;case Zu.NOT_FOUND:return Ao.NOT_FOUND;case Zu.ALREADY_EXISTS:return Ao.ALREADY_EXISTS;case Zu.PERMISSION_DENIED:return Ao.PERMISSION_DENIED;case Zu.FAILED_PRECONDITION:return Ao.FAILED_PRECONDITION;case Zu.ABORTED:return Ao.ABORTED;case Zu.OUT_OF_RANGE:return Ao.OUT_OF_RANGE;case Zu.UNIMPLEMENTED:return Ao.UNIMPLEMENTED;case Zu.DATA_LOSS:return Ao.DATA_LOSS;default:return Co()}}(ec=Zu||(Zu={}))[ec.OK=0]="OK",ec[ec.CANCELLED=1]="CANCELLED",ec[ec.UNKNOWN=2]="UNKNOWN",ec[ec.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ec[ec.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ec[ec.NOT_FOUND=5]="NOT_FOUND",ec[ec.ALREADY_EXISTS=6]="ALREADY_EXISTS",ec[ec.PERMISSION_DENIED=7]="PERMISSION_DENIED",ec[ec.UNAUTHENTICATED=16]="UNAUTHENTICATED",ec[ec.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ec[ec.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ec[ec.ABORTED=10]="ABORTED",ec[ec.OUT_OF_RANGE=11]="OUT_OF_RANGE",ec[ec.UNIMPLEMENTED=12]="UNIMPLEMENTED",ec[ec.INTERNAL=13]="INTERNAL",ec[ec.UNAVAILABLE=14]="UNAVAILABLE",ec[ec.DATA_LOSS=15]="DATA_LOSS";
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
class rc{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Go(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Qo(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
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
 */class ic{insert(e,t){return new ic(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ac.BLACK,null,null))}remove(e){return new ic(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ac.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sc(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||ac.EMPTY}}class sc{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class ac{copy(e,t,n,r,i){return new ac(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ac.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ac.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ac.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ac.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Co();if(this.right.isRed())throw Co();const e=this.left.check();if(e!==this.right.check())throw Co();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ac.RED,this.left=null!=r?r:ac.EMPTY,this.right=null!=i?i:ac.EMPTY,this.size=this.left.size+1+this.right.size}}ac.EMPTY=null,ac.RED=!0,ac.BLACK=!1,ac.EMPTY=new class{get key(){throw Co()}get value(){throw Co()}get color(){throw Co()}get left(){throw Co()}get right(){throw Co()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ac(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class oc{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lc(this.data.getIterator())}getIteratorFrom(e){return new lc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof oc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new oc(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new ic(this.comparator)}}class lc{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
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
const uc=new ic(ml.comparator);function cc(){return uc}const hc=new ic(ml.comparator);function dc(){return hc}function fc(){return new rc((e=>e.toString()),((e,t)=>e.isEqual(t)))}const pc=new ic(ml.comparator),mc=new oc(ml.comparator);function gc(...e){let t=mc;for(const n of e)t=t.add(n);return t}const yc=new oc(qo);function vc(){return yc}
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
 */class bc{static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,wc.createSynthesizedTargetChangeForCurrentChange(e,t)),new bc(Ko.min(),n,vc(),cc(),gc())}constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class wc{static createSynthesizedTargetChangeForCurrentChange(e,t){return new wc(nl.EMPTY_BYTE_STRING,t,gc(),gc(),gc())}constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
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
 */class Ec{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class kc{constructor(e,t){this.targetId=e,this.$=t}}class Sc{constructor(e,t,n=nl.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class _c{get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=gc(),t=gc(),n=gc();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Co()}})),new wc(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=Cc()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}constructor(){this.B=0,this.L=Cc(),this.U=nl.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}}class Tc{ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Co()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(ql(e))if(0===n){const n=new ml(e.path);this.ct(t,n,Ol.newNoDocument(n,Ko.min()))}else No(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&ql(i.target)){const t=new ml(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,Ol.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}}));let n=gc();this.rt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const r=new bc(e,t,this.ot,this.it,n);return this.it=cc(),this.rt=Ic(),this.ot=new oc(qo),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new _c,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new oc(qo),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||So("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new _c),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}constructor(e){this.nt=e,this.st=new Map,this.it=cc(),this.rt=Ic(),this.ot=new oc(qo)}}function Ic(){return new ic(ml.comparator)}function Cc(){return new ic(ml.comparator)}
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
 */const Nc={asc:"ASCENDING",desc:"DESCENDING"},xc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Ac{constructor(e,t){this.databaseId=e,this.N=t}}function Rc(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Dc(e,t){return e.N?t.toBase64():t.toUint8Array()}function Oc(e,t){return Rc(e,t.toTimestamp())}function Lc(e){return No(!!e),Ko.fromTimestamp(function(e){const t=il(e);return new Ho(t.seconds,t.nanos)}(e))}function Pc(e,t){return(n=e,new Yo(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Mc(e){const t=Yo.fromString(e);return No(th(t)),t}function Uc(e,t){return Pc(e.databaseId,t.path)}function Fc(e,t){const n=Mc(t);if(n.get(1)!==e.databaseId.projectId)throw new Ro(Ao.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ro(Ao.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ml(Bc(n))}function Vc(e,t){return Pc(e.databaseId,t)}function jc(e){const t=Mc(e);return 4===t.length?Yo.emptyPath():Bc(t)}function zc(e){return new Yo(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Bc(e){return No(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function qc(e,t,n){return{name:Uc(e,t),fields:n.value.mapValue.fields}}function $c(e,t){let n;if(t instanceof Hu)n={update:qc(e,t.key,t.value)};else if(t instanceof Xu)n={delete:Uc(e,t.key)};else if(t instanceof Ku)n={update:qc(e,t.key,t.data),updateMask:eh(t.fieldMask)};else{if(!(t instanceof Yu))return Co();n={verify:Uc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Nu)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof xu)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ru)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ou)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Co()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Oc(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Co())),n;var r,i}function Hc(e,t){return{documents:[Vc(e,t.path)]}}function Kc(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Vc(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Vc(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Cl(e.value))return{unaryFilter:{field:Yc(e.field),op:"IS_NAN"}};if(Il(e.value))return{unaryFilter:{field:Yc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Cl(e.value))return{unaryFilter:{field:Yc(e.field),op:"IS_NOT_NAN"}};if(Il(e.value))return{unaryFilter:{field:Yc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yc(e.field),op:Xc(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:Yc((t=e).field),direction:Qc(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const a=(o=e,l=t.limit,o.N||dl(l)?l:{value:l});var o,l,u;return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Wc(e){let t=jc(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){No(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Gc(n.where));let a=[];n.orderBy&&(a=n.orderBy.map((e=>{return new eu(Jc((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,dl(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Zl(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Zl(n,t)}(n.endAt)),su(t,i,a,s,o,"F",l,u)}function Gc(e){return e?void 0!==e.unaryFilter?[Zc(e)]:void 0!==e.fieldFilter?[(t=e,$l.create(Jc(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Co()}}(t.fieldFilter.op),t.fieldFilter.value))]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Gc(e))).reduce(((e,t)=>e.concat(t))):Co():[];var t}function Qc(e){return Nc[e]}function Xc(e){return xc[e]}function Yc(e){return{fieldPath:e.canonicalString()}}function Jc(e){return Zo.fromServerFormat(e.fieldPath)}function Zc(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Jc(e.unaryFilter.field);return $l.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Jc(e.unaryFilter.field);return $l.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jc(e.unaryFilter.field);return $l.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jc(e.unaryFilter.field);return $l.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Co()}}function eh(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function th(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */const nh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],rh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ih="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
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
 */class ah{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Co(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ah(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ah?t:ah.resolve(t)}catch(e){return ah.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ah.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ah.reject(t)}static resolve(e){return new ah(((t,n)=>{t(e)}))}static reject(e){return new ah(((t,n)=>{n(e)}))}static waitFor(e){return new ah(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=ah.resolve(!1);for(const n of e)t=t.next((e=>e?ah.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
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
 */function oh(e){return"IndexedDbTransactionError"===e.name}
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
class lh{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&ju(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&zu(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&zu(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Ko.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),gc())}isEqual(e){return this.batchId===e.batchId&&$o(this.mutations,e.mutations,((e,t)=>qu(e,t)))&&$o(this.baseMutations,e.baseMutations,((e,t)=>qu(e,t)))}constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}}class uh{static from(e,t,n){No(e.mutations.length===n.length);let r=pc;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new uh(e,t,n,r)}constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}}
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
 */class ch{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
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
 */class hh{withSequenceNumber(e){return new hh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new hh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new hh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}constructor(e,t,n,r,i=Ko.min(),s=Ko.min(),a=nl.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}}
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
 */class dh{constructor(e){this.Jt=e}}function fh(e){const t=Wc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?pu(t,t.limit,"L"):t}
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
 */class ph{Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(sl(e.integerValue));else if("doubleValue"in e){const n=sl(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),fl(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(al(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?Al(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):Co()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const e of Object.keys(n))this.re(e,t),this.te(n[e],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const e of n)this.te(e,t)}ae(e,t){this.ne(t,37),ml.fromName(e).path.forEach((e=>{this.ne(t,60),this.le(e,t)}))}ne(e,t){e.se(t)}oe(e){e.se(2)}constructor(){}}ph.fe=new ph;
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
class mh{addToCollectionParentIndex(e,t){return this.qe.add(t),ah.resolve()}getCollectionParents(e,t){return ah.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return ah.resolve()}deleteFieldIndex(e,t){return ah.resolve()}getDocumentsMatchingTarget(e,t){return ah.resolve(null)}getFieldIndex(e,t){return ah.resolve(null)}getFieldIndexes(e,t){return ah.resolve([])}getNextCollectionGroupToUpdate(e){return ah.resolve(null)}updateCollectionGroup(e,t,n){return ah.resolve()}updateIndexEntries(e,t){return ah.resolve()}constructor(){this.qe=new gh}}class gh{add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new oc(Yo.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new oc(Yo.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class yh{static withCacheSize(e){return new yh(e,yh.DEFAULT_COLLECTION_PERCENTILE,yh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */yh.DEFAULT_COLLECTION_PERCENTILE=10,yh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yh.DEFAULT=new yh(41943040,yh.DEFAULT_COLLECTION_PERCENTILE,yh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yh.DISABLED=new yh(-1,0,0);
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
class vh{next(){return this.mn+=2,this.mn}static gn(){return new vh(0)}static yn(){return new vh(-1)}constructor(e){this.mn=e}}
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
async function bh(e){if(e.code!==Ao.FAILED_PRECONDITION||e.message!==ih)throw e;So("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class wh{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ol.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ah.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new rc((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
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
class Eh{Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Us(e,t,n)))}Us(e,t,n){return this.ds.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}qs(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}Ks(e,t){return this.ds.getEntries(e,t).next((t=>this.Gs(e,t).next((()=>t))))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.qs(t,e)))}Qs(e,t,n){return r=t,ml.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.js(e,t.path):hu(t)?this.Ws(e,t,n):this.zs(e,t,n);var r}js(e,t){return this.Ls(e,new ml(t)).next((e=>{let t=dc();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Ws(e,t,n){const r=t.collectionGroup;let i=dc();return this.indexManager.getCollectionParents(e,r).next((s=>ah.forEach(s,(s=>{const a=(o=t,l=s.child(r),new iu(l,null,o.explicitOrderBy.slice(),o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt));var o,l;return this.zs(e,a,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}zs(e,t,n){let r;return this.ds.getAllFromCollection(e,t.path,n).next((n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Ol.newInvalidDocument(n),r=r.insert(n,i)),zu(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((e,n)=>{vu(t,n)||(r=r.remove(e))})),r)))}constructor(e,t,n){this.ds=e,this.Bs=t,this.indexManager=n}}
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
 */class kh{static Ys(e,t){let n=gc(),r=gc();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new kh(e,t.fromCache,n,r)}constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hs=n,this.Js=r}}
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
 */class Sh{Xs(e){this.Zs=e}Qs(e,t,n,r){return 0===(i=t).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(Ko.min())?this.ti(e,t):this.Zs.Ks(e,r).next((i=>{const s=this.ei(t,i);return(ou(t)||lu(t))&&this.ni(t.limitType,s,r,n)?this.ti(e,t):(ko()<=z.DEBUG&&So("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),yu(t)),this.Zs.Qs(e,t,Pl(n,-1)).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}));var i}ei(e,t){let n=new oc(wu(e));return t.forEach(((t,r)=>{vu(e,r)&&(n=n.add(r))})),n}ni(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ti(e,t){return ko()<=z.DEBUG&&So("QueryEngine","Using full collection scan to execute query:",yu(t)),this.Zs.Qs(e,t,Ul.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new Eh(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ii)))}constructor(e,t,n,r){this.persistence=e,this.si=t,this.M=r,this.ii=new ic(qo),this.ri=new rc((e=>zl(e)),Bl),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(n)}}function Th(e,t,n,r){return new _h(e,t,n,r)}async function Ih(e,t){const n=xo(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.Bs.getAllMutationBatches(e).next((i=>(r=i,n.ai(t),n.Bs.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let a=gc();for(const e of r){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.ci.Ks(e,a).next((e=>({hi:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Ch(e){const t=xo(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.fs.getLastRemoteSnapshotVersion(e)))}function Nh(e,t,n){let r=gc();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=cc();return n.forEach(((n,i)=>{const s=e.get(n);i.isNoDocument()&&i.version.isEqual(Ko.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):So("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)})),r}))}function xh(e,t){const n=xo(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(e,t))))}function Ah(e,t){const n=xo(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.fs.getTargetData(e,t).next((i=>i?(r=i,ah.resolve(r)):n.fs.allocateTargetId(e).next((i=>(r=new hh(t,i,0,e.currentSequenceNumber),n.fs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ii.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ii=n.ii.insert(e.targetId,e),n.ri.set(t,e.targetId)),e}))}async function Rh(e,t,n){const r=xo(e),i=r.ii.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!oh(e))throw e;So("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ii=r.ii.remove(t),r.ri.delete(i.target)}function Dh(e,t,n){const r=xo(e);let i=Ko.min(),s=gc();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=xo(e),i=r.ri.get(n);return void 0!==i?ah.resolve(r.ii.get(i)):r.fs.getTargetData(t,n)}(r,e,fu(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.si.Qs(e,t,n?i:Ko.min(),n?s:gc()))).next((e=>(Oh(r,bu(t),e),{documents:e,li:s})))))}function Oh(e,t,n){let r=Ko.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.oi.set(t,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lh{getBundleMetadata(e,t){return ah.resolve(this.wi.get(t))}saveBundleMetadata(e,t){var n;return this.wi.set(t.id,{id:(n=t).id,version:n.version,createTime:Lc(n.createTime)}),ah.resolve()}getNamedQuery(e,t){return ah.resolve(this.mi.get(t))}saveNamedQuery(e,t){return this.mi.set(t.name,{name:(n=t).name,query:fh(n.bundledQuery),readTime:Lc(n.readTime)}),ah.resolve();var n}constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}}
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
 */class Ph{getOverlay(e,t){return ah.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Xt(e,t,r)})),ah.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.gi.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.gi.delete(n)),ah.resolve()}getOverlaysForCollection(e,t,n){const r=fc(),i=t.length+1,s=new ml(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ah.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ic(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=fc(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=fc(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach(((e,t)=>a.set(e,t))),!(a.size()>=r)););return ah.resolve(a)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.gi.get(r.largestBatchId).delete(n.key);this.gi.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ch(t,n));let i=this.gi.get(t);void 0===i&&(i=gc(),this.gi.set(t,i)),this.gi.set(t,i.add(n.key))}constructor(){this.overlays=new ic(ml.comparator),this.gi=new Map}}
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
 */class Mh{isEmpty(){return this.yi.isEmpty()}addReference(e,t){const n=new Uh(e,t);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ai(new Uh(e,t))}Ri(e,t){e.forEach((e=>this.removeReference(e,t)))}Pi(e){const t=new ml(new Yo([])),n=new Uh(t,e),r=new Uh(t,e+1),i=[];return this.Ii.forEachInRange([n,r],(e=>{this.Ai(e),i.push(e.key)})),i}bi(){this.yi.forEach((e=>this.Ai(e)))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const t=new ml(new Yo([])),n=new Uh(t,e),r=new Uh(t,e+1);let i=gc();return this.Ii.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Uh(e,0),n=this.yi.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.yi=new oc(Uh.pi),this.Ii=new oc(Uh.Ti)}}class Uh{static pi(e,t){return ml.comparator(e.key,t.key)||qo(e.vi,t.vi)}static Ti(e,t){return qo(e.vi,t.vi)||ml.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.vi=t}}
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
 */class Fh{checkEmpty(e){return ah.resolve(0===this.Bs.length)}addMutationBatch(e,t,n,r){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const s=new lh(i,t,n,r);this.Bs.push(s);for(const t of r)this.Di=this.Di.add(new Uh(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ah.resolve(s)}lookupMutationBatch(e,t){return ah.resolve(this.Ci(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.xi(n),i=r<0?0:r;return ah.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return ah.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(e){return ah.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Uh(t,0),r=new Uh(t,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([n,r],(e=>{const t=this.Ci(e.vi);i.push(t)})),ah.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new oc(qo);return t.forEach((e=>{const t=new Uh(e,0),r=new Uh(e,Number.POSITIVE_INFINITY);this.Di.forEachInRange([t,r],(e=>{n=n.add(e.vi)}))})),ah.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ml.isDocumentKey(i)||(i=i.child(""));const s=new Uh(new ml(i),0);let a=new oc(qo);return this.Di.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.vi)),!0)}),s),ah.resolve(this.Ni(a))}Ni(e){const t=[];return e.forEach((e=>{const n=this.Ci(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){No(0===this.ki(t.batchId,"removed")),this.Bs.shift();let n=this.Di;return ah.forEach(t.mutations,(r=>{const i=new Uh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Di=n}))}_n(e){}containsKey(e,t){const n=new Uh(t,0),r=this.Di.firstAfterOrEqual(n);return ah.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,ah.resolve()}ki(e,t){return this.xi(e)}xi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}Ci(e){const t=this.xi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.Si=1,this.Di=new oc(Uh.pi)}}
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
 */class Vh{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mi(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ah.resolve(n?n.document.mutableCopy():Ol.newInvalidDocument(t))}getEntries(e,t){let n=cc();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ol.newInvalidDocument(e))})),ah.resolve(n)}getAllFromCollection(e,t,n){let r=cc();const i=new ml(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Fl(Ml(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return ah.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Co()}Oi(e,t){return ah.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new jh(this)}getSize(e){return ah.resolve(this.size)}constructor(e){this.Mi=e,this.docs=new ic(ml.comparator),this.size=0}}class jh extends wh{applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(n)})),ah.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}constructor(e){super(),this.Kn=e}}
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
 */class zh{forEachTarget(e,t){return this.Fi.forEach(((e,n)=>t(n))),ah.resolve()}getLastRemoteSnapshotVersion(e){return ah.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ah.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),ah.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$i&&(this.$i=t),ah.resolve()}Tn(e){this.Fi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Li=new vh(t),this.highestTargetId=t),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,ah.resolve()}updateTargetData(e,t){return this.Tn(t),ah.resolve()}removeTargetData(e,t){return this.Fi.delete(t.target),this.Bi.Pi(t.targetId),this.targetCount-=1,ah.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Fi.forEach(((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Fi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),ah.waitFor(i).next((()=>r))}getTargetCount(e){return ah.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fi.get(t)||null;return ah.resolve(n)}addMatchingKeys(e,t,n){return this.Bi.Ei(t,n),ah.resolve()}removeMatchingKeys(e,t,n){this.Bi.Ri(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),ah.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Bi.Pi(t),ah.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Bi.Vi(t);return ah.resolve(n)}containsKey(e,t){return ah.resolve(this.Bi.containsKey(t))}constructor(e){this.persistence=e,this.Fi=new rc((e=>zl(e)),Bl),this.lastRemoteSnapshotVersion=Ko.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Mh,this.targetCount=0,this.Li=vh.gn()}}
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
 */class Bh{start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ph,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ui[e.toKey()];return n||(n=new Fh(t,this.referenceDelegate),this.Ui[e.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,n){So("MemoryPersistence","Starting transaction:",e);const r=new qh(this.es.next());return this.referenceDelegate.Ki(),n(r).next((e=>this.referenceDelegate.Gi(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Qi(e,t){return ah.or(Object.values(this.Ui).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.Ui={},this.overlays={},this.es=new jo(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new zh(this),this.indexManager=new mh,this.ds=new Vh((e=>this.referenceDelegate.qi(e))),this.M=new dh(t),this._s=new Lh(this.M)}}class qh extends sh{constructor(e){super(),this.currentSequenceNumber=e}}class $h{static zi(e){return new $h(e)}get Hi(){if(this.Wi)return this.Wi;throw Co()}addReference(e,t,n){return this.ji.addReference(n,t),this.Hi.delete(n.toString()),ah.resolve()}removeReference(e,t,n){return this.ji.removeReference(n,t),this.Hi.add(n.toString()),ah.resolve()}markPotentiallyOrphaned(e,t){return this.Hi.add(t.toString()),ah.resolve()}removeTarget(e,t){this.ji.Pi(t.targetId).forEach((e=>this.Hi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Hi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ki(){this.Wi=new Set}Gi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ah.forEach(this.Hi,(n=>{const r=ml.fromPath(n);return this.Ji(e,r).next((e=>{e||t.removeEntry(r,Ko.min())}))})).next((()=>(this.Wi=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ji(e,t).next((e=>{e?this.Hi.delete(t.toString()):this.Hi.add(t.toString())}))}qi(e){return 0}Ji(e,t){return ah.or([()=>ah.resolve(this.ji.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Qi(e,t)])}constructor(e){this.persistence=e,this.ji=new Mh,this.Wi=null}}
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
 */class Hh{Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=vc()}}class Kh{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,t,n){this.Br[e]=t}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new Hh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.$r=new Hh,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class Wh{Lr(e){}shutdown(){}}
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
 */class Gh{Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){So("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){So("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Xh{Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}constructor(e){this.Wr=e.Wr,this.zr=e.zr}}
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
 */class Yh extends class{oo(e,t,n,r,i){const s=this.uo(e,t);So("RestConnection","Sending: ",s,n);const a={};return this.ao(a,r,i),this.co(e,s,a,n).then((e=>(So("RestConnection","Received: ",e),e)),(t=>{throw To("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ho(e,t,n,r,i){return this.oo(e,t,n,r,i)}ao(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+wo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}uo(e,t){const n=Qh[e];return`${this.io}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.io=t+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{co(e,t,n,r){return new Promise(((i,s)=>{const a=new so;a.listenOnce(eo.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Za.NO_ERROR:const t=a.getResponseJson();So("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Za.TIMEOUT:So("Connection",'RPC "'+e+'" timed out'),s(new Ro(Ao.DEADLINE_EXCEEDED,"Request time out"));break;case Za.HTTP_ERROR:const n=a.getStatus();if(So("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){const e=a.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ao).indexOf(t)>=0?t:Ao.UNKNOWN}(e.status);s(new Ro(t,e.message))}else s(new Ro(Ao.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new Ro(Ao.UNAVAILABLE,"Connection failed."));break;default:Co()}}finally{So("Connection",'RPC "'+e+'" completed.')}}));const o=JSON.stringify(r);a.send(t,"POST",o,n,15)}))}lo(e,t,n){const r=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Ya(),s=Ja(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ro({})),this.ao(a.initMessageHeaders,t,n),g()||v()||m().indexOf("Electron/")>=0||b()||m().indexOf("MSAppHost/")>=0||y()||(a.httpHeadersOverwriteParam="$httpHeaders");const o=r.join("");So("Connection","Creating WebChannel: "+o,a);const l=i.createWebChannel(o,a);let u=!1,c=!1;const h=new Xh({Wr:e=>{c?So("Connection","Not sending because WebChannel is closed:",e):(u||(So("Connection","Opening WebChannel transport."),l.open(),u=!0),So("Connection","WebChannel sending:",e),l.send(e))},zr:()=>l.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(l,io.EventType.OPEN,(()=>{c||So("Connection","WebChannel transport opened.")})),d(l,io.EventType.CLOSE,(()=>{c||(c=!0,So("Connection","WebChannel transport closed"),h.no())})),d(l,io.EventType.ERROR,(e=>{c||(c=!0,To("Connection","WebChannel transport errored:",e),h.no(new Ro(Ao.UNAVAILABLE,"The operation could not be completed")))})),d(l,io.EventType.MESSAGE,(e=>{var t;if(!c){const n=e.data[0];No(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){So("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Zu[e];if(void 0!==t)return nc(t)}(e),n=i.message;void 0===t&&(t=Ao.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),c=!0,h.no(new Ro(t,n)),l.close()}else So("Connection","WebChannel received:",n),h.so(n)}})),d(s,to.STAT_EVENT,(e=>{e.stat===no.PROXY?So("Connection","Detected buffering proxy"):e.stat===no.NOPROXY&&So("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.eo()}),0),h}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */function Jh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(e){return new Ac(e,!0)}class ed{reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const t=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),r=Math.max(0,t-n);r>0&&So("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.mo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,r,(()=>(this.po=Date.now(),e()))),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}constructor(e,t,n=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=t,this.fo=n,this._o=r,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}}
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
 */class td{Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,(()=>this.Oo())))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,t){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==e?this.Do.reset():t&&t.code===Ao.RESOURCE_EXHAUSTED?(_o(t.toString()),_o("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):t&&t.code===Ao.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(t)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.qo(e,n)}),(t=>{e((()=>{const e=new Ro(Ao.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ko(e)}))}))}qo(e,t){const n=this.Uo(this.Vo);this.stream=this.Go(e,t),this.stream.Hr((()=>{n((()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,(()=>(this.xo()&&(this.state=3),Promise.resolve()))),this.listener.Hr())))})),this.stream.Yr((e=>{n((()=>this.Ko(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}No(){this.state=5,this.Do.To((async()=>{this.state=0,this.start()}))}Ko(e){return So("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Yn.enqueueAndForget((()=>this.Vo===e?t():(So("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,r,i,s,a,o){this.Yn=e,this.Ro=n,this.Po=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new ed(e,t)}}class nd extends td{Go(e,t){return this.bo.lo("Listen",e,t)}onMessage(e){this.Do.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Co(),s=t.targetChange.targetIds||[],a=function(e,t){return e.N?(No(void 0===t||"string"==typeof t),nl.fromBase64String(t||"")):(No(void 0===t||t instanceof Uint8Array),nl.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(e){const t=void 0===e.code?Ao.UNKNOWN:nc(e.code);return new Ro(t,e.message||"")}(o);n=new Sc(i,s,a,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fc(e,r.document.name),s=Lc(r.document.updateTime),a=new Rl({mapValue:{fields:r.document.fields}}),o=Ol.newFoundDocument(i,s,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ec(l,u,o.key,o)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Fc(e,r.document),s=r.readTime?Lc(r.readTime):Ko.min(),a=Ol.newNoDocument(i,s),o=r.removedTargetIds||[];n=new Ec([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Fc(e,r.document),s=r.removedTargetIds||[];n=new Ec([],s,i,null)}else{if(!("filter"in t))return Co();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Ju(r),s=e.targetId;n=new kc(s,i)}}var r;return n}(this.M,e),n=function(e){if(!("targetChange"in e))return Ko.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ko.min():t.readTime?Lc(t.readTime):Ko.min()}(e);return this.listener.Qo(t,n)}jo(e){const t={};t.database=zc(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=ql(r)?{documents:Hc(e,r)}:{query:Kc(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Dc(e,t.resumeToken):t.snapshotVersion.compareTo(Ko.min())>0&&(n.readTime=Rc(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Co()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.M,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=zc(this.M),t.removeTarget=e,this.Fo(t)}constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.M=i}}class rd extends td{get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,t){return this.bo.lo("Write",e,t)}onMessage(e){if(No(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(No(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?Lc(e.updateTime):Lc(t);return n.isEqual(Ko.min())&&(n=Lc(t)),new Mu(n,e.transformResults||[])}(e,n)))):[]),i=Lc(e.commitTime);return this.listener.Yo(i,r)}var t,n;return No(!e.writeResults||0===e.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=zc(this.M),this.Fo(e)}Jo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>$c(this.M,e)))};this.Fo(t)}constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.M=i,this.zo=!1}}
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
 */class id extends class{}{eu(){if(this.tu)throw new Ro(Ao.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,t,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.oo(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ao.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ro(Ao.UNKNOWN,e.toString())}))}ho(e,t,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ho(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ao.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ro(Ao.UNKNOWN,e.toString())}))}terminate(){this.tu=!0}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.M=r,this.tu=!1}}class sd{ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,"Online"===e&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(_o(t),this.iu=!1):So("OnlineStateTracker",t)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}}
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
 */class ad{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr((e=>{n.enqueueAndForget((async()=>{md(this)&&(So("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=xo(e);t.fu.add(4),await ld(t),t.wu.set("Unknown"),t.fu.delete(4),await od(t)}(this))}))})),this.wu=new sd(n,r)}}async function od(e){if(md(e))for(const t of e.du)await t(!0)}async function ld(e){for(const t of e.du)await t(!1)}function ud(e,t){const n=xo(e);n.lu.has(t.targetId)||(n.lu.set(t.targetId,t),pd(n)?fd(n):Od(n).xo()&&hd(n,t))}function cd(e,t){const n=xo(e),r=Od(n);n.lu.delete(t),r.xo()&&dd(n,t),0===n.lu.size&&(r.xo()?r.Mo():md(n)&&n.wu.set("Unknown"))}function hd(e,t){e.mu.Z(t.targetId),Od(e).jo(t)}function dd(e,t){e.mu.Z(t),Od(e).Wo(t)}function fd(e){e.mu=new Tc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.lu.get(t)||null}),Od(e).start(),e.wu.ru()}function pd(e){return md(e)&&!Od(e).Co()&&e.lu.size>0}function md(e){return 0===xo(e).fu.size}function gd(e){e.mu=void 0}async function yd(e){e.lu.forEach(((t,n)=>{hd(e,t)}))}async function vd(e,t){gd(e),pd(e)?(e.wu.au(t),fd(e)):e.wu.set("Unknown")}async function bd(e,t,n){if(e.wu.set("Online"),t instanceof Sc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.lu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.lu.delete(r),e.mu.removeTarget(r))}(e,t)}catch(n){So("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await wd(e,n)}else if(t instanceof Ec?e.mu.ut(t):t instanceof kc?e.mu._t(t):e.mu.ht(t),!n.isEqual(Ko.min()))try{const t=await Ch(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.mu.yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.lu.get(r);i&&e.lu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.lu.get(t);if(!n)return;e.lu.set(t,n.withResumeToken(nl.EMPTY_BYTE_STRING,n.snapshotVersion)),dd(e,t);const r=new hh(n.target,t,1,n.sequenceNumber);hd(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){So("RemoteStore","Failed to raise snapshot:",t),await wd(e,t)}}async function wd(e,t,n){if(!oh(t))throw t;e.fu.add(1),await ld(e),e.wu.set("Offline"),n||(n=()=>Ch(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{So("RemoteStore","Retrying IndexedDB access"),await n(),e.fu.delete(1),await od(e)}))}function Ed(e,t){return t().catch((n=>wd(e,n,t)))}async function kd(e){const t=xo(e),n=Ld(t);let r=t.hu.length>0?t.hu[t.hu.length-1].batchId:-1;for(;Sd(t);)try{const e=await xh(t.localStore,r);if(null===e){0===t.hu.length&&n.Mo();break}r=e.batchId,_d(t,e)}catch(e){await wd(t,e)}Td(t)&&Id(t)}function Sd(e){return md(e)&&e.hu.length<10}function _d(e,t){e.hu.push(t);const n=Ld(e);n.xo()&&n.Ho&&n.Jo(t.mutations)}function Td(e){return md(e)&&!Ld(e).Co()&&e.hu.length>0}function Id(e){Ld(e).start()}async function Cd(e){Ld(e).Zo()}async function Nd(e){const t=Ld(e);for(const n of e.hu)t.Jo(n.mutations)}async function xd(e,t,n){const r=e.hu.shift(),i=uh.from(r,t,n);await Ed(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await kd(e)}async function Ad(e,t){t&&Ld(e).Ho&&await async function(e,t){if(tc(n=t.code)&&n!==Ao.ABORTED){const n=e.hu.shift();Ld(e).ko(),await Ed(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await kd(e)}var n}(e,t),Td(e)&&Id(e)}async function Rd(e,t){const n=xo(e);n.asyncQueue.verifyOperationInProgress(),So("RemoteStore","RemoteStore received new credentials");const r=md(n);n.fu.add(3),await ld(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.fu.delete(3),await od(n)}async function Dd(e,t){const n=xo(e);t?(n.fu.delete(2),await od(n)):t||(n.fu.add(2),await ld(n),n.wu.set("Unknown"))}function Od(e){return e.gu||(e.gu=function(e,t,n){const r=xo(e);return r.eu(),new nd(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Hr:yd.bind(null,e),Yr:vd.bind(null,e),Qo:bd.bind(null,e)}),e.du.push((async t=>{t?(e.gu.ko(),pd(e)?fd(e):e.wu.set("Unknown")):(await e.gu.stop(),gd(e))}))),e.gu}function Ld(e){return e.yu||(e.yu=function(e,t,n){const r=xo(e);return r.eu(),new rd(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Hr:Cd.bind(null,e),Yr:Ad.bind(null,e),Xo:Nd.bind(null,e),Yo:xd.bind(null,e)}),e.du.push((async t=>{t?(e.yu.ko(),await kd(e)):(await e.yu.stop(),e.hu.length>0&&(So("RemoteStore",`Stopping write stream with ${e.hu.length} pending writes`),e.hu=[]))}))),e.yu
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
 */}class Pd{static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,a=new Pd(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ro(Ao.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Do,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function Md(e,t){if(_o("AsyncQueue",`${t}: ${e}`),oh(e))return new Ro(Ao.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Ud{static emptySet(e){return new Ud(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ud))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ud;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||ml.comparator(t.key,n.key):(e,t)=>ml.comparator(e.key,t.key),this.keyedMap=dc(),this.sortedSet=new ic(this.comparator)}}
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
 */class Fd{track(e){const t=e.doc.key,n=this.pu.get(t);n?0!==e.type&&3===n.type?this.pu=this.pu.insert(t,e):3===e.type&&1!==n.type?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.pu=this.pu.remove(t):1===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):Co():this.pu=this.pu.insert(t,e)}Iu(){const e=[];return this.pu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.pu=new ic(ml.comparator)}}class Vd{static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Vd(e,t,Ud.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,r,i,s,a,o){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o}}
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
 */class jd{constructor(){this.Tu=void 0,this.listeners=[]}}class zd{constructor(){this.queries=new rc((e=>gu(e)),mu),this.onlineState="Unknown",this.Eu=new Set}}async function Bd(e,t){const n=xo(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jd),i)try{s.Tu=await n.onListen(r)}catch(e){const n=Md(e,`Initialization of query '${yu(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Au(n.onlineState),s.Tu&&t.Ru(s.Tu)&&Kd(n)}async function qd(e,t){const n=xo(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $d(e,t){const n=xo(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.Ru(e)&&(r=!0);i.Tu=e}}r&&Kd(n)}function Hd(e,t,n){const r=xo(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Kd(e){e.Eu.forEach((e=>{e.next()}))}class Wd{Ru(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Vd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),t=!0):this.Su(e,this.onlineState)&&(this.Du(e),t=!0),this.Vu=e,t}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let t=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),t=!0),t}Su(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.Cu&&n||e.docs.isEmpty()&&"Offline"!==t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Du(e){e=Vd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}constructor(e,t,n){this.query=e,this.Pu=t,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Gd{constructor(e){this.key=e}}class Qd{constructor(e){this.key=e}}class Xd{get Ku(){return this.$u}Gu(e,t){const n=t?t.Qu:new Fd,r=t?t.qu:this.qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1;const o=ou(this.query)&&r.size===this.query.limit?r.last():null,l=lu(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=vu(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.ju(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.Uu(c,o)>0||l&&this.Uu(c,l)<0)&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),ou(this.query)||lu(this.query))for(;s.size>this.query.limit;){const e=ou(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{qu:s,Qu:n,ni:a,mutatedKeys:i}}ju(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const i=e.Qu.Iu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Co()}};return n(e)-n(t)}(e.type,t.type)||this.Uu(e.doc,t.doc))),this.Wu(n);const s=t?this.zu():[],a=0===this.Lu.size&&this.current?1:0,o=a!==this.Bu;return this.Bu=a,0!==i.length||o?{snapshot:new Vd(this.query,e.qu,r,i,e.mutatedKeys,0===a,o,!1),Hu:s}:{Hu:s}}Au(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Fd,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach((e=>this.$u=this.$u.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.$u=this.$u.delete(e))),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=gc(),this.qu.forEach((e=>{this.Ju(e.key)&&(this.Lu=this.Lu.add(e.key))}));const t=[];return e.forEach((e=>{this.Lu.has(e)||t.push(new Qd(e))})),this.Lu.forEach((n=>{e.has(n)||t.push(new Gd(n))})),t}Yu(e){this.$u=e.li,this.Lu=gc();const t=this.Gu(e.documents);return this.applyChanges(t,!0)}Xu(){return Vd.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}constructor(e,t){this.query=e,this.$u=t,this.Bu=null,this.current=!1,this.Lu=gc(),this.mutatedKeys=gc(),this.Uu=wu(e),this.qu=new Ud(this.Uu)}}class Yd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Jd{constructor(e){this.key=e,this.Zu=!1}}class Zd{get isPrimaryClient(){return!0===this.ha}constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.ta={},this.ea=new rc((e=>gu(e)),mu),this.na=new Map,this.sa=new Set,this.ia=new ic(ml.comparator),this.ra=new Map,this.oa=new Mh,this.ua={},this.aa=new Map,this.ca=vh.yn(),this.onlineState="Unknown",this.ha=void 0}}async function ef(e,t){const n=bf(e);let r,i;const s=n.ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Xu();else{const e=await Ah(n.localStore,fu(t));n.isPrimaryClient&&ud(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await tf(n,t,r,"current"===s)}return i}async function tf(e,t,n,r){e.la=(t,n,r)=>async function(e,t,n,r){let i=t.view.Gu(n);i.ni&&(i=await Dh(e.localStore,t.query,!1).then((({documents:e})=>t.view.Gu(e,i))));const s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return ff(e,t.targetId,a.Hu),a.snapshot}(e,t,n,r);const i=await Dh(e.localStore,t,!0),s=new Xd(t,i.li),a=s.Gu(i.documents),o=wc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),l=s.applyChanges(a,e.isPrimaryClient,o);ff(e,n,l.Hu);const u=new Yd(t,n,s);return e.ea.set(t,u),e.na.has(n)?e.na.get(n).push(t):e.na.set(n,[t]),l.snapshot}async function nf(e,t){const n=xo(e),r=n.ea.get(t),i=n.na.get(r.targetId);if(i.length>1)return n.na.set(r.targetId,i.filter((e=>!mu(e,t)))),void n.ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Rh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),cd(n.remoteStore,r.targetId),hf(n,r.targetId)})).catch(bh)):(hf(n,r.targetId),await Rh(n.localStore,r.targetId,!0))}async function rf(e,t){const n=xo(e);try{const e=await function(e,t){const n=xo(e),r=t.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const a=[];t.targetChanges.forEach(((s,o)=>{const l=i.get(o);if(!l)return;a.push(n.fs.removeMatchingKeys(e,s.removedDocuments,o).next((()=>n.fs.addMatchingKeys(e,s.addedDocuments,o))));let u=l.withSequenceNumber(e.currentSequenceNumber);var c,h,d;t.targetMismatches.has(o)?u=u.withResumeToken(nl.EMPTY_BYTE_STRING,Ko.min()).withLastLimboFreeSnapshotVersion(Ko.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(o,u),h=u,d=s,(0===(c=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&a.push(n.fs.updateTargetData(e,u))}));let o=cc();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),a.push(Nh(e,s,t.documentUpdates).next((e=>{o=e}))),!r.isEqual(Ko.min())){const t=n.fs.getLastRemoteSnapshotVersion(e).next((t=>n.fs.setTargetsMetadata(e,e.currentSequenceNumber,r)));a.push(t)}return ah.waitFor(a).next((()=>s.apply(e))).next((()=>n.ci.Gs(e,o))).next((()=>o))})).then((e=>(n.ii=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ra.get(t);r&&(No(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Zu=!0:e.modifiedDocuments.size>0?No(r.Zu):e.removedDocuments.size>0&&(No(r.Zu),r.Zu=!1))})),await gf(n,e,t)}catch(e){await bh(e)}}function sf(e,t,n){const r=xo(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ea.forEach(((n,r)=>{const i=r.view.Au(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=xo(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Au(t)&&(r=!0)})),r&&Kd(n)}(r.eventManager,t),e.length&&r.ta.Qo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function af(e,t,n){const r=xo(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ra.get(t),s=i&&i.key;if(s){let e=new ic(ml.comparator);e=e.insert(s,Ol.newNoDocument(s,Ko.min()));const n=gc().add(s),i=new bc(Ko.min(),new Map,new oc(qo),e,n);await rf(r,i),r.ia=r.ia.remove(s),r.ra.delete(t),mf(r)}else await Rh(r.localStore,t,!1).then((()=>hf(r,t,n))).catch(bh)}async function of(e,t){const n=xo(e),r=t.batch.batchId;try{const e=await function(e,t){const n=xo(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let a=ah.resolve();return s.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);No(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.Bs.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.ci.Ks(e,r)))}))}(n.localStore,t);cf(n,r,null),uf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gf(n,e)}catch(e){await bh(e)}}async function lf(e,t,n){const r=xo(e);try{const e=await function(e,t){const n=xo(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.Bs.lookupMutationBatch(e,t).next((t=>(No(null!==t),r=t.keys(),n.Bs.removeMutationBatch(e,t)))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.ci.Ks(e,r)))}))}(r.localStore,t);cf(r,t,n),uf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await gf(r,e)}catch(e){await bh(e)}}function uf(e,t){(e.aa.get(t)||[]).forEach((e=>{e.resolve()})),e.aa.delete(t)}function cf(e,t,n){const r=xo(e);let i=r.ua[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ua[r.currentUser.toKey()]=i}}function hf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.na.get(t))e.ea.delete(r),n&&e.ta.fa(r,n);e.na.delete(t),e.isPrimaryClient&&e.oa.Pi(t).forEach((t=>{e.oa.containsKey(t)||df(e,t)}))}function df(e,t){e.sa.delete(t.path.canonicalString());const n=e.ia.get(t);null!==n&&(cd(e.remoteStore,n),e.ia=e.ia.remove(t),e.ra.delete(n),mf(e))}function ff(e,t,n){for(const r of n)r instanceof Gd?(e.oa.addReference(r.key,t),pf(e,r)):r instanceof Qd?(So("SyncEngine","Document no longer in limbo: "+r.key),e.oa.removeReference(r.key,t),e.oa.containsKey(r.key)||df(e,r.key)):Co()}function pf(e,t){const n=t.key,r=n.path.canonicalString();e.ia.get(n)||e.sa.has(r)||(So("SyncEngine","New document in limbo: "+n),e.sa.add(r),mf(e))}function mf(e){for(;e.sa.size>0&&e.ia.size<e.maxConcurrentLimboResolutions;){const t=e.sa.values().next().value;e.sa.delete(t);const n=new ml(Yo.fromString(t)),r=e.ca.next();e.ra.set(r,new Jd(n)),e.ia=e.ia.insert(n,r),ud(e.remoteStore,new hh(fu(au(n.path)),r,2,jo.A))}}async function gf(e,t,n){const r=xo(e),i=[],s=[],a=[];r.ea.isEmpty()||(r.ea.forEach(((e,o)=>{a.push(r.la(o,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(o.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=kh.Ys(o.targetId,e);s.push(t)}})))})),await Promise.all(a),r.ta.Qo(i),await async function(e,t){const n=xo(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ah.forEach(t,(t=>ah.forEach(t.Hs,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ah.forEach(t.Js,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!oh(e))throw e;So("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.ii.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ii=n.ii.insert(t,i)}}}(r.localStore,s))}async function yf(e,t){const n=xo(e);if(!n.currentUser.isEqual(t)){So("SyncEngine","User change. New user:",t.toKey());const e=await Ih(n.localStore,t);n.currentUser=t,(r=n).aa.forEach((e=>{e.forEach((e=>{e.reject(new Ro(Ao.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.aa.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await gf(n,e.hi)}var r}function vf(e,t){const n=xo(e),r=n.ra.get(t);if(r&&r.Zu)return gc().add(r.key);{let e=gc();const r=n.na.get(t);if(!r)return e;for(const t of r){const r=n.ea.get(t);e=e.unionWith(r.view.Ku)}return e}}function bf(e){const t=xo(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=rf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=vf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=af.bind(null,t),t.ta.Qo=$d.bind(null,t.eventManager),t.ta.fa=Hd.bind(null,t.eventManager),t}function wf(e){const t=xo(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=of.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=lf.bind(null,t),t}class Ef{async initialize(e){this.M=Zh(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return Th(this.persistence,new Sh,e.initialUser,this.M)}wa(e){return new Bh($h.zi,this.M)}_a(e){return new Kh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class kf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>sf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=yf.bind(null,this.syncEngine),await Dd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new zd}createDatastore(e){const t=Zh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Yh(r));var r,i,s;return i=e.authCredentials,s=e.appCheckCredentials,new id(i,s,n,t)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>sf(this.syncEngine,e,0),s=Gh.vt()?new Gh:new Wh,new ad(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){const o=new Zd(e,t,n,r,i,s);return a&&(o.ha=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=xo(e);So("RemoteStore","RemoteStore shutting down."),t.fu.add(5),await ld(t),t._u.shutdown(),t.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Sf{next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class _f{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ro(Ao.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Do;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Md(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=bo.UNAUTHENTICATED,this.clientId=Bo.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{So("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(So("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function Tf(e,t){e.asyncQueue.verifyOperationInProgress(),So("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Ih(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function If(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Cf(e);So("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Rd(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Rd(t.remoteStore,n))),e.onlineComponents=t}async function Cf(e){return e.offlineComponents||(So("FirestoreClient","Using default OfflineComponentProvider"),await Tf(e,new Ef)),e.offlineComponents}async function Nf(e){return e.onlineComponents||(So("FirestoreClient","Using default OnlineComponentProvider"),await If(e,new kf)),e.onlineComponents}function xf(e){return Nf(e).then((e=>e.syncEngine))}async function Af(e){const t=await Nf(e),n=t.eventManager;return n.onListen=ef.bind(null,t.syncEngine),n.onUnlisten=nf.bind(null,t.syncEngine),n}function Rf(e,t,n={}){const r=new Do;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Sf({next:n=>{t.enqueueAndForget((()=>qd(e,a))),n.fromCache&&"server"===r.source?i.reject(new Ro(Ao.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new Wd(n,s,{includeMetadataChanges:!0,Cu:!0});return Bd(e,a)}(await Af(e),e.asyncQueue,t,n,r))),r.promise}const Df=new Map;
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
 */function Of(e,t,n){if(!n)throw new Ro(Ao.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Lf(e){if(!ml.isDocumentKey(e))throw new Ro(Ao.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Pf(e){if(ml.isDocumentKey(e))throw new Ro(Ao.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Mf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Co()}function Uf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ro(Ao.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mf(e);throw new Ro(Ao.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ff{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Ro(Ao.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ro(Ao.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Ro(Ao.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{get app(){if(!this._app)throw new Ro(Ao.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ro(Ao.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ff(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Lo;switch(e.type){case"gapi":const t=e.client;return No(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Uo(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Ro(Ao.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Df.get(e);t&&(So("ComponentProvider","Removing Datastore"),Df.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ff({}),this._settingsFrozen=!1,e instanceof hl?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ro(Ao.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hl(e.options.projectId)}(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jf{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jf(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class zf{withConverter(e){return new zf(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class Bf extends zf{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jf(this.firestore,null,new ml(e))}withConverter(e){return new Bf(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,au(n)),this._path=n,this.type="collection"}}function qf(e,t,...n){if(e=R(e),Of("collection","path",t),e instanceof Vf){const r=Yo.fromString(t,...n);return Pf(r),new Bf(e,null,r)}{if(!(e instanceof jf||e instanceof Bf))throw new Ro(Ao.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Yo.fromString(t,...n));return Pf(r),new Bf(e.firestore,null,r)}}function $f(e,t,...n){if(e=R(e),1===arguments.length&&(t=Bo.R()),Of("doc","path",t),e instanceof Vf){const r=Yo.fromString(t,...n);return Lf(r),new jf(e,null,new ml(r))}{if(!(e instanceof jf||e instanceof Bf))throw new Ro(Ao.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Yo.fromString(t,...n));return Lf(r),new jf(e.firestore,e instanceof Bf?e.converter:null,new ml(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hf{get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const t=Jh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise((()=>{}));const t=new Do;return this.Ga((()=>this.Oa&&this.La?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ma.push(e),this.Qa())))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!oh(e))throw e;So("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To((()=>this.Qa()))}}Ga(e){const t=this.ka.then((()=>(this.Ba=!0,e().catch((e=>{this.$a=e,this.Ba=!1;throw _o("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Ba=!1,e))))));return this.ka=t,t}enqueueAfterDelay(e,t,n){this.Ka(),this.Ua.indexOf(e)>-1&&(t=0);const r=Pd.createAndSchedule(this,e,t,n,(e=>this.ja(e)));return this.Fa.push(r),r}Ka(){this.$a&&Co()}verifyOperationInProgress(){}async Wa(){let e;do{e=this.ka,await e}while(e!==this.ka)}za(e){for(const t of this.Fa)if(t.timerId===e)return!0;return!1}Ha(e){return this.Wa().then((()=>{this.Fa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Fa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Wa()}))}Ja(e){this.Ua.push(e)}ja(e){const t=this.Fa.indexOf(e);this.Fa.splice(t,1)}constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new ed(this,"async_queue_retry"),this.qa=()=>{const e=Jh();e&&So("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Do.Ao()};const e=Jh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qa)}}class Kf extends Vf{_terminate(){return this._firestoreClient||Gf(this),this._firestoreClient.terminate()}constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Hf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}}function Wf(e){return e._firestoreClient||Gf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Gf(e){var t;const n=e._freezeSettings(),r=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new cl(i,s,a,(o=n).host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams));var i,s,a,o;e._firestoreClient=new _f(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Qf{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ro(Ao.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Zo(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xf{static fromBase64String(e){try{return new Xf(nl.fromBase64String(e))}catch(e){throw new Ro(Ao.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Xf(nl.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this._methodName=e}}
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
 */class Jf{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return qo(this._lat,e._lat)||qo(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ro(Ao.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ro(Ao.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
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
 */const Zf=/^__.*__$/;class ep{toMutation(e,t){return null!==this.fieldMask?new Ku(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hu(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function tp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Co()}}class np{get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new np(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Za({path:n,ec:!1});return r.nc(e),r}sc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Za({path:n,ec:!1});return r.Ya(),r}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return pp(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(0===e.length)throw this.rc("Document fields must not be empty");if(tp(this.Xa)&&Zf.test(e))throw this.rc('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class rp{ac(e,t,n,r=!1){return new np({Xa:e,methodName:t,uc:n,path:Zo.emptyPath(),ec:!1,oc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||Zh(e)}}function ip(e){const t=e._freezeSettings(),n=Zh(e._databaseId);return new rp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sp(e,t,n,r,i,s={}){const a=e.ac(s.merge||s.mergeFields?2:0,t,n,i);cp("Data must be an object, but it was:",a,r);const o=lp(r,a);let l,u;if(s.merge)l=new el(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=hp(t,r,n);if(!a.contains(i))throw new Ro(Ao.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);mp(e,i)||e.push(i)}l=new el(e),u=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=a.fieldTransforms;return new ep(new Rl(o),l,u)}function ap(e,t,n,r=!1){return op(n,e.ac(r?4:3,t))}function op(e,t){if(up(e=R(e)))return cp("Unsupported field value:",t,e),lp(e,t);if(e instanceof Yf)return function(e,t){if(!tp(t.Xa))throw t.rc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.rc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ec&&4!==t.Xa)throw t.rc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=op(i,t.ic(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=R(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return _u(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ho.fromDate(e);return{timestampValue:Rc(t.M,n)}}if(e instanceof Ho){const n=new Ho(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Rc(t.M,n)}}if(e instanceof Jf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Xf)return{bytesValue:Dc(t.M,e._byteString)};if(e instanceof jf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.rc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Pc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.rc(`Unsupported field value: ${Mf(e)}`)}(e,t)}function lp(e,t){const n={};return Qo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Go(e,((e,r)=>{const i=op(r,t.tc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function up(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ho||e instanceof Jf||e instanceof Xf||e instanceof jf||e instanceof Yf)}function cp(e,t,n){if(!up(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Mf(n);throw"an object"===r?t.rc(e+" a custom object"):t.rc(e+" "+r)}var r}function hp(e,t,n){if((t=R(t))instanceof Qf)return t._internalPath;if("string"==typeof t)return fp(e,t);throw pp("Field path arguments must be of type string or ",e,!1,void 0,n)}const dp=new RegExp("[~\\*/\\[\\]]");function fp(e,t,n){if(t.search(dp)>=0)throw pp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Qf(...t.split("."))._internalPath}catch(r){throw pp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function pp(e,t,n,r,i){const s=r&&!r.isEmpty(),a=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new Ro(Ao.INVALID_ARGUMENT,o+e+l)}function mp(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{get id(){return this._key.path.lastSegment()}get ref(){return new jf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new yp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}}class yp extends gp{data(){return super.data()}}function vp(e,t){return"string"==typeof t?fp(e,t):t instanceof Qf?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class wp extends gp{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ep(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(vp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}}class Ep extends wp{data(e={}){return super.data(e)}}class kp{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ep(this._firestore,this._userDataWriter,n.key,n,new bp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ro(Ao.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Ep(e._firestore,e._userDataWriter,n.doc.key,n.doc,new bp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Ep(e._firestore,e._userDataWriter,t.doc.key,t.doc,new bp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Sp(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new bp(r.hasPendingWrites,r.fromCache),this.query=n}}function Sp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Co()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _p(e){if(lu(e)&&0===e.explicitOrderBy.length)throw new Ro(Ao.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tp{}class Ip extends Tp{_apply(e){const t=ip(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Ro(Ao.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){xp(a,s);const t=[];for(const n of a)t.push(Np(r,e,n));o={arrayValue:{values:t}}}else o=Np(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||xp(a,s),o=ap(n,"where",a,"in"===s||"not-in"===s);const l=$l.create(i,s,o);return function(e,t){if(t.S()){const n=cu(e);if(null!==n&&!n.isEqual(t.field))throw new Ro(Ao.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=uu(e);null!==r&&Ap(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Ro(Ao.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Ro(Ao.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,0,t,e.firestore._databaseId,this.lc,this.fc,this.dc);return new zf(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new iu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}constructor(e,t,n){super(),this.lc=e,this.fc=t,this.dc=n,this.type="where"}}class Cp extends Tp{_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Ro(Ao.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Ro(Ao.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new eu(t,n);return function(e,t){if(null===uu(e)){const n=cu(e);null!==n&&Ap(e,n,t.field)}}(e,r),r}(e._query,this.lc,this._c);return new zf(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new iu(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}constructor(e,t){super(),this.lc=e,this._c=t,this.type="orderBy"}}function Np(e,t,n){if("string"==typeof(n=R(n))){if(""===n)throw new Ro(Ao.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hu(t)&&-1!==n.indexOf("/"))throw new Ro(Ao.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Yo.fromString(n));if(!ml.isDocumentKey(r))throw new Ro(Ao.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Sl(e,new ml(r))}if(n instanceof jf)return Sl(e,n._key);throw new Ro(Ao.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mf(n)}.`)}function xp(e,t){if(!Array.isArray(e)||0===e.length)throw new Ro(Ao.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Ro(Ao.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ap(e,t,n){if(!n.isEqual(t))throw new Ro(Ao.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{convertValue(e,t="none"){switch(gl(e)){case 0:return null;case 1:return e.booleanValue;case 2:return sl(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(al(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Co()}}convertObject(e,t){const n={};return Go(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Jf(sl(e.latitude),sl(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ll(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ul(e));default:return null}}convertTimestamp(e){const t=il(e);return new Ho(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Yo.fromString(e);No(th(n));const r=new hl(n.get(1),n.get(3)),i=new ml(n.popFirst(5));return r.isEqual(t)||_o(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Op extends Rp{convertBytes(e){return new Xf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new jf(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function Lp(e,t){return function(e,t){const n=new Do;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=wf(e);try{const e=await function(e,t){const n=xo(e),r=Ho.now(),i=t.reduce(((e,t)=>e.add(t.key)),gc());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.ci.Ks(e,i).next((i=>{s=i;const a=[];for(const e of t){const t=Bu(e,s.get(e.key));null!=t&&a.push(new Ku(e.key,t,Dl(t.value.mapValue),Uu.exists(!0)))}return n.Bs.addMutationBatch(e,r,a,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ua[e.currentUser.toKey()];r||(r=new ic(qo)),r=r.insert(t,n),e.ua[e.currentUser.toKey()]=r}(r,e.batchId,n),await gf(r,e.changes),await kd(r.remoteStore)}catch(e){const t=Md(e,"Failed to persist write");n.reject(t)}}(await xf(e),t,n))),n.promise}(Wf(e),t)}!function(e,t=!0){wo="9.7.0",Z(new U("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Kf(r,new Po(e.getProvider("auth-internal")),new Vo(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),ie("@firebase/firestore","3.4.8",e),ie("@firebase/firestore","3.4.8","esm2017")}();const Pp=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw te.create("bad-app-name",{appName:String(r)});const i=X.get(r);if(i){if(_(e,i.options)&&_(n,i.config))return i;throw te.create("duplicate-app",{appName:r})}const s=new V(r);for(const e of Y.values())s.addComponent(e);const a=new ne(e,n,s);return X.set(r,a),a}({apiKey:"AIzaSyBvHCpKNrfKfc2AZZLP8D0K1AGlUFcX1aE",authDomain:"test-budget-38b21.firebaseapp.com",databaseURL:"https://test-budget-38b21.firebaseio.com",projectId:"test-budget-38b21",storageBucket:"test-budget-38b21.appspot.com",messagingSenderId:"1067130269246",appId:"1:1067130269246:web:504d76c1afc05bcbf12b6f"}),Mp=function(e){const t=Kn(e);return{signIn:async function(){const e=new Rt;e.setCustomParameters({prompt:"select_account"});try{const n=(await kn(t,e)).user;console.log(n.displayName,n.email,n.photoURL)}catch(e){const t=e.code,n=e.message;console.log(t,n)}},signOut:function(){!function(e){R(e).signOut()}(t)},onAuthStateChanged:function(e){return function(e,t,n,r){return R(e).onAuthStateChanged(t,n,r)}(t,e)}}}(Pp),Up=Mp.signIn,Fp=Mp.signOut,Vp=Mp.onAuthStateChanged,jp=function(e){const t=function(e=re()){return ee(e,"firestore").getImmediate()}(e);return{getBudgets:async function(e){const n=function(e,...t){for(const n of t)e=n._apply(e);return e}(qf(t,"budgets"),function(e,t,n){const r=t,i=vp("where",e);return new Ip(i,r,n)}("uid","==",e.uid),function(e,t="asc"){const n=t,r=vp("orderBy",e);return new Cp(r,n)}("createdAt"));return(await function(e){e=Uf(e,zf);const t=Uf(e.firestore,Kf),n=Wf(t),r=new Op(t);return _p(e._query),Rf(n,e._query).then((n=>new kp(t,r,e,n)))}(n)).docs.map((function(e){return{id:e.id,...e.data()}}))},updateBudget:async function(e,n,r){const i=qf(t,"budgets");return await function(e,t,n){e=Uf(e,jf);const r=Uf(e.firestore,Kf),i=Dp(e.converter,t,n);return Lp(r,[sp(ip(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Uu.none())])}($f(i,e),{amount:n,weekly_amount:r},{merge:!0})},createBudget:async function(e,n,r){const i=await function(e,t){const n=Uf(e.firestore,Kf),r=$f(e),i=Dp(e.converter,t);return Lp(n,[sp(ip(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Uu.exists(!1))]).then((()=>r))}(qf(t,"budgets"),{amount:0,createdAt:new Date,name:n,uid:e.uid,weekly_amount:0,weekly_budget:r});console.log("Document written with ID: ",i.id)}}}(Pp),zp=jp.getBudgets,Bp=jp.updateBudget,qp=jp.createBudget,$p=function(e){return new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR"}).format(e)},Hp=function({user:e}){return null!==e?a.jsxs("button",{className:"btn btn-outline-danger",onClick:function(e){e.preventDefault(),Fp()},children:[a.jsx("i",{className:"bi bi-box-arrow-in-left"})," ",a.jsx("em",{children:e.displayName})]}):a.jsx("button",{className:"btn btn-outline-success",onClick:function(e){e.preventDefault(),Up()},children:a.jsx("i",{className:"bi bi-box-arrow-in-right"})})},Kp=function(e){return a.jsx("div",{style:{marginTop:"50px"},className:"d-flex justify-content-center",children:a.jsx("div",{style:{width:"3rem",height:"3rem"},className:"spinner-border",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})})})},Wp=function(e){return a.jsx("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:a.jsxs("div",{className:"container-fluid",children:[a.jsx("span",{className:"navbar-brand",children:"My Budgets"}),a.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("span",{className:"navbar-toggler-icon"})}),a.jsxs("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[a.jsx("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"}),a.jsx("form",{className:"d-flex",children:a.jsx(Hp,{user:null})})]})]})})};u=s("6SgHj"),u=s("6SgHj");
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
function Gp(e,t,n,r){return new(n||(n=Promise))((function(i,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function o(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,o)}l((r=r.apply(e,t||[])).next())}))}function Qp(e,t){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}var Xp,Yp=function(){},Jp=Yp(),Zp=Object,em=function(e){return e===Jp},tm=function(e){return"function"==typeof e},nm=function(e,t){return Zp.assign({},e,t)},rm=function(){return"undefined"!=typeof window},im=new WeakMap,sm=0,am=function(e){var t,n,r=typeof e,i=e&&e.constructor,s=i==Date;if(Zp(e)!==e||s||i==RegExp)t=s?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=im.get(e))return t;if(t=++sm+"~",im.set(e,t),i==Array){for(t="@",n=0;n<e.length;n++)t+=am(e[n])+",";im.set(e,t)}if(i==Zp){t="#";for(var a=Zp.keys(e).sort();!em(n=a.pop());)em(e[n])||(t+=n+":"+am(e[n])+",");im.set(e,t)}}return t},om=!0,lm=rm(),um="undefined"!=typeof document,cm=lm&&window.addEventListener?window.addEventListener.bind(window):Yp,hm=um?document.addEventListener.bind(document):Yp,dm=lm&&window.removeEventListener?window.removeEventListener.bind(window):Yp,fm=um?document.removeEventListener.bind(document):Yp,pm={isOnline:function(){return om},isVisible:function(){var e=um&&document.visibilityState;return em(e)||"hidden"!==e}},mm={initFocus:function(e){return hm("visibilitychange",e),cm("focus",e),function(){fm("visibilitychange",e),dm("focus",e)}},initReconnect:function(e){var t=function(){om=!0,e()},n=function(){om=!1};return cm("online",t),cm("offline",n),function(){dm("online",t),dm("offline",n)}}},gm=!rm()||"Deno"in window,ym=function(e){return rm()&&void 0!==window.requestAnimationFrame?window.requestAnimationFrame(e):setTimeout(e,1)},vm=gm?u.useEffect:u.useLayoutEffect,bm="undefined"!=typeof navigator&&navigator.connection,wm=!gm&&bm&&(["slow-2g","2g"].includes(bm.effectiveType)||bm.saveData),Em=function(e){if(tm(e))try{e=e()}catch(t){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?am(e):"",t,e?"$swr$"+e:""]},km=new WeakMap,Sm=function(e,t,n,r,i,s,a){void 0===a&&(a=!0);var o=km.get(e),l=o[0],u=o[1],c=o[3],h=l[t],d=u[t];if(a&&d)for(var f=0;f<d.length;++f)d[f](n,r,i);return s&&(delete c[t],h&&h[0])?h[0](2).then((function(){return e.get(t)})):e.get(t)},_m=0,Tm=function(){return++_m},Im=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Gp(void 0,void 0,void 0,(function(){var t,n,r,i,s,a,o,l,u,c,h,d,f,p,m,g,y,v,b,w,E;return Qp(this,(function(k){switch(k.label){case 0:if(t=e[0],n=e[1],r=e[2],i=e[3],a=!!em((s="boolean"==typeof i?{revalidate:i}:i||{}).populateCache)||s.populateCache,o=!1!==s.revalidate,l=!1!==s.rollbackOnError,u=s.optimisticData,c=Em(n),h=c[0],d=c[2],!h)return[2];if(f=km.get(t),p=f[2],e.length<3)return[2,Sm(t,h,t.get(h),Jp,Jp,o,!0)];if(m=r,y=Tm(),p[h]=[y,0],v=!em(u),b=t.get(h),v&&(w=tm(u)?u(b):u,t.set(h,w),Sm(t,h,w)),tm(m))try{m=m(t.get(h))}catch(e){g=e}return m&&tm(m.then)?[4,m.catch((function(e){g=e}))]:[3,2];case 1:if(m=k.sent(),y!==p[h][0]){if(g)throw g;return[2,m]}g&&v&&l&&(a=!0,m=b,t.set(h,b)),k.label=2;case 2:return a&&(g||(tm(a)&&(m=a(m,b)),t.set(h,m)),t.set(d,nm(t.get(d),{error:g}))),p[h][1]=Tm(),[4,Sm(t,h,m,g,Jp,o,!!a)];case 3:if(E=k.sent(),g)throw g;return[2,a?E:m]}}))}))},Cm=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},Nm=function(e,t){if(!km.has(e)){var n=nm(mm,t),r={},i=Im.bind(Jp,e),s=Yp;if(km.set(e,[r,{},{},{},i]),!gm){var a=n.initFocus(setTimeout.bind(Jp,Cm.bind(Jp,r,0))),o=n.initReconnect(setTimeout.bind(Jp,Cm.bind(Jp,r,1)));s=function(){a&&a(),o&&o(),km.delete(e)}}return[e,i,s]}return[e,km.get(e)[4]]},xm=Nm(new Map),Am=xm[0],Rm=xm[1],Dm=nm({onLoadingSlow:Yp,onSuccess:Yp,onError:Yp,onErrorRetry:function(e,t,n,r,i){var s=n.errorRetryCount,a=i.retryCount,o=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!em(s)&&a>s||setTimeout(r,o,i)},onDiscarded:Yp,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:wm?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:wm?5e3:3e3,compare:function(e,t){return am(e)==am(t)},isPaused:function(){return!1},cache:Am,mutate:Rm,fallback:{}},pm),Om=function(e,t){var n=nm(e,t);if(t){var r=e.use,i=e.fallback,s=t.use,a=t.fallback;r&&s&&(n.use=r.concat(s)),i&&a&&(n.fallback=nm(i,a))}return n},Lm=u.createContext({}),Pm=function(e){return tm(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},Mm=function(){return nm(Dm,u.useContext(Lm))},Um=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},Fm={dedupe:!0},Vm=(Zp.defineProperty((function(e){var t=e.value,n=Om(u.useContext(Lm),t),r=t&&t.provider,i=u.useState((function(){return r?Nm(r(n.cache||Am),t):Jp}))[0];return i&&(n.cache=i[0],n.mutate=i[1]),vm((function(){return i?i[2]:Jp}),[]),u.createElement(Lm.Provider,nm(e,{value:n}))}),"default",{value:Dm}),Xp=function(e,t,n){var r=n.cache,i=n.compare,s=n.fallbackData,a=n.suspense,o=n.revalidateOnMount,l=n.refreshInterval,c=n.refreshWhenHidden,h=n.refreshWhenOffline,d=km.get(r),f=d[0],p=d[1],m=d[2],g=d[3],y=Em(e),v=y[0],b=y[1],w=y[2],E=u.useRef(!1),k=u.useRef(!1),S=u.useRef(v),_=u.useRef(t),T=u.useRef(n),I=function(){return T.current},C=function(){return I().isVisible()&&I().isOnline()},N=function(e){return r.set(w,nm(r.get(w),e))},x=r.get(v),A=em(s)?n.fallback[v]:s,R=em(x)?A:x,D=r.get(w)||{},O=D.error,L=!E.current,P=function(){return L&&!em(o)?o:!I().isPaused()&&(a?!em(R)&&n.revalidateIfStale:em(R)||n.revalidateIfStale)},M=!(!v||!t)&&(!!D.isValidating||L&&P()),U=function(e,t){var n=u.useState({})[1],r=u.useRef(e),i=u.useRef({data:!1,error:!1,isValidating:!1}),s=u.useCallback((function(e){var s=!1,a=r.current;for(var o in e){var l=o;a[l]!==e[l]&&(a[l]=e[l],i.current[l]&&(s=!0))}s&&!t.current&&n({})}),[]);return vm((function(){r.current=e})),[r,i.current,s]}({data:R,error:O,isValidating:M},k),F=U[0],V=U[1],j=U[2],z=u.useCallback((function(e){return Gp(void 0,void 0,void 0,(function(){var t,s,a,o,l,u,c,h,d,f,p,y,w;return Qp(this,(function(T){switch(T.label){case 0:if(t=_.current,!v||!t||k.current||I().isPaused())return[2,!1];o=!0,l=e||{},u=!g[v]||!l.dedupe,c=function(){return!k.current&&v===S.current&&E.current},h=function(){var e=g[v];e&&e[1]===a&&delete g[v]},d={isValidating:!1},f=function(){N({isValidating:!1}),c()&&j(d)},N({isValidating:!0}),j({isValidating:!0}),T.label=1;case 1:return T.trys.push([1,3,,4]),u&&(Sm(r,v,F.current.data,F.current.error,!0),n.loadingTimeout&&!r.get(v)&&setTimeout((function(){o&&c()&&I().onLoadingSlow(v,n)}),n.loadingTimeout),g[v]=[t.apply(void 0,b),Tm()]),w=g[v],s=w[0],a=w[1],[4,s];case 2:return s=T.sent(),u&&setTimeout(h,n.dedupingInterval),g[v]&&g[v][1]===a?(N({error:Jp}),d.error=Jp,p=m[v],!em(p)&&(a<=p[0]||a<=p[1]||0===p[1])?(f(),u&&c()&&I().onDiscarded(v),[2,!1]):(i(F.current.data,s)?d.data=F.current.data:d.data=s,i(r.get(v),s)||r.set(v,s),u&&c()&&I().onSuccess(s,v,n),[3,4])):(u&&c()&&I().onDiscarded(v),[2,!1]);case 3:return y=T.sent(),h(),I().isPaused()||(N({error:y}),d.error=y,u&&c()&&(I().onError(y,v,n),("boolean"==typeof n.shouldRetryOnError&&n.shouldRetryOnError||tm(n.shouldRetryOnError)&&n.shouldRetryOnError(y))&&C()&&I().onErrorRetry(y,v,n,z,{retryCount:(l.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return o=!1,f(),c()&&u&&Sm(r,v,d.data,d.error,!1),[2,!0]}}))}))}),[v]),B=u.useCallback(Im.bind(Jp,r,(function(){return S.current})),[]);if(vm((function(){_.current=t,T.current=n})),vm((function(){if(v){var e=v!==S.current,t=z.bind(Jp,Fm),n=0,r=Um(v,p,(function(e,t,n){j(nm({error:t,isValidating:n},i(F.current.data,e)?Jp:{data:e}))})),s=Um(v,f,(function(e){if(0==e){var r=Date.now();I().revalidateOnFocus&&r>n&&C()&&(n=r+I().focusThrottleInterval,t())}else if(1==e)I().revalidateOnReconnect&&C()&&t();else if(2==e)return z()}));return k.current=!1,S.current=v,E.current=!0,e&&j({data:R,error:O,isValidating:M}),P()&&(em(R)||gm?t():ym(t)),function(){k.current=!0,r(),s()}}}),[v,z]),vm((function(){var e;function t(){var t=tm(l)?l(R):l;t&&-1!==e&&(e=setTimeout(n,t))}function n(){F.current.error||!c&&!I().isVisible()||!h&&!I().isOnline()?t():z(Fm).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[l,c,h,z]),u.useDebugValue(R),a&&em(R)&&v)throw _.current=t,T.current=n,k.current=!1,em(O)?z(Fm):O;return{mutate:B,get data(){return V.data=!0,R},get error(){return V.error=!0,O},get isValidating(){return V.isValidating=!0,M}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Mm(),r=Pm(e),i=r[0],s=r[1],a=r[2],o=Om(n,a),l=Xp,u=o.use;if(u)for(var c=u.length;c-- >0;)l=u[c](l);return l(i,s||o.fetcher,o)});const jm=function(e){const{data:t,error:n,isValidating:r,mutate:i}=Vm(["budgets",e.uid],(function(e,t){return console.assert("budgets"===e),zp({uid:t})}));return{data:t,error:n,isValidating:r,Methods:{spend:async function(e,n){i(t.map((function(t){return e.id===t.id?{...e,amount:e.amount-n,weekly_amount:e.weekly_amount+n}:t})),!1),await Bp(e.id,e.amount-n,e.weekly_amount+n),i()},recharge:async function(e){i((function(t){return t.map((function(t){return e.id===t.id?{...e,amount:e.amount+e.weekly_budget,weekly_amount:0}:t}))}),!1),await Bp(e.id,e.amount+e.weekly_budget,0),i()},create:async function(n){i([...t,{amount:0,id:"temporary_id",name:`${n.name} (${n.description})`,weekly_amount:0,weekly_budget:n.budget}],!1),await qp(e,`${n.name} (${n.description})`,n.budget),i()}}}};u=s("6SgHj"),u=s("6SgHj");const zm=document.body.appendChild(document.createElement("div")),Bm=function({opened:e,setOpened:n,children:r}){const[i,s]=t(u).useState(!1),o=t(u).useRef(null),c=t(u).useRef(null);return t(u).useEffect((function(){c.current=new bootstrap.Modal(o.current),o.current.addEventListener("hidden.bs.modal",(function(e){s(!1),n(!1)})),o.current.addEventListener("shown.bs.modal",(function(){s(!0)}))}),[]),t(u).useEffect((function(){e?c.current.show():(s(!1),c.current.hide())}),[e]),t(l).createPortal(a.jsx("div",{ref:o,className:"modal fade",tabIndex:"-1","aria-hidden":"true",children:a.jsx("div",{className:"modal-dialog",children:a.jsx("div",{className:"modal-content",children:i?r:null})})}),zm)};u=s("6SgHj");const qm=function({setOpened:e,budget:n,action:r}){const i=t(u).useRef(null);t(u).useEffect((function(){i.current.focus()}),[]);const[s,o]=t(u).useState("");return a.jsxs(t(u).Fragment,{children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h5",{className:"modal-title",children:n.name}),a.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),a.jsxs("form",{onSubmit:function(t){t.preventDefault(),r(parseFloat(s)),e(!1)},children:[a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{className:"form-floating",children:[a.jsx("input",{ref:i,id:"floatingInput",type:"number",className:"form-control",value:s,step:"0.01",onChange:function(e){o(e.target.value)},placeholder:"3.14",required:!0}),a.jsx("label",{htmlFor:"floatingInput",children:"Quanto hai speso?"})]}),a.jsxs("small",{className:"form-text text-muted",children:["Il tuo budget è ",$p(n.amount)]})]}),a.jsx("div",{className:"modal-footer",children:a.jsx("button",{type:"submit",className:"btn btn-outline-primary",children:"Sure!"})})]})]})},$m=function({budget:e,spend:n}){const[r,i]=t(u).useState(!1);return a.jsxs("div",{className:"col-sm-6",children:[a.jsx(Bm,{opened:r,setOpened:i,children:a.jsx(qm,{setOpened:i,budget:e,action:n})}),a.jsxs("div",{className:"card border-secondary",style:{margin:"10px"},children:[a.jsxs("div",{className:"card-header",children:[e.name," ",a.jsx("sub",{children:$p(e.weekly_budget)}),a.jsx("span",{className:"float-end",children:a.jsxs("form",{className:"row row-cols-auto align-items-center",children:[a.jsx("strong",{children:a.jsx("em",{children:$p(e.amount)})}),a.jsxs("div",{className:"dropdown",children:[a.jsx("button",{className:"btn btn-sm btn-outline-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"⚙"}),a.jsxs("div",{className:"dropdown-menu dropdown-menu-end",children:[a.jsx("button",{className:"dropdown-item",onClick:e=>{e.preventDefault()},children:"TODO"}),a.jsx("button",{className:"dropdown-item",onClick:e=>{e.preventDefault()},children:"TODO"})]})]})]})})]}),a.jsx("div",{className:"card-body",children:a.jsxs("p",{style:{marginTop:"4px"},children:[a.jsx("span",{className:"card-subtitle mb-2 text-muted",children:$p(e.weekly_amount)}),a.jsx("button",{className:"btn btn-outline-primary float-end",onClick:function(){i(!0)},children:"Add cost"})]})})]})]},e.id)};s("6SgHj");const Hm=function(e,t){return 100*e/t},Km=function({amount:e,weekly_amount:t}){const n=Math.max(0,e-t),r=Hm(n,e);return a.jsx("div",{className:"progress",children:a.jsx("div",{className:"progress-bar",style:{width:`${r}%`},children:$p(n)})})};s("6SgHj");const Wm=function({user:e}){const{isValidating:t}=jm(e);return t?a.jsx("div",{className:"spinner-border",style:{position:"fixed",bottom:"1em",right:"1em"},role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Loading..."})}):null};u=s("6SgHj");s("6SgHj");const Gm=function({opened:e,setOpened:t,action:n}){return a.jsxs(Bm,{opened:e,setOpened:t,children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h5",{className:"modal-title",children:"Recharge All"}),a.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),a.jsx("div",{className:"modal-body",children:"Sicuro di voler ricaricare tutti i budget?"}),a.jsx("div",{className:"modal-footer",style:{display:"block"},children:a.jsx("button",{className:"btn btn-outline-danger float-end",onClick:function(){n(),t(!1)},children:"Ok"})})]})};u=s("6SgHj");const Qm=function({action:e}){const n=t(u).useRef(null);t(u).useEffect((function(){n.current.focus()}),[]);const[r,i]=t(u).useState(""),[s,o]=t(u).useState(""),[l,c]=t(u).useState(""),h=function(e){if("budget"===e.target.name)c(parseFloat(e.target.value));else{(0,{name:i,description:o}[e.target.name])(e.target.value)}};return a.jsxs(t(u).Fragment,{children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h5",{className:"modal-title",children:"New Budget"}),a.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),a.jsxs("form",{onSubmit:function(t){t.preventDefault(),e({name:r,description:s,budget:l})},children:[a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{className:"form-floating mb-3",children:[a.jsx("input",{ref:n,className:"form-control",name:"name",placeholder:" ",value:r,onChange:h,required:!0}),a.jsx("label",{children:"Name"})]}),a.jsxs("div",{className:"form-floating mb-3",children:[a.jsx("textarea",{className:"form-control",name:"description",rows:"3",placeholder:" ",style:{height:"100px"},value:s,onChange:h}),a.jsx("label",{children:"Description"})]}),a.jsxs("div",{className:"form-floating mb-3",children:[a.jsx("input",{type:"number",min:"0.01",step:"0.01",className:"form-control",value:l,onChange:h,name:"budget",placeholder:" ",required:!0}),a.jsx("label",{children:"Budget"})]})]}),a.jsx("div",{className:"modal-footer",style:{display:"block"},children:a.jsx("button",{type:"submit",className:"btn btn-outline-danger float-end",children:"Ok"})})]})]})},Xm=function({opened:e,setOpened:t,action:n}){return a.jsx(Bm,{opened:e,setOpened:t,children:a.jsx(Qm,{action:function(e){n(e),t(!1)}})})},Ym=function({user:e,budgets:n,Methods:r}){const[i,s]=t(u).useState(!1),[o,l]=t(u).useState(!1),c=n.reduce((function(e,t){return e+t.weekly_budget}),0);return a.jsxs("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:[a.jsx(Gm,{opened:i,setOpened:s,action:function(){n.forEach((function(e){r.recharge(e)}))}}),a.jsx(Xm,{opened:o,setOpened:l,action:function(e){r.create(e)}}),a.jsxs("div",{className:"container-fluid",children:[a.jsxs("span",{className:"navbar-brand",children:["My Budgets ",a.jsx("sub",{children:$p(c)})]}),a.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("span",{className:"navbar-toggler-icon"})}),a.jsxs("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[a.jsxs("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[a.jsx("li",{className:"nav-item",children:a.jsx("a",{className:"nav-link",href:"#",onClick:function(e){e.preventDefault(),s(!0)},children:"Recharge all"})}),a.jsx("li",{className:"nav-item",children:a.jsx("a",{className:"nav-link",href:"#",onClick:function(e){e.preventDefault(),l(!0)},children:"New budget"})})]}),a.jsx("form",{className:"d-flex",children:a.jsx(Hp,{user:e})})]})]})]})},Jm=function({user:e,error:n}){return a.jsxs(t(u).Fragment,{children:[a.jsx(Wp,{user:e}),a.jsx("div",{className:"container",children:a.jsxs("div",{style:{marginTop:"10px"},className:"alert alert-danger",role:"alert",children:[a.jsx("p",{children:"Errore nel caricamento dei budget!"}),a.jsx("hr",{}),a.jsx("p",{children:a.jsx("em",{children:n.message})})]})})]})},Zm=function({user:e}){const{data:n,error:r,Methods:i}=jm(e);if(void 0!==r)return a.jsx(Jm,{user:e,error:r});if(void 0===n)return a.jsx(Kp,{});const s=n.reduce((function(e,t){return e+t.amount}),0),o=n.reduce((function(e,t){return e+t.weekly_amount}),0),l=n.map((function(e){return a.jsx($m,{budget:e,spend:function(t){i.spend(e,t)}},e.id)}));return a.jsxs(t(u).Fragment,{children:[a.jsx(Ym,{user:e,budgets:n,Methods:i}),a.jsxs("div",{className:"container",style:{paddingTop:"1em"},children:[a.jsx("div",{style:{marginTop:"4px"},children:a.jsx(Km,{amount:s,weekly_amount:o})}),a.jsx("div",{className:"row",children:l})]}),a.jsx(Wm,{user:e})]})},eg=function(){return a.jsxs(t(u).Fragment,{children:[a.jsx(Wp,{}),a.jsxs("div",{className:"container",children:[a.jsx("div",{style:{marginTop:"10px"},className:"alert alert-danger",role:"alert",children:a.jsx("p",{children:"Please authenticate!"})}),a.jsxs("p",{children:["You need to"," ",a.jsx("a",{href:"#",onClick:function(e){e.preventDefault()},children:"authenticate"})," ","with a Google Account in order to use this app."]})]})]})},tg=function(e){const n=function(){const[e,n]=t(u).useState(void 0);return t(u).useEffect((function(){return Vp(n)}),[]),e}();return void 0===n?a.jsx(Kp,{}):null===n?a.jsx(eg,{}):a.jsx(Zm,{user:n})};o(document.getElementById("app")).render(a.jsx(tg,{}));