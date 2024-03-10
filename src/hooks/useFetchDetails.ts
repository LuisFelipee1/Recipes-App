import { useEffect, useState } from 'react';
import { MealType } from '../types';

const mealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const useFetchDetails = (recipeId: string, route: string) => {
  const [recipe, setRecipe] = useState<MealType | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      let response;

      if (route.startsWith('/meals')) {
        response = await fetch(`${mealUrl}${recipeId}`);
      } else if (route.startsWith('/drinks')) {
        response = await fetch(`${drinkUrl}${recipeId}`);
      }

      if (response && response.ok) {
        const data = await response.json();
        setRecipe(data.meals ? data.meals[0] : data.drinks[0]);
      }
    };
    fetchRecipe();
  }, [route, recipeId]);

  return {
    recipe,
  };
};

export default useFetchDetails;
