let b,v;document.addEventListener("DOMContentLoaded",function(f){(function(){const u=document.getElementById("form-add-new-record");setTimeout(()=>{const o=document.querySelector(".create-new"),d=document.querySelector("#add-new-record");o&&o.addEventListener("click",function(){v=new bootstrap.Offcanvas(d),d.querySelector(".dt-full-name").value="",d.querySelector(".dt-post").value="",d.querySelector(".dt-email").value="",d.querySelector(".dt-date").value="",d.querySelector(".dt-salary").value="",v.show()})},200),b=FormValidation.formValidation(u,{fields:{basicFullname:{validators:{notEmpty:{message:"The name is required"}}},basicPost:{validators:{notEmpty:{message:"Post field is required"}}},basicEmail:{validators:{notEmpty:{message:"The Email is required"},emailAddress:{message:"The value is not a valid email address"}}},basicDate:{validators:{notEmpty:{message:"Joining Date is required"},date:{format:"MM/DD/YYYY",message:"The value is not a valid date"}}},basicSalary:{validators:{notEmpty:{message:"Basic Salary is required"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-sm-12"}),submitButton:new FormValidation.plugins.SubmitButton,autoFocus:new FormValidation.plugins.AutoFocus},init:o=>{o.on("plugins.message.placed",function(d){d.element.parentElement.classList.contains("input-group")&&d.element.parentElement.insertAdjacentElement("afterend",d.messageElement)})}});const c=document.querySelector('[name="basicDate"]');c&&c.flatpickr({enableTime:!1,dateFormat:"m/d/Y",onChange:function(){b.revalidateField("basicDate")}})})()});$(function(){var f=$(".datatables-basic"),u=$(".dt-complex-header"),c=$(".dt-row-grouping"),o=$(".dt-multilingual"),d;f.length&&(d=f.DataTable({ajax:assetsPath+"json/table-datatable.json",columns:[{data:""},{data:"id"},{data:"id"},{data:"full_name"},{data:"email"},{data:"start_date"},{data:"salary"},{data:"status"},{data:""}],columnDefs:[{className:"control",orderable:!1,searchable:!1,responsivePriority:2,targets:0,render:function(a,r,n,s){return""}},{targets:1,orderable:!1,searchable:!1,responsivePriority:3,checkboxes:!0,render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'},checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'}},{targets:2,searchable:!1,visible:!1},{targets:3,responsivePriority:4,render:function(a,r,n,s){var e=n.avatar,l=n.full_name,t=n.post;if(e)var x='<img src="'+assetsPath+"img/avatars/"+e+'" alt="Avatar" class="rounded-circle">';else{var w=Math.floor(Math.random()*6),y=["success","danger","warning","info","dark","primary","secondary"],j=y[w],l=n.full_name,m=l.match(/\b\w/g)||[];m=((m.shift()||"")+(m.pop()||"")).toUpperCase(),x='<span class="avatar-initial rounded-circle bg-label-'+j+'">'+m+"</span>"}var C='<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar me-2">'+x+'</div></div><div class="d-flex flex-column"><span class="emp_name text-truncate">'+l+'</span><small class="emp_post text-truncate text-muted">'+t+"</small></div></div>";return C}},{responsivePriority:1,targets:4},{targets:-2,render:function(a,r,n,s){var e=n.status,l={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:" bg-label-success"},3:{title:"Rejected",class:" bg-label-danger"},4:{title:"Resigned",class:" bg-label-warning"},5:{title:"Applied",class:" bg-label-info"}};return typeof l[e]>"u"?a:'<span class="badge '+l[e].class+'">'+l[e].title+"</span>"}},{targets:-1,title:"Actions",orderable:!1,searchable:!1,render:function(a,r,n,s){return'<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><ul class="dropdown-menu dropdown-menu-end m-0"><li><a href="javascript:;" class="dropdown-item">Details</a></li><li><a href="javascript:;" class="dropdown-item">Archive</a></li><div class="dropdown-divider"></div><li><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></li></ul></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></a>'}}],order:[[2,"desc"]],dom:'<"card-header flex-column flex-md-row"<"head-label text-center"><"dt-action-buttons text-end pt-3 pt-md-0"B>><"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',displayLength:7,lengthMenu:[7,10,25,50,75,100],buttons:[{extend:"collection",className:"btn btn-label-primary dropdown-toggle me-2",text:'<i class="bx bx-export me-sm-1"></i> <span class="d-none d-sm-inline-block">Export</span>',buttons:[{extend:"print",text:'<i class="bx bx-printer me-1" ></i>Print',className:"dropdown-item",exportOptions:{columns:[3,4,5,6,7],format:{body:function(a,r,n){if(a.length<=0)return a;var s=$.parseHTML(a),e="";return $.each(s,function(l,t){t.classList!==void 0&&t.classList.contains("user-name")?e=e+t.lastChild.firstChild.textContent:t.innerText===void 0?e=e+t.textContent:e=e+t.innerText}),e}}},customize:function(a){$(a.document.body).css("color",config.colors.headingColor).css("border-color",config.colors.borderColor).css("background-color",config.colors.bodyBg),$(a.document.body).find("table").addClass("compact").css("color","inherit").css("border-color","inherit").css("background-color","inherit")}},{extend:"csv",text:'<i class="bx bx-file me-1" ></i>Csv',className:"dropdown-item",exportOptions:{columns:[3,4,5,6,7],format:{body:function(a,r,n){if(a.length<=0)return a;var s=$.parseHTML(a),e="";return $.each(s,function(l,t){t.classList!==void 0&&t.classList.contains("user-name")?e=e+t.lastChild.firstChild.textContent:t.innerText===void 0?e=e+t.textContent:e=e+t.innerText}),e}}}},{extend:"excel",text:'<i class="bx bxs-file-export me-1"></i>Excel',className:"dropdown-item",exportOptions:{columns:[3,4,5,6,7],format:{body:function(a,r,n){if(a.length<=0)return a;var s=$.parseHTML(a),e="";return $.each(s,function(l,t){t.classList!==void 0&&t.classList.contains("user-name")?e=e+t.lastChild.firstChild.textContent:t.innerText===void 0?e=e+t.textContent:e=e+t.innerText}),e}}}},{extend:"pdf",text:'<i class="bx bxs-file-pdf me-1"></i>Pdf',className:"dropdown-item",exportOptions:{columns:[3,4,5,6,7],format:{body:function(a,r,n){if(a.length<=0)return a;var s=$.parseHTML(a),e="";return $.each(s,function(l,t){t.classList!==void 0&&t.classList.contains("user-name")?e=e+t.lastChild.firstChild.textContent:t.innerText===void 0?e=e+t.textContent:e=e+t.innerText}),e}}}},{extend:"copy",text:'<i class="bx bx-copy me-1" ></i>Copy',className:"dropdown-item",exportOptions:{columns:[3,4,5,6,7],format:{body:function(a,r,n){if(a.length<=0)return a;var s=$.parseHTML(a),e="";return $.each(s,function(l,t){t.classList!==void 0&&t.classList.contains("user-name")?e=e+t.lastChild.firstChild.textContent:t.innerText===void 0?e=e+t.textContent:e=e+t.innerText}),e}}}}]},{text:'<i class="bx bx-plus me-sm-1"></i> <span class="d-none d-sm-inline-block">Add New Record</span>',className:"create-new btn btn-primary"}],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(a){var r=a.data();return"Details of "+r.full_name}}),type:"column",renderer:function(a,r,n){var s=$.map(n,function(e,l){return e.title!==""?'<tr data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>":""}).join("");return s?$('<table class="table"/><tbody />').append(s):!1}}}}),$("div.head-label").html('<h5 class="card-title mb-0">DataTable with Buttons</h5>'),$(".dt-buttons > .btn-group > button").removeClass("btn-secondary"));var g=101;b.on("core.form.valid",function(){var a=$(".add-new-record .dt-full-name").val(),r=$(".add-new-record .dt-post").val(),n=$(".add-new-record .dt-email").val(),s=$(".add-new-record .dt-date").val(),e=$(".add-new-record .dt-salary").val();a!=""&&(d.row.add({id:g,full_name:a,post:r,email:n,start_date:s,salary:"$"+e,status:5}).draw(),g++,v.hide())}),$(".datatables-basic tbody").on("click",".delete-record",function(){d.row($(this).parents("tr")).remove().draw()}),u.length&&u.DataTable({ajax:assetsPath+"json/table-datatable.json",columns:[{data:"full_name"},{data:"email"},{data:"city"},{data:"post"},{data:"salary"},{data:"status"},{data:""}],columnDefs:[{targets:-2,render:function(a,r,n,s){var e=n.status,l={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:" bg-label-success"},3:{title:"Rejected",class:" bg-label-danger"},4:{title:"Resigned",class:" bg-label-warning"},5:{title:"Applied",class:" bg-label-info"}};return typeof l[e]>"u"?a:'<span class="badge '+l[e].class+'">'+l[e].title+"</span>"}},{targets:-1,title:"Actions",orderable:!1,render:function(a,r,n,s){return'<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></a>'}}],dom:'<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>><"table-responsive"t><"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',displayLength:7,lengthMenu:[7,10,25,50,75,100]});var i=2;if(c.length){var p=c.DataTable({ajax:assetsPath+"json/table-datatable.json",columns:[{data:""},{data:"full_name"},{data:"post"},{data:"email"},{data:"city"},{data:"start_date"},{data:"salary"},{data:"status"},{data:""}],columnDefs:[{className:"control",orderable:!1,targets:0,searchable:!1,render:function(a,r,n,s){return""}},{visible:!1,targets:i},{targets:-2,render:function(a,r,n,s){var e=n.status,l={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:" bg-label-success"},3:{title:"Rejected",class:" bg-label-danger"},4:{title:"Resigned",class:" bg-label-warning"},5:{title:"Applied",class:" bg-label-info"}};return typeof l[e]>"u"?a:'<span class="badge '+l[e].class+'">'+l[e].title+"</span>"}},{targets:-1,title:"Actions",orderable:!1,searchable:!1,render:function(a,r,n,s){return'<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></a>'}}],order:[[i,"asc"]],dom:'<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',displayLength:7,lengthMenu:[7,10,25,50,75,100],drawCallback:function(a){var r=this.api(),n=r.rows({page:"current"}).nodes(),s=null;r.column(i,{page:"current"}).data().each(function(e,l){s!==e&&($(n).eq(l).before('<tr class="group"><td colspan="8">'+e+"</td></tr>"),s=e)})},responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(a){var r=a.data();return"Details of "+r.full_name}}),type:"column",renderer:function(a,r,n){var s=$.map(n,function(e,l){return e.title!==""?'<tr data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>":""}).join("");return s?$('<table class="table"/><tbody />').append(s):!1}}}});$(".dt-row-grouping tbody").on("click","tr.group",function(){var a=p.order()[0];a[0]===i&&a[1]==="asc"?p.order([i,"desc"]).draw():p.order([i,"asc"]).draw()})}var h="German";o.length&&o.DataTable({ajax:assetsPath+"json/table-datatable.json",columns:[{data:""},{data:"full_name"},{data:"post"},{data:"email"},{data:"start_date"},{data:"salary"},{data:"status"},{data:""}],columnDefs:[{className:"control",orderable:!1,targets:0,searchable:!1,render:function(a,r,n,s){return""}},{targets:-2,render:function(a,r,n,s){var e=n.status,l={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:" bg-label-success"},3:{title:"Rejected",class:" bg-label-danger"},4:{title:"Resigned",class:" bg-label-warning"},5:{title:"Applied",class:" bg-label-info"}};return typeof l[e]>"u"?a:'<span class="badge '+l[e].class+'">'+l[e].title+"</span>"}},{targets:-1,title:"Actions",orderable:!1,searchable:!1,render:function(a,r,n,s){return'<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></a>'}}],language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/"+h+".json"},displayLength:7,dom:'<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',lengthMenu:[7,10,25,50,75,100],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(a){var r=a.data();return"Details of "+r.full_name}}),type:"column",renderer:function(a,r,n){var s=$.map(n,function(e,l){return e.title!==""?'<tr data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>":""}).join("");return s?$('<table class="table"/><tbody />').append(s):!1}}}}),setTimeout(()=>{$(".dataTables_filter .form-control").removeClass("form-control-sm"),$(".dataTables_length .form-select").removeClass("form-select-sm")},300)});