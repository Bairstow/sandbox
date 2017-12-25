// grab document elements
var question = document.getElementById('question');
var qButton = document.getElementById('question-button');
var response = document.getElementById('response');

// response logic
var respond = (function() {
  var responses;
  var questions;
  var currResponse;
  var numOffer;

  return function(question) {
    // initialisation
    if (!responses) {
      responses = [
        'tildlely de, potatoes',
        '...',
        'Just the luck of the Irish.',
        'Look, Leprechaun!'
      ];
    }
    if (!questions) {
      questions = [
        'Happy St Patrick\s Day',
        'Do you want a pint of Guinness?',
        'Paddy, it\'s your round.'
      ];
    }
    if (!currResponse) {
      currResponse = responses[1];
    }
    if (!numOffer) {
      numOffer = 0;
    }

    // case check question number and return appropriate response
    switch (question) {
      case questions[0]:
        currResponse = responses[0];
        break;
      case questions[1]:
        if (numOffer === 0) {
          currResponse = responses[1];
          numOffer++;
          break;
        } else {
          currResponse = responses[2];
          numOffer = 0;
          break;
        }
      case questions[2]:
        currResponse = responses[3];
        break;
      default:
        currResponse = responses[1];
    }
    return currResponse;
  }
}());

// link input and button to response logic
qButton.addEventListener('click', function() {
  // grab question input.
  var currQ = question.value;
  var currResponse = respond(currQ);
  // clear response section and output Paddy's answer there
  response.textContent = '';
  response.textContent = currResponse;
});
