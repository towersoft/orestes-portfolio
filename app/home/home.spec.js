'use strict';

describe('Component: home', function() {
    var ctrl;

    // Load the module that contains the `home` component before each test
    beforeEach(module('portfolio'));
    beforeEach(inject(function($componentController) {
        ctrl = $componentController('home');
    }));

        it('should set a default value for the `title` property', function() {
            expect(ctrl).toBeDefined();
        });
});