'use strict';
$(document).ready(function() {

  $.fn.addEvent = function (obj, evType, fn) {
    if (obj.addEventListener) {
      obj.addEventListener(evType, fn, false);
      return true;
    } else if (obj.attachEvent) {
      var r = obj.attachEvent('on'+evType, fn);
      return r;
    } else {
      return false;
    }
  };

  $.fn.KeepOnPage = function (e) {
    var doWarn = 1;
    if (!e) {
      e = window.event;
    }
    if (!e) {
      return;
    }
    if (doWarn == 1) { // and condition whatever you want to add here
      e.cancelBubble = true;
      e.returnValue = 'Warning!\n\nNavigating away from this page will delete your text if you haven\'t already saved it.';
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  };

  $.fn.addEvent(window, 'beforeunload', $.fn.KeepOnPage);
});
