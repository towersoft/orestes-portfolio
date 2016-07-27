'use strict';
angular.module('portfolio').
config(config);
function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/home', {
        template: '<home></home>'
    }).
    when('/projects', {
        template: '<projects-list></projects-list>'
    }).
    when('/skills', {
        template: '<skills-list></skills-list>'
    }).
    when('/contact', {
        template: '<contact></contact>'
    }).
    otherwise('/home');

}
