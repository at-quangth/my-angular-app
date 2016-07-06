'use strict';

// App controllers, it coming in handy module for DI
var wfeControllers = angular.module('wfeControllers', []);

// PeopleListCtrl for people listing page which detached from index.html in
// previous steps.
wfeControllers.controller('AboutController', ['$scope', '$http',
  function ($scope, $http) {
    // Controller method for About
    var url = 'http://localhost:8000/data/profile.json';   
  $http.get(url).success(function(response) {
    $scope.profile = response;
  });
}]);


