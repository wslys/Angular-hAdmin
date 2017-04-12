/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.blogList', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.blogList', {
                url: '/blogList',
                templateUrl: 'app/pages/pages/blog/blogList/blogList.html',
                controller: 'blogListCtrl'
            });
    }

})();