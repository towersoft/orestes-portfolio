'use strict';

angular.module('contact').component('contact', {
    templateUrl: 'contact/contact.component.html',
    controller: function ContactController() {
        this.title = 'Contact information';
    }
});