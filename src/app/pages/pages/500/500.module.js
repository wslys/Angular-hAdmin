/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.err500', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.500', {
                url: '/500',
                templateUrl: 'app/pages/pages/500/500.html',
                controller: 'err500Ctrl'
            });
    }

})();