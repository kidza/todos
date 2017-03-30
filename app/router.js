import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('active');
  // this.route('completed', function() {
  //   this.route('test');
  // });
  this.route('phonebook', function() {});
  this.route('todos', function() {
    this.route('active');
    this.route('completed');
  });
});

export default Router;
