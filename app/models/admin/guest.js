import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	name: 					  DS.attr('string'),
	emailAddress:			DS.attr('string'),
	cellNumber:				DS.attr('string'),
	createdDate:			DS.attr('date'),
	modifiedDate:			DS.attr('date'),
	deletedDate:			DS.attr('date'),

	isActive: 				    Ember.computed.none('deletedDate'),
	isDeactive:				    Ember.computed.not('isActive'),
	isNameLongEnough: 		Ember.computed.gte('name.length', 3),
	isValidEmailAddress: 	Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isModelValid: 			  Ember.computed.and('isNameLongEnough', 'isValidEmailAddress'),
	isModelNotValid: 		  Ember.computed.not('isModelValid'),

	responseMessage: 		  DS.attr('string'),
	errorMessage: 			  DS.attr('string'),

	isEditing: function() {
		return this.get('id') ? true : false;
	}.property('id'),

	apiCreate() {
		const adapter = this.store.adapterFor(this.constructor.modelName);
		return adapter.apiCreate(this);
	},

	apiUpdate() {
		const adapter = this.store.adapterFor(this.constructor.modelName);
		return adapter.apiUpdate(this);
	},

	apiActivate() {
		const adapter = this.store.adapterFor(this.constructor.modelName);
		return adapter.apiActivate(this);
	},

	apiDeactivate() {
		const adapter = this.store.adapterFor(this.constructor.modelName);
		return adapter.apiDeactivate(this);
	}
});
