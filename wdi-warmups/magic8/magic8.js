// data set
var eightBallOutputs = [
  "No",
  "Not today",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

// grab handle to DOM elements
var eightBall = document.getElementsByClassName('eight-ball-img')[0];
var output = document.getElementsByClassName('output')[0];

// add listener to dump random eight ball output to the page
eightBall.addEventListener('click', function() {
  var randOut = eightBallOutputs[Math.floor(Math.random() * eightBallOutputs.length)];
  output.textContent = randOut;
});
