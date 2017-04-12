/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms', [
        'hAdmin.pages.forms.basic',
        'hAdmin.pages.forms.editors',
        'hAdmin.pages.forms.editors.codeEditor',
        'hAdmin.pages.forms.fileUpload',
        'hAdmin.pages.forms.formValidation',
        'hAdmin.pages.forms.formWizard',
        'hAdmin.pages.forms.layerDate',
        'hAdmin.pages.forms.plugins',
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.forms', {
                url: '/forms',
                templateUrl: 'app/pages/forms/forms.html',
                abstract: true
            });
    }

})();