'use strict';

angular.
  module('services').
  factory('Project', ['$resource',
    function($resource) {
      return $resource('stub/project.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
