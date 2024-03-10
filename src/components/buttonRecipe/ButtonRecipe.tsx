import { useNavigate } from 'react-router-dom';
import { DoneRecipe } from '../../types';
import { ConteinerButton, Button } from './ButtonRecipeStyle';

type ButtonStartRecipeProps = {
  id: string,
  route: string,
};

function ButtonRecipe({ id, route }: ButtonStartRecipeProps) {
  const navigate = useNavigate();
  const doneRecipesJSON = localStorage.getItem('doneRecipes');
  const doneRecipes = doneRecipesJSON ? JSON.parse(doneRecipesJSON) : [];
  const findRecipes = doneRecipes.find((recipes: DoneRecipe) => recipes.id === id);
  const inProgressRecipesJSON = localStorage.getItem('inProgressRecipes');
  const inProgressRecipes = inProgressRecipesJSON
    ? JSON.parse(inProgressRecipesJSON)
    : {};
  const isRecipeInProgress = inProgressRecipes[route.slice(1)]
    && inProgressRecipes[route.slice(1)][id];

  const handleClick = () => {
    navigate(`${route}/${id}/in-progress`);
  };
  return (
    <ConteinerButton>
      {!findRecipes && (
        <Button
          data-testid="start-recipe-btn"
          onClick={ handleClick }
        >
          {isRecipeInProgress ? 'Continue Recipe' : 'Start Recipe'}
        </Button>
      )}
    </ConteinerButton>
  );
}

export default ButtonRecipe;
