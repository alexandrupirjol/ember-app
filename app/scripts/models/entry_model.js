EmberApp.Entry = DS.Model.extend({
    author: DS.belongsTo('user'),
    title: DS.attr('string'),
    body: DS.attr('string'),
    date: DS.attr('date')
});


EmberApp.Entry.FIXTURES = [{
    id: 1,
    author: 'Alexandru Pirjol',
    title: 'Some Entry Title 1',
    body: 'bla bla bla ...',
    date: new Date()
},{
    id: 2,
    author: 'Alexandru Pirjol',
    title: 'Some Entry Title 2',
    body: 'bla bla bla ...',
    date: new Date()
},{
    id: 3,
    author: 'Wanda Chereji',
    title: 'Some Entry Title 3',
    body: 'bla bla bla ...',
    date: new Date()
},{
    id: 4,
    author: 'Alexandru Pirjol',
    title: 'Some Entry Title 4',
    body: 'bla bla bla ...',
    date: new Date()
},{
    id: 5,
    author: 'Alexandru Pirjol',
    title: 'Some Entry Title 4',
    body: 'bla bla bla ... bla bla bla ...',
    date: new Date()
}];