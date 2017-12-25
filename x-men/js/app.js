console.log('X-Men starting...');

var hideElement = function(elt) {
  console.log('Hiding...');
  elt.css('visibility', 'hidden');
};

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var CardView = Backbone.View.extend({

  tagName: 'div',
  className: 'ui-card',
  events: {
    'click img': 'activatePhrase'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var template = $('#x-men-card-template').html();
    var templateFunction = _.template(template);
    var html = templateFunction({ mutant: this.model });
    this.$el.html( html );
    return this;
  },

  activatePhrase: function() {
    console.log('Clicked ' + this.model.name);
    this.$('.x-men-phrase').css('visibility', 'visible');
    window.setTimeout( function() {
      hideElement(this.$('.x-men-phrase'));
    }, 2000);
  }
});

// loop through mutant data create a new view for each and attach them to the dom
var init = function() {
  _.each(mutantData, function(mutant) {
    console.log('Building: ' + mutant.name);
    var view = new CardView({ model: mutant });
    view.render();
    $('.ui-content').append(view.el);
  });
};

$(document).ready(init);
