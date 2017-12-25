// google browser api key: AIzaSyAQTrHTm_ozJmAg_u0_g1laGtHsRP2UUnc

var initMap = function() {
  var searchBtn = document.getElementById('geo-search-button');
  var searchQuery = document.getElementById('geo-search');
  var handle = document.getElementsByClassName('search-map')[0];
  var map = new google.maps.Map(handle, {
    center: {lat: -37.818028, lng: 144.958624},
    zoom: 12,
    disableDefaultUI: true,
    zoomControl: true
  });
  var geocoder = new google.maps.Geocoder();
  var service = new google.maps.places.PlacesService(map);
  searchBtn.addEventListener('click', function() {
    // search on location
    // geocodeQuery(searchQuery.value, geocoder, map);
    // search based on golf course or nearby golf course
    courseQuery(searchQuery.value, service, map);
  });
};
var geocodeQuery = function(query, geocoder, map) {
  geocoder.geocode({'address': query}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
};
// Handle the callback with an anonymous function.
var courseQuery = function(query, service, map) {
  var request = {
    query: query,
  };
  service.textSearch(request, function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      // clear search results on each new query
      $('.search-results').empty()
      map.setCenter(results[0].geometry.location);
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        // If the request succeeds, draw the place location on
        // the map as a marker, and register an event to handle a
        // click on the marker.
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        // finally update the search results to reflect all clubs found.
        updateSearchResults(results[i].name);
      }
    }
  });
};
// Handle the addition of new listing elements to club search.
var updateSearchResults = function(name) {
  var openRowText = "<div class='row'>";
  var nameText = "<div class='col s8'>" + name + "</div>";
  var btnText = "<button class='btn waves-effect waves-light secondary-color' id='club-listing'>Add Listing</button>";
  var closeRowText = "</div>";
  $('.search-results').append(openRowText,nameText,btnText,closeRowText);
};
