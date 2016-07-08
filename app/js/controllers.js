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
wfeControllers.controller('ListProductController',['$scope','$http','$routeParams','$window',function($scope, $http, $routeParams,$window) {

  $http.get('http://localhost:8000/data/products.json').
        then(function(response){
          $scope.products = response.data;
          $scope.productId=$routeParams.carId;
        });
  $scope.isFibonacci = function(x){
    var a= parseInt($window.Math.sqrt(5*x*x + 4));
    var b= parseInt($window.Math.sqrt(5*x*x - 4));
    if(a*a==(5*x*x+4)||b*b==(5*x*x-4)){
        $scope.message=$scope.number+" is a Fibonacci number";
    }else {
        $scope.message=$scope.number+" is not a Fibonacci number";
    }
  };
}]);
wfeControllers.controller('ShowItemDetailController',['$scope','$http','$routeParams', function($scope, $http, $routeParams) {
  $scope.requestParam='product/'+$routeParams.itemName;
  $http.get('http://localhost:8000/data/'+$scope.requestParam+'.json').
    then(function(response){
      $scope.item = response.data;
      // $scope.brandname=$routeParams.brandName;
    });
	 
}]);

