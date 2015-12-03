(function () {
    'use strict';

    angular
            .module('vpor')
            .factory('VPORDemographicsRequest', VPORDemographicsRequest);

    /** @ngInject */
    function VPORDemographicsRequest($resource) {
        return $resource('/api/vpor/demographics/:requestId/:action', {},{
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