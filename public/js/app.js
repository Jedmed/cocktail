const app = angular.module('MyApp', []);

app.controller('MainController', ['$http', function($http) {
  // Controller Var
  const controller = this;

  this.indexOfEdit;
  this.user = "Cocktail";
  this.showLogin = false;
  this.loggedIn = false;
    this.cocktails = [];

  //Toggle Login
  this.toggleLogin = () => {
    this.showLogin = !this.showLogin;
  }

  this.toggleLogout = () => {
    this.loggedIn = !this.loggedIn;
  }

  // Build API Url
  this.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php/?'
  this.apikey = 'apikey=' + '1'
  this.query = 's='
  this.searchURL = this.baseURL + this.apikey + '&' + this.query

  // API Query
  this.getCocktails = () => {
    $http({
      method: 'GET',
      url: this.searchURL + this.cocktailName
    }).then(response => {
      this.cocktails = response.data.drinks;
    }, error => {
      console.log(error)
    }).catch(err => console.log('Catch: ', err))
  }

  // Create New User
  this.createUser = function() {
    $http({
      method: 'POST',
      url: '/users',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(function(response) {

    }, function() {
      console.log('error');
    });
  }

  // Log In
  this.logIn = function() {
    $http({
      method: 'POST',
      url: '/sessions',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(function(response) {
      controller.loggedInUsername = response.data.user;
      controller.user = "Logged In"
    }, function() {
      console.log('error');
    });
  }

  // Log Out
  this.logOut = function() {
    $http({
      method: 'DELETE',
      url: '/sessions',
    }).then(function(response) {
      console.log('logged out');
      controller.user = "Cocktail"
      controller.toggleLogin();
      controller.loggedIn = false;
    }, function() {
      console.log('error');
    })
  }

  // Save Cocktail
  this.addCocktail = function() {
    console.log(this);
    console.log(controller);
    $http({
      method: 'POST',
      url: '/cocktails',
      data: {
        name: this.cocktailName,
        img: this.cocktails.strDrinkThumb,
        instructions: this.instructions,
        ingredient1: this.ingredient1,
        ingredient2: this.ingredient2,
        ingredient3: this.ingredient3,
        ingredient4: this.ingredient4,
        ingredient5: this.ingredient5,
        ingredient6: this.ingredient6,
        ingredient7: this.ingredient7,
        ingredient8: this.ingredient8,
        measure1: this.measure1,
        measure2: this.measure2,
        measure3: this.measure3,
        measure4: this.measure4,
        measure5: this.measure5,
        measure6: this.measure6,
        measure7: this.measure7,
        measure8: this.measure8,
      }
    }).then(function(response) {
      controller.showCocktails();
    }, () => {
      console.log('error');
    });
  }

  // Show Cocktails
  this.showCocktails = function() {
    $http({
      method: 'GET',
      url: '/cocktails'
    }).then(function(response) {
      controller.myCocktails = response.data;
    }, () => {
      console.log('error');
    });
  };
  this.showCocktails();

}]); //Closes app controller
