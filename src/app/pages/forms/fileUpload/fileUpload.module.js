/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.fileUpload', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.forms.fileUpload', {
                url: '/fileUpload',
                templateUrl: 'app/pages/forms/fileUpload/fileUpload.html',
                controller: 'fileUploadCtrl'
            });
    }

})();