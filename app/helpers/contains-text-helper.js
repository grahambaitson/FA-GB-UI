import Ember from 'ember';

export function containsTextHelper(params) {
	let param0 = params[0].toLowerCase();
	let param1 = params[1].toLowerCase();
	
	return (param0.indexOf(param1) !== -1);
}

export default Ember.Helper.helper(containsTextHelper);
