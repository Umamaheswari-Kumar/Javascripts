$.fn.limit = function(options) {
  var defaults = {
    limit: 200,
    id_result: false
  }
  var options = $.extend(defaults,  options);
  return this.each(function() {
    var characters = options.limit;
    var random_number = Math.floor((Math.random() * 1000) + 1);
    if(!options.id_result) {
      $(this).after($('<div>', { id: "limitCount_"+random_number }).addClass('text-right').css({'color':'green'}).append("You have <strong>"+(characters - $(this).val().length)+"</strong> characters remaining"));
    } else {
      $("#"+options.id_result).css({'color':'green'}).append("You have <strong>"+(characters - $(this).val().length)+"</strong> characters remaining");
    }
    // execute after every key up
    $(this).keyup(function() {
      if($(this).val().length > characters) {
        $(this).val($(this).val().substr(0, characters));
      }
      var remaining = characters - $(this).val().length;
      if(!options.id_result) {
        $('#limitCount_'+random_number).html("You have <strong>"+(characters - $(this).val().length)+"</strong> characters remaining");
        if(remaining <= 10) {
          $('#limitCount_'+random_number).css({'color':'red'});
        } else {
          $('#limitCount_'+random_number).css({'color':'green'});
        }
      } else {
        $("#"+options.id_result).html("You have <strong>"+remaining+"</strong> characters remaining");
        if(remaining <= 10) {
          $("#"+options.id_result).css({'color':'red'});
        } else {
          $("#"+options.id_result).css({'color':'green'});
        }
      }
    });
  });
}
