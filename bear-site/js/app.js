// loading external mustache templates
var loadHeader = function() {
  console.log('Loading header template');
  $.get('template/headerTemplate.mst', function(template) {
    var rendered = Mustache.render(template, { name: "josh bairstow" });
    $('.container').append(rendered);
  });
};
var loadNavBar = function() {
  console.log('Loading navbar template');
  $.get('template/navBarTemplate.mst', function(template) {
    var rendered = Mustache.render(template, { home: "home" });
    $('.container').append(rendered);
  })
};

var init = function() {
  loadHeader();
  loadNavBar();
};

$( document ).ready( init );
