(function () {
    'use strict';
    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$log'];

    /* @ngInject */
    function DashboardController($log) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'DashboardController';

        activate();

        ////////////////

        function activate() {
            $log.info('activated DashboardController');
        }


    }
})();