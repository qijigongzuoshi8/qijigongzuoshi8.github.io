var nav_phone = document.getElementById("nav-phone");
var dark_bg_nav = document.getElementById("dark-bg-nav");

nav_phone.onclick = function(){
    document.getElementsByTagName("nav")[0].style.display = "block";
    dark_bg_nav.style.display = "block";
}

dark_bg_nav.onclick = function(){
    document.getElementsByTagName("nav")[0].style.display = "none";
    dark_bg_nav.style.display = "none";
}

var smooth_bg = document.createElement("div");
smooth_bg.setAttribute("id", "smooth-bg");
document.body.appendChild(smooth_bg);