
document.querySelector(".bars__menu").addEventListener("mouseenter", animateBars);
var line1__bars= document.querySelector(".line1__bars-menu");
var line2__bars= document.querySelector(".line2__bars-menu");
var line3__bars= document.querySelector(".line3__bars-menu");
var menu = document.querySelector(".menu")

function animateBars(){
   line1__bars.classList.toggle("activeline1__bars-menu");
   line2__bars.classList.toggle("activeline2__bars-menu");
   line3__bars.classList.toggle("activeline3__bars-menu");
   menu.classList.toggle("menu")

}

document.querySelector(".section").addEventListener("mouseleave", animateBars);

       
var slideIndex = 1;
showSlides(slideIndex,1);
showSlides(slideIndex,2);
showSlides(slideIndex,3);
showSlides(slideIndex,4);
// Next/previous controls
function plusSlides(n, s) {
  showSlides(slideIndex += n,s);
}

// Thumbnail image controls
function currentSlide(n,s) {
  showSlides(slideIndex = n,s);
}

function showSlides(n,s) {
  var i;
  var slidesC = document.getElementById("s"+s);
  var slides= slidesC.getElementsByClassName("mySlides")
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

 document.getElementById("btnequipos").addEventListener("click",function(){
let participantes= document.getElementById("participantes").value;
 let arrparticipantes= participantes.split(",");
 let cantparticipantes= arrparticipantes.length;
 let tamanoequipos= Math.floor(cantparticipantes/2);
 const shuffled = arrparticipantes.sort(() => 0.5 - Math.random());
 let grupo1 = shuffled.slice(0, tamanoequipos);
 let grupo2 = shuffled.slice(tamanoequipos); 
document.getElementById("equipo1").innerHTML+= grupo1;
document.getElementById("equipo2").innerHTML+=grupo2;

} )


