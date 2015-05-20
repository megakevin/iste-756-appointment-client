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
        'mgcrea.ngStrap',
         'angularSpinner'
    ])
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(true); //false for production
        }])
         .config(['usSpinnerConfigProvider', function (usSpinnerConfigProvider) {
             usSpinnerConfigProvider.setDefaults({
                 color: '#3C8DBC',
                 width: 10,
                 radius: 30,
                 length: 20
             });
         }])
    ;
})();

//{radius:30, width:8, length: 16}