import Ember from 'ember';
import LoggerMixin from '../mixins/logger-mixin';

export default Ember.Route.extend(LoggerMixin, {

	/**
	 * Set the browser tab title
	 */
	title: function() {
		const i18n = this.get('i18n');
		return i18n.t("application.title") + " | " +
			i18n.t("page.home.title");
	}.property(),

	/**
	 * Before the model loads, transition to the assign-provision page
	 */
	beforeModel() {
		this.transitionTo('about');
	}

});
