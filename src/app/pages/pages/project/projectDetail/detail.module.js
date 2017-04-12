/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.projectDetail', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.projectDetail', {
                url: '/projectDetail',
                templateUrl: 'app/pages/pages/project/projectDetail/detail.html',
                controller: 'detailCtrl'
            });
    }

})();