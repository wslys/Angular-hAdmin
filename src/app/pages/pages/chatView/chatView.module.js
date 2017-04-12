/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.chatView', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.chatView', {
                url: '/chatView',
                templateUrl: 'app/pages/pages/chatView/chatView.html',
                controller: 'chatViewCtrl'
            });
    }

})();