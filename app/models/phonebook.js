import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  phonenumber: DS.attr('string'),
  createddate: DS.attr('date')
});
