/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.buttons', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.buttons', {
                url: '/buttons',
                templateUrl: 'app/pages/ui/buttons/buttons.html'
            });
    }

})();