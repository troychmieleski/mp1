$(document).ready(function() {
  // --- Navigation ---
  var open = false;
  
  var $navItems = $('.navItems');
  
  $('.handle').on('click', function() {
    open = !open;
    var shouldOpen = open;
    var openString = shouldOpen ? 'yes' : 'no';
    
    console.log('should open: ' + openString);
    
    var maxHeight = "0px";
  
    if (shouldOpen) {
      maxHeight = "280px"; /* 5 (number of nav items) * 56 (height of nav bar) = 280 */
    }
    
    //$navItems.css({"max-height": maxHeight});
      $('nav ul').toggleClass('showing');
  });
  
  // --- Image carousel ---
  carousel();
});

function carousel() {  
  var intervalSpeed = 3000;
  var width = "720px";
  var animationSpeed = 1000;
  var currentSlide = 1;
  
  // cache DOM elements
  var $carousel = $('.carousel');
  var $carouselImages = $carousel.find('.carouselImages');
  var $carouselImage = $carouselImages.find('carouselImage');
  
  // carousel animation interval
  var interval;
  
  function startCarousel() {
      interval = setInterval(function() { 
      // animate margin-left property to slide carousel images
      $carouselImages.animate({'margin-left': '-='+width}, animationSpeed, function() {
        currentSlide++;
        var numberOfCarouselImages = $carouselImages.find('li').length;
        
        // reset image carousel after sliding through all images
        if (currentSlide === numberOfCarouselImages) {
          currentSlide = 1;
          $carouselImages.css('margin-left', 0);
        }      
      });
    }, intervalSpeed);
  }

  function stopCarousel() {
    clearInterval(interval);
  }
  
  // stop carousel on mouseover
  $carousel.on('mouseenter', stopCarousel);
  
  // start carousel on mouseleave
  $carousel.on('mouseleave', startCarousel);

  // carousel should be started initially
  startCarousel();
}