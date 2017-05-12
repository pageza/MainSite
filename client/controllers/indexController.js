App.controller('IndexController', function(LanguageFactory,$scope, moment){
  var self = this;
  self.languages = [];

  self.index = function(){
    LanguageFactory.index(function(res){
      console.log(res);
      self.languages = res.data
    })
  }
})
