/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.layer', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.layer', {
                url: '/layer',
                templateUrl: 'app/pages/ui/modal/layer/layer.html'
            });
    }

})();