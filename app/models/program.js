import DS from 'ember-data';

var Program = DS.Model.extend({
	institution: DS.attr('string'),
	institution_url: DS.attr('string'),
	program: DS.attr('string'),
	program_url: DS.attr('string'),
	degree_cert: DS.attr('string'),
	duration: DS.attr('string'),
	cost: DS.attr('string'),
	prerequisites: DS.attr('string'),
	instruction_delivery: DS.attr('string'),
	outcomes: DS.attr('string'),
	location: DS.attr('string'),
	contact: DS.attr('string'),
	accreditation: DS.attr('string')
});

export default Program;