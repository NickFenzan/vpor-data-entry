(function () {
    'use strict';

    angular
            .module('vpor')
            .controller('FollowUpController', FollowUpController);

    /** @ngInject */
    function FollowUpController($stateParams, VPORFollowUpRequest, AssignmentRouter) {
        var vm = this;
        vm.complete = completeAndFinish;
        vm.completeAndNew = completeAndNew;
        vm.requestId = $stateParams.requestId;
        vm.request = VPORFollowUpRequest.get({requestId: vm.requestId});
        vm.info = VPORFollowUpRequest.form({requestId: vm.requestId});

        function complete(callback) {
            VPORFollowUpRequest.complete({requestId: vm.requestId}, {}, callback);
        }

        function completeAndFinish() {
            complete(AssignmentRouter.goToSplash);
        }
        
        function completeAndNew() {
            complete(AssignmentRouter.goToNext);
        }

    }
})();
