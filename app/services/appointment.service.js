/**
 * Angular service to consume the appointment RESTful API
 * Created by sabreu on 5/18/2015.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .factory('AppointmentService', AppointmentService);

    AppointmentService.$inject = ['$resource', 'appConfig'];
    /* @ngInject */
    function AppointmentService($resource, appConfig) {
        var url = appConfig.baseUrl + 'appointments/:entityId';
        return $resource(url, null, {
            'update': {method: 'PUT'}
        });
    }
})();
