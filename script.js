// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).ready(function(){
    $('.parallax').parallax();
  });
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery
$(document).ready(function(){
    $('.carousel').carousel();
  });
  var instance = M.Carousel.getInstance(elem);

  /* jQuery Method Calls
    You can still use the old jQuery plugin method calls.
    But you won't be able to access instance properties.

    $('.carousel').carousel('methodName');
    $('.carousel').carousel('methodName', paramName);
  */
     
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
        
    M.toast({html: 'Hi Alex!'})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });

  // Or with jQuery

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });
var instance = M.Materialbox.getInstance(elem);

    /* jQuery Method Calls
      You can still use the old jQuery plugin method calls.
      But you won't be able to access instance properties.

      $('.materialboxed').materialbox('methodName');
      $('.materialboxed').materialbox('methodName', paramName);
    */
           instance.open();
           instance.destroy();
           instance.destroy();