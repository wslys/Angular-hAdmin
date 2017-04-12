/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.typography', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.typography', {
                url: '/typography',
                templateUrl: 'app/pages/ui/typography/typography.html',
                controller: 'typographyCtrl'
            });
    }

})();