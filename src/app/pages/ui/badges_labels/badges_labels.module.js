/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.badges_labels', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.badges_labels', {
                url: '/badges_labels',
                templateUrl: 'app/pages/ui/badges_labels/badges_labels.html'
            });
    }

})();