import Ember from 'ember';

export function isEqualToHelper(params) {
	let param0 = params[0].toLowerCase();
	let param1 = params[1].toLowerCase();
	
	return param0 === param1;
}

export default Ember.Helper.helper(isEqualToHelper);
