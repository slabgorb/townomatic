(function() {
  var BeingCollection,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BeingCollection = (function(superClass) {
    extend(BeingCollection, superClass);

    function BeingCollection() {
      return BeingCollection.__super__.constructor.apply(this, arguments);
    }

    BeingCollection.prototype.url = function() {
      return "http://localhost:8082/beings";
    };

    BeingCollection.prototype.model = BeingModel;

    return BeingCollection;

  })(Backbone.Collection);

}).call(this);
