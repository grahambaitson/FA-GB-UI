import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import LoggerMixin from '../../mixins/logger-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, LoggerMixin, {

	/**
	 * Set the browser tab title
	 */
	title: function() {
		const i18n = this.get('i18n');
		return i18n.t("application.title") + " | " +
			"Admin | " +
			i18n.t("page.admin.hotel.title");
	}.property(),

	/**
	 * Create the model for the page
	 * Return a list of all the hotels
	 */
	model() {
		return this.store.findAll('admin/hotel', { reload: true });
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
		 * Activate the selected hotel
		 */
		activate(uiHotel, model) {
			const self = this;
			const confirmActivateMessage = this.get('i18n').t("page.admin.hotel.confirm-activate-message");

			var confirmation = confirm(confirmActivateMessage);
	        if(confirmation) {
	        	const name = uiHotel.get('name');

	        	uiHotel.apiActivate()
	        		.then(response => {
	        			if(response.successful) {
	        				self.logMessage('DEBUG', response.responseMessage);

	        				uiHotel.set('deletedDate', null);

		        			model.set('errorMessage', '');
		        			model.set('responseMessage', response.responseMessage + ' (' + name + ')');
	        			} else {
	        				self.logMessage('ERROR', response.errorMessage);

	        				model.set('errorMessage', response.errorMessage);
		        			model.set('responseMessage', '');
	        			}
	        		}).catch(error => {
	        			self.logMessage('ERROR', error);

	        			model.set('responseMessage', '');
	        			model.set('errorMessage', error);
	        		});
	        }
		},

		/**
		 * Deactivate the selected hotel
		 */
		deactivate(uiHotel, model) {
			const self = this;
			const confirmDeactivateMessage = this.get('i18n').t("page.admin.hotel.confirm-deactivate-message");

			var confirmation = confirm(confirmDeactivateMessage);
	        if(confirmation) {
	        	const name = uiHotel.get('name');

	        	uiHotel.apiDeactivate()
	        		.then(response => {
	        			if(response.successful) {
	        				self.logMessage('DEBUG', response.responseMessage);

	        				uiHotel.set('deletedDate', new Date(response.date));

		        			model.set('errorMessage', '');
		        			model.set('responseMessage', response.responseMessage + ' (' + name + ')');
	        			} else {
	        				self.logMessage('ERROR', response.errorMessage);

	        				model.set('errorMessage', response.errorMessage);
		        			model.set('responseMessage', '');
	        			}
	        		}).catch(error => {
	        			self.logMessage('ERROR', error);

	        			model.set('responseMessage', '');
	        			model.set('errorMessage', error);
	        		});
	        }
		},

		/**
		 * Delete the hotel permanently
		 */
		deleteHotel(uiHotel, model) {
			const self = this;
			const confirmDeleteMessage = this.get('i18n').t("page.admin.hotel.confirm-delete-message");

			var confirmation = confirm(confirmDeleteMessage);
	        if(confirmation) {
	        	const name = uiHotel.get('name');

	        	uiHotel.destroyRecord()
		        	.then(response => {
	        			if(response.successful) {
	        				self.logMessage('DEBUG', response.responseMessage);

		        			model.set('errorMessage', '');
		        			model.set('responseMessage', response.responseMessage + ' (' + name + ')');
	        			} else {
	        				self.logMessage('ERROR', response.errorMessage);

	        				model.set('errorMessage', response.errorMessage);
		        			model.set('responseMessage', '');
	        			}
	        		}).catch(error => {
	        			self.logMessage('ERROR', error);

	        			model.set('responseMessage', '');
	        			model.set('errorMessage', error);
	        		});
	        }
		}
	}

});
