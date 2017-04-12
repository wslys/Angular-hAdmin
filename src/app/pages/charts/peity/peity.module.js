/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.peity', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.charts.peity', {
                url: '/peity',
                templateUrl: 'app/pages/charts/peity/peity.html',
                controller:"peityCtrl"
            });
    }

})();