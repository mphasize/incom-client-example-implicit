import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('workspaces');
  this.route('login');
  this.route('logout');

  this.route('oauth', function() {
    this.route('callback');
  });
});

export default Router;
