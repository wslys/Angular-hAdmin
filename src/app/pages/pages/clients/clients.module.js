/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.clients', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.clients', {
                url: '/clients',
                templateUrl: 'app/pages/pages/clients/clients.html',
                controller: 'clientsCtrl'
            });
    }

})();