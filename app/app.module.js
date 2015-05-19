/**
 * This the application main module.
 * Created by sabreu on 5/17/2015.
 */
(function(){
    'use strict';
     angular.module('app', [
        'ngResource', // RESTful API
        'ngSanitize', //Sanitize HTML
        'ui.router',  //Angular module for providing routing functionality.
        'ngAnimate', //Angular module for animation.
        'ngMessages', //Output Error Messages
        'angular-loading-bar', //Display loading bar when XHR request are fired
        'ui.select', //
        'mgcrea.ngStrap'
    ])
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(true); //false for production
        }])
    ;
})();

