/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
  'use strict';

  angular.module('hAdmin.theme.components')
    .controller('NavbarCtrl', NavbarCtrl);

  /** @ngInject */
  function NavbarCtrl($scope) {
    $scope.values = "请输入您需要查找的内容 …";
    
    $scope.test = function() {
    	console.log($scope.values);
    };
  }
})();