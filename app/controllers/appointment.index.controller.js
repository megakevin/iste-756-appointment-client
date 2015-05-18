(function () {
    'use strict';
    angular
        .module('app')
        .controller('AppointmentIndexController', AppointmentIndexController);

    AppointmentIndexController.$inject = ['$log'];

    /* @ngInject */
    function AppointmentIndexController($log) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'AppointmentIndexController';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated AppointmentIndexController');
        }


    }
})();