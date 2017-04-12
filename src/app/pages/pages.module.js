/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages', [
        'ui.bootstrap',
        'ui.router',

        'hAdmin.pages.dashboard',
        'hAdmin.pages.charts',
        'hAdmin.pages.mailbox',
        'hAdmin.pages.forms',
        'hAdmin.pages.pages',
        'hAdmin.pages.ui',
        'hAdmin.pages.table',
        'hAdmin.pages.album'
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('pages', {
                templateUrl: 'app/pages/pages.html',
                abstract: true
            });

        $urlRouterProvider.otherwise('/dashboard');
    }

})();

