/**
 * Created by sabreu on 5/18/2015.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .factory('PhlebotomistService', PhlebotomistService);

    PhlebotomistService.$inject = ['$resource', 'appConfig'];

    /* @ngInject */
    function PhlebotomistService($resource, appConfig) {
        var url = appConfig.baseUrl + 'phlebotomists/:entityId';
        return $resource(url, null, {
            'update': {method:'PUT'}
        });
    }

})();