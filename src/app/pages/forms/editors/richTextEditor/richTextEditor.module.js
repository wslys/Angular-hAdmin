/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.editors.richTextEditor', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.forms.editors.richTextEditor', {
                url: '/richTextEditor',
                templateUrl: 'app/pages/forms/editors/richTextEditor/richTextEditor.html',
                controller: 'richTextEditorCtrl'
            });
    }

})();