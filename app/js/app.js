'use strict';

// App module
var myApp = angular.module('myApp', [
  'ngRoute', // All routing, navigating in the app goes here
  'wfeControllers', // Our beloved controller module collection
  'ngAnimate',
  'ui.bootstrap'
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

// myApp.controller('AccordionDemoCtrl', function ($scope) {
//   $scope.oneAtATime = true;

//   $scope.groups = [
//     {
//       title: 'Dynamic Group Header - 1',
//       content: 'Dynamic Group Body - 1'
//     },
//     {
//       title: 'Dynamic Group Header - 2',
//       content: 'Dynamic Group Body - 2'
//     }
//   ];

//   $scope.items = ['Item 1', 'Item 2', 'Item 3'];

//   $scope.addItem = function() {
//     var newItemNo = $scope.items.length + 1;
//     $scope.items.push('Item ' + newItemNo);
//   };

//   $scope.status = {
//     isCustomHeaderOpen: false,
//     isFirstOpen: true,
//     isFirstDisabled: false
//   };
// });

myApp.controller('HeaderPartialCtrl', ['$scope', function ($scope) {
}]);

myApp.controller('FooterPartialCtrl', ['$scope', function ($scope) {
  // Do something...
}]);
