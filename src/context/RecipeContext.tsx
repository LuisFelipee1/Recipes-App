import React, { createContext, useState } from 'react';
import { Drink, Meal } from '../types';

type ContextType = {
  recipes: Meal[] | Drink[];
  setRecipes: React.Dispatch<React.SetStateAction<Meal[] | Drink[]>>;
};

export const RecipeContext = createContext({} as ContextType);

export function RecipeProvider({ children }: React.PropsWithChildren) {
  const [recipes, setRecipes] = useState<Meal[] | Drink[]>([]);

  return (
    <RecipeContext.Provider value={ { recipes, setRecipes } }>
      {children}
    </RecipeContext.Provider>
  );
}
