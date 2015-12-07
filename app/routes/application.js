import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),
	actions: {
		viewInventory: function() {
			// reset the selected schools and filter query then transition to inventory
			this.controllerFor('programs.index').setProperties({
				selectedSchools: [],
				filterQuery: ''
			});
			this.transitionTo('programs');
		},
		logout: function() {
			this.get('session').invalidate();
		}
	}
});
