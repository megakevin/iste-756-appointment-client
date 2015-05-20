/**
 * The purpose of this script is to define global configuration parameters
 * Created by sabreu on 5/17/2015.
 */
(function() {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    'use strict';
    var appConfig = {
        baseUrl: 'http://localhost:8080/appointment-server/webresources/'//Service base URL
    };
    angular.module('app').value('appConfig', appConfig);
}
)();