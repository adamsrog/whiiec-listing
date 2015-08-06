import Ember from 'ember';

export default Ember.Route.extend({
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
			}).bind(this);
		}
	}
});
