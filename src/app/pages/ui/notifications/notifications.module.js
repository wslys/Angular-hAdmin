/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.notifications', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.notifications', {
                url: '/notifications',
                templateUrl: 'app/pages/ui/notifications/notifications.html'
            });
    }

})();