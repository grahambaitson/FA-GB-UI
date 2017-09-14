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
			i18n.t("page.admin.booking.title") + " | " +
			i18n.t("page.admin.booking.create-booking.title");
	}.property(),

	/**
	 * Create the model for the page
	 * Return a list of all the bookings
	 */
	model(params) {
		var model = this.store.createRecord('admin/booking');

    // Load the list of active guests (at the moment, loading all guests)
    model.set('activeGuests', this.store.findAll('admin/guest', { reload: true }));

    // Load the list of active hotels (at the moment, loading all hotels)
    model.set('activeHotels', this.store.findAll('admin/hotel', { reload: true }));

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
    setSelectedHotelDetails(selectedHotel) {
      console.log("Helo " + selectedHotel);
      this.set('hotelName', selectedHotel.name);
      this.set('selectedHotelAddress', selectedHotel.address);
      this.set('selectedHotelRate', selectedHotel.rate);
    },
		/**
		 * Attempt to create a new booking
		 */
		create() {
			const self = this;

			// Debug Message
			this.logMessage('DEBUG', 'Attempting to create a new booking');

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
		 * Attempt to update the booking
		 */
		update() {
			const self = this;

			// Debug Message
			this.logMessage('DEBUG', 'Attempting to update the booking');

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

		embedProjectExampleJson() {
      // Debug Message
      this.logMessage('DEBUG', 'Attempting to upload multiple project booking JSON');

      // Retrieve model data from UI and attempt to update
      var model = this.modelFor(this.routeName);

      // Provide sample json
      model.set('json', '{' + '\n' +
        '  "input" : [' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-01",' + '\n' +
        '      "rate": "199.99"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-02",' + '\n' +
        '      "rate": "199.99"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-03",' + '\n' +
        '      "rate": "199.99"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-04",' + '\n' +
        '      "rate": "199.99"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-05",' + '\n' +
        '      "rate": "199.99"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-06",' + '\n' +
        '      "rate": "115.49"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-07",' + '\n' +
        '      "rate": "115.49"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-08",' + '\n' +
        '      "rate": "115.49"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-09",' + '\n' +
        '      "rate": "115.49"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-10",' + '\n' +
        '      "rate": "115.49"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-11",' + '\n' +
        '      "rate": "200.00"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-15",' + '\n' +
        '      "rate": "115.49"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-16",' + '\n' +
        '      "rate": "115.49"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-17",' + '\n' +
        '      "rate": "115.49"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-20",' + '\n' +
        '      "rate": "115.49"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-21",' + '\n' +
        '      "rate": "115.49"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-22",' + '\n' +
        '      "rate": "200.00"' + '\n' +
        '    }' + '\n' +
        '  ]' + '\n' +
        '}');
		},

    embedSingleBlockBookingJson() {
      // Debug Message
      this.logMessage('DEBUG', 'Attempting to upload single block booking JSON');

      // Retrieve model data from UI and attempt to update
      var model = this.modelFor(this.routeName);

      // Provide sample json
      model.set('json', '{' + '\n' +
        '  "input" : [' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-01-01",' + '\n' +
        '      "reservationEndDate": "2018-01-07",' + '\n' +
        '      "rate": "255.00",' + '\n' +
        '      "hotelName": "Test Hotel 2",' + '\n' +
        '      "guestEmailAddress": "testuser2@fa.com"' + '\n' +
        '    }' + '\n' +
        '  ]' + '\n' +
        '}');
    },

		embedMixedBlockBookingJson() {
      // Debug Message
      this.logMessage('DEBUG', 'Attempting to upload single block booking JSON');

      // Retrieve model data from UI and attempt to update
      var model = this.modelFor(this.routeName);

      // Provide sample json
      model.set('json', '{' + '\n' +
        '  "input" : [' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-05-02",' + '\n' +
        '      "reservationEndDate": "2018-05-03",' + '\n' +
        '      "rate": "255.00",' + '\n' +
        '      "hotelName": "Test Hotel 2",' + '\n' +
        '      "guestEmailAddress": "testuser2@fa.com"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-02-01",' + '\n' +
        '      "reservationEndDate": "2018-02-11",' + '\n' +
        '      "rate": "150.00",' + '\n' +
        '      "hotelName": "Test Hotel 3",' + '\n' +
        '      "guestEmailAddress": "testuser3@fa.com"' + '\n' +
        '    },' + '\n' +
        '    {' + '\n' +
        '      "reservationStartDate": "2018-02-25",' + '\n' +
        '      "reservationEndDate": "2018-02-28",' + '\n' +
        '      "rate": "150.00",' + '\n' +
        '      "hotelName": "Test Hotel 3",' + '\n' +
        '      "guestEmailAddress": "testuser3@fa.com"' + '\n' +
        '    }' + '\n' +
        '  ]' + '\n' +
        '}');
    },

    /**
      * Function to upload multiple bookings in the form of JSON
      */
		uploadJson() {
		  const self = this;

		  // Debug Message
      this.logMessage('DEBUG', 'Embedding multiple booking JSON example');

      // Retrieve model data from UI and attempt to update
      var model = this.modelFor(this.routeName);

      // Check to make sure it's valid json
      const json = model.get('json');
      try {
          JSON.parse(json);
      } catch (e) {
          model.set('errorMessage', 'Invalid json');
          return;
      }

      model.apiUploadJson()
        .then(response => {
            if(response.successful) {
              // Debug Message
              self.logMessage('DEBUG', response.responseMessage);

              // Reset the model values to start from scratch
              model.set('json', null);

              model.set('errorMessage', '');
              model.set('responseMessage', response.responseMessage);
            } else {
              // Error Message
              self.logMessage('ERROR', response.errorMessage);

              console.log(response);
              console.log(response.errorMessage);

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
