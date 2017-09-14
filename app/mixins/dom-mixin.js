import Ember from 'ember';

export default Ember.Mixin.create({

	getDateRangeDomId: function() {
		return "#DivDateRange";
	},

	getSelectedDateRangeSpanDomId: function() {
		return "#SpanSelectedDateRange";
	}

});
