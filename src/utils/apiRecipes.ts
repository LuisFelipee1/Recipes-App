export async function mealsRequest() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  const filterData = data.meals;
  console.log(filterData[0]);
  return filterData;
}
export async function categoryMeals() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const data = await response.json();
  const filterData = data.meals;
  return filterData;
}
export async function requestAPImeals(categorie: any) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`);
  const data = await response.json();
  const filterData = data.meals.slice(0, 12);
  return filterData;
}

export async function apiFilterDrinks(categorie: string) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categorie}`);
  const data = await response.json();
  const filterData = data.drinks;
  return filterData;
}

export async function requestApiCategory() {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(URL);
  const data = await response.json();
  const filterData = data.drinks;
  return filterData;
}

export async function drinksRequest() {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(URL);
  const data = await response.json();
  const filterData = data.drinks;
  return filterData;
}

export async function mealsInProgress(params: any) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
  const data = await response.json();
  const filterData = data.meals[0];
  return filterData;
}
export async function drinksInProgress(params: any) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`);
  const data = await response.json();
  const filterData = data.drinks[0];
  console.log(filterData);
  return filterData;
}
