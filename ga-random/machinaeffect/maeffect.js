console.log('Ex Machina');


// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(500,500, { antialias: true });

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

// create a new instance of a pixi container
var stage = new PIXI.Container();
var circleG = new PIXI.Graphics();
var dotsG = new PIXI.Graphics();
var connectorsG = new PIXI.Graphics();

// generate interacting dot
var generateDot = (function() {
  var offsetX, offsetY;
  return function(minRad, maxRad) {
    // initialise display related variables
    if (!offsetX) {
      offsetX = 250;
    }
    if (!offsetY) {
      offsetY = 250;
    }
    // generate and return [x,y] point in range
    var newDeg = Math.random() * Math.PI * 2;
    var newX = Math.sin(newDeg) * ((Math.random() * (maxRad - minRad)) + minRad) + offsetX;
    var newY = Math.cos(newDeg) * ((Math.random() * (maxRad - minRad)) + minRad) + offsetY;
    var newDist = Math.sqrt(Math.pow((newX - offsetX), 2) + Math.pow((newY - offsetY), 2));
    return [newX, newY, newDeg, newDist];
  };
}());

// generate multiple dots to an array
var generateDotArray = (function() {
  var dotsPerOrbit;
  return function() {
    // initialise limiting variables
    if (!dotsPerOrbit) {
      dotsPerOrbit = 60;
    }
    // generate random dot array
    var newDots = [];
    for (var i = 0; i < (dotsPerOrbit * 2); i++) {
      newDots.push(generateDot(200,300));
    }
    for (var i = 0; i < dotsPerOrbit; i++) {
      newDots.push(generateDot(120,170));
    }
    for (var i = 0; i < (dotsPerOrbit * 2/3); i++) {
      newDots.push(generateDot(50,90));
    }
    return newDots;
  };
}());

// generate initial circle and point data
var circleGroup = [];
for (var i = 0; i < 3; i++) {
  circleGroup.push({
    posX: 250,
    posY: 250,
    radius: 400 - (i * 130),
    randDots: generateDotArray()
  })
}

// define circle element animation
var shrinkCircle = function(cProps, time) {
  var speedMod = 0.02;
  // handle radius update
  if ((cProps.radius - (time * speedMod)) <= 0) {
    cProps.radius = 400;
    cProps.randDots = generateDotArray();
  } else {
    cProps.radius -= (time * speedMod);
  }
};

// define circle drawing operation
var drawCircle = function(gElem, cProps, alpha) {
  // draw
  var modAlpha = Math.min((alpha * 4), 1);
  gElem.beginFill(0xAAAAAA, 0);
  gElem.lineStyle(1.4, 0x888888, modAlpha);
  gElem.drawCircle(cProps.posX, cProps.posY, cProps.radius);
  gElem.endFill();
};

// define dot drawing routine
var drawDots = function(gElem, dots) {
  // draw routine
  gElem.clear();
  for (var i = 0; i < dots.length; i++) {
    gElem.beginFill(0xAAAAAA, 0);
    gElem.lineStyle(0);
    gElem.drawCircle(dots[i][0],dots[i][1], 2);
  }
  gElem.endFill();
};

// connect the dots to the moving circle at a constant radius
var drawConnectors = function(gElem, dots, rad) {
  // rad defines the current circle radius
  // dots[i][3] defines the current length from origin to the target dot
  var totalAlpha = 0;
  var modAlpha = 40;
  for (var i = 0; i < dots.length; i++) {
    // connections 10 degrees in either direction from the target dot
    var connectCWAngle = dots[i][2] + Math.PI * 1 / 18;
    var connectCCWAngle = dots[i][2] - Math.PI * 1 / 18;
    var connectCWCoords = [(Math.sin(connectCWAngle) * rad) + 250, (Math.cos(connectCWAngle) * rad) + 250];
    var connectCCWCoords = [(Math.sin(connectCCWAngle) * rad) + 250, (Math.cos(connectCCWAngle) * rad) + 250];
    // calculate line opacity based on the difference in distance from origin of target point and
    // the circle
    var dotToCircle = Math.abs(rad - dots[i][3]);
    // debugger
    if (dotToCircle >= modAlpha) {
      // if target point is too far from the circle then don't show the connectors
      var connectAlpha = 0;
    }  else {
      var connectAlpha = (modAlpha - dotToCircle)/(modAlpha * 1.5);
    }
    totalAlpha += connectAlpha;
    gElem.lineStyle(1, 0x888888, connectAlpha);
    // draw lines (move draw position to one point on circle and then draw to target dot and back to
    // the other circle position).
    gElem.moveTo(connectCWCoords[0], connectCWCoords[1]);
    gElem.lineTo(dots[i][0], dots[i][1]);
    gElem.moveTo(connectCCWCoords[0], connectCCWCoords[1]);
    gElem.lineTo(dots[i][0], dots[i][1]);
  }
  return totalAlpha/dots.length;
}

// clear multiple graphics element to prepare for new frame of animation.
var clearElements = function(elemG1, elemG2) {
  // could just use arguments in place of specifying elements to clear.
  elemG1.clear();
  elemG2.clear();
};

// add graphic elements to the stage display
stage.addChild(circleG);
stage.addChild(dotsG);
stage.addChild(connectorsG);

var time = Date.now();

// define render loop.
var animate = function() {
  // initialise time variables to control animation speed
  var newTime = Date.now()
  var elapsed = newTime - time;
  time = newTime;

  clearElements(connectorsG, circleG);
  for (var i = 0; i < circleGroup.length; i++) {
    shrinkCircle(circleGroup[i], elapsed);
    var avgAlpha = drawConnectors(connectorsG, circleGroup[i].randDots, circleGroup[i].radius);
    drawCircle(circleG, circleGroup[i], avgAlpha);
  }

  // render the stage
  renderer.render(stage);
  // loop render on animation frames.
  requestAnimationFrame( animate );
}

// run the render loop.
animate();
