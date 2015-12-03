(function () {
    'use strict';

    angular
            .module('vpor')
            .factory('CopyToClipboard', CopyToClipboard);

    /** @ngInject */
    function CopyToClipboard($document) {
        return function(element){
            var $temp = angular.element("<input>");
            angular.element("body").append($temp);
            $temp.val(angular.element(element).text()).select();
            $document[0].execCommand("copy");
            $temp.remove();
        };
    }

})();