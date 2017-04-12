/**
 * @author wsl
 * created on 2017-04-12
 * updated on 2017-04-12
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.ui.toastr').controller('toastrCtrl', ['$scope', 'toastr', 'toastrConfig', function ($scope, toastr, toastrConfig) {
        $scope.options = {
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
        };

        $scope.message = {
            title: "title",
            msg: "message ...... ",
            type: ""
        };

        $scope.toastrShow = function () {
            angular.extend(toastrConfig, $scope.options);
            switch ($scope.message.type) {
                case 'success':
                    toastr.success($scope.message.msg, $scope.message.title, {

                    });
                    break;
                case 'info':
                    toastr.info($scope.message.msg, $scope.message.title, {});
                    break;
                case 'warning':
                    toastr.warning($scope.message.msg, $scope.message.title, {});
                    break;
                case 'error':
                    toastr.error($scope.message.msg, $scope.message.title, {});
                    break;
                default:
                    toastr.success($scope.message.msg, $scope.message.title, {});
                    break;
            }
        };

        $scope.toastrClear = function () {

        };
    }]);

})();
