export function initialize() {
  window.EmberENV['ember-oauth2'] = {
    model: 'user',
    incom: {
      clientId: 'example_web_app',
      authBaseUri: 'http://localhost:8888/api/v1/authorize',
      redirectUri: 'http://localhost:4300/oauth/callback',
      //scope: 'workspaces'
    }
  };
}

export default {
  name: 'ember-oauth2-config',
  before: 'session',
  initialize: initialize
};
