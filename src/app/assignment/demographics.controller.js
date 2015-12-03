(function () {
    'use strict';

    angular
            .module('vpor')
            .controller('DemographicsController', DemographicsController);

    /** @ngInject */
    function DemographicsController($stateParams, VPORDemographicsRequest, AssignmentRouter) {
        var vm = this;
        vm.complete = completeAndFinish;
        vm.completeAndNew = completeAndNew;
        getInfo($stateParams.requestId);

        function getInfo(requestId) {
            vm.info = VPORDemographicsRequest.form({requestId: requestId}, function () {
                vm.requestId = requestId;
                buildInsuranceObject();
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
            VPORDemographicsRequest.complete({requestId: vm.requestId}, {}, callback);
        }

        function completeAndFinish() {
            complete(AssignmentRouter.goToSplash);
        }
        
        function completeAndNew() {
            complete(AssignmentRouter.goToNext);
        }

    }
})();
