import Ember from 'ember';

export default Ember.Route.extend({

	resetController: function(controller, isExiting, transition) {
		if (isExiting) {
			console.log('exiting!', isExiting);
		}
	},

	actions: {
		clearFilterQuery: function() {
			this.controllerFor('programs/index').set('filterQuery', '');
		},
		clearFilterSchools: function() {
			this.controllerFor('programs/index').set('selectedSchools', []);
		}
	}
});
