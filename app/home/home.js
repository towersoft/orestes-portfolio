'use strict';

angular.module('home').component('home', {
    templateUrl: 'home/home.html',
    controller: function HomeController() {
        this.title = 'Home';
        this.$onInit = function () {

        };
    }
});
