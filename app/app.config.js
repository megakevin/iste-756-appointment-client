/**
 * The purpose of this script is to define global configuration parameters
 * Created by sabreu on 5/17/2015.
 */
(function() {
    'use strict';
    var appConfig = {
        baseUrl: 'http://localhost:8080/appointment-server/webresources/'//Service base URL
    };
    angular.module('app').value('appConfig', appConfig);
}
)();