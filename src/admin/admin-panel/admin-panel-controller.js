(function(){
    angular.module('adminPanel',[])

        .controller('adminPanelController',['$rootScope','dataStore', function($rootScope, dataStore){
            var self= this;

            self.categories = dataStore.getCategories();

            self.errorMsgs ={
                itmRequired:'Item name cannot be left empty',
                costRange: 'Product cost must lie between 100 to 100000',
                descRequired:'Product must have description about it',
                quantityRestriction:'Products quantity must falls under the range of 1 to 10'
            };

            self.resetProduct =function (){
                self.newProduct ={
                    skuCode :'',
                    productName :'',
                    brand :'',
                    price :'',
                    totalQuantity : 1,
                    description:'',
                    productImage:'',
                    category: self.categories[0].categoryName
                };
            };

            self.increaseQuantity =function(){
                if(!self.newProduct.totalQuantity || self.newProduct.totalQuantity < 0){
                    self.newProduct.totalQuantity = 1 ;
                }
                self.newProduct.totalQuantity++ ;
            };

            self.decreaseQuantity =function(){
                self.newProduct.totalQuantity-- ;
            };

        }]);
})();

