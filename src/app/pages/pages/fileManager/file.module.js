/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.file', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.pages.file', {
                url: '/file',
                templateUrl: 'app/pages/pages/fileManager/file.html',
                controller: 'fileCtrl'
            });
    }

})();