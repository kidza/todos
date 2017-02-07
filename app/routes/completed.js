import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get('store').peekAll('todo').filterBy('completed', true);
    }
});
