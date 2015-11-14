exports.register_model = (mongoose) ->
  Schema = mongoose.Schema
  Species = new Schema
    name: String
    expression: Schema.Types.Mixed

  mongoose.model 'Species', Species
