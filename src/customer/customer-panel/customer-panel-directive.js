(function(){
    angular.module('customerPanel')
        .directive('customerPanelDirective',function(){
            return{
                restrict : 'E',
                templateUrl:'./src/customer/customer-panel/customer-panel.html',
                controller:'customerPanelController as customerCtrl'
            }
        });
})();