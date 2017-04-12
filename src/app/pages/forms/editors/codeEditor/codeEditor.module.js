/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.editors.codeEditor', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.forms.editors.codeEditor', {
                url: '/codeEditor',
                templateUrl: 'app/pages/forms/editors/codeEditor/codeEditor.html',
                controller: 'codeEditorCtrl'
            });
    }

})();