'use strict';

angular.
  module('portfolio').
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
