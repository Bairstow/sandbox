// helpers
var eltNS = function(name, className, id) {
  // element creation assist
  var elt = document.createElementNS("http://www.w3.org/2000/svg",name);
  if (className) {
    elt.setAttribute('class', className);
  }
  if (id) {
    elt.setAttribute('id', id);
  }
  return elt;
};

// data container for drawing data and methods
var logo = {
  data: {
    // dom handle
    container: document.getElementsByClassName('container')[0],
    logoSize: 152,
  },
  newLogoCoords: function() {
    // define by drawing half the outside and reflecting the coords to complete the shape
    // inner mask coordinates are calculated immediately following the shape counterpart
    // size is the width/height of the defining square area in px and width is the
    // thickness of the line being calculated.
    var logoCoords = [];
    var maskCoords = [];
    // initial calcs done with lineWidth 0.06
    var lineWidth = 0.08;
    var lengthP1P2 = Math.sqrt(Math.pow(0.05,2)/2);
    var lengthP2P3 = 0.16;
    var lengthP4P5 = 0.16;
    var curveAngleP4 = 10/360 * 2 * Math.PI;
    var topCornerOffset = 0.16;
    var bottomCurveOffset = 0.5;
    var bottomBezierHighOffset = 0.8;
    var bottomBezierLowOffset = 0.9;
    var lengthP5P6 = Math.tan(curveAngleP4) * 0.05 +
                     0.05 / Math.cos(curveAngleP4)
    // calculate the top the shape (all coords are relative to 0,0 top left)
    logoCoords.push(
      [0.5, 0]
    );
    maskCoords.push(
      [0.5, Math.sqrt(2 * Math.pow(lineWidth, 2))]
    );
    // coords for point before beginning of top curve
    logoCoords.push(
      [0.5 + lengthP1P2, lengthP1P2]
    );
    // replicating some mask coords where line drawing from outer shape is not applicable
    maskCoords.push(
      [0.5, Math.sqrt(2 * Math.pow(lineWidth, 2))]
    );
    // coords for bezier point beginning of top curve
    logoCoords.push(
      [0.5 + lengthP1P2 + Math.sqrt(Math.pow(lengthP2P3,2)/2),
      lengthP1P2 + Math.sqrt(Math.pow(lengthP2P3,2)/2)]
    );
    maskCoords.push(
      [0.5 + Math.sqrt(Math.pow(lengthP2P3,2)/2),
      Math.sqrt(2 * Math.pow(lineWidth, 2)) + Math.sqrt(Math.pow(lengthP2P3,2)/2)]
    );
    // coords for bezier point end of top curve
    logoCoords.push(
      [1 - Math.cos(curveAngleP4) * (lengthP4P5 + lengthP5P6),
      topCornerOffset + Math.sin(curveAngleP4) * (lengthP4P5 + lengthP5P6)]
    );
    maskCoords.push(
      [1 - Math.cos(curveAngleP4) * (lengthP4P5 + lengthP5P6),
      topCornerOffset + Math.sin(curveAngleP4) * (lengthP4P5 + lengthP5P6) + lineWidth / Math.cos(curveAngleP4)]
    );
    // coords for point end of top curve
    logoCoords.push(
      [1 - Math.cos(curveAngleP4) * lengthP5P6,
      topCornerOffset + Math.sin(curveAngleP4) * lengthP5P6]
    );
    maskCoords.push(
      [1 - lineWidth,
      topCornerOffset + Math.sin(curveAngleP4) * lengthP5P6 + lineWidth / Math.cos(curveAngleP4)]
    );
    // coords for point top right corner
    logoCoords.push(
      [1, topCornerOffset]
    );
    maskCoords.push(
      [1 - lineWidth,
      topCornerOffset + Math.sin(curveAngleP4) * lengthP5P6 + lineWidth / Math.cos(curveAngleP4)]
    );
    // coords for beginning point of bottom curve
    logoCoords.push(
      [1, bottomCurveOffset]
    );
    maskCoords.push(
      [1 - lineWidth,
      bottomCurveOffset]
    );
    // coords for beginning bezier of bottom curve
    logoCoords.push(
      [1, bottomBezierHighOffset]
    );
    maskCoords.push(
      [1 - lineWidth,
      bottomBezierHighOffset - (bottomBezierHighOffset - bottomCurveOffset) * (1 - lineWidth)/4]
    );
    // coords for end bezier of bottom curve
    logoCoords.push(
      [bottomBezierLowOffset, bottomBezierLowOffset]
    );
    maskCoords.push(
      [bottomBezierLowOffset, bottomBezierLowOffset - Math.sqrt(Math.pow(lineWidth/4,2) + Math.pow(lineWidth, 2))]
    );
    // coords for bottom of shape
    logoCoords.push(
      [0.5, 1]
    );
    maskCoords.push(
      [0.5, 1 - Math.sqrt(Math.pow(lineWidth/4,2) + Math.pow(lineWidth, 2))]
    );
    // coords for other side are mirrors of previous calcs (x pos is 1 - mirror)
    // mirrors by index: 8-10, 7-11 ... 1-17.
    logoCoords.push([1 - logoCoords[8][0], logoCoords[8][1]]);
    logoCoords.push([1 - logoCoords[7][0], logoCoords[7][1]]);
    logoCoords.push([1 - logoCoords[6][0], logoCoords[6][1]]);
    logoCoords.push([1 - logoCoords[5][0], logoCoords[5][1]]);
    logoCoords.push([1 - logoCoords[4][0], logoCoords[4][1]]);
    logoCoords.push([1 - logoCoords[3][0], logoCoords[3][1]]);
    logoCoords.push([1 - logoCoords[2][0], logoCoords[2][1]]);
    logoCoords.push([1 - logoCoords[1][0], logoCoords[1][1]]);
    maskCoords.push([1 - maskCoords[8][0], maskCoords[8][1]]);
    maskCoords.push([1 - maskCoords[7][0], maskCoords[7][1]]);
    maskCoords.push([1 - maskCoords[6][0], maskCoords[6][1]]);
    maskCoords.push([1 - maskCoords[5][0], maskCoords[5][1]]);
    maskCoords.push([1 - maskCoords[4][0], maskCoords[4][1]]);
    maskCoords.push([1 - maskCoords[3][0], maskCoords[3][1]]);
    maskCoords.push([1 - maskCoords[2][0], maskCoords[2][1]]);
    maskCoords.push([1 - maskCoords[1][0], maskCoords[1][1]]);
    // second set of calcs to path coordinates for the j and b initials
    // as they are in large part mirrors of each other most calculations will be done and reflected
    // immediately following its opposite letter counterpart. calc j and mirror in b.
    var jCoords = [];
    var bCoords = [];
    // top inside corner point
    jCoords.push(
      [0.5 - lineWidth/2,
      Math.sqrt(2 * Math.pow(lineWidth, 2)) * 2 + lineWidth/2]
    );
    bCoords.push(
      [0.5 + lineWidth/2,
      Math.sqrt(2 * Math.pow(lineWidth, 2)) * 2 + lineWidth/2]
    );
    // bottom inside corner point
    jCoords.push(
      [0.5 - lineWidth/2,
      1 - Math.sqrt(Math.pow(lineWidth/4,2) + Math.pow(lineWidth, 2)) - lineWidth/8 - Math.sqrt(Math.pow(lineWidth,2) + Math.pow(lineWidth/4,2))]
    );
    bCoords.push(
      [0.5 + lineWidth/2,
      1 - Math.sqrt(Math.pow(lineWidth/4,2) + Math.pow(lineWidth, 2)) - lineWidth/8 - Math.sqrt(Math.pow(lineWidth,2) + Math.pow(lineWidth/4,2))]
    );
    // bottom curve bottom bezier point
    jCoords.push(
      [jCoords[1][0] - lineWidth * 4, jCoords[1][1] - lineWidth * 1.2]
    );
    bCoords.push(
      [bCoords[1][0] + lineWidth * 4, bCoords[1][1] - lineWidth * 1.2]
    );
    // bottom curve top bezier point
    jCoords.push(
      [lineWidth * 2, bottomCurveOffset + lineWidth * 2]
    );
    bCoords.push(
      [1 - lineWidth * 2, bottomCurveOffset + lineWidth * 2]
    );
    // bottom curve top point
    jCoords.push(
      [lineWidth * 2, bottomCurveOffset]
    );
    bCoords.push(
      [1 - lineWidth * 2, bottomCurveOffset]
    );
    // initials seperate a little here as the b extends inwards towards the letter stem
    jCoords.push(
      [lineWidth * 3, bottomCurveOffset]
    );
    bCoords.push(
      [1 - lineWidth * 4, bottomCurveOffset]
    );
    bCoords.push(
      [1 - lineWidth * 4, bottomCurveOffset + lineWidth]
    );
    bCoords.push(
      [1 - lineWidth * 3.02, bottomCurveOffset + lineWidth]
    );
    // top curve top bezier point
    jCoords.push(
      [lineWidth * 3, bottomCurveOffset + lineWidth * 1.4]
    );
    bCoords.push(
      [1 - lineWidth * 3.05, bottomCurveOffset + lineWidth * 1.6]
    );
    // top curve bottom bezier point
    jCoords.push(
      [jCoords[1][0] - lineWidth * 3, jCoords[1][1] - lineWidth * 0.98 - Math.sqrt(Math.pow(lineWidth,2) + Math.pow(lineWidth/4,2))]
    );
    bCoords.push(
      [bCoords[1][0] + lineWidth * 2.8, bCoords[1][1] - lineWidth * 0.94 - Math.sqrt(Math.pow(lineWidth,2) + Math.pow(lineWidth/4,2))]
    );
    // top curve bottom point
    jCoords.push(
      [0.5 - lineWidth * 1.5,
      jCoords[1][1] - Math.sqrt(Math.pow(lineWidth,2) + Math.pow(lineWidth/4,2)) - lineWidth/4]
    );
    bCoords.push(
      [0.5 + lineWidth * 1.5,
      bCoords[1][1] - Math.sqrt(Math.pow(lineWidth,2) + Math.pow(lineWidth/4,2)) - lineWidth/4]
    );
    // top outside letter stem
    jCoords.push(
      [jCoords[0][0] - lineWidth, jCoords[0][1] + lineWidth * 0.6]
    );
    bCoords.push(
      [bCoords[0][0] + lineWidth, bCoords[0][1] + lineWidth * 0.6]
    );
    return [logoCoords, maskCoords, jCoords, bCoords];
  },
  // standardize positional coords number formatting
  trimCoords: function(coords) {
    var result = [];
    for (var i = 0; i < coords.length; i++) {
      result.push([coords[i][0].toFixed(2),coords[i][1].toFixed(2)]);
    }
    return result;
  },
  sizeCoords: function(coords, size) {
    var result = [];
    for (var i = 0; i < coords.length; i++) {
      result.push([coords[i][0] * size, coords[i][1] * size]);
    }
    return result;
  },
  pushCoords: function(coords, x_adjustment, y_adjustment) {
    var result = [];
    for (var i = 0; i < coords.length; i++) {
      result.push([Number(coords[i][0]) + x_adjustment, Number(coords[i][1]) + y_adjustment]);
    }
    return result;
  },
  buildLogoSVG: function(coords) {
    // create new svg
    var logoSVG = eltNS('svg','logo-svg');
    // defs section
    var logoDefs = eltNS('defs', 'logo-defs');
    var logoBGMask = eltNS('mask', '', 'logo-bg-mask');
    var logoBGMaskRect = eltNS('rect', 'logo-rect');
    var logoBGMaskPath = eltNS('path', 'logo-path');
    var maskCoords = logo.trimCoords(logo.sizeCoords(coords[1], logo.data.logoSize));
    pathDataBGMask = logo.buildOutlinePath(maskCoords);
    // set defs section attributes
    logoBGMaskRect.setAttribute('x','0');
    logoBGMaskRect.setAttribute('y','0');
    logoBGMaskRect.setAttribute('width','100%');
    logoBGMaskRect.setAttribute('height','100%');
    logoBGMaskRect.setAttribute('fill','#FFF');
    logoBGMaskPath.setAttribute('d', pathDataBGMask);
    logoBGMaskPath.setAttribute('fill', '#000');
    // draw section
    var logoBGGroup = eltNS('g', 'logo-group');
    var logoBG = eltNS('path', 'logo-path');
    // build path string
    var outlineCoords = logo.trimCoords(logo.sizeCoords(coords[0], logo.data.logoSize));
    pathDataBG = logo.buildOutlinePath(outlineCoords);
    // initials section
    var logoInitialGroup = eltNS('g', 'logo-initial-group');
    var logoInitialJPath = eltNS('path', 'logo-path');
    var logoInitialBPath = eltNS('path', 'logo-path');
    // initial path strings
    var initialJCoords = logo.trimCoords(logo.sizeCoords(coords[2], logo.data.logoSize));
    var initialBCoords = logo.trimCoords(logo.sizeCoords(coords[3], logo.data.logoSize));
    pathDataInitialJ = logo.buildJPath(initialJCoords);
    pathDataInitialB = logo.buildBPath(initialBCoords);
    // set background attributes
    logoBG.setAttribute('d', pathDataBG);
    logoBG.setAttribute('mask', "url(#logo-bg-mask)");
    // set initial attributes
    logoInitialJPath.setAttribute('d', pathDataInitialJ);
    logoInitialBPath.setAttribute('d', pathDataInitialB);
    // set svg attributes
    logoSVG.setAttribute('width', logo.data.logoSize);
    logoSVG.setAttribute('height', logo.data.logoSize);
    logoSVG.setAttribute('stroke', 'none');
    logoSVG.setAttribute('fill', 'black');
    // append and return
    logoBGMask.appendChild(logoBGMaskRect);
    logoBGMask.appendChild(logoBGMaskPath);
    logoDefs.appendChild(logoBGMask);
    logoBGGroup.appendChild(logoBG);
    logoInitialGroup.appendChild(logoInitialJPath);
    logoInitialGroup.appendChild(logoInitialBPath);
    logoSVG.appendChild(logoDefs);
    logoSVG.appendChild(logoBGGroup);
    logoSVG.appendChild(logoInitialGroup);
    return logoSVG;
  },
  buildOutlinePath: function(coords) {
    result = "M " + String(coords[0][0]) + " " + String(coords[0][1]) + " " +
    "L " + String(coords[1][0]) + " " + String(coords[1][1]) + " " +
    "C " + String(coords[2][0]) + " " + String(coords[2][1]) +
    ", " + String(coords[3][0]) + " " + String(coords[3][1]) +
    ", " + String(coords[4][0]) + " " + String(coords[4][1]) + " " +
    "L " + String(coords[5][0]) + " " + String(coords[5][1]) + " " +
    "L " + String(coords[6][0]) + " " + String(coords[6][1]) + " " +
    "C " + String(coords[7][0]) + " " + String(coords[7][1]) +
    ", " + String(coords[8][0]) + " " + String(coords[8][1]) +
    ", " + String(coords[9][0]) + " " + String(coords[9][1]) + " " +
    "C " + String(coords[10][0]) + " " + String(coords[10][1]) +
    ", " + String(coords[11][0]) + " " + String(coords[11][1]) +
    ", " + String(coords[12][0]) + " " + String(coords[12][1]) + " " +
    "L " + String(coords[13][0]) + " " + String(coords[13][1]) + " " +
    "L " + String(coords[14][0]) + " " + String(coords[14][1]) + " " +
    "C " + String(coords[15][0]) + " " + String(coords[15][1]) +
    ", " + String(coords[16][0]) + " " + String(coords[16][1]) +
    ", " + String(coords[17][0]) + " " + String(coords[17][1]) + " " +
    "L " + String(coords[0][0]) + " " + String(coords[0][1]);
    return result;
  },
  buildJPath: function(coords) {
    result = "M " + String(coords[0][0]) + " " + String(coords[0][1]) + " " +
    "L " + String(coords[1][0]) + " " + String(coords[1][1]) + " " +
    "C " + String(coords[2][0]) + " " + String(coords[2][1]) +
    ", " + String(coords[3][0]) + " " + String(coords[3][1]) +
    ", " + String(coords[4][0]) + " " + String(coords[4][1]) + " " +
    "L " + String(coords[5][0]) + " " + String(coords[5][1]) + " " +
    "C " + String(coords[6][0]) + " " + String(coords[6][1]) +
    ", " + String(coords[7][0]) + " " + String(coords[7][1]) +
    ", " + String(coords[8][0]) + " " + String(coords[8][1]) + " " +
    "L " + String(coords[9][0]) + " " + String(coords[9][1]) + " " +
    "L " + String(coords[0][0]) + " " + String(coords[0][1]);
    return result;
  },
  buildBPath: function(coords) {
    result = "M " + String(coords[0][0]) + " " + String(coords[0][1]) + " " +
    "L " + String(coords[1][0]) + " " + String(coords[1][1]) + " " +
    "C " + String(coords[2][0]) + " " + String(coords[2][1]) +
    ", " + String(coords[3][0]) + " " + String(coords[3][1]) +
    ", " + String(coords[4][0]) + " " + String(coords[4][1]) + " " +
    "L " + String(coords[5][0]) + " " + String(coords[5][1]) + " " +
    "L " + String(coords[6][0]) + " " + String(coords[6][1]) + " " +
    "L " + String(coords[7][0]) + " " + String(coords[7][1]) + " " +
    "C " + String(coords[8][0]) + " " + String(coords[8][1]) +
    ", " + String(coords[9][0]) + " " + String(coords[9][1]) +
    ", " + String(coords[10][0]) + " " + String(coords[10][1]) + " " +
    "L " + String(coords[11][0]) + " " + String(coords[11][1]) + " " +
    "L " + String(coords[0][0]) + " " + String(coords[0][1]);
    return result;
  }
};

var newCoords = logo.newLogoCoords();
var newSVG = logo.buildLogoSVG(newCoords);
logo.data.container.appendChild(newSVG);
