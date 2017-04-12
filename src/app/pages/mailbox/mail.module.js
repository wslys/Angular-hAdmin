/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.mailbox', [
        'hAdmin.pages.mailbox.inbox',
        'hAdmin.pages.mailbox.mailDetail',
        'hAdmin.pages.mailbox.writeLetter',
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.mailbox', {
                url: '/mailbox',
                templateUrl: 'app/pages/mailbox/mailbox.html',
                abstract: true
            });
    }

})();