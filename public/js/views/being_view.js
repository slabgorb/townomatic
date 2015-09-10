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
