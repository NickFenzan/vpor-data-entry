(function () {
    'use strict';

    angular
            .module('vpor')
            .factory('VPORPatientRequest', VPORPatientRequest);

    /** @ngInject */
    function VPORPatientRequest($resource) {
        return $resource('/api/vpor/patient-request/:requestId/:action', {},{
                    complete: {
                        method: 'POST',
                        params: {action: 'complete'}
                    },
                    demographics: {
                        method: 'GET',
                        params: {action: 'demographics'}
                    }
                }
        );
    }

})();