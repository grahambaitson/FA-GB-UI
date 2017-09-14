// app/controllers/application.js
import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  init: function() {
  },

   /**
	 * Actions
	 */
  actions: {
	  logout() {
		  this.get('session').invalidate();
	  }
  }
});
