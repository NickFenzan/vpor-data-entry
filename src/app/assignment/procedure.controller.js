(function () {
    'use strict';

    angular
            .module('vpor')
            .controller('ProcedureController', ProcedureController);

    /** @ngInject */
    function ProcedureController($stateParams, VPORProcedureRequest, AssignmentRouter) {
        var vm = this;
        vm.complete = completeAndFinish;
        vm.completeAndNew = completeAndNew;
        vm.requestId = $stateParams.requestId;
        vm.request = VPORProcedureRequest.get({requestId: vm.requestId});
        vm.info = VPORProcedureRequest.form({requestId: vm.requestId});

        function complete(callback) {
            VPORProcedureRequest.complete({requestId: vm.requestId}, {}, callback);
        }

        function completeAndFinish() {
            complete(AssignmentRouter.goToSplash);
        }
        
        function completeAndNew() {
            complete(AssignmentRouter.goToNext);
        }

    }
})();
