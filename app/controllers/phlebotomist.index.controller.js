(function () {
    'use strict';

    angular
        .module('app')
        .controller('PhlebotomistIndexController', PhlebotomistIndexController);

    PhlebotomistIndexController.$inject = ['$log'];

    /* @ngInject */
    function PhlebotomistIndexController($log) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'PhlebotomistIndexController';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated PhlebotomistIndexController');
        }


    }
})();