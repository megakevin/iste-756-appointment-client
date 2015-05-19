/**
 * Created by sabreu on 5/18/2015.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .factory('ServiceCenterService', ServiceCenterService);

    ServiceCenterService.$inject = ['$resource', 'appConfig'];

    /* @ngInject */
    function ServiceCenterService($resource, appConfig) {
        var url = appConfig.baseUrl+'servicecenters/:entityId';
        return $resource(url, null, {
            'update': {method:'PUT'}
        });
    }

})();
