(function(){
    angular.module('adminPanel',[])

        .controller('adminPanelController',['$rootScope','dataStore','httpCartServices','$log', function($rootScope, dataStore, httpCartServices, $log){
            var self= this;

            self.categories = dataStore.getCategories();

            self.errorMsgs ={
                itmRequired:'Product name cannot be left empty !!',
                priceRequired:'Product price cannot be left empty !!',
                costPattern: 'Please enter a valid cost !!',
                descRequired:'Product must have description about it !!',
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

            self.collapseExpandForm =function(){
                self.isAddFormCollapsed = !self.isAddFormCollapsed;
            }

            self.getProducts = function(){
                httpCartServices.setPath($rootScope.url.getProducts);
                httpCartServices.getData().then(function(response){
                    self.products = response.data;
                },function (exception) {
                    $log.error('Exception occured ---' , JSON.stringify(exception));
                })
            }

        }]);
})();

