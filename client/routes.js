angular.module("caverohours").config(function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'client/hours/views/dashboard.ng.html',
            controller: 'DashboardCtrl',
            controllersAs: 'ctrl'
        })
        .state('invullen', {
            url: '/invullen',
            templateUrl: 'client/hours/views/invullen.ng.html',
            controller: 'InvullenCtrl as ctrl',
            controllersAs: 'ctrl'
        })
        ;

    $urlRouterProvider.otherwise("/dashboard");
});