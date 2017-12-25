console.log('Fractions warmup.');

var DEBUG = true;
var dcsl = function(str) {
  if (DEBUG) {
    console.log(str);
  }
};

var challengeInputs = [
  '2 1/6 3/10',
  '3 1/3 1/4 1/12',
  '5 2/9 4/35 7/34 1/2 16/33',
  '10 1/7 35/192 61/124 90/31 5/168 31/51 69/179 32/5 15/188 10/17'
];
var testArrOne = [2,3,5];
var testArrTwo = [3,5,11,31];

var parseInputs = function(str) {
  //
  var arrInput = str.split(' ');
  var numFrac = arrInput[0];
  var fracInput = [];
  for (var i = 1; i <= numFrac; i++) {
    fracInput.push(arrInput[i].split('/'));
  }
  for (var i = 0; i < fracInput.length; i++) {
    fracInput[i][0] = Number(fracInput[i][0]);
    fracInput[i][1] = Number(fracInput[i][1]);
  }
  return fracInput;
};

var findNextPrime = function(num) {
  //
  dcsl('Finding next prime after ' + num);
  num++;
  var factorFound = true;
  while (factorFound) {
    factorFound = false;
    for (var i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
      if (num%i === 0) {
        factorFound = true;
        num++;
      }
    }
  }
  dcsl('Next prime found: ' + num);
  return num;
};

var challenges = [];
challengeInputs.forEach(function(a) { challenges.push(parseInputs(a)); });
// challenges[0].forEach(function(a, i) {
//   dcsl('Fraction ' + i + ': ' + a[0] + '/' + a[1]);
// });

var findPrimeFactors = function(num) {
  var primeFactors = [];
  var divisor = 2;
  while (divisor <= num) {
    if (num%divisor === 0) {
      primeFactors.push(divisor);
      num /= divisor;
      divisor = 2;
    } else {
      divisor = findNextPrime(divisor);
    }
  }
  return primeFactors;
};

var findCommonElt = function(a,b) {
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        return a[i];
      }
    }
  }
  // no shared element found
  return false;
};

var mergeArrays = function(a,b) {
  var result = [];
  var common = findCommonElt(a,b);
  while(common) {
    // strip common elt from both arrays and reset search condition.
    result.push(a.splice(a.indexOf(common),1)[0]);
    b.splice(b.indexOf(common),1);
    common = findCommonElt(a,b);
  }
  dcsl('Result: ' + result + ' a: ' + a + ' b: ' + b);
  return result.concat(a).concat(b);
};
// dcsl(mergeArrays(testArrOne,testArrTwo));

var reduceFraction = function(frac) {
  var divisor = 2;
  // sanity check
  if (frac[1] > 100) {
    debugger
  }
  while (divisor < Math.sqrt(frac[1])) {
    if (frac[0]%divisor === 0 && frac[1]%divisor === 0) {
      // divider found update and continue loop
      frac[0] = frac[0]/divisor;
      frac[1] = frac[1]/divisor;
      // largest divisor found
      divisor = 2;
    } else {
      // decrement divisor
      divisor = findNextPrime(divisor);
    }
  }
  // no divisor found whole frac returned
  return frac;
};

var reduceChallenge = function(arr) {
  //
  dcsl('Current challenge length: ' + arr.length);
  var primeFactorsList = [];
  for (var i  = 0; i < arr.length; i++) {
    primeFactorsList.push(findPrimeFactors(arr[i][1]));
  }
  dcsl(primeFactorsList);
  var commonPrimes = primeFactorsList.reduce(function(a,b) {
    return mergeArrays(a,b);
  });
  var commonDenominator = commonPrimes.reduce(function(a,b) {
    return (a * b);
  });
  dcsl(commonDenominator);
  var resultNumerator = 0;
  for (var i = 0; i < arr.length; i++) {
    var factor = commonDenominator/arr[i][1];
    var newNumerator = arr[i][0]*factor;
    resultNumerator += newNumerator;
    dcsl('Result fraction currently: ' + resultNumerator + '/' + commonDenominator);
  }
  var resultFrac = [resultNumerator, commonDenominator];
  var reduceFrac = reduceFraction(resultFrac);
  dcsl(reduceFrac);
};
