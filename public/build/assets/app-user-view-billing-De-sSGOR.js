(function(){const e=document.querySelector(".cancel-subscription");e&&(e.onclick=function(){Swal.fire({text:"Are you sure you would like to cancel your subscription?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary me-2",cancelButton:"btn btn-label-secondary"},buttonsStyling:!1}).then(function(t){t.value?Swal.fire({icon:"success",title:"Unsubscribed!",text:"Your subscription cancelled successfully.",customClass:{confirmButton:"btn btn-success"}}):t.dismiss===Swal.DismissReason.cancel&&Swal.fire({title:"Cancelled",text:"Unsubscription Cancelled!!",icon:"error",customClass:{confirmButton:"btn btn-success"}})})});const n=document.querySelector(".edit-address"),s=document.querySelector(".address-title"),c=document.querySelector(".address-subtitle");n.onclick=function(){s.innerHTML="Edit Address",c.innerHTML="Edit your current address"}})();
