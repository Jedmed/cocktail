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
  this.addCocktail = function(index) {
    console.log(this);
    $http({
      method: 'POST',
      url: '/cocktails',
      data: {
        name: this.cocktails[index].strDrink,
        instructions: this.cocktails[index].strInstructions,
        img: this.cocktails[index].strDrinkThumb,
        ingredient1: this.cocktails[index].strIngredient1,
        ingredient2: this.cocktails[index].strIngredient2,
        ingredient3: this.cocktails[index].strIngredient3,
        ingredient4: this.cocktails[index].strIngredient4,
        ingredient5: this.cocktails[index].strIngredient5,
        ingredient6: this.cocktails[index].strIngredient6,
        ingredient7: this.cocktails[index].strIngredient7,
        ingredient8: this.cocktails[index].strIngredient8,
        measure1: this.cocktails[index].strMeasure1,
        measure2: this.cocktails[index].strMeasure2,
        measure3: this.cocktails[index].strMeasure3,
        measure4: this.cocktails[index].strMeasure4,
        measure5: this.cocktails[index].strMeasure5,
        measure6: this.cocktails[index].strMeasure6,
        measure7: this.cocktails[index].strMeasure7,
        measure8: this.cocktails[index].strMeasure8
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

  // DELETE COCKTAIL //
  this.deleteCocktail = function(cocktail) {
    console.log('deleted on refresh');
    $http({
      method: "DELETE",
      url: "/cocktails/" + cocktail._id
    }).then(function(response) {
      controller.getCocktails();
    });
  }





}]); //Closes app controller
