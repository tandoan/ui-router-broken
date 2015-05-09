'use strict';

angular
  .module('uirouterApp', ['ui.router'])
  .constant('templateHtml','<table class="table"><thead><tr><td>Key</td><td>Val</td></tr></thead><tr ng-repeat="(k,v) in stateParams"><td>{{k}}</td><td>{{v}}</tr></table>')
  .controller('commonCtrl',function ($scope, $log,$stateParams,$state) {
    $scope.stateParams = $stateParams;

    $log.log('$stateParams',$stateParams);
    $log.log('$state.params', $state.params);
  })
  .config(function ($stateProvider, $urlRouterProvider,templateHtml) {
    $urlRouterProvider
      .otherwise('/second');

    $stateProvider
      .state('first', {
        url: '/first',
        template: templateHtml,
        controller: 'commonCtrl'
      })

      .state('second', {
        url: '/second/:myId',
        template: templateHtml,
        controller: 'commonCtrl'

      })
      .state('second.double', {
        url: '/:yourId',
        template: templateHtml,
        controller: 'commonCtrl'
      })
      .state('third', {
        url: '/third/:someId',
        template: templateHtml,
        controller: 'commonCtrl'
      })
    ;
  });
