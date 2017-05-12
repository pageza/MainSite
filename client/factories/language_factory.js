App.factory('LanguageFactory', function($http){
  var factory = {}

  factory.index = function(callback){
    $http.get('/languages').then(callback);
  }
  console.log(factory);
  return factory;
})
