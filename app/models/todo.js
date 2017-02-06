import DS from 'ember-data';

export default DS.Model.extend({
    todoValue: DS.attr(),
    completed: DS.attr()
});
