/* jshint node: true */

module.exports = function(environment) {
	var ENV = {
		modulePrefix: 'fa-gb-ui',
		environment: environment,
		baseURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		},

		// NOTE: Set the default locale
		i18n: {
			defaultLocale: 'en'
		},

		// Deployment variables
		deployment: {
			host: 'localhost'
		}
	};

	if (environment === 'development') {
		ENV.deployment.host = 'localhost';
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.baseURL = '/';
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {
		ENV.deployment.host = 'api';
		// When using location: 'history', which is the default for 'auto', you may encounter the problem that on a reload you will get a 404.
		// That is because your webserver can not serve the file the URL assumes. You need to tell your webserver that it should always use index.html
		// Use this if you don't have control over the server properties.
		//ENV.locationType = 'hash';
	}

	return ENV;
};
