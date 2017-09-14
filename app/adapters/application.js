import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://' + window.location.hostname + ':8081',
	headers: {
		"Accept": "application/json",
		"API_TOKEN": "FAToken"
	}
});
