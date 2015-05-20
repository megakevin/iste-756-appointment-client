(function () {
    angular
        .module('app')
        .factory('LookupService', LookupService);

    LookupService.$inject = ['$resource', 'appConfig'];

    /* @ngInject */
    function LookupService($resource, appConfig) {
        var url = appConfig.baseUrl+'lookups/:entityId';
        return $resource(url, null, {
            'update': {method:'PUT'}
        });

    }

})();





