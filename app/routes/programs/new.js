import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function() {
		return this.store.createRecord('program', {
			institution: '',
			institution_url: '',
			program: '',
			program_url: '',
			degree_cert: '',
			duration: '',
			cost: '',
			prerequisites: '',
			instruction_delivery: '',
			outcomes: '',
			location: '',
			contact: '',
			accreditation: ''
		});
	},
	actions: {
		create: function(program) {
			var route = this;
			program.save().then(function() {
				route.transitionTo('programs.index');
			}, function() {
				console.log('creation of program failed');
			});
		},
		cancel: function(program) {
			this.store.deleteRecord(program);
			this.transitionTo('programs.index');
		}
	}
});
