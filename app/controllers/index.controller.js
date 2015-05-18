/**
 * Created by sabreu on 5/17/2015.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$log'];

    /* @ngInject */
    function IndexController($log) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'IndexController';

        activate();

        ////////////////

        function activate() {
            console.log('activated IndexController');
        }


    }
})();
