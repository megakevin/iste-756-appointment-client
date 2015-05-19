(function () {
    'use strict';
    angular
        .module('app')
        .controller('AppointmentIndexController', AppointmentIndexController);

    AppointmentIndexController.$inject = ['$log', 'AppointmentService','$rootScope'];

    /* @ngInject */
    function AppointmentIndexController($log, AppointmentService, $rootScope) {
        /* jshint validthis: true */
        var vm = this;
        $rootScope.pageHeader = "Appointments";
        vm.appointments = [];

        vm.activate = activate;
        vm.title = 'AppointmentIndexController';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated AppointmentIndexController');
            AppointmentService.query().$promise.then(function (data) {
                vm.appointments = data;
            });
        }


    }
})();