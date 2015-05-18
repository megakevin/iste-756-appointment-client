(function () {
    'use strict';
    angular
        .module('app')
        .controller('PhysicianIndexController', PhysicianIndexController);

    PhysicianIndexController.$inject = ['$log'];

    /* @ngInject */
    function PhysicianIndexController($log) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'PhysicianIndexController';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated PhysicianIndexController');
        }


    }
})();