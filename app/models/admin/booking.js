import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	guestEmailAddress: 			  DS.attr('string'),
	hotelName:			          DS.attr('string'),
	rate:				              DS.attr('number', { defaultValue: 0 }),
  reservationStartDate:		  DS.attr('date'),
  reservationEndDate:			  DS.attr('date'),
  reservationColour:			  DS.attr('string'),
  reservationBorderColour:	DS.attr('string'),
	createdDate:			        DS.attr('date'),
	modifiedDate:			        DS.attr('date'),
	deletedDate:			        DS.attr('date'),
	json:                     DS.attr('string'),

	// These are for when creating a booking
  activeGuests:             DS.attr(),
  activeHotels:             DS.attr(),

	isActive: 				      Ember.computed.none('deletedDate'),
	isDeactive:				      Ember.computed.not('isActive'),
	isValidGuestEmailAddress: 	Ember.computed.match('guestEmailAddress', /^.+@.+\..+$/),
	isHotelNameLongEnough:  Ember.computed.gte('hotelName.length', 3),
	isBookingRateValid:     Ember.computed.gt('rate', 0),
	isJsonLongEnough: 		  Ember.computed.gte('json.length', 3),
	isJsonNotLongEnough:    Ember.computed.not('isJsonLongEnough'),
	isModelValid: 			    Ember.computed.and('isValidGuestEmailAddress', 'isHotelNameLongEnough', 'isBookingRateValid'),
	isModelNotValid: 		    Ember.computed.not('isModelValid'),

	responseMessage: 		  DS.attr('string'),
	errorMessage: 			  DS.attr('string'),

	isEditing: function() {
		return this.get('id') ? true : false;
	}.property('id'),

	apiCreate() {
		const adapter = this.store.adapterFor(this.constructor.modelName);
		return adapter.apiCreate(this);
	},

	apiUploadJson() {
    const adapter = this.store.adapterFor(this.constructor.modelName);
    return adapter.apiUploadJson(this);
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
