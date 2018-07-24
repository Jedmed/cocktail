const app = angular.module('MyApp', []);

app.controller('MainController', ['$http', function($http) {
  // Controller Var
  const controller = this;

  this.indexOfEdit;
  this.user = "Cocktail";
  // this.showLogin = false;
  // this.loggedIn = false;
  this.cocktails = [];
  this.showMyCocktails = false;

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
  this.createUser = () => {
    $http({
      method: 'POST',
      url: '/users',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(response => {
      this.currentUser = response.data;
      this.myCocktail;
      this.user = "Logged In";
      this.showMyCocktails = true;
      this.showCocktails();
    }, error => {
      console.log('error');
    });
  }

  // Log In
  this.logIn = () => {
    $http({
      method: 'POST',
      url: '/sessions',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(response => {
      this.currentUser = response.data;
      this.user = "Logged In";
      this.showMyCocktails = true;
      this.showCocktails();
    }, error => {
      console.log('error');
    });
  }

  // Log Out
  this.logOut = () => {
    $http({
      method: 'DELETE',
      url: '/sessions',
    }).then(response => {
      this.currentUser = null;
      this.user = "Cocktail"
      this.toggleLogin();
      this.loggedIn = false;
      this.showMyCocktails = false;
    }, () => {
      console.log('error');
    })
  }

  // Save Cocktail
  this.addCocktail = (index) => {
    // console.log(this.cocktails[index].idDrink);
    $http({
      method: 'POST',
      url: '/cocktails',
      data: {
        user: this.currentUser.username,
        cocktail: [{
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
        }]
      }
    }).then(response => {
      this.myCocktails = response.data
    }, () => {
      console.log('error');
    });
  }

  // Show Cocktails
  this.showCocktails = () => {
    $http({
      method: 'GET',
      url: '/cocktails/' + this.currentUser.username
    }).then(response => {
      this.myCocktails = response.data[0]
    }, () => {
      console.log('error');
    });
  };


  // DELETE COCKTAIL //
  this.deleteCocktail = (cocktail) => {
    this.myCocktails.cocktail.splice(this.myCocktails.cocktail.indexOf(cocktail), 1);
    $http({
      method: 'PUT',
      url: '/cocktails/' + this.myCocktails._id,
      data: this.myCocktails
    }).then(response => {
      this.showCocktails();
    }, error => {
      console.log('error');
    });
  }




}]); //Closes app controller
