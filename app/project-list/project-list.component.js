'use strict';

angular.module('portfolio').component('projectsList', {
    templateUrl: 'project-list/project-list.component.html',
    controller: ['Project', function ProjectsController(Project) {
        this.$onInit = function () {
            this.title = 'Projects involved';
            this.projects = Project.query();
        }

    }]
});