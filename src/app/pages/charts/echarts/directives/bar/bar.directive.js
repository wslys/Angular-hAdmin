/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.echarts')
        .directive('echartBar', echartBar);

    /** @ngInject */
    function echartBar() {
        return {
            restrict: 'E',
            controller: 'echartBarCtrl',
            template: '<div id="bar" style="width: 100%;height: 100%;"></div>'
        };
    }
})();