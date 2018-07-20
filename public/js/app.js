const app = angular.module('MyApp', []);

app.controller('MainController', ['$http', function($http) {
  // controller var
  const controller = this;
  this.cocktailName = '';
  this.cocktails = [];

  this.test = "Hello!";

}]);
