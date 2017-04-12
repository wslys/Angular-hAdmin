/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.contacts', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.contacts', {
                url: '/contacts',
                templateUrl: 'app/pages/pages/contacts/contacts.html',
                controller: 'contactsCtrl'
            });
    }

})();