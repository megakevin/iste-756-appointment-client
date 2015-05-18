(function () {
    'use strict';

    angular
        .module('app')
        .controller('PatientIndexController', PatientIndexController);

    PatientIndexController.$inject = ['$log'];

    /* @ngInject */
    function PatientIndexController($log) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'PatientIndexController';

        activate();

        ////////////////

        function activate() {
            $log.info('activated PatientIndexController');
        }


    }
})();