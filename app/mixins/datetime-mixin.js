import Ember from 'ember';

export default Ember.Mixin.create({		
	
	/**
	 * Based on an epoch datetime, return a formatted datetime
	 */
	convertFromEpochToDatetime: function(epochTime) {
		const date = new Date(0);
		date.setUTCSeconds(epochTime);
		
		return this.formatDatetime(date);
	},
	
	/**
	 * Format the datetime to be displayed as the date and time
	 */
	formatDatetime: function(datetime) {
	    const year = datetime.getFullYear();
	    
	    const month = this.zeroPad(datetime.getMonth() + 1, 2);
	    const date = this.zeroPad(datetime.getDate(), 2);
	    const hours = this.zeroPad(datetime.getHours(), 2);
	    const minutes = this.zeroPad(datetime.getMinutes(), 2);
	    const seconds = this.zeroPad(datetime.getSeconds(), 2);
	    
	    return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
	},

	/**
	 * Pad the value with zeros
	 * Reference: http://stackoverflow.com/a/2998874/1634369
	 */
	zeroPad: function(num, places) {
		var zero = places - num.toString().length + 1;
		return Array(+(zero > 0 && zero)).join("0") + num;
	}
		
});