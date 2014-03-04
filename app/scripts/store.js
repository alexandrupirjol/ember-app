EmberApp.ApplicationSerializer = DS.LSSerializer.extend();
EmberApp.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'ember-app'
});

DS.LSAdapter.create({
  namespace: 'ember-app'
});

EmberApp.store = DS.Store.extend({
    adapter: 'EmberApp.ApplicationAdapter'
});