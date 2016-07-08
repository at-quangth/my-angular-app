'use strict';

// App module
var myApp = angular.module('myApp', [
  'ngRoute', // All routing, navigating in the app goes here
  'wfeControllers', // Our beloved controller module collection
  
]);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'view/aboutme.html',
      controller: 'AboutController',
    })
    .when('/Product', {
      templateUrl: 'view/myapp.html',
      controller: 'ListProductController',
    })
    // :codeName as going to stand for person identity
    .when('/Product/:brandName/:itemName', {
      templateUrl: 'view/show.html',
      controller: 'ShowItemDetailController'
    })
    // any link goes beyond defined routes will be redirected to /people route.
    .otherwise({
      redirectTo: '/about',
    });
}]);

myApp.controller('HeaderPartialCtrl', ['$scope', function ($scope) {
}]);

myApp.controller('FooterPartialCtrl', ['$scope', function ($scope) {
  // Do something...
}]);
