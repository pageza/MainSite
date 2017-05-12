var mongoose = require("mongoose")
var Language = mongoose.model('Language')

module.exports = {
  index: function(req, res){
		Language.find({}).exec(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc);
		})
	}
}
