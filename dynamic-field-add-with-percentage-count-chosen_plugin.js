$(document).ready(function() {
  chosen_function_technology = function(n, select_id, project_id){
    $(project_id).keyup(function() {
      if($(select_id).val() != '' && $(project_id).val() == '') {
        $(project_id).attr('required',true);
      }
    });
    $(select_id).chosen().change(function() {
      $(project_id).val("").attr('placeholder','No of '+$(this).parent().find('a.chosen-single span').text().replace('Select an Option', '')+' projects developed').attr('required',true);
      for(k=1;k<=5;k++) {
        if($('#top_tech_'+k).val() == $(this).val() && k != n) {
          $(this).val("");
          $(this).parent().find('a.chosen-single span').text("Select an Option");
          $(this).parent().find('a.chosen-single').addClass("chosen-default");
          $('.top_tech_error').text("You have already selected this option").css('color','red').slideDown(100).delay(2000).slideUp(100);
          $(project_id).val("").attr('placeholder','No of '+$(this).parent().find('a.chosen-single span').text().replace('Select an Option', '')+' projects developed').removeAttr('required');
          return;
        }
      }
    });
  }
  function_percent_count = function(select_id,field_name){
    var count = 0;
    if($('#'+select_id).val()) {
      $('#'+select_id).val().forEach(function(x) {
        if($('input[name = "vendor['+field_name+'_percent_'+x+']"]').val() != '') {
          count = count + parseInt($('input[name = "vendor['+field_name+'_percent_'+x+']"').val());
        }
      });  
    }
    if (count > 100) {
      count = 0;
      $('.'+field_name+'_count-error').append("<div class='half-spaced message'>Total percentage must be equal to 100</div>").css('color','red');
      $('#'+select_id).val().forEach(function(clear){
        $('input[name = "vendor['+field_name+'_percent_'+clear+']"').val("");
      });
      setTimeout(function(){
        $('.'+field_name+'_count-error .message').remove();
      },4000);
    }
    $('.'+field_name+'_count').text(count);
  }
  function_percent_onkeyup_count = function(select_id, field_name, entry) {
    $('input[name = "vendor['+field_name+'_percent_'+entry+']"]').keyup(function() {
      function_percent_count(select_id, field_name);
    });
  }
  chosen_get_percentage_count = function(select_id, field_name){
    function_percent_count(select_id, field_name);
    if($('#'+select_id).val()) {
      $('#'+select_id).val().forEach(function(entry) {
        function_percent_onkeyup_count(select_id, field_name, entry);
      });
    }
  }
  chosen_get_percentage = function(select_id, field_name){
    $("#"+select_id).chosen({
      width: '100%',
      display_selected_options: false
    }).change(function(e, params){
      if(params.selected) {
        $('.'+field_name+'_text_box').append("<div class='form-group' id="+field_name+"_form_group_"+params.selected+"><label class='col-sm-4 col-xs-6 control-label text-awesome left-align'>"+$(this).parent().find('li.search-choice span:last').text()+"</label><div class='col-sm-4 col-xs-4'><input name='vendor["+field_name+"_percent_"+params.selected+"]' class='form-control' data-type='digits' placeholder='20' style='height: 29px;' required /></div></div>");
        chosen_get_percentage_count(select_id,field_name);
      } else {
        $('#'+field_name+'_form_group_'+params.deselected).remove();
        chosen_get_percentage_count(select_id,field_name);
      }
    });
    chosen_get_percentage_count(select_id, field_name);
  }
  for (i = 1; i <= 5; i++) {
    chosen_function_technology(i, "#top_tech_"+i, "#top_tech_project_"+i)
  }
  chosen_get_percentage('industries_vendor_industry','industry');
  chosen_get_percentage('delivery_models_vendor_delivery_model','delivery_model');
  chosen_get_percentage('customer_segments_vendor_customer_segment','customer_segment');
  chosen_get_percentage('services_vendor_serves','service');
  $(".dropdown-awesome-fullwidth-api").chosen({
    width: '100%',
    display_selected_options: false
  }).attr("data-placeholder", "Add any connectors / APIs you are familiar with. Ex: Twitter API");
  $('.dropdown-awesome-fullwidth').chosen({
    width: "100%",
    display_selected_options: false
  }).attr("title","Select Frameworks...");
  $("#vendor_project_size").chosen({disable_search: true, width: '200px'});
  $("#vendor_founded").trigger("chosen:updated");
  $('#edit_vendor_1').parsley();
});