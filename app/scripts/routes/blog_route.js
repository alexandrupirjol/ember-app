EmberApp.BlogRoute = Ember.Route.extend({

    model: function () {
        return [{
            name: 'index',
            title: 'Home'
        },{
            name: 'blog',
            title: 'Blog'    
        }];
    },

    actions: {
        openModal: function(templateName, model){
            console.log(templateName);
            this.controllerFor(templateName).set('model', model);
            return this.render(templateName, {
                into: 'application',
                outlet: 'modal'
            });
        },

        closeModal: function(action, prefix){
            console.log('here '+action+" "+prefix);
            if(action === 'save'){
                var author = $('#'+prefix+'_author').val();
                var title = $('#'+prefix+'_title').val();
                var body = $('#'+prefix+'_body').val();
                var date = new Date();
                var store = this.store;
                console.log('save');
                store.createRecord('entry',{
                    author: author,
                    title: title,
                    body: body,
                    date: date
                }).save();
            }
            return this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        }
    }
});
