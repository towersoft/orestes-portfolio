'use strict';

angular.module('skill').component('skillsList', {
    templateUrl: 'skill-list/skill-list.component.html',
    controller: ['Skill', function SkillController(Skill) {
        this.title = 'Skills';
        this.skills = Skill.query();
    }
    ]
});