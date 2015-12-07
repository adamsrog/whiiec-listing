import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		clearFilterQuery: function() {
			this.controllerFor('programs/index').set('filterQuery', '');
		},
		clearFilterSchools: function() {
			this.controllerFor('programs/index').set('selectedSchools', []);
		}
	}
});
