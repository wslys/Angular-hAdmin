/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.echarts', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.charts.echarts', {
                url: '/echarts',
                templateUrl: 'app/pages/charts/echarts/echarts.html',
                // controller:'eChartsCtrl'
            });
    }

})();