import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('program', params.id);
	},
	afterModel: function(program, transition) {
		// confirm analyics are loaded and log event
		if (typeof ga === 'function') {
			var name = program.get('program');
			var institution = program.get('institution');
			ga('send', 'event', 'Program View', institution + ' - ' + name);
			ga('send', 'event', 'Institution View', institution);
		}
	}
});
