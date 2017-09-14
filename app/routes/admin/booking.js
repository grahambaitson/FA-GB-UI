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
			i18n.t("page.admin.booking.title");
	}.property(),

	/**
	 * Create the model for the page
	 * Return a list of all the bookings
	 */
	model() {
		return this.store.findAll('admin/booking', { reload: true });
	},

	/**
	 * Make sure that the error and response messages are clear
	 */
	afterModel() {
	  const self = this;

		var model = this.modelFor(this.routeName);
		model.set('errorMessage', '');
		model.set('responseMessage', '');
	},

	/**
	 * Create the actions needed for functionality
	 */
	actions: {

		/**
		 * Activate the selected booking
		 */
		activate(uiBooking, model) {
			const self = this;
			const confirmActivateMessage = this.get('i18n').t("page.admin.booking.confirm-activate-message");

			var confirmation = confirm(confirmActivateMessage);
	        if(confirmation) {
	        	const guestEmailAddress = uiBooking.get('guestEmailAddress');
            const hotelName = uiBooking.get('hotelName');
            const reservationStartDate = uiBooking.get('reservationStartDate');

	        	uiBooking.apiActivate()
	        		.then(response => {
	        			if(response.successful) {
	        				self.logMessage('DEBUG', response.responseMessage);

	        				uiBooking.set('deletedDate', null);

		        			model.set('errorMessage', '');
		        			model.set('responseMessage', response.responseMessage + ' (' + guestEmailAddress + ', ' + hotelName + ', ' + reservationStartDate + ')');
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
		 * Deactivate the selected booking
		 */
		deactivate(uiBooking, model) {
			const self = this;
			const confirmDeactivateMessage = this.get('i18n').t("page.admin.booking.confirm-deactivate-message");

			var confirmation = confirm(confirmDeactivateMessage);
	        if(confirmation) {
	        	const guestEmailAddress = uiBooking.get('guestEmailAddress');
	        	const hotelName = uiBooking.get('hotelName');
	        	const reservationStartDate = uiBooking.get('reservationStartDate');

	        	uiBooking.apiDeactivate()
	        		.then(response => {
	        			if(response.successful) {
	        				self.logMessage('DEBUG', response.responseMessage);

	        				uiBooking.set('deletedDate', new Date(response.date));

		        			model.set('errorMessage', '');
		        			model.set('responseMessage', response.responseMessage + ' (' + guestEmailAddress + ', ' + hotelName + ', ' + reservationStartDate + ')');
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
		 * Delete the booking permanently
		 */
		deleteBooking(uiBooking, model) {
			const self = this;
			const confirmDeleteMessage = this.get('i18n').t("page.admin.booking.confirm-delete-message");

			var confirmation = confirm(confirmDeleteMessage);
      if(confirmation) {
        const emailAddress = uiBooking.get('emailAddress');

        uiBooking.destroyRecord()
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
