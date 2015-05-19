/**
 * Created by sabreu on 5/18/2015.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .controller('AppointmentAddController', AppointmentAddController);

    AppointmentAddController.$inject = ['$rootScope', 'PatientService',
        'PhlebotomistService', 'ServiceCenterService',
        'LabTestService', 'DiagnosisService', '$q'
    ];

    /* @ngInject */
    function AppointmentAddController($rootScope, PatientService, PhlebotomistService, ServiceCenterService, LabTestService, DiagnosisService, $q) {
        /* jshint validthis: true */
        var vm = this;
        $rootScope.pageHeader = "Add New Appointment";
        vm.activate = activate;
        vm.isSaving = false;
        //Needed data to create an array
        vm.patients = [];
        vm.phlebotomists = [];
        vm.servicecenters = [];
        vm.labtests = [];
        vm.diagnoses = [];

        vm.patient = null;
        vm.phlebotomist = null;
        vm.servicecenter = null;
        vm.diagnosis = null;
        vm.labtest = null;
        //Activated when this controller is loaded
        activate();

        ////////////////

        function activate() {
            loadData();
        }

        /*Demo Data*/
        vm.people = [
            {name: 'Adam', email: 'adam@email.com', age: 10},
            {name: 'Amalie', email: 'amalie@email.com', age: 12},
            {name: 'Wladimir', email: 'wladimir@email.com', age: 30},
            {name: 'Samantha', email: 'samantha@email.com', age: 31},
            {name: 'Estefanía', email: 'estefanía@email.com', age: 16},
            {name: 'Natasha', email: 'natasha@email.com', age: 54},
            {name: 'Nicole', email: 'nicole@email.com', age: 43},
            {name: 'Adrian', email: 'adrian@email.com', age: 21}
        ];

        function loadData() {
            vm.patients = PatientService.query();
            vm.phlebotomists = PhlebotomistService.query();
            vm.servicecenters = ServiceCenterService.query();
            vm.labtests = LabTestService.query();
            vm.diagnoses = DiagnosisService.query();
            $q.all([
                vm.patients.$promise,
                vm.phlebotomists.$promise,
                vm.servicecenters.$promise,
                vm.labtests.$promise,
                vm.diagnoses.$promise
            ]).then(function () {
                console.log('Done');
            });

        }
    }
})();