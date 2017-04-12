/**
 * @author wsl
 * created on 2017-04-12
 * updated on 2017-04-12
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.album', [
        'hAdmin.pages.album.basic_gallery',
        'hAdmin.pages.album.blueimp',
        'hAdmin.pages.album.carousel',
        'hAdmin.pages.album.css3Animation'
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.album', {
                url: '/album',
                templateUrl: 'app/pages/album/album.html',
                abstract: true
            });
    }

})();