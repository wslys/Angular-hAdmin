/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.echarts')
        .directive('echartFunnel', echartFunnel);

    /** @ngInject */
    function echartFunnel() {
        return {
            restrict: 'E',
            controller: 'eChartFunnelCtrl',
            template: '<div id="eChart-funnel" style="width: 100%;height: 100%;"></div>'
        };
    }
})();