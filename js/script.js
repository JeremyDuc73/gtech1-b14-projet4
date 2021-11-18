// NAVBAR RESPONSIVE
$(document).ready(function(){
  $('.sidenav').sidenav();
});

//menu déroulant cartes accueil
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
  });
});

// SCRIPT CAROUSEL PROJETS ACCUEIL
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

//Parallax projet perso
$(document).ready(function(){
  $('.parallax').parallax();
});

//collapse page projet
$(document).ready(function(){
  $('.collapsible').collapsible();
});

//zoom imqge
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

//modal
$(document).ready(function(){
  $('.modal').modal();
});
