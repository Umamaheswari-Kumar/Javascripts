# Useful Javascripts:

#### before-browser-unload-warn-js
__underline__
Before Browser unload warn used to warn user try to close the tab or browser.__
Dependencied: JQuery__

download_file_trigger.js
__underline__
Download Trigger function is used to trigger download after ajax success / onclick by verifying the form fields.__
Dependencies: JQuery__
Example:__
```html
<pre>
  <srcript>
    $(document).ready(function() {
      $.fn.download_trigger(FILE_URL,FILENAME);
    });
  </srcript>
</pre>
```

image_fader_on_scroll.js
__underline__
Image Fader on Scroll is used to fade out image on scroll. It require two image one original image, and blurred image.(Set Maximum height for two images)__
Dependencies: JQuery__
Example: __
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

<pre>
    <div class="carousel-inner" style="background: transparent;">
      <img src="original.jpg" alt="Original" style="opacity: 1">
      <div class="blurred"></div>
    </div>
</pre>
```
Note: blurred.jpg is blurred image, original.jpg is original image.__

set_maximum_limit_for_text_fields.js
__underline__
Set maximum Limit Script Used to prevent the type text in text field or text area if reaches the maximum text.__
Example:__
```html
<pre>
  <script>
    $(document).ready(function() {
      $('#text_field_id').limit({
        limit: 300
      })
    })
  </script>
</pre>
```

Parsley_validation_for_one_field_over_multiple_field.html
__underline__
If we need to check only one field accross multiple fields using parsley can be done by write a script like in these file.__
Dependencies: JQuery and Parsley.js__

custom_function.js
__underline__
Custom function contain three function__
1) Toggle Function:__
  ```html
  <pre>
    <a href="javascript:void(0);" data-toggle="toggleText" data-alt-text="Read Less">Read More</a>
  </pre>
  ```
2) Swap Text:__
  ```html
  <pre>
    <div class="col-md-5 col-xs-12 textChange">
      <span class="active">Thangadurai</span>
      <span style="display: none;">Paranthaman</span>
      <span style="display: none;">Nainamalai</span>
    </div>
    <script>
      $('.textChange').swapText();
    </script>
  </pre>
  ```
3) Allow Keyboard keypress by REGEX.__
  Allow only alphabets, and backspace/delete/home/end.__
  ```html
  <pre>
    <input name="name" onkeypress="$(this).allowKeyboardKeys(event, '^[a-zA-Z. ]+$')" placeholder="Full Name" type="text">
  </pre>
  ```
  Allow only Numbers, and backspace/delete/home/end.__
  ```html
  <pre>
    <input name="phone" onkeypress="$(this).allowKeyboardKeys(event, '^[0-9]+$')" placeholder="Phone (include country code)" type="text">
  </pre>
  ```