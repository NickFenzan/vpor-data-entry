(function () {
    'use strict';

    angular
            .module('vpor')
            .controller('PatientDemographicsInfoController', PatientDemographicsInfoController);

    /** @ngInject */
    function PatientDemographicsInfoController($state, $stateParams, $document, VPORPatientRequest) {
        var vm = this;
        vm.copyToClipboard = copyToClipboard;
        vm.complete = completeAndFinish;
        vm.completeAndRequestNew = completeAndRequestNew;
        getInfo($stateParams.requestId);
        getJQuerySource();

        function getInfo(requestId) {
            vm.info = VPORPatientRequest.demographics({requestId: requestId}, function () {
                vm.requestId = requestId;
                buildInsuranceObject();
            });
        }

        function copyToClipboard(element) {
            var $temp = angular.element("<input>");
            angular.element("body").append($temp);
            $temp.val(angular.element(element).text()).select();
            $document[0].execCommand("copy");
            $temp.remove();
        }

        function getJQuerySource() {
            angular.element.get('/library/js/jquery/current.js', function (data) {
                vm.jquery = data;
            });
        }

        function buildInsuranceObject() {
            vm.insurance = {
                private: (vm.info.insurancePayer === 'Private Health Insurance'),
                outOfPocket: (vm.info.insurancePayer === 'Out of Pocket'),
                military: (vm.info.insurancePayer === 'Military Health Insurance'),
                medicaid: (vm.info.insurancePayer === 'Medicaid'),
                medicare: (vm.info.insurancePayer === 'Medicare (fee for service)')
            };
        }

        function complete(callback) {
            VPORPatientRequest.complete({requestId: vm.requestId}, {}, callback);
        }

        function completeAndFinish() {
            complete(function(){
                $state.go('patient_demographics.splash');
            });
        }

        function completeAndRequestNew() {
            complete(function () {
                var request = VPORPatientRequest.save(function () {
                    if(typeof request.id === 'undefined'){
                        $state.go('patient_demographics.job_finished');
                    }else{
                        $state.go('patient_demographics.info', {requestId: request.id});
                    }
                });
            });
        }

    }
})();
