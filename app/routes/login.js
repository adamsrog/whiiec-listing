import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	actions: {
		login: function() {
			var credentials = {
				email: this.controllerFor('login').get('email'),
				password: this.controllerFor('login').get('password')
			};
			this.get('session').authenticate('authenticator:firebase', credentials).then(function() {
				this.transitionToRoute('index');
			});
		},

		logout: function() {
			this.get('session').invalidate().then(function() {
				this.transitionToRoute('index');
			});
		},

		sessionAuthenticationFailed: function(error) {
			this.controllerFor('login').set('errorMessage', error.message);
		}
	}
});
