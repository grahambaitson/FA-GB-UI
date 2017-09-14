import Ember from 'ember';
import DOMMixin from '../mixins/dom-mixin';

export default Ember.Mixin.create(DOMMixin, {

	dateRangeStartDateMoment: moment().startOf('week'),
	dateRangeEndDateMoment: moment(),

	/**
	 * Reset the date range moments so for the next time they will be defaulted
	 * This is need for when the route is returning to the page
	 */
	resetDateRangeMoments: function() {
		this.set('dateRangeStartDateMoment', moment().startOf('week'));
		this.set('dateRangeEndDateMoment', moment());
	},

	/**
	 * Reference: http://www.daterangepicker.com/
	 * Set up the functionality for the daterange picker
	 */
	setupDataRangePicker: function() {
		const self = this;

		var start = this.get('dateRangeStartDateMoment');
	    var end = this.get('dateRangeEndDateMoment');
	    const dateRangeId = this.getDateRangeDomId();
	    const selectedDateRangeId = this.getSelectedDateRangeSpanDomId();

	    /**
	     * Callback function for when the date range is selected
	     */
	    function dateRangeSelected(start, end, selectedDateRangeLabel) {
	    	// Set the date range display
	    	setDateRangeDisplay(start, end, selectedDateRangeLabel);

	        // Refresh the model based on the daterange selection
	        self.refresh();
	    }

	    /**
	     * Set the date range display
	     */
	    function setDateRangeDisplay(start, end, selectedDateRangeLabel) {
	    	// Set the daterange display
	    	$(dateRangeId + ' span').html(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));

	        // Save the start and end dates to check on the route to filter the model
	        self.set('dateRangeStartDateMoment', start);
        	self.set('dateRangeEndDateMoment', end);

	        // Display what filter option was selected
	        $(selectedDateRangeId).html(self.get('i18n').t('partial.plotly-interactions-partial.selected-label').string +
	        	selectedDateRangeLabel);
	    }

	    /**
	     * Reset the date range to the default states
	     */
	    function resetDefaultDateRange() {
         	start = moment().startOf('week');
    	    end = moment();
	    }

	    /**
	     * Setup the date range picker ranges and callback function
	     */
	    $(dateRangeId).daterangepicker({
	        startDate: start,
	        endDate: end,
	        ranges: {
	           'Today': [moment(), moment()],
	           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
	           'This Week': [moment().startOf('week'), moment().endOf('week')],
	           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
	           'Last Week': [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
	           'This Month': [moment().startOf('month'), moment().endOf('month')],
	           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
	           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
	           'All Time': [moment(new Date(0)), moment()]
	        }
	    }, dateRangeSelected);

	    // Initially set the date range display
	    resetDefaultDateRange();
	    setDateRangeDisplay(start, end, this.get('i18n').t('partial.plotly-interactions-partial.daterange-this-week-label').string);
	}

});
