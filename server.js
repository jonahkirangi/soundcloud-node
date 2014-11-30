var express = require("express");
var app = express();
// var config = require("./config");
// var sc = require("soundclouder");

// var SC = new sc(config);

app.use(express.static(__dirname + "/app"));

// SC.get("/tracks", { genres: "goo" }, function(tracks) {
//   $(tracks).each(function(index, track) {
//     $("#results").append($("<li></li>").html(track.title + " - " + track.genre));
//   });
// });

// Start server
app.listen(3000);
console.log("Server running on port 3000");
