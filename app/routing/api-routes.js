//console.log('API route connected');

// import from friends array
var friendsData = require('../data/friends.js');

// Routes
function apiRoutes(app) {

  // A GET route with the url/api/friends to display a JSON of all possible friends
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });

  // A POST routes/api/friends to handle incoming survey results.
  app.post('/api/friends', function (req, res) {

  // Parse new friend input to get integers
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var scoresArray = [];
    for(var i=0; i < req.body.scores.length; i++){
      scoresArray.push( parseInt(req.body.scores[i]) )
    }
    newFriend.scores = scoresArray;

    // Check the new friend entry with the existing friends
    var scoreComparisionArray = [];
    for(var i=0; i < friendsData.length; i++){

    var currentComparison = 0;
      for(var j=0; j < newFriend.scores.length; j++){
        currentComparison += Math.abs( newFriend.scores[j] - friendsData[i].scores[j] );
      }

    // Push comparison between friends to array
      scoreComparisionArray.push(currentComparison);
    }

    // Determine the best match
    var bestMatchPosition = 0;
    for(var i=1; i < scoreComparisionArray.length; i++){
      
      if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
        bestMatchPosition = i;
      }
    }

    var bestFriendMatch = friendsData[bestMatchPosition];
    // Reply with a JSON object of the best match
    res.json(bestFriendMatch);
    // Push the new friend to the friends array
    friendsData.push(newFriend);
  });
}

// Export API Routes
module.exports = apiRoutes;