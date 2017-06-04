export function initialize() {
  window.EmberENV['ember-oauth2'] = {
    model: 'user',
    incom: {
      clientId: 'example_web_app',
      authBaseUri: 'http://138.68.108.146/authorize',
      redirectUri: 'https://incom-oauth-implicit.surge.sh/oauth/callback',
      //scope: 'workspaces'
    }
  };
}

export default {
  name: 'ember-oauth2-config',
  before: 'session',
  initialize: initialize
};
