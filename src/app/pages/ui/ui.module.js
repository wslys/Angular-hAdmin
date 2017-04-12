/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui', [
        'hAdmin.pages.ui.typography',
        'hAdmin.pages.ui.fontIcon',
        'hAdmin.pages.ui.buttons',
        'hAdmin.pages.ui.tabs_panels',
        'hAdmin.pages.ui.notifications',
        'hAdmin.pages.ui.badges_labels',
        'hAdmin.pages.ui.grid_options',
        'hAdmin.pages.ui.plyr',
        'hAdmin.pages.ui.toastr',
        'hAdmin.pages.ui.spinners',
        'hAdmin.pages.ui.layer',
        'hAdmin.pages.ui.modal'
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui', {
                url: '/ui',
                templateUrl: 'app/pages/ui/ui.html',
                abstract: true
            });
    }

})();