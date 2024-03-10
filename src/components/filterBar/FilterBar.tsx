import { useContext } from 'react';
import ButtonFavoriteRecipes from '../buttonFavoriteRecipes/ButtonFavoriteRecipes';
import iconAllFoods from '../../images/iconAllFoods.svg';
import incoMeals from '../../images/iconMeals.svg';
import incoDrinks from '../../images/iconDrinks.svg';
import iconFavorite from '../../images/iconFavorite.svg';
import { Title, Contaiber } from './FilterBarStyle';
import FilterContext from '../../context/FilterContext';

function FilterBar() {
  const { handleFilterClick } = useContext(FilterContext);
  return (
    <>
      <Title>
        <img src={ iconFavorite } alt="Favorite" />
        <h1
          data-testid="page-title"
        >
          Favorite Recipes
        </h1>
      </Title>
      <Contaiber>
        <ButtonFavoriteRecipes
          onClick={ () => handleFilterClick('all') }
          datatestid="filter-by-all-btn"
          imgSrc={ iconAllFoods }
          altText="AllFoods"
          buttonText="All foods"
        />
        <ButtonFavoriteRecipes
          onClick={ () => handleFilterClick('meals') }
          datatestid="filter-by-meal-btn"
          imgSrc={ incoMeals }
          altText="Only foods"
          buttonText="Meals"
        />
        <ButtonFavoriteRecipes
          onClick={ () => handleFilterClick('drinks') }
          datatestid="filter-by-drink-btn"
          imgSrc={ incoDrinks }
          altText="Only foods"
          buttonText="Drinks"
        />
      </Contaiber>
    </>
  );
}

export default FilterBar;
