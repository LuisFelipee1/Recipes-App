import MealsInProgress from '../components/MealsInProgress';
import DrinksInProgress from '../components/DrinksInProgress';

function RecipeInProgress() {
  const route = window.location.pathname.includes('meals');
  return (
    <div>
      { route ? <MealsInProgress /> : <DrinksInProgress /> }
    </div>
  );
}

export default RecipeInProgress;
