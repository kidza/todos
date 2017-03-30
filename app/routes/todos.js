import Ember from 'ember';

export default Ember.Route.extend({
    model() {
    	// let appmodel = this.get('store').peekAll('todo');
    	console.log('start');
    	let appmodel = this.store.findAll('todo');
    	console.log(appmodel);
        return appmodel;
    }
});
