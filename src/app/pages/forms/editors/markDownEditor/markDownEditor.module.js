/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.editors.markDownEditor', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.forms.editors.markDownEditor', {
                url: '/markDownEditor',
                templateUrl: 'app/pages/forms/editors/markDownEditor/markDownEditor.html',
                controller: 'markDownEditorCtrl'
            });
    }

})();