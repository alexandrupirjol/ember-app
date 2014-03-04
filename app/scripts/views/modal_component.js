EmberApp.ModalDialogComponent = Ember.Component.extend({
    actions: {
        close: function() {
            return this.sendAction('close');
        },
        save: function(){
            return this.sendAction('close', 'save');
        }
      }
});

