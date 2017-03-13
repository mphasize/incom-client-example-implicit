export function initialize() {
  window.EmberENV['ember-oauth2'] = {
    model: 'user',
    incom: {
      clientId: 'example-web-client',
      authBaseUri: 'http://localhost:8888/api/v1/authorize',
      redirectUri: 'http://localhost:4200/oauth/callback',
      //scope: 'workspaces'
    }
  };
}

export default {
  name: 'ember-oauth2-config',
  before: 'session',
  initialize: initialize
};
