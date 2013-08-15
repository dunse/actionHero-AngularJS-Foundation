'use strict';

/* Services */
angular.module('AAF.services', ['ngResource']).
  value('version', '0.1').
  factory('MemoService', function ($resource) {
    return $resource('api/memo/:id', { id: '@id' }, {
      'query': { method: 'GET', params: { }, isArray : false },
    });
  });
