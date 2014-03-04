EmberApp.Router.map(function () {
  this.resource('index', { path: '/' });
  this.resource('blog', { path: '/blog' }, function(){
      this.resource('entry', { path: '/entry/:entry_id' });
  });
});
