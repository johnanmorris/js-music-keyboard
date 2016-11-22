var audioFile = function(note) {
  return "#" + note + "Audio";
};

var playFile = function(filename) {
  $(filename).load();
  $(filename).get(0).play();
};

$(document).ready( function() {

  $('body').keydown(function(event) {
    // keycodes 65 - 71 are a-g
    if (event.which > 64 && event.which < 72) {
      var note = event.key.toLowerCase();
      var audio = audioFile(note);
      playFile(audio);
    }
    // console.log(event.key + ":" + event.which);
  });

  $('.note').click(function() {
    var selection = $(this).html();
    var audio = audioFile(selection);
    playFile(audio);
    console.log(selection);
  });
});
