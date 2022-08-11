// JavaScript Document

// Sticky nav
$(document).ready(function() {
  var stickyNavTop = $('#header').offset().top;
   
  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();
        
  if (scrollTop > stickyNavTop) { 
      $('#header').addClass('sticky');
  } else {
      $('#header').removeClass('sticky'); 
  }
  };
   
  stickyNav();
   
  $(window).scroll(function() {
      stickyNav();
  });
});


// Search form
$(document).ready(function() {
  $('.search-block').on('click', '.search-toggle', function(e) {
    var selector = $(this).data('selector');

    $(selector).toggleClass('view').find('.search-input').focus();
    $(this).toggleClass('active');

    e.preventDefault();
  });
});
// Search form


/* Page Active Color */
$(document).ready(function() {
    
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();
      // Account for home page with empty path
      if ( path == '' ) {
            path = 'index.php';
      }
          
      var target = $('.main-nav a[href="'+path+'"]');
      // Add active class to target link
      target.addClass('active');
});
/* Page Active Color */


/* Main Slider */
$(document).ready(function() {
  $("#main-slider").owlCarousel({
    goToFirstSpeed: 80,
    slideSpeed : 80,
    autoPlay: true,
    items : 1,
    autoHeight: true,
    navigation: false,
    navigationText: ["‹","›"],
    pagination: true,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet : [768, 1],
    itemsMobile : [600, 1]
  });
});
/* Main Slider */


/* Tour Slider */
$(document).ready(function() {
  $("#tours-carousel").owlCarousel({
    goToFirstSpeed: 80,
    slideSpeed : 80,
    autoPlay: true,
    items : 3,
    navigation: true,
    navigationText: ["‹","›"],
    pagination: false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    itemsTablet : [768, 2],
    itemsMobile : [600, 1]
  });
});
/* Tour Slider */

/* Testimonials Carousel */
$(document).ready(function() {
  $("#testimonials-carousel").owlCarousel({
    goToFirstSpeed: 80,
    slideSpeed : 80,
    autoPlay: true,
    items : 1,
    navigation: false,
    navigationText: ["‹","›"],
    pagination: true,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet : [768, 1],
    itemsMobile : [600, 1]
  });
});
/* Testimonials Carousel */


// $(document).ready(function() {
// 	/* wow
// 	-------------------------------*/
// 	new WOW().init();
// });