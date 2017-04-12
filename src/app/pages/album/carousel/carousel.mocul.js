/**
 * @author wsl
 * created on 2017-04-12
 * updated on 2017-04-12
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.album.carousel', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.album.carousel', {
                url: '/carousel',
                templateUrl: 'app/pages/album/carousel/carousel.html',
                controller: 'carouselCtrl'
            });
    }

})();