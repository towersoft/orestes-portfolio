'use strict';

angular.module('portfolio').component('home', {
    templateUrl: 'home/home.html',
    controller: function HomeController() {
        this.$onInit = function () {
            this.title = 'Home';
        };
    }
});
