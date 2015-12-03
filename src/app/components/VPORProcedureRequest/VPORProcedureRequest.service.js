(function () {
    'use strict';

    angular
            .module('vpor')
            .factory('VPORProcedureRequest', VPORProcedureRequest);

    /** @ngInject */
    function VPORProcedureRequest($resource) {
        return $resource('/api/vpor/procedure/:requestId/:action', {},{
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