import ApplicationAdapter from '../application';

//Reference: https://emberigniter.com/non-standard-rest-actions-ember-data/
export default ApplicationAdapter.extend({

  apiUploadJson(model) {
    // Retrieve the data from the model
    const json = model.get('json');

    // Populate the API request
    const url = this.buildURL('booking/multiple');

    // Send the request
    return $.ajax({
      type: 'POST',
      url: url,
      data: json,
      contentType: 'application/json',
      dataType: 'json'
    });
  },

  /*
	apiCreate(model) {
		// Retrieve the data from the model
		const name = model.get('name');
		const emailAddress = model.get('emailAddress').toLowerCase();
		const cellNumber = model.get('cellNumber');

		// Populate the API request
		const url = this.buildURL('guest');
		const data = {
			"guestInput" : {
				"name": name,
				"emailAddress": emailAddress,
				"cellNumber": cellNumber
			}
		};

		// Send the request
		return $.ajax({
			type: 'POST',
			url: url,
			data: JSON.stringify(data),
		    contentType: 'application/json',
		    dataType: 'json'
		});
	},

	apiUpdate(model) {
		// Retrieve the data from the model
		const id = model.get('id');
		const name = model.get('name');
		const emailAddress = model.get('emailAddress').toLowerCase();
		const cellNumber = model.get('cellNumber');

		// Populate the API request
		const url = this.buildURL('guest', id);
		const data = {
			"input" : {
				"name": name,
				"emailAddress": emailAddress,
				"cellNumber": cellNumber
			}
		};

		// Send the request
		return $.ajax({
			type: 'PUT',
			url: url,
			data: JSON.stringify(data),
		    contentType: 'application/json',
		    dataType: 'json'
		});
	},
  */
	apiActivate(model) {
		const id = model.get('id');
		const url = this.buildURL('booking/activate', id);
		const data = {
			"activate": true
		};

		return $.ajax({
			type: 'PUT',
			url: url,
			data: JSON.stringify(data),
		    contentType: 'application/json',
		    dataType: 'json'
		});
	},

	apiDeactivate(model) {
		const id = model.get('id');
		const url = this.buildURL('booking/activate', id);
		const data = {
			"activate": false
		};

		return $.ajax({
			type: 'PUT',
			url: url,
			data: JSON.stringify(data),
		    contentType: 'application/json',
		    dataType: 'json'
		});
	}

});
