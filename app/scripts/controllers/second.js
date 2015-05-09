'use strict';

/**
 * @ngdoc function
 * @name uirouterApp.controller:SecondCtrl
 * @description
 * # SecondCtrl
 * Controller of the uirouterApp
 */
angular.module('uirouterApp')

  .controller('SecondCtrl', function ($scope, $log,$stateParams) {
    $scope.stateParams = $stateParams;

    $log($stateParams);
  });

