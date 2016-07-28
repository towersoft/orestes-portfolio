'use strict';

angular.
module('services').
factory('HomeService', ['$resource',
    function ($resource) {
        return $resource('stub/desc.json', {}, {
            get: {
                method: 'GET'
            }
        });
    }
]);
