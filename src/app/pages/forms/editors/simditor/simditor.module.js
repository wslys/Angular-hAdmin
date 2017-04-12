/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.editors.simditor', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.forms.editors.simditor', {
                url: '/simditor',
                templateUrl: 'app/pages/forms/editors/simditor/simditor.html',
                controller: 'simditorCtrl'
            });
    }

})();