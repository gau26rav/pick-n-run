angular.module('mainShoppingModule',[
    'adminPanel',
    'bootstrapPanel',
    'utilityModule'
])

.constant('SHOPPING_CONSTANTS',{
  'ADMIN_HEADER':'Welcome to admin Panel',
   'COMPANY_NAME': 'Pick and Run'
})

.run(function($rootScope, SHOPPING_CONSTANTS){
    $rootScope.config = SHOPPING_CONSTANTS;
});

angular.element(document).ready(function(){
   angular.bootstrap($('#main-panel'),['mainShoppingModule']);
});