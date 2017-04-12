/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.echarts')
        .directive('echartCandlestick', echartCandlestick);

    /** @ngInject */
    function echartCandlestick() {
        return {
            restrict: 'E',
            controller: 'eChartCandlestickCtrl',
            template: '<div id="candlestick" style="width: 100%;height: 100%;"></div>'
        };
    }
})();