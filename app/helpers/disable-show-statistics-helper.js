import Ember from 'ember';

export function disabledShowStatisticsHelper(params) {
	let modelLength = params[0];
	let isGraphDisplaying = params[1];
	
	// Check to make sure it's an int
	modelLength = parseInt(modelLength) || 0;

	// Return whether the parameter is empty
	return (modelLength === 0 && !isGraphDisplaying) ? true : false;
}

export default Ember.Helper.helper(disabledShowStatisticsHelper);