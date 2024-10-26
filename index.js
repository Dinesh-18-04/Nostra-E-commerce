var cl = document.getElementById("close");
var offertop = document.getElementById("offertop");
var leftar = document.getElementById("leftar");
var rightar = document.getElementById("rightar");
var slideimg = document.getElementById("slideimg");

cl.addEventListener("click",function(event){
    console.log(offertop);
    offertop.style.display="none";
})

var slide = 0;

rightar.addEventListener("click",function(){
    console.log(slide);
   slide=slide+100;
   if(slide>300){
    slide = 0;
    slideimg.style.marginLeft="0%";
   }
   else{
    slideimg.style.marginLeft="-"+slide+"%";
   }
})

leftar.addEventListener("click",function(){
    console.log(slide);
   if(slide==0){
    slide = 300;
    slideimg.style.marginLeft="-"+slide+"%";
   }
   else{
    slide=slide-100;
    slideimg.style.marginLeft="-"+slide+"%";
   }
})

var nav = document.getElementById("nav");
var closenav = document.getElementById("closenav");
var mobnav = document.getElementById("mobnav");
nav.addEventListener("click",function(){
    mobnav.style.left=0;
})
closenav.addEventListener("click",function(){
    mobnav.style.left="-50%"
})


var heartsOut = document.querySelectorAll(".heartout");
var heartsFill = document.querySelectorAll(".heartfill");

heartsOut.forEach((heartOut, index) => {
  let heartFill = heartsFill[index]; 

  heartOut.addEventListener("click", function () {
    heartOut.classList.add("hidden"); // Hide empty heart
    heartFill.classList.remove("hidden"); // Show filled heart
  });

  heartFill.addEventListener("click", function () {
    heartFill.classList.add("hidden"); // Hide filled heart
    heartOut.classList.remove("hidden"); // Show empty heart
  });
});
