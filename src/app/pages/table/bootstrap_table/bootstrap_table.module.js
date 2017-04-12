/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.table.bootstrap_table', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.table.bootstrap_table', {
                url: '/bootstrap_table',
                templateUrl: 'app/pages/table/bootstrap_table/bootstrap_table.html',
                controller: 'bootstrapTableCtrl'
            });
    }

})();