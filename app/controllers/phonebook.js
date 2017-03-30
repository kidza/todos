import Ember from 'ember';

export default Ember.Controller.extend({
	newPhonebook: {},
	actions: {
		submitContactPhonebook(newPhonebook) {
			console.log(newPhonebook);
			let phonebook = this.get('store').createRecord('phonebook', newPhonebook);
            phonebook.save();
		} 
	}

});
