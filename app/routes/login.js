import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	session: Ember.inject.service(),
	actions: {
		login: function() {
			var route = this;
			var credentials = {
				provider: 'password',
				email: this.controllerFor('login').get('email'),
				password: this.controllerFor('login').get('password')
			};
			this.get('session').authenticate('authenticator:firebase-simple-auth','firebase-simple-auth', credentials).then(function() {
				route.transitionTo('index');
			});
		},

		logout: function() {
			var route = this;
			this.get('session').invalidate().then(function() {
				route.transitionTo('index');
			});
		},

		sessionAuthenticationFailed: function(error) {
			this.controllerFor('login').set('errorMessage', error.message);
		},

		sessionInvalidationSucceeded: function() {
			this.transitionTo('index');
		}
	}
});
