/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.forum', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.forum', {
                url: '/forum',
                templateUrl: 'app/pages/pages/forum/forum.html',
                controller: 'forumCtrl'
            });
    }

})();