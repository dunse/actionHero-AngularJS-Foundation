'use strict';

// Declare app level module which depends on filters, and services
var aaf = angular.module('AAF', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'templates/welcome.html', controller: MainCtrl, activePage: 'home'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

