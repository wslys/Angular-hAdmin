/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.tabs_panels', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.tabs_panels', {
                url: '/tabs_panels',
                templateUrl: 'app/pages/ui/tabs_panels/tabs_panels.html'
            });
    }

})();