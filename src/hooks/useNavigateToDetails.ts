import { useNavigate } from 'react-router-dom';
import { FavoriteRecipe } from '../types';

const useNavigateToDetails = () => {
  const navigate = useNavigate();

  const handleImageClick = (recipe: FavoriteRecipe) => {
    let path = '';

    if (recipe.type === 'meal') {
      path = `/meals/${recipe.id}`;
    }

    if (recipe.type === 'drink') {
      path = `/drinks/${recipe.id}`;
    }

    navigate(path);
  };
  return handleImageClick;
};

export default useNavigateToDetails;
