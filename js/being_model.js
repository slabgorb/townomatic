(function() {
  var BeingModel,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BeingModel = (function(superClass) {
    extend(BeingModel, superClass);

    function BeingModel() {
      return BeingModel.__super__.constructor.apply(this, arguments);
    }

    return BeingModel;

  })(Backbone.Model);

}).call(this);
