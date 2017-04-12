/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.mailbox.writeLetter').controller('writeLetterCtrl', writeLetterCtrl);

    /** @ngInject */
    function writeLetterCtrl($scope, $timeout, $interval) {
        console.log("writeLetter");
        $scope.editValue = "";

        $(document).ready(function () {
            $('#summernote-edit').summernote({
                lang: 'zh-CN'
            });
        });

        $scope.send = function () {
            $scope.editValue = $('#summernote-edit').summernote('code');
            alert($scope.editValue);
        };
    }

})();
