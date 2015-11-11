(function () {
    'use strict';

    angular
            .module('vpor')
            .controller('PatientDemographicsRootController', PatientDemographicsRootController);

    /** @ngInject */
    function PatientDemographicsRootController($state, VPORPatientRequest) {
        var vm = this;
        vm.requestNewPatient = requestNewPatient;

        function requestNewPatient() {
            vm.requestData = VPORPatientRequest.save(function () {
                if (typeof vm.requestData.id === 'undefined') {
                    $state.go('patient_demographics.job_finished');
                } else {
                    $state.go('patient_demographics.info', {requestId: vm.requestData.id});
                }
            });

        }
    }
})();