const app = angular.module('MyApp', []);

app.controller('MainController', ['$http', function($http) {
  // controller var
  const controller = this;
  // empty string for cocktail name
  this.cocktailName = '';

  this.test = "Hello!";

}]);
