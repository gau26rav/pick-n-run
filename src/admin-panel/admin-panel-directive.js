(function(){
    angular.module('adminPanel')
        .directive('adminPanelDirective',function(){
            return{
                restrict : 'E',
                templateUrl:'./src/admin-panel/admin-panel.html',
                controller:'adminPanelController as adminCtrl'
            }
        });
})();