'use strict';

// Declare app level module which depends on filters, and services
var aaf = angular.module('AAF', ['AAF.services']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'templates/welcome.html', controller: MainCtrl, activePage: 'home'});
    $routeProvider.when('/memo', {templateUrl: 'templates/memo.html', controller: MemoCtrl, activePage: 'memo'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

