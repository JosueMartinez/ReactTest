// Auto update layout
if (window.layoutHelpers) {
  window.layoutHelpers.setAutoUpdate(true);
}


function ConvertToTimespan(secs) {
  var timespan = secs.replace('s', '');
  timespan = moment.utc(timespan * 1000).format('HH:mm:ss');
  return timespan;
}

function showPanel(panelName){
    var panelId = '#' + panelName;
    //when clicked close if opened, open otherwise
    if ($(panelId).hasClass('reveal')) {
      OriginalTransciptBody();
      $(panelId).removeClass('reveal');
      
    } else {
      ResizeTransciptBody();
      $(panelId).addClass('reveal');
    }

    //close any other open panel
    $( "[id*=Panel][id!="+panelName+"]").removeClass('reveal');
}


function ResizeTransciptBody(){
  $(".transcript-body").removeClass("original");
  $(".transcript-body").addClass("resized");
}

function OriginalTransciptBody(){
  $(".transcript-body").removeClass("resized");
  $(".transcript-body").addClass("original");
}

