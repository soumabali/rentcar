document.addEventListener("DOMContentLoaded",function(n){(function(){const t=document.querySelector(".credit-card-mask"),o=document.querySelector(".expiry-date-mask"),a=document.querySelector(".cvv-code-mask");t&&new Cleave(t,{creditCard:!0,onCreditCardTypeChanged:function(e){e!=""&&e!="unknown"?document.querySelector(".card-type").innerHTML='<img src="'+assetsPath+"img/icons/payments/"+e+'-cc.png" height="28"/>':document.querySelector(".card-type").innerHTML=""}}),o&&new Cleave(o,{date:!0,delimiter:"/",datePattern:["m","y"]}),a&&new Cleave(a,{numeral:!0,numeralPositiveOnly:!0});const r=document.getElementById("formAccountSettings"),s=document.querySelector(".mobile-number"),l=document.querySelector(".zip-code"),c=document.getElementById("creditCardForm");r&&FormValidation.formValidation(r,{fields:{companyName:{validators:{notEmpty:{message:"Please enter company name"}}},billingEmail:{validators:{notEmpty:{message:"Please enter billing email"},emailAddress:{message:"Please enter valid email address"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-sm-6"}),submitButton:new FormValidation.plugins.SubmitButton,autoFocus:new FormValidation.plugins.AutoFocus}}),c&&FormValidation.formValidation(c,{fields:{paymentCard:{validators:{notEmpty:{message:"Please enter your credit card number"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:""}),submitButton:new FormValidation.plugins.SubmitButton,autoFocus:new FormValidation.plugins.AutoFocus},init:e=>{e.on("plugins.message.placed",function(i){i.element.parentElement.classList.contains("input-group")&&i.element.parentElement.insertAdjacentElement("afterend",i.messageElement)})}});const u=document.querySelector(".cancel-subscription");u&&(u.onclick=function(){Swal.fire({text:"Are you sure you would like to cancel your subscription?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary me-2",cancelButton:"btn btn-label-secondary"},buttonsStyling:!1}).then(function(e){e.value?Swal.fire({icon:"success",title:"Unsubscribed!",text:"Your subscription cancelled successfully.",customClass:{confirmButton:"btn btn-success"}}):e.dismiss===Swal.DismissReason.cancel&&Swal.fire({title:"Cancelled",text:"Unsubscription Cancelled!!",icon:"error",customClass:{confirmButton:"btn btn-success"}})})}),s&&new Cleave(s,{phone:!0,phoneRegionCode:"US"}),l&&new Cleave(l,{delimiter:"",numeral:!0})})()});$(function(){var n=$(".select2");n.length&&n.each(function(){var t=$(this);t.wrap('<div class="position-relative"></div>'),t.select2({dropdownParent:t.parent()})})});
