var express = require("express");
var app = express();

// Express Settings
app.use(express.static(__dirname + "/app"));

// Start server
app.listen(3000);
console.log("Server running on port 3000");
