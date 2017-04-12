/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.faq', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.faq', {
                url: '/faq',
                templateUrl: 'app/pages/pages/faq/faq.html',
                controller: 'faqCtrl'
            });
    }

})();