'use strict';

angular.module('home').component('home', {
    templateUrl: 'home/home.html',
    controller: ['HomeService', function HomeController(HomeService) {
        this.title = 'Home';
        this.$onInit = function () {
            this.getData();
        };
        this.getData = function () {
            this.data = HomeService.get();
        };

    }]
});
