$(document).ready(function(){


    // navbar button toggle
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('change')

    })

    // sticky navbar less padding
    $(window).scroll(function(){
        let position = $(this).scrollTop();
         if(position >= 718) {
             $('.navbar').addClass('navbar-background');
             $('.navbar').addClass('fixed-top');
         } else {
             $('.navbar').removeClass('navbar-background');
             $('.navbar').removeClass('fixed-top')
         }
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

