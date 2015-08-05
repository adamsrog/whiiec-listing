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
		var controller = this;
		var schools = [];
		var schoolObjects = [];
		var programs = this.get('model');
		
		// create an array containing school names and controller properties for the checkboxes
		programs.forEach(function(program) {
			var institution = {
				name: program.get('institution'),
				isSelected: false
			};
			console.log('institution', institution, ' -- ', schools.contains(institution.name));
			if (schools.indexOf(institution.name) === -1) {
				schools.push(institution.name);
				schoolObjects.push(institution);
			}
		});
		return schoolObjects;
	}),

	selectedSchools: [],

	pagedContent: pagedArray('sortedPrograms', { 
		pageBinding: 'page', 
		perPageBinding: 'perPage'
	}),
	page: 1,
	perPage: 15
	
});
