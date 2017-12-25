<template>
  <div class="conf-booking">
    <register v-if="showRegister"></register>
    <seating :details="bookings" v-if="showSeating"></seating>
    <confirmation :details="bookings[0]" v-if="showConfirmation"></confirmation>
    <game v-if="showGame"></game>
  </div>
</template>

<style>
.booking-conf {
background-color: plum;
}
.title {
text-align: center;
}
</style>

<script>
var $ = require('jquery');

module.exports = {
  data: function() {
    return {
      conference: 'WDI5',
      bookings: [],
      showRegister: true,
      showSeating: false,
      showConfirmation: false,
      showGame: false
    }
  },
  components: {
    register: require('./register.vue'),
    seating: require('./seating.vue'),
    confirmation: require('./booking-app.vue'),
    game: require('./game.vue')
  },
  events: {
    'register-confirm': function (data) {
      if (data) {
        this.showRegister = false;
        this.showSeating = true;
        this.showGame = false;
      }
    },
    'launch-game': function(data) {
      if (data.seat) {
        this.showRegister = false;
        this.showSeating = false;
        this.showGame = true;
      }
    }
  },
  ready: function() {
    console.log('Populating bookings');
    vueContext = this;
    $.ajax({
      url: '/api/bookings',
      context: vueContext,
      dataType: 'json'
    }).done(function( data ) {
      if (data !== null) {
        // case where data fetch has
        console.log('Bookings data has been fetched.')
        vueContext.bookings = data;
      } else
    });
  }
}
</script>
