/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.empty', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.empty', {
                url: '/empty',
                templateUrl: 'app/pages/pages/empty/empty.html',
                controller: 'emptyCtrl'
            });
    }

})();