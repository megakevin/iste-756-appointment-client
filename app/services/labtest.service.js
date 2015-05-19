/**
 * Created by sabreu on 5/18/2015.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .factory('LabTestService', LabTestService);

    LabTestService.$inject = ['$resource', 'appConfig'];

    /* @ngInject */
    function LabTestService($resource, appConfig) {
        var url = appConfig.baseUrl+'labtests/:entityId';
        return $resource(url, null, {
            'update': {method:'PUT'}
        });
    }

})();