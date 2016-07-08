'use strict';

// App services
var myServices = angular.module('myServices', ['ngResource']);

// The service use $resource which take the power of RESTful, consider this as
// high-level service leave us intact of low-level $http
myServices.factory('Product', ['$resource', function ($resource) {
  return $resource('data/:requestParam.json', {}, {
    query: {
      method: 'GET',
      params: {
        requestParam: 'products'
      },
      isArray: true,
    }
  });
}]);
