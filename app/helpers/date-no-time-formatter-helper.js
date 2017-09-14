import Ember from 'ember';

export function dateNoTimeFormatter(params) {
	let date = params[0];
	let format = params[1];

	if(date) {
		if (typeof(format) !== 'string') {
			format = 'YYYY-MM-DD';
		}

		return moment(date).format(format);
	}

	return "";
}

export default Ember.Helper.helper(dateNoTimeFormatter);
