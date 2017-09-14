import Ember from 'ember';
import DateRangeMixin from '../mixins/daterange-mixin';

export default Ember.Route.extend(DateRangeMixin, {

  initialPageLoad: true,

	/**
	 * Set the browser tab title
	 */
	title: function() {
		const i18n = this.get('i18n');
		return i18n.t("application.title") + " | " +
			i18n.t("page.about.title");
	}.property(),

	/**
   * Create the model for the page
   * Return a list of all guests and hotels
   */
  model(params) {
    return {
      "activeGuests": this.store.findAll('admin/guest', { reload: true }),
      "activeHotels": this.store.findAll('admin/hotel', { reload: true }),
    };
  },

	/**
   * Once the model has loaded, set the accordion functionality
   */
  afterModel() {
    const self = this;

    // Setup the date range picker only if it's the initial page load - set in DateRangeMixin
    // The reason here is because the model is refreshed depending on the daterange picker
    if(this.get('initialPageLoad')) {
      Ember.run.scheduleOnce('afterRender', this, function() {
        self.setupDataRangePicker();
      });
    }

    // Setup the accordion
    Ember.run.scheduleOnce('afterRender', this, function() {
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight){
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        };
      }
    });
  },

  /**
   * Create the actions needed for functionality
   */
  actions: {
    willTransition(transition) {
      // These are needed in order to reset the date range picker
      // Depending on whether it was a page refresh or initial page load
      if(transition.targetName === this.routeName) {
        this.set('initialPageLoad', false);
      } else {
        this.resetDateRangeMoments();
        this.set('initialPageLoad', true);
      }
    }
  }
});
