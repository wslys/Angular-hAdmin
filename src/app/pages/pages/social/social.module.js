/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.social', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.social', {
                url: '/social',
                templateUrl: 'app/pages/pages/social/social.html',
                controller: 'socialCtrl'
            });
    }

})();