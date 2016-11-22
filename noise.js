var playFile = function(note) {
  var filename = "#" + note + "Audio";
  $(filename).load();
  $(filename).get(0).play();
};

$(document).ready( function() {

  $('body').keydown(function(event) {
    // keycodes 65 - 71 are a-g
    if (event.which > 64 && event.which < 72) {
      //set to lower case to get capitals; these
      //are the same keycode but different key.
      var note = event.key.toLowerCase();
      playFile(note);
    }
    // console.log(event.key + ":" + event.which);
  });

  $('.note').click(function() {
    var selection = $(this).html();
    playFile(selection);
//    console.log(selection);
  });
});
