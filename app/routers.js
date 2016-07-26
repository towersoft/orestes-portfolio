'use strict';
angular.module('portfolio',['ngRoute']).
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
    otherwise('/home');

}
