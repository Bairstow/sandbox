console.log('SVG Testing');

// helper function for console testing
var dcsl = function(str) {
  if (DEBUG) {
    console.log(str);
  }
};
var DEBUG = true;

// helper function for creating control section
var eltNS = function(name, className, id) {
  // element creation assist
  var elt = document.createElementNS("http://www.w3.org/2000/svg",name);
  if (className) {
    elt.setAttribute("class", className);
  }
  if (id) {
    elt.setAttribute("id", id);
  }
  return elt;
};

// collect polyline elements of the bear graphic
var bearPolyG = document.getElementsByClassName('bear-poly-g')[0];

// take svg group node as input and parse out individual lines from polygon, polyline and line children
// lines stored in the form [[x1,y1],[x2,y2]].
var extractLines = function(group) {
  // using DOM queries to group svg elements so should only be called on end-of-tree group elements
  var childNodes = group.childNodes;
  dcsl('Number of child nodes in target group: ' + childNodes.length);

  // pull grouping for unique svg elements.
  var lineNodes = group.querySelectorAll('line');
  var polylineNodes = group.querySelectorAll('polyline');
  var polygonNodes = group.querySelectorAll('polygon');
  dcsl('Num. lines: ' + lineNodes.length + ' Num. polylines: ' + polylineNodes.length +
       ' Num. polygons: ' + polygonNodes.length);

  // extract position coords from line elements.
  // eg. <line fill="none" stroke="#000000" stroke-miterlimit="10" x1="246.356" y1="525.3" x2="286.151" y2="564.201"/>
  var groupLineCoords = _.map(lineNodes, function(lineElt) {
    // converting returned attributes to numbers for any later manipulation if necessary.
    var firstPos = [ Number(lineElt.getAttribute('x1')), Number(lineElt.getAttribute('y1')) ];
    var secondPos = [ Number(lineElt.getAttribute('x2')), Number(lineElt.getAttribute('y2')) ];
    return [ firstPos, secondPos ];
  });
  // dcsl(groupLineCoords);
  var parsePolylineElts = function(polyElt) {
    // calling compact on the points array to remove whitespace that svg can generate to suffix points attribute.
    var points = _.compact(polyElt.getAttribute('points').split(" "));
    var currPos = null;
    var nextPos = null;
    var newLines = _.map(points, function(point, index) {
      // first call to the points array should set initial position and empty return
      var nextPoint = point.split(",");
      // sanity check point attributes.
      if ( nextPoint.length !== 2 || Number(nextPoint[0]) === NaN || Number(nextPoint[1]) === NaN ) {
        return;
      } else {
        nextPos = [ Number(nextPoint[0]), Number(nextPoint[1]) ];
      }
      if (index > 0) {
        // all subsequent calls on the point array should generate a new line item and reset the initialPos
        var newLine = [ currPos, nextPos ];
        currPos = nextPos;
        return newLine;
      } else if (index === 0) {
        // first point passed to the mapping function should just set initial values for coord generation.
        currPos = nextPos;
      }
    });
    return _.compact(newLines);
  };
  // separate function needed for polygons so that final line object (closing the shape) can be added manually.
  var parsePolygonElts = function(polyElt) {
    // calling compact on the points array to remove whitespace that svg can generate to suffix points attribute.
    var points = _.compact(polyElt.getAttribute('points').split(" "));
    var intialPos = null;
    var currPos = null;
    var nextPos = null;
    var newLines = _.map(points, function(point, index) {
      // first call to the points array should set initial position and empty return
      var nextPoint = point.split(",");
      // sanity check point attributes.
      if ( nextPoint.length !== 2 || Number(nextPoint[0]) === NaN || Number(nextPoint[1]) === NaN ) {
        return;
      } else {
        nextPos = [ Number(nextPoint[0]), Number(nextPoint[1]) ];
      }
      if (index > 0) {
        // all subsequent calls on the point array should generate a new line item and reset the initialPos
        var newLine = [ currPos, nextPos ];
        currPos = nextPos;
        return newLine;
      } else if (index === 0) {
        // first point passed to the mapping function should just set initial values for coord generation.
        initialPos = nextPos;
        currPos = nextPos;
      }
    });
    // finally generate single line that 'closes' the polygon shape
    newLines.push( [ nextPos, initialPos ]);
    return _.compact(newLines);
  };
  // eg. <polyline fill="none" stroke="#000000" stroke-miterlimit="10" points="211.458,544.798 177.717,154.25"/>
  var groupPolylineCoords = _.map(polylineNodes, parsePolylineElts);
  // call single layer flatten on the groupPolylineCoords array to render array containing line items in same form as groupLineCoords
  groupPolylineCoords = _.compact(_.flatten(groupPolylineCoords, true));
  // dcsl(groupPolylineCoords);
  // eg. <polygon fill="none" stroke="#000000" stroke-miterlimit="10" points="399.596,235.448 357.432,276.432 320.604,235.448 	"/>
  var groupPolygonCoords = _.map(polygonNodes, parsePolygonElts);
  // call single layer flatten on the groupPolygonCoords array to render array containing line items in same form as groupLineCoords
  groupPolygonCoords = _.compact(_.flatten(groupPolygonCoords, true));
  // dcsl(groupPolygonCoords);

  // group and return all generated line items
  var groupAllLines = groupLineCoords.concat(groupPolylineCoords.concat(groupPolygonCoords));
  // dcsl(groupAllLines);
  return groupAllLines;
};

