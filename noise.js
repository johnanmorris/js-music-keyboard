var notes = ["a", "b", "c", "d", "e", "f", "g"];

var audioFile = function(num) {
  return "#" + notes[num] + "Audio";
};

$(document).ready( function() {
  $('body').keydown(function(event) {
    for (var i = 0; i < notes.length; i++) {
      if (event.key == notes[i]) {
        var audio = audioFile(i);
        $(audio).load();
        $(audio).get(0).play();
        console.log(notes[i] + " played");
      }
    }
  });

  $('.a').click(function() {
    var audio = "#aAudio";
    $(audio).load();
    $(audio).get(0).play();
    console.log("a played");
  });

  $('.b').click(function() {
    var audio = "#bAudio";
    $(audio).load();
    $(audio).get(0).play();
    console.log("b played");
  });

  $('.c').click(function() {
    var audio = "#cAudio";
    $(audio).load();
    $(audio).get(0).play();
    console.log("c played");
  });

  $('.d').click(function() {
    var audio = "#dAudio";
    $(audio).load();
    $(audio).get(0).play();
    console.log("d played");
  });

  $('.e').click(function() {
    var audio = "#eAudio";
    $(audio).load();
    $(audio).get(0).play();
    console.log("e played");
  });

  $('.f').click(function() {
    var audio = "#fAudio";
    $(audio).load();
    $(audio).get(0).play();
    console.log("f played");
  });

  $('.g').click(function() {
    var audio = "#gAudio";
    $(audio).load();
    $(audio).get(0).play();
    console.log("g played");
  });
});
