/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.login1', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.login1', {
                url: '/login1',
                templateUrl: 'app/pages/pages/logins/login1/login1.html',
                controller: 'login1Ctrl'
            });
    }

})();