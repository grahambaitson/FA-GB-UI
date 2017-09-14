import ApplicationAdapter from '../application';

//Reference: https://emberigniter.com/non-standard-rest-actions-ember-data/
export default ApplicationAdapter.extend({

	apiCreate(model) {
		// Retrieve the data from the model
		const name = model.get('name');
		const address = model.get('address');
		const numberOfRooms = model.get('numberOfRooms');
    const rate = model.get('rate');

		// Populate the API request
		const url = this.buildURL('hotel');
		const data = {
			"hotelInput" : {
				"name": name,
				"address": address,
				"numberOfRooms": numberOfRooms,
				"rate": rate
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
		const address = model.get('address');
		const numberOfRooms = model.get('numberOfRooms');
		const rate = model.get('rate');

		// Populate the API request
		const url = this.buildURL('hotel', id);
		const data = {
			"input" : {
				"name": name,
				"address": address,
				"numberOfRooms": numberOfRooms,
				"rate": rate
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

	apiActivate(model) {
		const id = model.get('id');
		const url = this.buildURL('hotel/activate', id);
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
		const url = this.buildURL('hotel/activate', id);
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
