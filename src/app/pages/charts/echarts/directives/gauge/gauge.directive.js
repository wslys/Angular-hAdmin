/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.echarts')
        .directive('echartGauge', echartGauge);

    /** @ngInject */
    function echartGauge() {
        return {
            restrict: 'E',
            controller: 'eChartGaugeCtrl',
            template: '<div id="eChart-gauge" style="width: 100%;height: 100%;"></div>'
        };
    }
})();