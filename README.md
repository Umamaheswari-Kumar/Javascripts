before-browser-unload-warn-js
-----------------------------
Before Browser unload warn used to warn user try to close the tab or browser.
Dependencied: JQuery

download_file_trigger.js
------------------------
Download Trigger function is used to trigger download after ajax success / onclick by verifying the form fields.
Dependencies: JQuery
Example:
        $.fn.download_trigger(FILE_URL,FILENAME);
        
image_fader_on_scroll.js
------------------------
Image Fader on Scroll is used to fade out image on scroll. It require two image one original image, and blurred image.(Set Maximum height for two images)
Dependencies: JQuery
Css: 
.blurred {
  background:url(blurred.jpg) no-repeat 40% 40%;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transform: translate3d(0,0,0);
  background-size: cover;
}
Note: blurred.jpg is blurred image, original.jpg is original image
Example: 
        <div class="carousel-inner" style="background: transparent;">
          <img src="original.jpg" alt="Original" style="opacity: 1">
          <div class="blurred"></div>
        </div>

set_maximum_limit_for_text_fields.js
------------------------------------
Set maximum Limit Script Used to prevent the type text in text field or text area if reaches the maximum text.
Example:
  $('#text_field_id').limit({
    limit: 300
  })