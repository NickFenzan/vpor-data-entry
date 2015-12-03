(function () {
    'use strict';

    angular
            .module('vpor')
            .factory('VPORAssignmentRequest', VPORAssignmentRequest);

    /** @ngInject */
    function VPORAssignmentRequest($resource) {
        return $resource('/api/vpor/assignment-request', {},{
                    request: {
                        method: 'POST'
                    }
                }
        );
    }

})();