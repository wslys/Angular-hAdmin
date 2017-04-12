/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.echarts')
        .directive('echartScatter', echartScatter);

    /** @ngInject */
    function echartScatter() {
        return {
            restrict: 'E',
            controller: 'echartScatterCtrl',
            template: '<div id="eChart-scatter" style="width: 100%;height: 100%;"></div>'
        };
    }
})();