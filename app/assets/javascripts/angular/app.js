var myApp = angular.module('myApp', ['ngRoute', 'templates']);

myApp.config(function($routeProvider) {
  $routeProvider
    // route for the about page
    .when('/', {
        templateUrl : 'home.html',
    })

    .when('/recipes', {
        templateUrl : 'recipes/index.html',
    })

    // route for the contact page
    .when('/help', {
        templateUrl : 'help.html',
        controller  : 'contactController'
    });
});

myApp.controller('MainController', ['$scope', function($scope) {
  this.greeting = 'Hola!';
}]);

myApp.controller('RecipeController', ['$scope', function($scope) {
  this.title = 'Recipes!'
}]);

myApp.controller('UserController', ['$scope', function($scope) {

}]);
