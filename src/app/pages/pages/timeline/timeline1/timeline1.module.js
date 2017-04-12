/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.timeline1', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.timeline1', {
                url: '/timeline1',
                templateUrl: 'app/pages/pages/timeline/timeline1/timeline1.html',
                controller: 'timeline1Ctrl'
            });
    }

})();