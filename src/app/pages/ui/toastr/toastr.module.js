/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.toastr', ['toastr']).config(routeConfig).config(function(toastrConfig) {
        angular.extend(toastrConfig, {
            closeButton: true,
            debug: false,
            progressBar: true,
            positionClass: "toast-top-right",
            onclick: null,
            showDuration: "400",
            hideDuration: "1000",
            timeOut: "7000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut"
        });
    });

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.ui.toastr', {
                url: '/toastr',
                templateUrl: 'app/pages/ui/toastr/toastr.html',
                controller: "toastrCtrl"
            });
    }

})();