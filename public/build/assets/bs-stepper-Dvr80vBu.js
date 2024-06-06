import{c as V,g as q}from"./_commonjsHelpers-BosuxZz1.js";var w={exports:{}};/*!
 * bsStepper v1.7.0 (https://github.com/Johann-S/bs-stepper)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-stepper/blob/master/LICENSE)
 */(function(h,b){(function(u,d){h.exports=d()})(V,function(){function u(){return u=Object.assign||function(o){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])}return o},u.apply(this,arguments)}var d=window.Element.prototype.matches,p=function(n,t){return n.closest(t)},l=function(n,t){return new window.Event(n,t)},f=function(n,t){var e=new window.CustomEvent(n,t);return e};function S(){if(window.Element.prototype.matches||(d=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(p=function(t,e){if(!document.documentElement.contains(t))return null;do{if(d.call(t,e))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null}),(!window.Event||typeof window.Event!="function")&&(l=function(t,e){e=e||{};var i=document.createEvent("Event");return i.initEvent(t,!!e.bubbles,!!e.cancelable),i}),typeof window.CustomEvent!="function"){var o=window.Event.prototype.preventDefault;f=function(t,e){var i=document.createEvent("CustomEvent");return e=e||{bubbles:!1,cancelable:!1,detail:null},i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i.preventDefault=function(){this.cancelable&&(o.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},i}}}S();var C=1e3,r={ACTIVE:"active",LINEAR:"linear",BLOCK:"dstepper-block",NONE:"dstepper-none",FADE:"fade",VERTICAL:"vertical"},L="transitionend",m="bsStepper",E=function(n,t,e,i){var s=n[m];if(!(s._steps[t].classList.contains(r.ACTIVE)||s._stepsContents[t].classList.contains(r.ACTIVE))){var a=f("show.bs-stepper",{cancelable:!0,detail:{from:s._currentIndex,to:t,indexStep:t}});n.dispatchEvent(a);var c=s._steps.filter(function(_){return _.classList.contains(r.ACTIVE)}),v=s._stepsContents.filter(function(_){return _.classList.contains(r.ACTIVE)});a.defaultPrevented||(c.length&&c[0].classList.remove(r.ACTIVE),v.length&&(v[0].classList.remove(r.ACTIVE),!n.classList.contains(r.VERTICAL)&&!s.options.animation&&v[0].classList.remove(r.BLOCK)),I(n,s._steps[t],s._steps,e),A(n,s._stepsContents[t],s._stepsContents,v,i))}},I=function(n,t,e,i){e.forEach(function(a){var c=a.querySelector(i.selectors.trigger);c.setAttribute("aria-selected","false"),n.classList.contains(r.LINEAR)&&c.setAttribute("disabled","disabled")}),t.classList.add(r.ACTIVE);var s=t.querySelector(i.selectors.trigger);s.setAttribute("aria-selected","true"),n.classList.contains(r.LINEAR)&&s.removeAttribute("disabled")},A=function(n,t,e,i,s){var a=n[m],c=e.indexOf(t),v=f("shown.bs-stepper",{cancelable:!0,detail:{from:a._currentIndex,to:c,indexStep:c}});function _(){t.classList.add(r.BLOCK),t.removeEventListener(L,_),n.dispatchEvent(v),s()}if(t.classList.contains(r.FADE)){t.classList.remove(r.NONE);var D=x(t);t.addEventListener(L,_),i.length&&i[0].classList.add(r.NONE),t.classList.add(r.ACTIVE),y(t,D)}else t.classList.add(r.ACTIVE),t.classList.add(r.BLOCK),n.dispatchEvent(v),s()},x=function(n){if(!n)return 0;var t=window.getComputedStyle(n).transitionDuration,e=parseFloat(t);return e?(t=t.split(",")[0],parseFloat(t)*C):0},y=function(n,t){var e=!1,i=5,s=t+i;function a(){e=!0,n.removeEventListener(L,a)}n.addEventListener(L,a),window.setTimeout(function(){e||n.dispatchEvent(l(L)),n.removeEventListener(L,a)},s)},T=function(n,t){t.animation&&n.forEach(function(e){e.classList.add(r.FADE),e.classList.add(r.NONE)})},k=function(){return function(t){t.preventDefault()}},O=function(n){return function(e){e.preventDefault();var i=p(e.target,n.selectors.steps),s=p(i,n.selectors.stepper),a=s[m],c=a._steps.indexOf(i);E(s,c,n,function(){a._currentIndex=c})}},g={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}},N=function(){function o(t,e){var i=this;e===void 0&&(e={}),this._element=t,this._currentIndex=0,this._stepsContents=[],this.options=u({},g,{},e),this.options.selectors=u({},g.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(r.LINEAR),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter(function(s){return s.hasAttribute("data-target")}).forEach(function(s){i._stepsContents.push(i._element.querySelector(s.getAttribute("data-target")))}),T(this._stepsContents,this.options),this._setLinkListeners(),Object.defineProperty(this._element,m,{value:this,writable:!0}),this._steps.length&&E(this._element,this._currentIndex,this.options,function(){})}var n=o.prototype;return n._setLinkListeners=function(){var e=this;this._steps.forEach(function(i){var s=i.querySelector(e.options.selectors.trigger);e.options.linear?(e._clickStepLinearListener=k(e.options),s.addEventListener("click",e._clickStepLinearListener)):(e._clickStepNonLinearListener=O(e.options),s.addEventListener("click",e._clickStepNonLinearListener))})},n.next=function(){var e=this,i=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;E(this._element,i,this.options,function(){e._currentIndex=i})},n.previous=function(){var e=this,i=this._currentIndex-1>=0?this._currentIndex-1:0;E(this._element,i,this.options,function(){e._currentIndex=i})},n.to=function(e){var i=this,s=e-1,a=s>=0&&s<this._steps.length?s:0;E(this._element,a,this.options,function(){i._currentIndex=a})},n.reset=function(){var e=this;E(this._element,0,this.options,function(){e._currentIndex=0})},n.destroy=function(){var e=this;this._steps.forEach(function(i){var s=i.querySelector(e.options.selectors.trigger);e.options.linear?s.removeEventListener("click",e._clickStepLinearListener):s.removeEventListener("click",e._clickStepNonLinearListener)}),this._element[m]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},o}();return N})})(w);var F=w.exports;const P=q(F),j=document.querySelectorAll(".bs-stepper");j.forEach(h=>{h.addEventListener("show.bs-stepper",function(b){var u=b.detail.indexStep,d=h.querySelectorAll(".line").length,p=h.querySelectorAll(".step");for(let l=0;l<u;l++){p[l].classList.add("crossed");for(let f=u;f<d;f++)p[f].classList.remove("crossed")}if(b.detail.to==0){for(let l=u;l<d;l++)p[l].classList.remove("crossed");p[0].classList.remove("crossed")}})});try{window.Stepper=P}catch{}