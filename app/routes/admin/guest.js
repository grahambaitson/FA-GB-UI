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
			i18n.t("page.admin.guest.title");
	}.property(),

	/**
	 * Create the model for the page
	 * Return a list of all the guests
	 */
	model() {
		return this.store.findAll('admin/guest', { reload: true });
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
		 * Activate the selected guest
		 */
		activate(uiGuest, model) {
			const self = this;
			const confirmActivateMessage = this.get('i18n').t("page.admin.guest.confirm-activate-message");

			var confirmation = confirm(confirmActivateMessage);
	        if(confirmation) {
	        	const emailAddress = uiGuest.get('emailAddress');

	        	uiGuest.apiActivate()
	        		.then(response => {
	        			if(response.successful) {
	        				self.logMessage('DEBUG', response.responseMessage);

	        				uiGuest.set('deletedDate', null);

		        			model.set('errorMessage', '');
		        			model.set('responseMessage', response.responseMessage + ' (' + emailAddress + ')');
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
		 * Deactivate the selected guest
		 */
		deactivate(uiGuest, model) {
			const self = this;
			const confirmDeactivateMessage = this.get('i18n').t("page.admin.guest.confirm-deactivate-message");

			var confirmation = confirm(confirmDeactivateMessage);
	        if(confirmation) {
	        	const emailAddress = uiGuest.get('emailAddress');

	        	uiGuest.apiDeactivate()
	        		.then(response => {
	        			if(response.successful) {
	        				self.logMessage('DEBUG', response.responseMessage);

	        				uiGuest.set('deletedDate', new Date(response.date));

		        			model.set('errorMessage', '');
		        			model.set('responseMessage', response.responseMessage + ' (' + emailAddress + ')');
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
		 * Delete the guest permanently
		 */
		deleteGuest(uiGuest, model) {
			const self = this;
			const confirmDeleteMessage = this.get('i18n').t("page.admin.guest.confirm-delete-message");

			var confirmation = confirm(confirmDeleteMessage);
	        if(confirmation) {
	        	const emailAddress = uiGuest.get('emailAddress');

	        	uiGuest.destroyRecord()
		        	.then(response => {
	        			if(response.successful) {
	        				self.logMessage('DEBUG', response.responseMessage);

		        			model.set('errorMessage', '');
		        			model.set('responseMessage', response.responseMessage + ' (' + emailAddress + ')');
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
