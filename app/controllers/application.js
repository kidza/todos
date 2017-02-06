import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createTodo(e) {
            if (e.key === 'Enter') {
                this.get('store').createRecord('todo', {
                    todoValue: e.target.value,
                    completed: false
                });

                e.target.value = '';
            }
        }
    }
});
