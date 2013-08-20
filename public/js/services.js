'use strict';

/* Services */
angular.module('AAF.services', ['ngResource']).
  value('version', '0.1').
  factory('MemoService', function ($resource) {
    return $resource('api/memo/:id', { id: '@name' }, {
      'query': { method: 'GET', params: { }, isArray : false },
      'save': { method: 'POST', params: { }, isArray : false },
    });
  });
