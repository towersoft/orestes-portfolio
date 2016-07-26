'use strict';

angular.module('portfolio').component('projectsList', {
    templateUrl: 'project-list/project-list.component.html',
    controller: function ProjectsController() {
        this.title = 'Projects involved';
        this.projects = [
            {
                name: 'Customer Maintenance',
                snippet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
            }, {
                name: 'Update Address',
                snippet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
            }, {
                name: 'Update Account',
                snippet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa'
            }, {
                name: 'Document Requests URLs',
                snippet: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            }
        ];
    }
});