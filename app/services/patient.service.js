/**
 * Created by sabreu on 5/18/2015.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .factory('PatientService', PatientService);

    PatientService.$inject = ['$resource', 'appConfig'];

    /* @ngInject */
    function PatientService($resource, appConfig) {
        var url = appConfig.baseUrl+ 'patients/:entityId';
        return $resource(url, null, {
            'update': {method: 'PUT'}
        });
    }

})();
