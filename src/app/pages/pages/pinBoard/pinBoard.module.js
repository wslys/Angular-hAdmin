/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.pinBoard', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.pinBoard', {
                url: '/pinBoard',
                templateUrl: 'app/pages/pages/pinBoard/pinBoard.html',
                controller: 'pinBoardCtrl'
            });
    }

})();