$.fn.fader = function(dom_element) {
  var r = $(dom_element), wh = $(window).height(), dt = $(document).scrollTop(), elView, opacity;
  r.each(function() {
    elView = wh - ($(this).offset().top -dt + 550);
    if(elView > 0) {
      opacity = 1 / (wh + $(this).height()) * elView * 2
      if(opacity < 1) $(this).css('opacity', opacity)
    }
  });
}
$(document).bind('scroll', $.fn.fader('section.careers .carousel .carousel-inner .blurred'));