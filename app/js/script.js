function playSomeSound(genre) {
  SC.get("/tracks", {
    genres: genre,
    bpm: {
      from: 100
    }
  }, function(tracks) {
    var random = Math.floor(Math.random() * 49);
    SC.oEmbed(tracks[random].uri, { auto_play: true }, document.getElementById("target"));
  });
}

window.onload = function() {
  SC.initialize({
    client_id: "680a993566504ca7b4d23059b96ae53b"
  });

  var menuLinks = document.getElementsByClassName("genre");
  for (var i = 0; i < menuLinks.length; i++) {
    var menuLink = menuLinks[i];
    menuLink.onclick = function(e) {
      e.preventDefault();
      playSomeSound(menuLink.innerHTML);
    };
  }
};
