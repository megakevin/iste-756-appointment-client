(function () {
    'use strict';

    angular
        .module('app')
        .controller('PatientIndexController', PatientIndexController);

    PatientIndexController.$inject = ['PatientService', '$rootScope', 'usSpinnerService'];

    /* @ngInject */
    function PatientIndexController(PatientService, $rootScope, usSpinnerService) {
        /* jshint validthis: true */
        var vm = this;
        $rootScope.pageHeader = "Patients";
        vm.patients = [];

        vm.activate = activate;
        vm.title = 'PatientIndexController';

        activate();

        ////////////////

        function activate() {
            PatientService.query().$promise.then(function (data) {
                usSpinnerService.stop('load-spinner');
                vm.patients = data;
            })
        }


    }
})();