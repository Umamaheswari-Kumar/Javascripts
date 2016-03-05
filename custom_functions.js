jQuery.fn.extend({
  swapText: function(){
    var element = $(this);
    setInterval(function() {
      var $active = element.find('.active');
      var $next = $active.next().length > 0 ? $active.next() : element.children(':first-child');
      $active.fadeOut(function() {
        $active.removeClass('active');
        $next.fadeIn().addClass('active');
      });
    }, 3000);
  },
  toggleText: function() {
    var altText = this.data('alt-text'); // add data-toggle="toggleText", and set data-alt-text="xxxx"
    if (altText) {
      this.data('alt-text', this.html());
      this.html(altText);
    }
  },
  // Detect keyboard keypress and check with regex and allow those key presses
  // for alphanumeric regex = /^[a-zA-Z0-9]+$/
  // for numeric only = /^[0-9]+$/
  // for alpha only = /^[a-zA-Z]+$/
  // backspace 8, tab 9, end 35, home 36, left 37, up 38, right 39, down 40, delete 46, enter 13
  allowKeyboardKeys: function(evt, regexString) {
    evt = evt || window.event;
    var keyCode = evt.keyCode || evt.which;
    if ( (keyCode === 8 || keyCode === 9 || keyCode === 13 || ( keyCode >= 35 && keyCode <= 40 ) || keyCode === 46) && !evt.shiftKey) {
      return;
    }
    var regex = new RegExp(regexString);
    var str = String.fromCharCode(keyCode);
    if (regex.test(str)) {
      return true;
    }
    evt.preventDefault();
    return false;
  }
}); 