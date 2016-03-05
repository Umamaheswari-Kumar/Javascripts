$.fn.download_trigger = function(fileURL, fileName) {
  if (!window.ActiveXObject) {
    var save = document.createElement('a');
    save.setAttribute("download",fileName);
    save.href = fileURL;
    save.target = '_blank';
    document.body.appendChild(save);
    var event = document.createEvent('MouseEvent');
    event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0,false, false, false, false, 0, null);
    save.dispatchEvent(event);
    (window.URL || window.webkitURL).revokeObjectURL(save.href);
    document.body.removeChild(save);
  } else if ( !! window.ActiveXObject && document.execCommand)     {
    var _window = window.open(fileURL, '_blank');
    _window.document.close();
    _window.document.execCommand('SaveAs', true, fileName || fileURL)
    _window.close();
  }
}