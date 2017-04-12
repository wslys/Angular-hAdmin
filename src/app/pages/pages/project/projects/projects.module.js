/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.projects', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.projects', {
                url: '/projects',
                templateUrl: 'app/pages/pages/project/projects/projects.html',
                controller: 'projectsCtrl'
            });
    }

})();