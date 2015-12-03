(function () {
    'use strict';

    angular
            .module('vpor')
            .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
                .state('assignment', {
                    abstract: true,
                    url: '/assignment',
                    templateUrl: 'app/assignment/assignment_root.html',
                    controller: 'AssignmentRootController',
                    controllerAs: 'assignment'
                })
                .state('assignment.splash', {
                    url: '',
                    templateUrl: 'app/assignment/assignment_splash.html'
                })
                .state('assignment.demographics', {
                    url: '/demographics/:requestId',
                    templateUrl: 'app/assignment/demographics.html',
                    controller: 'DemographicsController',
                    controllerAs: 'demographics'
                })
                .state('assignment.followup', {
                    url: '/follow-up/:requestId',
                    templateUrl: 'app/assignment/followup.html',
                    controller: 'FollowUpController',
                    controllerAs: 'followup'
                })
                .state('assignment.procedure', {
                    url: '/procedure/:requestId',
                    templateUrl: 'app/assignment/procedure.html',
                    controller: 'ProcedureController',
                    controllerAs: 'procedure'
                })
                .state('assignment.finished', {
                    url: '/finished',
                    templateUrl: 'app/assignment/assignment_finished.html'
                });

        $urlRouterProvider.otherwise('/assignment');
    }

})();
