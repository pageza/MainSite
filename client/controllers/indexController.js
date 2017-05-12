App.controller('IndexController', function(LanguageFactory,$scope, moment){
  console.log("hitting the index controller");
  var self = this;
  self.languages = [];

  self.index = function(){
    LanguageFactory.index(function(res){
      console.log(res);
      self.languages = res.data
    })
  }
})
