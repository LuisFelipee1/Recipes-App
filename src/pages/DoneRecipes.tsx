import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import { DoneRecipe } from '../types';
import { useNavigate } from 'react-router-dom';
import '../components/styles/doneRecipes.css';
import Swal from 'sweetalert2'

export default function DoneRecipes() {
  const navigate = useNavigate();
  const [findBy, setFindBy] = useState('all');
  const [recipes, setRecipes] = useState<DoneRecipe[]>();

  useEffect(() => {
    const doneRecipesJSON = localStorage.getItem('doneRecipes');
    const doneRecipes = doneRecipesJSON ? JSON.parse(doneRecipesJSON) : [];
    const filterMeals = doneRecipes.filter((recipe: DoneRecipe) => recipe
      .type === 'meal');
    const filterDrinks = doneRecipes.filter((recipe: DoneRecipe) => recipe
      .type === 'drink');
    if (findBy === 'all') {
      setRecipes(doneRecipes);
    } else if (findBy === 'meal') {
      setRecipes(filterMeals);
    } else {
      setRecipes(filterDrinks);
    }
  }, [findBy]);
  
  function sweet() {
    return Swal.fire({
      title: "Link Copied!",
      icon: "success"
    })
  };

  const handleShareClick = () => {
    const { origin, pathname } = window.location;
    const link = `${origin}${pathname}`;
    navigator.clipboard.writeText(link);
    sweet();
  };

  return (
    <div>
      <Header />
      <div className='divBtn'>
        <button 
          onClick={ () => navigate('/meals') } 
          className='btn btn-outline-danger'
        >
          return to top
        </button>
      </div>
      <div className='divMealss'>
        <button
          data-testid="filter-by-all-btn"
          onClick={ () => setFindBy('all') }
          className='btn btn-outline-warning'
        >
          All
        </button>
        <button
          data-testid="filter-by-meal-btn"
          onClick={ () => setFindBy('meal') }
          className='btn btn-outline-warning'
        >
          Meals
        </button>
        <button
          data-testid="filter-by-drink-btn"
          onClick={ () => setFindBy('drink') }
          className='btn btn-outline-warning'
        >
          Drinks
        </button>

      </div>
      <div className='divInformations'>
        {recipes?.map((recipe: DoneRecipe, index) => (
          <div key={ recipe.name }>
            <NavLink to={ `http://localhost:3000/${recipe.type}s/${recipe.id}` }>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt="imagem da receita"
                height={ 150 }
                className='ImgRecipess'
              />
            </NavLink>
            <NavLink to={ `http://localhost:3000/${recipe.type}s/${recipe.id}` }>
              <p 
                data-testid={ `${index}-horizontal-name` }
                className='link-opacity-50-hover'
              >
                {recipe.name}
              </p>
            </NavLink>
            {recipe.type === 'meal' ? (
              <p data-testid={ `${index}-horizontal-top-text` } className='white'>
                {`${recipe.nationality} - ${recipe.category}`}
              </p>
            )
              : (
                <p 
                  data-testid={ `${index}-horizontal-top-text` } 
                  className='white'
                >
                  {`${recipe.alcoholicOrNot}`}
                </p>
              )}

            <p 
              data-testid={ `${index}-horizontal-done-date` }
              className='white'
            >
              {`${recipe.doneDate}`}
            </p>
            {recipe.tags.map((tag:string) => (
              <p 
                key={ tag } 
                data-testid={ `${index}-${tag}-horizontal-tag` }
                className='white'
              >
                {tag}
              </p>
            ))}
            <button 
              onClick={ () => handleShareClick() }
              className='sharedon'
            >
              Compartilhar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
