var App = angular.module('Mainsite',['ngRoute','angularMoment']);

App.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/_index.html',
    controller: 'IndexController as IC'
  })
  .when('/portfolio', {
    templateUrl: '/partials/_portfolio.html',
    controller: 'IndexController as IC'
  })
  .when('/videos', {
    templateUrl: '/partials/_videos.html',
    controller: 'IndexController as IC'
  })
  .when('/links', {
    templateUrl: '/partials/_links.html',
    controller: 'IndexController as IC'
  })
  .otherwise({
    redirectTo:'/'
  })
})
