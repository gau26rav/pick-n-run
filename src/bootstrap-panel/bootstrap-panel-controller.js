(function(){
    angular.module('bootstrapPanel',[])

        .controller('bootstrapPanelController',['$rootScope',function($rootScope){
            var self= this;

            self.showAdmin = false;

            self.projectName = $rootScope.config.COMPANY_NAME;

            /**
             * Manages the admin panel display on click of admin option in drop down.
             */
            self.showAdminPanel = function(){
                self.showCustomerComponent =false;
                self.showAdmin = !self.showAdmin;
            };

            self.showCustomerPanel =function(){
                self.showAdmin = false;
                self.showCustomerComponent = !self.showCustomerComponent ;
            };

        }]);
})();

