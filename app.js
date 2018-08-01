'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
   'myApp.version'
])

 
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  
  $locationProvider.hashPrefix('!');
 $routeProvider

 .when('/Home', {
    templateUrl: 'Home/Home.html',
    controller: 'HomeCtrl'
  });
 
 
 
  //$routeProvider.otherwise({redirectTo: '/view1'});

}]);

