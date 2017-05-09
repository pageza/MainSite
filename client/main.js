var App = angular.module('Mainsite',['ngRoute','angularMoment']);

App.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/_index.html',
    controller: 'IndexController'
  })
  .when('/portfolio', {
    templateUrl: '/partials/_portfolio.html',
    controller: 'IndexController'
  })
  .when('/videos', {
    templateUrl: '/partials/_videos.html',
    controller: 'IndexController'
  })
  .when('/links', {
    templateUrl: '/partials/_links.html',
    controller: 'IndexController'
  })
  .otherwise({
    redirectTo:'/'
  })
})
