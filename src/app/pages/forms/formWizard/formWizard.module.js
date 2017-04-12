/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.formWizard', []).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.forms.formWizard', {
                url: '/formWizard',
                templateUrl: 'app/pages/forms/formWizard/formWizard.html',
                controller: 'formWizardForm'
            });
    }

})();