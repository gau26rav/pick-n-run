(function () {
    angular.module('utilityModule')
        .factory('httpCartServices', ['$http', '$q', '$log', function ($http, $q, $log) {
            var path, header;

            var setPath = function (pathFromController) {
                path = pathFromController
            };

            var setHeader = function (headerFromController) {
                header = headerFromController;
            };
            var getData = function () {
                $log.debug('>> httpCartServices.getData()');
                var deferred = $q.defer();
                $http.get(path, header).then(function (response) {
                    deferred.resolve(response);
                }, function (exception) {
                    deferred.reject(exception.data);
                });
                $log.debug('>> httpCartServices.getData()');
                return deferred.promise;
            };

            var saveData = function(product){
            $log.debug("httpCartServices.saveData()");
            var deferred =$q.defer();
                $http.post(path, product, header).then(function(response){
                    deferred.resolve(response);
                }, function(exception){
                    deferred.reject(exception)
                })
              return deferred.promise;
            };

            return {
                setHeader: setHeader,
                setPath: setPath,
                getData: getData,
                saveData: saveData
            };

        }]);
})();

