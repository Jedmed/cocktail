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
      // console.log(response.data)
      this.cocktails = response.data
    }, error => {
      console.log(error)
    }).catch(err => console.log('Catch: ', err))
  }

}]); //Closes app controller
