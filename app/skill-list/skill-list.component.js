'use strict';

angular.module('portfolio').component('skillsList', {
    templateUrl: 'skill-list/skill-list.component.html',
    controller: function SkillController() {
        this.title = 'Skills';
        this.skills = [
            {
                name: 'Java',
                level: '8'
            },
            {
                name: 'T-SQL',
                level: '7'
            },
            {
                name: '.NET',
                level: '7'
            },
            {
                name: 'Hibernate',
                level: '7'
            },
            {
                name: 'Microsoft SQL Server',
                level: '5'
            },
        ];
    }
});