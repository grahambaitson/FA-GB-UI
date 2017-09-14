import Ember from 'ember';

export default Ember.Controller.extend({

	columns: Ember.computed('i18n.locale', function() {
		const i18n = this.get('i18n');

		return [
        	{
        		propertyName: 'id',
        		title: i18n.t("page.admin.booking.table.id-header").string,
        		isHidden: true
        	},
        	{
        		propertyName: 'guestEmailAddress',
        		title: i18n.t("page.admin.booking.table.guest-email-address-header").string,
        		filterPlaceholder: i18n.t("page.admin.booking.table.guest-email-address-filter").string,
        		filterWithSelect: true
        	},
        	{
        		propertyName: 'hotelName',
        		title: i18n.t("page.admin.booking.table.hotel-name-header").string,
        		filterPlaceholder: i18n.t("page.admin.booking.table.hotel-name-filter").string,
        		filterWithSelect: true
        	},
        	{
        		propertyName: 'rate',
        		title: i18n.t("page.admin.booking.table.booking-rate-header").string,
        		filterPlaceholder: i18n.t("page.admin.booking.table.booking-rate-filter").string
        	},
        	{
            propertyName: 'reservationStartDate',
            title: i18n.t("page.admin.booking.table.reservation-start-date-header").string,
            filterPlaceholder: i18n.t("page.admin.booking.table.reservation-start-date-filter").string,
            template: "libraries/models-table/admin/booking/reservation-start-date",
            disableFiltering: true
          },
          {
            propertyName: 'reservationEndDate',
            title: i18n.t("page.admin.booking.table.reservation-end-date-header").string,
            filterPlaceholder: i18n.t("page.admin.booking.table.reservation-end-date-filter").string,
            template: "libraries/models-table/admin/booking/reservation-end-date",
            disableFiltering: true
          },
          {
            propertyName: 'reservationColour',
            title: i18n.t("page.admin.booking.table.reservation-colour-header").string,
            filterPlaceholder: i18n.t("page.admin.booking.table.reservation-colour-filter").string,
            template: "libraries/models-table/admin/booking/reservation-colour"
          },
        	{
        		propertyName: 'createdDate',
        		title: i18n.t("page.admin.booking.table.created-date-header").string,
        		filterPlaceholder: i18n.t("page.admin.booking.table.created-date-filter").string,
        		template: "libraries/models-table/created-date-us",
        		disableFiltering: true,
        		isHidden: true
        	},
        	{
        		propertyName: 'isActive',
        		title: i18n.t("page.admin.booking.table.active-header").string,
        		template: "libraries/models-table/admin/booking/is-active",
        		filterWithSelect: true,
        		predefinedFilterOptions: [
        		     "true",
        		     "false"
                ]
        	},
        	{
        		template: "libraries/models-table/admin/booking/row-function"
        	}
    	];
	})

});
