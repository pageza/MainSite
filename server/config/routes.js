var Languages = require('../controllers/languages')

module.exports = function(app){

  app.get('/languages', Languages.index)


}
