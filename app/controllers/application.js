import Ember from 'ember';

export default Ember.Controller.extend({
  sessionController: Ember.inject.controller('session'),
  currentUser: Ember.computed.alias("sessionController.currentUser"),
});
