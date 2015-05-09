'use strict';
//
//var commonCtrl = function ($scope, $log,$stateParams) {
//  $scope.stateParams = $stateParams;
//
//  $log.log($stateParams);
//};
//
//var templateHtml = '<table class="table"><thead><tr><td>Key</td><td>Val</td></tr></thead><tr ng-repeat="(k,v) in stateParams"><td>{{k}}</td><td>{{v}}</tr></table>';
//
//angular.module('uirouterApp')
//  .config(function ($stateProvider, $urlRouterProvider) {
//    $urlRouterProvider
//      .otherwise('/second');
//
//    $stateProvider
//      .state('first', {
//        url: '/first',
//        template: templateHtml,
//        controller: commonCtrl
//      })
//
//      .state('second', {
//        url: '/second/:myId',
//        template: templateHtml,
//        controller: commonCtrl
//
//      })
//      .state('second.double', {
//        url: '/:yourId',
//        template: templateHtml,
//        controller: commonCtrl
//      })
//      .state('third', {
//        url: '/third/:someId',
//        template: templateHtml,
//        controller: commonCtrl,
//        resolve: {
//          someId: function(){return 'overridden!';}
//        }
//
//      })
//    ;
//  });
