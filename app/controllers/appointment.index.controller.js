(function () {
    'use strict';
    angular
        .module('app')
        .controller('AppointmentIndexController', AppointmentIndexController);

    AppointmentIndexController.$inject = ['$log', 'AppointmentService','$rootScope', 'usSpinnerService'];

    /* @ngInject */
    function AppointmentIndexController($log, AppointmentService, $rootScope, usSpinnerService) {
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
            usSpinnerService.spin('load-spinner');
            AppointmentService.query().$promise.then(function (data) {
                usSpinnerService.stop('load-spinner');
                vm.appointments = data;
            });
        }


    }
})();