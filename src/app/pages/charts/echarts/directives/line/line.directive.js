/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.echarts')
        .directive('echartLine', echartLine);

    /** @ngInject */
    function echartLine() {
        return {
            restrict: 'E',
            controller: 'echartLineCtrl',
            template: '<div id="line" style="width: 100%;height: 100%;"></div>'
        };
    }
})();