/**
 * @author wsl
 * created on 2017-04-12
 * updated on 2017-04-12
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.album.basic_gallery', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.album.basic_gallery', {
                url: '/basic_gallery',
                templateUrl: 'app/pages/album/basic_gallery/basic_gallery.html',
                controller: 'basic_galleryCtrl'
            });
    }

})();