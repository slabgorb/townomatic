exports.register_model = (mongoose) ->
  Schema = mongoose.Schema
  Community = new Schema
    name: String
    population:
      type: [type: Schema.Types.ObjectId, ref: 'Being' ]
    heraldry:
      color:
        main: String
        secondary: String
      icon: String

  mongoose.model 'Community', Community
