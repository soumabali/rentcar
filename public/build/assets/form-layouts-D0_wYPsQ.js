(function(){const t=document.querySelectorAll(".phone-mask"),n=document.querySelector(".credit-card-mask"),c=document.querySelector(".expiry-date-mask"),r=document.querySelector(".cvv-code-mask"),a=document.querySelectorAll(".dob-picker"),i=document.querySelectorAll(".form-check-input-payment");t&&t.forEach(function(e){new Cleave(e,{phone:!0,phoneRegionCode:"US"})}),n&&new Cleave(n,{creditCard:!0,onCreditCardTypeChanged:function(e){e!=""&&e!="unknown"?document.querySelector(".card-type").innerHTML='<img src="'+assetsPath+"img/icons/payments/"+e+'-cc.png" height="28"/>':document.querySelector(".card-type").innerHTML=""}}),c&&new Cleave(c,{date:!0,delimiter:"/",datePattern:["m","y"]}),r&&new Cleave(r,{numeral:!0,numeralPositiveOnly:!0}),a&&a.forEach(function(e){e.flatpickr({monthSelectorType:"static"})}),i&&i.forEach(function(e){e.addEventListener("change",function(o){o.target.value==="credit-card"?document.querySelector("#form-credit-card").classList.remove("d-none"):document.querySelector("#form-credit-card").classList.add("d-none")})})})();$(function(){var t;const n=$(".sticky-element");window.Helpers.initCustomOptionCheck(),Helpers.isNavbarFixed()?t=$(".layout-navbar").height()+7:t=0,n.length&&n.sticky({topSpacing:t,zIndex:9});var c=$(".select2");c.length&&c.each(function(){var r=$(this);r.wrap('<div class="position-relative"></div>').select2({placeholder:"Select value",dropdownParent:r.parent()})})});