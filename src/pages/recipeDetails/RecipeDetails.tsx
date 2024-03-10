import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { MealType } from '../../types';
import Recomendations from '../../components/recomendations/Recomendations';
import useFetchRecommendations from '../../hooks/useFetchRecommendation';
import useFetchDetails from '../../hooks/useFetchDetails';
import { Iframe, Img, ButtonFavShare } from './RecipeDetailsStyle';
import ButtonRecipe from '../../components/buttonRecipe/ButtonRecipe';
import shareIcon from '../../images/shareIcon.svg';
import whitheHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';
import '../../components/styles/recipeDetails.css';

function RecipeDetails() {
  const location = useLocation();
  const route = location.pathname.includes('meals') ? '/meals' : '/drinks';
  const { id } = useParams() as { id: string };
  useFetchRecommendations(route);
  const { recipe } = useFetchDetails(id, route);
  const [isCopied, setIsCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const doneRecipesJSON = localStorage.getItem('favoriteRecipes');
  const doneRecipes = doneRecipesJSON ? JSON.parse(doneRecipesJSON) : [];
  const findRecipes = doneRecipes.findIndex((recipes: any) => recipes.id === id);

  const handleShareClick = () => {
    const { origin, pathname } = window.location;
    const link = `${origin}${pathname}`;
    navigator.clipboard.writeText(link);
    setIsCopied(true);
  };

  const handleFavoriteClick = () => {
    if (doneRecipesJSON) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    const recipes = {
      id: recipe?.idMeal || recipe?.idDrink,
      type: route === '/meals' ? 'meal' : 'drink',
      nationality: recipe?.strArea || '',
      category: recipe?.strCategory || '',
      alcoholicOrNot: recipe?.strAlcoholic || '',
      name: recipe?.strMeal || recipe?.strDrink,
      image: recipe?.strMealThumb || recipe?.strDrinkThumb,
    };
    doneRecipes.push(recipes);
    setIsFavorite(!isFavorite);
    localStorage.setItem('favoriteRecipes', JSON.stringify(doneRecipes));
  };

  const handleUnFavClick = () => {
    if (findRecipes !== undefined) {
      doneRecipes.splice(findRecipes, 1);
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(doneRecipes));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="details">
      {recipe ? (
        <div>
          <h1
            data-testid="recipe-title"
            className="nameHead"
          >
            {recipe.strMeal || recipe.strDrink}
          </h1>
          <Img
            data-testid="recipe-photo"
            src={ recipe.strMealThumb || recipe.strDrinkThumb }
            alt="Recipe"
            className='imgss'
          />
          {recipe.strCategory && (
            <p data-testid="recipe-category" className='category'>
              {window.location.pathname.startsWith('/meals')
                ? `Category: ${recipe.strCategory}`
                : `Alcoholic: ${recipe.strAlcoholic}`}
            </p>
          )}
          <div className="ingre">
            <h2 className="header">Ingredients</h2>
            {Object.entries(recipe as MealType)
              .filter(([key, value]) => key.startsWith('strIngredient') && value)
              .map(([key, value], index) => {
                const measureKey = `strMeasure${key.slice(13)}` as keyof MealType;
                return (
                  <li
                    key={ key }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    {`${value} - ${recipe[measureKey]}`}
                  </li>
                );
              })}
          </div>
          <div className="instru">
            <h2 className="header">Instructions</h2>
            <p data-testid="instructions">{recipe.strInstructions}</p>
            {window.location.pathname.startsWith('/meals') && recipe.strYoutube && (
              <Iframe
                data-testid="video"
                width="560"
                height="315"
                src={ `https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}` }
                allowFullScreen
                title="Recipe Video"
                className="video"
              />
            )}
            <br />
            <ButtonFavShare
              data-testid="share-btn"
              onClick={ handleShareClick }
            >
              <img
                src={ shareIcon }
                alt="Ícone de Compartilhar"
              />
            </ButtonFavShare>
            {isCopied && (
              <div data-testid="share-message">
                Link copied!
              </div>
            )}
            {findRecipes !== -1 ? (
              <ButtonFavShare
                onClick={ handleUnFavClick }
                className="custom-button"
              >
                <img data-testid="favorite-btn" src={ blackHeart } alt="Desfavoritar" />
              </ButtonFavShare>
            ) : (
              <ButtonFavShare
                onClick={ handleFavoriteClick }
                className="custom-button"
              >
                <img data-testid="favorite-btn" src={ whitheHeart } alt="Favoritar" />
              </ButtonFavShare>
            )}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Recomendations
        route={ route }
      />
      <div className="iniciar">
        <ButtonRecipe
          id={ id }
          route={ route }
        />
      </div>
    </div>
  );
}

export default RecipeDetails;
