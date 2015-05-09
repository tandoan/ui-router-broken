'use strict';

/**
 * @ngdoc function
 * @name uirouterApp.controller:ThirdCtrl
 * @description
 * # ThirdCtrl
 * Controller of the uirouterApp
 */
angular.module('uirouterApp')
  .controller('ThirdCtrl', function ($scope, $stateParams) {
    $scope.someId = $stateParams.someId;
  });
