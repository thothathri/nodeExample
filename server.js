// Returning the first value of the respone from https://itunes.apple.com/search?term=eminem&entity=musicVideo
var express = require('express');
var request = require('request');

var app = express();

app.listen(3000, function(){
  console.log("listening on port 3000");
});

app.get('/', function(req, res) {
  var url = "https://itunes.apple.com/search?term=eminem&entity=musicVideo";
  request(url, function(error, response, body){
    if(error) {
      console.log(error);
      res.json({error: "ERROR"});
    }

    data = JSON.parse(body);

    res.json({
      mostRecent: {
        name: data.results[0].artistName,
        collection: data.results[0].collectionName,
        track: data.results[0].trackName
      }
    });
  });
});
