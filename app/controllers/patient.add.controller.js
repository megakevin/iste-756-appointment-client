/**
 * Created by sabreu on 5/20/2015.
 */
(function () {
    angular
        .module('app')
        .controller('PatientAddController', PatientAddController);

    PatientAddController.$inject = ['PatientService', '$rootScope', 'usSpinnerService', 'PhysicianService'];

    /* @ngInject */
    function PatientAddController(PatientService, $rootScope, usSpinnerService, PhysicianService) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        $rootScope.pageHeader = "Add Patient";
        vm.physicians = [];
        vm.saveData = saveData;
        vm.resetForm = resetForm;

        vm.patient = {};
        activate();

        ////////////////

        function activate() {
            PhysicianService.query().$promise.then(function (data) {
                usSpinnerService.stop('load-spinner');
                vm.physicians = data;
            });
        }

        function saveData() {
           // vm.patient.dateofbirth = moment(vm.patient.dateofbirth).format('YYYY-MM-DD');
            vm.patient.dateofbirth = new Date(moment(vm.patient.dateofbirth).format('YYYY-MM-DD'));
            console.log(vm.patient);
            usSpinnerService.spin('load-spinner');
            PatientService.save(vm.patient).$promise.then(function (response) {
                usSpinnerService.stop('load-spinner');
                console.log(response);
                if(response.success){
                    toastr["success"]("Patient saved successfully");
                    resetForm();
                }else{
                    if(response.errorCode >0){
                        toastr["error"](response.message);
                    }else{
                        toastr["error"]('An error has occurred');
                    }
                }
            });
        }

        function resetForm(form) {
            vm.patient = {};
            form.$setPristine();
        }

    }
})();
