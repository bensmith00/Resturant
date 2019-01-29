$(document).ready(function(){
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

