'use strict';

describe('Controller: ThirdCtrl', function () {

  // load the controller's module
  beforeEach(module('uirouterApp'));

  var ThirdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThirdCtrl = $controller('ThirdCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
