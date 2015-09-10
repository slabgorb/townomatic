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
