/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.loginTimeout', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.loginTimeout', {
                url: '/loginTimeout',
                templateUrl: 'app/pages/pages/logins/loginTimeout/loginTimeout.html'
            });
    }

})();