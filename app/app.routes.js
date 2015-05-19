/**
 * Created by sabreu on 5/17/2015.
 */
(function(){
    angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/index");
        $stateProvider
            .state('index', {
                url: '/index',
                controller: 'IndexController',
                controllerAs: 'vm',
                templateUrl: 'app/views/index.html'
            })
            .state('appointmentindex',{
                url:'/appointmentindex',
                controller:'AppointmentIndexController',
                controllerAs: 'vm',
                templateUrl: 'app/views/appointment.index.html'
            })
            .state('addappointment', {
                url: '/addappointment',
                controller: 'AppointmentAddController',
                controllerAs: 'vm',
                templateUrl: 'app/views/appointment.add.html'
            })
            .state('dashboard', {
                url:'/dashboard',
                controller: 'DashboardController',
                controllerAs: 'vm',
                templateUrl: 'app/views/dashboard.html'
            })
            .state('patientindex', {
                url: '/patientindex',
                controller: 'PatientIndexController',
                controllerAs: 'vm',
                templateUrl: 'app/views/patient.index.html'
            })
            .state('physicianindex', {
                url:'/physicianindex',
                controller: 'PhysicianIndexController',
                controllerAs: 'vm',
                templateUrl: 'app/views/physician.index.html'
            })
            .state('phlebotomistindex', {
                url:'/phlebotomistindex',
                controller: 'PhlebotomistIndexController',
                controllerAs: 'vm',
                templateUrl: 'app/views/phlebotomist.index.html'
            })
            .state('servicecenterindex', {
                url: '/servicecenterindex',
                controller: 'ServiceCenterIndexController',
                controllerAs: 'vm',
                templateUrl: 'app/views/servicecenter.index.html'
            });
    }]);
})();
