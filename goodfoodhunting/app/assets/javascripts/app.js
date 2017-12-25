console.log('spike');

// use moustache syntax
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

// helper parent checking function for dom elements
function isDescendant(parent, child) {
   var node = child.parentNode;
   while (node != null) {
     if (node == parent) {
         return true;
     }
     node = node.parentNode;
   }
   return false;
}

var options = {
  url: '/api/dishes',
  method: 'get',
  dataType: 'json'
};

var displayDishes = function(dishes) {
  if (dishes.length > 0) {
    _.each(dishes, function(dish) {
      var templateVars = {
        id: dish.id,
        username: dish.user_name,
        image_url: dish.image_url,
        name: dish.name,
        dish_type: dish.dish_type_name,
        venue: dish.venue_name,
        counter: dish.counter
      }
      // alternative templating style
      var dishCardTemplate = $('#dish-card-template').html();
      var templateFunction = _.template(dishCardTemplate);
      var html = templateFunction(templateVars);
      $('.main-container').append(html);
    });
  }
};

var updateLikes = function(target, data) {
  // get list of cards
  var dishCards = document.getElementsByClassName('ui-card');
  var dishLikes = document.getElementsByClassName('ui-card-like-counter');
  for (var i = 0; i < dishCards.length; i++) {
    if (isDescendant(dishCards[i], target)) {
      for (var j = 0; j < dishLikes.length; j++) {
        if (isDescendant(dishCards[i], dishLikes[j])) {
          // update the likes for the clicked card
          // var currentLikes = Number(dishLikes[j].getAttribute('data-count'));
          // currentLikes++
          // dishLikes[j].innerHTML = String(currentLikes);
          dishLikes[j].setAttribute('data-count', data.count);
          dishLikes[j].innerHTML = String(data.count) + " &hearts;";
        }
      }
    }
  }
};

var getDishId = function(target) {
  var dishCards = document.getElementsByClassName('ui-card');
  for (var i = 0; i < dishCards.length; i++) {
    if (isDescendant(dishCards[i], target)) {
      return dishCards[i].getAttribute('data-id');
    }
  }
};

$('main').on("click", $('.ui-card-like-indicator'), function(event) {
  var targetDish = event.target;
  var targetId = getDishId(targetDish);
  var options = {
    url: '/api/dishes/' + targetId + '/likes',
    method: 'post',
    dataType: 'json'
  };
  $.ajax(options).done(function(data) {
    updateLikes(targetDish, data);
  });
});

$.ajax(options).done(function(data) {
  displayDishes(data);
});
