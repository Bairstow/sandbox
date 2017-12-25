var scores = {
    'Bob': [3,2,6,11,9,2,6,9,10],
    'Jimbo': [5,12,9,22,13,7,16,10,11],
    'Fish': [2,2,4,5,4,3,6,4,1]
};

var course = {
    'par': [3,4,5,5,3,3,4,3,5]
};

var totalScores = function(scores) {
  var players = Object.keys(scores);
  for (var i = 0; i < players.length; i++) {
      // for each player
      var playerScores = scores[players[i]];
      var playerTotal = 0;
      for (var j = 0; j < playerScores.length; j++) {
          playerTotal += playerScores[j];
      }
      console.log(players[i] + ' had a total score of: ' + playerTotal + ' strokes.');
  }
};

// totalScores
totalScores(scores);

var againstPar = function(scores, course) {
    var players = Object.keys(scores);
    var fishWinnings = 0;
    for (var i = 0; i < players.length; i++) {
        // calculate against par for each player
        var playerScores = scores[players[i]];
        var playerParScore = 0;
        for (var j = 0; j < playerScores.length; j++) {
            playerParScore += playerScores[j] - course.par[j];
        }
        // output player par score
        if (playerParScore > 0) {
            console.log(players[i] + ' was a total of ' + playerParScore + ' over par.');
        } else if (playerParScore < 0) {
            console.log(players[i] + ' was a total of ' + playerParScore + ' under par.');
        } else {
            console.log(players[i] + ' shot even par this round.')
        }
        // calculate fish's betting take
        if (players[i] !== 'Fish') {
            fishWinnings += playerParScore;
        }
    }
    console.log();
    console.log('Fish was a bad bloke and won $' + fishWinnings + ' from his friends.');
};

// againstPar
againstPar(scores, course);
