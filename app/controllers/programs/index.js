import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
	filterQuery: '',

	sortedPrograms: Ember.computed('model.content', function() {
		return this.get('model');
	}),

	pagedContent: pagedArray('sortedPrograms', { 
		pageBinding: 'page', 
		perPageBinding: 'perPage'
	}),
	page: 1,
	perPage: 10
	
});
