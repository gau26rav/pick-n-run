(function(){
    angular.module('adminPanel')
        .directive('adminPanelDirective',function(){
            return{
                restrict : 'E',
                templateUrl:'./admin-panel/admin-panel.html',
                controller:'adminPanelController as adminCtrl'
            }
        });
})();