/**
 * @author wsl
 * created on 2017-04-11
 * updated on 2017-04-11
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.table.dataTable', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.table.dataTable', {
                url: '/dataTable',
                templateUrl: 'app/pages/table/dataTable/dataTable.html',
                controller: 'dataTableCtrl'
            });
    }

})();