/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.fontIcon', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.fontawesome', {
                url: '/fontawesome',
                templateUrl: 'app/pages/ui/fontIcon/fontawesome.html'
            })
            .state('pages.ui.glyphicons', {
                url: '/glyphicons',
                templateUrl: 'app/pages/ui/fontIcon/glyphicons.html'
            })
            .state('pages.ui.iconfont', {
                url: '/iconfont',
                templateUrl: 'app/pages/ui/fontIcon/iconfont.html'
            });
    }

})();