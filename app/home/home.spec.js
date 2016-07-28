'use strict';

describe('home', function() {
    var ctrl,title;

    // Load the module that contains the `home` component before each test
    beforeEach(module('home'));

    beforeEach(inject(function($componentController) {
        ctrl = $componentController('home');
    }));

        it('should set a default value for the `title` property', function() {
            expect(ctrl.title).toBe('Home');
        });
});