import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	actions: {
		deleteTodo(todo) {
            this.get('store').deleteRecord(todo);
        },
        updateCompleted(todo, e) {
        	todo.set('completed', e.target.checked);
        }
	}
		
});
