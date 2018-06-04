var path = require("path");

var possibleMatches = require("../data/friend");


module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(possibleMatches);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    var responses = newFriend.scores
    var matchName = "";
    var matchPhoto = "";
    var initDiff = 10000;

    for (var i =0; i<possibleMatches.length; i++){
      var diff = 0;
      for(var j = 0; j < responses.length; j++){
        diff += Math.abs(possibleMatches[i].scores[j] - responses[j]);
      }

      if (diff<initDiff){

        initDiff = diff;
        matchName = possibleMatches[i].name;
        matchPhoto = possibleMatches[i].photo;
      }
    }

    possibleMatches.push(newFriend);

    res.json({status: "OK", matchName: matchName, matchPhoto: matchPhoto});

  });

  app.post("/api/clear", function() {
    possibleMatches = [];
    
    console.log(possibleMatches);
  });
};
