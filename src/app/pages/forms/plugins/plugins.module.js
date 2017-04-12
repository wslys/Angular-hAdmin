/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.plugins', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.forms.plugins', {
                url: '/plugins',
                templateUrl: 'app/pages/forms/plugins/plugins.html',
                controller: 'pluginsForm'
            });
    }

})();