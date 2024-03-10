import swal from 'sweetalert';
import { FavoriteRecipe } from '../types';

const handleCopyToClipBoard = (recipe: FavoriteRecipe) => {
  const { origin } = window.location;
  let URL = '';

  if (recipe.type === 'meal') {
    URL = `${origin}/meals/${recipe.id}`;
    navigator.clipboard.writeText(URL);
  }

  if (recipe.type === 'drink') {
    URL = `${origin}/drinks/${recipe.id}`;
    navigator.clipboard.writeText(URL);
  }
  swal('Link copied!', '', 'success');
};

export default handleCopyToClipBoard;
