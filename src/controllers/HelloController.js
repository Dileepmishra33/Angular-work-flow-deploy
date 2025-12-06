(function () {
  'use strict';

  angular.module('app').controller('HelloController', HelloController);

  function HelloController() {
    const vm = this;
    vm.title = 'AngularJS CI Starter';
    vm.name = '';
    vm.greeting = '';

    vm.greet = () => {
      vm.greeting = `Hello, ${vm.name || 'friend'}!`;
    };
  }
}());