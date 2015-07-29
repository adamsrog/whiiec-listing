import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
	filterQuery: '',

	sortedPrograms: Ember.computed('model.content', 'filterQuery', function() {
		var programs = this.get('model');
		var query = this.get('filterQuery');
		this.set('page', 1);

		// apply search query
		if (query) {
			programs = programs.filter(function(item) {
				if (item.get('program').toLowerCase().indexOf(query.toLowerCase()) > -1) { return true; }
			});
		}

		return programs;
	}),

	pagedContent: pagedArray('sortedPrograms', { 
		pageBinding: 'page', 
		perPageBinding: 'perPage'
	}),
	page: 1,
	perPage: 10
	
});
