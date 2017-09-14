import Ember from 'ember';

export function percentageFormatterHelper(params) {
	return parseFloat(params, 10).toFixed(0);	
}

export default Ember.Helper.helper(percentageFormatterHelper);
