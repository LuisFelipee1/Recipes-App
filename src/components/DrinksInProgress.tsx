import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { drinksInProgress } from '../utils/apiRecipes';
import blackHeart from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import { FavoriteRecipe } from '../types';
import './styles/drinkInProgress.css'
import Swal from 'sweetalert2'

function DrinksInProgress() {
  const navigate = useNavigate();
  const params = useParams() as { id: string };
  const [drinksFilter, setDrinksFilter] = useState<any>('');
  const [checkboxStates, setCheckboxStates] = useState<any>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const request = async () => {
      setDrinksFilter(await drinksInProgress(params));
    };
    request();
    const inProgressRecipes = JSON.parse(
      localStorage.getItem('inProgressRecipes') || '{}',
    );
    if (inProgressRecipes[params.id]) {
      const savedCheckboxStates = inProgressRecipes[params.id];
      setCheckboxStates(savedCheckboxStates);
      setStates(savedCheckboxStates.filter(Boolean).length);
    }
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    const isFav = favorites.some((recipe: FavoriteRecipe) => recipe.id === params.id);
    setIsFavorite(isFav);
  }, [params]);

  const ingredientsCount: any = Object.keys(drinksFilter).filter(
    (key) => drinksFilter[key] !== null
        && drinksFilter[key] !== ''
        && key.startsWith('strIngredient'),
  ).map((key) => drinksFilter[key]);

  let aux = false;

  const [states, setStates] = useState(0);
  if (states === ingredientsCount.length) {
    aux = true;
  }

  const handleCheckboxChange = (index: number) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setStates((prevState) => {
      if (newCheckboxStates[index]) {
        return prevState + 1;
      }
      return prevState - 1;
    });
    setCheckboxStates(newCheckboxStates);
    const inProgressRecipes = JSON.parse(
      localStorage.getItem('inProgressRecipes') || '{}',
    );
    inProgressRecipes[params.id] = newCheckboxStates;
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  };

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');

    const recipeDetails = {
      id: params.id,
      type: 'drink',
      nationality: '',
      category: drinksFilter.strCategory,
      alcoholicOrNot: 'Alcoholic',
      name: drinksFilter.strDrink,
      image: drinksFilter.strDrinkThumb,
    };

    if (isFavorite) {
      const updatedFavorites = favorites
        .filter((recipe: FavoriteRecipe) => recipe.id !== recipeDetails.id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, recipeDetails];
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
    }

    setIsFavorite((prevState) => !prevState);
  };

  function sweet() {
    return Swal.fire({
      title: "Link Copied!",
      icon: "success"
    })
  };

  const copyLinkToClipboard = () => {
    const recipeLink = `${window.location.origin}/drinks/${params.id}`;
    navigator.clipboard.writeText(recipeLink);
    sweet();
  };

  const handeSetLocalStorage = () => {
    const doneRecipes = [{
      id: params.id,
      type: 'drink',
      nationality: '',
      category: drinksFilter.strCategory,
      alcoholicOrNot: 'Alcoholic',
      name: drinksFilter.strDrink,
      image: drinksFilter.strDrinkThumb,
      doneDate: new Date().toISOString(),
      tags: drinksFilter.strTags ? drinksFilter.strTags.split(',') : [],
    }];

    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    navigate('/done-recipes');
  };
  

  return (
    <div>
      <h1
        data-testid="recipe-title"
        className='nameDrink'
      >
        { drinksFilter.strDrink }
      </h1>
      <div className='cardImg'>
        <div className='divImg'>
          <img
            src={ drinksFilter.strDrinkThumb }
            alt={ drinksFilter.strDrink }
            data-testid="recipe-photo"
            className='imageDrink'
          />
        </div>
        <div className='btnss'>
        <p
          data-testid="recipe-category"
          className='alcolic'
        >
          {`Category: ${ drinksFilter.strAlcoholic }`}
        </p>
          <button
            data-testid="share-btn"
            onClick={ copyLinkToClipboard }
            className='share'
          >
            Compartilhar
          </button>
          
          <button
            onClick={ handleFavorite }
            className='favorite'
          >
            <img
              data-testid="favorite-btn"
              src={ isFavorite ? blackHeart : whiteHeart }
              alt="Fav/Unfav"
            />
          </button>
        </div>
      </div>
        <div className='ingred'>
          <div className='principalIngre'>
            <h2 className='ingreName'>Ingredients</h2>
            {ingredientsCount.map((ingre: any, index: any) => (
              <div key={ ingre } className='inputsCheck'>
                <br />
                <label
                  data-testid={ `${index}-ingredient-step` }
                  style={
                        checkboxStates[index]
                          ? { textDecoration: 'line-through solid black' }
                          : {}
                      }
                >
                  <input
                    type="checkbox"
                    name={ ingredientsCount }
                    checked={ checkboxStates[index] }
                    onChange={ () => handleCheckboxChange(index) }
                  />
                  { ingre }
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className='instruc'>
          <h2>Instructions</h2>
          <p
            data-testid="instructions"
          >
            { drinksFilter.strInstructions }
          </p>
          <button
            data-testid="finish-recipe-btn"
            onClick={ () => handeSetLocalStorage() }
            disabled={ !aux } className='btnFinish'
          >
            Finish Recipes
          </button>
        </div>
    </div>
  );
}

export default DrinksInProgress;
