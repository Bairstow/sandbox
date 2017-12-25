console.log('Fractions warmup.');

var challengeInputs = [ '4 1/6 3/10 1/2 1/8', '3 1/3 1/4 1/12', '5 2/9 4/35 7/34 1/2 16/33', '10 1/7 35/192 61/124 90/31 5/168 31/51 69/179 32/5 15/188 10/17' ];

var reduceFraction = function(frac) {
  var divisor = Math.floor(frac[1]/2);
  // sanity check
  if (frac[1] > 100) {
    debugger
  }
  while(divisor >= 2) {
    console.log('.');
    if (frac[0]%divisor === 0 && frac[1]%divisor === 0) {
      // divider found update and continue loop
      frac[0] = frac[0]/divisor;
      frac[1] = frac[1]/divisor;
      // largest divisor found
      return frac
    } else {
      // increment divisor
      divisor--;
    }
  }
  // no divisor found whole frac returned
  return frac;
};

// take array of 'fractions' and return the index position of the element with smallest denominator
var findSmallestD = function(arr) {
  var smallest = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i][1] < arr[i-1][1]) {
      smallest = i;
    }
  }
  return smallest;
};

var runCalcs = function() {
// loop and handle calculation for each of the challenge inputs
for (var i = 0; i < challengeInputs.length; i++) {
  var currInput = challengeInputs[i].split(' ');
  var numFractions = currInput[0];
  var fractionArray = [];
  // create fracion array containing each of the target frations in a new [num,den] element
  for (var j = 1; j <= numFractions; j++) {
    var currFraction = currInput[j].split('/');
    fractionArray.push([Number(currFraction[0]), Number(currFraction[1])]);
  }

  // loop while result array has more than one element.
  var factor = 2;
  while (fractionArray.length > 1) {
    console.log('Current fractionArray length: ' + fractionArray.length);
    // find the current max denominator to limit search term
    var maxDFrac = fractionArray.reduce(function(a,b) {
      return (a[1]>b[1] ? a:b);
    });
    console.log('Current max. denominator: ' + maxDFrac[1]);

    // find all fracs divisible by the current factor
    var factorableInd = [];
    // could use standard array method here
    for (var j = 0; j < fractionArray.length; j++) {
      if (fractionArray[j][1]%factor === 0) {
        factorableInd.push(j);
      }
    }

    // for the factorable elements combine and reduce to single element
    if (factorableInd.length > 1) {
      console.log('Elements with factor of ' + factor + ' found.');
      console.log('Number of factorable indices found: ' + factorableInd.length);
      console.log(factorableInd);
      // cut the factorables from the working array
      var factorable = [];
      // take out in reverse order so as not to fuss with indexing
      for (var j = (factorableInd.length - 1); j >= 0; j--) {
        var pulledFrac = fractionArray.splice(factorableInd[j],1);
        factorable.push(pulledFrac[0]);
      }
      factorable.forEach(function(a) { console.log('Factorable: ' + a); });
      var reduced = factorable.reduce(function(a,b) {
        return reduceFraction([(a[0] * b[1] + b[0] * a[1]), (a[1] * b[1])]);
      });
      // console.log('Result of factoring fraction: ' + factored[0] + '/' + factored[1]);
      // var reduced = reduceFraction(factored);
      console.log('New reduced element to be added: ' + reduced[0] + '/' + reduced[1]);
      // add the new element back into working array and reset the factor search.
      fractionArray.push(reduced);
      factor = 2;
    }

    // conditional check if no multiple factors found for current set then take
    // the two smallest elements and combine/reduce back into working array.
    // this will ensure no infinite loops. hopefully.
    if (factor > maxDFrac[0]) {
      console.log('No factors found for this set.');
      var smallestDInd = findSmallestD(fractionArray);
      var combineD = fractionArray.splice(smallestDInd,1);
      smallestDInd = findSmallestD(fractionArray);
      combineD.concat(fractionArray.splice(smallestDInd,1));
      var factored = combineD.reduce(function(a,b) {
        return [(a[0] * b[1] + b[0] * a[1]), (a[1] * b[1])];
      });
      var reduced = reduceFraction(factored);
      console.log('New reduced element to be added: ' + reduced[0] + '/' + reduced[1]);
      // add the new element back into working array and reset the factor search.
      fractionArray.push(reduced);
      factor = 2;
    } else {
      factor++;
    }
    if (factor%100 === 0) {
      debugger
    }
  }
  console.log('Result: ' + fractionArray[0][0] + '/' + fractionArray[0][1]);
}
};
