/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.spinners', ['toastr']).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.spinners', {
                url: '/spinners',
                templateUrl: 'app/pages/ui/spinners/spinners.html',
                controller: "spinnersCtrl"
            });
    }

})();