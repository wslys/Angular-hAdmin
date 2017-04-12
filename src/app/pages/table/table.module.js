/**
 * @author wsl
 * created on 2017-04-11
 * updated on 2017-04-11
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.table', [
        'hAdmin.pages.table.basicTable',
        'hAdmin.pages.table.dataTable',
        'hAdmin.pages.table.jqgridTable',
        'hAdmin.pages.table.bootstrap_table'
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.table', {
                url: '/table',
                templateUrl: 'app/pages/table/table.html',
                abstract: true
            });
    }

})();