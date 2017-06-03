angular.module('utilityModule',[])

.factory('dataStore',function(){
    var category = [
        {categoryId:1, categoryName:'Italian Cuisine'},
        {categoryId:2, categoryName:'Indian Cuisine'},
        {categoryId:3, categoryName:'Labnese Cuisine'},
        {categoryId:4, categoryName:'Thai Cuisine'},
        {categoryId:5, categoryName:'Chinese Cuisine'}
    ];
    return{
       getCategories : function() {
           return category;
       }
   }
});