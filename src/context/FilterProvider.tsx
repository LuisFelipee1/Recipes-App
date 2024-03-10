import { useState } from 'react';
import FilterContext from './FilterContext';
import useFavoritesLocalStore from '../hooks/useFavoritesLocalStore';

type FilterProviderProps = {
  children: React.ReactNode,
};

function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState('all');
  const { favoritesRecipes, setFavoritesRecipes } = useFavoritesLocalStore();

  const handleFilterClick = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredFavorites = favoritesRecipes.filter((recipe) => {
    if (filter === 'meals') {
      return recipe.type === 'meal';
    }
    if (filter === 'drinks') {
      return recipe.type === 'drink';
    }
    return true;
  });

  const handleRemoveFavorite = (recipeId: string) => {
    const updatedFavorites = favoritesRecipes.filter((recipe) => recipe.id !== recipeId);
    setFavoritesRecipes(updatedFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
  };

  return (
    <FilterContext.Provider
      value={ {
        filter,
        setFilter,
        handleFilterClick,
        handleRemoveFavorite,
        filteredFavorites,
      } }
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
