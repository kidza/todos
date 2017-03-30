import DS from "ember-data";

export default DS.JSONAPIAdapter.extend({
	// namespace: 'api',
	host: 'http://127.0.0.1:8081'
});

