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

// create handles to navigation elements
var navPlayer = document.getElementsByClassName('nav-player')[0];
var navSlider = document.getElementsByClassName('nav-slider')[0];
var navDance = document.getElementsByClassName('nav-dance')[0];
var scene = document.getElementsByClassName('scene')[0];
var sky = document.getElementsByClassName('sky')[0];
var dogImage = document.getElementsByClassName('dog-image')[0];
var danceToggle = document.getElementsByClassName('nav-dance-toggle')[0];

// define dog object
var dog = {
  sleep: 'images/dog-sleep-transp.gif',
  walk: 'images/dog-walk-transp.gif',
  dance: 'images/dog-pee-transp.gif',
  direction: -1,
  cycle: 20,
  wakeDog: null,
  sleepDog: null,
  danceDog: null,
  walkDog: null,
  dancing: false,
  firstCall: true
};

// handle dog display when the stop button is height
var dogStop = function() {
  console.log('Stopping dog.');
  // clear current dog cycles and set the dog to sleep
  clearTimeout(dog.wakeDog);
  clearTimeout(dog.sleepDog);
  clearTimeout(dog.danceDog);
  clearTimeout(dog.walkDog);
  dogImage.setAttribute('src', dog.sleep);
  dogImage.style.top = '140px';
};
// handle dog display by watching for animation events
var dogUpdate = function() {
  dogStop();
  console.log('updating dog');
  dog.wakeDog = setTimeout(function() {
    // flip the dog and set timeout functions img src and position updates.
    dog.direction *= -1;
    dogImage.style.transform = 'scaleX(' + String(dog.direction) + ')';
    dogImage.setAttribute('src', dog.walk);
    dogImage.style.top = '100px';
  }, (dog.cycle/5 * 1000));
  dog.sleepDog = setTimeout(function() {
    dogImage.setAttribute('src', dog.sleep);
    dogImage.style.top = '140px';
  }, ((dog.cycle - dog.cycle/5) * 1000));
  if (dog.dancing) {
    dog.danceDog = setTimeout(function() {
      dogImage.setAttribute('src', dog.dance);
      dogImage.style.top = '100px';
    }, Math.round(dog.cycle * 0.45 * 1000));
    dog.walkDog = setTimeout(function() {
      dogImage.setAttribute('src', dog.walk);
      dogImage.style.top = '100px';
    }, Math.round(dog.cycle * 0.55 * 1000));
  }
};
// adding iteration listener to single element to monitor.
sky.addEventListener('animationiteration', function(event) {
  console.log('Animation elapsed time: ' + event.elapsedTime);
  dogUpdate();
}, false);
// handle dog dance updates
danceToggle.addEventListener('click', function() {
  if (dog.dancing) {
    // currently dancing switch to off state
    dog.dancing = false;
    danceToggle.style.backgroundColor = 'white';
  } else {
    dog.dancing = true;
    danceToggle.style.backgroundColor = 'red';
  }
});

// create rewind button (rect and two reverse triangles)
var rewindButton = eltNS('svg', 'rewind-button');
var rewindPoly = eltNS('polygon', 'player-button');
rewindPoly.setAttribute('points', '6,12 18,0 18,12 30,0 30,24 18,12 18,24');
rewindButton.appendChild(rewindPoly);
navPlayer.appendChild(rewindButton);
// create play button (single forward triangle)
var playButton = eltNS('svg', 'play-button');
var playPoly = eltNS('polygon', 'player-button');
playPoly.setAttribute('points', '0,0 12,12 0,24');
playButton.appendChild(playPoly);
navPlayer.appendChild(playButton);
// create stop button (single square)
var stopButton = eltNS('svg', 'stop-button');
var stopPoly = eltNS('polygon', 'player-button');
stopPoly.setAttribute('points', '0,0 24,0 24,24 0,24');
stopButton.appendChild(stopPoly);
navPlayer.appendChild(stopButton);
// create fast-forward button (two forward triangles and rect)
var ffwdButton = eltNS('svg', 'ffwd-button');
var ffwdPoly = eltNS('polygon', 'player-button');
ffwdPoly.setAttribute('points', '0,0 12,12 12,0 24,12 12,24 12,12 0,24');
ffwdButton.appendChild(ffwdPoly);
navPlayer.appendChild(ffwdButton);

// logic to control setting a running animation play state for necessary DOM elements
var playSelect = function() {
  console.log('Play has been selected.');
  var animElts = document.querySelectorAll('.animate');
  for (var i = 0; i < animElts.length; i++) {
    animElts[i].style.animationPlayState = 'running';
  }
  if (dog.firstCall) {
    dog.firstCall = false;
    dogUpdate();
  }
};
playButton.addEventListener('click', playSelect);
// logic to control setting a paused animation play state for necessary DOM elements
var stopSelect = function() {
  console.log('Stop has been selected.');
  var animElts = document.querySelectorAll('.animate');
  for (var i = 0; i < animElts.length; i++) {
    animElts[i].style.animationPlayState = 'paused';
  }
  dogStop();
};
stopButton.addEventListener('click', stopSelect);
// logic to control pushing the speed of the animation
var ffwdSelect = function() {
  console.log('ffwd has been selected.');
  if (dog.cycle > 10) {
    // limit increasing the speed of the cycle to min of 10s iterations
    dog.cycle -= 1;
    var animElts = document.querySelectorAll('.animate');
    for (var i = 0; i < animElts.length; i++) {
      animElts[i].style.animationDuration = String(dog.cycle) + 's';
    }
  }
  console.log('Current cycle is ' + dog.cycle + ' seconds long.');
};
ffwdButton.addEventListener('click', ffwdSelect);
// logic to control slowing the speed of the animation
var rewindSelect = function() {
  console.log('Rewind has been selected.');
  if (dog.cycle < 30) {
    // limit decreasing the speed of the cycle to max of 30s iterations
    dog.cycle += 1;
    var animElts = document.querySelectorAll('.animate');
    for (var i = 0; i < animElts.length; i++) {
      animElts[i].style.animationDuration = String(dog.cycle) + 's';
    }
  }
  console.log('Current cycle is ' + dog.cycle + ' seconds long.');
};
rewindButton.addEventListener('click', rewindSelect);
