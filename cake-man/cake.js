// helper function for creating control section
function eltNS(name, className, id) {
  // element creation assist
  var elt = document.createElementNS("http://www.w3.org/2000/svg",name);
  if (className) {
    elt.setAttribute("class", className);
  }
  if (id) {
    elt.setAttribute("id", id);
  }
  return elt;
}

// create handles to document elements
var guessOutput = document.getElementsByClassName('guess-output')[0];
var cakeOutput = document.getElementsByClassName('cake-output')[0];
var answerOutput = document.getElementsByClassName('answer-output')[0];

// generate a new answer to guess
var newAnswer = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// generate data structure with new answer and equivalent guessing array
// with underscores in place of answered letters
var generateAnswer = (function() {
  var answerArray = [
    'Ruby',
    'Python',
    'Javascript',
    'C',
    'Haskell',
    'Perl',
    'Fortran',
    'Basic',
    'Swift',
    'HTML'
  ];
  return function() {
    var answer = newAnswer(answerArray).toLowerCase().split('');
    var blank = []
    for (var i = 0; i < answer.length; i++) {
      blank.push('_');
    }
    result = [answer, blank];
    return result;
  }
}());

// check a guessed input against current answer returning array with first elements
// flag of true if the letter is in the answer and needs updating or false if not
// and the letters guessed needs updating.
var checkGuess = function(answer, guess) {
  var found = false;
  for (var i = 0; i < answer[0].length; i++) {
    if (answer[0][i] === guess) {
      answer[1][i] = guess;
      found = true;
    }
  }
  return [found, answer, guess];
}

// data structure to hold game related variables
var cakeMan = {
  currAnswer: generateAnswer(),
  currGuess: [],
  currGuessTotal: 8
};

var updateGuessed = function(newGuess) {
  var alreadyGuessed = false;
  for (var i = 0; i < cakeMan.currGuess.length; i++) {
    if (newGuess === cakeMan.currGuess[i]) {
      alreadyGuessed = true;
    }
  }
  if (!alreadyGuessed) {
    cakeMan.currGuess.push(newGuess);
    cakeMan.currGuessTotal--;
  }
};

var handleGuessInput = function(answer, newGuess) {
  var result = checkGuess(answer, newGuess);
  if (result[0]) {
    // input guess found in the answer
    cakeMan.currAnswer = result[1];
  } else {
    // input guess not found in the answer
    updateGuessed(newGuess);
  }
};

var newCakeMan = function() {
  // reset game variables
  cakeMan.currAnswer = generateAnswer();
  cakeMan.currGuess = [];
  cakeMan.currGuessTotal = 8;
  window.setTimeout(updateDisplay,20);
}

var gameLoss = function() {
  // output a loss message to the answer area of the page and then set a timeout
  // function to generate a new game.
  answerOutput.textContent = 'You ate all the cake...fatDavo approves!';
  answerOutput.style.fontSize = '24px';
  window.setTimeout(newCakeMan, 2000);
};

var gameWin = function() {
  // set logic to handle game win condition
  answerOutput.textContent = 'You win this time Bond...';
  answerOutput.style.fontSize = '24px';
  window.setTimeout(newCakeMan, 2000);
};

var checkWinConditions = function() {
  // check if game has been won by matching the to answer arrays
  var matched = true;
  for (var i = 0; i < cakeMan.currAnswer[0].length; i++) {
    if (cakeMan.currAnswer[0][i] !== cakeMan.currAnswer[1][i]) {
      matched = false;
    }
  }
  if (matched) {
    // answer has been found. game has been won.
    gameWin();
    return true;
  } else if (cakeMan.currGuessTotal <= 0) {
    // out of cake. game has been lost.
    gameLoss();
    return true;
  }
};

var drawCake = function() {
  // remove children from cake-output
  while (cakeOutput.firstChild) {
    cakeOutput.removeChild(cakeOutput.firstChild);
  }

  var cakeSVG = eltNS('svg', 'cake-svg');
  if (cakeMan.currGuessTotal === 8) {
    // full guess count. output full cake.
    var cakePoly = eltNS('circle', 'cake-full');
    cakePoly.setAttribute('cx', 150);
    cakePoly.setAttribute('cy', 150);
    cakePoly.setAttribute('r', 100);
  } else {
    // draw segmented cake to represent the number of guesses remaining.
    var cakePoly = eltNS('path', 'cake-partial');
    // build path string.
    // from center
    var mvCenter = 'M150,150 ';
    // to circumference
    var ltCircum = 'L250,150 ';
    // arc to cover appropriate
    // 'Arx,ry xAxisRotate LargeArcFlag SweepFlag x,y'
    var endX = Math.cos(2 * Math.PI / 8 * cakeMan.currGuessTotal) * 100 + 150;
    var endY = Math.sin(2 * Math.PI / 8 * cakeMan.currGuessTotal) * 100 + 150;
    var endCoords = String(endX.toFixed(2)) + ',' + String(endY.toFixed(2));
    if (cakeMan.currGuessTotal > 4) {
      var arcTo = 'A100,100 0 1,1 ' + endCoords + ' z';
    } else {
      var arcTo = 'A100,100 0 0,1 ' + endCoords + ' z';
    }
    var resultPath = mvCenter + ltCircum + arcTo;
    cakePoly.setAttribute('d', resultPath);
  }
  cakeSVG.appendChild(cakePoly);
  cakePoly.setAttribute('stroke', '#FAFDFD');
  cakePoly.setAttribute('stroke-width', 10);
  cakePoly.setAttribute('fill', '#0A0D0D')
  cakeOutput.appendChild(cakeSVG);
};

var updateDisplay = function() {
  // push current game variables to the document
  // guessed array
  guessOutput.textContent = cakeMan.currGuess.join(' ');
  answerOutput.textContent = cakeMan.currAnswer[1].join(' ');
  answerOutput.style.fontSize = '60px';
  drawCake();
};

var displayKeyPress = function(key) {
  answerOutput.textContent = key;
  answerOutput.style.fontSize = '100px';
};

// attach event listeners
// key display
var inputKeyHandling = document.addEventListener('keyup', function(event) {
  var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
  displayKeyPress(keyPress);
  handleGuessInput(cakeMan.currAnswer, keyPress);
  if (!checkWinConditions()) {
    // game hasn't ended update display to current state
    window.setTimeout(updateDisplay, 500);
  }
});

// initialise game display.
window.setTimeout(updateDisplay, 500);
