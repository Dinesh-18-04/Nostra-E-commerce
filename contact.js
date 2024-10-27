var cl = document.getElementById("close");
var offertop = document.getElementById("offertop");

cl.addEventListener("click",function(event){
    console.log(offertop);
    offertop.style.display="none";
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