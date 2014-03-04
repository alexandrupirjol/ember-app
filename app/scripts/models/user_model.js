EmberApp.User = DS.Model.extend({
    id: DS.attr('number'),
    firstname: DS.attr('string'),
    lastname: DS.attr('string')
});