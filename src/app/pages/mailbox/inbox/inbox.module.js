/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.mailbox.inbox', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.mailbox.inbox', {
                url: '/inbox',
                templateUrl: 'app/pages/mailbox/inbox/inbox.html',
                controller: 'inboxCtrl',
                controllerAs: 'inbox'
            });
    }

})();