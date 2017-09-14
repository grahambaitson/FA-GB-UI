import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import LoggerMixin from '../../../mixins/logger-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, LoggerMixin, {

	/**
	 * Set the browser tab title
	 */
	title: function() {
		const i18n = this.get('i18n');
		return i18n.t("application.title") + " | " +
			"Admin | " +
			i18n.t("page.admin.guest.title") + " | " +
			i18n.t("page.admin.guest.create-guest.title");
	}.property(),

	/**
	 * Create the model for the page
	 * Return a list of all the guests
	 */
	model(params) {
		var model = null;

		// Check to see if there is query parameters for the ID
		// This means that we are editing a user
		const id = params.id;
		if(id) {
			model = this.store.find('admin/guest', id);
		} else {
			model = this.store.createRecord('admin/guest');
		}

		return model;
	},

	/**
	 * Make sure that the error and response messages are clear
	 */
	afterModel() {
		var model = this.modelFor(this.routeName);
		model.set('errorMessage', '');
		model.set('responseMessage', '');
	},

	/**
	 * Create the actions needed for functionality
	 */
	actions: {

		/**
		 * Attempt to create a new guest
		 */
		create() {
			const self = this;

			// Debug Message
			this.logMessage('DEBUG', 'Attempting to create a new guest');

			// Retrieve model data from UI and attempt to save
			var model = this.modelFor(this.routeName);
			model.apiCreate()
				.then(response => {
	    			if(response.successful) {
	    				// Debug Message
	    				self.logMessage('DEBUG', response.responseMessage);

	    				// Reset the model values to start from scratch
	    				model.set('id', null);
	    				model.set('name', null);
	    				model.set('emailAddress', null);
	    				model.set('cellNumber', null);

              model.set('errorMessage', '');
              model.set('responseMessage', response.responseMessage);
	    			} else {
	    				// Error Message
	    				self.logMessage('ERROR', response.errorMessage);


	    				model.set('errorMessage', response.errorMessage);
	        			model.set('responseMessage', '');
	    			}
	    		}).catch(error => {
	    			// Error Message
	    			self.logMessage('ERROR', error);

	    			model.set('responseMessage', '');
	    			model.set('errorMessage', error);
	    		});
		},

		/**
		 * Attempt to update the guest
		 */
		update() {
			const self = this;

			// Debug Message
			this.logMessage('DEBUG', 'Attempting to update the guest');

			// Retrieve model data from UI and attempt to update
			var model = this.modelFor(this.routeName);
			model.apiUpdate()
				.then(response => {
	    			if(response.successful) {
	    				// Debug Message
	    				self.logMessage('DEBUG', response.responseMessage);

	        			model.set('errorMessage', '');
	        			model.set('responseMessage', response.responseMessage);
	    			} else {
	    				// Error Message
	    				self.logMessage('ERROR', response.errorMessage);

	    				model.set('errorMessage', response.errorMessage);
	        			model.set('responseMessage', '');
	    			}
	    		}).catch(error => {
	    			// Error Message
	    			self.logMessage('ERROR', error);

	    			model.set('responseMessage', '');
	    			model.set('errorMessage', error);
	    		});
		},

		/**
		 * This is called when we are transitioning to a different page above
		 * NOTE: rollbackAttributes removes the record from the store if the model 'isNew'
		 * Here we are checking if any of the fields have been filled in, check with the user
		 */
		willTransition(transition) {
			var model = this.modelFor(this.routeName);
			if(model && model.get('hasDirtyAttributes')) {
				model.rollbackAttributes();
			}
	    }

	}

});
