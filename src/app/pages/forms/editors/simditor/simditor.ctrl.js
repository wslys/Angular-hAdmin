/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.editors.simditor').controller('simditorCtrl', Ctrl);

    /** @ngInject */
    function Ctrl($scope, $timeout, $interval) {
        console.log("simditorCtrl");

        $scope.editor = new Simditor({
            textarea: $('#simditor-editor')
        });

        $scope.HTMLValue = "";

        $scope.edit = function () {

        };

        $scope.save = function () {
            $scope.HTMLValue = $scope.editor.getValue();
        };
    }

})();
