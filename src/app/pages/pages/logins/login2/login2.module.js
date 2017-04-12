/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.login2', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.login2', {
                url: '/login2',
                templateUrl: 'app/pages/pages/logins/login2/login2.html',
                controller: 'login2Ctrl'
            });
    }

})();