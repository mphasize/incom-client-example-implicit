import Protected from 'ember-token-auth/routes/protected';

export default Protected.extend({
  model() {
    return ['1', '2'];
  }
});
