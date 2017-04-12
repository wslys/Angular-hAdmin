/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.teams', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.teams', {
                url: '/teams',
                templateUrl: 'app/pages/pages/teams/teams.html',
                controller: 'teamsCtrl'
            });
    }

})();