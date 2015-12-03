(function () {
    'use strict';

    angular
            .module('vpor')
            .factory('VPORFollowUpRequest', VPORFollowUpRequest);

    /** @ngInject */
    function VPORFollowUpRequest($resource) {
        return $resource('/api/vpor/follow-up/:requestId/:action', {},{
                    form: {
                        method: 'GET',
                        params: {action: 'form'}
                    },
                    complete: {
                        method: 'POST',
                        params: {action: 'complete'}
                    }
                }
        );
    }

})();