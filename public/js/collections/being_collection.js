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
