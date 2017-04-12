/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.editors.codeEditor').controller('codeEditorCtrl', Ctrl);

    /** @ngInject */
    function Ctrl($scope, $timeout, $interval) {
        console.log("codeEditorCtrl");
        $(document).ready(function () {

            var editor_one = CodeMirror.fromTextArea(document.getElementById("codeEditor-code1"), {
                lineNumbers: true,
                matchBrackets: true,
                styleActiveLine: true,
                theme: "ambiance"
            });

            var editor_two = CodeMirror.fromTextArea(document.getElementById("codeEditor-code2"), {
                lineNumbers: true,
                matchBrackets: true,
                styleActiveLine: true
            });

        });
    }

})();
