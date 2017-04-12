/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.clients').controller('clientsCtrl', Ctrl);

    /** @ngInject */
    function Ctrl($scope, $timeout, $interval) {
        console.log("clientsCtrl");
        $scope.tabs = [
            { title:'联系人', template:"app/pages/pages/clients/temp/tab1.html"},
            { title:'联系人', template:"app/pages/pages/clients/temp/tab2.html"}
        ];
    }

})();
