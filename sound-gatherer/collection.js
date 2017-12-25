// load the request module
var _ = require('lodash');
var request = require('request');
var search = require('./search.js');
var apiInfo = require('./apiInfo.js');

// demo request
// request('http://www.modulus.io', function(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body); // show html of request target.
//   }
// });

// define a soundlcloud search function
var soundcloudGenerateRequest = function(term, searchType) {
  // base url for api endpoints
  var base = 'https://api.soundcloud.com/';
  var clientId = apiInfo.soundcloudClientId;
  return base + searchType + '?q=' + term + '&client_id=' + clientId;
};

var searchResults = {};

// search for tracks matched against a target word (possible expand to use beyond )
_.forEach(search.terms, function(term) {
  _.forEach(search.searchTypes, function(searchType) {
    request(soundcloudGenerateRequest(term, searchType), function(error, response, body) {
      if (!error && response.statusCode === 200) {
        searchResults[searchType][term] = body;
      }
    });
  });
});
