/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.echarts')
        .directive('echartRadar', echartRadar);

    /** @ngInject */
    function echartRadar() {
        return {
            restrict: 'E',
            controller: 'eChartRadarCtrl',
            template: '<div id="eChartRadar" style="width: 100%;height: 100%;"></div>'
        };
    }
})();