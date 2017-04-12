/**
 * @author wsl
 * created on 2017-04-12
 * updated on 2017-04-12
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.modal', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.modal', {
                url: '/modal',
                templateUrl: 'app/pages/ui/modal/modal/modal.html',
                controller: 'modalCtrl'
            });
    }

})();