var buildSVG = function(lines, svgClassName) {
  var newSVGElt = eltNS('svg', svgClassName);
  var newGElt = eltNS('g');
  // for each line item generate a DOM element, set attributes and attach to the parent group.
  _.map(lines, function(line) {
    var newLine = eltNS('line');
    newLine.setAttribute('x1', String(line[0][0]));
    newLine.setAttribute('y1', String(line[0][1]));
    newLine.setAttribute('x2', String(line[1][0]));
    newLine.setAttribute('y2', String(line[1][1]));
    newGElt.appendChild(newLine);
  });
  newSVGElt.appendChild(newGElt);
  return newSVGElt;
};

// scanning opacity effect
var scanPos = 0;
var scanDown = function(lines, svgClassName) {
  // handle and clear the current svg element
  var svg = document.getElementsByClassName(svgClassName)[0];
  while(svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }
  // build a companion array for lines that has an average y value for each line object.
  var lineYValues = _.map(lines, function(line) {
    return (line[0][1] + line[1][1]) / 2;
  });
  // redraw svg element using the generated Y values and scanPos to adjust line opacity
  var newGElt = eltNS('g');
  // for each line item generate a DOM element, set attributes and attach to the parent group.
  _.map(lines, function(line, index) {
    var newOpacity = Math.max(0.002,(60 - Math.abs(lineYValues[index] - scanPos))/60);
    var newLine = eltNS('line');
    newLine.setAttribute('x1', String(line[0][0]));
    newLine.setAttribute('y1', String(line[0][1]));
    newLine.setAttribute('x2', String(line[1][0]));
    newLine.setAttribute('y2', String(line[1][1]));
    newLine.style.opacity = String(newOpacity);
    newGElt.appendChild(newLine);
  });
  svg.appendChild(newGElt);
  // while scanPos is less than length of the image make a new call to scanDown with updated scanPos.
  if (scanPos < 800) {
    // moving scan position 10 pixels per movement.
    scanPos += 6;
    window.setTimeout(function() { scanDown(lines, svgClassName) }, 20);
  } else {
    scanPos = 0;
  }
};

// testing
var lines = extractLines(bearPolyG);
// strip overlapping lines
lines = _.unique(lines);
var svg = buildSVG(lines, 'bear-svg-two');
document.body.appendChild(svg);
