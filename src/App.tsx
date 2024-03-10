import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import { Login, Meals, Drinks, Profile, FavoriteRecipes, RecipeDetails, DoneRecipes,
  RecipeInProgress, Footer } from './index';

function App() {
  return (
    <RecipeProvider>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route element={ <Footer /> }>
          <Route path="/meals" element={ <Meals /> } />
          <Route path="/drinks" element={ <Drinks /> } />
          <Route path="/profile" element={ <Profile /> } />
        </Route>
        <Route path="/meals/:id" element={ <RecipeDetails /> } />
        <Route path="/drinks/:id" element={ <RecipeDetails /> } />
        <Route path="/done-recipes" element={ <DoneRecipes /> } />
        <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />
        <Route path="/meals/:id/in-progress" element={ <RecipeInProgress /> } />
        <Route path="/drinks/:id/in-progress" element={ <RecipeInProgress /> } />
      </Routes>
    </RecipeProvider>
  );
}

export default App;