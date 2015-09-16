_ = require('underscore')
fs = require('fs')


heraldryIcons = _.map fs.readdirSync('public/images/heraldry/360'), (file) ->
  file.split('.')[0]




exports.register_model = (mongoose) ->
  Schema = mongoose.Schema
  Community = new Schema
    icon:
      type: String
      enum: heraldryIcons
    name:
      type: String
    population:
      type: [type: Schema.Types.ObjectId, ref: 'Being' ]
    colors:
      main: String
      secondary: String


  mongoose.model 'Community', Community
