/**
 * This the application main module.
 * Created by sabreu on 5/17/2015.
 */
(function(){
    'use strict';
    angular.module('app', [
        'ui.router',  //Angular module for providing routing functionality.
        'ngAnimate', //Angular module for animation.
        'ngMessages', //Output Error Messages
        'angular-loading-bar' //Display loading bar when XHR request are fired

    ])
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false); //false for production
        }])
    ;
})();

