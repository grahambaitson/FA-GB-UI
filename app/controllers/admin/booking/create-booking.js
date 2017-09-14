import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    setSelectedGuestDetails: function(selectedGuest) {
    console.log("here");
      this.set('guestEmailAddress', selectedGuest.emailAddress);
      this.set('selectedGuestName', selectedGuest.name);
    },

    setSelectedHotelDetails: function(selectedHotelName) {
    console.log("here");
      this.set('hotelName', selectedHotelName);
    }
  }
});
