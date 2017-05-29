var myApp = angular.module('myApp',[]);

myApp.controller('MainController', ['$scope', function($scope) {
  this.greeting = 'Hola!';
}]);

myApp.controller('RecipeController', ['$scope', function($scope) {
  this.title = 'Recipes!'
}]);

myApp.controller('UserController', ['$scope', function($scope)) {

}]);
