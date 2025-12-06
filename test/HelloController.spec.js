const angular = require('angular');
require('angular-mocks');

require('../src/app');
require('../src/controllers/HelloController');

describe('HelloController', () => {
  let $controller;

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject((_$controller_) => {
    $controller = _$controller_;
  }));

  test('initial values and greet', () => {
    const ctrl = $controller('HelloController', {});
    expect(ctrl.title).toBe('AngularJS CI Starter');
    expect(ctrl.name).toBe('');
    expect(ctrl.greeting).toBe('');

    ctrl.name = 'Dileep';
    ctrl.greet();
    expect(ctrl.greeting).toBe('Hello, Dileep!');
  });
});