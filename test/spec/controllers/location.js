'use strict';

describe('Controller: LocationCtrl', function () {

  // load the controller's module
  beforeEach(module('halanxApp'));

  var LocationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocationCtrl = $controller('LocationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LocationCtrl.awesomeThings.length).toBe(3);
  });
});
