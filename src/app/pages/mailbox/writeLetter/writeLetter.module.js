/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.mailbox.writeLetter', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.mailbox.writeLetter', {
                url: '/writeLetter',
                templateUrl: 'app/pages/mailbox/writeLetter/writeLetter.html',
                controller: 'writeLetterCtrl',
                controllerAs: 'writeLetter'
            });
    }

})();