function init()
{
    document.getElementById( "panel" ).innerHTML = "Page Intialized!";
    window.alert("DOM Loaded");
}

function loaded()
{
    window.alert("Window Loaded");
    document.getElementById( "panel2" ).innerHTML = "Page Fully Loaded!";
}

window.onload = loaded;  // run after entire page has loaded
document.addEventListener("DOMContentLoaded", init, false);  //runs when page starts loading