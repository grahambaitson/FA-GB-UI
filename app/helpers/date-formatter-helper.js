import Ember from 'ember';

export function dateFormatter(params) {
	let date = params[0];
	let format = params[1];	
	
	if(date) {
		if (typeof(format) !== 'string') {
			format = 'MMMM DD, YYYY HH:mm:ss';
		} 

		return moment(date).format(format);
	} 
	
	return "";		
}

export default Ember.Helper.helper(dateFormatter);