/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.layerDate', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.forms.layerDate', {
                url: '/layerDate',
                templateUrl: 'app/pages/forms/layerDate/layerDate.html',
                controller: 'layerDateForm'
            });
    }

})();