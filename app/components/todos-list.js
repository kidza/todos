import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        deleteTodo(todo) {
            // console.log('aaaaa');
            this.get('store').deleteRecord(todo);
            todo.save();
        },
        updateCompleted(todo, e) {
            todo.set('completed', e.target.checked);
            todo.save();
        },
        startEditing(todo, e) {
            this.element.querySelector("[id='"+ todo.id +"']").classList.add('editing');
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
            todo.save();
            this.removeEditingClass(todo.id);

        }
    },
    removeEditingClass(id) {
        this.element.querySelector("[id='"+ id +"']").classList.remove('editing');
    }

});
