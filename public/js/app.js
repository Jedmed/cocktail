const app = angular.module('MyApp', []);

app.controller('MainController', ['$http', function($http) {
  // controller var
  const controller = this;
  this.cocktailName = '';
  this.cocktails = [];

  this.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php/?'
  this.apikey = 'apikey=' + '1'
  this.query = 's='
  this.searchURL = this.baseURL + this.apikey + '&' + this.query
  console.log(this.searchURL);

  this.getCocktails = () => {
    $http({
      method: 'GET',
      url: this.searchURL + this.cocktailName
    }).then(response => {
    	// controller.cocktails = response.data;
      this.cocktails = response.data.drinks;
      this.name = response.data.drinks[0].strDrink;
      this.instructions = response.data.drinks[0].strInstructions;
      this.img = response.data.drinks[0].strDrinkThumb;
      this.ingredient1 = response.data.drinks[0].strIngredient1;
      this.ingredient2 = response.data.drinks[0].strIngredient2;
      this.ingredient3 = response.data.drinks[0].strIngredient3;
      this.ingredient4 = response.data.drinks[0].strIngredient4;
      this.ingredient5 = response.data.drinks[0].strIngredient5;
      this.ingredient6 = response.data.drinks[0].strIngredient6;
      this.ingredient7 = response.data.drinks[0].strIngredient7;
      this.ingredient8 = response.data.drinks[0].strIngredient8;
      this.measure1 = response.data.drinks[0].strMeasure1;
      this.measure2 = response.data.drinks[0].strMeasure2;
      this.measure3 = response.data.drinks[0].strMeasure3;
      this.measure4 = response.data.drinks[0].strMeasure4;
      this.measure5 = response.data.drinks[0].strMeasure5;
      this.measure6 = response.data.drinks[0].strMeasure6;
      this.measure7 = response.data.drinks[0].strMeasure7;
      this.measure8 = response.data.drinks[0].strMeasure8;
      console.log(response.data.drinks)
      console.log(response.data.drinks[0])
    }, error => {
      console.log(error)
    }).catch(err => console.log('Catch: ', err))
  }

}]); //Closes app controller
