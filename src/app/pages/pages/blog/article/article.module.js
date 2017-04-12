/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.article', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.article', {
                url: '/blogList',
                templateUrl: 'app/pages/pages/blog/article/article.html',
                controller: 'articleCtrl'
            });
    }

})();