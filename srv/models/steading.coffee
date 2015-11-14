_ = require('underscore')
fs = require('fs')


heraldryIcons = _.map fs.readdirSync('public/images/heraldry/360'), (file) ->
  file.split('.')[0]




exports.register_model = (mongoose) ->
  Schema = mongoose.Schema
  Steading = new Schema
    icon:
      type: String
      enum: heraldryIcons
    size:
      type: String
      enum: ['Village', 'Town', 'City', 'Keep']
    name:
      type: String
    population:
      type: String
      enum: ['Exodus', 'Shrinking', 'Steady', 'Growing', 'Booming']
    prosperity:
      type: String
      enum: ['Dirt', 'Poor', 'Moderate', 'Wealthy', 'Rich']
    defenses:
      type: String
      enum: ['None', 'Militia', 'Watch', 'Guard', 'Garrison', 'Battalion', 'Legion']
    tags: [String]
    colors:
      main: String
      secondary: String
    description: String


  mongoose.model 'Steading', Steading
