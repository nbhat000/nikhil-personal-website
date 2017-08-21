window.onload = function() {
  audioPlayer();
  function audioPlayer() {
    var currentSong=0;
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    // $("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $("#audioPlayer")[0].src = this;
      $("#audioPlayer")[0].play();
      $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
      $('#album-cover').attr('src', `images/music/albumcovers/${$(this,'img').attr('title')}.jpg`);
      console.log($(this,'img').attr('title'));
      return false;
    });

    // alert($("#audioPlayer")[0].duration);

    $("#audioPlayer")[0].addEventListener("ended", function() {
      currentSong++;
        if(currentSong == $("#playlist li a").length) {
          currentSong = 0;
        };
        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
      });
    };

    // $("#audioPlayer")[0].addEventListener('loadedmetadata', function() {
    //   $("#low").text(this.duration);
    //   console.log(this.duration + " seconds.");
    // });

  //
  // var audio = new Audio();
  // audio.src = "music/low-bonfire.wav";
  // audio.addEventListener('loadedmetadata', function() {
  //   console.log("Playing " + audio.src + ", for: " + audio.duration + "seconds.");
  //   // audio.play();
  // });

};
