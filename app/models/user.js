import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	username: 			DS.attr('string'),
	password:				DS.attr('string'),

	isUsernameLongEnough: 	Ember.computed.gte('username.length', 1),
	isPasswordLongEnough: 	Ember.computed.gte('password.length', 1),

	isModelValid: 			Ember.computed.and('isUsernameLongEnough', 'isPasswordLongEnough'),
	isModelNotValid: 		Ember.computed.not('isModelValid'),

	responseMessage: 	DS.attr('string'),
	errorMessage: 		DS.attr('string')
});
