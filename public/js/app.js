(function() {
  var App;

  App = (function() {
    function App() {}

    App.prototype.initialize = function() {
      this.beings = new Townomatic.BeingsCollection();
      this.beingsView = new Townomatic.BeingsCollectionView({
        collection: this.beings
      });
      return this.beings.fetch();
    };

    return App;

  })();

  $(function() {
    var app;
    app = new App;
    return app.initialize();
  });

}).call(this);
