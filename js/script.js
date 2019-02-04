$(document).ready(function(){


    // navbar button toggle
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('change')

    })

    // ripple in header
    $("#header, .info").ripples({
        dropRadius: 20,
        perturbance: 0.0005,
 
      });

   // magnific popup
   $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image', 

    gallery: {
        enabled: true
    }
    // other options
  });
  
  




});

