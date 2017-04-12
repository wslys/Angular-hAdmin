/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.mailbox.mailDetail', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.mailbox.mailDetail', {
                url: '/mailDetail',
                templateUrl: 'app/pages/mailbox/mailDetail/mailDetail.html',
                controller: 'mailDetailCtrl',
                controllerAs: 'mailDetail'
            });
    }

})();