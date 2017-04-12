/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.echarts')
        .directive('echartMap', echartMap);

    /** @ngInject */
    function echartMap() {
        return {
            restrict: 'E',
            controller: 'eChartMapCtrl',
            template: '<div id="echart-map" style="width: 100%;height: 100%;"></div>'
        };
    }
})();