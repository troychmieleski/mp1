$(document).ready(function() {
  var open = false;
  
  var $navItems = $('.navItems');
  
  $('.handle').on('click', function() {
    open = !open;
    var shouldOpen = open;
    var openString = shouldOpen ? 'open' : 'close';
    alert('navigation bar should be ' + openString);
    
    var maxHeight = 0;
  
    if (shouldOpen) {
      maxHeight = 5*56;
    }
    
    $navItems.css({"max-height": maxHeight});
  });
});