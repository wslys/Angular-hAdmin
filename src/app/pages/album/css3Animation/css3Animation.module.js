/**
 * @author wsl
 * created on 2017-04-12
 * updated on 2017-04-12
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.album.css3Animation', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.album.css3Animation', {
                url: '/css3Animation',
                templateUrl: 'app/pages/album/css3Animation/css3Animation.html',
                controller: 'css3AnimationCtrl'
            });
    }

})();