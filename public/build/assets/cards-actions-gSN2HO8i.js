(function(){const c=[].slice.call(document.querySelectorAll(".card-collapsible")),t=[].slice.call(document.querySelectorAll(".card-expand")),s=[].slice.call(document.querySelectorAll(".card-close"));let a=document.getElementById("sortable-4");c&&c.map(function(e){e.addEventListener("click",l=>{l.preventDefault(),new bootstrap.Collapse(e.closest(".card").querySelector(".collapse")),e.closest(".card-header").classList.toggle("collapsed"),Helpers._toggleClass(e.firstElementChild,"bx-chevron-down","bx-chevron-up")})}),t&&t.map(function(e){e.addEventListener("click",l=>{l.preventDefault(),Helpers._toggleClass(e.firstElementChild,"bx-fullscreen","bx-exit-fullscreen"),e.closest(".card").classList.toggle("card-fullscreen")})}),document.addEventListener("keyup",e=>{if(e.preventDefault(),e.key==="Escape"){const l=document.querySelector(".card-fullscreen");l&&(Helpers._toggleClass(l.querySelector(".card-expand").firstChild,"bx-fullscreen","bx-exit-fullscreen"),l.classList.toggle("card-fullscreen"))}}),s&&s.map(function(e){e.addEventListener("click",l=>{l.preventDefault(),e.closest(".card").classList.add("d-none")})}),typeof a!==void 0&&a!==null&&Sortable.create(a,{animation:500,handle:".card"})})();$(function(){const c=$(".card-reload");c.length&&c.on("click",function(t){t.preventDefault();var s=$(this);s.closest(".card").block({message:'<div class="sk-fold sk-primary"><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div></div><h5>LOADING...</h5>',css:{backgroundColor:"transparent",border:"0"},overlayCSS:{backgroundColor:$("html").hasClass("dark-style")?"#000":"#fff",opacity:.55}}),setTimeout(function(){s.closest(".card").unblock(),s.closest(".card").find(".card-alert").length&&s.closest(".card").find(".card-alert").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button><span class="fw-medium">Holy grail!</span> Your success/error message here.</div>')},2500)})});