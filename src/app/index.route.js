(function () {
    'use strict';

    angular
            .module('vpor')
            .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
                .state('patient_demographics', {
                    abstract: true,
                    url: '/patient-demographics',
                    templateUrl: 'app/patient_demographics/patient_demographics_root.html',
                    controller: 'PatientDemographicsRootController',
                    controllerAs: 'pat_demo_root'
                })
                .state('patient_demographics.splash', {
                    url: '',
                    templateUrl: 'app/patient_demographics/patient_demographics_splash.html'
                })
                .state('patient_demographics.job_finished', {
                    url: '/job-finished',
                    templateUrl: 'app/patient_demographics/patient_demographics_job_finished.html'
                })
                .state('patient_demographics.info', {
                    url: '/request/:requestId',
                    templateUrl: 'app/patient_demographics/patient_demographics_info.html',
                    controller: 'PatientDemographicsInfoController',
                    controllerAs: 'pat_demo_info'
                });

        $urlRouterProvider.otherwise('/patient-demographics');
    }

})();
