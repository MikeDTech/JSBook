function init()
{
  document.getElementById( "panel" ).innerHTML = "Page Intialized!";
  window.alert("DOM Loaded");
}

function loaded()
{
  window.alert("Window Loaded");
}


window.onload = loaded;
document.addEventListener("DOMContentLoaded", init, false);