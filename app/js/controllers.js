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

  $http.get('http://localhost:8000/data/cars.json').
    then(function(response){
      $scope.products = response.data;
      $scope.productId=$routeParams.carId;
    });
    
    
    $scope.isFibonacci = function(x){
      var a= $window.Math.sqrt(5*x*x+4);
      var b= $window.Math.sqrt(5*x*x-4);

        if(a*a==x||b*b==x){
            $scope.message=$scope.number+" is a Fibonacci number";
        }else {
            $scope.message=$scope.number+" is not a Fibonacci number";
    }
    };
    $scope.isPerfectSquare = function(n){
           var a= $window.Math.sqrt(n);
           // console.log(a);
           return (a*a == n); 
    //          if(a*a== n){
    //   $scope.message=$scope.number+"is Fibonacci";
    // }else {
    //   $scope.message="is not Fibonacci";
    // }    
    };
    // if(($scope.number)/2){
    //   $scope.message="is Fibonacci";
    // }else {
    //   $scope.message="is not Fibonacci";
    // }
	 
}]);
wfeControllers.controller('ShowItemDetailController', function($scope, $http, $routeParams) {

  $http.get('http://localhost:8000/data/cars.json').
    then(function(response){
      $scope.cars = response.data;
      $scope.brandname=$routeParams.brandName;
    });
	 
});

