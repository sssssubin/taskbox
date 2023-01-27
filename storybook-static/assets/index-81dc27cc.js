var Tr=Object.defineProperty;var o=(e,r)=>Tr(e,"name",{value:r,configurable:!0});import{a as k}from"./iframe-77c617d2.js";import{E as x,I as q,H as wr}from"./web.url.constructor-41e21ea3.js";import{c as H}from"./es.object.get-own-property-descriptor-a36c5db1.js";var Pr=k(),Dr=x,I=Dr("Object.prototype.toString"),m=o(function(r){return Pr&&r&&typeof r=="object"&&Symbol.toStringTag in r?!1:I(r)==="[object Arguments]"},"isArguments"),J=o(function(r){return m(r)?!0:r!==null&&typeof r=="object"&&typeof r.length=="number"&&r.length>=0&&I(r)!=="[object Array]"&&I(r.callee)==="[object Function]"},"isArguments"),Ir=function(){return m(arguments)}();m.isLegacyArguments=J;var Bt=Ir?m:J,Q=Function.prototype.toString,c=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply,E,p;if(typeof c=="function"&&typeof Object.defineProperty=="function")try{E=Object.defineProperty({},"length",{get:function(){throw p}}),p={},c(function(){throw 42},null,E)}catch(e){e!==p&&(c=null)}else c=null;var Er=/^\s*class\b/,C=o(function(r){try{var t=Q.call(r);return Er.test(t)}catch{return!1}},"isES6ClassFunction"),A=o(function(r){try{return C(r)?!1:(Q.call(r),!0)}catch{return!1}},"tryFunctionToStr"),g=Object.prototype.toString,Cr="[object Object]",Fr="[object Function]",Br="[object GeneratorFunction]",Lr="[object HTMLAllCollection]",kr="[object HTML document.all class]",xr="[object HTMLCollection]",Hr=typeof Symbol=="function"&&!!Symbol.toStringTag,Kr=!(0 in[,]),F=o(function(){return!1},"isDocumentDotAll");if(typeof document=="object"){var Mr=document.all;g.call(Mr)===g.call(document.all)&&(F=o(function(r){if((Kr||!r)&&(typeof r>"u"||typeof r=="object"))try{var t=g.call(r);return(t===Lr||t===kr||t===xr||t===Cr)&&r("")==null}catch{}return!1},"isDocumentDotAll"))}var Rr=o(c?function(r){if(F(r))return!0;if(!r||typeof r!="function"&&typeof r!="object")return!1;try{c(r,null,E)}catch(t){if(t!==p)return!1}return!C(r)&&A(r)}:function(r){if(F(r))return!0;if(!r||typeof r!="function"&&typeof r!="object")return!1;if(Hr)return A(r);if(C(r))return!1;var t=g.call(r);return t!==Fr&&t!==Br&&!/^\[object HTML/.test(t)?!1:A(r)},"isCallable"),Ur=Rr,Gr=Object.prototype.toString,V=Object.prototype.hasOwnProperty,Nr=o(function(r,t,n){for(var a=0,f=r.length;a<f;a++)V.call(r,a)&&(n==null?t(r[a],a,r):t.call(n,r[a],a,r))},"forEachArray"),_r=o(function(r,t,n){for(var a=0,f=r.length;a<f;a++)n==null?t(r.charAt(a),a,r):t.call(n,r.charAt(a),a,r)},"forEachString"),zr=o(function(r,t,n){for(var a in r)V.call(r,a)&&(n==null?t(r[a],a,r):t.call(n,r[a],a,r))},"forEachObject"),Wr=o(function(r,t,n){if(!Ur(t))throw new TypeError("iterator must be a function");var a;arguments.length>=3&&(a=n),Gr.call(r)==="[object Array]"?Nr(r,t,a):typeof r=="string"?_r(r,t,a):zr(r,t,a)},"forEach"),Z=Wr,j=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],Xr=typeof globalThis>"u"?H:globalThis,rr=o(function(){for(var r=[],t=0;t<j.length;t++)typeof Xr[j[t]]=="function"&&(r[r.length]=j[t]);return r},"availableTypedArrays"),Yr=q,v=Yr("%Object.getOwnPropertyDescriptor%",!0);if(v)try{v([],"length")}catch{v=null}var tr=v,er=Z,qr=rr,K=x,Jr=K("Object.prototype.toString"),nr=k(),h=tr,Qr=typeof globalThis>"u"?H:globalThis,ar=qr(),Vr=K("Array.prototype.indexOf",!0)||o(function(r,t){for(var n=0;n<r.length;n+=1)if(r[n]===t)return n;return-1},"indexOf"),Zr=K("String.prototype.slice"),or={},T=Object.getPrototypeOf;nr&&h&&T&&er(ar,function(e){var r=new Qr[e];if(Symbol.toStringTag in r){var t=T(r),n=h(t,Symbol.toStringTag);if(!n){var a=T(t);n=h(a,Symbol.toStringTag)}or[e]=n.get}});var rt=o(function(r){var t=!1;return er(or,function(n,a){if(!t)try{t=n.call(r)===a}catch{}}),t},"tryAllTypedArrays"),tt=o(function(r){if(!r||typeof r!="object")return!1;if(!nr||!(Symbol.toStringTag in r)){var t=Zr(Jr(r),8,-1);return Vr(ar,t)>-1}return h?rt(r):!1},"isTypedArray"),ir=Z,et=rr,lr=x,w=tr,nt=lr("Object.prototype.toString"),fr=k(),N=typeof globalThis>"u"?H:globalThis,at=et(),ot=lr("String.prototype.slice"),cr={},P=Object.getPrototypeOf;fr&&w&&P&&ir(at,function(e){if(typeof N[e]=="function"){var r=new N[e];if(Symbol.toStringTag in r){var t=P(r),n=w(t,Symbol.toStringTag);if(!n){var a=P(t);n=w(a,Symbol.toStringTag)}cr[e]=n.get}}});var it=o(function(r){var t=!1;return ir(cr,function(n,a){if(!t)try{var f=n.call(r);f===a&&(t=f)}catch{}}),t},"tryAllTypedArrays"),lt=tt,Lt=o(function(r){return lt(r)?!fr||!(Symbol.toStringTag in r)?ot(nt(r),8,-1):it(r):!1},"whichTypedArray"),_=Object.prototype.toString,sr=o(function(r){var t=_.call(r),n=t==="[object Arguments]";return n||(n=t!=="[object Array]"&&r!==null&&typeof r=="object"&&typeof r.length=="number"&&r.length>=0&&_.call(r.callee)==="[object Function]"),n},"isArguments"),D,z;function ft(){if(z)return D;z=1;var e;if(!Object.keys){var r=Object.prototype.hasOwnProperty,t=Object.prototype.toString,n=sr,a=Object.prototype.propertyIsEnumerable,f=!a.call({toString:null},"toString"),M=a.call(function(){},"prototype"),y=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=o(function(l){var i=l.constructor;return i&&i.prototype===l},"equalsConstructorPrototype"),dr={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},Sr=function(){if(typeof window>"u")return!1;for(var l in window)try{if(!dr["$"+l]&&r.call(window,l)&&window[l]!==null&&typeof window[l]=="object")try{d(window[l])}catch{return!0}}catch{return!0}return!1}(),$r=o(function(l){if(typeof window>"u"||!Sr)return d(l);try{return d(l)}catch{return!1}},"equalsConstructorPrototypeIfNotBuggy");e=o(function(i){var R=i!==null&&typeof i=="object",U=t.call(i)==="[object Function]",G=n(i),Or=R&&t.call(i)==="[object String]",s=[];if(!R&&!U&&!G)throw new TypeError("Object.keys called on a non-object");var Ar=M&&U;if(Or&&i.length>0&&!r.call(i,0))for(var S=0;S<i.length;++S)s.push(String(S));if(G&&i.length>0)for(var $=0;$<i.length;++$)s.push(String($));else for(var O in i)!(Ar&&O==="prototype")&&r.call(i,O)&&s.push(String(O));if(f)for(var jr=$r(i),u=0;u<y.length;++u)!(jr&&y[u]==="constructor")&&r.call(i,y[u])&&s.push(y[u]);return s},"keys")}return D=e,D}o(ft,"requireImplementation");var ct=Array.prototype.slice,st=sr,W=Object.keys,b=W?o(function(r){return W(r)},"keys"):ft(),X=Object.keys;b.shim=o(function(){if(Object.keys){var r=function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2);r||(Object.keys=o(function(n){return st(n)?X(ct.call(n)):X(n)},"keys"))}else Object.keys=b;return Object.keys||b},"shimObjectKeys");var ut=b,yt=q,B=yt("%Object.defineProperty%",!0),L=o(function(){if(B)try{return B({},"a",{value:1}),!0}catch{return!1}return!1},"hasPropertyDescriptors");L.hasArrayLengthDefineBug=o(function(){if(!L())return null;try{return B([],"length",{value:1}).length!==1}catch{return!0}},"hasArrayLengthDefineBug");var pt=L,gt=ut,vt=typeof Symbol=="function"&&typeof Symbol("foo")=="symbol",ht=Object.prototype.toString,bt=Array.prototype.concat,ur=Object.defineProperty,mt=o(function(e){return typeof e=="function"&&ht.call(e)==="[object Function]"},"isFunction"),dt=pt(),yr=ur&&dt,St=o(function(e,r,t,n){r in e&&(!mt(n)||!n())||(yr?ur(e,r,{configurable:!0,enumerable:!1,value:t,writable:!0}):e[r]=t)},"defineProperty"),pr=o(function(e,r){var t=arguments.length>2?arguments[2]:{},n=gt(r);vt&&(n=bt.call(n,Object.getOwnPropertySymbols(r)));for(var a=0;a<n.length;a+=1)St(e,n[a],r[n[a]],t[n[a]])},"defineProperties");pr.supportsDescriptors=!!yr;var gr=pr,Y=o(function(e){return e!==e},"numberIsNaN"),vr=o(function(r,t){return r===0&&t===0?1/r===1/t:!!(r===t||Y(r)&&Y(t))},"is"),$t=vr,hr=o(function(){return typeof Object.is=="function"?Object.is:$t},"getPolyfill"),Ot=hr,At=gr,jt=o(function(){var r=Ot();return At(Object,{is:r},{is:o(function(){return Object.is!==r},"testObjectIs")}),r},"shimObjectIs"),Tt=gr,wt=wr,Pt=vr,br=hr,Dt=jt,mr=wt(br(),Object);Tt(mr,{getPolyfill:br,implementation:Pt,shim:Dt});var kt=mr;export{tt as a,ut as b,gr as d,Bt as i,kt as o,Lt as w};
//# sourceMappingURL=index-81dc27cc.js.map
