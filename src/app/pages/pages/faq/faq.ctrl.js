/**
 * @author wsl
 * created on 2017-02-26
 * updated on 2017-02-26
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.pages.faq').controller('faqCtrl', Ctrl);

    /** @ngInject */
    function Ctrl($scope, $timeout, $interval) {
        console.log("faqCtrl");

        $(document).ready(function () {
            $('#loading-example-btn').click(function () {
                var btn = $(this);
                simpleLoad(btn, true)
                simpleLoad(btn, false)
            });
        });

        function simpleLoad(btn, state) {
            if (state) {
                btn.children().addClass('fa-spin');
                btn.contents().last().replaceWith(" Loading");
            } else {
                setTimeout(function () {
                    btn.children().removeClass('fa-spin');
                    btn.contents().last().replaceWith(" Refresh");
                }, 2000);
            }
        }
    }

})();
