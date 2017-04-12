/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages', [
        'hAdmin.pages.pages.contacts',
        'hAdmin.pages.pages.profile',
        'hAdmin.pages.pages.projects',
        'hAdmin.pages.pages.projectDetail',
        'hAdmin.pages.pages.teams',
        'hAdmin.pages.pages.social',
        'hAdmin.pages.pages.clients',
        'hAdmin.pages.pages.file',
        'hAdmin.pages.pages.blogList',
        'hAdmin.pages.pages.article',
        'hAdmin.pages.pages.faq',
        'hAdmin.pages.pages.timeline1',
        'hAdmin.pages.pages.timeline2',
        'hAdmin.pages.pages.pinBoard',
        'hAdmin.pages.pages.search',
        'hAdmin.pages.pages.forum',
        'hAdmin.pages.pages.404',
        'hAdmin.pages.pages.err500',
        'hAdmin.pages.pages.empty',
        'hAdmin.pages.pages.chatView',
        'hAdmin.pages.pages.login1',
        'hAdmin.pages.pages.login2',
        'hAdmin.pages.pages.loginTimeout',
        'hAdmin.pages.pages.register'
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages', {
                url: '/pages',
                templateUrl: 'app/pages/pages/pages.html',
                abstract: true
            });
    }

})();