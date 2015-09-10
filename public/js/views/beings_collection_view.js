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

    BeingsCollectionView.prototype.addOne = function(model) {
      return this.childViews.push(new Townomatic.BeingView({
        model: model
      }));
    };

    BeingsCollectionView.prototype.addNew = function(model) {
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
