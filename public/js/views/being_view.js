(function() {
  var BeingView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BeingView = (function(superClass) {
    extend(BeingView, superClass);

    function BeingView() {
      return BeingView.__super__.constructor.apply(this, arguments);
    }

    return BeingView;

  })(Backbone.View);

}).call(this);
