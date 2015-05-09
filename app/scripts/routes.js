'use strict';

angular.module('uirouterApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/second');

    $stateProvider
      .state('first', {
        url: '/first',
        templateUrl: 'views/first.html',
        controller: 'FirstCtrl'
      })

      .state('second', {
        url: '/second/:myId',
        templateUrl: 'views/second.html',
        controller: 'SecondCtrl'

      })
      .state('second.double', {
        url: '/:yourId',
        templateUrl: 'views/second.html',
        controller: 'SecondCtrl'
      })
      .state('third', {
        url: '/third/:someId',
        templateUrl: 'views/third.html',
        controller: 'ThirdCtrl',
        resolve: {
          someId: function(){return 'overridden!';}
        }

      })
    ;
  });
