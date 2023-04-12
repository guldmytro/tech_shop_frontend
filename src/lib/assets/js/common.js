"use strict";class t{constructor(t){this.slider=document.querySelector(t?.slider),this.slider&&(this.slides=Array.from(this.slider.querySelectorAll(".slide")),this.sliderRow=this.slider.querySelector(".slider-row"),this.isDragging=!1,this.startPos=0,this.currentTranslate=0,this.prevTranslate=0,this.animationID=0,this.currentIndex=0,this.stepWidth=this.initStepWidth(),this.thumbs=Array.from(document.querySelectorAll(t?.thumbs+" .slider-thumbs__item")),this.initEvents())}initEvents=()=>{this.slides.forEach((t,e)=>{const r=t.querySelector("img");r.addEventListener("dragstart",t=>t.preventDefault()),t.addEventListener("touchstart",this.touchStart(e)),t.addEventListener("touchend",this.touchEnd),t.addEventListener("touchmove",this.touchMove),t.addEventListener("mousedown",this.touchStart(e)),t.addEventListener("mouseup",this.touchEnd),t.addEventListener("mouseleave",this.touchEnd),t.addEventListener("mousemove",this.touchMove)}),this.thumbs&&this.thumbs.forEach((t,e)=>{t.addEventListener("click",this.goToSlide(t))})};initStepWidth=()=>this.slider.clientWidth;touchStart=e=>t=>{this.currentIndex=e,this.startPos=this.getPositionX(t),this.isDragging=!0,this.animationID=requestAnimationFrame(this.animation),this.slider.classList.add("grabbing")};touchEnd=()=>{this.isDragging=!1,cancelAnimationFrame(this.animationID);var t=this.currentTranslate-this.prevTranslate;t<-100&&this.currentIndex<this.slides.length-1&&this.currentIndex++,100<t&&0<this.currentIndex&&this.currentIndex--,this.setPositionByIndex(),this.slider.classList.remove("grabbing")};touchMove=t=>{this.isDragging&&(t=this.getPositionX(t),this.currentTranslate=this.prevTranslate+t-this.startPos)};getPositionX=t=>t.type.includes("mouse")?t.pageX:t.touches[0].clientX;animation=()=>{this.setSliderPisition(),this.isDragging&&requestAnimationFrame(this.animation)};setSliderPisition=()=>{this.sliderRow.style.transform=`translateX(${this.currentTranslate}px)`};setPositionByIndex=()=>{this.currentTranslate=this.currentIndex*-this.stepWidth,this.prevTranslate=this.currentTranslate,this.setSliderPisition()};goToSlide=e=>t=>{this.currentIndex=parseInt(e.getAttribute("data-index"),10),this.setPositionByIndex()}}var e;e=this,r=function(st){function n(t){return"object"==typeof t&&"function"==typeof t.to}function ot(t){t.parentElement.removeChild(t)}function at(t){return null!=t}function lt(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function ut(t,e,r){0<r&&(dt(t,e),setTimeout(function(){ht(t,e)},r))}function ct(t){return Math.max(Math.min(t,100),0)}function pt(t){return Array.isArray(t)?t:[t]}function e(t){return 1<(t=(t=String(t)).split(".")).length?t[1].length:0}function dt(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function ht(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function ft(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:(r?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(r?t.documentElement:t.body).scrollTop}}function o(t,e){return 100/(e-t)}function a(t,e,r){return 100*e/(t[r+1]-t[r])}function l(t,e){for(var r=1;t>=e[r];)r+=1;return r}st.PipsMode=void 0,(E=st.PipsMode||(st.PipsMode={})).Range="range",E.Steps="steps",E.Positions="positions",E.Count="count",E.Values="values",st.PipsType=void 0,(E=st.PipsType||(st.PipsType={}))[E.None=-1]="None",E[E.NoValue=0]="NoValue",E[E.LargeValue=1]="LargeValue",E[E.SmallValue=2]="SmallValue";t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=a(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;for(var i,s=1,o=(e=null===e?[]:e)[n],a=0,l=0,u=0,c=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<o;)i=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*s+100-100*c?(a=i*c,s=(o-100*c)/e[n+u],c=1):(a=e[n+u]*i/100*s,s=0),r?(l-=a,1<=this.xPct.length+u&&u--):(l+=a,1<=this.xPct.length-u&&u++),o=e[n+u]*s;return t+l},t.prototype.toStepping=function(t){var e=this.xVal,r=this.xPct;if(t>=e.slice(-1)[0])return 100;var n=e[(s=l(t,e))-1],i=e[s],e=r[s-1],s=r[s];return e+a(i=[n,i],i[0]<0?t+Math.abs(i[0]):t-i[0],0)/o(e,s)},t.prototype.fromStepping=function(t){var e=this.xVal,r=this.xPct;if(100<=t)return e.slice(-1)[0];var n=l(t,r),i=e[n-1],s=e[n];return(t-(e=r[n-1]))*o(e,r[n])*((s=[i,s])[1]-s[0])/100+s[0]},t.prototype.getStep=function(t){var e=this.xPct,r=this.xSteps,n=this.snap;if(100===t)return t;var i=l(t,e),s=e[i-1],o=e[i];return n?(o-s)/2<t-s?o:s:r[i-1]?e[i-1]+(e=t-e[i-1],i=r[i-1],Math.round(e/i)*i):t},t.prototype.getDefaultStep=function(t,e,r){var n=l(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){return t=l(t,this.xPct),{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){if(!i(t="min"===t?0:"max"===t?100:parseFloat(t))||!i(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]),e=Number(e[1]),t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]!==this.xVal[t+1]?(this.xSteps[t]=a([this.xVal[t],this.xVal[t+1]],e,0)/o(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e):this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t])};var r=t;function t(e,t,r){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var n,i=[];for(Object.keys(e).forEach(function(t){i.push([pt(e[t]),t])}),i.sort(function(t,e){return t[0][0]-e[0][0]}),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}var u={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},c={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},mt={tooltips:".__tooltips",aria:".__aria"};function p(t,e){if(!i(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function d(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function h(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function f(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function m(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new r(e,t.snap||!1,t.singleStep)}function g(t,e){if(e=pt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function v(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function b(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function S(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function x(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function y(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function w(t,e){if(!i(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function P(t,e){if(!i(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function C(t,e){var r;if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],e=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function N(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function V(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),s=0<=e.indexOf("snap"),o=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained"),l=0<=e.indexOf("drag-all"),e=0<=e.indexOf("smooth-steps");if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");w(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||s,drag:n,dragAll:l,smoothSteps:e,fixed:i,snap:s,hover:o,unconstrained:a}}function k(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=pt(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function A(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function M(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function L(t,e){if(!n(r=e)||"function"!=typeof r.from)throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var r;t.format=e}function U(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function D(t,e){t.documentElement=e}function T(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function O(e,r){if("object"!=typeof r)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(r).forEach(function(t){e.cssClasses[t]=e.cssPrefix+r[t]})):e.cssClasses=r}function gt(e){var r={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:u,format:u},n={step:{r:!1,t:p},keyboardPageMultiplier:{r:!1,t:d},keyboardMultiplier:{r:!1,t:h},keyboardDefaultStep:{r:!1,t:f},start:{r:!0,t:g},connect:{r:!0,t:x},direction:{r:!0,t:N},snap:{r:!1,t:v},animate:{r:!1,t:b},animationDuration:{r:!1,t:S},range:{r:!0,t:m},orientation:{r:!1,t:y},margin:{r:!1,t:w},limit:{r:!1,t:P},padding:{r:!1,t:C},behaviour:{r:!0,t:V},ariaFormat:{r:!1,t:M},format:{r:!1,t:L},tooltips:{r:!1,t:k},keyboardSupport:{r:!0,t:U},documentElement:{r:!1,t:D},cssPrefix:{r:!0,t:T},cssClasses:{r:!0,t:O},handleAttributes:{r:!1,t:A}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:c,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(at(e[t])||void 0!==i[t])n[t].t(r,(at(e[t])?e:i)[t]);else if(n[t].r)throw new Error("noUiSlider: '"+t+"' is required.")}),r.pips=e.pips;var t=void 0!==(s=document.createElement("div")).style.msTransform,s=void 0!==s.style.transform;return r.transformRule=s?"transform":t?"msTransform":"webkitTransform",r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function _(t,d,s){var l,a,S,n,u,c=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},_=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),x=t,y=d.spectrum,p=[],h=[],f=[],o=0,m={},w=t.ownerDocument,g=d.documentElement||w.documentElement,v=w.body,q="rtl"===w.dir||1===d.ort?0:100;function E(t,e){var r=w.createElement("div");return e&&dt(r,e),t.appendChild(r),r}function F(t,c){var e,t=E(t,d.cssClasses.origin),r=E(t,d.cssClasses.handle);return E(r,d.cssClasses.touchArea),r.setAttribute("data-handle",String(c)),d.keyboardSupport&&(r.setAttribute("tabindex","0"),r.addEventListener("keydown",function(t){var e=c;if(H()||b(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],s=["Home","End"],o=(d.dir&&!d.ort?r.reverse():d.ort&&!d.dir&&(n.reverse(),i.reverse()),t.key.replace("Arrow","")),a=o===i[0],l=o===i[1],i=o===n[0]||o===r[0]||a,n=o===n[1]||o===r[1]||l,r=o===s[0],s=o===s[1];if(!(i||n||r||s))return!0;if(t.preventDefault(),n||i){var u=i?0:1;if(null===(u=et(e)[u]))return!1;!1===u&&(u=y.getDefaultStep(h[e],i,d.keyboardDefaultStep)),u*=l||a?d.keyboardPageMultiplier:d.keyboardMultiplier,u=Math.max(u,1e-7),u=p[e]+(u*=i?-1:1)}else u=s?d.spectrum.xVal[d.spectrum.xVal.length-1]:d.spectrum.xVal[0];return U(e,y.toStepping(u),!0,!0),M("slide",e),M("update",e),M("change",e),M("set",e),!1})),void 0!==d.handleAttributes&&(e=d.handleAttributes[c],Object.keys(e).forEach(function(t){r.setAttribute(t,e[t])})),r.setAttribute("role","slider"),r.setAttribute("aria-orientation",d.ort?"vertical":"horizontal"),0===c?dt(r,d.cssClasses.handleLower):c===d.handles-1&&dt(r,d.cssClasses.handleUpper),t}function j(t,e){return!!e&&E(t,d.cssClasses.connect)}function z(t,e){return!(!d.tooltips||!d.tooltips[e])&&E(t.firstChild,d.cssClasses.tooltip)}function H(){return x.hasAttribute("disabled")}function b(t){return l[t].hasAttribute("disabled")}function P(){n&&(r("update"+mt.tooltips),n.forEach(function(t){t&&ot(t)}),n=null)}function R(){P(),n=l.map(z),e("update"+mt.tooltips,function(t,e,r){n&&d.tooltips&&!1!==n[e]&&(t=t[e],!0!==d.tooltips[e]&&(t=d.tooltips[e].to(r[e])),n[e].innerHTML=t)})}function I(t,e){return t.map(function(t){return y.fromStepping(e?y.getStep(t):t)})}function C(){S&&(ot(S),S=null)}function N(t){C();f=function(t){if(t.mode===st.PipsMode.Range||t.mode===st.PipsMode.Steps)return y.xVal;if(t.mode!==st.PipsMode.Count)return t.mode===st.PipsMode.Positions?I(t.values,t.stepped):t.mode===st.PipsMode.Values?t.stepped?t.values.map(function(t){return y.fromStepping(y.getStep(y.toStepping(t)))}):t.values:[];if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,n=[];e--;)n[e]=e*r;return n.push(100),I(n,t.stepped)}(h=t),m={},e=y.xVal[0],r=y.xVal[y.xVal.length-1],v=g=!1,b=0,(f=f.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==e&&(f.unshift(e),g=!0),f[f.length-1]!==r&&(f.push(r),v=!0),f.forEach(function(t,e){var r,n,i,s,o,a,l,u,c=f[e+1],p=h.mode===st.PipsMode.Steps,d=(d=p?y.xNumSteps[e]:d)||c-t;for(void 0===c&&(c=t),d=Math.max(d,1e-7),r=t;r<=c;r=Number((r+d).toFixed(7))){for(a=(s=(i=y.toStepping(r))-b)/(h.density||1),u=s/(l=Math.round(a)),n=1;n<=l;n+=1)m[(o=b+n*u).toFixed(5)]=[y.fromStepping(o),0];a=-1<f.indexOf(r)?st.PipsType.LargeValue:p?st.PipsType.SmallValue:st.PipsType.NoValue,!e&&g&&r!==c&&(a=0),r===c&&v||(m[i.toFixed(5)]=[r,a]),b=i}});var h,f,m,g,v,b,i,s,o,a,n,l,u,c,e=m,r=t.filter,t=t.format||{to:function(t){return String(Math.round(t))}};return S=x.appendChild((i=e,s=r,o=t,a=w.createElement("div"),(e={})[st.PipsType.None]="",e[st.PipsType.NoValue]=d.cssClasses.valueNormal,e[st.PipsType.LargeValue]=d.cssClasses.valueLarge,e[st.PipsType.SmallValue]=d.cssClasses.valueSub,n=e,(e={})[st.PipsType.None]="",e[st.PipsType.NoValue]=d.cssClasses.markerNormal,e[st.PipsType.LargeValue]=d.cssClasses.markerLarge,e[st.PipsType.SmallValue]=d.cssClasses.markerSub,l=e,u=[d.cssClasses.valueHorizontal,d.cssClasses.valueVertical],c=[d.cssClasses.markerHorizontal,d.cssClasses.markerVertical],dt(a,d.cssClasses.pips),dt(a,0===d.ort?d.cssClasses.pipsHorizontal:d.cssClasses.pipsVertical),Object.keys(i).forEach(function(t){var e,r=i[e=t][0],n=i[t][1];(n=s?s(r,n):n)!==st.PipsType.None&&((t=E(a,!1)).className=p(n,d.cssClasses.marker),t.style[d.style]=e+"%",n>st.PipsType.NoValue&&((t=E(a,!1)).className=p(n,d.cssClasses.value),t.setAttribute("data-value",String(r)),t.style[d.style]=e+"%",t.innerHTML=String(o.to(r))))}),a));function p(t,e){var r=e===d.cssClasses.value;return e+" "+(r?u:c)[d.ort]+" "+(r?n:l)[t]}}function X(){var t=i.getBoundingClientRect(),e="offset"+["Width","Height"][d.ort];return 0===d.ort?t.width||i[e]:t.height||i[e]}function V(n,i,s,o){function e(t){var e,r=function(e,t,r){var n=0===e.type.indexOf("touch"),i=0===e.type.indexOf("mouse"),s=0===e.type.indexOf("pointer"),o=0,a=0;if(0===e.type.indexOf("MSPointer")&&(s=!0),"mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(n){var l=function(t){return(t=t.target)===r||r.contains(t)||e.composed&&e.composedPath().shift()===r};if("touchstart"===e.type){if(1<(n=Array.prototype.filter.call(e.touches,l)).length)return!1;o=n[0].pageX,a=n[0].pageY}else{if(!(l=Array.prototype.find.call(e.changedTouches,l)))return!1;o=l.pageX,a=l.pageY}}return t=t||ft(w),(i||s)&&(o=e.clientX+t.x,a=e.clientY+t.y),e.pageOffset=t,e.points=[o,a],e.cursor=i||s,e}(t,o.pageOffset,o.target||i);return!!r&&!(H()&&!o.doNotReject)&&(e=x,t=d.cssClasses.tap,!((e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className))&&!o.doNotReject)&&!(n===c.start&&void 0!==r.buttons&&1<r.buttons)&&(!o.hover||!r.buttons)&&(_||r.preventDefault(),r.calcPoint=r.points[d.ort],void s(r,o)))}var r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!_&&{passive:!0}),r.push([t,e])}),r}function B(t){var e,r,n=ct(n=100*(t-(n=i,e=d.ort,r=n.getBoundingClientRect(),n=(t=n.ownerDocument).documentElement,t=ft(t),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(t.x=0),e?r.top+t.y-n.clientTop:r.left+t.x-n.clientLeft))/X());return d.dir?100-n:n}function W(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&k(t,e)}function Y(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return k(t,e);G(0<(t=(d.dir?-1:1)*(t.calcPoint-e.startCalcPoint)),100*t/e.baseSize,e.locations,e.handleNumbers,e.connect)}function k(t,e){e.handle&&(ht(e.handle,d.cssClasses.active),--o),e.listeners.forEach(function(t){g.removeEventListener(t[0],t[1])}),0===o&&(ht(x,d.cssClasses.drag),K(),t.cursor&&(v.style.cursor="",v.removeEventListener("selectstart",lt))),d.events.smoothSteps&&(e.handleNumbers.forEach(function(t){U(t,h[t],!0,!0,!1,!1)}),e.handleNumbers.forEach(function(t){M("update",t)})),e.handleNumbers.forEach(function(t){M("change",t),M("set",t),M("end",t)})}function A(t,e){var r,n,i,s;e.handleNumbers.some(b)||(1===e.handleNumbers.length&&(s=l[e.handleNumbers[0]].children[0],o+=1,dt(s,d.cssClasses.active)),t.stopPropagation(),n=V(c.move,g,Y,{target:t.target,handle:s,connect:e.connect,listeners:r=[],startCalcPoint:t.calcPoint,baseSize:X(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:h.slice()}),i=V(c.end,g,k,{target:t.target,handle:s,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),s=V("mouseout",g,W,{target:t.target,handle:s,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),r.push.apply(r,n.concat(i,s)),t.cursor&&(v.style.cursor=getComputedStyle(t.target).cursor,1<l.length&&dt(x,d.cssClasses.drag),v.addEventListener("selectstart",lt,!1)),e.handleNumbers.forEach(function(t){M("start",t)}))}function e(t,e){m[t]=m[t]||[],m[t].push(e),"update"===t.split(".")[0]&&l.forEach(function(t,e){M("update",e)})}function r(t){var n=t&&t.split(".")[0],i=n?t.substring(n.length):t;Object.keys(m).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||((e=r)!==mt.aria&&e!==mt.tooltips||i===r)&&delete m[t]})}function M(r,n,i){Object.keys(m).forEach(function(t){var e=t.split(".")[0];r===e&&m[t].forEach(function(t){t.call(O,p.map(d.format.to),n,p.slice(),i||!1,h.slice(),O)})})}function L(t,e,r,n,i,s,o){var a;return 1<l.length&&!d.events.unconstrained&&(n&&0<e&&(a=y.getAbsoluteDistance(t[e-1],d.margin,!1),r=Math.max(r,a)),i&&e<l.length-1&&(a=y.getAbsoluteDistance(t[e+1],d.margin,!0),r=Math.min(r,a))),1<l.length&&d.limit&&(n&&0<e&&(a=y.getAbsoluteDistance(t[e-1],d.limit,!1),r=Math.min(r,a)),i&&e<l.length-1&&(a=y.getAbsoluteDistance(t[e+1],d.limit,!0),r=Math.max(r,a))),d.padding&&(0===e&&(a=y.getAbsoluteDistance(0,d.padding[0],!1),r=Math.max(r,a)),e===l.length-1&&(a=y.getAbsoluteDistance(100,d.padding[1],!0),r=Math.min(r,a))),!((r=ct(r=o?r:y.getStep(r)))===t[e]&&!s)&&r}function $(t,e){var r=d.ort;return(r?e:t)+", "+(r?t:e)}function G(t,r,n,e,i){var s=n.slice(),o=e[0],a=d.events.smoothSteps,l=[!t,t],u=[t,!t],c=(e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){!1===(e=L(s,t,s[t]+r,l[e],u[e],!1,a))?r=0:(r=e-s[t],s[t]=e)}):l=u=[!0],!1);e.forEach(function(t,e){c=U(t,n[t]+r,l[e],u[e],!1,a)||c}),c&&(e.forEach(function(t){M("update",t),M("slide",t)}),null!=i&&M("drag",o))}function J(t,e){return d.dir?100-t-e:t}function K(){f.forEach(function(t){var e=50<h[t]?-1:1,e=3+(l.length+e*t);l[t].style.zIndex=String(e)})}function U(t,e,r,n,i,s){return!1!==(e=i?e:L(h,t,e,r,n,!1,s))&&(h[t]=e,p[t]=y.fromStepping(e),e="translate("+$(J(e,0)-q+"%","0")+")",l[t].style[d.transformRule]=e,Q(t),Q(t+1),!0)}function Q(t){var e,r;a[t]&&(r=100,e="translate("+$(J(e=(e=0)!==t?h[t-1]:e,r=(r=t!==a.length-1?h[t]:r)-e)+"%","0")+")",r="scale("+$(r/100,"1")+")",a[t].style[d.transformRule]=e+" "+r)}function Z(t,e){return null===t||!1===t||void 0===t?h[e]:("number"==typeof t&&(t=String(t)),!1===(t=!1!==(t=d.format.from(t))?y.toStepping(t):t)||isNaN(t)?h[e]:t)}function D(t,e,r){var n=pt(t),t=void 0===h[0];e=void 0===e||e,d.animate&&!t&&ut(x,d.cssClasses.tap,d.animationDuration),f.forEach(function(t){U(t,Z(n[t],t),!0,!1,r)});var i,s=1===f.length?0:1;for(t&&y.hasNoSize()&&(r=!0,h[0]=0,1<f.length&&(i=100/(f.length-1),f.forEach(function(t){h[t]=t*i})));s<f.length;++s)f.forEach(function(t){U(t,h[t],!0,!0,r)});K(),f.forEach(function(t){M("update",t),null!==n[t]&&e&&M("set",t)})}function tt(t){return(t=void 0!==t&&t)?1===p.length?p[0]:p.slice(0):1===(t=p.map(d.format.to)).length?t[0]:t}function et(t){var e=h[t],r=y.getNearbySteps(e),n=p[t],i=r.thisStep.step,t=null;return d.snap?[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null]:(!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),t=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(t=null),e=y.countStepDecimals(),null!==i&&!1!==i&&(i=Number(i.toFixed(e))),[t=null!==t&&!1!==t?Number(t.toFixed(e)):t,i])}dt(t=x,d.cssClasses.target),0===d.dir?dt(t,d.cssClasses.ltr):dt(t,d.cssClasses.rtl),0===d.ort?dt(t,d.cssClasses.horizontal):dt(t,d.cssClasses.vertical),dt(t,"rtl"===getComputedStyle(t).direction?d.cssClasses.textDirectionRtl:d.cssClasses.textDirectionLtr);var i=E(t,d.cssClasses.base),rt=d.connect,nt=i,it=E(nt,d.cssClasses.connects);l=[],(a=[]).push(j(it,rt[0]));for(var T=0;T<d.handles;T++)l.push(F(nt,T)),f[T]=T,a.push(j(it,rt[T+1]));(u=d.events).fixed||l.forEach(function(t,e){V(c.start,t.children[0],A,{handleNumbers:[e]})}),u.tap&&V(c.start,i,function(t){t.stopPropagation();var i,s,o,e=B(t.calcPoint),r=(i=e,o=!(s=100),l.forEach(function(t,e){var r,n;b(e)||(r=h[e],((n=Math.abs(r-i))<s||n<=s&&r<i||100===n&&100===s)&&(o=e,s=n))}),o);!1!==r&&(d.events.snap||ut(x,d.cssClasses.tap,d.animationDuration),U(r,e,!0,!0),K(),M("slide",r,!0),M("update",r,!0),d.events.snap?A(t,{handleNumbers:[r]}):(M("change",r,!0),M("set",r,!0)))},{}),u.hover&&V(c.move,i,function(t){var t=B(t.calcPoint),t=y.getStep(t),e=y.fromStepping(t);Object.keys(m).forEach(function(t){"hover"===t.split(".")[0]&&m[t].forEach(function(t){t.call(O,e)})})},{hover:!0}),u.drag&&a.forEach(function(e,t){var r,n,i,s,o;!1!==e&&0!==t&&t!==a.length-1&&(r=l[t-1],n=l[t],i=[e],s=[r,n],o=[t-1,t],dt(e,d.cssClasses.draggable),u.fixed&&(i.push(r.children[0]),i.push(n.children[0])),u.dragAll&&(s=l,o=f),i.forEach(function(t){V(c.start,t,A,{handles:s,handleNumbers:o,connect:e})}))}),D(d.start),d.pips&&N(d.pips),d.tooltips&&R(),r("update"+mt.aria),e("update"+mt.aria,function(t,e,s,r,o){f.forEach(function(t){var e=l[t],r=L(h,t,0,!0,!0,!0),n=L(h,t,100,!0,!0,!0),i=o[t],t=String(d.ariaFormat.to(s[t])),r=y.fromStepping(r).toFixed(1),n=y.fromStepping(n).toFixed(1),i=y.fromStepping(i).toFixed(1);e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",t)})});var O={destroy:function(){for(r(mt.aria),r(mt.tooltips),Object.keys(d.cssClasses).forEach(function(t){ht(x,d.cssClasses[t])});x.firstChild;)x.removeChild(x.firstChild);delete x.noUiSlider},steps:function(){return f.map(et)},on:e,off:r,get:tt,set:D,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<f.length))throw new Error("noUiSlider: invalid handle number, got: "+t);U(t,Z(e,t),!0,!0,n),M("update",t),r&&M("set",t)},reset:function(t){D(d.start,t)},__moveHandles:function(t,e,r){G(t,e,h,r)},options:s,updateOptions:function(e,t){var r=tt(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"],i=(n.forEach(function(t){void 0!==e[t]&&(s[t]=e[t])}),gt(s));n.forEach(function(t){void 0!==e[t]&&(d[t]=i[t])}),y=i.spectrum,d.margin=i.margin,d.limit=i.limit,d.padding=i.padding,d.pips?N(d.pips):C(),(d.tooltips?R:P)(),h=[],D(at(e.start)?e.start:r,t)},target:x,removePips:C,removeTooltips:P,getPositions:function(){return h.slice()},getTooltips:function(){return n},getOrigins:function(){return l},pips:N};return O}function s(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");return e=_(t,gt(e),e),t.noUiSlider=e}var E={__spectrum:r,cssClasses:c,create:s};st.create=s,st.cssClasses=c,st.default=E,Object.defineProperty(st,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).noUiSlider={});{const n=document.querySelector(".header-supermenu__btn"),i=document.querySelector(".header-supermenu");n.addEventListener("click",()=>{i&&i.classList.toggle("active")})}for(const s of document.querySelectorAll(".product-info__subtitle"))s.addEventListener("click",()=>{s.classList.toggle("off")});new t({slider:".product-gallery",thumbs:".product-thumbs"});for(const o of document.querySelectorAll(".tabs-nav__button"))o.addEventListener("click",()=>{if(o.classList.contains("active"))return!1;const t=document.querySelector(".tabs-nav__button.active"),e=document.querySelector(".tabs-content__item.active"),r=document.querySelector(o.getAttribute("data-anchor"));if(!r)return!1;t&&e&&(t.classList.remove("active"),e.classList.remove("active")),o.classList.add("active"),r.classList.add("active")});{var r=document.querySelector(".header");const a=document.querySelector("html");a.style.setProperty("--header-offset",r.offsetHeight+"px")}{const l=document.querySelector(".filters-item__price"),u=document.querySelector(".filter-form__prices");(l||u)&&(noUiSlider.create(l,{range:{min:0,max:500},step:10,start:[50,450],connect:!0}),l.noUiSlider.on("update",function(t,e){u.querySelector(".price-value_"+e).innerHTML=Number(t[e]).toFixed(0)+"<span>₴</span>"}))}