let head = document.getElementById("header");
let logo1 = document.getElementById("logo");

window.addEventListener("scroll", function (event) {
  //highlight the mouseover target
  if(scrollY > 10){
      head.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      logo1.style.width = "8rem";
  }
  if(scrollY < 10){
      head.style.background = "none";
      head.style.transition = ".5s";
      logo1.style.width = "9.2rem";
      logo1.style.transition = ".5s";
  }
});