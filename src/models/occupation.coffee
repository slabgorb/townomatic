exports.register_model = (mongoose) ->
  Schema = mongoose.Schema
  Occupation = new Schema
    name: String
    rarity: {type: String, enum: ['very rare','rare','uncommon','common','very common'] }
    classification: String

  mongoose.model 'Occupation', Occupation
