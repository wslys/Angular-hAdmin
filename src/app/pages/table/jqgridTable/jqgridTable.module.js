/**
 * @author wsl
 * created on 2017-04-11
 * updated on 2017-04-11
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.table.jqgridTable', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.table.jqGrid', {
                url: '/jqGrid',
                templateUrl: 'app/pages/table/jqgridTable/jqgridTable.html',
                controller: 'jqgridTableCtrl'
            });
    }

})();