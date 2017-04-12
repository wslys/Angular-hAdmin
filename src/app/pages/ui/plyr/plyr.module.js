/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.plyr', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.plyr', {
                url: '/plyr',
                templateUrl: 'app/pages/ui/plyr/plyr.html'
            });
    }

})();