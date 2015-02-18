$(document).ready(function() {
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
});