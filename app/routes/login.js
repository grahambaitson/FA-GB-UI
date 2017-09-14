import Ember from 'ember';

export default Ember.Route.extend({


	session: Ember.inject.service('session'),
	
	  
	/**
	 * Set the browser tab title
	 */
	title: function() {
		const i18n = this.get('i18n');
		return i18n.t("application.title") + " | " + 
			i18n.t("page.login.title");
	}.property(),
	
	/**
	 * Create the model for the page
	 */
	model() {		
		return this.store.createRecord('user');
	},
	
	/**
	 * Actions
	 */
	actions: {
		authenticate(uiUser) {
			
			const credentials = uiUser.getProperties('username', 'password');
			var model = this.modelFor(this.routeName);
				
			this.get('session').authenticate('authenticator:oauth2', credentials.username, credentials.password)
				   .then(response => {
					   console.log("Login success.");
					   console.log(response);

					   // TODO: response object undefined.. do we need it ?
					   //model.set('responseMessage', response.responseMessage);
					   model.set('errorMessage', '');
				   })
				   .catch(error => {
					   console.log("Login fail.");
					   console.log(error);
										
					   model.set('responseMessage', '');
					   model.set('errorMessage', error.errorMessage);
				   });
		}
	}

});
