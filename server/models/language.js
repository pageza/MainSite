var mongoose = require("mongoose")

var LanguageSchema = new mongoose.Schema({
  language:{
    type: String
  },
  description:{
    type: String
  },
  use:{
    type: String
  }
}, {timestamps: true});

var Language = mongoose.model('Language', LanguageSchema);
