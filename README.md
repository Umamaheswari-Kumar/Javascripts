# Useful Javascripts:
=====================

#### before-browser-unload-warn-js
----------------------------------
Before Browser unload warn used to warn user try to close the tab or browser.<br/>
Dependencied: JQuery<br/>

#### download_file_trigger.js
-----------------------------
Download Trigger function is used to trigger download after ajax success / onclick by verifying the form fields.<br/>
Dependencies: JQuery<br/>
Example:<br/>
```html
<srcript>
  $(document).ready(function() {
    $.fn.download_trigger(FILE_URL,FILENAME);
  });
</srcript>
```

#### image_fader_on_scroll.js
-----------------------------
Image Fader on Scroll is used to fade out image on scroll. It require two image one original image, and blurred image.(Set Maximum height for two images)<br/>
Dependencies: JQuery<br/>
Example:<br/>
```html
<style>
.blurred {
  background:url(blurred.jpg) no-repeat 40% 40%;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transform: translate3d(0,0,0);
  background-size: cover;
}
</style>

<div class="carousel-inner" style="background: transparent;">
  <img src="original.jpg" alt="Original" style="opacity: 1">
  <div class="blurred"></div>
</div>
```
Note: blurred.jpg is blurred image, original.jpg is original image.<br/>

#### set_maximum_limit_for_text_fields.js
-----------------------------------------
Set maximum Limit Script Used to prevent the type text in text field or text area if reaches the maximum text.<br/>
Example:<br/>
```html
<script>
  $(document).ready(function() {
    $('#text_field_id').limit({
      limit: 300
    })
  })
</script>
```

#### Parsley_validation_for_one_field_over_multiple_field.html
--------------------------------------------------------------
If we need to check only one field accross multiple fields using parsley can be done by write a script like in these file.<br/>
Dependencies: JQuery and Parsley.js<br/>

#### custom_function.js
----------------------
Custom function contain three function<br/>
* 1) Toggle Function:<br/>
  ```html
  <pre>
    <a href="javascript:void(0);" data-toggle="toggleText" data-alt-text="Read Less">Read More</a>
  </pre>
  ```
  <br/>
* 2) Swap Text:<br/>
  ```html
  <div class="col-md-5 col-xs-12 textChange">
    <span class="active">Thangadurai</span>
    <span style="display: none;">Paranthaman</span>
    <span style="display: none;">Nainamalai</span>
  </div>
  <script>
    $('.textChange').swapText();
  </script>
  ```
  <br/>
* 3) Allow Keyboard keypress by REGEX.<br/>
  Allow only alphabets, and backspace/delete/home/end.<br/>
  ```html
  <input name="name" onkeypress="$(this).allowKeyboardKeys(event, '^[a-zA-Z. ]+$')" placeholder="Full Name" type="text">
  ```
  Allow only Numbers, and backspace/delete/home/end.<br/>
  ```html
  <input name="phone" onkeypress="$(this).allowKeyboardKeys(event, '^[0-9]+$')" placeholder="Phone (include country code)" type="text">
  ```

#### dynamic-field-add-with-percentage-count_chosen_plugin.js
-------------------------------------------------------------
This is custom code only for my website. Like the sample script, create a new field in chosen plugin.<br/>
Dependencies: JQuery and Jquery Chosen.js