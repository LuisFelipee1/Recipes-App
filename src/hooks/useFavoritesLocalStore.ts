import { useEffect, useState } from 'react';
import { FavoriteRecipe } from '../types';

const useFavoritesLocalStore = () => {
  const [favoritesRecipes, setFavoritesRecipes] = useState<FavoriteRecipe[]>([]);
  const storedData = localStorage.getItem('favoriteRecipes');

  useEffect(() => {
    const favorites: FavoriteRecipe[] = storedData ? JSON.parse(storedData) : [];
    setFavoritesRecipes(favorites);
  }, [storedData]);

  return {
    favoritesRecipes,
    setFavoritesRecipes,
  };
};

export default useFavoritesLocalStore;
