'use strict';

angular.
module('services').
factory('Skill', ['$resource',
    function($resource) {
        return $resource('stub/skill.json', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
]);
