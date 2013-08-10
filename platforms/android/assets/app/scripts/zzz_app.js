'use strict';

console.log('app.js module');

angular.module('myApp', ['ngResource', 'individualListServices', 'biometricServices'])
.config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:biometricListCtrl, templateUrl:'individual.html'}).
      when('/person', {controller:biometricListCtrl, templateUrl:'individual.html'}).
      when('/list', {controller:individualListCtrl, templateUrl:'individuals.html'}).
      when('/chart', {controller:chartCtrl, templateUrl:'lineGraph.html'}).
      otherwise({redirectTo:'/'});
  });

/*
angular.module('assetsApp', ['MainCtrl'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/