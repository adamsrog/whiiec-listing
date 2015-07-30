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

	schoolList: Ember.computed('model.content', function() {
		var schools = [];
		var programs = this.get('model');
		
		programs.forEach(function(program) {
			if (schools.indexOf(program.get('institution')) === -1) {
				schools.push(program.get('institution'));
			}
		});
		return schools;
	}),

	pagedContent: pagedArray('sortedPrograms', { 
		pageBinding: 'page', 
		perPageBinding: 'perPage'
	}),
	page: 1,
	perPage: 15
	
});
