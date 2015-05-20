/**
 * Created by sabreu on 5/18/2015.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .controller('AppointmentAddController', AppointmentAddController);

    AppointmentAddController.$inject = ['$rootScope', 'LookupService',
        'AppointmentService', 'usSpinnerService'
    ];

    /* @ngInject */
    function AppointmentAddController($rootScope, LookupService, AppointmentService, usSpinnerService) {
        /* jshint validthis: true */
        var vm = this;
        $rootScope.pageHeader = "Add New Appointment";
        vm.activate = activate;
        vm.isSaving = false;
        vm.isLoading = false;

        //Needed data to create an array
        vm.patients = [];
        vm.phlebotomists = [];
        vm.servicecenters = [];
        vm.labtests = [];
        vm.diagnoses = [];
        vm.appointmentLabTestCollection = [];
        //

        vm.saveDate = saveDate;
        vm.resetForm = resetForm;
        vm.addAppointmentLabTest = addAppointmentLabTest;
        vm.removeLabTest = removeLabTest;
        vm.appointmentCost = 0;

        //Activated when this controller is loaded
        activate();

        ////////////////

        function activate() {
            resetField();
            loadData();
        }

        /**
         * Loads the initial data needed to populare dropdown list
         */
        function loadData() {
            vm.isLoading = true;
            LookupService.get().$promise.then(function (data) {
                vm.isLoading = false;
                usSpinnerService.stop('load-spinner'); //Stops the spinner
                vm.phlebotomists = data.phlebotomists;
                vm.servicecenters =data.psc;
                vm.labtests = data.labTests;
                vm.diagnoses = data.diagnoses;
                vm.patients = data.patients;
            });
        }

        //FUNCTIONS
        /**
         * Saves the data to the database
         */
        function saveDate(){
            //Prepare object
            vm.appointment.apptDate = moment(vm.appointment.apptDate).format('YYYY-MM-DD');
            vm.appointment.apptTime = moment(vm.appointment.apptTime).format('H:mm:ss');
            vm.appointment.patientId = vm.patient.id;
            vm.appointment.phlebId = vm.phlebotomist.id;
            vm.appointment.pscId = vm.servicecenter.id;
            vm.appointment.physician = vm.patient.physician.id; //physician id
            vm.appointment.appointmentLabTestCollection = vm.appointmentLabTestCollection;
            usSpinnerService.spin('load-spinner');
            vm.isSaving = true;
            AppointmentService.save(vm.appointment).$promise.then(function(response){
                usSpinnerService.stop('load-spinner');
                vm.isSaving = false;
                if(response.success){
                    toastr["success"]("Appointment saved successfully");
                    resetField();
                }else{
                    console.log(response);
                    if(response.errorCode >0){
                        toastr["error"](response.message);
                    }

                }
            }, function(error){
                vm.isSaving = false;
                console.log(error);
            });
        }

        /**
         * Add item to the collection
         */
        function addAppointmentLabTest(){
            //Calculate cost
            console.log(vm.labtest);
            vm.appointmentCost += vm.labtest.cost;
            //AppointmentLabTestViewModel
            var appointmentLabTest = {
                labTestId: vm.labtest.id,
                diagnosisCode: vm.diagnosis.code,
                labTestName: vm.labtest.name,
                diagnosisName: vm.diagnosis.name
            }
            vm.appointmentLabTestCollection.push(appointmentLabTest);
        }

        /**
         * Removes item from the collection
         * @param data
         */
        function removeLabTest(data){
            vm.appointmentLabTestCollection = _.without(vm.appointmentLabTestCollection, data);
            console.log(vm.appointmentLabTestCollection);
        }


        /**
         * Reset the form to its original state
         * @param form HTML form
         */
        function resetForm(form){
            resetField();
            form.$setPristine();
        }

        /**
         * Resets all the field to their original state
         */
        function resetField() {
            vm.appointment = {};
            vm.patient = null;
            vm.phlebotomist = null;
            vm.servicecenter = null;
            vm.diagnosis = null;
            vm.labtest = null;
            vm.appointmentLabTestCollection = [];
        }

    }
})();