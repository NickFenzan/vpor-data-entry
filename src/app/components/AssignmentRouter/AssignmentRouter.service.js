(function () {
    'use strict';

    angular
            .module('vpor')
            .factory('AssignmentRouter', AssignmentRouter);

    /** @ngInject */
    function AssignmentRouter($state, $log, VPORAssignmentRequest) {
        return {
            goToNext: goToNext,
            goToSplash: goToSplash
        };
        
        function goToSplash(){
            $state.go('assignment.finished');
        }
        
        function goToNext(){
            VPORAssignmentRequest.request(goToNextCallback);
        }
        
        function goToNextCallback(requestData){
            if (typeof requestData.type === 'undefined') {
                    $state.go('assignment.finished');
                } else {
                    switch(requestData.type){
                        case 'demographics':
                        $log.debug('demographics');
                        $state.go('assignment.demographics', {requestId: requestData.tracking.id});
                        break;
                        case 'followup':
                        $log.debug('followup');
                        $state.go('assignment.followup', {requestId: requestData.tracking.id});
                        break;
                        case 'procedure':
                        $log.debug('procedure');
                        $state.go('assignment.procedure', {requestId: requestData.tracking.id});
                        break;
                    }
                }
        }
    }

})();