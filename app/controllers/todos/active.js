import Ember from 'ember';

export default Ember.Controller.extend({
    todos: Ember.computed('model.@each.completed', function() {
        return this.get('model').filterBy('completed', false);
    })
});
