$(document).ready(function() {

// call the scrollspy
$('body').scrollspy({ target: '#navbar-collapse' });

// call the carousel
$('.carousel').carousel();

change the color of the nav menu on light images
$('#carousel-example-generic').on('slide.bs.carousel', function(e) {
      if(e.relatedTarget.id == 'slide1'|| e.relatedTarget.id ==  'slide3'){
        $("#nav-wrapper .nav-transparent .navbar-nav a ").css('color', 'white');
        $("#nav-wrapper a.navbar-brand").css('color', 'white');
      } else {
          $("#nav-wrapper .nav-transparent .navbar-nav a ").css('color', '#323232');
          $("#nav-wrapper a.navbar-brand").css('color', '#323232');
      }
})

// animate the progress bars
  $('.progress .progress-bar').css("width",
    function() {
      return $(this).attr("aria-valuenow") + "%";
    }
  );



});
