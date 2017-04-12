/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.forms.editors', [
        'hAdmin.pages.forms.editors.richTextEditor',
        'hAdmin.pages.forms.editors.simditor',
        'hAdmin.pages.forms.editors.markDownEditor'
    ]).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pages.forms.editors', {
                url: '/editors',
                templateUrl: 'app/pages/forms/editors/editors.html',
                abstract: true
            });
    }

})();