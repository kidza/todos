import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        deleteTodo(todo) {
            this.get('store').deleteRecord(todo);
        },
        updateCompleted(todo, e) {
            todo.set('completed', e.target.checked);
        },
        startEditing(todo, e) {
            this.element.querySelector('li#' + todo.id).classList.add('editing');
            //classList.remove('class');
        },
        handleKeydown(todo, e) {
            if (e.key === 'Enter') {
                e.target.blur();
            } else if (e.keyCode === 27) {
                this.removeEditingClass(todo.id);
            }
        },
        doneEditing(todo, e) {
            todo.set('todoValue', e.target.value);
            this.removeEditingClass(todo.id);

        }
    },
    removeEditingClass(id) {
        this.element.querySelector('li#' + id).classList.remove('editing');
    }

});
