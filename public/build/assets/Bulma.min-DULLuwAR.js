var P=(i,f)=>()=>(f||i((f={exports:{}}).exports,f),f.exports);var j=P((y,p)=>{(function(i,f){typeof y=="object"&&typeof p<"u"?p.exports=f():typeof define=="function"&&define.amd?define(f):(i=typeof globalThis<"u"?globalThis:i||self,i.FormValidation=i.FormValidation||{},i.FormValidation.plugins=i.FormValidation.plugins||{},i.FormValidation.plugins.Bulma=f())})(void 0,function(){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},u(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},s(e,t)}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function g(e){var t=v();return function(){var r=u(e),o;if(t){var a=u(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return _(this,o)}}var c=FormValidation.utils.classSet,O=FormValidation.plugins.Framework,w=function(e){m(n,e);var t=g(n);function n(r){return i(this,n),t.call(this,Object.assign({},{formClass:"fv-plugins-bulma",messageClass:"help is-danger",rowInvalidClass:"fv-has-error",rowPattern:/^.*field.*$/,rowSelector:".field",rowValidClass:"fv-has-success"},r))}return h(n,[{key:"onIconPlaced",value:function(o){c(o.iconElement,{"fv-plugins-icon":!1});var a=document.createElement("span");a.setAttribute("class","icon is-small is-right"),o.iconElement.parentNode.insertBefore(a,o.iconElement),a.appendChild(o.iconElement);var d=o.element.getAttribute("type"),l=o.element.parentElement;d==="checkbox"||d==="radio"?(c(l.parentElement,{"has-icons-right":!0}),c(a,{"fv-plugins-icon-check":!0}),l.parentElement.insertBefore(a,l.nextSibling)):c(l,{"has-icons-right":!0})}}]),n}(O);return w})});export default j();