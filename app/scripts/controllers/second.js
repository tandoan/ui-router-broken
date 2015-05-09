'use strict';

/**
 * @ngdoc function
 * @name uirouterApp.controller:SecondCtrl
 * @description
 * # SecondCtrl
 * Controller of the uirouterApp
 */
angular.module('uirouterApp')

  .controller('SecondCtrl', function ($scope, $stateParams,$state) {
    $scope.myId = $stateParams.myId;
    $scope.yourId = $stateParams.yourId;

    console.log($stateParams);
    console.log($state, 'state');
  });

