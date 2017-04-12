/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.timeline2', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.timeline2', {
                url: '/timeline2',
                templateUrl: 'app/pages/pages/timeline/timeline2/timeline2.html',
                controller: 'timeline2Ctrl'
            });
    }

})();