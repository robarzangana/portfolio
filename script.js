window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 470 || document.documentElement.scrollTop > 470) {
    document.getElementById("nav").className = "nav-alt";
  } else {
    document.getElementById("nav").className = "nav";
  }
}