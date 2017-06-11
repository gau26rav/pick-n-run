angular.module('mainShoppingModule',[
    'adminPanel',
    'customerPanel',
    'bootstrapPanel',
    'utilityModule'
])

.constant('SHOPPING_CONSTANTS',{
  'ADMIN_HEADER':'Welcome to admin Panel',
   'COMPANY_NAME': 'Pick and Run'
})

.constant('URL',{
    getProducts:'http://localhost:3000/getProducts'
})


.run(function($rootScope, SHOPPING_CONSTANTS, URL){
    $rootScope.config = SHOPPING_CONSTANTS;
    $rootScope.url = URL ;
});

angular.element(document).ready(function(){
   angular.bootstrap($('#main-panel'),['mainShoppingModule']);
});