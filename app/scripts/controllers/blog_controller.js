EmberApp.BlogController = Ember.ArrayController.extend({
    actions: {
        log: function(){
            console.log(this.store);
        }
    }
});