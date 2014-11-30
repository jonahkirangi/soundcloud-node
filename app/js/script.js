SC.initialize({
  client_id: "680a993566504ca7b4d23059b96ae53b"
});

$(document).ready(function() {
  SC.get('/tracks/293', function(track, error) {
    if (error) {
      alert("Error: " + error.message);
    } else {
      $('#player').html(SC.oEmbed(track.permalink_url, document.getElementById('player')));
    }
  });
});
