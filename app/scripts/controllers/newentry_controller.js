EmberApp.NewentryController = Ember.ObjectController.extend({
    prefix: "newentry",
    actions: {
        close: function(action){
            console.log("close1 "+action);
            return this.send('closeModal', action, this.prefix);
        }
    }
});