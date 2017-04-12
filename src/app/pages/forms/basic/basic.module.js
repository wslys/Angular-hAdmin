/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.basic', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.forms.basic', {
                url: '/basic',
                templateUrl: 'app/pages/forms/basic/basic.html',
                controller: 'basicFormCtrl'
            });
    }

})();