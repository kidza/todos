import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createTodo(e) {
            if (e.key === 'Enter') {
                let todo = this.get('store').createRecord('todo', {
                    todoValue: e.target.value,
                    completed: false
                });
               // todo.set('id', Ember.guidFor(todo));
                e.target.value = '';
            }
        },
    }
});
