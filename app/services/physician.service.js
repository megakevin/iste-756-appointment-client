/**
 * Created by sabreu on 5/20/2015.
 */
/**
 * Created by sabreu on 5/18/2015.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .factory('PhysicianService', PhysicianService);

    PhysicianService.$inject = ['$resource', 'appConfig'];

    /* @ngInject */
    function PhysicianService($resource, appConfig) {
        var url = appConfig.baseUrl+ 'physicians/:entityId';
        return $resource(url, null, {
            'update': {method: 'PUT'}
        });
    }

})();