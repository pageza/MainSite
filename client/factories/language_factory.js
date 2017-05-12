App.factory('LanguageFactory', function($http){
  var factory = {}

  factory.index = function(callback){
    $http.get('/languages').then(callback);
  }
  return factory;
})
