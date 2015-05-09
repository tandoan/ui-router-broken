'use strict';

describe('Controller: SecondCtrl', function () {

  // load the controller's module
  beforeEach(module('uirouterApp'));

  var SecondCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SecondCtrl = $controller('SecondCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
