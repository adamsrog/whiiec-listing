import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		clearFilterQuery: function() {
			this.controllerFor('programs/index').set('filterQuery', '');
		},
		test: function(school) {
			var bool = this.controllerFor('programs/index').get(school);
			console.log('bool is', bool, '... changing to', !bool);
			this.controllerFor('programs/index').set(school, !bool);
			console.log('!!!', this.controllerFor('programs/index').get(school));
		}
	}
});
