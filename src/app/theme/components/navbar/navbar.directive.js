/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.theme.components')
        .directive('navbar', navbar);

    /** @ngInject */
    function navbar($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'app/theme/components/navbar/navbar.html',
            controller: 'NavbarCtrl',
            link: function (scope, el) {
                function SmoothlyMenu() {
                    if (!$('body').hasClass('mini-navbar')) {
                        $('#side-menu').hide();
                        setTimeout(
                            function () {
                                $('#side-menu').fadeIn(500);
                            }, 100);
                    } else if ($('body').hasClass('fixed-sidebar')) {
                        $('#side-menu').hide();
                        setTimeout(
                            function () {
                                $('#side-menu').fadeIn(500);
                            }, 300);
                    } else {
                        $('#side-menu').removeAttr('style');
                    }
                }
                function NavToggle() {
                    $('.navbar-minimalize').trigger('click');
                }
                // 菜单切换
                $('.navbar-minimalize').click(function () {
                    $("body").toggleClass("mini-navbar");
                    SmoothlyMenu();
                });
            }
        };
    }

})();