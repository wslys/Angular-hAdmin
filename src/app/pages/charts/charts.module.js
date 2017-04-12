/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts', [
        'hAdmin.pages.charts.echarts',
        'hAdmin.pages.charts.peity',
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.charts', {
                url: '/charts',
                templateUrl: 'app/pages/charts/charts.html',
                abstract: true
            });
    }

})();