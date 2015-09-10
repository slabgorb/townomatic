(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  if (window.Townomatic == null) {
    window.Townomatic = {};
  }

  Townomatic.BeingModel = (function(superClass) {
    extend(BeingModel, superClass);

    function BeingModel() {
      return BeingModel.__super__.constructor.apply(this, arguments);
    }

    BeingModel.prototype.defaults = {
      genetics: "",
      first_name: "",
      last_name: "",
      occupation: "Unemployed",
      gender: "N",
      age: 0
    };

    return BeingModel;

  })(Backbone.Model);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  if (window.Townomatic == null) {
    window.Townomatic = {};
  }

  Townomatic.BeingsCollection = (function(superClass) {
    extend(BeingsCollection, superClass);

    function BeingsCollection() {
      return BeingsCollection.__super__.constructor.apply(this, arguments);
    }

    BeingsCollection.prototype.url = function() {
      return "http://localhost:8082/beings";
    };

    BeingsCollection.prototype.model = Townomatic.BeingModel;

    return BeingsCollection;

  })(Backbone.Collection);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  if (window.Townomatic == null) {
    window.Townomatic = {};
  }

  Townomatic.BeingsCollectionView = (function(superClass) {
    extend(BeingsCollectionView, superClass);

    function BeingsCollectionView() {
      return BeingsCollectionView.__super__.constructor.apply(this, arguments);
    }

    BeingsCollectionView.prototype.initialize = function(options) {
      this.collection = options.collection;
      return this.childViews = [];
    };

    BeingsCollectionView.prototype.addOne = function(model) {
      return this.childViews.push(new Townomatic.BeingView({
        model: this.model
      }));
    };

    BeingsCollectionView.prototype.addNew = function(model) {
      return this.collection.add(model);
    };

    BeingsCollectionView.prototype.render = function(options) {};

    return BeingsCollectionView;

  })(Backbone.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  if (window.Townomatic == null) {
    window.Townomatic = {};
  }

  Townomatic.BeingView = (function(superClass) {
    extend(BeingView, superClass);

    function BeingView() {
      return BeingView.__super__.constructor.apply(this, arguments);
    }

    BeingView.prototype.initialize = function(options) {
      return this.template = _.template($('#beings-template').html());
    };

    BeingView.prototype.render = function() {
      console.log(this.$el);
      this.$el.append(this.template(this.model.toJSON()));
      return this;
    };

    return BeingView;

  })(Backbone.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  if (window.Townomatic == null) {
    window.Townomatic = {};
  }

  Townomatic.BeingsCollectionView = (function(superClass) {
    extend(BeingsCollectionView, superClass);

    function BeingsCollectionView() {
      return BeingsCollectionView.__super__.constructor.apply(this, arguments);
    }

    BeingsCollectionView.prototype.el = '#beings';

    BeingsCollectionView.prototype.initialize = function(options) {
      this.template = _.template($('#beings-collection-template').html());
      this.collection = options.collection;
      this.listenTo(this.collection, 'add', this.addOne);
      this.childViews = [];
      return this.collection.fetch().done((function(_this) {
        return function() {
          return _this.render();
        };
      })(this));
    };

    BeingsCollectionView.prototype.events = {
      "click .add-being": 'addNew'
    };

    BeingsCollectionView.prototype.addOne = function(model) {
      return this.childViews.push(new Townomatic.BeingView({
        model: model
      }));
    };

    BeingsCollectionView.prototype.addNew = function() {
      var attributes, model;
      console.log('adding');
      attributes = _.map(this.$('#new-being input'), function(input) {
        return input.attr('data_field', input.value());
      });
      model = new Townomatic.BeingModel(attributes);
      return this.collection.add(model);
    };

    BeingsCollectionView.prototype.render = function(options) {
      this.$el.append(this.template());
      return _.each(this.childViews, (function(_this) {
        return function(child) {
          child.$el = _this.$('#beings-children');
          return _this.$el.append(child.render().el);
        };
      })(this));
    };

    return BeingsCollectionView;

  })(Backbone.View);

}).call(this);

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
