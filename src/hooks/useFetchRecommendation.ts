import { useEffect, useState } from 'react';
import { Drink, DrinksList, Meal, MealsList } from '../types';

const API_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const API_MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const useFetchRecommendations = (route: string) => {
  const [loading, setLoading] = useState(false);
  const [recommendations,
    setRecommendations] = useState<{ drinks: Drink[]; meals: Meal[] }>({
    drinks: [],
    meals: [],
  });

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        if (route === '/drinks') {
          const response = await fetch(API_MEALS);
          const data: MealsList = await response.json();
          setRecommendations({ ...recommendations, meals: data.meals });
        }
        if (route === '/meals') {
          const response = await fetch(API_DRINKS);
          const data: DrinksList = await response.json();
          setRecommendations({ ...recommendations, drinks: data.drinks });
        }
      } catch (error: any) {
        console.log(`Request error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    })();
  }, [route]);

  return {
    loading,
    recommendations,
  };
};

export default useFetchRecommendations;
