/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.profile', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.profile', {
                url: '/profile',
                templateUrl: 'app/pages/pages/profile/profile.html',
                controller: 'profileCtrl'
            });
    }

})();