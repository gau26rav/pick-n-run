(function(){
    angular.module('bootstrapPanel')
        .directive('bootstrapPanelDirective',function(){
            return{
                restrict : 'E',
                templateUrl:'./src/bootstrap-panel/bootstrap-panel.html',
                controller:'bootstrapPanelController as bootstrapCtrl'
            }
        });
})();