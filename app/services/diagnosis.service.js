/**
 * Created by sabreu on 5/18/2015.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .factory('DiagnosisService', DiagnosisService);

    DiagnosisService.$inject = ['$resource','appConfig'];

    /* @ngInject */
    function DiagnosisService($resource, appConfig) {
        var url = appConfig.baseUrl + 'diagnosis/:entityId';
        return $resource(url, null, {
            'update': {method:'PUT'}
        });
    }
})();