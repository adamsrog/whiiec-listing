import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
	filterQuery: '',

	sortedPrograms: Ember.computed('model.content', 'filterQuery', 'selectedSchools.length', function() {
		var programs = this.get('model');
		var query = this.get('filterQuery');
		var schools = this.get('selectedSchools');
		this.set('page', 1);

		// apply search query
		if (query) {
			programs = programs.filter(function(program) {
				if (program.get('program').toLowerCase().indexOf(query.toLowerCase()) > -1) { return true; }
			});
		}

		// apply school filter
		if (schools.length > 0) {
			// create array from all schools names to compare against
			var schoolNames = [];
			schools.forEach(function(school) {
				schoolNames.push(school.name);
			});

			programs = programs.filter(function(program) {
				if (schoolNames.contains(program.get('institution'))) {	return true; }
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
