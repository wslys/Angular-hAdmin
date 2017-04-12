/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.grid_options', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.grid_options', {
                url: '/grid_options',
                templateUrl: 'app/pages/ui/grid_options/grid_options.html'
            });
    }

})();