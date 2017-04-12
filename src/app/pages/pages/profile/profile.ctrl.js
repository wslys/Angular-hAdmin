/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.profile').controller('profileCtrl', Ctrl);

    /** @ngInject */
    function Ctrl($scope, $timeout, $interval) {
        console.log("profileCtrl");
        $("#profile-bar-1").peity("bar", {
            fill: ["#1ab394", "#d7d7d7"]
        });

        $("#profile-bar-2").peity("bar", {
            fill: ["#1ab394", "#d7d7d7"]
        });

        $("#profile-line").peity("line",{
            fill: '#1ab394',
            stroke:'#169c81',
        })
    }

})();
