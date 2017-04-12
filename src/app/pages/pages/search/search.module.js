/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.search', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.search', {
                url: '/search',
                templateUrl: 'app/pages/pages/search/search.html',
                controller: 'searchCtrl'
            });
    }

})();