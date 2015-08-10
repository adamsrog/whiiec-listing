import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var model = this.store.find('program', params.id);
		if (!model.content) { 
			this.transitionTo('programs.index');
		}
		return model;
	}
});
