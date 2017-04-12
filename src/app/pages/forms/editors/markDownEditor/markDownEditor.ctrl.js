/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.editors.markDownEditor').controller('markDownEditorCtrl', Ctrl);

    /** @ngInject */
    function Ctrl($scope, $timeout, $interval) {
        console.log("markDownEditorCtrl");

        $scope.markDownValue = "";

        function test(e) {
            $scope.markDownValue = e.getContent();
            console.log(e.getContent());
        }
        var markDown = $("#target-editor-with-custom-buttons").markdown(
            {
                savable:true,
                onShow: function(e){
                    // alert("Showing "
                    //     +e.$textarea.prop("tagName").toLowerCase()
                    //     +"#"
                    //     +e.$textarea.attr("id")
                    //     +" as Markdown Editor...")
                },
                onPreview: function(e) {
                    var previewContent

                    if (e.isDirty()) {
                        var originalContent = e.getContent()

                        previewContent = "Prepended text here..."
                            + "\n"
                            + originalContent
                            + "\n"
                            +"Apended text here..."
                    } else {
                        previewContent = "Default content"
                    }

                    return previewContent
                },
                onSave: function(e) {
                    test(e);
                },
                onChange: function(e){
                    
                },
                onFocus: function(e) {
                    
                },
                onBlur: function(e) {
                    
                }
            }
        );

        $scope.getContent = function () {
            $scope.markDownValue = markDown.e.getContent();
        }
    }

})();
