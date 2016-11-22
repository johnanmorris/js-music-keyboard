var audioFile = function(note) {
  return "#" + note + "Audio";
};

var playFile = function(filename) {
  $(filename).load();
  $(filename).get(0).play();
};

$(document).ready( function() {

  $('body').keydown(function(event) {
    if (event.which > 64 && event.which < 72) {
    var audio = audioFile(event.key);
    playFile(audio);
    console.log(event.key);
    }
  });

  $('.note').click(function() {
    var selection = $(this).html();
    var audio = audioFile(selection);
    playFile(audio);
    console.log(selection);
  });
});
