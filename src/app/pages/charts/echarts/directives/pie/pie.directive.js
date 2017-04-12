/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.echarts')
        .directive('echartPie', echartPie);

    /** @ngInject */
    function echartPie() {
        return {
            restrict: 'E',
            controller: 'eChartPieCtrl',
            template: '<div id="eChart-pie" style="width: 100%;height: 100%;"></div>'
        };
    }
})();