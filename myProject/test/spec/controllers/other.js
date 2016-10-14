'use strict';

describe('Controller: OtherCtrl', function () {

  // load the controller's module
  beforeEach(module('myProjectApp'));

  var OtherCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OtherCtrl = $controller('OtherCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OtherCtrl.awesomeThings.length).toBe(3);
  });
});
