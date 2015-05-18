(function () {
    'use strict';

    angular
        .module('app')
        .controller('ServiceCenterIndexController', ServiceCenterIndexController);

    ServiceCenterIndexController.$inject = ['$log'];

    /* @ngInject */
    function ServiceCenterIndexController($log) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'ServiceCenterIndexController';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated ServiceCenterIndexController');
        }


    }
})();