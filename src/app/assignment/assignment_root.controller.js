(function () {
    'use strict';

    angular
            .module('vpor')
            .controller('AssignmentRootController', AssignmentRootController);

    /** @ngInject */
    function AssignmentRootController($state, $log, AssignmentRouter, CopyToClipboard) {
        var vm = this;
        vm.requestNewAssignment = AssignmentRouter.goToNext;
        vm.copyToClipboard = CopyToClipboard;
        vm.testFn = function(){
            $log.info('This is a test.');
        };
    }
})();