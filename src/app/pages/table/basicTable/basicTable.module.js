/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.table.basicTable', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.table.basic_table', {
                url: '/basic_table',
                templateUrl: 'app/pages/table/basicTable/basicTable.html',
                controller: 'basicTableCtrl'
            });
    }

})();