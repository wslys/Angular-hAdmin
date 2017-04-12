/**
 * @author wsl
 * created on 2017-04-12
 * updated on 2017-04-12
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.album.blueimp', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.album.blueimp', {
                url: '/blueimp',
                templateUrl: 'app/pages/album/blueimp/blueimp.html',
                controller: 'blueimpCtrl'
            });
    }

})();