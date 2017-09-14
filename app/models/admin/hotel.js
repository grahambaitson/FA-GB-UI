import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	name: 					  DS.attr('string'),
	address:			    DS.attr('string'),
	numberOfRooms:		DS.attr('number', { defaultValue: 0 }),
	rate:             DS.attr('number', { defaultValue: 0 }),
	createdDate:			DS.attr('date'),
	modifiedDate:			DS.attr('date'),
	deletedDate:			DS.attr('date'),

	isActive: 				    Ember.computed.none('deletedDate'),
	isDeactive:				    Ember.computed.not('isActive'),
	isNameLongEnough: 		Ember.computed.gte('name.length', 3),
  isAddressLongEnough:  Ember.computed.gte('address.length', 3),
  isNumberOfRoomsValid: Ember.computed.gt('numberOfRooms', 0),
  isRateValid:          Ember.computed.gte('rate', 0),
	isModelValid: 			  Ember.computed.and('isNameLongEnough', 'isAddressLongEnough', 'isNumberOfRoomsValid', 'isRateValid'),
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
