// helper funcs
var elt = function(name, id) {
  var elt = document.createElement(name);
  if (id) {
    elt.setAttribute('id', id);
  }
  return elt;
}
function eltNS(name, id) {
  // element creation assist
  var elt = document.createElementNS("http://www.w3.org/2000/svg",name);
  if (id) {
    elt.setAttribute("id", id);
  }
  return elt;
}

// handle on body
var body = document.body;

// create header
var headDiv = elt('div', 'headDiv');
headDiv.textContent = 'The Coin-Flipper'
body.appendChild(headDiv);

// create coin button
var coinTitle = elt('div', 'coinTitle');
coinTitle.textContent = 'Click the coin to find a winner.'
body.appendChild(coinTitle);
var coinDraw = eltNS('svg', 'coinDraw');
var coinGroup = eltNS('g', 'coinGroup');
var coinOutline = eltNS('circle', 'coinOutline');
// set coin outline attributes
coinOutline.setAttribute('cx', 100);
coinOutline.setAttribute('cy', 100);
coinOutline.setAttribute('r', 100);
var coinText = eltNS('text', 'coinText');
coinText.textContent = '$';
coinText.setAttribute('x', 76);
coinText.setAttribute('y', 130);
// group svg elements and append to document
coinGroup.appendChild(coinOutline);
coinGroup.appendChild(coinText);
coinDraw.appendChild(coinGroup);
body.appendChild(coinDraw);

// create results area
var resultDiv = elt('div', 'resultDiv');
var resultTitle = elt('div', 'resultTitle');
resultTitle.textContent = 'And the winner is:'
var resultText = elt('div', 'resultText');
resultText.textContent = '...';
// combine the result elements and attach to document
resultDiv.appendChild(resultTitle);
resultDiv.appendChild(resultText);
body.appendChild(resultDiv);

// flipping logic
var coinFlip = function() {
    var headCount = 0;
    var tailCount = 0;
    while (headCount < 5 && tailCount < 5) {
        Math.round(Math.random()) ? (headCount++): (tailCount++);
    }
    if ( headCount === 5) {
        return 'Heads!';
    } else {
        return 'Tails!';
    }
}

// add click action to coin group
var coinClick = function() {
  resultText.textContent = coinFlip();
  // revert result after 2 seconds
  setTimeout(function() { resultText.textContent = '...'; }, 2000);
};
coinGroup.addEventListener('click', coinClick);
