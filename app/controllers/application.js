import Ember from 'ember';

export default Ember.Controller.extend({
    remaining: Ember.computed.filterBy('model', 'completed', false),
    actions: {
        createTodo(e) {
            if (e.key === 'Enter' && e.target.value != "") {
                console.log(this.get('model'));
                let todo = this.get('store').createRecord('todo', {
                    todoValue: e.target.value,
                    completed: false
                });
                console.log(this.get('model'));
                todo = todo.save().then(function(savedTodo){
                    console.log(savedTodo);
                });
                // todo.set('id', Ember.guidFor(todo));
                e.target.value = '';
            }
        },
        clearCompleted() {
            // let completedTodos = this.get('store').peekAll('todo').filterBy('completed', true);
            this.get('model').forEach(function(item) {
                if (item.get('completed') == true) {
                    item.deleteRecord(item);
                }

            });
            //this.set('model', this.get('store').peekAll('todo'));
            //this.get('model').removeObjects(completedTodos);

        }
    }
});
