SC.initialize({
  client_id: '680a993566504ca7b4d23059b96ae53b'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'tom' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});
