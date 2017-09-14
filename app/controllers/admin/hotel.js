import Ember from 'ember';

export default Ember.Controller.extend({

	columns: Ember.computed('i18n.locale', function() {
		const i18n = this.get('i18n');

		return [
        	{
        		propertyName: 'id',
        		title: i18n.t("page.admin.hotel.table.id-header").string,
        		isHidden: true
        	},
        	{
        		propertyName: 'name',
        		title: i18n.t("page.admin.hotel.table.name-header").string,
        		filterPlaceholder: i18n.t("page.admin.hotel.table.name-filter").string
        	},
        	{
        		propertyName: 'address',
        		title: i18n.t("page.admin.hotel.table.address-header").string,
        		filterPlaceholder: i18n.t("page.admin.hotel.table.address-filter").string
        	},
        	{
        		propertyName: 'numberOfRooms',
        		title: i18n.t("page.admin.hotel.table.number-of-rooms-header").string,
        		filterPlaceholder: i18n.t("page.admin.hotel.table.number-of-rooms-filter").string
        	},
        	{
            propertyName: 'rate',
            title: i18n.t("page.admin.hotel.table.rate-header").string,
            filterPlaceholder: i18n.t("page.admin.hotel.table.rate-filter").string
          },
        	{
        		propertyName: 'createdDate',
        		title: i18n.t("page.admin.hotel.table.created-date-header").string,
        		filterPlaceholder: i18n.t("page.admin.hotel.table.created-date-filter").string,
        		template: "libraries/models-table/created-date-us",
        		disableFiltering: true
        	},
        	{
        		propertyName: 'isActive',
        		title: i18n.t("page.admin.hotel.table.active-header").string,
        		template: "libraries/models-table/admin/hotel/is-active",
        		filterWithSelect: true,
        		predefinedFilterOptions: [
        		     "true",
        		     "false"
                ]
        	},
        	{
        		template: "libraries/models-table/admin/hotel/row-function"
        	}
    	];
	})

});
