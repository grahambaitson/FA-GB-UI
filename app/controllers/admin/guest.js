import Ember from 'ember';

export default Ember.Controller.extend({

	columns: Ember.computed('i18n.locale', function() {
		const i18n = this.get('i18n');

		return [
        	{
        		propertyName: 'id',
        		title: i18n.t("page.admin.guest.table.id-header").string,
        		isHidden: true
        	},
        	{
        		propertyName: 'name',
        		title: i18n.t("page.admin.guest.table.name-header").string,
        		filterPlaceholder: i18n.t("page.admin.guest.table.name-filter").string
        	},
        	{
        		propertyName: 'emailAddress',
        		title: i18n.t("page.admin.guest.table.email-address-header").string,
        		filterPlaceholder: i18n.t("page.admin.guest.table.email-address-filter").string
        	},
        	{
        		propertyName: 'cellNumber',
        		title: i18n.t("page.admin.guest.table.cell-number-header").string,
        		filterPlaceholder: i18n.t("page.admin.guest.table.cell-number-filter").string
        	},
        	{
        		propertyName: 'createdDate',
        		title: i18n.t("page.admin.guest.table.created-date-header").string,
        		filterPlaceholder: i18n.t("page.admin.guest.table.created-date-filter").string,
        		template: "libraries/models-table/created-date-us",
        		disableFiltering: true
        	},
        	{
        		propertyName: 'isActive',
        		title: i18n.t("page.admin.guest.table.active-header").string,
        		template: "libraries/models-table/admin/guest/is-active",
        		filterWithSelect: true,
        		predefinedFilterOptions: [
        		     "true",
        		     "false"
                ]
        	},
        	{
        		template: "libraries/models-table/admin/guest/row-function"
        	}
    	];
	})

});
