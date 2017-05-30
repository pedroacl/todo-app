var myApp = angular.module('myApp', ['ngRoute', 'templates']);

myApp.config(function($routeProvider) {
  $routeProvider
    // route for the about page
    .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController as homeController'
    })

    .when('/recipes', {
        templateUrl: 'recipes/index.html',
        controller: 'RecipesController as recipesController'
    })

    .when('/recipes/:id', {
        templateUrl: 'recipes/show.html',
        controller: 'RecipesController as recipesController'
    })
});

myApp.controller('MainController', [function() {
  this.greeting = 'Hola!';
}]);

// Recipes Controller
myApp.controller('RecipesController', ['$http', 'RecipeService', function($http, RecipeService) {
  this.title = 'Recipes!';

  this.recipes = RecipeService.getAll().then(function(response) {
    console.log(response);
  });
}]);

// Recipe Service
myApp.service('RecipeService', ['$http', function($http) {
  return {
    getAll: function() {
      var promise = $http({
        method: 'GET',
        url: '/recipes',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        return response;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

      return promise;
    }
  }
}]);

// Users Controller
myApp.controller('UserController', [function() {

}]);
