window.isRtl=window.Helpers.isRtl();window.isDarkStyle=window.Helpers.isDarkStyle();(function(){var d,m;const a=document.getElementById("navbarSupportedContent"),o=document.querySelector(".layout-navbar"),w=document.querySelectorAll(".navbar-nav .nav-link");setTimeout(function(){window.Helpers.initCustomOptionCheck()},1e3),[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)}),isRtl&&Helpers._addClass("dropdown-menu-end",document.querySelectorAll("#layout-navbar .dropdown-menu")),window.addEventListener("scroll",e=>{window.scrollY>10?o.classList.add("navbar-active"):o.classList.remove("navbar-active")}),window.addEventListener("load",e=>{window.scrollY>10?o.classList.add("navbar-active"):o.classList.remove("navbar-active")});function r(){a.classList.remove("show")}document.addEventListener("click",function(e){a.contains(e.target)||r()}),w.forEach(e=>{e.addEventListener("click",t=>{e.classList.contains("dropdown-toggle")?t.preventDefault():r()})}),isRtl&&Helpers._addClass("dropdown-menu-end",document.querySelectorAll(".dropdown-menu"));const c=document.querySelectorAll(".nav-link.mega-dropdown");c&&c.forEach(e=>{new MegaDropdown(e)});let s=document.querySelector(".dropdown-style-switcher"),n=localStorage.getItem("templateCustomizer-"+templateName+"--Style")||(((m=(d=window.templateCustomizer)==null?void 0:d.settings)==null?void 0:m.defaultStyle)??"light");//!if there is no Customizer then use default style as light
if(window.templateCustomizer&&s){[].slice.call(s.children[1].querySelectorAll(".dropdown-item")).forEach(function(l){l.addEventListener("click",function(){let i=this.getAttribute("data-theme");i==="light"?window.templateCustomizer.setStyle("light"):i==="dark"?window.templateCustomizer.setStyle("dark"):window.templateCustomizer.setStyle("system")})});const t=s.querySelector("i");n==="light"?(t.classList.add("bx-sun"),new bootstrap.Tooltip(t,{title:"Light Mode",fallbackPlacements:["bottom"]})):n==="dark"?(t.classList.add("bx-moon"),new bootstrap.Tooltip(t,{title:"Dark Mode",fallbackPlacements:["bottom"]})):(t.classList.add("bx-desktop"),new bootstrap.Tooltip(t,{title:"System Mode",fallbackPlacements:["bottom"]}))}u(n);function u(e){e==="system"&&(window.matchMedia("(prefers-color-scheme: dark)").matches?e="dark":e="light"),[].slice.call(document.querySelectorAll("[data-app-"+e+"-img]")).map(function(l){const i=l.getAttribute("data-app-"+e+"-img");l.src=assetsPath+"img/"+i})}})();