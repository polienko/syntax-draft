/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.getElementById('menu').innerHTML += '<span id="ico"><a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a></span><div id="myLinks"><a href="index.html">DATATYPES</a><a href="conditions.html">CONDITIONS</a></div>';