/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.404', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.404', {
                url: '/404',
                templateUrl: 'app/pages/pages/404/404.html',
                controller: '404Ctrl'
            });
    }

})();