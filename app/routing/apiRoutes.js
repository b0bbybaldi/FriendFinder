var possibleMatches = require("../data/friends");


module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(possibleMatches);
  });

  app.post("/api/friends", function(req, res) {
    res.json(possibleMatches);
  });

  app.post("/api/clear", function() {
    possibleMatches = [];
    
    console.log(possibleMatches);
  });
};
