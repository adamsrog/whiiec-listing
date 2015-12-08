import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function(params) {
		return this.store.find('program', params.id);
	},
	actions: {
		updateProgramInformation: function(program) {
			var route = this;
			program.set('last_updated', new Date().getTime());
			program.save().then(function() {
				route.transitionTo('programs.program', program.id);
			}, function() {
				console.log('failure :(');
			});
		},
		cancelUpdate: function(program) {
			program.rollbackAttributes();
			this.transitionTo('programs.program', program.id);
		},
		deleteProgram: function(program) {
			var route = this;
			program.destroyRecord().then(function() {
				route.transitionTo('programs.index');
			});
		}
	}
});